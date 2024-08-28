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
                        url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
                    });
                    const result = yield elevationLayer.queryElevation(position);
                    const groundElevation = result.geometry["z"];
                    // Calculate total elevation including scene elevation
                    const sceneElevation = position.z || 0;
                    console.log(`Ground Elevation: ${groundElevation}`);
                    console.log(`Scene Elevation: ${sceneElevation}`);
                    console.log(`Total Elevation: ${sceneElevation - groundElevation}`);
                    textSymbol.symbolLayers[0].text = `Layer Elevation: ${sceneElevation.toFixed(2)} FT - Ground Elevation: ${groundElevation.toFixed(2)}`;
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
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { borderBottom: "1px solid gray", marginBottom: "10px", paddingBottom: "10px" } }, "Right click on the map to see the total elevation.")),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9NZWFzdXJlL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05HO0FBRVM7QUFDRjtBQUM5QjtBQUUvQiwyQkFBMkI7QUFDM0IsdUJBQXVCO0FBQ3dDO0FBQ3JCO0FBQ007QUFDaEQsMkJBQTJCO0FBRTNCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFOztJQUNqRCxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLCtDQUFRLEVBQWUsQ0FBQztJQUM5RCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsK0NBQVEsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUVuRSxNQUFNLFdBQVcsR0FBRyw2Q0FBTSxFQUFpQixDQUFDO0lBRTVDLGdEQUFTLENB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QUUsR0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUMsR0FDL0QsQ0FDRixDQUNNLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsTUFBTTtBQUViLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0VsZXZhdGlvbkxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL01lYXN1cmUvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2dlb21ldHJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9sYXllcnNfRWxldmF0aW9uTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qKiBBcmNHSVMgbGlicmFyaWVzICovXHJcbmltcG9ydCBFbGV2YXRpb25MYXllciBmcm9tICdAYXJjZ2lzL2NvcmUvbGF5ZXJzL0VsZXZhdGlvbkxheWVyJ1xyXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdAYXJjZ2lzL2NvcmUvR3JhcGhpYydcclxuaW1wb3J0IHsgUG9seWxpbmUgfSBmcm9tICdAYXJjZ2lzL2NvcmUvZ2VvbWV0cnknXHJcbi8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PigpO1xyXG4gIGNvbnN0IFtlcnJvclZpZXdUeXBlLCBzZXRFcnJvclZpZXdUeXBlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZVJlZjxfX2VzcmkuSGFuZGxlPigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIXByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoIHx8ICFqaW11TWFwVmlldyB8fCBqaW11TWFwVmlldz8udmlldz8udHlwZSA9PSBcIjJkXCIpIHtcclxuICAgICAgc2V0RXJyb3JWaWV3VHlwZSh0cnVlKTtcclxuXHJcbiAgICAgIC8vIENvbmZpZ3VyYXRpb24gRVhCIG1vZGUgY29udHJvbFxyXG4gICAgICBpZihoYW5kbGVDbGljay5jdXJyZW50KXtcclxuICAgICAgICBoYW5kbGVDbGljay5jdXJyZW50LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEVycm9yVmlld1R5cGUoZmFsc2UpO1xyXG5cclxuICAgIGxldCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcclxuXHJcbiAgICAvLyBXYWl0IGZvciB0aGUgdmlldyB0byBsb2FkIGFuZCB0aGVuIHNldCB0aGUgY2FtZXJhXHJcbiAgICB2aWV3LndoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBDYXN0IG1hcCB0byB3ZWJzY2VuZVxyXG4gICAgICBsZXQgbWFwID0gdmlldy5tYXAgYXMgX19lc3JpLldlYlNjZW5lO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2VudGVyIHRoZSBtYXAgdG8gdGhlIHNjZW5lJ3MgaW5pdGlhbCBjYW1lcmEgcG9zaXRpb25cclxuICAgICAgY29uc3QgaW5pdGlhbENhbWVyYSA9IG1hcC5pbml0aWFsVmlld1Byb3BlcnRpZXMudmlld3BvaW50LmNhbWVyYTtcclxuICAgICAgdmlldy5jYW1lcmEgPSBpbml0aWFsQ2FtZXJhO1xyXG5cclxuICAgICAgLy8gRGVmaW5lIHRoZSBzeW1ib2xzIGZvciB0aGUgZWxldmF0aW9uIGRpZmZlcmVuY2UgdmlzdWFsaXphdGlvblxyXG4gICAgICBjb25zdCB0ZXh0U3ltYm9sID0ge1xyXG4gICAgICAgIHR5cGU6IFwicG9pbnQtM2RcIixcclxuICAgICAgICB2ZXJ0aWNhbE9mZnNldDoge1xyXG4gICAgICAgICAgc2NyZWVuTGVuZ3RoOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ltYm9sTGF5ZXJzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogXCJibGFja1wiIH0sXHJcbiAgICAgICAgICAgIHNpemU6IDEyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7IGNvbG9yOiBbMjU1LCAyNTUsIDI1NSwgMC43NV0gfSxcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0gYXMgdW5rbm93biBhcyBfX2VzcmkuUG9pbnRTeW1ib2wzRDtcclxuXHJcbiAgICAgIGNvbnN0IGxpbmVTeW1ib2wgPSB7XHJcbiAgICAgICAgdHlwZTogXCJsaW5lLTNkXCIsXHJcbiAgICAgICAgc3ltYm9sTGF5ZXJzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogWzE1MCwgMjYsIDE1XSB9LFxyXG4gICAgICAgICAgICBzaXplOiAyLFxyXG4gICAgICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgICAgc3R5bGU6IFwiYXJyb3dcIixcclxuICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwiZW5kXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBcImdyZWVuXCIgfSxcclxuICAgICAgICAgICAgc2l6ZTogMixcclxuICAgICAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzdHlsZVwiLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgICAgIHBsYWNlbWVudDogXCJiZWdpblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0gIGFzIHVua25vd24gYXMgX19lc3JpLkxpbmVTeW1ib2wzRDtcclxuXHJcbiAgICAgIGhhbmRsZUNsaWNrLmN1cnJlbnQgPSB2aWV3Lm9uKFwiY2xpY2tcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUmV0dXJuIGlmIGRpZmVyZW50IHRvIHJpZ2h0IGNsaWNrXHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uICE9IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBldmVudC5tYXBQb2ludDtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHRoZSBtYXBQb2ludCBoYXMgYSBzcGF0aWFsIHJlZmVyZW5jZVxyXG4gICAgICAgIGlmICghcG9zaXRpb24/LnNwYXRpYWxSZWZlcmVuY2UpIHtcclxuICAgICAgICAgIHBvc2l0aW9uLnNwYXRpYWxSZWZlcmVuY2UgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gUXVlcnkgZ3JvdW5kIGVsZXZhdGlvblxyXG4gICAgICAgICAgY29uc3QgZWxldmF0aW9uTGF5ZXIgPSBuZXcgRWxldmF0aW9uTGF5ZXIoe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2VsZXZhdGlvbjNkLmFyY2dpcy5jb20vYXJjZ2lzL3Jlc3Qvc2VydmljZXMvV29ybGRFbGV2YXRpb24zRC9UZXJyYWluM0QvSW1hZ2VTZXJ2ZXInXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBlbGV2YXRpb25MYXllci5xdWVyeUVsZXZhdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICBjb25zdCBncm91bmRFbGV2YXRpb24gPSByZXN1bHQuZ2VvbWV0cnlbXCJ6XCJdO1xyXG5cclxuICAgICAgICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBlbGV2YXRpb24gaW5jbHVkaW5nIHNjZW5lIGVsZXZhdGlvblxyXG4gICAgICAgICAgY29uc3Qgc2NlbmVFbGV2YXRpb24gPSBwb3NpdGlvbi56IHx8IDA7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coYEdyb3VuZCBFbGV2YXRpb246ICR7Z3JvdW5kRWxldmF0aW9ufWApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFNjZW5lIEVsZXZhdGlvbjogJHtzY2VuZUVsZXZhdGlvbn1gKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBFbGV2YXRpb246ICR7c2NlbmVFbGV2YXRpb24gLSBncm91bmRFbGV2YXRpb259YCk7XHJcblxyXG4gICAgICAgICAgdGV4dFN5bWJvbC5zeW1ib2xMYXllcnNbMF0udGV4dCA9IGBMYXllciBFbGV2YXRpb246ICR7c2NlbmVFbGV2YXRpb24udG9GaXhlZCgyKX0gRlQgLSBHcm91bmQgRWxldmF0aW9uOiAke2dyb3VuZEVsZXZhdGlvbi50b0ZpeGVkKDIpfWA7XHJcblxyXG4gICAgICAgICAgdmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgIHZpZXcuZ3JhcGhpY3MuYWRkKG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBzeW1ib2w6IHRleHRTeW1ib2xcclxuICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBsaW5lR2VvbWV0cnkgPSBuZXcgUG9seWxpbmUoe1xyXG4gICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBwb3NpdGlvbi5zcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgICAgICAgICBoYXNaOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxpbmVHZW9tZXRyeS5hZGRQYXRoKFtcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgcG9zaXRpb24ueCxcclxuICAgICAgICAgICAgcG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZ3JvdW5kRWxldmF0aW9uXHJcbiAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHNjZW5lRWxldmF0aW9uXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHZpZXcuZ3JhcGhpY3MuYWRkKG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IGxpbmVHZW9tZXRyeSxcclxuICAgICAgICAgICAgc3ltYm9sOiBsaW5lU3ltYm9sXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHF1ZXJ5aW5nIGVsZXZhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtqaW11TWFwVmlldywgcHJvcHMudXNlTWFwV2lkZ2V0SWRzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXQgcC0yXCI+XHJcbiAgICAgIHtcclxuICAgICAgICBlcnJvclZpZXdUeXBlID9cclxuICAgICAgICA8QWxlcnQgdHlwZT1cIndhcm5pbmdcIiB3aXRoSWNvbiBjbGFzc05hbWU9XCJ3LTEwMFwiPk1hcCBpcyBub3QgbG9hZGVkIG9yIGlzIG5vdCBhIHNjZW5lIHZpZXc8L0FsZXJ0PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgZ3JheVwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgUmlnaHQgY2xpY2sgb24gdGhlIG1hcCB0byBzZWUgdGhlIHRvdGFsIGVsZXZhdGlvbi5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHsvKiBDb21wb25lbnRlIEppbXVNYXBWaWV3Q29tcG9uZW50IHBhcmEgbWFuZWphciBlbCBtYXBhICovfVxyXG5cdFx0XHR7cHJvcHMuaGFzT3duUHJvcGVydHkoXCJ1c2VNYXBXaWRnZXRJZHNcIikgJiZcclxuXHRcdFx0XHRwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuXHRcdFx0XHRwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuXHRcdFx0XHQvLyBUaGUgSmltdU1hcFZpZXdDb21wb25lbnQgZ2l2ZXMgdXMgYSBjb25uZWN0aW9uIHRvIHRoZVxyXG5cdFx0XHRcdC8vIEFyY0dJUyBKUyBBUEkgTWFwVmlldyBvYmplY3QuIFdlIHN0b3JlIGl0IGluIHRoZSBTdGF0ZS5cclxuXHRcdFx0XHQ8SmltdU1hcFZpZXdDb21wb25lbnRcclxuXHRcdFx0XHRcdHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuXHRcdFx0XHRcdG9uQWN0aXZlVmlld0NoYW5nZT17KGppbXVNYXBWaWV3KT0+e3NldEppbXVNYXBWaWV3KGppbXVNYXBWaWV3KX19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=