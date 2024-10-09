import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Alert, Button, Form, Label, NumericInput, Row } from 'jimu-ui'

/** -------------------- */
/** ArcGIS libraries */
import ElevationLayer from '@arcgis/core/layers/ElevationLayer'
import Graphic from '@arcgis/core/Graphic'
import { Point, Polyline, SpatialReference } from '@arcgis/core/geometry'
/** -------------------- */

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>();
  const [errorViewType, setErrorViewType] = useState<boolean>(false);

  const [latitude, setLatitude] = useState<number>(29.177);
  const [longitude, setLongitude] = useState<number>(-81.065);
  
  const handleClick = useRef<__esri.Handle>();
  const sceneView = useRef<__esri.SceneView>();

  useEffect(() => {
    if(!props.useMapWidgetIds?.length || !jimuMapView || jimuMapView?.view?.type == "2d") {
      setErrorViewType(true);

      // Configuration EXB mode control
      if(handleClick.current){
        handleClick.current.remove();
      }

      return;
    };

    setErrorViewType(false);

    let view = jimuMapView.view;
    sceneView.current = jimuMapView.view;

    // Wait for the view to load and then set the camera
    view.when(() => {
      // Cast map to webscene
      let map = view.map as __esri.WebScene;
      
      // Center the map to the scene's initial camera position
      const initialCamera = map.initialViewProperties.viewpoint.camera;
      view.camera = initialCamera;

      handleClick.current = view.on("click", async (event) => {
        // Return if diferent to right click
        if(event.button != 2) return;

        const position = event.mapPoint;
        addPoint(position);
      });
    });
  }, [jimuMapView, props.useMapWidgetIds])

  const addPoint = async (pointPosition: __esri.Point) => {
    // Ensure the mapPoint has a spatial reference
    if (!pointPosition?.spatialReference) {
      pointPosition.spatialReference = sceneView.current.spatialReference;
    }

    // Define the symbols for the elevation difference visualization
    const textSymbol = {
      type: "point-3d",
      verticalOffset: {
        screenLength: 10
      },
      symbolLayers: [
        {
          type: "text",
          material: { color: "black" },
          size: 12,
          text: "",
          background: { color: [255, 255, 255, 0.75] },
          verticalAlignment: "bottom"
        }
      ]
    } as unknown as __esri.PointSymbol3D;

    const lineSymbol = {
      type: "line-3d",
      symbolLayers: [
        {
          type: "line",
          material: { color: [150, 26, 15] },
          size: 2,
          marker: {
            type: "style",
            style: "arrow",
            placement: "end"
          }
        },
        {
          type: "line",
          material: { color: "green" },
          size: 2,
          marker: {
            type: "style",
            style: "circle",
            placement: "begin"
          }
        }
      ]
    }  as unknown as __esri.LineSymbol3D;

    try {
      // Query ground elevation
      const elevationLayer = new ElevationLayer({
        url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
      });

      const result = await elevationLayer.queryElevation(pointPosition);
      const groundElevation = result.geometry["z"];

      // Calculate total elevation including scene elevation
      const sceneElevation = pointPosition.z || 0;

      console.log(`Ground Elevation: ${groundElevation}`);
      console.log(`Scene Elevation: ${sceneElevation}`);
      console.log(`Total Elevation: ${sceneElevation - groundElevation}`);

      textSymbol.symbolLayers[0].text = `Layer Elevation: ${sceneElevation.toFixed(2)} FT - Ground Elevation: ${groundElevation.toFixed(2)}`;

      sceneView.current.graphics.removeAll();
      sceneView.current.graphics.add(new Graphic({
        geometry: pointPosition,
        symbol: textSymbol
      }));

      const lineGeometry = new Polyline({
        spatialReference: pointPosition.spatialReference,
        hasZ: true
      });

      lineGeometry.addPath([
        [
          pointPosition.x,
          pointPosition.y,
          groundElevation
        ], [
          pointPosition.x,
          pointPosition.y,
          sceneElevation
        ]
      ]);

      sceneView.current.graphics.add(new Graphic({
        geometry: lineGeometry,
        symbol: lineSymbol
      }));
    } catch (error) {
      console.error('Error querying elevation:', error);
    }
  }

  const showCoordinate = (evt) => {
    evt.preventDefault();

    if(!latitude || !longitude) return;

    let point = new Point({
      x: longitude,
      y: latitude
    })

    addPoint(point);
    sceneView.current.goTo(point);
  }

  return (
    <div className="jimu-widget p-2">
      {
        errorViewType ?
        <Alert type="warning" withIcon className="w-100">Map is not loaded or is not a scene view</Alert>
        :
        <Fragment>
          <div style={{ borderBottom: "1px solid gray"}}>
            Right click on the map to see the total elevation.
          </div>
          <div className='pt-2'>
            <Form onSubmit={showCoordinate}>
              <Row noGutters>
                <Label style={{width: "70px"}}>Longitude</Label>
                <NumericInput placeholder='-81,065' value={longitude} onChange={(evt)=>{setLongitude(evt)}}></NumericInput>
              </Row>
              <Row noGutters className='mt-2'>
                <Label style={{width: "70px"}}>Latitude</Label>
                <NumericInput placeholder='29,177' value={latitude} onChange={(evt)=>{setLatitude(evt)}}></NumericInput>
              </Row>
              <div className='flex flex-row-reverse mt-2 w-100'>
                <Button>Add point</Button>
              </div>
            </Form>
          </div>
        </Fragment>
      }

      {/* Componente JimuMapViewComponent para manejar el mapa */}
			{props.hasOwnProperty("useMapWidgetIds") &&
				props.useMapWidgetIds &&
				props.useMapWidgetIds.length === 1 && (
				// The JimuMapViewComponent gives us a connection to the
				// ArcGIS JS API MapView object. We store it in the State.
				<JimuMapViewComponent
					useMapWidgetId={props.useMapWidgetIds?.[0]}
					onActiveViewChange={(jimuMapView)=>{setJimuMapView(jimuMapView)}}
				/>
			)}
    </div>
  )
}

export default Widget
