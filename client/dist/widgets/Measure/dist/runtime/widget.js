System.register(["jimu-core","jimu-arcgis","jimu-core/react","jimu-ui","esri/layers/ElevationLayer","esri/Graphic","esri/geometry"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_ElevationLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_ElevationLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_ElevationLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "@arcgis/core/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__;

/***/ }),

/***/ "@arcgis/core/geometry":
/*!********************************!*\
  !*** external "esri/geometry" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry__;

/***/ }),

/***/ "@arcgis/core/layers/ElevationLayer":
/*!*********************************************!*\
  !*** external "esri/layers/ElevationLayer" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_ElevationLayer__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/Measure/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _arcgis_core_layers_ElevationLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/layers/ElevationLayer */ "@arcgis/core/layers/ElevationLayer");
/* harmony import */ var _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/Graphic */ "@arcgis/core/Graphic");
/* harmony import */ var _arcgis_core_geometry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/geometry */ "@arcgis/core/geometry");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/** -------------------- */
/** ArcGIS libraries */



/** -------------------- */
const Widget = (props) => {
    var _a;
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [errorViewType, setErrorViewType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(29.177);
    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-81.065);
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const sceneView = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        var _a, _b;
        if (!((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length) || !jimuMapView || ((_b = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _b === void 0 ? void 0 : _b.type) == "2d") {
            setErrorViewType(true);
            // Configuration EXB mode control
            if (handleClick.current) {
                handleClick.current.remove();
            }
            return;
        }
        ;
        setErrorViewType(false);
        let view = jimuMapView.view;
        sceneView.current = jimuMapView.view;
        // Wait for the view to load and then set the camera
        view.when(() => {
            // Cast map to webscene
            let map = view.map;
            // Center the map to the scene's initial camera position
            const initialCamera = map.initialViewProperties.viewpoint.camera;
            view.camera = initialCamera;
            handleClick.current = view.on("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
                // Return if diferent to right click
                if (event.button != 2)
                    return;
                const position = event.mapPoint;
                addPoint(position);
            }));
        });
    }, [jimuMapView, props.useMapWidgetIds]);
    const addPoint = (pointPosition) => __awaiter(void 0, void 0, void 0, function* () {
        // Ensure the mapPoint has a spatial reference
        if (!(pointPosition === null || pointPosition === void 0 ? void 0 : pointPosition.spatialReference)) {
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
        };
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
        };
        try {
            // Query ground elevation
            const elevationLayer = new _arcgis_core_layers_ElevationLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({
                url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
            });
            const result = yield elevationLayer.queryElevation(pointPosition);
            const groundElevation = result.geometry["z"];
            // Calculate total elevation including scene elevation
            const sceneElevation = pointPosition.z || 0;
            console.log(`Ground Elevation: ${groundElevation}`);
            console.log(`Scene Elevation: ${sceneElevation}`);
            console.log(`Total Elevation: ${sceneElevation - groundElevation}`);
            textSymbol.symbolLayers[0].text = `Layer Elevation: ${sceneElevation.toFixed(2)} FT - Ground Elevation: ${groundElevation.toFixed(2)}`;
            sceneView.current.graphics.removeAll();
            sceneView.current.graphics.add(new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: pointPosition,
                symbol: textSymbol
            }));
            const lineGeometry = new _arcgis_core_geometry__WEBPACK_IMPORTED_MODULE_6__.Polyline({
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
            sceneView.current.graphics.add(new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: lineGeometry,
                symbol: lineSymbol
            }));
        }
        catch (error) {
            console.error('Error querying elevation:', error);
        }
    });
    const showCoordinate = (evt) => {
        evt.preventDefault();
        if (!latitude || !longitude)
            return;
        let point = new _arcgis_core_geometry__WEBPACK_IMPORTED_MODULE_6__.Point({
            x: longitude,
            y: latitude
        });
        addPoint(point);
        sceneView.current.goTo(point);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget p-2" },
        errorViewType ?
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { type: "warning", withIcon: true, className: "w-100" }, "Map is not loaded or is not a scene view")
            :
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { borderBottom: "1px solid gray" } }, "Right click on the map to see the total elevation."),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'pt-2' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Form, { onSubmit: showCoordinate },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Row, { noGutters: true },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { style: { width: "70px" } }, "Longitude"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { placeholder: '-81,065', value: longitude, onChange: (evt) => { setLongitude(evt); } })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Row, { noGutters: true, className: 'mt-2' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { style: { width: "70px" } }, "Latitude"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { placeholder: '29,177', value: latitude, onChange: (evt) => { setLatitude(evt); } })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'flex flex-row-reverse mt-2 w-100' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, null, "Add point"))))),
        props.hasOwnProperty("useMapWidgetIds") &&
            props.useMapWidgetIds &&
            props.useMapWidgetIds.length === 1 && (
        // The JimuMapViewComponent gives us a connection to the
        // ArcGIS JS API MapView object. We store it in the State.
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jimuMapView) => { setJimuMapView(jimuMapView); } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9NZWFzdXJlL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05HO0FBRVM7QUFDRjtBQUNVO0FBRXZFLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDd0M7QUFDckI7QUFDK0I7QUFDekUsMkJBQTJCO0FBRTNCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFOztJQUNqRCxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLCtDQUFRLEVBQWUsQ0FBQztJQUM5RCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsK0NBQVEsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUVuRSxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLCtDQUFRLENBQVMs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QUFrQztnQ0FDL0MsMkRBQUMsMkNBQU0sb0JBQW1CLENBQ3RCLENBQ0QsQ0FDSCxDQUNHO1FBSWYsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztZQUN2QyxLQUFLLENBQUMsZUFBZTtZQUNyQixLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUk7UUFDdEMsd0RBQXdEO1FBQ3hELDBEQUEwRDtRQUMxRCwyREFBQyw2REFBb0IsSUFDcEIsY0FBYyxFQUFFLFdBQUssQ0FBQyxlQUFlLDBDQUFHLENBQUMsQ0FBQyxFQUMxQyxrQkFBa0IsRUFBRSxDQUFDLFdBQVcsRUFBQyxFQUFFLEdBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFDLEdBQy9ELENBQ0YsQ0FDTSxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9FbGV2YXRpb25MYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9NZWFzdXJlL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9nZW9tZXRyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0VsZXZhdGlvbkxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIEZvcm0sIExhYmVsLCBOdW1lcmljSW5wdXQsIFJvdyB9IGZyb20gJ2ppbXUtdWknXHJcblxyXG4vKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyoqIEFyY0dJUyBsaWJyYXJpZXMgKi9cclxuaW1wb3J0IEVsZXZhdGlvbkxheWVyIGZyb20gJ0BhcmNnaXMvY29yZS9sYXllcnMvRWxldmF0aW9uTGF5ZXInXHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ0BhcmNnaXMvY29yZS9HcmFwaGljJ1xyXG5pbXBvcnQgeyBQb2ludCwgUG9seWxpbmUsIFNwYXRpYWxSZWZlcmVuY2UgfSBmcm9tICdAYXJjZ2lzL2NvcmUvZ2VvbWV0cnknXHJcbi8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PigpO1xyXG4gIGNvbnN0IFtlcnJvclZpZXdUeXBlLCBzZXRFcnJvclZpZXdUeXBlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2xhdGl0dWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDI5LjE3Nyk7XHJcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlPG51bWJlcj4oLTgxLjA2NSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VSZWY8X19lc3JpLkhhbmRsZT4oKTtcclxuICBjb25zdCBzY2VuZVZpZXcgPSB1c2VSZWY8X19lc3JpLlNjZW5lVmlldz4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCB8fCAhamltdU1hcFZpZXcgfHwgamltdU1hcFZpZXc/LnZpZXc/LnR5cGUgPT0gXCIyZFwiKSB7XHJcbiAgICAgIHNldEVycm9yVmlld1R5cGUodHJ1ZSk7XHJcblxyXG4gICAgICAvLyBDb25maWd1cmF0aW9uIEVYQiBtb2RlIGNvbnRyb2xcclxuICAgICAgaWYoaGFuZGxlQ2xpY2suY3VycmVudCl7XHJcbiAgICAgICAgaGFuZGxlQ2xpY2suY3VycmVudC5yZW1vdmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRFcnJvclZpZXdUeXBlKGZhbHNlKTtcclxuXHJcbiAgICBsZXQgdmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XHJcbiAgICBzY2VuZVZpZXcuY3VycmVudCA9IGppbXVNYXBWaWV3LnZpZXc7XHJcblxyXG4gICAgLy8gV2FpdCBmb3IgdGhlIHZpZXcgdG8gbG9hZCBhbmQgdGhlbiBzZXQgdGhlIGNhbWVyYVxyXG4gICAgdmlldy53aGVuKCgpID0+IHtcclxuICAgICAgLy8gQ2FzdCBtYXAgdG8gd2Vic2NlbmVcclxuICAgICAgbGV0IG1hcCA9IHZpZXcubWFwIGFzIF9fZXNyaS5XZWJTY2VuZTtcclxuICAgICAgXHJcbiAgICAgIC8vIENlbnRlciB0aGUgbWFwIHRvIHRoZSBzY2VuZSdzIGluaXRpYWwgY2FtZXJhIHBvc2l0aW9uXHJcbiAgICAgIGNvbnN0IGluaXRpYWxDYW1lcmEgPSBtYXAuaW5pdGlhbFZpZXdQcm9wZXJ0aWVzLnZpZXdwb2ludC5jYW1lcmE7XHJcbiAgICAgIHZpZXcuY2FtZXJhID0gaW5pdGlhbENhbWVyYTtcclxuXHJcbiAgICAgIGhhbmRsZUNsaWNrLmN1cnJlbnQgPSB2aWV3Lm9uKFwiY2xpY2tcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUmV0dXJuIGlmIGRpZmVyZW50IHRvIHJpZ2h0IGNsaWNrXHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uICE9IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBldmVudC5tYXBQb2ludDtcclxuICAgICAgICBhZGRQb2ludChwb3NpdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBwcm9wcy51c2VNYXBXaWRnZXRJZHNdKVxyXG5cclxuICBjb25zdCBhZGRQb2ludCA9IGFzeW5jIChwb2ludFBvc2l0aW9uOiBfX2VzcmkuUG9pbnQpID0+IHtcclxuICAgIC8vIEVuc3VyZSB0aGUgbWFwUG9pbnQgaGFzIGEgc3BhdGlhbCByZWZlcmVuY2VcclxuICAgIGlmICghcG9pbnRQb3NpdGlvbj8uc3BhdGlhbFJlZmVyZW5jZSkge1xyXG4gICAgICBwb2ludFBvc2l0aW9uLnNwYXRpYWxSZWZlcmVuY2UgPSBzY2VuZVZpZXcuY3VycmVudC5zcGF0aWFsUmVmZXJlbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmluZSB0aGUgc3ltYm9scyBmb3IgdGhlIGVsZXZhdGlvbiBkaWZmZXJlbmNlIHZpc3VhbGl6YXRpb25cclxuICAgIGNvbnN0IHRleHRTeW1ib2wgPSB7XHJcbiAgICAgIHR5cGU6IFwicG9pbnQtM2RcIixcclxuICAgICAgdmVydGljYWxPZmZzZXQ6IHtcclxuICAgICAgICBzY3JlZW5MZW5ndGg6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN5bWJvbExheWVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgbWF0ZXJpYWw6IHsgY29sb3I6IFwiYmxhY2tcIiB9LFxyXG4gICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogeyBjb2xvcjogWzI1NSwgMjU1LCAyNTUsIDAuNzVdIH0sXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSBhcyB1bmtub3duIGFzIF9fZXNyaS5Qb2ludFN5bWJvbDNEO1xyXG5cclxuICAgIGNvbnN0IGxpbmVTeW1ib2wgPSB7XHJcbiAgICAgIHR5cGU6IFwibGluZS0zZFwiLFxyXG4gICAgICBzeW1ib2xMYXllcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBbMTUwLCAyNiwgMTVdIH0sXHJcbiAgICAgICAgICBzaXplOiAyLFxyXG4gICAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc3R5bGU6IFwiYXJyb3dcIixcclxuICAgICAgICAgICAgcGxhY2VtZW50OiBcImVuZFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBcImdyZWVuXCIgfSxcclxuICAgICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJzdHlsZVwiLFxyXG4gICAgICAgICAgICBzdHlsZTogXCJjaXJjbGVcIixcclxuICAgICAgICAgICAgcGxhY2VtZW50OiBcImJlZ2luXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0gIGFzIHVua25vd24gYXMgX19lc3JpLkxpbmVTeW1ib2wzRDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBRdWVyeSBncm91bmQgZWxldmF0aW9uXHJcbiAgICAgIGNvbnN0IGVsZXZhdGlvbkxheWVyID0gbmV3IEVsZXZhdGlvbkxheWVyKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2VsZXZhdGlvbjNkLmFyY2dpcy5jb20vYXJjZ2lzL3Jlc3Qvc2VydmljZXMvV29ybGRFbGV2YXRpb24zRC9UZXJyYWluM0QvSW1hZ2VTZXJ2ZXInXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZWxldmF0aW9uTGF5ZXIucXVlcnlFbGV2YXRpb24ocG9pbnRQb3NpdGlvbik7XHJcbiAgICAgIGNvbnN0IGdyb3VuZEVsZXZhdGlvbiA9IHJlc3VsdC5nZW9tZXRyeVtcInpcIl07XHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgdG90YWwgZWxldmF0aW9uIGluY2x1ZGluZyBzY2VuZSBlbGV2YXRpb25cclxuICAgICAgY29uc3Qgc2NlbmVFbGV2YXRpb24gPSBwb2ludFBvc2l0aW9uLnogfHwgMDtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBHcm91bmQgRWxldmF0aW9uOiAke2dyb3VuZEVsZXZhdGlvbn1gKTtcclxuICAgICAgY29uc29sZS5sb2coYFNjZW5lIEVsZXZhdGlvbjogJHtzY2VuZUVsZXZhdGlvbn1gKTtcclxuICAgICAgY29uc29sZS5sb2coYFRvdGFsIEVsZXZhdGlvbjogJHtzY2VuZUVsZXZhdGlvbiAtIGdyb3VuZEVsZXZhdGlvbn1gKTtcclxuXHJcbiAgICAgIHRleHRTeW1ib2wuc3ltYm9sTGF5ZXJzWzBdLnRleHQgPSBgTGF5ZXIgRWxldmF0aW9uOiAke3NjZW5lRWxldmF0aW9uLnRvRml4ZWQoMil9IEZUIC0gR3JvdW5kIEVsZXZhdGlvbjogJHtncm91bmRFbGV2YXRpb24udG9GaXhlZCgyKX1gO1xyXG5cclxuICAgICAgc2NlbmVWaWV3LmN1cnJlbnQuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XHJcbiAgICAgIHNjZW5lVmlldy5jdXJyZW50LmdyYXBoaWNzLmFkZChuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgZ2VvbWV0cnk6IHBvaW50UG9zaXRpb24sXHJcbiAgICAgICAgc3ltYm9sOiB0ZXh0U3ltYm9sXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAgIGNvbnN0IGxpbmVHZW9tZXRyeSA9IG5ldyBQb2x5bGluZSh7XHJcbiAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogcG9pbnRQb3NpdGlvbi5zcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgICAgIGhhc1o6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsaW5lR2VvbWV0cnkuYWRkUGF0aChbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgcG9pbnRQb3NpdGlvbi54LFxyXG4gICAgICAgICAgcG9pbnRQb3NpdGlvbi55LFxyXG4gICAgICAgICAgZ3JvdW5kRWxldmF0aW9uXHJcbiAgICAgICAgXSwgW1xyXG4gICAgICAgICAgcG9pbnRQb3NpdGlvbi54LFxyXG4gICAgICAgICAgcG9pbnRQb3NpdGlvbi55LFxyXG4gICAgICAgICAgc2NlbmVFbGV2YXRpb25cclxuICAgICAgICBdXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgc2NlbmVWaWV3LmN1cnJlbnQuZ3JhcGhpY3MuYWRkKG5ldyBHcmFwaGljKHtcclxuICAgICAgICBnZW9tZXRyeTogbGluZUdlb21ldHJ5LFxyXG4gICAgICAgIHN5bWJvbDogbGluZVN5bWJvbFxyXG4gICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBxdWVyeWluZyBlbGV2YXRpb246JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd0Nvb3JkaW5hdGUgPSAoZXZ0KSA9PiB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZighbGF0aXR1ZGUgfHwgIWxvbmdpdHVkZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb2ludCA9IG5ldyBQb2ludCh7XHJcbiAgICAgIHg6IGxvbmdpdHVkZSxcclxuICAgICAgeTogbGF0aXR1ZGVcclxuICAgIH0pXHJcblxyXG4gICAgYWRkUG9pbnQocG9pbnQpO1xyXG4gICAgc2NlbmVWaWV3LmN1cnJlbnQuZ29Ubyhwb2ludCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBwLTJcIj5cclxuICAgICAge1xyXG4gICAgICAgIGVycm9yVmlld1R5cGUgP1xyXG4gICAgICAgIDxBbGVydCB0eXBlPVwid2FybmluZ1wiIHdpdGhJY29uIGNsYXNzTmFtZT1cInctMTAwXCI+TWFwIGlzIG5vdCBsb2FkZWQgb3IgaXMgbm90IGEgc2NlbmUgdmlldzwvQWxlcnQ+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBncmF5XCJ9fT5cclxuICAgICAgICAgICAgUmlnaHQgY2xpY2sgb24gdGhlIG1hcCB0byBzZWUgdGhlIHRvdGFsIGVsZXZhdGlvbi5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTInPlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17c2hvd0Nvb3JkaW5hdGV9PlxyXG4gICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHN0eWxlPXt7d2lkdGg6IFwiNzBweFwifX0+TG9uZ2l0dWRlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgcGxhY2Vob2xkZXI9Jy04MSwwNjUnIHZhbHVlPXtsb25naXR1ZGV9IG9uQ2hhbmdlPXsoZXZ0KT0+e3NldExvbmdpdHVkZShldnQpfX0+PC9OdW1lcmljSW5wdXQ+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgY2xhc3NOYW1lPSdtdC0yJz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBzdHlsZT17e3dpZHRoOiBcIjcwcHhcIn19PkxhdGl0dWRlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgcGxhY2Vob2xkZXI9JzI5LDE3NycgdmFsdWU9e2xhdGl0dWRlfSBvbkNoYW5nZT17KGV2dCk9PntzZXRMYXRpdHVkZShldnQpfX0+PC9OdW1lcmljSW5wdXQ+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3ctcmV2ZXJzZSBtdC0yIHctMTAwJz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+QWRkIHBvaW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHsvKiBDb21wb25lbnRlIEppbXVNYXBWaWV3Q29tcG9uZW50IHBhcmEgbWFuZWphciBlbCBtYXBhICovfVxyXG5cdFx0XHR7cHJvcHMuaGFzT3duUHJvcGVydHkoXCJ1c2VNYXBXaWRnZXRJZHNcIikgJiZcclxuXHRcdFx0XHRwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuXHRcdFx0XHRwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuXHRcdFx0XHQvLyBUaGUgSmltdU1hcFZpZXdDb21wb25lbnQgZ2l2ZXMgdXMgYSBjb25uZWN0aW9uIHRvIHRoZVxyXG5cdFx0XHRcdC8vIEFyY0dJUyBKUyBBUEkgTWFwVmlldyBvYmplY3QuIFdlIHN0b3JlIGl0IGluIHRoZSBTdGF0ZS5cclxuXHRcdFx0XHQ8SmltdU1hcFZpZXdDb21wb25lbnRcclxuXHRcdFx0XHRcdHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuXHRcdFx0XHRcdG9uQWN0aXZlVmlld0NoYW5nZT17KGppbXVNYXBWaWV3KT0+e3NldEppbXVNYXBWaWV3KGppbXVNYXBWaWV3KX19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=