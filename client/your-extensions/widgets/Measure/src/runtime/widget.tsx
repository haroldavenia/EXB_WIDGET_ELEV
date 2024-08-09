import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Alert } from 'jimu-ui'

/** -------------------- */
/** ArcGIS libraries */
import ElevationLayer from '@arcgis/core/layers/ElevationLayer'
import Graphic from '@arcgis/core/Graphic'
import { Polyline } from '@arcgis/core/geometry'
/** -------------------- */

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>();
  const [errorViewType, setErrorViewType] = useState<boolean>(false);
  
  const handleClick = useRef<__esri.Handle>();

  useEffect(() => {
    if(!props.useMapWidgetIds.length || !jimuMapView || jimuMapView?.view?.type == "2d") {
      setErrorViewType(true);

      // Configuration EXB mode control
      if(handleClick.current){
        handleClick.current.remove();
      }

      return;
    };

    setErrorViewType(false);

    let view = jimuMapView.view;

    // Wait for the view to load and then set the camera
    view.when(() => {
      // Cast map to webscene
      let map = view.map as __esri.WebScene;
      
      // Center the map to the scene's initial camera position
      const initialCamera = map.initialViewProperties.viewpoint.camera;
      view.camera = initialCamera;

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

      handleClick.current = view.on("click", async (event) => {
        // Return if diferent to right click
        if(event.button != 2) return;

        const position = event.mapPoint;

        // Ensure the mapPoint has a spatial reference
        if (!position?.spatialReference) {
          position.spatialReference = view.spatialReference;
        }

        try {
          // Query ground elevation
          const elevationLayer = new ElevationLayer({
            url: 'https://tiledbasemaps.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
          });

          const result = await elevationLayer.queryElevation(position);
          const groundElevation = result.geometry["z"];

          // Calculate total elevation including scene elevation
          const sceneElevation = position.z || 0;

          console.log(`Ground Elevation: ${groundElevation}`);
          console.log(`Scene Elevation: ${sceneElevation - groundElevation}`);
          console.log(`Total Elevation: ${sceneElevation}`);

          textSymbol.symbolLayers[0].text = `Total Elevation: ${sceneElevation.toFixed(2)} m`;

          view.graphics.removeAll();
          view.graphics.add(new Graphic({
            geometry: position,
            symbol: textSymbol
          }));

          const lineGeometry = new Polyline({
            spatialReference: position.spatialReference,
            hasZ: true
          });
          lineGeometry.addPath([
          [
            position.x,
            position.y,
            groundElevation
          ], [
            position.x,
            position.y,
            sceneElevation
          ]
        ]);

        view.graphics.add(new Graphic({
            geometry: lineGeometry,
            symbol: lineSymbol
          }));
        } catch (error) {
          console.error('Error querying elevation:', error);
        }
      });
    });
  }, [jimuMapView, props.useMapWidgetIds])

  return (
    <div className="jimu-widget p-2">
      {
        errorViewType ?
        <Alert type="warning" withIcon className="w-100">Map is not loaded or is not a scene view</Alert>
        :
        <Fragment>
          <div style={{ borderBottom: "1px solid gray", marginBottom: "10px", paddingBottom: "10px" }}>
            Click on the map to see the total elevation.
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
