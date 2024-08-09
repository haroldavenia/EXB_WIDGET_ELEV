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
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        var _a;
        if (!props.useMapWidgetIds.length || !jimuMapView || ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) == "2d") {
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
        // Wait for the view to load and then set the camera
        view.when(() => {
            // Cast map to webscene
            let map = view.map;
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
            handleClick.current = view.on("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
                // Return if diferent to right click
                if (event.button != 2)
                    return;
                const position = event.mapPoint;
                // Ensure the mapPoint has a spatial reference
                if (!(position === null || position === void 0 ? void 0 : position.spatialReference)) {
                    position.spatialReference = view.spatialReference;
                }
                try {
                    // Query ground elevation
                    const elevationLayer = new _arcgis_core_layers_ElevationLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({
                        url: 'https://tiledbasemaps.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
                    });
                    const result = yield elevationLayer.queryElevation(position);
                    const groundElevation = result.geometry["z"];
                    // Calculate total elevation including scene elevation
                    const sceneElevation = position.z || 0;
                    console.log(`Ground Elevation: ${groundElevation}`);
                    console.log(`Scene Elevation: ${sceneElevation - groundElevation}`);
                    console.log(`Total Elevation: ${sceneElevation}`);
                    textSymbol.symbolLayers[0].text = `Total Elevation: ${sceneElevation.toFixed(2)} m`;
                    view.graphics.removeAll();
                    view.graphics.add(new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                        geometry: position,
                        symbol: textSymbol
                    }));
                    const lineGeometry = new _arcgis_core_geometry__WEBPACK_IMPORTED_MODULE_6__.Polyline({
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
                    view.graphics.add(new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                        geometry: lineGeometry,
                        symbol: lineSymbol
                    }));
                }
                catch (error) {
                    console.error('Error querying elevation:', error);
                }
            }));
        });
    }, [jimuMapView, props.useMapWidgetIds]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget p-2" },
        errorViewType ?
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { type: "warning", withIcon: true, className: "w-100" }, "Map is not loaded or is not a scene view")
            :
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { borderBottom: "1px solid gray", marginBottom: "10px", paddingBottom: "10px" } }, "Click on the map to see the total elevation.")),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9NZWFzdXJlL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05HO0FBRVM7QUFDRjtBQUM5QjtBQUUvQiwyQkFBMkI7QUFDM0IsdUJBQXVCO0FBQ3dDO0FBQ3JCO0FBQ007QUFDaEQsMkJBQTJCO0FBRTNCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFOztJQUNqRCxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLCtDQUFRLEVBQWUsQ0FBQztJQUM5RCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsK0NBQVEsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUVuRSxNQUFNLFdBQVcsR0FBRyw2Q0FBTSxFQUFpQixDQUFDO0lBRTVDLGdEQUFTLENB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LENBQ0YsQ0FDTSxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9FbGV2YXRpb25MYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9NZWFzdXJlL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9nZW9tZXRyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0VsZXZhdGlvbkxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnamltdS11aSdcclxuXHJcbi8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiogQXJjR0lTIGxpYnJhcmllcyAqL1xyXG5pbXBvcnQgRWxldmF0aW9uTGF5ZXIgZnJvbSAnQGFyY2dpcy9jb3JlL2xheWVycy9FbGV2YXRpb25MYXllcidcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSAnQGFyY2dpcy9jb3JlL0dyYXBoaWMnXHJcbmltcG9ydCB7IFBvbHlsaW5lIH0gZnJvbSAnQGFyY2dpcy9jb3JlL2dlb21ldHJ5J1xyXG4vKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4oKTtcclxuICBjb25zdCBbZXJyb3JWaWV3VHlwZSwgc2V0RXJyb3JWaWV3VHlwZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VSZWY8X19lc3JpLkhhbmRsZT4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoIHx8ICFqaW11TWFwVmlldyB8fCBqaW11TWFwVmlldz8udmlldz8udHlwZSA9PSBcIjJkXCIpIHtcclxuICAgICAgc2V0RXJyb3JWaWV3VHlwZSh0cnVlKTtcclxuXHJcbiAgICAgIC8vIENvbmZpZ3VyYXRpb24gRVhCIG1vZGUgY29udHJvbFxyXG4gICAgICBpZihoYW5kbGVDbGljay5jdXJyZW50KXtcclxuICAgICAgICBoYW5kbGVDbGljay5jdXJyZW50LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEVycm9yVmlld1R5cGUoZmFsc2UpO1xyXG5cclxuICAgIGxldCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcclxuXHJcbiAgICAvLyBXYWl0IGZvciB0aGUgdmlldyB0byBsb2FkIGFuZCB0aGVuIHNldCB0aGUgY2FtZXJhXHJcbiAgICB2aWV3LndoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBDYXN0IG1hcCB0byB3ZWJzY2VuZVxyXG4gICAgICBsZXQgbWFwID0gdmlldy5tYXAgYXMgX19lc3JpLldlYlNjZW5lO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2VudGVyIHRoZSBtYXAgdG8gdGhlIHNjZW5lJ3MgaW5pdGlhbCBjYW1lcmEgcG9zaXRpb25cclxuICAgICAgY29uc3QgaW5pdGlhbENhbWVyYSA9IG1hcC5pbml0aWFsVmlld1Byb3BlcnRpZXMudmlld3BvaW50LmNhbWVyYTtcclxuICAgICAgdmlldy5jYW1lcmEgPSBpbml0aWFsQ2FtZXJhO1xyXG5cclxuICAgICAgLy8gRGVmaW5lIHRoZSBzeW1ib2xzIGZvciB0aGUgZWxldmF0aW9uIGRpZmZlcmVuY2UgdmlzdWFsaXphdGlvblxyXG4gICAgICBjb25zdCB0ZXh0U3ltYm9sID0ge1xyXG4gICAgICAgIHR5cGU6IFwicG9pbnQtM2RcIixcclxuICAgICAgICB2ZXJ0aWNhbE9mZnNldDoge1xyXG4gICAgICAgICAgc2NyZWVuTGVuZ3RoOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ltYm9sTGF5ZXJzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogXCJibGFja1wiIH0sXHJcbiAgICAgICAgICAgIHNpemU6IDEyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7IGNvbG9yOiBbMjU1LCAyNTUsIDI1NSwgMC43NV0gfSxcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0gYXMgdW5rbm93biBhcyBfX2VzcmkuUG9pbnRTeW1ib2wzRDtcclxuXHJcbiAgICAgIGNvbnN0IGxpbmVTeW1ib2wgPSB7XHJcbiAgICAgICAgdHlwZTogXCJsaW5lLTNkXCIsXHJcbiAgICAgICAgc3ltYm9sTGF5ZXJzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogWzE1MCwgMjYsIDE1XSB9LFxyXG4gICAgICAgICAgICBzaXplOiAyLFxyXG4gICAgICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgICAgc3R5bGU6IFwiYXJyb3dcIixcclxuICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwiZW5kXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBcImdyZWVuXCIgfSxcclxuICAgICAgICAgICAgc2l6ZTogMixcclxuICAgICAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzdHlsZVwiLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgICAgIHBsYWNlbWVudDogXCJiZWdpblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0gIGFzIHVua25vd24gYXMgX19lc3JpLkxpbmVTeW1ib2wzRDtcclxuXHJcbiAgICAgIGhhbmRsZUNsaWNrLmN1cnJlbnQgPSB2aWV3Lm9uKFwiY2xpY2tcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUmV0dXJuIGlmIGRpZmVyZW50IHRvIHJpZ2h0IGNsaWNrXHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uICE9IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBldmVudC5tYXBQb2ludDtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHRoZSBtYXBQb2ludCBoYXMgYSBzcGF0aWFsIHJlZmVyZW5jZVxyXG4gICAgICAgIGlmICghcG9zaXRpb24/LnNwYXRpYWxSZWZlcmVuY2UpIHtcclxuICAgICAgICAgIHBvc2l0aW9uLnNwYXRpYWxSZWZlcmVuY2UgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gUXVlcnkgZ3JvdW5kIGVsZXZhdGlvblxyXG4gICAgICAgICAgY29uc3QgZWxldmF0aW9uTGF5ZXIgPSBuZXcgRWxldmF0aW9uTGF5ZXIoe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3RpbGVkYmFzZW1hcHMuYXJjZ2lzLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9Xb3JsZEVsZXZhdGlvbjNEL1RlcnJhaW4zRC9JbWFnZVNlcnZlcidcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGVsZXZhdGlvbkxheWVyLnF1ZXJ5RWxldmF0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgIGNvbnN0IGdyb3VuZEVsZXZhdGlvbiA9IHJlc3VsdC5nZW9tZXRyeVtcInpcIl07XHJcblxyXG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGVsZXZhdGlvbiBpbmNsdWRpbmcgc2NlbmUgZWxldmF0aW9uXHJcbiAgICAgICAgICBjb25zdCBzY2VuZUVsZXZhdGlvbiA9IHBvc2l0aW9uLnogfHwgMDtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgR3JvdW5kIEVsZXZhdGlvbjogJHtncm91bmRFbGV2YXRpb259YCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgRWxldmF0aW9uOiAke3NjZW5lRWxldmF0aW9uIC0gZ3JvdW5kRWxldmF0aW9ufWApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFRvdGFsIEVsZXZhdGlvbjogJHtzY2VuZUVsZXZhdGlvbn1gKTtcclxuXHJcbiAgICAgICAgICB0ZXh0U3ltYm9sLnN5bWJvbExheWVyc1swXS50ZXh0ID0gYFRvdGFsIEVsZXZhdGlvbjogJHtzY2VuZUVsZXZhdGlvbi50b0ZpeGVkKDIpfSBtYDtcclxuXHJcbiAgICAgICAgICB2aWV3LmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgdmlldy5ncmFwaGljcy5hZGQobmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICBnZW9tZXRyeTogcG9zaXRpb24sXHJcbiAgICAgICAgICAgIHN5bWJvbDogdGV4dFN5bWJvbFxyXG4gICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGxpbmVHZW9tZXRyeSA9IG5ldyBQb2x5bGluZSh7XHJcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvc2l0aW9uLnNwYXRpYWxSZWZlcmVuY2UsXHJcbiAgICAgICAgICAgIGhhc1o6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGluZUdlb21ldHJ5LmFkZFBhdGgoW1xyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBwb3NpdGlvbi54LFxyXG4gICAgICAgICAgICBwb3NpdGlvbi55LFxyXG4gICAgICAgICAgICBncm91bmRFbGV2YXRpb25cclxuICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgcG9zaXRpb24ueCxcclxuICAgICAgICAgICAgcG9zaXRpb24ueSxcclxuICAgICAgICAgICAgc2NlbmVFbGV2YXRpb25cclxuICAgICAgICAgIF1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdmlldy5ncmFwaGljcy5hZGQobmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICBnZW9tZXRyeTogbGluZUdlb21ldHJ5LFxyXG4gICAgICAgICAgICBzeW1ib2w6IGxpbmVTeW1ib2xcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcXVlcnlpbmcgZWxldmF0aW9uOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBwcm9wcy51c2VNYXBXaWRnZXRJZHNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBwLTJcIj5cclxuICAgICAge1xyXG4gICAgICAgIGVycm9yVmlld1R5cGUgP1xyXG4gICAgICAgIDxBbGVydCB0eXBlPVwid2FybmluZ1wiIHdpdGhJY29uIGNsYXNzTmFtZT1cInctMTAwXCI+TWFwIGlzIG5vdCBsb2FkZWQgb3IgaXMgbm90IGEgc2NlbmUgdmlldzwvQWxlcnQ+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIHBhZGRpbmdCb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICBDbGljayBvbiB0aGUgbWFwIHRvIHNlZSB0aGUgdG90YWwgZWxldmF0aW9uLlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgfVxyXG5cclxuICAgICAgey8qIENvbXBvbmVudGUgSmltdU1hcFZpZXdDb21wb25lbnQgcGFyYSBtYW5lamFyIGVsIG1hcGEgKi99XHJcblx0XHRcdHtwcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxyXG5cdFx0XHRcdHByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxyXG5cdFx0XHRcdHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG5cdFx0XHRcdC8vIFRoZSBKaW11TWFwVmlld0NvbXBvbmVudCBnaXZlcyB1cyBhIGNvbm5lY3Rpb24gdG8gdGhlXHJcblx0XHRcdFx0Ly8gQXJjR0lTIEpTIEFQSSBNYXBWaWV3IG9iamVjdC4gV2Ugc3RvcmUgaXQgaW4gdGhlIFN0YXRlLlxyXG5cdFx0XHRcdDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG5cdFx0XHRcdFx0dXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG5cdFx0XHRcdFx0b25BY3RpdmVWaWV3Q2hhbmdlPXsoamltdU1hcFZpZXcpPT57c2V0SmltdU1hcFZpZXcoamltdU1hcFZpZXcpfX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==