System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/SpatialReference","esri/symbols/PictureMarkerSymbol","esri/geometry/coordinateFormatter","esri/geometry/support/webMercatorUtils","esri/geometry/Point","esri/geometry/projection","esri/rest/geometryService","esri/rest/support/ProjectParameters","jimu-ui/basic/copy-button","jimu-layouts/layout-runtime","esri/core/reactiveUtils"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_projection__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_geometryService__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_ProjectParameters__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_copy_button__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_projection__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_geometryService__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_ProjectParameters__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_copy_button__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_projection__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_geometryService__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_support_ProjectParameters__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_copy_button__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/directional/down.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/down.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/locator.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/locator.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 15 15\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M7 0h1v4H7zM0 8V7h4v1zm11-1v1h4V7zm-4 4h1v4H7zm2-5H6v3h3z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/icon.svg":
/*!*********************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/icon.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#C5C5C5\" d=\"M10 4.369 7.692 1.6 5.385 4.369 6 4.88 7.292 3.33v6.669l-5.388 3.233.492-2.116-.779-.182-.817 3.51 3.6.172.038-.8-1.81-.086 5.07-3.042 5.442 3.06-1.884.173.073.796 3.589-.329-.971-3.47-.77.215.57 2.039L8.092 9.99V3.33l1.293 1.55z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/directional/down.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/directional/down.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownOutlined: () => (/* binding */ DownOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/down.svg */ "./jimu-icons/svg/outlined/directional/down.svg");
/* harmony import */ var _svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const DownOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/locator.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/outlined/editor/locator.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocatorOutlined: () => (/* binding */ LocatorOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_locator_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/locator.svg */ "./jimu-icons/svg/outlined/editor/locator.svg");
/* harmony import */ var _svg_outlined_editor_locator_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_locator_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const LocatorOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_locator_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/config.ts":
/*!**************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/config.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayOrderType: () => (/* binding */ DisplayOrderType),
/* harmony export */   ElevationUnitType: () => (/* binding */ ElevationUnitType),
/* harmony export */   WidgetStyleType: () => (/* binding */ WidgetStyleType)
/* harmony export */ });
var DisplayOrderType;
(function (DisplayOrderType) {
    DisplayOrderType["xy"] = "XY";
    DisplayOrderType["yx"] = "YX";
})(DisplayOrderType || (DisplayOrderType = {}));
var WidgetStyleType;
(function (WidgetStyleType) {
    WidgetStyleType["classic"] = "CLASSIC";
    WidgetStyleType["modern"] = "MODERN";
})(WidgetStyleType || (WidgetStyleType = {}));
var ElevationUnitType;
(function (ElevationUnitType) {
    ElevationUnitType["metric"] = "METRIC";
    ElevationUnitType["imperial"] = "IMPERIAL";
})(ElevationUnitType || (ElevationUnitType = {}));


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/runtime/components/text-fit/index.tsx":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/runtime/components/text-fit/index.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextAutoFit: () => (/* binding */ TextAutoFit)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./your-extensions/widgets/coordinates_xy/src/runtime/components/text-fit/styles.ts");
/** @jsx jsx */


const { useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const TextAutoFit = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.memo((props) => {
    var _a, _b;
    const { text, className, widgetRect, domChange } = props;
    const outterContainerDom = useRef(null);
    const textDom = useRef(null);
    useEffect(() => {
        updateText();
    }, [text, widgetRect, (_a = outterContainerDom.current) === null || _a === void 0 ? void 0 : _a.clientWidth, (_b = outterContainerDom.current) === null || _b === void 0 ? void 0 : _b.clientHeight, domChange]);
    const updateText = () => {
        var _a, _b, _c, _d;
        const outterWidth = (_a = outterContainerDom.current) === null || _a === void 0 ? void 0 : _a.clientWidth;
        const outterHeight = (_b = outterContainerDom.current) === null || _b === void 0 ? void 0 : _b.clientHeight;
        const textWidth = (_c = textDom.current) === null || _c === void 0 ? void 0 : _c.clientWidth;
        const textHeight = (_d = textDom.current) === null || _d === void 0 ? void 0 : _d.clientHeight;
        if (!outterWidth || !textWidth || !outterHeight || !textHeight)
            return;
        if (textWidth !== outterWidth || textHeight !== outterHeight) {
            const widthRate = outterWidth / textWidth;
            const heightRate = outterHeight / textHeight;
            textDom.current.style.transform = `scale(${Math.min(widthRate, heightRate)})`;
        }
        else {
            textDom.current.style.transform = 'none';
        }
    };
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: outterContainerDom, css: (0,_styles__WEBPACK_IMPORTED_MODULE_1__.getStyles)(), className: className },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'text', ref: textDom }, text));
});


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/runtime/components/text-fit/styles.ts":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/runtime/components/text-fit/styles.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getStyles() {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    width: 100%;
    height: 100%;
    font-size: 20px;
    overflow: hidden;
    .text {
      display: inline-block;
      white-space: nowrap;
      transform-origin: left top;
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/runtime/style.ts":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/runtime/style.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getStyle(theme, isClassic, widgetRect, widgetSizeAuto) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    flex-direction: row;
    align-items: center;
    min-width: 160px;
    width: ${widgetRect.width};
    height: ${widgetRect.height};
    display: flex;
    .coordinates-widget-container {
      height: 28px;
      width: 100%;
      background-color: ${theme.ref.palette.white};
      border: 1px solid ${theme.ref.palette.neutral[500]};
      .coordinates-locate {
        border-radius: unset;
      }
      .coordinates-card {
        border: none;
        min-width: ${isClassic ? '160px' : '240px'};
        min-height: ${isClassic ? '26px' : '138px'};
        .widget-card-content {
          height: calc(100% - 40px);
          padding: 16px;
          .info-container {
            height: 100%;
            .textfit-container {
              width: 48%;
              margin-right: 2%;
              height: 100%;
              float: left;
            }
            .coordinates-computing {
              font-size:14px;
            }
            .coordinates-card-text-geo,
            .coordinates-card-text {
              height: calc(100% - 18px);
              width: 100%;
            }
            .coordinates-card-text-empty {
              ${!widgetSizeAuto && 'height: calc(100% - 18px)'};
              width: 100%;
            }
            .coordinates-card-text-geo {
              height: 100%;
            }
            .coordinates-card-text-geo-fixed,
            .coordinates-card-text-fixed,
            .coordinates-card-text-empty {
              display: flex;
            }
            .coordinates-card-text-fixed,
            .coordinates-card-text-empty {
              font-size: 14px;
            }
            .coordinates-card-text-geo-fixed {
              font-size: 16px;
            }
            .info-unit {
              font-weight: 500;
              font-size: 12px;
              line-height: 16px;
            }
            .truncate-two {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
              word-break: break-all;
            }
          }
        }
        .widget-card-footer {
          padding: 2px 10px;
          height: 32px;
          background-color: unset !important;
        }
      }
      .coordinates-info {
        padding: 0 4px;
        border: 1px solid ${theme.ref.palette.neutral[300]};
        border-top: none;
        border-bottom: none;
        color: ${theme.ref.palette.neutral[1100]};
        line-height: 26px;
        flex-grow: 2;
      }
      .copy-btn {
        cursor: pointer;
        border-right: ${isClassic ? `1px solid ${theme.ref.palette.neutral[300]}` : 'unset'};
        border-radius: unset;
      }
      .widget-card-footer {
        margin: 0;
        padding: 10px;
      }
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/runtime/translations/default.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/runtime/translations/default.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Coordinates',
    mapClickTips: 'Click the map to get the coordinates',
    mouseMoveTips: 'Move the cursor to get the coordinates',
    enableClickTips: 'Enable clicking the map to get the coordinates',
    disableClickTips: 'Disable clicking the map to get the coordinates',
    computing: 'Computing...',
    changeSystem: 'Select the output coordinate system',
    eyeAlt: ' Eye Altitude ({alt})',
    elev: 'Elevation ({ele})'
});


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/utils/index.ts":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/utils/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   degToDDM: () => (/* binding */ degToDDM),
/* harmony export */   degToDMS: () => (/* binding */ degToDMS),
/* harmony export */   getCSUnitByCrs: () => (/* binding */ getCSUnitByCrs),
/* harmony export */   getCrsBySpheroidStr: () => (/* binding */ getCrsBySpheroidStr),
/* harmony export */   getUnitRate: () => (/* binding */ getUnitRate),
/* harmony export */   getUnits: () => (/* binding */ getUnits),
/* harmony export */   getWktKeyStr: () => (/* binding */ getWktKeyStr),
/* harmony export */   isGeographicUnit: () => (/* binding */ isGeographicUnit),
/* harmony export */   isProjectUnit: () => (/* binding */ isProjectUnit),
/* harmony export */   localizeNumberBySettingInfo: () => (/* binding */ localizeNumberBySettingInfo)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const projectUnits = ['INCHES', 'FOOT', 'FOOT_US', 'YARDS', 'MILES', 'NAUTICAL_MILES', 'MILLIMETERS',
    'CENTIMETERS', 'METER', 'KILOMETERS', 'DECIMETERS', 'LINK_CLARKE', 'FOOT_GOLD_COAST', 'FOOT_CLARKE',
    'CHAIN_SEARS_1992_TRUNCATED', 'YARD_INDIAN', 'CHAIN_BENOIT_1895_B', 'YARD_SEARS', 'CHAIN_SEARS',
    'FOOT_SEARS', 'YARD_INDIAN_1937', '50_KILOMETERS', '150_KILOMETERS'];
const geographicUnits = ['DECIMAL_DEGREES', 'DEGREE_MINUTE_SECONDS', 'DEGREE', 'DEGREES_DECIMAL_MINUTES', 'GRAD', 'MGRS', 'USNG'];
const unitsValue = {
    // Meter
    INCHES: 0.0254,
    FOOT: 0.3048,
    FOOT_US: 0.3048006096012192,
    YARDS: 0.9144,
    MILES: 1609.344,
    NAUTICAL_MILES: 1852,
    MILLIMETERS: 0.001,
    CENTIMETERS: 0.01,
    METER: 1,
    KILOMETERS: 1000,
    DECIMETERS: 0.1,
    LINK_CLARKE: 0.2011661949,
    FOOT_GOLD_COAST: 0.3047997101815088,
    FOOT_CLARKE: 0.304797265,
    CHAIN_SEARS_1922_TRUNCATED: 20.116756,
    YARD_INDIAN: 0.9143985307444408,
    CHAIN_BENOIT_1895_B: 20.11678249437587,
    YARD_SEARS: 0.9143984146160287,
    CHAIN_SEARS: 20.11676512155263,
    FOOT_SEARS: 0.3047994715386762,
    YARD_INDIAN_1937: 0.91439523,
    '50_KILOMETERS': 50000.0,
    '150_KILOMETERS': 150000.0,
    // radian
    DEGREE: 0.0174532925199433,
    DECIMAL_DEGREES: 0.0174532925199433,
    MGRS: 0.0174532925199433, // MGRS / DEGREE = 1
    USNG: 0.0174532925199433,
    DEGREE_MINUTE_SECONDS: 0.0174532925199433,
    GRAD: 0.01570796326794897
};
const simGeogcsJson = __webpack_require__(/*! ../json/simple_geogcs.json */ "./your-extensions/widgets/coordinates_xy/src/json/simple_geogcs.json");
/**
 * Helper function to prettify decimal degrees into DMS (degrees-minutes-seconds).
 * @param {number} decDeg The decimal degree number
 * @param {string} decDir LAT or LON
 *
 * @return {string} Human-readable representation of decDeg.
 */
const degToDMS = (decDeg, decDir, decimal, showSeparators) => {
    let d = Math.abs(decDeg);
    let deg = Math.floor(d);
    d = d - deg;
    let min = Math.floor(d * 60);
    let sec = (d - min / 60) * 60 * 60;
    if (sec === 60) { // can happen due to rounding above
        min++;
        sec = 0;
    }
    if (min === 60) { // can happen due to rounding above
        deg++;
        min = 0;
    }
    const fixedSec = localizeNumberBySettingInfo(sec, {
        places: decimal,
        digitSeparator: showSeparators
    });
    const minStr = min < 10 ? `0${min}` : min;
    const secStr = sec < 10 ? `0${fixedSec}` : fixedSec;
    const dir = (decDir === 'LAT') ? (decDeg < 0 ? 'S' : 'N') : (decDeg < 0 ? 'W' : 'E');
    // return `${deg}&deg;${minStr}&prime;${secStr}&Prime;${dir}`
    return `${deg}°${minStr}′${secStr}″${dir}`;
};
//for hack Degrees Decimal Minutes
const degToDDM = (decDeg, decimal, showSeparators, type) => {
    const tailTag = type === 'longitude'
        ? (decDeg < 0 ? 'W' : 'E')
        : (decDeg < 0 ? 'S' : 'N');
    let d = Math.abs(decDeg);
    let deg = Math.floor(d);
    d = d - deg;
    let min = Math.floor(d * 60);
    let sec = Math.floor((d - min / 60) * 60 * 60);
    if (sec === 60) { // can happen due to rounding above
        min++;
        sec = 0;
    }
    if (min === 60) { // can happen due to rounding above
        deg++;
        min = 0;
    }
    const dm = localizeNumberBySettingInfo((min + (sec / 60)), {
        places: decimal,
        digitSeparator: showSeparators
    });
    // return `${deg}&deg;${dm}&prime;`
    return `${deg}°${dm}′${tailTag}`;
};
const isGeographicUnit = (unit) => {
    return geographicUnits.includes(unit);
};
const isProjectUnit = (unit) => {
    return projectUnits.includes(unit);
};
const localizeNumberBySettingInfo = (num, settingInfo) => {
    const { places, digitSeparator } = settingInfo;
    if (digitSeparator) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl().formatNumber(num, { maximumFractionDigits: places, minimumFractionDigits: places, useGrouping: true });
    }
    else {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl().formatNumber(num, { maximumFractionDigits: places, minimumFractionDigits: places, useGrouping: false });
    }
};
const getUnits = () => {
    let _units = 'english';
    const appState = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
    const userInfo = appState === null || appState === void 0 ? void 0 : appState.user;
    if (userInfo) {
        const { culture, units } = userInfo;
        if (units) {
            _units = units;
        }
        else {
            if (culture === null || culture === void 0 ? void 0 : culture.startsWith('en')) {
                _units = 'english';
            }
            else {
                _units = 'metric';
            }
        }
    }
    else {
        return _units;
    }
};
/**
 * Get cs default unit by crs
 * @param {any} crs
 */
const getCSUnitByCrs = (crs) => {
    var _a, _b;
    const wkt = crs === null || crs === void 0 ? void 0 : crs.wkt;
    if (!wkt)
        return '';
    const unitIndex = wkt === null || wkt === void 0 ? void 0 : wkt.lastIndexOf(',UNIT');
    if (unitIndex > 0) {
        const toDealStr = wkt.substr(unitIndex);
        const startIndex = toDealStr.indexOf('[');
        const endIndex = toDealStr.indexOf(']');
        const spheroidArrStr = toDealStr.substring(startIndex + 1, endIndex);
        const spheroidArr = spheroidArrStr.split(',');
        return (_b = (_a = spheroidArr === null || spheroidArr === void 0 ? void 0 : spheroidArr[0]) === null || _a === void 0 ? void 0 : _a.replace(/\"/g, '')) === null || _b === void 0 ? void 0 : _b.replace(/\'/g, '');
    }
    return '';
};
/**
 * Get SPHEROID/GEOGCS/DATUM by crs
 * @param {any} crs
 */
const getWktKeyStr = (crs, key = 'SPHEROID') => {
    var _a, _b;
    const wkt = crs === null || crs === void 0 ? void 0 : crs.wkt;
    const keyIndex = wkt === null || wkt === void 0 ? void 0 : wkt.indexOf(key);
    if (keyIndex >= 0) {
        const toDealStr = wkt.substr(keyIndex);
        const startIndex = toDealStr.indexOf('[');
        const endIndex = toDealStr.indexOf(']');
        const keyArrStr = toDealStr.substring(startIndex + 1, endIndex);
        const keyArr = keyArrStr.split(',');
        return (_b = (_a = keyArr === null || keyArr === void 0 ? void 0 : keyArr[0]) === null || _a === void 0 ? void 0 : _a.replace(/\"/g, '')) === null || _b === void 0 ? void 0 : _b.replace(/\'/g, '');
    }
    return null;
};
/**
 * Get outSR crs by spheroidStr
 * @param {string} spheroidStr
 */
const getCrsBySpheroidStr = (spheroidStr) => {
    return simGeogcsJson.find(crs => {
        return spheroidStr === (crs === null || crs === void 0 ? void 0 : crs.name);
    });
};
/**
 * Get cs default unit by crs
 * @param {string} defaultUnit
 * @param {string} outputUnit
 */
const getUnitRate = (defaultUnit, outputUnit, mapIsMercator) => {
    const notInUnitsValue = !unitsValue[defaultUnit === null || defaultUnit === void 0 ? void 0 : defaultUnit.toUpperCase()] || !unitsValue[outputUnit.toUpperCase()];
    const defaultRate = mapIsMercator || (!defaultUnit || !outputUnit) || outputUnit === 'DEGREES_DECIMAL_MINUTES' || notInUnitsValue;
    if (defaultRate) {
        return 1;
    }
    return unitsValue[defaultUnit.toUpperCase()] / unitsValue[outputUnit.toUpperCase()];
};


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/runtime/assets/pin-exb.svg":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/runtime/assets/pin-exb.svg ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zMDdfMjIwOCkiPg0KPHBhdGggZD0iTTExLjUgNC41VjE2LjE1ODRMNiAyMS4zMTQ2TDAuNSAxNi4xNTg0VjQuNUMwLjUgMi4yOTA4NiAyLjI5MDg2IDAuNSA0LjUgMC41SDcuNUM5LjcwOTE0IDAuNSAxMS41IDIuMjkwODYgMTEuNSA0LjVaIiBmaWxsPSIjMDA3Rjk0IiBzdHJva2U9IiMwMDYwNzEiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiAxMEM3LjY1Njg1IDEwIDkgOC42NTY4NSA5IDdDOSA1LjM0MzE1IDcuNjU2ODUgNCA2IDRDNC4zNDMxNSA0IDMgNS4zNDMxNSAzIDdDMyA4LjY1Njg1IDQuMzQzMTUgMTAgNiAxMFoiIGZpbGw9IndoaXRlIi8+DQo8L2c+DQo8ZGVmcz4NCjxjbGlwUGF0aCBpZD0iY2xpcDBfMzA3XzIyMDgiPg0KPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjIyIiBmaWxsPSJ3aGl0ZSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "@arcgis/core/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__;

/***/ }),

/***/ "esri/core/reactiveUtils":
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__;

/***/ }),

/***/ "esri/geometry/Point":
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ }),

/***/ "esri/geometry/SpatialReference":
/*!*************************************************!*\
  !*** external "esri/geometry/SpatialReference" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__;

/***/ }),

/***/ "esri/geometry/coordinateFormatter":
/*!****************************************************!*\
  !*** external "esri/geometry/coordinateFormatter" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__;

/***/ }),

/***/ "esri/geometry/projection":
/*!*******************************************!*\
  !*** external "esri/geometry/projection" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_projection__;

/***/ }),

/***/ "esri/geometry/support/webMercatorUtils":
/*!*********************************************************!*\
  !*** external "esri/geometry/support/webMercatorUtils" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/rest/geometryService":
/*!********************************************!*\
  !*** external "esri/rest/geometryService" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_geometryService__;

/***/ }),

/***/ "esri/rest/support/ProjectParameters":
/*!******************************************************!*\
  !*** external "esri/rest/support/ProjectParameters" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_support_ProjectParameters__;

/***/ }),

/***/ "esri/symbols/PictureMarkerSymbol":
/*!***************************************************!*\
  !*** external "esri/symbols/PictureMarkerSymbol" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__;

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

/***/ "jimu-layouts/layout-runtime":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/basic/copy-button":
/*!********************************************!*\
  !*** external "jimu-ui/basic/copy-button" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_copy_button__;

/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/json/simple_geogcs.json":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/json/simple_geogcs.json ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"wkid":3819,"name":"GCS_HD1909","unit":"Degree"},{"wkid":3821,"name":"GCS_TWD_1967","unit":"Degree"},{"wkid":3823,"name":"TWD_1997_3D","unit":"Degree"},{"wkid":3824,"name":"GCS_TWD_1997","unit":"Degree"},{"wkid":3888,"name":"IGRS_3D","unit":"Degree"},{"wkid":3889,"name":"GCS_IGRS","unit":"Degree"},{"wkid":3906,"name":"GCS_MGI_1901","unit":"Degree"},{"wkid":4001,"name":"GCS_Airy_1830","unit":"Degree"},{"wkid":4002,"name":"GCS_Airy_Modified","unit":"Degree"},{"wkid":4003,"name":"GCS_Australian","unit":"Degree"},{"wkid":4004,"name":"GCS_Bessel_1841","unit":"Degree"},{"wkid":4005,"name":"GCS_Bessel_Modified","unit":"Degree"},{"wkid":4006,"name":"GCS_Bessel_Namibia","unit":"Degree"},{"wkid":4007,"name":"GCS_Clarke_1858","unit":"Degree"},{"wkid":4008,"name":"GCS_Clarke_1866","unit":"Degree"},{"wkid":4009,"name":"GCS_Clarke_1866_Michigan","unit":"Degree"},{"wkid":4010,"name":"GCS_Clarke_1880_Benoit","unit":"Degree"},{"wkid":4011,"name":"GCS_Clarke_1880_IGN","unit":"Degree"},{"wkid":4012,"name":"GCS_Clarke_1880_RGS","unit":"Degree"},{"wkid":4013,"name":"GCS_Clarke_1880_Arc","unit":"Degree"},{"wkid":4014,"name":"GCS_Clarke_1880_SGA","unit":"Degree"},{"wkid":4015,"name":"GCS_Everest_Adj_1937","unit":"Degree"},{"wkid":4016,"name":"GCS_Everest_def_1967","unit":"Degree"},{"wkid":4017,"name":"MOLDREF99_3D","unit":"Degree"},{"wkid":4018,"name":"GCS_Everest_Modified","unit":"Degree"},{"wkid":4019,"name":"GCS_GRS_1980","unit":"Degree"},{"wkid":4020,"name":"GCS_Helmert_1906","unit":"Degree"},{"wkid":4021,"name":"GCS_Indonesian","unit":"Degree"},{"wkid":4022,"name":"GCS_International_1924","unit":"Degree"},{"wkid":4023,"name":"GCS_MOLDREF99","unit":"Degree"},{"wkid":4024,"name":"GCS_Krasovsky_1940","unit":"Degree"},{"wkid":4025,"name":"GCS_NWL_9D","unit":"Degree"},{"wkid":4027,"name":"GCS_Plessis_1817","unit":"Degree"},{"wkid":4028,"name":"GCS_Struve_1860","unit":"Degree"},{"wkid":4029,"name":"GCS_War_Office","unit":"Degree"},{"wkid":4031,"name":"GCS_GEM_10C","unit":"Degree"},{"wkid":4032,"name":"GCS_OSU_86F","unit":"Degree"},{"wkid":4033,"name":"GCS_OSU_91A","unit":"Degree"},{"wkid":4034,"name":"GCS_Clarke_1880","unit":"Degree"},{"wkid":4035,"name":"GCS_Sphere","unit":"Degree"},{"wkid":4036,"name":"GCS_GRS_1967","unit":"Degree"},{"wkid":4040,"name":"RGRDC_2005_3D","unit":"Degree"},{"wkid":4042,"name":"GCS_Everest_1830","unit":"Degree"},{"wkid":4044,"name":"GCS_Everest_def_1962","unit":"Degree"},{"wkid":4045,"name":"GCS_Everest_def_1975","unit":"Degree"},{"wkid":4046,"name":"GCS_RGRDC_2005","unit":"Degree"},{"wkid":4047,"name":"GCS_Sphere_GRS_1980_Authalic","unit":"Degree"},{"wkid":4052,"name":"GCS_Sphere_Clarke_1866_Authalic","unit":"Degree"},{"wkid":4053,"name":"GCS_Sphere_International_1924_Authalic","unit":"Degree"},{"wkid":4054,"name":"GCS_Hughes_1980","unit":"Degree"},{"wkid":4055,"name":"GCS_WGS_1984_Major_Auxiliary_Sphere","unit":"Degree"},{"wkid":4074,"name":"SREF98_3D","unit":"Degree"},{"wkid":4075,"name":"GCS_SREF98","unit":"Degree"},{"wkid":4080,"name":"REGCAN95_3D","unit":"Degree"},{"wkid":4081,"name":"GCS_REGCAN95","unit":"Degree"},{"wkid":4120,"name":"GCS_Greek","unit":"Degree"},{"wkid":4121,"name":"GCS_GGRS_1987","unit":"Degree"},{"wkid":4122,"name":"GCS_ATS_1977","unit":"Degree"},{"wkid":4123,"name":"GCS_KKJ","unit":"Degree"},{"wkid":4124,"name":"GCS_RT_1990","unit":"Degree"},{"wkid":4125,"name":"GCS_Samboja","unit":"Degree"},{"wkid":4126,"name":"GCS_LKS_1994","unit":"Degree"},{"wkid":4127,"name":"GCS_Tete","unit":"Degree"},{"wkid":4128,"name":"GCS_Madzansua","unit":"Degree"},{"wkid":4129,"name":"GCS_Observatario","unit":"Degree"},{"wkid":4130,"name":"GCS_Moznet","unit":"Degree"},{"wkid":4131,"name":"GCS_Indian_1960","unit":"Degree"},{"wkid":4132,"name":"GCS_FD_1958","unit":"Degree"},{"wkid":4133,"name":"GCS_Estonia_1992","unit":"Degree"},{"wkid":4134,"name":"GCS_PDO_1993","unit":"Degree"},{"wkid":4135,"name":"GCS_Old_Hawaiian","unit":"Degree"},{"wkid":4136,"name":"GCS_St_Lawrence_Island","unit":"Degree"},{"wkid":4137,"name":"GCS_St_Paul_Island","unit":"Degree"},{"wkid":4138,"name":"GCS_St_George_Island","unit":"Degree"},{"wkid":4139,"name":"GCS_Puerto_Rico","unit":"Degree"},{"wkid":4140,"name":"GCS_North_American_1983_CSRS","unit":"Degree"},{"wkid":4141,"name":"GCS_Israel","unit":"Degree"},{"wkid":4142,"name":"GCS_Locodjo_1965","unit":"Degree"},{"wkid":4143,"name":"GCS_Abidjan_1987","unit":"Degree"},{"wkid":4144,"name":"GCS_Kalianpur_1937","unit":"Degree"},{"wkid":4145,"name":"GCS_Kalianpur_1962","unit":"Degree"},{"wkid":4146,"name":"GCS_Kalianpur_1975","unit":"Degree"},{"wkid":4147,"name":"GCS_Hanoi_1972","unit":"Degree"},{"wkid":4148,"name":"GCS_Hartebeesthoek_1994","unit":"Degree"},{"wkid":4149,"name":"GCS_CH1903","unit":"Degree"},{"wkid":4150,"name":"GCS_CH1903+","unit":"Degree"},{"wkid":4151,"name":"GCS_Swiss_TRF_1995","unit":"Degree"},{"wkid":4152,"name":"GCS_North_American_1983_HARN","unit":"Degree"},{"wkid":4153,"name":"GCS_Rassadiran","unit":"Degree"},{"wkid":4154,"name":"GCS_European_1950_ED77","unit":"Degree"},{"wkid":4155,"name":"GCS_Dabola_1981","unit":"Degree"},{"wkid":4156,"name":"GCS_S_JTSK","unit":"Degree"},{"wkid":4157,"name":"GCS_Mount_Dillon","unit":"Degree"},{"wkid":4158,"name":"GCS_Naparima_1955","unit":"Degree"},{"wkid":4159,"name":"GCS_European_Libyan_Datum_1979","unit":"Degree"},{"wkid":4160,"name":"GCS_Chos_Malal_1914","unit":"Degree"},{"wkid":4161,"name":"GCS_Pampa_del_Castillo","unit":"Degree"},{"wkid":4162,"name":"GCS_Korean_Datum_1985","unit":"Degree"},{"wkid":4163,"name":"GCS_Yemen_NGN_1996","unit":"Degree"},{"wkid":4164,"name":"GCS_South_Yemen","unit":"Degree"},{"wkid":4165,"name":"GCS_Bissau","unit":"Degree"},{"wkid":4166,"name":"GCS_Korean_Datum_1995","unit":"Degree"},{"wkid":4167,"name":"GCS_NZGD_2000","unit":"Degree"},{"wkid":4168,"name":"GCS_Accra","unit":"Degree"},{"wkid":4169,"name":"GCS_American_Samoa_1962","unit":"Degree"},{"wkid":4170,"name":"GCS_SIRGAS","unit":"Degree"},{"wkid":4171,"name":"GCS_RGF_1993","unit":"Degree"},{"wkid":4172,"name":"GCS_POSGAR","unit":"Degree"},{"wkid":4173,"name":"GCS_IRENET95","unit":"Degree"},{"wkid":4174,"name":"GCS_Sierra_Leone_1924","unit":"Degree"},{"wkid":4175,"name":"GCS_Sierra_Leone_1968","unit":"Degree"},{"wkid":4176,"name":"GCS_Australian_Antarctic_1998","unit":"Degree"},{"wkid":4178,"name":"GCS_Pulkovo_1942_Adj_1983","unit":"Degree"},{"wkid":4179,"name":"GCS_Pulkovo_1942_Adj_1958","unit":"Degree"},{"wkid":4180,"name":"GCS_Estonia_1997","unit":"Degree"},{"wkid":4181,"name":"GCS_LUREF","unit":"Degree"},{"wkid":4182,"name":"GCS_Azores_Occidental_1939","unit":"Degree"},{"wkid":4183,"name":"GCS_Azores_Central_1948","unit":"Degree"},{"wkid":4184,"name":"GCS_Azores_Oriental_1940","unit":"Degree"},{"wkid":4185,"name":"GCS_Madeira_1936","unit":"Degree"},{"wkid":4188,"name":"GCS_OSNI_1952","unit":"Degree"},{"wkid":4189,"name":"GCS_REGVEN","unit":"Degree"},{"wkid":4190,"name":"GCS_POSGAR_1998","unit":"Degree"},{"wkid":4191,"name":"GCS_Albanian_1987","unit":"Degree"},{"wkid":4192,"name":"GCS_Douala_1948","unit":"Degree"},{"wkid":4193,"name":"GCS_Manoca_1962","unit":"Degree"},{"wkid":4194,"name":"GCS_Qornoq_1927","unit":"Degree"},{"wkid":4195,"name":"GCS_Scoresbysund_1952","unit":"Degree"},{"wkid":4196,"name":"GCS_Ammassalik_1958","unit":"Degree"},{"wkid":4197,"name":"GCS_Garoua","unit":"Degree"},{"wkid":4198,"name":"GCS_Kousseri","unit":"Degree"},{"wkid":4199,"name":"GCS_Egypt_1930","unit":"Degree"},{"wkid":4200,"name":"GCS_Pulkovo_1995","unit":"Degree"},{"wkid":4201,"name":"GCS_Adindan","unit":"Degree"},{"wkid":4202,"name":"GCS_Australian_1966","unit":"Degree"},{"wkid":4203,"name":"GCS_Australian_1984","unit":"Degree"},{"wkid":4204,"name":"GCS_Ain_el_Abd_1970","unit":"Degree"},{"wkid":4205,"name":"GCS_Afgooye","unit":"Degree"},{"wkid":4206,"name":"GCS_Agadez","unit":"Degree"},{"wkid":4207,"name":"GCS_Lisbon","unit":"Degree"},{"wkid":4208,"name":"GCS_Aratu","unit":"Degree"},{"wkid":4209,"name":"GCS_Arc_1950","unit":"Degree"},{"wkid":4210,"name":"GCS_Arc_1960","unit":"Degree"},{"wkid":4211,"name":"GCS_Batavia","unit":"Degree"},{"wkid":4212,"name":"GCS_Barbados_1938","unit":"Degree"},{"wkid":4213,"name":"GCS_Beduaram","unit":"Degree"},{"wkid":4214,"name":"GCS_Beijing_1954","unit":"Degree"},{"wkid":4215,"name":"GCS_Belge_1950","unit":"Degree"},{"wkid":4216,"name":"GCS_Bermuda_1957","unit":"Degree"},{"wkid":4218,"name":"GCS_Bogota","unit":"Degree"},{"wkid":4219,"name":"GCS_Bukit_Rimpah","unit":"Degree"},{"wkid":4220,"name":"GCS_Camacupa","unit":"Degree"},{"wkid":4221,"name":"GCS_Campo_Inchauspe","unit":"Degree"},{"wkid":4222,"name":"GCS_Cape","unit":"Degree"},{"wkid":4223,"name":"GCS_Carthage","unit":"Degree"},{"wkid":4224,"name":"GCS_Chua","unit":"Degree"},{"wkid":4225,"name":"GCS_Corrego_Alegre","unit":"Degree"},{"wkid":4226,"name":"GCS_Cote_d_Ivoire","unit":"Degree"},{"wkid":4227,"name":"GCS_Deir_ez_Zor","unit":"Degree"},{"wkid":4228,"name":"GCS_Douala","unit":"Degree"},{"wkid":4229,"name":"GCS_Egypt_1907","unit":"Degree"},{"wkid":4230,"name":"GCS_European_1950","unit":"Degree"},{"wkid":4231,"name":"GCS_European_1987","unit":"Degree"},{"wkid":4232,"name":"GCS_Fahud","unit":"Degree"},{"wkid":4233,"name":"GCS_Gandajika_1970","unit":"Degree"},{"wkid":4234,"name":"GCS_Garoua","unit":"Degree"},{"wkid":4235,"name":"GCS_Guyane_Francaise","unit":"Degree"},{"wkid":4236,"name":"GCS_Hu_Tzu_Shan","unit":"Degree"},{"wkid":4237,"name":"GCS_Hungarian_1972","unit":"Degree"},{"wkid":4238,"name":"GCS_Indonesian_1974","unit":"Degree"},{"wkid":4239,"name":"GCS_Indian_1954","unit":"Degree"},{"wkid":4240,"name":"GCS_Indian_1975","unit":"Degree"},{"wkid":4241,"name":"GCS_Jamaica_1875","unit":"Degree"},{"wkid":4242,"name":"GCS_Jamaica_1969","unit":"Degree"},{"wkid":4243,"name":"GCS_Kalianpur_1880","unit":"Degree"},{"wkid":4244,"name":"GCS_Kandawala","unit":"Degree"},{"wkid":4245,"name":"GCS_Kertau","unit":"Degree"},{"wkid":4246,"name":"GCS_Kuwait_Oil_Company","unit":"Degree"},{"wkid":4247,"name":"GCS_La_Canoa","unit":"Degree"},{"wkid":4248,"name":"GCS_Provisional_S_American_1956","unit":"Degree"},{"wkid":4249,"name":"GCS_Lake","unit":"Degree"},{"wkid":4250,"name":"GCS_Leigon","unit":"Degree"},{"wkid":4251,"name":"GCS_Liberia_1964","unit":"Degree"},{"wkid":4252,"name":"GCS_Lome","unit":"Degree"},{"wkid":4253,"name":"GCS_Luzon_1911","unit":"Degree"},{"wkid":4254,"name":"GCS_Hito_XVIII_1963","unit":"Degree"},{"wkid":4255,"name":"GCS_Herat_North","unit":"Degree"},{"wkid":4256,"name":"GCS_Mahe_1971","unit":"Degree"},{"wkid":4257,"name":"GCS_Makassar","unit":"Degree"},{"wkid":4258,"name":"GCS_ETRS_1989","unit":"Degree"},{"wkid":4259,"name":"GCS_Malongo_1987","unit":"Degree"},{"wkid":4260,"name":"GCS_Manoca","unit":"Degree"},{"wkid":4261,"name":"GCS_Merchich","unit":"Degree"},{"wkid":4262,"name":"GCS_Massawa","unit":"Degree"},{"wkid":4263,"name":"GCS_Minna","unit":"Degree"},{"wkid":4264,"name":"GCS_Mhast","unit":"Degree"},{"wkid":4265,"name":"GCS_Monte_Mario","unit":"Degree"},{"wkid":4266,"name":"GCS_Mporaloko","unit":"Degree"},{"wkid":4267,"name":"GCS_North_American_1927","unit":"Degree"},{"wkid":4268,"name":"GCS_North_American_Michigan","unit":"Degree"},{"wkid":4269,"name":"GCS_North_American_1983","unit":"Degree"},{"wkid":4270,"name":"GCS_Nahrwan_1967","unit":"Degree"},{"wkid":4271,"name":"GCS_Naparima_1972","unit":"Degree"},{"wkid":4272,"name":"GCS_New_Zealand_1949","unit":"Degree"},{"wkid":4273,"name":"GCS_NGO_1948","unit":"Degree"},{"wkid":4274,"name":"GCS_Datum_73","unit":"Degree"},{"wkid":4275,"name":"GCS_NTF","unit":"Degree"},{"wkid":4276,"name":"GCS_NSWC_9Z_2","unit":"Degree"},{"wkid":4277,"name":"GCS_OSGB_1936","unit":"Degree"},{"wkid":4278,"name":"GCS_OSGB_1970_SN","unit":"Degree"},{"wkid":4279,"name":"GCS_OS_SN_1980","unit":"Degree"},{"wkid":4280,"name":"GCS_Padang_1884","unit":"Degree"},{"wkid":4281,"name":"GCS_Palestine_1923","unit":"Degree"},{"wkid":4282,"name":"GCS_Pointe_Noire","unit":"Degree"},{"wkid":4283,"name":"GCS_GDA_1994","unit":"Degree"},{"wkid":4284,"name":"GCS_Pulkovo_1942","unit":"Degree"},{"wkid":4285,"name":"GCS_Qatar_1974","unit":"Degree"},{"wkid":4286,"name":"GCS_Qatar_1948","unit":"Degree"},{"wkid":4287,"name":"GCS_Qornoq","unit":"Degree"},{"wkid":4288,"name":"GCS_Loma_Quintana","unit":"Degree"},{"wkid":4289,"name":"GCS_Amersfoort","unit":"Degree"},{"wkid":4291,"name":"GCS_South_American_1969","unit":"Degree"},{"wkid":4292,"name":"GCS_Sapper_Hill_1943","unit":"Degree"},{"wkid":4293,"name":"GCS_Schwarzeck","unit":"Degree"},{"wkid":4294,"name":"GCS_Segora","unit":"Degree"},{"wkid":4295,"name":"GCS_Serindung","unit":"Degree"},{"wkid":4296,"name":"GCS_Sudan","unit":"Degree"},{"wkid":4297,"name":"GCS_Tananarive_1925","unit":"Degree"},{"wkid":4298,"name":"GCS_Timbalai_1948","unit":"Degree"},{"wkid":4299,"name":"GCS_TM65","unit":"Degree"},{"wkid":4300,"name":"GCS_TM75","unit":"Degree"},{"wkid":4301,"name":"GCS_Tokyo","unit":"Degree"},{"wkid":4302,"name":"GCS_Trinidad_1903","unit":"Degree"},{"wkid":4303,"name":"GCS_Trucial_Coast_1948","unit":"Degree"},{"wkid":4304,"name":"GCS_Voirol_1875","unit":"Degree"},{"wkid":4305,"name":"GCS_Voirol_Unifie_1960","unit":"Grad"},{"wkid":4306,"name":"GCS_Bern_1938","unit":"Degree"},{"wkid":4307,"name":"GCS_Nord_Sahara_1959","unit":"Degree"},{"wkid":4308,"name":"GCS_RT38","unit":"Degree"},{"wkid":4309,"name":"GCS_Yacare","unit":"Degree"},{"wkid":4310,"name":"GCS_Yoff","unit":"Degree"},{"wkid":4311,"name":"GCS_Zanderij","unit":"Degree"},{"wkid":4312,"name":"GCS_MGI","unit":"Degree"},{"wkid":4313,"name":"GCS_Belge_1972","unit":"Degree"},{"wkid":4314,"name":"GCS_Deutsches_Hauptdreiecksnetz","unit":"Degree"},{"wkid":4315,"name":"GCS_Conakry_1905","unit":"Degree"},{"wkid":4316,"name":"GCS_Dealul_Piscului_1933","unit":"Degree"},{"wkid":4317,"name":"GCS_Dealul_Piscului_1970","unit":"Degree"},{"wkid":4318,"name":"GCS_NGN","unit":"Degree"},{"wkid":4319,"name":"GCS_KUDAMS","unit":"Degree"},{"wkid":4322,"name":"GCS_WGS_1972","unit":"Degree"},{"wkid":4324,"name":"GCS_WGS_1972_BE","unit":"Degree"},{"wkid":4326,"name":"GCS_WGS_1984","unit":"Degree"},{"wkid":4463,"name":"GCS_RGSPM_2006","unit":"Degree"},{"wkid":4466,"name":"RGSPM_2006_3D","unit":"Degree"},{"wkid":4469,"name":"RGM_2004_3D","unit":"Degree"},{"wkid":4470,"name":"GCS_RGM_2004","unit":"Degree"},{"wkid":4472,"name":"Cadastre_1997_3D","unit":"Degree"},{"wkid":4475,"name":"GCS_Cadastre_1997","unit":"Degree"},{"wkid":4480,"name":"China_Geodetic_Coordinate_System_2000_3D","unit":"Degree"},{"wkid":4482,"name":"Mexican_Datum_of_1993_3D","unit":"Degree"},{"wkid":4483,"name":"GCS_Mexican_Datum_of_1993","unit":"Degree"},{"wkid":4490,"name":"GCS_China_Geodetic_Coordinate_System_2000","unit":"Degree"},{"wkid":4555,"name":"GCS_New_Beijing","unit":"Degree"},{"wkid":4557,"name":"RRAF_1991_3D","unit":"Degree"},{"wkid":4558,"name":"GCS_RRAF_1991","unit":"Degree"},{"wkid":4600,"name":"GCS_Anguilla_1957","unit":"Degree"},{"wkid":4601,"name":"GCS_Antigua_1943","unit":"Degree"},{"wkid":4602,"name":"GCS_Dominica_1945","unit":"Degree"},{"wkid":4603,"name":"GCS_Grenada_1953","unit":"Degree"},{"wkid":4604,"name":"GCS_Montserrat_1958","unit":"Degree"},{"wkid":4605,"name":"GCS_St_Kitts_1955","unit":"Degree"},{"wkid":4606,"name":"GCS_St_Lucia_1955","unit":"Degree"},{"wkid":4607,"name":"GCS_St_Vincent_1945","unit":"Degree"},{"wkid":4608,"name":"GCS_NAD_1927_Definition_1976","unit":"Degree"},{"wkid":4609,"name":"GCS_NAD_1927_CGQ77","unit":"Degree"},{"wkid":4610,"name":"GCS_Xian_1980","unit":"Degree"},{"wkid":4611,"name":"GCS_Hong_Kong_1980","unit":"Degree"},{"wkid":4612,"name":"GCS_JGD_2000","unit":"Degree"},{"wkid":4613,"name":"GCS_Gunung_Segara","unit":"Degree"},{"wkid":4614,"name":"GCS_QND_1995","unit":"Degree"},{"wkid":4615,"name":"GCS_Porto_Santo_1936","unit":"Degree"},{"wkid":4616,"name":"GCS_Selvagem_Grande_1938","unit":"Degree"},{"wkid":4617,"name":"GCS_North_American_1983_CSRS","unit":"Degree"},{"wkid":4618,"name":"GCS_South_American_1969","unit":"Degree"},{"wkid":4619,"name":"GCS_SWEREF99","unit":"Degree"},{"wkid":4620,"name":"GCS_Point_58","unit":"Degree"},{"wkid":4621,"name":"GCS_Fort_Marigot","unit":"Degree"},{"wkid":4622,"name":"GCS_Sainte_Anne","unit":"Degree"},{"wkid":4623,"name":"GCS_CSG_1967","unit":"Degree"},{"wkid":4624,"name":"GCS_RGFG_1995","unit":"Degree"},{"wkid":4625,"name":"GCS_Fort_Desaix","unit":"Degree"},{"wkid":4626,"name":"GCS_Reunion_1947","unit":"Degree"},{"wkid":4627,"name":"GCS_RGR_1992","unit":"Degree"},{"wkid":4628,"name":"GCS_Tahiti_1952","unit":"Degree"},{"wkid":4629,"name":"GCS_Tahaa_1954","unit":"Degree"},{"wkid":4630,"name":"GCS_IGN72_Nuku_Hiva","unit":"Degree"},{"wkid":4631,"name":"GCS_Kerguelen_Island_1949","unit":"Degree"},{"wkid":4632,"name":"GCS_Combani_1950","unit":"Degree"},{"wkid":4633,"name":"GCS_IGN56_Lifou","unit":"Degree"},{"wkid":4636,"name":"GCS_Petrels_1972","unit":"Degree"},{"wkid":4637,"name":"GCS_Pointe_Geologie_Perroud_1950","unit":"Degree"},{"wkid":4638,"name":"GCS_Saint_Pierre_et_Miquelon_1950","unit":"Degree"},{"wkid":4639,"name":"GCS_MOP78","unit":"Degree"},{"wkid":4641,"name":"GCS_IGN53_Mare","unit":"Degree"},{"wkid":4642,"name":"GCS_ST84_Ile_des_Pins","unit":"Degree"},{"wkid":4643,"name":"GCS_ST71_Belep","unit":"Degree"},{"wkid":4644,"name":"GCS_NEA74_Noumea","unit":"Degree"},{"wkid":4645,"name":"GCS_RGNC_1991","unit":"Degree"},{"wkid":4646,"name":"GCS_Grand_Comoros","unit":"Degree"},{"wkid":4657,"name":"GCS_Reykjavik_1900","unit":"Degree"},{"wkid":4658,"name":"GCS_Hjorsey_1955","unit":"Degree"},{"wkid":4659,"name":"GCS_ISN_1993","unit":"Degree"},{"wkid":4660,"name":"GCS_Helle_1954","unit":"Degree"},{"wkid":4661,"name":"GCS_LKS_1992","unit":"Degree"},{"wkid":4662,"name":"GCS_IGN72_Grande_Terre","unit":"Degree"},{"wkid":4663,"name":"GCS_Porto_Santo_1995","unit":"Degree"},{"wkid":4664,"name":"GCS_Azores_Oriental_1995","unit":"Degree"},{"wkid":4665,"name":"GCS_Azores_Central_1995","unit":"Degree"},{"wkid":4666,"name":"GCS_Lisbon_1890","unit":"Degree"},{"wkid":4667,"name":"GCS_IKBD_1992","unit":"Degree"},{"wkid":4668,"name":"GCS_European_1979","unit":"Degree"},{"wkid":4669,"name":"GCS_LKS_1994","unit":"Degree"},{"wkid":4670,"name":"GCS_IGM_1995","unit":"Degree"},{"wkid":4671,"name":"GCS_Voirol_1879","unit":"Degree"},{"wkid":4672,"name":"GCS_Chatham_Island_1971","unit":"Degree"},{"wkid":4673,"name":"GCS_Chatham_Islands_1979","unit":"Degree"},{"wkid":4674,"name":"GCS_SIRGAS_2000","unit":"Degree"},{"wkid":4675,"name":"GCS_Guam_1963","unit":"Degree"},{"wkid":4676,"name":"GCS_Vientiane_1982","unit":"Degree"},{"wkid":4677,"name":"GCS_Lao_1993","unit":"Degree"},{"wkid":4678,"name":"GCS_Lao_1997","unit":"Degree"},{"wkid":4679,"name":"GCS_Jouik_1961","unit":"Degree"},{"wkid":4680,"name":"GCS_Nouakchott_1965","unit":"Degree"},{"wkid":4682,"name":"GCS_Gulshan_303","unit":"Degree"},{"wkid":4683,"name":"GCS_PRS_1992","unit":"Degree"},{"wkid":4684,"name":"GCS_Gan_1970","unit":"Degree"},{"wkid":4686,"name":"GCS_MAGNA","unit":"Degree"},{"wkid":4687,"name":"GCS_RGPF","unit":"Degree"},{"wkid":4688,"name":"GCS_Fatu_Iva_1972","unit":"Degree"},{"wkid":4689,"name":"GCS_IGN63_Hiva_Oa","unit":"Degree"},{"wkid":4690,"name":"GCS_Tahiti_1979","unit":"Degree"},{"wkid":4691,"name":"GCS_Moorea_1987","unit":"Degree"},{"wkid":4692,"name":"GCS_Maupiti_1983","unit":"Degree"},{"wkid":4693,"name":"GCS_Nakhl-e_Ghanem","unit":"Degree"},{"wkid":4694,"name":"GCS_POSGAR_1994","unit":"Degree"},{"wkid":4695,"name":"GCS_Katanga_1955","unit":"Degree"},{"wkid":4696,"name":"GCS_Kasai_1953","unit":"Degree"},{"wkid":4697,"name":"GCS_IGC_1962_6th_Parallel_South","unit":"Degree"},{"wkid":4698,"name":"GCS_Kerguelen_Island_1949","unit":"Degree"},{"wkid":4699,"name":"GCS_Le_Pouce_1934","unit":"Degree"},{"wkid":4700,"name":"GCS_IGN_Astro_1960","unit":"Degree"},{"wkid":4701,"name":"GCS_IGCB_1955","unit":"Degree"},{"wkid":4702,"name":"GCS_Mauritania_1999","unit":"Degree"},{"wkid":4703,"name":"GCS_Mhast_1951","unit":"Degree"},{"wkid":4704,"name":"GCS_Mhast_Onshore","unit":"Degree"},{"wkid":4705,"name":"GCS_Mhast_Offshore","unit":"Degree"},{"wkid":4706,"name":"GCS_Egypt_Gulf_of_Suez_S-650_TL","unit":"Degree"},{"wkid":4707,"name":"GCS_Tern_Island_1961","unit":"Degree"},{"wkid":4708,"name":"GCS_Anna_1_1965","unit":"Degree"},{"wkid":4709,"name":"GCS_Beacon_E_1945","unit":"Degree"},{"wkid":4710,"name":"GCS_DOS_71_4","unit":"Degree"},{"wkid":4711,"name":"GCS_Astro_1952","unit":"Degree"},{"wkid":4712,"name":"GCS_Ascension_Island_1958","unit":"Degree"},{"wkid":4713,"name":"GCS_Ayabelle","unit":"Degree"},{"wkid":4714,"name":"GCS_Bellevue_IGN","unit":"Degree"},{"wkid":4715,"name":"GCS_Camp_Area","unit":"Degree"},{"wkid":4716,"name":"GCS_Canton_1966","unit":"Degree"},{"wkid":4717,"name":"GCS_Cape_Canaveral","unit":"Degree"},{"wkid":4718,"name":"GCS_Solomon_1968","unit":"Degree"},{"wkid":4719,"name":"GCS_Easter_Island_1967","unit":"Degree"},{"wkid":4720,"name":"GCS_Fiji_1986","unit":"Degree"},{"wkid":4721,"name":"GCS_Fiji_1956","unit":"Degree"},{"wkid":4722,"name":"GCS_ISTS_061_1968","unit":"Degree"},{"wkid":4723,"name":"GCS_Grand_Cayman_1959","unit":"Degree"},{"wkid":4724,"name":"GCS_ISTS_073_1969","unit":"Degree"},{"wkid":4725,"name":"GCS_Johnston_Island_1961","unit":"Degree"},{"wkid":4726,"name":"GCS_Little_Cayman_1961","unit":"Degree"},{"wkid":4727,"name":"GCS_Midway_1961","unit":"Degree"},{"wkid":4728,"name":"GCS_Pico_de_Las_Nieves","unit":"Degree"},{"wkid":4729,"name":"GCS_Pitcairn_1967","unit":"Degree"},{"wkid":4730,"name":"GCS_Santo_DOS_1965","unit":"Degree"},{"wkid":4731,"name":"GCS_Viti_Levu_1916","unit":"Degree"},{"wkid":4732,"name":"GCS_Wake_Eniwetok_1960","unit":"Degree"},{"wkid":4733,"name":"GCS_Wake_Island_1952","unit":"Degree"},{"wkid":4734,"name":"GCS_Tristan_1968","unit":"Degree"},{"wkid":4735,"name":"GCS_Kusaie_1951","unit":"Degree"},{"wkid":4736,"name":"GCS_Deception_Island","unit":"Degree"},{"wkid":4737,"name":"GCS_Korea_2000","unit":"Degree"},{"wkid":4738,"name":"GCS_Hong_Kong_1963","unit":"Degree"},{"wkid":4739,"name":"GCS_Hong_Kong_1963_67","unit":"Degree"},{"wkid":4740,"name":"GCS_PZ_1990","unit":"Degree"},{"wkid":4741,"name":"GCS_FD_1954","unit":"Degree"},{"wkid":4742,"name":"GCS_GDM_2000","unit":"Degree"},{"wkid":4743,"name":"GCS_Karbala_1979_Polservice","unit":"Degree"},{"wkid":4744,"name":"GCS_Nahrwan_1934","unit":"Degree"},{"wkid":4745,"name":"GCS_RD/83","unit":"Degree"},{"wkid":4746,"name":"GCS_PD/83","unit":"Degree"},{"wkid":4747,"name":"GCS_Greenland_1996","unit":"Degree"},{"wkid":4748,"name":"GCS_Vanua_Levu_1915","unit":"Degree"},{"wkid":4749,"name":"GCS_RGNC_1991-93","unit":"Degree"},{"wkid":4750,"name":"GCS_ST87_Ouvea","unit":"Degree"},{"wkid":4751,"name":"GCS_Kertau_RSO","unit":"Degree"},{"wkid":4752,"name":"GCS_Viti_Levu_1912","unit":"Degree"},{"wkid":4753,"name":"GCS_fk89","unit":"Degree"},{"wkid":4754,"name":"GCS_LGD2006","unit":"Degree"},{"wkid":4755,"name":"GCS_DGN_1995","unit":"Degree"},{"wkid":4756,"name":"GCS_VN_2000","unit":"Degree"},{"wkid":4757,"name":"GCS_SVY21","unit":"Degree"},{"wkid":4758,"name":"GCS_JAD_2001","unit":"Degree"},{"wkid":4759,"name":"GCS_NAD_1983_NSRS2007","unit":"Degree"},{"wkid":4760,"name":"GCS_WGS_1966","unit":"Degree"},{"wkid":4761,"name":"GCS_HTRS96","unit":"Degree"},{"wkid":4762,"name":"GCS_Bermuda_2000","unit":"Degree"},{"wkid":4763,"name":"GCS_Pitcairn_2006","unit":"Degree"},{"wkid":4764,"name":"GCS_RSRGD2000","unit":"Degree"},{"wkid":4765,"name":"GCS_Slovenia_1996","unit":"Degree"},{"wkid":4801,"name":"GCS_Bern_1898_Bern","unit":"Degree"},{"wkid":4802,"name":"GCS_Bogota_Bogota","unit":"Degree"},{"wkid":4803,"name":"GCS_Lisbon_Lisbon","unit":"Degree"},{"wkid":4804,"name":"GCS_Makassar_Jakarta","unit":"Degree"},{"wkid":4805,"name":"GCS_MGI_Ferro","unit":"Degree"},{"wkid":4806,"name":"GCS_Monte_Mario_Rome","unit":"Degree"},{"wkid":4807,"name":"GCS_NTF_Paris","unit":"Grad"},{"wkid":4808,"name":"GCS_Padang_1884_Jakarta","unit":"Degree"},{"wkid":4809,"name":"GCS_Belge_1950_Brussels","unit":"Degree"},{"wkid":4810,"name":"GCS_Tananarive_1925_Paris","unit":"Grad"},{"wkid":4811,"name":"GCS_Voirol_1875_Paris","unit":"Grad"},{"wkid":4812,"name":"GCS_Voirol_Unifie_1960_Paris","unit":"Grad"},{"wkid":4813,"name":"GCS_Batavia_Jakarta","unit":"Degree"},{"wkid":4814,"name":"GCS_RT38_Stockholm","unit":"Degree"},{"wkid":4815,"name":"GCS_Greek_Athens","unit":"Degree"},{"wkid":4816,"name":"GCS_Carthage_Paris","unit":"Grad"},{"wkid":4817,"name":"GCS_NGO_1948_Oslo","unit":"Degree"},{"wkid":4818,"name":"GCS_S_JTSK_Ferro","unit":"Degree"},{"wkid":4819,"name":"GCS_Nord_Sahara_1959_Paris","unit":"Grad"},{"wkid":4820,"name":"GCS_Gunung_Segara_Jakarta","unit":"Degree"},{"wkid":4821,"name":"GCS_Voirol_1879_Paris","unit":"Grad"},{"wkid":4823,"name":"GCS_Sao_Tome","unit":"Degree"},{"wkid":4824,"name":"GCS_Principe","unit":"Degree"},{"wkid":4883,"name":"Slovenia_1996_3D","unit":"Degree"},{"wkid":4885,"name":"RSRGD2000_3D","unit":"Degree"},{"wkid":4887,"name":"Bermuda_2000_3D","unit":"Degree"},{"wkid":4889,"name":"HTRS96_3D","unit":"Degree"},{"wkid":4891,"name":"WGS_1966_3D","unit":"Degree"},{"wkid":4893,"name":"NAD_1983_NSRS2007_3D","unit":"Degree"},{"wkid":4895,"name":"JAD_2001_3D","unit":"Degree"},{"wkid":4898,"name":"DGN_1995_3D","unit":"Degree"},{"wkid":4900,"name":"LGD2006_3D","unit":"Degree"},{"wkid":4901,"name":"GCS_ATF_Paris","unit":"Grad"},{"wkid":4902,"name":"GCS_Nord_de_Guerre_Paris","unit":"Grad"},{"wkid":4903,"name":"GCS_Madrid_1870_Madrid","unit":"Degree"},{"wkid":4904,"name":"GCS_Lisbon_1890_Lisbon","unit":"Degree"},{"wkid":4907,"name":"RGNC_1991-93_3D","unit":"Degree"},{"wkid":4909,"name":"Greenland_1996_3D","unit":"Degree"},{"wkid":4921,"name":"GDM_2000_3D","unit":"Degree"},{"wkid":4923,"name":"PZ_1990_3D","unit":"Degree"},{"wkid":4925,"name":"Mauritania_1999_3D","unit":"Degree"},{"wkid":4927,"name":"Korea_2000_3D","unit":"Degree"},{"wkid":4929,"name":"POSGAR_1994_3D","unit":"Degree"},{"wkid":4931,"name":"Australian_Antarctic_1998_3D","unit":"Degree"},{"wkid":4933,"name":"Swiss_TRF_1995_3D","unit":"Degree"},{"wkid":4935,"name":"Estonia_1997_3D","unit":"Degree"},{"wkid":4937,"name":"ETRS_1989_3D","unit":"Degree"},{"wkid":4939,"name":"GDA_1994_3D","unit":"Degree"},{"wkid":4941,"name":"Hartebeesthoek_1994_3D","unit":"Degree"},{"wkid":4943,"name":"IRENET95_3D","unit":"Degree"},{"wkid":4945,"name":"ISN_1993_3D","unit":"Degree"},{"wkid":4947,"name":"JGD_2000_3D","unit":"Degree"},{"wkid":4949,"name":"LKS_1992_3D","unit":"Degree"},{"wkid":4951,"name":"LKS_1994_3D","unit":"Degree"},{"wkid":4953,"name":"Moznet_3D","unit":"Degree"},{"wkid":4955,"name":"North_American_1983_CSRS_3D","unit":"Degree"},{"wkid":4957,"name":"North_American_1983_HARN_3D","unit":"Degree"},{"wkid":4959,"name":"NZGD_2000_3D","unit":"Degree"},{"wkid":4961,"name":"POSGAR_1998_3D","unit":"Degree"},{"wkid":4963,"name":"REGVEN_3D","unit":"Degree"},{"wkid":4965,"name":"RGF_1993_3D","unit":"Degree"},{"wkid":4967,"name":"RGFG_1995_3D","unit":"Degree"},{"wkid":4971,"name":"RGR_1992_3D","unit":"Degree"},{"wkid":4975,"name":"SIRGAS_3D","unit":"Degree"},{"wkid":4977,"name":"SWEREF99_3D","unit":"Degree"},{"wkid":4979,"name":"WGS_1984_3D","unit":"Degree"},{"wkid":4981,"name":"Yemen_NGN_1996_3D","unit":"Degree"},{"wkid":4983,"name":"IGM_1995_3D","unit":"Degree"},{"wkid":4985,"name":"WGS_1972_3D","unit":"Degree"},{"wkid":4987,"name":"WGS_1972_BE_3D","unit":"Degree"},{"wkid":4989,"name":"SIRGAS_2000_3D","unit":"Degree"},{"wkid":4991,"name":"Lao_1993_3D","unit":"Degree"},{"wkid":4993,"name":"Lao_1997_3D","unit":"Degree"},{"wkid":4995,"name":"PRS_1992_3D","unit":"Degree"},{"wkid":4997,"name":"MAGNA_3D","unit":"Degree"},{"wkid":4999,"name":"RGPF_3D","unit":"Degree"},{"wkid":5012,"name":"PTRA08_3D","unit":"Degree"},{"wkid":5013,"name":"GCS_PTRA08","unit":"Degree"},{"wkid":5228,"name":"GCS_S_JTSK/05","unit":"Degree"},{"wkid":5229,"name":"GCS_S_JTSK/05_Ferro","unit":"Degree"},{"wkid":5233,"name":"GCS_SLD99","unit":"Degree"},{"wkid":5245,"name":"GDBD2009_3D","unit":"Degree"},{"wkid":5246,"name":"GCS_GDBD2009","unit":"Degree"},{"wkid":5251,"name":"TUREF_3D","unit":"Degree"},{"wkid":5252,"name":"GCS_TUREF","unit":"Degree"},{"wkid":5263,"name":"DRUKREF_03_3D","unit":"Degree"},{"wkid":5264,"name":"GCS_DRUKREF_03","unit":"Degree"},{"wkid":5323,"name":"ISN_2004_3D","unit":"Degree"},{"wkid":5324,"name":"GCS_ISN_2004","unit":"Degree"},{"wkid":5340,"name":"GCS_POSGAR_2007","unit":"Degree"},{"wkid":5342,"name":"POSGAR_3D","unit":"Degree"},{"wkid":5353,"name":"MARGEN_3D","unit":"Degree"},{"wkid":5354,"name":"GCS_MARGEN","unit":"Degree"},{"wkid":5360,"name":"GCS_SIRGAS-Chile","unit":"Degree"},{"wkid":5364,"name":"CR05_3D","unit":"Degree"},{"wkid":5365,"name":"GCS_CR05","unit":"Degree"},{"wkid":5370,"name":"MARCARIO_SOLIS_3D","unit":"Degree"},{"wkid":5371,"name":"GCS_MARCARIO_SOLIS","unit":"Degree"},{"wkid":5372,"name":"Peru96_3D","unit":"Degree"},{"wkid":5373,"name":"GCS_Peru96","unit":"Degree"},{"wkid":5380,"name":"SIRGAS-ROU98_3D","unit":"Degree"},{"wkid":5381,"name":"GCS_SIRGAS-ROU98","unit":"Degree"},{"wkid":5392,"name":"SIRGAS_ES2007.8_3D","unit":"Degree"},{"wkid":5393,"name":"GCS_SIRGAS_ES2007.8","unit":"Degree"},{"wkid":5451,"name":"GCS_Ocotepeque_1935","unit":"Degree"},{"wkid":5464,"name":"GCS_Sibun_Gorge_1922","unit":"Degree"},{"wkid":5467,"name":"GCS_Panama-Colon_1911","unit":"Degree"},{"wkid":5488,"name":"RGAF09_3D","unit":"Degree"},{"wkid":5489,"name":"GCS_RGAF09","unit":"Degree"},{"wkid":5524,"name":"GCS_Corrego_Alegre_1961","unit":"Degree"},{"wkid":5527,"name":"GCS_SAD_1969_96","unit":"Degree"},{"wkid":5545,"name":"PNG94_3D","unit":"Degree"},{"wkid":5546,"name":"GCS_PNG94","unit":"Degree"},{"wkid":5560,"name":"Ukraine_2000_3D","unit":"Degree"},{"wkid":5561,"name":"GCS_Ukraine_2000","unit":"Degree"},{"wkid":5592,"name":"FEH2010_3D","unit":"Degree"},{"wkid":5593,"name":"GCS_FEH2010","unit":"Degree"},{"wkid":5681,"name":"GCS_DB_REF","unit":"Degree"},{"wkid":5830,"name":"DB_REF_3D","unit":"Degree"},{"wkid":5885,"name":"TGD2005_3D","unit":"Degree"},{"wkid":5886,"name":"GCS_TGD2005","unit":"Degree"},{"wkid":6134,"name":"CIGD11_3D","unit":"Degree"},{"wkid":6135,"name":"GCS_CIGD11","unit":"Degree"},{"wkid":6207,"name":"GCS_Nepal_Nagarkot","unit":"Degree"},{"wkid":6310,"name":"CGRS_1993_3D","unit":"Degree"},{"wkid":6311,"name":"GCS_CGRS_1993","unit":"Degree"},{"wkid":6318,"name":"GCS_NAD_1983_2011","unit":"Degree"},{"wkid":6319,"name":"NAD_1983_2011_3D","unit":"Degree"},{"wkid":6321,"name":"NAD_1983_PA11_3D","unit":"Degree"},{"wkid":6322,"name":"GCS_NAD_1983_PA11","unit":"Degree"},{"wkid":6324,"name":"NAD_1983_MA11_3D","unit":"Degree"},{"wkid":6325,"name":"GCS_NAD_1983_MA11","unit":"Degree"},{"wkid":6364,"name":"Mexico_ITRF2008_3D","unit":"Degree"},{"wkid":6365,"name":"GCS_Mexico_ITRF2008","unit":"Degree"},{"wkid":6667,"name":"JGD_2011_3D","unit":"Degree"},{"wkid":6668,"name":"GCS_JGD_2011","unit":"Degree"},{"wkid":6705,"name":"RDN2008_3D","unit":"Degree"},{"wkid":6706,"name":"GCS_RDN2008","unit":"Degree"},{"wkid":6782,"name":"NAD_1983_CORS96_3D","unit":"Degree"},{"wkid":6783,"name":"GCS_NAD_1983_CORS96","unit":"Degree"},{"wkid":6881,"name":"GCS_Aden_1925","unit":"Degree"},{"wkid":6882,"name":"GCS_Bekaa_Valley_1920","unit":"Degree"},{"wkid":6883,"name":"GCS_Bioko","unit":"Degree"},{"wkid":6892,"name":"GCS_South_East_Island_1943","unit":"Degree"},{"wkid":6894,"name":"GCS_Gambia","unit":"Degree"},{"wkid":6980,"name":"IGD05","unit":"Degree"},{"wkid":6982,"name":"IG05_Intermediate_CRS_3D","unit":"Degree"},{"wkid":6983,"name":"IG05_Intermediate_CRS","unit":"Degree"},{"wkid":6987,"name":"IGD05(2012)","unit":"Degree"},{"wkid":6989,"name":"IG05(2012)_Intermediate_CRS_3D","unit":"Degree"},{"wkid":6990,"name":"IG05(2012)_Intermediate_CRS","unit":"Degree"},{"wkid":7034,"name":"RGSPM06_(lon-lat)_3D","unit":"Degree"},{"wkid":7035,"name":"RGSPM06_(lon-lat)","unit":"Degree"},{"wkid":7036,"name":"RGR92_(lon-lat)_3D","unit":"Degree"},{"wkid":7037,"name":"RGR92_(lon-lat)","unit":"Degree"},{"wkid":7038,"name":"RGM04_(lon-lat)_3D","unit":"Degree"},{"wkid":7039,"name":"RGM04_(lon-lat)","unit":"Degree"},{"wkid":7040,"name":"RGFG95_(lon-lat)_3D","unit":"Degree"},{"wkid":7041,"name":"RGFG95_(lon-lat)","unit":"Degree"},{"wkid":7042,"name":"RGF93_(lon-lat)_3D","unit":"Degree"},{"wkid":7072,"name":"RGTAAF07_3D","unit":"Degree"},{"wkid":7073,"name":"GCS_RGTAAF07","unit":"Degree"},{"wkid":7084,"name":"RGF93_(lon-lat)","unit":"Degree"},{"wkid":7085,"name":"RGAF09_(lon-lat)_3D","unit":"Degree"},{"wkid":7086,"name":"RGAF09_(lon-lat)","unit":"Degree"},{"wkid":7087,"name":"RGTAAF07_(lon-lat)_3D","unit":"Degree"},{"wkid":7133,"name":"RGTAAF07_(lon-lat)","unit":"Degree"},{"wkid":7135,"name":"IGD05_3D","unit":"Degree"},{"wkid":7136,"name":"IGD05","unit":"Degree"},{"wkid":7138,"name":"IGD05(2012)_3D","unit":"Degree"},{"wkid":7139,"name":"IGD05(2012)","unit":"Degree"},{"wkid":7372,"name":"ONGD14_3D","unit":"Degree"},{"wkid":7373,"name":"ONGD14","unit":"Degree"},{"wkid":7657,"name":"WGS_1984_(G730)_3D","unit":"Degree"},{"wkid":7659,"name":"WGS_1984_(G873)_3D","unit":"Degree"},{"wkid":7661,"name":"WGS_1984_(G1150)_3D","unit":"Degree"},{"wkid":7663,"name":"WGS_1984_(G1674)_3D","unit":"Degree"},{"wkid":7665,"name":"WGS_1984_(G1762)_3D","unit":"Degree"},{"wkid":7678,"name":"PZ-90.02_3D","unit":"Degree"},{"wkid":7680,"name":"PZ-90.11_3D","unit":"Degree"},{"wkid":7682,"name":"GSK-2011_3D","unit":"Degree"},{"wkid":7683,"name":"GSK-2011","unit":"Degree"},{"wkid":7685,"name":"Kyrg-06_3D","unit":"Degree"},{"wkid":7797,"name":"BGS2005_3D","unit":"Degree"},{"wkid":7798,"name":"BGS2005","unit":"Degree"},{"wkid":7816,"name":"WGS_1984_(Transit)_3D","unit":"Degree"},{"wkid":7843,"name":"GDA2020_3D","unit":"Degree"},{"wkid":7844,"name":"GDA2020","unit":"Degree"},{"wkid":7880,"name":"St_Helena_Tritan_3D","unit":"Degree"},{"wkid":7881,"name":"St_Helena_Tritan","unit":"Degree"},{"wkid":7885,"name":"SHGD2015_3D","unit":"Degree"},{"wkid":7886,"name":"SHGD2015","unit":"Degree"},{"wkid":7900,"name":"ITRF_1988_3D","unit":"Degree"},{"wkid":7901,"name":"ITRF_1989_3D","unit":"Degree"},{"wkid":7902,"name":"ITRF_1990_3D","unit":"Degree"},{"wkid":7903,"name":"ITRF_1991_3D","unit":"Degree"},{"wkid":7904,"name":"ITRF_1992_3D","unit":"Degree"},{"wkid":7905,"name":"ITRF_1993_3D","unit":"Degree"},{"wkid":7906,"name":"ITRF_1994_3D","unit":"Degree"},{"wkid":7907,"name":"ITRF_1996_3D","unit":"Degree"},{"wkid":7908,"name":"ITRF_1997_3D","unit":"Degree"},{"wkid":7909,"name":"ITRF_2000_3D","unit":"Degree"},{"wkid":7910,"name":"ITRF_2005_3D","unit":"Degree"},{"wkid":7911,"name":"ITRF_2008_3D","unit":"Degree"},{"wkid":7912,"name":"ITRF2014_3D","unit":"Degree"},{"wkid":7915,"name":"ETRF_1989_3D","unit":"Degree"},{"wkid":7917,"name":"ETRF90_3D","unit":"Degree"},{"wkid":7919,"name":"ETRF91_3D","unit":"Degree"},{"wkid":7921,"name":"ETRF92_3D","unit":"Degree"},{"wkid":7923,"name":"ETRF93_3D","unit":"Degree"},{"wkid":7925,"name":"ETRF94_3D","unit":"Degree"},{"wkid":7927,"name":"ETRF96_3D","unit":"Degree"},{"wkid":7929,"name":"ETRF97_3D","unit":"Degree"},{"wkid":7931,"name":"ETRF2000_3D","unit":"Degree"},{"wkid":8042,"name":"Gusterberg(Ferro)","unit":"Degree"},{"wkid":8043,"name":"St._Stephen(Ferro)","unit":"Degree"},{"wkid":8085,"name":"ISN2016_3D","unit":"Degree"},{"wkid":8086,"name":"ISN2016","unit":"Degree"},{"wkid":8231,"name":"NAD83(CSRS96)_3D","unit":"Degree"},{"wkid":8232,"name":"NAD83(CSRS96)","unit":"Degree"},{"wkid":8235,"name":"NAD83(CSRS)v2_3D","unit":"Degree"},{"wkid":8237,"name":"NAD83(CSRS)v2","unit":"Degree"},{"wkid":8239,"name":"NAD83(CSRS)v3_3D","unit":"Degree"},{"wkid":8240,"name":"NAD83(CSRS)v3","unit":"Degree"},{"wkid":8244,"name":"NAD83(CSRS)v4_3D","unit":"Degree"},{"wkid":8246,"name":"NAD83(CSRS)v4","unit":"Degree"},{"wkid":8248,"name":"NAD83(CSRS)v5_3D","unit":"Degree"},{"wkid":8249,"name":"NAD83(CSRS)v5","unit":"Degree"},{"wkid":8251,"name":"NAD83(CSRS)v6_3D","unit":"Degree"},{"wkid":8252,"name":"NAD83(CSRS)v6","unit":"Degree"},{"wkid":8254,"name":"NAD83(CSRS)v7_3D","unit":"Degree"},{"wkid":8255,"name":"NAD83(CSRS)v7","unit":"Degree"},{"wkid":8351,"name":"S-JTSK_[JTSK03]","unit":"Degree"},{"wkid":8399,"name":"ETRF2005_3D","unit":"Degree"},{"wkid":8403,"name":"ETRF2014_3D","unit":"Degree"},{"wkid":8426,"name":"Hong_Kong_Geodetic_CS_3D","unit":"Degree"},{"wkid":8427,"name":"Hong_Kong_Geodetic_CS","unit":"Degree"},{"wkid":8428,"name":"Macao_1920","unit":"Degree"},{"wkid":8430,"name":"MACAO_2008_3D","unit":"Degree"},{"wkid":8431,"name":"GCS_MACAO_2008","unit":"Degree"},{"wkid":8449,"name":"NAD_1983_(FBN)","unit":"Degree"},{"wkid":8542,"name":"NAD_1983_(FBN)_3D","unit":"Degree"},{"wkid":8544,"name":"NAD_1983_(HARN_Corrected)_3D","unit":"Degree"},{"wkid":8545,"name":"NAD_1983_(HARN_Corrected)","unit":"Degree"},{"wkid":8684,"name":"SRB_ETRS89_3D","unit":"Degree"},{"wkid":8685,"name":"SRB_ETRS89","unit":"Degree"},{"wkid":8694,"name":"Camacupa_2015","unit":"Degree"},{"wkid":8698,"name":"RSAO13_3D","unit":"Degree"},{"wkid":8699,"name":"RSAO13","unit":"Degree"},{"wkid":8817,"name":"MTRF-2000_3D","unit":"Degree"},{"wkid":8818,"name":"MTRF-2000","unit":"Degree"},{"wkid":8860,"name":"NAD_1983_(FBN)","unit":"Degree"},{"wkid":8888,"name":"WGS_1984_(Transit)","unit":"Degree"},{"wkid":8899,"name":"RGWF96_3D","unit":"Degree"},{"wkid":8900,"name":"RGWF96","unit":"Degree"},{"wkid":8901,"name":"RGWF96_(lon-lat)_3D","unit":"Degree"},{"wkid":8902,"name":"RGWF96_(lon-lat)","unit":"Degree"},{"wkid":8906,"name":"CR-SIRGAS_3D","unit":"Degree"},{"wkid":8907,"name":"CR-SIRGAS","unit":"Degree"},{"wkid":8916,"name":"SIRGAS-CON_DGF00P01_3D","unit":"Degree"},{"wkid":8918,"name":"SIRGAS-CON_DGF01P01_3D","unit":"Degree"},{"wkid":8920,"name":"SIRGAS-CON_DGF01P02_3D","unit":"Degree"},{"wkid":8922,"name":"SIRGAS-CON_DGF02P01_3D","unit":"Degree"},{"wkid":8924,"name":"SIRGAS-CON_DGF04P01_3D","unit":"Degree"},{"wkid":8926,"name":"SIRGAS-CON_DGF05P01_3D","unit":"Degree"},{"wkid":8928,"name":"SIRGAS-CON_DGF06P01_3D","unit":"Degree"},{"wkid":8930,"name":"SIRGAS-CON_DGF07P01_3D","unit":"Degree"},{"wkid":8932,"name":"SIRGAS-CON_DGF08P01_3D","unit":"Degree"},{"wkid":8934,"name":"SIRGAS-CON_SIR09P01_3D","unit":"Degree"},{"wkid":8936,"name":"SIRGAS-CON_SIR10P01_3D","unit":"Degree"},{"wkid":8938,"name":"SIRGAS-CON_SIR11P01_3D","unit":"Degree"},{"wkid":8940,"name":"SIRGAS-CON_SIR13P01_3D","unit":"Degree"},{"wkid":8942,"name":"SIRGAS-CON_SIR14P01_3D","unit":"Degree"},{"wkid":8944,"name":"SIRGAS-CON_SIR15P01_3D","unit":"Degree"},{"wkid":8946,"name":"SIRGAS-CON_SIR17P01_3D","unit":"Degree"},{"wkid":8948,"name":"SIRGAS-Chile_2010_3D","unit":"Degree"},{"wkid":8949,"name":"SIRGAS-Chile_2010","unit":"Degree"},{"wkid":8972,"name":"SIRGAS-CON_DGF00P01","unit":"Degree"},{"wkid":8973,"name":"SIRGAS-CON_DGF01P01","unit":"Degree"},{"wkid":8974,"name":"SIRGAS-CON_DGF01P02","unit":"Degree"},{"wkid":8975,"name":"SIRGAS-CON_DGF02P01","unit":"Degree"},{"wkid":8976,"name":"SIRGAS-CON_DGF04P01","unit":"Degree"},{"wkid":8977,"name":"SIRGAS-CON_DGF05P01","unit":"Degree"},{"wkid":8978,"name":"SIRGAS-CON_DGF06P01","unit":"Degree"},{"wkid":8979,"name":"SIRGAS-CON_DGF07P01","unit":"Degree"},{"wkid":8980,"name":"SIRGAS-CON_DGF08P01","unit":"Degree"},{"wkid":8981,"name":"SIRGAS-CON_SIR09P01","unit":"Degree"},{"wkid":8982,"name":"SIRGAS-CON_SIR10P01","unit":"Degree"},{"wkid":8983,"name":"SIRGAS-CON_SIR11P01","unit":"Degree"},{"wkid":8984,"name":"SIRGAS-CON_SIR13P01","unit":"Degree"},{"wkid":8985,"name":"SIRGAS-CON_SIR14P01","unit":"Degree"},{"wkid":8986,"name":"SIRGAS-CON_SIR15P01","unit":"Degree"},{"wkid":8987,"name":"SIRGAS-CON_SIR17P01","unit":"Degree"},{"wkid":8988,"name":"GCS_ITRF_1988","unit":"Degree"},{"wkid":8989,"name":"GCS_ITRF_1989","unit":"Degree"},{"wkid":8990,"name":"GCS_ITRF_1990","unit":"Degree"},{"wkid":8991,"name":"GCS_ITRF_1991","unit":"Degree"},{"wkid":8992,"name":"GCS_ITRF_1992","unit":"Degree"},{"wkid":8993,"name":"GCS_ITRF_1993","unit":"Degree"},{"wkid":8994,"name":"GCS_ITRF_1994","unit":"Degree"},{"wkid":8995,"name":"GCS_ITRF_1996","unit":"Degree"},{"wkid":8996,"name":"GCS_ITRF_1997","unit":"Degree"},{"wkid":8997,"name":"GCS_ITRF_2000","unit":"Degree"},{"wkid":8998,"name":"GCS_ITRF_2005","unit":"Degree"},{"wkid":8999,"name":"GCS_ITRF_2008","unit":"Degree"},{"wkid":9000,"name":"ITRF2014","unit":"Degree"},{"wkid":9002,"name":"IGS97_3D","unit":"Degree"},{"wkid":9003,"name":"IGS97","unit":"Degree"},{"wkid":9005,"name":"IGS00_3D","unit":"Degree"},{"wkid":9006,"name":"IGS00","unit":"Degree"},{"wkid":9008,"name":"IGb00_3D","unit":"Degree"},{"wkid":9009,"name":"IGb00","unit":"Degree"},{"wkid":9011,"name":"IGS05_3D","unit":"Degree"},{"wkid":9012,"name":"IGS05","unit":"Degree"},{"wkid":9013,"name":"IGS08_3D","unit":"Degree"},{"wkid":9014,"name":"GCS_IGS08","unit":"Degree"},{"wkid":9016,"name":"IGb08_3D","unit":"Degree"},{"wkid":9017,"name":"IGb08","unit":"Degree"},{"wkid":9018,"name":"IGS14_3D","unit":"Degree"},{"wkid":9019,"name":"IGS14","unit":"Degree"},{"wkid":9053,"name":"WGS_1984_(G730)","unit":"Degree"},{"wkid":9054,"name":"WGS_1984_(G873)","unit":"Degree"},{"wkid":9055,"name":"WGS_1984_(G1150)","unit":"Degree"},{"wkid":9056,"name":"WGS_1984_(G1674)","unit":"Degree"},{"wkid":9057,"name":"WGS_1984_(G1762)","unit":"Degree"},{"wkid":9059,"name":"GCS_ETRF_1989","unit":"Degree"},{"wkid":9060,"name":"ETRF90","unit":"Degree"},{"wkid":9061,"name":"ETRF91","unit":"Degree"},{"wkid":9062,"name":"ETRF92","unit":"Degree"},{"wkid":9063,"name":"ETRF93","unit":"Degree"},{"wkid":9064,"name":"ETRF94","unit":"Degree"},{"wkid":9065,"name":"ETRF96","unit":"Degree"},{"wkid":9066,"name":"ETRF97","unit":"Degree"},{"wkid":9067,"name":"ETRF2000","unit":"Degree"},{"wkid":9068,"name":"ETRF2005","unit":"Degree"},{"wkid":9069,"name":"ETRF2014","unit":"Degree"},{"wkid":9071,"name":"NAD_1983_MARP00_3D","unit":"Degree"},{"wkid":9072,"name":"GCS_NAD_1983_MARP00","unit":"Degree"},{"wkid":9074,"name":"NAD_1983_PACP00_3D","unit":"Degree"},{"wkid":9075,"name":"GCS_NAD_1983_PACP00","unit":"Degree"},{"wkid":9139,"name":"KOSOVAREF01_3D","unit":"Degree"},{"wkid":9140,"name":"KOSOVAREF01","unit":"Degree"},{"wkid":9147,"name":"SIRGAS-Chile_2013_3D","unit":"Degree"},{"wkid":9148,"name":"SIRGAS-Chile_2013","unit":"Degree"},{"wkid":9152,"name":"SIRGAS-Chile_2016_3D","unit":"Degree"},{"wkid":9153,"name":"SIRGAS-Chile_2016","unit":"Degree"},{"wkid":9183,"name":"SIRGAS-Chile_3D","unit":"Degree"},{"wkid":9184,"name":"GCS_SIRGAS-Chile","unit":"Degree"},{"wkid":9248,"name":"Tapi_Aike","unit":"Degree"},{"wkid":9251,"name":"MMN","unit":"Degree"},{"wkid":9253,"name":"MMS","unit":"Degree"},{"wkid":9267,"name":"MGI_3D","unit":"Degree"},{"wkid":9293,"name":"ONGD17_3D","unit":"Degree"},{"wkid":9294,"name":"ONGD17","unit":"Degree"},{"wkid":9299,"name":"HS2-IRF","unit":"Degree"},{"wkid":9308,"name":"ATRF2014_(3D)","unit":"Degree"},{"wkid":9309,"name":"ATRF2014","unit":"Degree"},{"wkid":9332,"name":"KSA-GRF17_(3D)","unit":"Degree"},{"wkid":9333,"name":"KSA-GRF17","unit":"Degree"},{"wkid":9364,"name":"TPEN11-IRF","unit":"Degree"},{"wkid":9372,"name":"MML07-IRF","unit":"Degree"},{"wkid":9379,"name":"IGb14_(3D)","unit":"Degree"},{"wkid":9380,"name":"IGb14","unit":"Degree"},{"wkid":9384,"name":"AbInvA96_2020-IRF","unit":"Degree"},{"wkid":9403,"name":"PN68","unit":"Degree"},{"wkid":9453,"name":"GBK19-IRF","unit":"Degree"},{"wkid":9469,"name":"SRGI2013_(3D)","unit":"Degree"},{"wkid":9470,"name":"SRGI2013","unit":"Degree"},{"wkid":9546,"name":"LTF2004(G)_(3D)","unit":"Degree"},{"wkid":9547,"name":"LTF2004(G)","unit":"Degree"},{"wkid":9695,"name":"REDGEOMIN_(3D)","unit":"Degree"},{"wkid":9696,"name":"REDGEOMIN","unit":"Degree"},{"wkid":9701,"name":"ETRF2000-PL_(3D)","unit":"Degree"},{"wkid":9702,"name":"ETRF2000-PL","unit":"Degree"},{"wkid":9739,"name":"EOS21-IRF","unit":"Degree"},{"wkid":9758,"name":"ECML14_NB-IRF","unit":"Degree"},{"wkid":9763,"name":"EWR2-IRF","unit":"Degree"},{"wkid":37001,"name":"GCS_WGS_1966","unit":"Degree"},{"wkid":37002,"name":"GCS_Fischer_1960","unit":"Degree"},{"wkid":37003,"name":"GCS_Fischer_1968","unit":"Degree"},{"wkid":37004,"name":"GCS_Fischer_Modified","unit":"Degree"},{"wkid":37005,"name":"GCS_Hough_1960","unit":"Degree"},{"wkid":37006,"name":"GCS_Everest_Modified_1969","unit":"Degree"},{"wkid":37007,"name":"GCS_Walbeck","unit":"Degree"},{"wkid":37008,"name":"GCS_Sphere_ARC_INFO","unit":"Degree"},{"wkid":37201,"name":"GCS_European_1979","unit":"Degree"},{"wkid":37202,"name":"GCS_Everest_Bangladesh","unit":"Degree"},{"wkid":37203,"name":"GCS_Everest_India_Nepal","unit":"Degree"},{"wkid":37204,"name":"GCS_Hjorsey_1955","unit":"Degree"},{"wkid":37205,"name":"GCS_Hong_Kong_1963_67","unit":"Degree"},{"wkid":37206,"name":"GCS_Oman","unit":"Degree"},{"wkid":37207,"name":"GCS_South_Asia_Singapore","unit":"Degree"},{"wkid":37208,"name":"GCS_Ayabelle","unit":"Degree"},{"wkid":37211,"name":"GCS_Point_58","unit":"Degree"},{"wkid":37212,"name":"GCS_Beacon_E_1945","unit":"Degree"},{"wkid":37213,"name":"GCS_Tern_Island_1961","unit":"Degree"},{"wkid":37214,"name":"GCS_Astro_1952","unit":"Degree"},{"wkid":37215,"name":"GCS_Bellevue_IGN","unit":"Degree"},{"wkid":37216,"name":"GCS_Canton_1966","unit":"Degree"},{"wkid":37217,"name":"GCS_Chatham_Island_1971","unit":"Degree"},{"wkid":37218,"name":"GCS_DOS_1968","unit":"Degree"},{"wkid":37219,"name":"GCS_Easter_Island_1967","unit":"Degree"},{"wkid":37220,"name":"GCS_Guam_1963","unit":"Degree"},{"wkid":37221,"name":"GCS_GUX_1","unit":"Degree"},{"wkid":37222,"name":"GCS_Johnston_Island_1961","unit":"Degree"},{"wkid":37223,"name":"GCS_Carthage","unit":"Degree"},{"wkid":37224,"name":"GCS_Midway_1961","unit":"Degree"},{"wkid":37225,"name":"GCS_Carthage_Grad","unit":"Grad"},{"wkid":37226,"name":"GCS_Pitcairn_1967","unit":"Degree"},{"wkid":37227,"name":"GCS_Santo_DOS_1965","unit":"Degree"},{"wkid":37228,"name":"GCS_Viti_Levu_1916","unit":"Degree"},{"wkid":37229,"name":"GCS_Wake_Eniwetok_1960","unit":"Degree"},{"wkid":37230,"name":"GCS_Wake_Island_1952","unit":"Degree"},{"wkid":37231,"name":"GCS_Anna_1_1965","unit":"Degree"},{"wkid":37232,"name":"GCS_Gan_1970","unit":"Degree"},{"wkid":37233,"name":"GCS_ISTS_073_1969","unit":"Degree"},{"wkid":37234,"name":"GCS_Kerguelen_Island_1949","unit":"Degree"},{"wkid":37235,"name":"GCS_Reunion_1947","unit":"Degree"},{"wkid":37237,"name":"GCS_Ascension_Island_1958","unit":"Degree"},{"wkid":37238,"name":"GCS_DOS_71_4","unit":"Degree"},{"wkid":37239,"name":"GCS_Cape_Canaveral","unit":"Degree"},{"wkid":37240,"name":"GCS_Fort_Thomas_1955","unit":"Degree"},{"wkid":37241,"name":"GCS_Graciosa_Base_SW_1948","unit":"Degree"},{"wkid":37242,"name":"GCS_ISTS_061_1968","unit":"Degree"},{"wkid":37243,"name":"GCS_LC5_1961","unit":"Degree"},{"wkid":37245,"name":"GCS_Observatorio_Meteorologico_1939","unit":"Degree"},{"wkid":37246,"name":"GCS_Pico_de_Las_Nieves","unit":"Degree"},{"wkid":37247,"name":"GCS_Porto_Santo_1936","unit":"Degree"},{"wkid":37249,"name":"GCS_Sao_Braz","unit":"Degree"},{"wkid":37250,"name":"GCS_Selvagem_Grande_1938","unit":"Degree"},{"wkid":37251,"name":"GCS_Tristan_1968","unit":"Degree"},{"wkid":37252,"name":"GCS_American_Samoa_1962","unit":"Degree"},{"wkid":37253,"name":"GCS_Camp_Area","unit":"Degree"},{"wkid":37254,"name":"GCS_Deception_Island","unit":"Degree"},{"wkid":37255,"name":"GCS_Gunung_Segara","unit":"Degree"},{"wkid":37257,"name":"GCS_S42_Hungary","unit":"Degree"},{"wkid":37259,"name":"GCS_Kusaie_1951","unit":"Degree"},{"wkid":37260,"name":"GCS_Alaskan_Islands","unit":"Degree"},{"wkid":104000,"name":"GCS_Assumed_Geographic_1","unit":"Degree"},{"wkid":104009,"name":"GCS_Kyrg-06","unit":"Degree"},{"wkid":104010,"name":"GCS_IGS08","unit":"Degree"},{"wkid":104011,"name":"WGS_1984_(G730)","unit":"Degree"},{"wkid":104012,"name":"WGS_1984_(G873)","unit":"Degree"},{"wkid":104013,"name":"WGS_1984_(G1150)","unit":"Degree"},{"wkid":104014,"name":"WGS_1984_(G1674)","unit":"Degree"},{"wkid":104015,"name":"WGS_1984_(G1762)","unit":"Degree"},{"wkid":104016,"name":"WGS_1984_(Transit)","unit":"Degree"},{"wkid":104017,"name":"PZ-90.02","unit":"Degree"},{"wkid":104018,"name":"PZ-90.11","unit":"Degree"},{"wkid":104019,"name":"ITRF2014","unit":"Degree"},{"wkid":104020,"name":"GCS_JGD_2011","unit":"Degree"},{"wkid":104021,"name":"IGS14","unit":"Degree"},{"wkid":104022,"name":"GGD","unit":"Degree"},{"wkid":104023,"name":"GCS_International_1967","unit":"Degree"},{"wkid":104024,"name":"California_SRS_Epoch_2017.50_(NAD83)","unit":"Degree"},{"wkid":104025,"name":"GCS_Voirol_Unifie_1960_Paris","unit":"Grad"},{"wkid":104026,"name":"GCS_Voirol_Unifie_1960","unit":"Grad"},{"wkid":104027,"name":"ONGD17","unit":"Degree"},{"wkid":104028,"name":"GDM2008","unit":"Degree"},{"wkid":104047,"name":"GCS_Sphere_GRS_1980_Mean_Radius","unit":"Degree"},{"wkid":104050,"name":"GCS_Xrail84","unit":"Degree"},{"wkid":104100,"name":"GCS_GDBD2009","unit":"Degree"},{"wkid":104101,"name":"GCS_Estonia_1937","unit":"Degree"},{"wkid":104102,"name":"GCS_Hermannskogel","unit":"Degree"},{"wkid":104103,"name":"GCS_Sierra_Leone_1960","unit":"Degree"},{"wkid":104104,"name":"GCS_Hong_Kong_1980","unit":"Degree"},{"wkid":104105,"name":"GCS_Datum_Lisboa_Bessel","unit":"Degree"},{"wkid":104106,"name":"GCS_Datum_Lisboa_Hayford","unit":"Degree"},{"wkid":104107,"name":"GCS_RGF_1993","unit":"Degree"},{"wkid":104108,"name":"GCS_NZGD_2000","unit":"Degree"},{"wkid":104109,"name":"GCS_Pohnpei","unit":"Degree"},{"wkid":104110,"name":"GCS_REGVEN","unit":"Degree"},{"wkid":104111,"name":"GCS_JGD_2000","unit":"Degree"},{"wkid":104112,"name":"GCS_Bab_South","unit":"Degree"},{"wkid":104113,"name":"GCS_Majuro","unit":"Degree"},{"wkid":104114,"name":"GCS_Bermuda_2000","unit":"Degree"},{"wkid":104115,"name":"GCS_ITRF_1988","unit":"Degree"},{"wkid":104116,"name":"GCS_ITRF_1989","unit":"Degree"},{"wkid":104117,"name":"GCS_ITRF_1990","unit":"Degree"},{"wkid":104118,"name":"GCS_ITRF_1991","unit":"Degree"},{"wkid":104119,"name":"GCS_ITRF_1992","unit":"Degree"},{"wkid":104120,"name":"GCS_ITRF_1993","unit":"Degree"},{"wkid":104121,"name":"GCS_ITRF_1994","unit":"Degree"},{"wkid":104122,"name":"GCS_ITRF_1996","unit":"Degree"},{"wkid":104123,"name":"GCS_ITRF_1997","unit":"Degree"},{"wkid":104124,"name":"GCS_ITRF_2000","unit":"Degree"},{"wkid":104125,"name":"GCS_Chatham_Islands_1979","unit":"Degree"},{"wkid":104126,"name":"GCS_Observatorio_Meteorologico_1965","unit":"Degree"},{"wkid":104127,"name":"GCS_Roma_1940","unit":"Degree"},{"wkid":104128,"name":"GCS_Sphere_EMEP","unit":"Degree"},{"wkid":104129,"name":"GCS_EUREF_FIN","unit":"Degree"},{"wkid":104130,"name":"GCS_Jordan","unit":"Degree"},{"wkid":104131,"name":"GCS_D48","unit":"Degree"},{"wkid":104132,"name":"GCS_Ocotepeque_1935","unit":"Degree"},{"wkid":104133,"name":"GCS_JAD_2001","unit":"Degree"},{"wkid":104134,"name":"GCS_MONREF_1997","unit":"Degree"},{"wkid":104135,"name":"GCS_MSK_1942","unit":"Degree"},{"wkid":104136,"name":"GCS_TWD_1967","unit":"Degree"},{"wkid":104137,"name":"GCS_TWD_1997","unit":"Degree"},{"wkid":104138,"name":"GCS_Old_Hawaiian_Intl_1924","unit":"Degree"},{"wkid":104139,"name":"GCS_Voirol_1875_Grad","unit":"Grad"},{"wkid":104140,"name":"GCS_Voirol_1879_Grad","unit":"Grad"},{"wkid":104141,"name":"GCS_CGRS_1993","unit":"Degree"},{"wkid":104142,"name":"GCS_PTRA08","unit":"Degree"},{"wkid":104143,"name":"GCS_CR05","unit":"Degree"},{"wkid":104144,"name":"GCS_ISN_2004","unit":"Degree"},{"wkid":104145,"name":"GCS_NAD_1983_2011","unit":"Degree"},{"wkid":104179,"name":"ETRF90","unit":"Degree"},{"wkid":104180,"name":"ETRF91","unit":"Degree"},{"wkid":104181,"name":"ETRF92","unit":"Degree"},{"wkid":104182,"name":"ETRF93","unit":"Degree"},{"wkid":104183,"name":"ETRF94","unit":"Degree"},{"wkid":104184,"name":"ETRF96","unit":"Degree"},{"wkid":104185,"name":"ETRF97","unit":"Degree"},{"wkid":104186,"name":"ETRF2000","unit":"Degree"},{"wkid":104199,"name":"GCS_WGS_1984_Major_Auxiliary_Sphere","unit":"Degree"},{"wkid":104223,"name":"GCS_NAD_1983_CORS96","unit":"Degree"},{"wkid":104248,"name":"GCS_MACAO_2008","unit":"Degree"},{"wkid":104256,"name":"GCS_Nepal_Nagarkot","unit":"Degree"},{"wkid":104257,"name":"GCS_ITRF_2008","unit":"Degree"},{"wkid":104258,"name":"GCS_ETRF_1989","unit":"Degree"},{"wkid":104259,"name":"GCS_NAD_1983_PACP00","unit":"Degree"},{"wkid":104260,"name":"GCS_NAD_1983_MARP00","unit":"Degree"},{"wkid":104261,"name":"GCS_Merchich_Degree","unit":"Degree"},{"wkid":104286,"name":"GCS_NAD_1983_MA11","unit":"Degree"},{"wkid":104287,"name":"GCS_NAD_1983_PA11","unit":"Degree"},{"wkid":104304,"name":"GCS_Voirol_1875","unit":"Degree"},{"wkid":104305,"name":"GCS_Voirol_Unifie_1960_Degree","unit":"Degree"},{"wkid":104602,"name":"North_American_1983_3D","unit":"Degree"},{"wkid":104613,"name":"EUREF_FIN_3D","unit":"Degree"},{"wkid":104644,"name":"California_SRS_Epoch_2017.50_(NAD83)_3D","unit":"Degree"},{"wkid":104645,"name":"GGD_3D","unit":"Degree"},{"wkid":104647,"name":"ONGD17_3D","unit":"Degree"},{"wkid":104648,"name":"S-JTSK_[JTSK03]_3D","unit":"Degree"},{"wkid":104653,"name":"MONREF_1997_3D","unit":"Degree"},{"wkid":104664,"name":"Nepal_Nagarkot_3D","unit":"Degree"},{"wkid":104693,"name":"SLD99_3D","unit":"Degree"},{"wkid":104696,"name":"S_JTSK/05_3D","unit":"Degree"},{"wkid":104697,"name":"S_JTSK/05_Ferro_3D","unit":"Degree"},{"wkid":104700,"name":"GCS_NAD_1983_HARN_Adj_MN_Anoka","unit":"Degree"},{"wkid":104701,"name":"GCS_NAD_1983_HARN_Adj_MN_Becker","unit":"Degree"},{"wkid":104702,"name":"GCS_NAD_1983_HARN_Adj_MN_Beltrami_North","unit":"Degree"},{"wkid":104703,"name":"GCS_NAD_1983_HARN_Adj_MN_Beltrami_South","unit":"Degree"},{"wkid":104704,"name":"GCS_NAD_1983_HARN_Adj_MN_Benton","unit":"Degree"},{"wkid":104705,"name":"GCS_NAD_1983_HARN_Adj_MN_Big_Stone","unit":"Degree"},{"wkid":104706,"name":"GCS_NAD_1983_HARN_Adj_MN_Blue_Earth","unit":"Degree"},{"wkid":104707,"name":"GCS_NAD_1983_HARN_Adj_MN_Brown","unit":"Degree"},{"wkid":104708,"name":"GCS_NAD_1983_HARN_Adj_MN_Carlton","unit":"Degree"},{"wkid":104709,"name":"GCS_NAD_1983_HARN_Adj_MN_Carver","unit":"Degree"},{"wkid":104710,"name":"GCS_NAD_1983_HARN_Adj_MN_Cass_North","unit":"Degree"},{"wkid":104711,"name":"GCS_NAD_1983_HARN_Adj_MN_Cass_South","unit":"Degree"},{"wkid":104712,"name":"GCS_NAD_1983_HARN_Adj_MN_Chippewa","unit":"Degree"},{"wkid":104713,"name":"GCS_NAD_1983_HARN_Adj_MN_Chisago","unit":"Degree"},{"wkid":104714,"name":"GCS_NAD_1983_HARN_Adj_MN_Cook_North","unit":"Degree"},{"wkid":104715,"name":"GCS_NAD_1983_HARN_Adj_MN_Cook_South","unit":"Degree"},{"wkid":104716,"name":"GCS_NAD_1983_HARN_Adj_MN_Cottonwood","unit":"Degree"},{"wkid":104717,"name":"GCS_NAD_1983_HARN_Adj_MN_Crow_Wing","unit":"Degree"},{"wkid":104718,"name":"GCS_NAD_1983_HARN_Adj_MN_Dakota","unit":"Degree"},{"wkid":104719,"name":"GCS_NAD_1983_HARN_Adj_MN_Dodge","unit":"Degree"},{"wkid":104720,"name":"GCS_NAD_1983_HARN_Adj_MN_Douglas","unit":"Degree"},{"wkid":104721,"name":"GCS_NAD_1983_HARN_Adj_MN_Faribault","unit":"Degree"},{"wkid":104722,"name":"GCS_NAD_1983_HARN_Adj_MN_Fillmore","unit":"Degree"},{"wkid":104723,"name":"GCS_NAD_1983_HARN_Adj_MN_Freeborn","unit":"Degree"},{"wkid":104724,"name":"GCS_NAD_1983_HARN_Adj_MN_Goodhue","unit":"Degree"},{"wkid":104725,"name":"GCS_NAD_1983_HARN_Adj_MN_Grant","unit":"Degree"},{"wkid":104726,"name":"GCS_NAD_1983_HARN_Adj_MN_Hennepin","unit":"Degree"},{"wkid":104727,"name":"GCS_NAD_1983_HARN_Adj_MN_Houston","unit":"Degree"},{"wkid":104728,"name":"GCS_NAD_1983_HARN_Adj_MN_Isanti","unit":"Degree"},{"wkid":104729,"name":"GCS_NAD_1983_HARN_Adj_MN_Itasca_North","unit":"Degree"},{"wkid":104730,"name":"GCS_NAD_1983_HARN_Adj_MN_Itasca_South","unit":"Degree"},{"wkid":104731,"name":"GCS_NAD_1983_HARN_Adj_MN_Jackson","unit":"Degree"},{"wkid":104732,"name":"GCS_NAD_1983_HARN_Adj_MN_Kanabec","unit":"Degree"},{"wkid":104733,"name":"GCS_NAD_1983_HARN_Adj_MN_Kandiyohi","unit":"Degree"},{"wkid":104734,"name":"GCS_NAD_1983_HARN_Adj_MN_Kittson","unit":"Degree"},{"wkid":104735,"name":"GCS_NAD_1983_HARN_Adj_MN_Koochiching","unit":"Degree"},{"wkid":104736,"name":"GCS_NAD_1983_HARN_Adj_MN_Lac_Qui_Parle","unit":"Degree"},{"wkid":104737,"name":"GCS_NAD_1983_HARN_Adj_MN_Lake_of_the_Woods_North","unit":"Degree"},{"wkid":104738,"name":"GCS_NAD_1983_HARN_Adj_MN_Lake_of_the_Woods_South","unit":"Degree"},{"wkid":104739,"name":"GCS_NAD_1983_HARN_Adj_MN_Le_Sueur","unit":"Degree"},{"wkid":104740,"name":"GCS_NAD_1983_HARN_Adj_MN_Lincoln","unit":"Degree"},{"wkid":104741,"name":"GCS_NAD_1983_HARN_Adj_MN_Lyon","unit":"Degree"},{"wkid":104742,"name":"GCS_NAD_1983_HARN_Adj_MN_McLeod","unit":"Degree"},{"wkid":104743,"name":"GCS_NAD_1983_HARN_Adj_MN_Mahnomen","unit":"Degree"},{"wkid":104744,"name":"GCS_NAD_1983_HARN_Adj_MN_Marshall","unit":"Degree"},{"wkid":104745,"name":"GCS_NAD_1983_HARN_Adj_MN_Martin","unit":"Degree"},{"wkid":104746,"name":"GCS_NAD_1983_HARN_Adj_MN_Meeker","unit":"Degree"},{"wkid":104747,"name":"GCS_NAD_1983_HARN_Adj_MN_Morrison","unit":"Degree"},{"wkid":104748,"name":"GCS_NAD_1983_HARN_Adj_MN_Mower","unit":"Degree"},{"wkid":104749,"name":"GCS_NAD_1983_HARN_Adj_MN_Murray","unit":"Degree"},{"wkid":104750,"name":"GCS_NAD_1983_HARN_Adj_MN_Nicollet","unit":"Degree"},{"wkid":104751,"name":"GCS_NAD_1983_HARN_Adj_MN_Nobles","unit":"Degree"},{"wkid":104752,"name":"GCS_NAD_1983_HARN_Adj_MN_Norman","unit":"Degree"},{"wkid":104753,"name":"GCS_NAD_1983_HARN_Adj_MN_Olmsted","unit":"Degree"},{"wkid":104754,"name":"GCS_NAD_1983_HARN_Adj_MN_Ottertail","unit":"Degree"},{"wkid":104755,"name":"GCS_NAD_1983_HARN_Adj_MN_Pennington","unit":"Degree"},{"wkid":104756,"name":"GCS_NAD_1983_HARN_Adj_MN_Pine","unit":"Degree"},{"wkid":104757,"name":"GCS_NAD_1983_HARN_Adj_MN_Pipestone","unit":"Degree"},{"wkid":104758,"name":"GCS_NAD_1983_HARN_Adj_MN_Polk","unit":"Degree"},{"wkid":104759,"name":"GCS_NAD_1983_HARN_Adj_MN_Pope","unit":"Degree"},{"wkid":104760,"name":"GCS_NAD_1983_HARN_Adj_MN_Ramsey","unit":"Degree"},{"wkid":104761,"name":"GCS_NAD_1983_HARN_Adj_MN_Red_Lake","unit":"Degree"},{"wkid":104762,"name":"GCS_NAD_1983_HARN_Adj_MN_Redwood","unit":"Degree"},{"wkid":104763,"name":"GCS_NAD_1983_HARN_Adj_MN_Renville","unit":"Degree"},{"wkid":104764,"name":"GCS_NAD_1983_HARN_Adj_MN_Rice","unit":"Degree"},{"wkid":104765,"name":"GCS_NAD_1983_HARN_Adj_MN_Rock","unit":"Degree"},{"wkid":104766,"name":"GCS_NAD_1983_HARN_Adj_MN_Roseau","unit":"Degree"},{"wkid":104767,"name":"GCS_NAD_1983_HARN_Adj_MN_St_Louis_North","unit":"Degree"},{"wkid":104768,"name":"GCS_NAD_1983_HARN_Adj_MN_St_Louis_Central","unit":"Degree"},{"wkid":104769,"name":"GCS_NAD_1983_HARN_Adj_MN_St_Louis_South","unit":"Degree"},{"wkid":104770,"name":"GCS_NAD_1983_HARN_Adj_MN_Scott","unit":"Degree"},{"wkid":104771,"name":"GCS_NAD_1983_HARN_Adj_MN_Sherburne","unit":"Degree"},{"wkid":104772,"name":"GCS_NAD_1983_HARN_Adj_MN_Sibley","unit":"Degree"},{"wkid":104773,"name":"GCS_NAD_1983_HARN_Adj_MN_Stearns","unit":"Degree"},{"wkid":104774,"name":"GCS_NAD_1983_HARN_Adj_MN_Steele","unit":"Degree"},{"wkid":104775,"name":"GCS_NAD_1983_HARN_Adj_MN_Stevens","unit":"Degree"},{"wkid":104776,"name":"GCS_NAD_1983_HARN_Adj_MN_Swift","unit":"Degree"},{"wkid":104777,"name":"GCS_NAD_1983_HARN_Adj_MN_Todd","unit":"Degree"},{"wkid":104778,"name":"GCS_NAD_1983_HARN_Adj_MN_Traverse","unit":"Degree"},{"wkid":104779,"name":"GCS_NAD_1983_HARN_Adj_MN_Wabasha","unit":"Degree"},{"wkid":104780,"name":"GCS_NAD_1983_HARN_Adj_MN_Wadena","unit":"Degree"},{"wkid":104781,"name":"GCS_NAD_1983_HARN_Adj_MN_Waseca","unit":"Degree"},{"wkid":104782,"name":"GCS_NAD_1983_HARN_Adj_MN_Watonwan","unit":"Degree"},{"wkid":104783,"name":"GCS_NAD_1983_HARN_Adj_MN_Winona","unit":"Degree"},{"wkid":104784,"name":"GCS_NAD_1983_HARN_Adj_MN_Wright","unit":"Degree"},{"wkid":104785,"name":"GCS_NAD_1983_HARN_Adj_MN_Yellow_Medicine","unit":"Degree"},{"wkid":104786,"name":"GCS_NAD_1983_HARN_Adj_MN_St_Louis","unit":"Degree"},{"wkid":104800,"name":"GCS_NAD_1983_HARN_Adj_WI_Adams","unit":"Degree"},{"wkid":104801,"name":"GCS_NAD_1983_HARN_Adj_WI_Ashland","unit":"Degree"},{"wkid":104802,"name":"GCS_NAD_1983_HARN_Adj_WI_Barron","unit":"Degree"},{"wkid":104803,"name":"GCS_NAD_1983_HARN_Adj_WI_Bayfield","unit":"Degree"},{"wkid":104804,"name":"GCS_NAD_1983_HARN_Adj_WI_Brown","unit":"Degree"},{"wkid":104805,"name":"GCS_NAD_1983_HARN_Adj_WI_Buffalo","unit":"Degree"},{"wkid":104806,"name":"GCS_NAD_1983_HARN_Adj_WI_Burnett","unit":"Degree"},{"wkid":104807,"name":"GCS_NAD_1983_HARN_Adj_WI_Calumet","unit":"Degree"},{"wkid":104808,"name":"GCS_NAD_1983_HARN_Adj_WI_Chippewa","unit":"Degree"},{"wkid":104809,"name":"GCS_NAD_1983_HARN_Adj_WI_Clark","unit":"Degree"},{"wkid":104810,"name":"GCS_NAD_1983_HARN_Adj_WI_Columbia","unit":"Degree"},{"wkid":104811,"name":"GCS_NAD_1983_HARN_Adj_WI_Crawford","unit":"Degree"},{"wkid":104812,"name":"GCS_NAD_1983_HARN_Adj_WI_Dane","unit":"Degree"},{"wkid":104813,"name":"GCS_NAD_1983_HARN_Adj_WI_Dodge","unit":"Degree"},{"wkid":104814,"name":"GCS_NAD_1983_HARN_Adj_WI_Door","unit":"Degree"},{"wkid":104815,"name":"GCS_NAD_1983_HARN_Adj_WI_Douglas","unit":"Degree"},{"wkid":104816,"name":"GCS_NAD_1983_HARN_Adj_WI_Dunn","unit":"Degree"},{"wkid":104817,"name":"GCS_NAD_1983_HARN_Adj_WI_EauClaire","unit":"Degree"},{"wkid":104818,"name":"GCS_NAD_1983_HARN_Adj_WI_Florence","unit":"Degree"},{"wkid":104819,"name":"GCS_NAD_1983_HARN_Adj_WI_FondduLac","unit":"Degree"},{"wkid":104820,"name":"GCS_NAD_1983_HARN_Adj_WI_Forest","unit":"Degree"},{"wkid":104821,"name":"GCS_NAD_1983_HARN_Adj_WI_Grant","unit":"Degree"},{"wkid":104822,"name":"GCS_NAD_1983_HARN_Adj_WI_Green","unit":"Degree"},{"wkid":104823,"name":"GCS_NAD_1983_HARN_Adj_WI_GreenLake","unit":"Degree"},{"wkid":104824,"name":"GCS_NAD_1983_HARN_Adj_WI_Iowa","unit":"Degree"},{"wkid":104825,"name":"GCS_NAD_1983_HARN_Adj_WI_Iron","unit":"Degree"},{"wkid":104826,"name":"GCS_NAD_1983_HARN_Adj_WI_Jackson","unit":"Degree"},{"wkid":104827,"name":"GCS_NAD_1983_HARN_Adj_WI_Jefferson","unit":"Degree"},{"wkid":104828,"name":"GCS_NAD_1983_HARN_Adj_WI_Juneau","unit":"Degree"},{"wkid":104829,"name":"GCS_NAD_1983_HARN_Adj_WI_Kenosha","unit":"Degree"},{"wkid":104830,"name":"GCS_NAD_1983_HARN_Adj_WI_Kewaunee","unit":"Degree"},{"wkid":104831,"name":"GCS_NAD_1983_HARN_Adj_WI_LaCrosse","unit":"Degree"},{"wkid":104832,"name":"GCS_NAD_1983_HARN_Adj_WI_Lafayette","unit":"Degree"},{"wkid":104833,"name":"GCS_NAD_1983_HARN_Adj_WI_Langlade","unit":"Degree"},{"wkid":104834,"name":"GCS_NAD_1983_HARN_Adj_WI_Lincoln","unit":"Degree"},{"wkid":104835,"name":"GCS_NAD_1983_HARN_Adj_WI_Manitowoc","unit":"Degree"},{"wkid":104836,"name":"GCS_NAD_1983_HARN_Adj_WI_Marathon","unit":"Degree"},{"wkid":104837,"name":"GCS_NAD_1983_HARN_Adj_WI_Marinette","unit":"Degree"},{"wkid":104838,"name":"GCS_NAD_1983_HARN_Adj_WI_Marquette","unit":"Degree"},{"wkid":104839,"name":"GCS_NAD_1983_HARN_Adj_WI_Menominee","unit":"Degree"},{"wkid":104840,"name":"GCS_NAD_1983_HARN_Adj_WI_Milwaukee","unit":"Degree"},{"wkid":104841,"name":"GCS_NAD_1983_HARN_Adj_WI_Monroe","unit":"Degree"},{"wkid":104842,"name":"GCS_NAD_1983_HARN_Adj_WI_Oconto","unit":"Degree"},{"wkid":104843,"name":"GCS_NAD_1983_HARN_Adj_WI_Oneida","unit":"Degree"},{"wkid":104844,"name":"GCS_NAD_1983_HARN_Adj_WI_Outagamie","unit":"Degree"},{"wkid":104845,"name":"GCS_NAD_1983_HARN_Adj_WI_Ozaukee","unit":"Degree"},{"wkid":104846,"name":"GCS_NAD_1983_HARN_Adj_WI_Pepin","unit":"Degree"},{"wkid":104847,"name":"GCS_NAD_1983_HARN_Adj_WI_Pierce","unit":"Degree"},{"wkid":104848,"name":"GCS_NAD_1983_HARN_Adj_WI_Polk","unit":"Degree"},{"wkid":104849,"name":"GCS_NAD_1983_HARN_Adj_WI_Portage","unit":"Degree"},{"wkid":104850,"name":"GCS_NAD_1983_HARN_Adj_WI_Price","unit":"Degree"},{"wkid":104851,"name":"GCS_NAD_1983_HARN_Adj_WI_Racine","unit":"Degree"},{"wkid":104852,"name":"GCS_NAD_1983_HARN_Adj_WI_Richland","unit":"Degree"},{"wkid":104853,"name":"GCS_NAD_1983_HARN_Adj_WI_Rock","unit":"Degree"},{"wkid":104854,"name":"GCS_NAD_1983_HARN_Adj_WI_Rusk","unit":"Degree"},{"wkid":104855,"name":"GCS_NAD_1983_HARN_Adj_WI_StCroix","unit":"Degree"},{"wkid":104856,"name":"GCS_NAD_1983_HARN_Adj_WI_Sauk","unit":"Degree"},{"wkid":104857,"name":"GCS_NAD_1983_HARN_Adj_WI_Sawyer","unit":"Degree"},{"wkid":104858,"name":"GCS_NAD_1983_HARN_Adj_WI_Shawano","unit":"Degree"},{"wkid":104859,"name":"GCS_NAD_1983_HARN_Adj_WI_Sheboygan","unit":"Degree"},{"wkid":104860,"name":"GCS_NAD_1983_HARN_Adj_WI_Taylor","unit":"Degree"},{"wkid":104861,"name":"GCS_NAD_1983_HARN_Adj_WI_Trempealeau","unit":"Degree"},{"wkid":104862,"name":"GCS_NAD_1983_HARN_Adj_WI_Vernon","unit":"Degree"},{"wkid":104863,"name":"GCS_NAD_1983_HARN_Adj_WI_Vilas","unit":"Degree"},{"wkid":104864,"name":"GCS_NAD_1983_HARN_Adj_WI_Walworth","unit":"Degree"},{"wkid":104865,"name":"GCS_NAD_1983_HARN_Adj_WI_Washburn","unit":"Degree"},{"wkid":104866,"name":"GCS_NAD_1983_HARN_Adj_WI_Washington","unit":"Degree"},{"wkid":104867,"name":"GCS_NAD_1983_HARN_Adj_WI_Waukesha","unit":"Degree"},{"wkid":104868,"name":"GCS_NAD_1983_HARN_Adj_WI_Waupaca","unit":"Degree"},{"wkid":104869,"name":"GCS_NAD_1983_HARN_Adj_WI_Waushara","unit":"Degree"},{"wkid":104870,"name":"GCS_NAD_1983_HARN_Adj_WI_Winnebago","unit":"Degree"},{"wkid":104871,"name":"GCS_NAD_1983_HARN_Adj_WI_Wood","unit":"Degree"},{"wkid":104872,"name":"Phobos_2015","unit":"Degree"},{"wkid":104873,"name":"Callisto_2015","unit":"Degree"},{"wkid":104874,"name":"Europa_2015","unit":"Degree"},{"wkid":104875,"name":"Ganymede_2015","unit":"Degree"},{"wkid":104876,"name":"Io_2015","unit":"Degree"},{"wkid":104877,"name":"Metis_2015","unit":"Degree"},{"wkid":104878,"name":"Aegaeon_2015","unit":"Degree"},{"wkid":104879,"name":"Anthe_2015","unit":"Degree"},{"wkid":104896,"name":"GCS_ITRF_2005","unit":"Degree"},{"wkid":104897,"name":"Pandora_2015","unit":"Degree"},{"wkid":104898,"name":"Phoebe_2015","unit":"Degree"},{"wkid":104899,"name":"Polydeuces_2015","unit":"Degree"},{"wkid":104900,"name":"GCS_Mercury_2000","unit":"Degree"},{"wkid":104901,"name":"GCS_Venus_1985","unit":"Degree"},{"wkid":104902,"name":"GCS_Venus_2000","unit":"Degree"},{"wkid":104903,"name":"GCS_Moon_2000","unit":"Degree"},{"wkid":104904,"name":"GCS_Mars_1979","unit":"Degree"},{"wkid":104905,"name":"GCS_Mars_2000","unit":"Degree"},{"wkid":104906,"name":"GCS_Deimos_2000","unit":"Degree"},{"wkid":104907,"name":"GCS_Phobos_2000","unit":"Degree"},{"wkid":104908,"name":"GCS_Jupiter_2000","unit":"Degree"},{"wkid":104909,"name":"GCS_Adrastea_2000","unit":"Degree"},{"wkid":104910,"name":"GCS_Amalthea_2000","unit":"Degree"},{"wkid":104911,"name":"GCS_Ananke_2000","unit":"Degree"},{"wkid":104912,"name":"GCS_Callisto_2000","unit":"Degree"},{"wkid":104913,"name":"GCS_Carme_2000","unit":"Degree"},{"wkid":104914,"name":"GCS_Elara_2000","unit":"Degree"},{"wkid":104915,"name":"GCS_Europa_2000","unit":"Degree"},{"wkid":104916,"name":"GCS_Ganymede_2000","unit":"Degree"},{"wkid":104917,"name":"GCS_Himalia_2000","unit":"Degree"},{"wkid":104918,"name":"GCS_Io_2000","unit":"Degree"},{"wkid":104919,"name":"GCS_Leda_2000","unit":"Degree"},{"wkid":104920,"name":"GCS_Lysithea_2000","unit":"Degree"},{"wkid":104921,"name":"GCS_Metis_2000","unit":"Degree"},{"wkid":104922,"name":"GCS_Pasiphae_2000","unit":"Degree"},{"wkid":104923,"name":"GCS_Sinope_2000","unit":"Degree"},{"wkid":104924,"name":"GCS_Thebe_2000","unit":"Degree"},{"wkid":104925,"name":"GCS_Saturn_2000","unit":"Degree"},{"wkid":104926,"name":"GCS_Atlas_2000","unit":"Degree"},{"wkid":104927,"name":"GCS_Calypso_2000","unit":"Degree"},{"wkid":104928,"name":"GCS_Dione_2000","unit":"Degree"},{"wkid":104929,"name":"GCS_Enceladus_2000","unit":"Degree"},{"wkid":104930,"name":"GCS_Epimetheus_2000","unit":"Degree"},{"wkid":104931,"name":"GCS_Helene_2000","unit":"Degree"},{"wkid":104932,"name":"GCS_Hyperion_2000","unit":"Degree"},{"wkid":104933,"name":"GCS_Iapetus_2000","unit":"Degree"},{"wkid":104934,"name":"GCS_Janus_2000","unit":"Degree"},{"wkid":104935,"name":"GCS_Mimas_2000","unit":"Degree"},{"wkid":104936,"name":"GCS_Pan_2000","unit":"Degree"},{"wkid":104937,"name":"GCS_Pandora_2000","unit":"Degree"},{"wkid":104938,"name":"GCS_Phoebe_2000","unit":"Degree"},{"wkid":104939,"name":"GCS_Prometheus_2000","unit":"Degree"},{"wkid":104940,"name":"GCS_Rhea_2000","unit":"Degree"},{"wkid":104941,"name":"GCS_Telesto_2000","unit":"Degree"},{"wkid":104942,"name":"GCS_Tethys_2000","unit":"Degree"},{"wkid":104943,"name":"GCS_Titan_2000","unit":"Degree"},{"wkid":104944,"name":"GCS_Uranus_2000","unit":"Degree"},{"wkid":104945,"name":"GCS_Ariel_2000","unit":"Degree"},{"wkid":104946,"name":"GCS_Belinda_2000","unit":"Degree"},{"wkid":104947,"name":"GCS_Bianca_2000","unit":"Degree"},{"wkid":104948,"name":"GCS_Cordelia_2000","unit":"Degree"},{"wkid":104949,"name":"GCS_Cressida_2000","unit":"Degree"},{"wkid":104950,"name":"GCS_Desdemona_2000","unit":"Degree"},{"wkid":104951,"name":"GCS_Juliet_2000","unit":"Degree"},{"wkid":104952,"name":"GCS_Miranda_2000","unit":"Degree"},{"wkid":104953,"name":"GCS_Oberon_2000","unit":"Degree"},{"wkid":104954,"name":"GCS_Ophelia_2000","unit":"Degree"},{"wkid":104955,"name":"GCS_Portia_2000","unit":"Degree"},{"wkid":104956,"name":"GCS_Puck_2000","unit":"Degree"},{"wkid":104957,"name":"GCS_Rosalind_2000","unit":"Degree"},{"wkid":104958,"name":"GCS_Titania_2000","unit":"Degree"},{"wkid":104959,"name":"GCS_Umbriel_2000","unit":"Degree"},{"wkid":104960,"name":"GCS_Neptune_2000","unit":"Degree"},{"wkid":104961,"name":"GCS_Despina_2000","unit":"Degree"},{"wkid":104962,"name":"GCS_Galatea_2000","unit":"Degree"},{"wkid":104963,"name":"GCS_Larissa_2000","unit":"Degree"},{"wkid":104964,"name":"GCS_Naiad_2000","unit":"Degree"},{"wkid":104965,"name":"GCS_Nereid_2000","unit":"Degree"},{"wkid":104966,"name":"GCS_Proteus_2000","unit":"Degree"},{"wkid":104967,"name":"GCS_Thalassa_2000","unit":"Degree"},{"wkid":104968,"name":"GCS_Triton_2000","unit":"Degree"},{"wkid":104969,"name":"GCS_Pluto_2000","unit":"Degree"},{"wkid":104970,"name":"GCS_Charon_2000","unit":"Degree"},{"wkid":104971,"name":"Mars_2000_(Sphere)","unit":"Degree"},{"wkid":104972,"name":"1_Ceres_2015","unit":"Degree"},{"wkid":104973,"name":"4_Vesta_2015","unit":"Degree"},{"wkid":104974,"name":"Mercury_2015","unit":"Degree"},{"wkid":104975,"name":"Sun_2015","unit":"Degree"},{"wkid":104976,"name":"Atlas_2015","unit":"Degree"},{"wkid":104977,"name":"Calypso_2015","unit":"Degree"},{"wkid":104978,"name":"Daphnis_2015","unit":"Degree"},{"wkid":104979,"name":"Dione_2015","unit":"Degree"},{"wkid":104980,"name":"Enceladus_2015","unit":"Degree"},{"wkid":104981,"name":"Epimetheus_2015","unit":"Degree"},{"wkid":104982,"name":"Helene_2015","unit":"Degree"},{"wkid":104983,"name":"Hyperion_2015","unit":"Degree"},{"wkid":104984,"name":"Iapetus_2015","unit":"Degree"},{"wkid":104985,"name":"Janus_2015","unit":"Degree"},{"wkid":104986,"name":"Methone_2015","unit":"Degree"},{"wkid":104987,"name":"Mimas_2015","unit":"Degree"},{"wkid":104988,"name":"Pallene_2015","unit":"Degree"},{"wkid":104989,"name":"Pan_2015","unit":"Degree"},{"wkid":104990,"name":"GCS_HD1909","unit":"Degree"},{"wkid":104991,"name":"GCS_IGRS","unit":"Degree"},{"wkid":104992,"name":"GCS_MGI_1901","unit":"Degree"},{"wkid":104993,"name":"Prometheus_2015","unit":"Degree"},{"wkid":104994,"name":"Rhea_2015","unit":"Degree"},{"wkid":104995,"name":"Telesto_2015","unit":"Degree"},{"wkid":104996,"name":"Tethys_2015","unit":"Degree"},{"wkid":104997,"name":"Larissa_2015","unit":"Degree"},{"wkid":104998,"name":"Pluto_2015","unit":"Degree"},{"wkid":104999,"name":"Charon_2015","unit":"Degree"}]');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/coordinates_xy/src/config.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/coordinates_xy/src/runtime/translations/default.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/Graphic */ "@arcgis/core/Graphic");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/geometry/SpatialReference */ "esri/geometry/SpatialReference");
/* harmony import */ var esri_symbols_PictureMarkerSymbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/symbols/PictureMarkerSymbol */ "esri/symbols/PictureMarkerSymbol");
/* harmony import */ var esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/geometry/coordinateFormatter */ "esri/geometry/coordinateFormatter");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_geometry_projection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! esri/geometry/projection */ "esri/geometry/projection");
/* harmony import */ var esri_rest_geometryService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! esri/rest/geometryService */ "esri/rest/geometryService");
/* harmony import */ var esri_rest_support_ProjectParameters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! esri/rest/support/ProjectParameters */ "esri/rest/support/ProjectParameters");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils */ "./your-extensions/widgets/coordinates_xy/src/utils/index.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style */ "./your-extensions/widgets/coordinates_xy/src/runtime/style.ts");
/* harmony import */ var jimu_ui_basic_copy_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jimu-ui/basic/copy-button */ "jimu-ui/basic/copy-button");
/* harmony import */ var _components_text_fit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/text-fit */ "./your-extensions/widgets/coordinates_xy/src/runtime/components/text-fit/index.tsx");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../icon.svg */ "./your-extensions/widgets/coordinates_xy/icon.svg");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jimu-icons/outlined/directional/down */ "./jimu-icons/outlined/directional/down.tsx");
/* harmony import */ var jimu_icons_outlined_editor_locator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jimu-icons/outlined/editor/locator */ "./jimu-icons/outlined/editor/locator.tsx");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! esri/core/reactiveUtils */ "esri/core/reactiveUtils");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */
























const { useState, useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const Widget = (props) => {
    var _a;
    const { config, useMapWidgetIds, theme, id, layoutId, layoutItemId } = props;
    const { coordinateSystem, coordinateDecimal, altitudeDecimal, showSeparators, showElevation, displayOrder, widgetStyle, mapInfo, mapInfo2 } = config;
    const widgetSizeAuto = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const appConfig = state && state.appConfig;
        const layout = (_a = appConfig.layouts) === null || _a === void 0 ? void 0 : _a[layoutId];
        const layoutSetting = (_c = (_b = layout === null || layout === void 0 ? void 0 : layout.content) === null || _b === void 0 ? void 0 : _b[layoutItemId]) === null || _c === void 0 ? void 0 : _c.setting;
        const isHeightAuto = ((_d = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _d === void 0 ? void 0 : _d.height) === jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_22__.LayoutItemSizeModes.Auto ||
            ((_e = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _e === void 0 ? void 0 : _e.height) === true;
        const isWidthAuto = ((_f = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _f === void 0 ? void 0 : _f.width) === jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_22__.LayoutItemSizeModes.Auto ||
            ((_g = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _g === void 0 ? void 0 : _g.width) === true;
        return isHeightAuto || isWidthAuto;
    });
    // state
    const [widgetRect, setWidgetRect] = useState({ width: 250, height: 100 });
    const [currentJimuMapView, setCurrentJimuMapView] = useState(null);
    const [enableRealtime, setEnableRealtime] = useState(true);
    const [selectedSystemId, setSelectedSystemId] = useState((_a = coordinateSystem === null || coordinateSystem === void 0 ? void 0 : coordinateSystem[0]) === null || _a === void 0 ? void 0 : _a.id);
    const [locateActive, setLocateActive] = useState(false);
    const [showTips, setShowTips] = useState(false);
    const [showMouseTips, setShowMouseTips] = useState(false);
    const [geoInfo, setGeoInfo] = useState('');
    const [elevInfo, setElevInfo] = useState('');
    const [elevNum, setElevNum] = useState(null);
    const [elevUnit, setElevUnit] = useState('');
    const [eyeInfo, setEyeInfo] = useState('');
    const [eyeNum, setEyeNum] = useState(null);
    const [eyeUnit, setEyeUnit] = useState('');
    const [modulesLoaded, setModulesLoaded] = useState(false);
    // translate
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages);
    const mapClickTips = translate('mapClickTips');
    const mouseMoveTips = translate('mouseMoveTips');
    const enableClickTips = translate('enableClickTips');
    const disableClickTips = translate('disableClickTips');
    const computing = translate('computing');
    const placeHolderName = translate('_widgetLabel');
    //units
    const unitInches = translate('unitsInches');
    const unitFoot = translate('unitsLabelFeet');
    const unitFootUs = translate('unitsFoot_US');
    const unitYards = translate('unitsLabelYards');
    const unitMiles = translate('unitsLabelMiles');
    const unitNauticalMiles = translate('unitsLabelNauticalMiles');
    const unitMillimeters = translate('unitsMillimeters');
    const unitCentimeters = translate('unitsCentimeters');
    const unitMeters = translate('unitsLabelMeters');
    const unitKilometers = translate('unitsLabelKilometers');
    const unitDecimeters = translate('unitsDecimeters');
    const unitDD = translate('unitsDecimalDegrees');
    const unitDDM = translate('unitsDegreesDecimalMinutes');
    const unitDMS = translate('unitsDegreeMinutesSeconds');
    const unitMgrs = translate('unitsMgrs');
    const unitUsng = translate('unitsUsng');
    const changeSystem = translate('changeSystem');
    // global variabl
    const mapWkid = useRef(null);
    const mapPortalId = useRef(null);
    const graphicsLayer = useRef(null);
    const markerGraphic = useRef(null);
    const moveListener = useRef(null);
    const clickListener = useRef(null);
    const wkidUtilsRef = useRef(null);
    // unit nls map
    const unitNlsMap = {
        INCHES: unitInches,
        FOOT: unitFoot,
        FOOT_US: unitFootUs,
        YARDS: unitYards,
        MILES: unitMiles,
        NAUTICAL_MILES: unitNauticalMiles,
        MILLIMETERS: unitMillimeters,
        CENTIMETERS: unitCentimeters,
        METER: unitMeters,
        KILOMETERS: unitKilometers,
        DECIMETERS: unitDecimeters,
        DEGREE: unitDD,
        DECIMAL_DEGREES: unitDD,
        DEGREES_DECIMAL_MINUTES: unitDDM,
        DEGREE_MINUTE_SECONDS: unitDMS,
        MGRS: unitMgrs,
        USNG: unitUsng
    };
    const unitAbbrMap = {
        [unitKilometers]: translate('kilometerAbbr'),
        [unitMeters]: translate('meterAbbr'),
        [unitFoot]: translate('feetAbbr')
    };
    const COORDINATES_MIN_WIDTH = 160;
    const COORDINATES_MIN_HEIGHT = 26;
    useEffect(() => {
        return () => {
            var _a, _b, _c, _d;
            if (markerGraphic.current) {
                (_a = graphicsLayer.current) === null || _a === void 0 ? void 0 : _a.remove(markerGraphic.current);
            }
            if (graphicsLayer.current) {
                const map = (_b = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view) === null || _b === void 0 ? void 0 : _b.map;
                map === null || map === void 0 ? void 0 : map.remove(graphicsLayer.current);
            }
            if (clickListener.current)
                (_c = clickListener.current) === null || _c === void 0 ? void 0 : _c.remove();
            if (moveListener.current)
                (_d = moveListener.current) === null || _d === void 0 ? void 0 : _d.remove();
        };
        // eslint-disable-next-line
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useUpdateEffect(() => {
        var _a, _b, _c, _d;
        const view = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view;
        const viewTypeIsThree = (view === null || view === void 0 ? void 0 : view.type) === '3d';
        if (enableRealtime) {
            (_a = clickListener.current) === null || _a === void 0 ? void 0 : _a.remove();
            (_b = moveListener.current) === null || _b === void 0 ? void 0 : _b.remove();
            moveListener.current = view === null || view === void 0 ? void 0 : view.on('pointer-move', (event) => {
                var _a, _b;
                const point = view.toMap({ x: event.x, y: event.y });
                const threeDPoint = { x: (_a = event === null || event === void 0 ? void 0 : event.native) === null || _a === void 0 ? void 0 : _a.pageX, y: (_b = event === null || event === void 0 ? void 0 : event.native) === null || _b === void 0 ? void 0 : _b.pageY };
                onMouseMove(point, viewTypeIsThree ? threeDPoint : undefined);
            });
        }
        else {
            (_c = clickListener.current) === null || _c === void 0 ? void 0 : _c.remove();
            (_d = moveListener.current) === null || _d === void 0 ? void 0 : _d.remove();
            if (locateActive) {
                clickListener.current = view === null || view === void 0 ? void 0 : view.on('click', (event) => {
                    var _a, _b;
                    const threeDPoint = { x: (_a = event === null || event === void 0 ? void 0 : event.native) === null || _a === void 0 ? void 0 : _a.pageX, y: (_b = event === null || event === void 0 ? void 0 : event.native) === null || _b === void 0 ? void 0 : _b.pageY };
                    onMapClick(event, viewTypeIsThree ? threeDPoint : undefined);
                });
            }
        }
    }, [currentJimuMapView, locateActive, enableRealtime, selectedSystemId,
        coordinateSystem, coordinateDecimal, altitudeDecimal, showSeparators, showElevation, displayOrder]);
    useEffect(() => {
        var _a;
        graphicsLayer.current = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_6__["default"]({ listMode: 'hide' });
        markerGraphic.current = null;
        const map = (_a = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view) === null || _a === void 0 ? void 0 : _a.map;
        map === null || map === void 0 ? void 0 : map.add(graphicsLayer.current);
        // change status when view switch
        checkSystemSetTips();
        // eslint-disable-next-line
    }, [currentJimuMapView, mapInfo, mapInfo2]);
    const reserAllGeoInfo = () => {
        setGeoInfo('');
        setElevInfo('');
        setElevNum(null);
        setElevUnit('');
        setEyeInfo('');
        setEyeNum(null);
        setEyeUnit('');
        setLocateActive(false);
    };
    const removeLayerAndMarker = () => {
        var _a, _b;
        if (markerGraphic.current) {
            (_a = graphicsLayer.current) === null || _a === void 0 ? void 0 : _a.remove(markerGraphic.current);
        }
        if (graphicsLayer.current) {
            const orgMap = (_b = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view) === null || _b === void 0 ? void 0 : _b.map;
            orgMap === null || orgMap === void 0 ? void 0 : orgMap.remove(graphicsLayer.current);
        }
    };
    const onActiveViewChange = (jimuMapView) => {
        var _a, _b, _c;
        // switch map: clear all geo info
        reserAllGeoInfo();
        removeLayerAndMarker();
        setCurrentJimuMapView(jimuMapView);
        const view = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view;
        if (!view)
            return;
        mapWkid.current = (_a = view === null || view === void 0 ? void 0 : view.spatialReference) === null || _a === void 0 ? void 0 : _a.wkid;
        mapPortalId.current = (_c = (_b = view === null || view === void 0 ? void 0 : view.map) === null || _b === void 0 ? void 0 : _b.portalItem) === null || _c === void 0 ? void 0 : _c.id;
        // monitor basemap change
        esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_23__["default"].watch(() => { var _a; return (_a = view === null || view === void 0 ? void 0 : view.map) === null || _a === void 0 ? void 0 : _a.basemap; }, () => {
            var _a, _b, _c, _d;
            view.cursor = 'default';
            if (!(view === null || view === void 0 ? void 0 : view.basemapView))
                return;
            const baseMapView = (_a = view.basemapView) === null || _a === void 0 ? void 0 : _a.view;
            mapWkid.current = (_b = baseMapView === null || baseMapView === void 0 ? void 0 : baseMapView.spatialReference) === null || _b === void 0 ? void 0 : _b.wkid;
            mapPortalId.current = (_d = (_c = baseMapView === null || baseMapView === void 0 ? void 0 : baseMapView.map) === null || _c === void 0 ? void 0 : _c.portalItem) === null || _d === void 0 ? void 0 : _d.id;
            checkSystemSetTips();
            reserAllGeoInfo();
            removeLayerAndMarker();
        });
    };
    const debounceOnResize = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.debounce((width, height) => { onResize(width, height); }, 200);
    const onResize = (width, height) => {
        const newWidgetRect = {
            width,
            height
        };
        const notResetSize = width < COORDINATES_MIN_WIDTH || height < COORDINATES_MIN_HEIGHT;
        if (notResetSize)
            return;
        setWidgetRect(newWidgetRect);
    };
    const checkSystemSetTips = () => __awaiter(void 0, void 0, void 0, function* () {
        const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId);
        const canShowClient = yield canShowInClient(selectedSystem);
        if (canShowClient) {
            if (!locateActive) {
                setEnableRealtime(true);
                setShowMouseTips(true);
            }
        }
        else {
            setEnableRealtime(false);
            setShowMouseTips(false);
        }
    });
    const getMarkerGraphic = (mapPoint) => {
        const symbol = new esri_symbols_PictureMarkerSymbol__WEBPACK_IMPORTED_MODULE_8__["default"]({
            url: __webpack_require__(/*! ./assets/pin-exb.svg */ "./your-extensions/widgets/coordinates_xy/src/runtime/assets/pin-exb.svg"),
            width: 12,
            height: 22,
            yoffset: 11
        });
        return new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
            geometry: mapPoint,
            symbol
        });
    };
    const getUsedmapInfo = () => {
        var _a, _b, _c;
        const curMapId = (_c = (_b = (_a = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.portalItem) === null || _c === void 0 ? void 0 : _c.id;
        const mapArr = [];
        if (mapInfo)
            mapArr.push(mapInfo);
        if (mapInfo2)
            mapArr.push(mapInfo2);
        return mapArr.find(info => (info === null || info === void 0 ? void 0 : info.id) === curMapId);
    };
    const canShowInClient = (selectedSystem) => __awaiter(void 0, void 0, void 0, function* () {
        const { wkid, crs } = selectedSystem;
        const curWkidNum = parseInt(wkid);
        const curSr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: curWkidNum });
        const mapSr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: mapWkid.current });
        const specialCase = (mapWkid.current === 4326 && curSr.isWebMercator) ||
            (curWkidNum === 4326 && mapSr.isWebMercator);
        const curLabel = crs === null || crs === void 0 ? void 0 : crs.name;
        // If same wkid with basemap, use the recorded wkid.Otherwise, load wkidutils.
        const uesdConfigMapInfo = getUsedmapInfo();
        // get map label
        const hasMap = useMapWidgetIds && (useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds.length) > 0;
        const getMapLabel = () => {
            if (!mapWkid.current || !hasMap) {
                return Promise.resolve('');
            }
            else if ((uesdConfigMapInfo === null || uesdConfigMapInfo === void 0 ? void 0 : uesdConfigMapInfo.wkid) && mapWkid.current === (uesdConfigMapInfo === null || uesdConfigMapInfo === void 0 ? void 0 : uesdConfigMapInfo.wkid)) {
                return Promise.resolve(uesdConfigMapInfo === null || uesdConfigMapInfo === void 0 ? void 0 : uesdConfigMapInfo.label);
            }
            else {
                if (!modulesLoaded) {
                    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-core/wkid').then(module => {
                        wkidUtilsRef.current = module;
                        setModulesLoaded(true);
                        const { getSRLabel } = module;
                        return getSRLabel(mapWkid.current);
                    });
                }
                else {
                    const { getSRLabel } = wkidUtilsRef.current;
                    return getSRLabel(mapWkid.current);
                }
            }
        };
        const mapLabel = yield getMapLabel();
        const isSameSR = curLabel && curLabel === mapLabel;
        if (isSameSR || specialCase)
            return true;
        return false;
    });
    const projectMapPoint = (point, selectedSystem, threeDPoint) => {
        const { wkid, datumWkid, datumWkid2, displayUnit, crs } = selectedSystem;
        if (!wkid)
            return;
        const curWkidNum = parseInt(wkid);
        const curSr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: curWkidNum });
        const mapSr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: mapWkid.current });
        let outWkid = null;
        const params = new esri_rest_support_ProjectParameters__WEBPACK_IMPORTED_MODULE_14__["default"]({
            geometries: [point],
            transformForward: false
        });
        outWkid = curWkidNum;
        let useGeo = false;
        let outCrs;
        if (curSr.isGeographic) {
            outWkid = curWkidNum;
        }
        else {
            const useDisplayUnit = displayUnit || getDefaultUnits(curSr.isGeographic, mapSr.isWebMercator, crs);
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_15__.isProjectUnit)(useDisplayUnit)) {
                outWkid = curWkidNum;
            }
            else { // geoUnit or USNG, MGRS
                // When output wkid is not used, need to use GEOGCS to find the outSR
                const spheroidStr = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getWktKeyStr)(crs, 'GEOGCS');
                outCrs = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getCrsBySpheroidStr)(spheroidStr);
                outWkid = outCrs === null || outCrs === void 0 ? void 0 : outCrs.wkid;
                useGeo = true;
            }
        }
        if (datumWkid && datumWkid2) {
            if (mapPortalId.current === mapInfo.id) {
                params.transformation = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: parseInt(datumWkid) });
            }
            else if (mapPortalId.current === mapInfo2.id) {
                params.transformation = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: parseInt(datumWkid2) });
            }
        }
        else if (datumWkid && !datumWkid2) {
            params.transformation = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: parseInt(datumWkid) });
        }
        // This parameter is not used, but used in WAB
        // params.transformForward = JSON.parse(this.forward)
        params.outSpatialReference = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: parseInt(outWkid) });
        setGeoInfo(computing);
        const defUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getGeometryService();
        esri_rest_geometryService__WEBPACK_IMPORTED_MODULE_13__["default"].project(defUrl, params).then(geometries => {
            const point = geometries[0];
            let outputUnit = displayUnit;
            // use default units
            if (!outputUnit) {
                outputUnit = getDefaultUnits(curSr.isGeographic, mapSr.isWebMercator, crs);
            }
            if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
                displayUsngOrMgrs(outputUnit, point);
            }
            else if ((0,_utils__WEBPACK_IMPORTED_MODULE_15__.isGeographicUnit)(outputUnit)) {
                displayDegOrDms(outputUnit, point, mapSr.isWebMercator, useGeo ? outCrs.unit : '');
            }
            else {
                displayProject(outputUnit, point, mapSr.isWebMercator, useGeo ? outCrs.unit : '');
            }
        });
        const view = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view;
        const viewTypeIsThree = (view === null || view === void 0 ? void 0 : view.type) === '3d';
        if (viewTypeIsThree) {
            _setEyeInfo();
            if (threeDPoint)
                _setElevInfo(threeDPoint);
        }
    };
    const onMapClick = (evt, threeDPoint) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        // if (window.appInfo.isRunInMobile) {
        //   return
        // }
        // Changing the reference causes a bug where mark's position is changed the first time
        if (!evt.mapPoint)
            return;
        const copyMapPoint = esri_geometry_Point__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(evt.mapPoint.toJSON());
        evt.stopPropagation();
        setShowTips(false);
        if (enableRealtime || !selectedSystemId)
            return;
        const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId);
        const canShowClient = yield canShowInClient(selectedSystem);
        const needMarker = canShowClient || locateActive;
        if (needMarker && !markerGraphic.current) {
            markerGraphic.current = getMarkerGraphic(evt.mapPoint);
            graphicsLayer.current.add(markerGraphic.current);
        }
        if (canShowClient) {
            markerGraphic.current.geometry = evt.mapPoint;
            displayOnClient(copyMapPoint, threeDPoint);
            return;
        }
        if (locateActive) {
            markerGraphic.current.geometry = evt.mapPoint;
            const { x, y } = evt.mapPoint;
            const mapSr = (_b = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view) === null || _b === void 0 ? void 0 : _b.spatialReference;
            const point = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_11__["default"]({ x, y, spatialReference: mapSr });
            projectMapPoint(point, selectedSystem, threeDPoint);
        }
    });
    const onMouseMove = (point, threeDPoint) => __awaiter(void 0, void 0, void 0, function* () {
        // if (window.appInfo.isRunInMobile) {
        //   return
        // }
        setShowMouseTips(false);
        if (!enableRealtime || !selectedSystemId)
            return;
        const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId);
        const canShowClient = yield canShowInClient(selectedSystem);
        if (canShowClient) {
            displayOnClient(point, threeDPoint);
        }
    });
    const unitToNls = (unit) => {
        return unitNlsMap[unit] || unitNlsMap[unit === null || unit === void 0 ? void 0 : unit.toUpperCase()];
    };
    const displayUsngOrMgrs = (unit, normalizedPoint) => {
        esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].load().then(() => {
            const nlsUnit = unitToNls(unit);
            if (unit === 'MGRS') {
                const mgrs = esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].toMgrs(normalizedPoint, 'automatic', 5);
                setGeoInfo(`${mgrs} ${nlsUnit}`);
            }
            else if (unit === 'USNG') {
                const usng = esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].toUsng(normalizedPoint, 5);
                setGeoInfo(`${usng} ${nlsUnit}`);
            }
        });
    };
    const displayDegOrDms = (unit, normalizedPoint, mapIsMercator, outCrsUnit) => {
        let { x, y } = normalizedPoint;
        const orderXy = displayOrder === _config__WEBPACK_IMPORTED_MODULE_1__.DisplayOrderType.xy;
        // get unitRate
        const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId);
        const { crs } = selectedSystem;
        const defaultUnit = outCrsUnit || (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getCSUnitByCrs)(crs);
        const unitRate = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getUnitRate)(defaultUnit, unit, mapIsMercator);
        x = x * unitRate;
        y = y * unitRate;
        if (unit === 'DEGREE_MINUTE_SECONDS') {
            x = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.degToDMS)(x, 'LON', coordinateDecimal, showSeparators);
            y = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.degToDMS)(y, 'LAT', coordinateDecimal, showSeparators);
            orderXy ? setGeoInfo(`${x} ${y}`) : setGeoInfo(`${y} ${x}`);
        }
        else if (unit === 'DEGREES_DECIMAL_MINUTES') {
            //for hack DEGREES_DECIMAL_MINUTES
            x = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.degToDDM)(x, coordinateDecimal, showSeparators, 'longitude');
            y = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.degToDDM)(y, coordinateDecimal, showSeparators, 'latitude');
            orderXy ? setGeoInfo(`${x} ${y}`) : setGeoInfo(`${y} ${x}`);
        }
        else {
            const nlsUnit = unitToNls(unit);
            orderXy ? setGeoInfo(`${toFormat(x)} ${toFormat(y)} ${nlsUnit}`) : setGeoInfo(`${toFormat(y)} ${toFormat(x)} ${nlsUnit}`);
        }
    };
    const toFormat = (num) => {
        if (isNaN(num))
            return '';
        return (0,_utils__WEBPACK_IMPORTED_MODULE_15__.localizeNumberBySettingInfo)(num, {
            places: coordinateDecimal,
            digitSeparator: showSeparators
        });
    };
    const displayProject = (unit, normalizedPoint, mapIsMercator, outCrsUnit) => {
        let { x, y } = normalizedPoint;
        // get unitRate
        const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId);
        const { crs } = selectedSystem;
        const defaultUnit = outCrsUnit || (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getCSUnitByCrs)(crs);
        const unitRate = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getUnitRate)(defaultUnit, unit, mapIsMercator);
        x = x * unitRate;
        y = y * unitRate;
        const nlsUnit = unitToNls(unit);
        const orderXy = displayOrder === _config__WEBPACK_IMPORTED_MODULE_1__.DisplayOrderType.xy;
        orderXy ? setGeoInfo(`${toFormat(x)} ${toFormat(y)} ${nlsUnit}`) : setGeoInfo(`${toFormat(y)} ${toFormat(x)} ${nlsUnit}`);
    };
    const getDefaultUnits = (isGeographic, mapIsWebMercator, crs) => {
        const userUnit = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getUnits)();
        let outputUnit = '';
        if (isGeographic) {
            outputUnit = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getCSUnitByCrs)(crs);
            if (!outputUnit)
                outputUnit = 'METER';
        }
        else {
            outputUnit = userUnit === 'english' ? 'FOOT' : 'METER';
        }
        //default show mercator is degrees.
        if (mapIsWebMercator) {
            outputUnit = 'DECIMAL_DEGREES';
        }
        return outputUnit;
    };
    const _setElevInfo = (threeDPoint) => {
        const view = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view;
        if (!threeDPoint) {
            setElevInfo('');
            setElevNum(null);
            setElevUnit('');
            return;
        }
        view.hitTest({
            x: threeDPoint.x,
            y: threeDPoint.y
        }).then(position => {
            let elev = '';
            // if (!isJustElev) {
            //   this._setLonLat(position);
            // }
            if (position.results && position.results[0] &&
                position.results[0].mapPoint && position.results[0].mapPoint.z) {
                elev = _getElev(position.results[0].mapPoint); // result elev(raycasting)
                setElevInfo(elev);
            }
            else if (typeof position !== 'undefined' && position.ground &&
                position.ground.mapPoint !== null && typeof position.ground.mapPoint.z !== 'undefined') {
                elev = _getElev(position.ground.mapPoint); // ground elev
            }
            setElevInfo(elev);
        });
    };
    const _getElev = (pos) => {
        let elev = '';
        if (pos && pos.z !== undefined) {
            const { num, unit } = trunNumToKmOrM(pos.z, true);
            const abbtUnit = unitAbbrMap[unit];
            setElevNum(num);
            setElevUnit(unit);
            elev = `${translate('elev', { ele: abbtUnit })} ${num} ${unit}`;
        }
        else {
            setElevNum(null);
            setElevUnit('');
        }
        return elev;
    };
    const _setEyeInfo = () => {
        var _a, _b;
        const view = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view;
        if (!view || !(view === null || view === void 0 ? void 0 : view.camera) || !((_a = view === null || view === void 0 ? void 0 : view.camera) === null || _a === void 0 ? void 0 : _a.position)) {
            setEyeInfo('');
            setEyeNum(null);
            setEyeUnit('');
            return;
        }
        const eyeAlt = (_b = view.camera.position) === null || _b === void 0 ? void 0 : _b.z;
        const { num, unit } = trunNumToKmOrM(eyeAlt);
        const abbtUnit = unitAbbrMap[unit];
        setEyeInfo(`${translate('eyeAlt', { alt: abbtUnit })} ${num} ${unit}`);
        setEyeNum(num);
        setEyeUnit(unit);
    };
    const trunNumToKmOrM = (num, isElev) => {
        const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId);
        const { elevationUnit } = selectedSystem;
        const isMetric = elevationUnit === _config__WEBPACK_IMPORTED_MODULE_1__.ElevationUnitType.metric;
        if (!num)
            return { num: 0, unit: isMetric ? unitMeters : unitFoot };
        let unit = '';
        const unitRate = 1;
        let threshold = 1000;
        num = parseFloat(num);
        if (isElev) {
            //switch to km if more than 10,000 m.
            threshold = 10000;
        }
        if (isMetric) {
            if (num >= threshold || num <= -(threshold)) {
                num = num / 1000;
                unit = unitKilometers;
            }
            else {
                unit = unitMeters;
            }
        }
        else {
            //show elevation in feet and not meters.
            num = num * unitRate;
            unit = unitFoot;
        }
        num = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.localizeNumberBySettingInfo)(num, {
            places: altitudeDecimal,
            digitSeparator: showSeparators
        });
        return { num, unit };
    };
    const getOutputWkid = (selectedSystem) => {
        const { wkid, displayUnit, crs } = selectedSystem;
        const curWkidNum = parseInt(wkid);
        let outWkid = curWkidNum;
        const curSr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: curWkidNum });
        const mapSr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: mapWkid.current });
        let outCrs;
        if (!curSr.isGeographic) {
            const useDisplayUnit = displayUnit || getDefaultUnits(curSr.isGeographic, mapSr.isWebMercator, crs);
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_15__.isProjectUnit)(useDisplayUnit)) {
                outWkid = curWkidNum;
            }
            else { // geoUnit or USNG, MGRS
                // When output wkid is not used, need to use GEOGCS to find the outSR
                const spheroidStr = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getWktKeyStr)(crs, 'GEOGCS');
                outCrs = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getCrsBySpheroidStr)(spheroidStr);
                outWkid = outCrs === null || outCrs === void 0 ? void 0 : outCrs.wkid;
            }
        }
        return outWkid;
    };
    const displayOnClient = (mapPoint, threeDPoint) => {
        // when the mouse pointer out of earth, show eyeInfo only
        if (!mapPoint || !(mapPoint === null || mapPoint === void 0 ? void 0 : mapPoint.x) || !(mapPoint === null || mapPoint === void 0 ? void 0 : mapPoint.y)) {
            setElevInfo('');
            setElevNum(null);
            setElevUnit('');
            setGeoInfo('');
            return;
        }
        const copyMapPoint = esri_geometry_Point__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(mapPoint.toJSON());
        const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId);
        const { displayUnit, wkid, crs } = selectedSystem;
        const curWkidNum = parseInt(wkid);
        const curSr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: curWkidNum });
        const mapSr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: mapWkid.current });
        let { x, y } = mapPoint;
        const convertInClient = (mapWkid.current === 4326 && curSr.isWebMercator) ||
            (curWkidNum === 4326 && mapSr.isWebMercator);
        let normalizedPoint = null;
        // make sure longitude values stays within -180/180
        normalizedPoint = mapPoint.normalize();
        // get default units
        let outputUnit = displayUnit;
        const systemDefaultUnit = getDefaultUnits(curSr.isGeographic, mapSr.isWebMercator, crs);
        // const systemDefaultUnit = getCSUnitByCrs(crs)
        if (!outputUnit) {
            outputUnit = systemDefaultUnit;
        }
        // this means system output unit
        const isGeoUnit = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.isGeographicUnit)(outputUnit);
        const isProUnit = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.isProjectUnit)(outputUnit);
        if (isGeoUnit) {
            x = normalizedPoint.longitude || x;
            y = normalizedPoint.latitude || y;
            normalizedPoint.x = x;
            normalizedPoint.y = y;
        }
        // 'MGRS' & 'USNG' need to convert pro point to gcs point
        const convertPoint = esri_geometry_projection__WEBPACK_IMPORTED_MODULE_12__["default"].project(copyMapPoint, new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_7__["default"]({ wkid: getOutputWkid(selectedSystem) }));
        if (convertInClient) {
            // process special case
            if (mapPoint.spatialReference.wkid === 4326 && curSr.isWebMercator) {
                if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
                    displayUsngOrMgrs(outputUnit, convertPoint);
                }
                else if (isGeoUnit) {
                    displayDegOrDms(outputUnit, normalizedPoint, mapSr.isWebMercator);
                }
                else if (isProUnit) {
                    const mCoord = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_10__["default"].lngLatToXY(x, y);
                    displayProject(outputUnit, { x: mCoord[0], y: mCoord[1] }, mapSr.isWebMercator);
                }
            }
            else if (curWkidNum === 4326 && mapSr.isWebMercator) {
                if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
                    displayUsngOrMgrs(outputUnit, convertPoint);
                }
                else if (isGeoUnit) {
                    displayDegOrDms(outputUnit, normalizedPoint, mapSr.isWebMercator);
                }
            }
        }
        else {
            // setting display units
            if (mapPoint.spatialReference.wkid === 4326 || mapPoint.spatialReference.isWebMercator) {
                if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
                    displayUsngOrMgrs(outputUnit, convertPoint);
                }
                else if (isGeoUnit) {
                    displayDegOrDms(outputUnit, normalizedPoint, mapSr.isWebMercator);
                }
                else if (isProUnit) {
                    displayProject(outputUnit, normalizedPoint, mapSr.isWebMercator);
                }
            }
            else { // proj or geo
                if (curSr.isGeographic) {
                    if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
                        displayUsngOrMgrs(outputUnit, convertPoint);
                    }
                    else if (isGeoUnit) {
                        displayDegOrDms(outputUnit, normalizedPoint, mapSr.isWebMercator);
                    }
                }
                else {
                    displayProject(outputUnit, normalizedPoint, mapSr.isWebMercator);
                }
            }
        }
        const view = currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view;
        const viewTypeIsThree = (view === null || view === void 0 ? void 0 : view.type) === '3d';
        if (viewTypeIsThree) {
            _setEyeInfo();
            if (threeDPoint)
                _setElevInfo(threeDPoint);
        }
    };
    const onLocateClick = () => __awaiter(void 0, void 0, void 0, function* () {
        setGeoInfo('');
        setElevInfo('');
        setElevNum(null);
        setElevUnit('');
        setEyeInfo('');
        setEyeNum(null);
        setEyeUnit('');
        graphicsLayer.current.remove(markerGraphic.current);
        markerGraphic.current = null;
        const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId);
        const canShowClient = yield canShowInClient(selectedSystem);
        if (canShowClient) {
            if (!locateActive) {
                setShowTips(true);
                setShowMouseTips(false);
                setEnableRealtime(false);
            }
            else {
                setShowTips(false);
                setShowMouseTips(true);
                setEnableRealtime(true);
            }
        }
        else {
            setShowMouseTips(false);
            setEnableRealtime(false);
            if (!locateActive) {
                setShowTips(true);
            }
            else {
                setShowTips(false);
                setGeoInfo('');
            }
        }
        if (currentJimuMapView === null || currentJimuMapView === void 0 ? void 0 : currentJimuMapView.view) {
            const cursorType = locateActive ? 'default' : 'crosshair';
            currentJimuMapView.view.cursor = cursorType;
        }
        setLocateActive(!locateActive);
    });
    const handleSystemChange = (systemId) => __awaiter(void 0, void 0, void 0, function* () {
        const selectedSystem = coordinateSystem.find(item => item.id === systemId);
        const canShowClient = yield canShowInClient(selectedSystem);
        if (canShowClient) {
            setEnableRealtime(true);
            setShowMouseTips(true);
        }
        else {
            setEnableRealtime(false);
            setShowMouseTips(false);
        }
        setSelectedSystemId(systemId);
        setLocateActive(false);
        setShowTips(false);
        setGeoInfo('');
        setEyeInfo('');
        setEyeNum(null);
        setEyeUnit('');
        setElevInfo('');
        setElevNum(null);
        setElevUnit('');
        graphicsLayer.current.remove(markerGraphic.current);
        markerGraphic.current = null;
    });
    const useMap = (useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds.length) > 0;
    if (!useMap) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.WidgetPlaceholder, { widgetId: id, icon: (_icon_svg__WEBPACK_IMPORTED_MODULE_19___default()), "data-testid": 'coordinatesPlaceholder', message: placeHolderName }));
    }
    const locateBtnTips = locateActive ? disableClickTips : enableClickTips;
    const isClassic = widgetStyle === _config__WEBPACK_IMPORTED_MODULE_1__.WidgetStyleType.classic;
    const hasSecondDivider = geoInfo || elevInfo;
    //const classicGeo = `${geoInfo}${showElevation ? (elevInfo && `${geoInfo && ' | '}${elevInfo} ${eyeInfo && `${hasSecondDivider && ' | '}${eyeInfo}`}):''`
    const classicGeo = `${geoInfo}${showElevation ? (elevInfo ? `${geoInfo ? ' | ' : ''}${elevInfo}` : '') : ''}${showElevation && eyeInfo ? `${hasSecondDivider ? ' | ' : ''}${eyeInfo}` : ''}`;
    const classicCoorInfo = showTips ? mapClickTips : (showMouseTips ? mouseMoveTips : classicGeo || enableClickTips);
    const hasElevOrEye = (eyeNum !== null) || (elevNum !== null);
    const elevText = translate('elev', { ele: unitAbbrMap[elevUnit] });
    const eyeAltText = translate('eyeAlt', { alt: unitAbbrMap[eyeUnit] });
    const modernCoorInfo = (showTips
        ? mapClickTips
        : (showMouseTips
            ? mouseMoveTips
            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'info-container' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `d-flex w-100 ${(hasElevOrEye && showElevation) ? 'h-50' : 'h-100'}` }, (geoInfo === computing || !geoInfo)
                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-computing' }, geoInfo || ((hasElevOrEye && showElevation) ? '--' : enableClickTips))
                    : (widgetSizeAuto
                        ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-card-text-geo-fixed' }, geoInfo)
                        : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_fit__WEBPACK_IMPORTED_MODULE_18__.TextAutoFit, { className: 'coordinates-card-text-geo', text: geoInfo, widgetRect: widgetRect, domChange: (hasElevOrEye && showElevation) }))),
                (hasElevOrEye && showElevation) &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'h-50' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'textfit-container' },
                            elevNum !== null
                                ? (widgetSizeAuto
                                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-card-text-fixed' }, elevNum)
                                    : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_fit__WEBPACK_IMPORTED_MODULE_18__.TextAutoFit, { className: 'coordinates-card-text', text: elevNum, widgetRect: widgetRect }))
                                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-card-text-empty' }, "--"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'info-unit truncate-two', title: elevText }, elevText)),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'textfit-container' },
                            eyeNum !== null
                                ? (widgetSizeAuto
                                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-card-text-fixed' }, eyeNum)
                                    : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_fit__WEBPACK_IMPORTED_MODULE_18__.TextAutoFit, { className: 'coordinates-card-text', text: eyeNum, widgetRect: widgetRect }))
                                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-card-text-empty' }, "--"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'info-unit truncate-two', title: eyeAltText }, eyeAltText))))));
    const infoTipsArr = [mapClickTips, mouseMoveTips, enableClickTips];
    const isDefaultTips = infoTipsArr.includes(classicCoorInfo);
    const classicCopyDisable = enableRealtime || isDefaultTips || (!locateActive && !geoInfo);
    const modernCopyDisable = enableRealtime || isDefaultTips || (!locateActive && !classicCoorInfo.trim());
    const hasSystem = (coordinateSystem === null || coordinateSystem === void 0 ? void 0 : coordinateSystem.length) > 0;
    // Renderer
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget-coordinates jimu-widget h-100', css: (0,_style__WEBPACK_IMPORTED_MODULE_16__.getStyle)(theme, isClassic, widgetRect, widgetSizeAuto) },
        isClassic
            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-widget-container d-flex justify-content-between surface-1' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { icon: true, size: 'sm', type: 'tertiary', onClick: onLocateClick, active: locateActive, title: locateBtnTips, "aria-label": locateBtnTips, className: 'jimu-outline-inside coordinates-locate', disabled: !hasSystem },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_locator__WEBPACK_IMPORTED_MODULE_21__.LocatorOutlined, null)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-info text-truncate', title: classicCoorInfo }, classicCoorInfo),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_copy_button__WEBPACK_IMPORTED_MODULE_17__.CopyButton, { text: classicCoorInfo, disabled: classicCopyDisable }),
                hasSystem &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Dropdown, { size: 'sm', activeIcon: true },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.DropdownButton, { arrow: false, icon: true, size: 'sm', type: 'tertiary', className: 'suspension-drop-btn jimu-outline-inside', title: changeSystem },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_20__.DownOutlined, null)),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, null, coordinateSystem.map(item => {
                            const isActived = item.id === selectedSystemId;
                            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.DropdownItem, { key: item.id, active: isActived, onClick: () => handleSystemChange(item.id) }, item.name));
                        }))))
            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'coordinates-widget-container w-100 h-100 surface-1' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Card, { className: 'h-100 coordinates-card' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.CardBody, { className: 'widget-card-content' }, modernCoorInfo),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.CardFooter, { className: 'widget-card-footer' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget d-flex justify-content-between' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { icon: true, size: 'sm', type: 'tertiary', onClick: onLocateClick, active: locateActive, title: locateBtnTips, "aria-label": locateBtnTips },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_locator__WEBPACK_IMPORTED_MODULE_21__.LocatorOutlined, null)),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between' },
                                classicCoorInfo &&
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_copy_button__WEBPACK_IMPORTED_MODULE_17__.CopyButton, { text: classicCoorInfo, disabled: modernCopyDisable, className: 'coordinates-card-copy mr-1' }),
                                hasSystem &&
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Dropdown, { size: 'sm', activeIcon: true },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.DropdownButton, { arrow: false, icon: true, size: 'sm', type: 'tertiary', className: 'suspension-drop-btn', title: changeSystem },
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_20__.DownOutlined, { className: 'suspension-drop-btn' })),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, null, coordinateSystem.map(item => {
                                            const isActived = item.id === selectedSystemId;
                                            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.DropdownItem, { key: item.id, active: isActived, onClick: () => handleSystemChange(item.id) }, item.name));
                                        })))))))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds[0], onActiveViewChange: onActiveViewChange }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactResizeDetector, { handleWidth: true, handleHeight: true, onResize: debounceOnResize })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb29yZGluYXRlc194eS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBRVk7QUFFbEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsMkVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRVU7QUFFaEQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDMUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFH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eGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvZG93bi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9sb2NhdG9yLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29vcmRpbmF0ZXNfeHkvaWNvbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvZG93bi50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2xvY2F0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb29yZGluYXRlc194eS9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb29yZGluYXRlc194eS9zcmMvcnVudGltZS9jb21wb25lbnRzL3RleHQtZml0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29vcmRpbmF0ZXNfeHkvc3JjL3J1bnRpbWUvY29tcG9uZW50cy90ZXh0LWZpdC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2Nvb3JkaW5hdGVzX3h5L3NyYy9ydW50aW1lL3N0eWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb29yZGluYXRlc194eS9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29vcmRpbmF0ZXNfeHkvc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb29yZGluYXRlc194eS9zcmMvcnVudGltZS9hc3NldHMvcGluLWV4Yi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29yZS9yZWFjdGl2ZVV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2VcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvY29vcmRpbmF0ZUZvcm1hdHRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9wcm9qZWN0aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L2dlb21ldHJ5U2VydmljZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L3N1cHBvcnQvUHJvamVjdFBhcmFtZXRlcnNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3ltYm9scy9QaWN0dXJlTWFya2VyU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvY29weS1idXR0b25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29vcmRpbmF0ZXNfeHkvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMi4xNDYgNC42NTNhLjQ4NS40ODUgMCAwIDEgLjcwOCAwTDggMTAuMjRsNS4xNDYtNS41ODdhLjQ4NS40ODUgMCAwIDEgLjcwOCAwIC41NC41NCAwIDAgMSAwIC43MzhsLTUuNSA1Ljk1NmEuNDg1LjQ4NSAwIDAgMS0uNzA4IDBsLTUuNS01Ljk1NmEuNTQuNTQgMCAwIDEgMC0uNzM4XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE1IDE1XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk03IDBoMXY0SDd6TTAgOFY3aDR2MXptMTEtMXYxaDRWN3ptLTQgNGgxdjRIN3ptMi01SDZ2M2gzelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiI0M1QzVDNVxcXCIgZD1cXFwiTTEwIDQuMzY5IDcuNjkyIDEuNiA1LjM4NSA0LjM2OSA2IDQuODggNy4yOTIgMy4zM3Y2LjY2OWwtNS4zODggMy4yMzMuNDkyLTIuMTE2LS43NzktLjE4Mi0uODE3IDMuNTEgMy42LjE3Mi4wMzgtLjgtMS44MS0uMDg2IDUuMDctMy4wNDIgNS40NDIgMy4wNi0xLjg4NC4xNzMuMDczLjc5NiAzLjU4OS0uMzI5LS45NzEtMy40Ny0uNzcuMjE1LjU3IDIuMDM5TDguMDkyIDkuOTlWMy4zM2wxLjI5MyAxLjU1elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9kb3duLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBEb3duT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL2xvY2F0b3Iuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2F0b3JPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJbW11dGFibGVPYmplY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG5leHBvcnQgZW51bSBEaXNwbGF5T3JkZXJUeXBlIHtcclxuICB4eSA9ICdYWScsXHJcbiAgeXggPSAnWVgnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdpZGdldFN0eWxlVHlwZSB7XHJcbiAgY2xhc3NpYyA9ICdDTEFTU0lDJyxcclxuICBtb2Rlcm4gPSAnTU9ERVJOJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFbGV2YXRpb25Vbml0VHlwZSB7XHJcbiAgbWV0cmljID0gJ01FVFJJQycsXHJcbiAgaW1wZXJpYWwgPSAnSU1QRVJJQUwnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwSW5mbyB7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICB3a2lkOiBzdHJpbmdcclxuICBsYWJlbDogc3RyaW5nXHJcbiAgY3NVbml0OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRSZWN0IHtcclxuICB3aWR0aDogbnVtYmVyXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlQ29uZmlnIHtcclxuICBpZDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgd2tpZDogc3RyaW5nXHJcbiAgY3JzPzogYW55XHJcbiAgZGlzcGxheVVuaXQ6IHN0cmluZ1xyXG4gIGVsZXZhdGlvblVuaXQ/OiBFbGV2YXRpb25Vbml0VHlwZVxyXG4gIGRhdHVtV2tpZD86IHN0cmluZ1xyXG4gIGRhdHVtTmFtZT86IHN0cmluZ1xyXG4gIGRhdHVtV2tpZDI/OiBzdHJpbmdcclxuICBkYXR1bU5hbWUyPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBjb29yZGluYXRlU3lzdGVtOiBJbW11dGFibGVBcnJheTxDb29yZGluYXRlQ29uZmlnPlxyXG4gIGNvb3JkaW5hdGVEZWNpbWFsOiBudW1iZXJcclxuICBhbHRpdHVkZURlY2ltYWw6IG51bWJlclxyXG4gIHNob3dTZXBhcmF0b3JzOiBib29sZWFuXHJcbiAgc2hvd0VsZXZhdGlvbjogYm9vbGVhblxyXG4gIGRpc3BsYXlPcmRlcjogRGlzcGxheU9yZGVyVHlwZVxyXG4gIHdpZGdldFN0eWxlOiBXaWRnZXRTdHlsZVR5cGVcclxuICBtYXBJbmZvPzogTWFwSW5mb1xyXG4gIG1hcEluZm8yPzogTWFwSW5mb1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFdpZGdldFJlY3QgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXHJcbmltcG9ydCB7IGdldFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuY29uc3QgeyB1c2VFZmZlY3QsIHVzZVJlZiB9ID0gUmVhY3RcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGV4dDogc3RyaW5nXHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgd2lkZ2V0UmVjdD86IFdpZGdldFJlY3RcclxuICBkb21DaGFuZ2U/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0QXV0b0ZpdCA9IFJlYWN0Lm1lbW8oKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGV4dCwgY2xhc3NOYW1lLCB3aWRnZXRSZWN0LCBkb21DaGFuZ2UgfSA9IHByb3BzXHJcbiAgY29uc3Qgb3V0dGVyQ29udGFpbmVyRG9tID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgdGV4dERvbSA9IHVzZVJlZihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlVGV4dCgpXHJcbiAgfSwgW3RleHQsIHdpZGdldFJlY3QsIG91dHRlckNvbnRhaW5lckRvbS5jdXJyZW50Py5jbGllbnRXaWR0aCwgb3V0dGVyQ29udGFpbmVyRG9tLmN1cnJlbnQ/LmNsaWVudEhlaWdodCwgZG9tQ2hhbmdlXSlcclxuXHJcbiAgY29uc3QgdXBkYXRlVGV4dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG91dHRlcldpZHRoID0gb3V0dGVyQ29udGFpbmVyRG9tLmN1cnJlbnQ/LmNsaWVudFdpZHRoXHJcbiAgICBjb25zdCBvdXR0ZXJIZWlnaHQgPSBvdXR0ZXJDb250YWluZXJEb20uY3VycmVudD8uY2xpZW50SGVpZ2h0XHJcbiAgICBjb25zdCB0ZXh0V2lkdGggPSB0ZXh0RG9tLmN1cnJlbnQ/LmNsaWVudFdpZHRoXHJcbiAgICBjb25zdCB0ZXh0SGVpZ2h0ID0gdGV4dERvbS5jdXJyZW50Py5jbGllbnRIZWlnaHRcclxuICAgIGlmICghb3V0dGVyV2lkdGggfHwgIXRleHRXaWR0aCB8fCAhb3V0dGVySGVpZ2h0IHx8ICF0ZXh0SGVpZ2h0KSByZXR1cm5cclxuICAgIGlmICh0ZXh0V2lkdGggIT09IG91dHRlcldpZHRoIHx8IHRleHRIZWlnaHQgIT09IG91dHRlckhlaWdodCkge1xyXG4gICAgICBjb25zdCB3aWR0aFJhdGUgPSBvdXR0ZXJXaWR0aCAvIHRleHRXaWR0aFxyXG4gICAgICBjb25zdCBoZWlnaHRSYXRlID0gb3V0dGVySGVpZ2h0IC8gdGV4dEhlaWdodFxyXG4gICAgICB0ZXh0RG9tLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7TWF0aC5taW4od2lkdGhSYXRlLCBoZWlnaHRSYXRlKX0pYFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dERvbS5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtvdXR0ZXJDb250YWluZXJEb219IGNzcz17Z2V0U3R5bGVzKCl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0JyByZWY9e3RleHREb219Pnt0ZXh0fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG59KVxyXG4iLCJpbXBvcnQgeyBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZXMgKCk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gIHJldHVybiBjc3NgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgICB9XHJcbiAgYFxyXG59XHJcbiIsImltcG9ydCB7IHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgY3NzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgV2lkZ2V0UmVjdCB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMsIGlzQ2xhc3NpYzogYm9vbGVhbiwgd2lkZ2V0UmVjdDogV2lkZ2V0UmVjdCwgd2lkZ2V0U2l6ZUF1dG86IGJvb2xlYW4pOiBTZXJpYWxpemVkU3R5bGVzIHtcclxuICByZXR1cm4gY3NzYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgd2lkdGg6ICR7d2lkZ2V0UmVjdC53aWR0aH07XHJcbiAgICBoZWlnaHQ6ICR7d2lkZ2V0UmVjdC5oZWlnaHR9O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5jb29yZGluYXRlcy13aWRnZXQtY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS53aGl0ZX07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFs1MDBdfTtcclxuICAgICAgLmNvb3JkaW5hdGVzLWxvY2F0ZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNvb3JkaW5hdGVzLWNhcmQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtaW4td2lkdGg6ICR7aXNDbGFzc2ljID8gJzE2MHB4JyA6ICcyNDBweCd9O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6ICR7aXNDbGFzc2ljID8gJzI2cHgnIDogJzEzOHB4J307XHJcbiAgICAgICAgLndpZGdldC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAuaW5mby1jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC50ZXh0Zml0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29vcmRpbmF0ZXMtY29tcHV0aW5nIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29vcmRpbmF0ZXMtY2FyZC10ZXh0LWdlbyxcclxuICAgICAgICAgICAgLmNvb3JkaW5hdGVzLWNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxOHB4KTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29vcmRpbmF0ZXMtY2FyZC10ZXh0LWVtcHR5IHtcclxuICAgICAgICAgICAgICAkeyF3aWRnZXRTaXplQXV0byAmJiAnaGVpZ2h0OiBjYWxjKDEwMCUgLSAxOHB4KSd9O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb29yZGluYXRlcy1jYXJkLXRleHQtZ2VvIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvb3JkaW5hdGVzLWNhcmQtdGV4dC1nZW8tZml4ZWQsXHJcbiAgICAgICAgICAgIC5jb29yZGluYXRlcy1jYXJkLXRleHQtZml4ZWQsXHJcbiAgICAgICAgICAgIC5jb29yZGluYXRlcy1jYXJkLXRleHQtZW1wdHkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvb3JkaW5hdGVzLWNhcmQtdGV4dC1maXhlZCxcclxuICAgICAgICAgICAgLmNvb3JkaW5hdGVzLWNhcmQtdGV4dC1lbXB0eSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb29yZGluYXRlcy1jYXJkLXRleHQtZ2VvLWZpeGVkIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8tdW5pdCB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRydW5jYXRlLXR3byB7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgICAgbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAud2lkZ2V0LWNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvb3JkaW5hdGVzLWluZm8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFszMDBdfTtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFsxMTAwXX07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb3B5LWJ0biB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHtcclxuICAgICAgICAgIGlzQ2xhc3NpYyA/IGAxcHggc29saWQgJHt0aGVtZS5yZWYucGFsZXR0ZS5uZXV0cmFsWzMwMF19YCA6ICd1bnNldCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgICB9XHJcbiAgICAgIC53aWRnZXQtY2FyZC1mb290ZXIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdDb29yZGluYXRlcycsXHJcbiAgbWFwQ2xpY2tUaXBzOiAnQ2xpY2sgdGhlIG1hcCB0byBnZXQgdGhlIGNvb3JkaW5hdGVzJyxcclxuICBtb3VzZU1vdmVUaXBzOiAnTW92ZSB0aGUgY3Vyc29yIHRvIGdldCB0aGUgY29vcmRpbmF0ZXMnLFxyXG4gIGVuYWJsZUNsaWNrVGlwczogJ0VuYWJsZSBjbGlja2luZyB0aGUgbWFwIHRvIGdldCB0aGUgY29vcmRpbmF0ZXMnLFxyXG4gIGRpc2FibGVDbGlja1RpcHM6ICdEaXNhYmxlIGNsaWNraW5nIHRoZSBtYXAgdG8gZ2V0IHRoZSBjb29yZGluYXRlcycsXHJcbiAgY29tcHV0aW5nOiAnQ29tcHV0aW5nLi4uJyxcclxuICBjaGFuZ2VTeXN0ZW06ICdTZWxlY3QgdGhlIG91dHB1dCBjb29yZGluYXRlIHN5c3RlbScsXHJcbiAgZXllQWx0OiAnIEV5ZSBBbHRpdHVkZSAoe2FsdH0pJyxcclxuICBlbGV2OiAnRWxldmF0aW9uICh7ZWxlfSknXHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIGkxOG4gfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG5jb25zdCBwcm9qZWN0VW5pdHMgPSBbJ0lOQ0hFUycsICdGT09UJywgJ0ZPT1RfVVMnLCAnWUFSRFMnLCAnTUlMRVMnLCAnTkFVVElDQUxfTUlMRVMnLCAnTUlMTElNRVRFUlMnLFxyXG4gICdDRU5USU1FVEVSUycsICdNRVRFUicsICdLSUxPTUVURVJTJywgJ0RFQ0lNRVRFUlMnLCAnTElOS19DTEFSS0UnLCAnRk9PVF9HT0xEX0NPQVNUJywgJ0ZPT1RfQ0xBUktFJyxcclxuICAnQ0hBSU5fU0VBUlNfMTk5Ml9UUlVOQ0FURUQnLCAnWUFSRF9JTkRJQU4nLCAnQ0hBSU5fQkVOT0lUXzE4OTVfQicsICdZQVJEX1NFQVJTJywgJ0NIQUlOX1NFQVJTJyxcclxuICAnRk9PVF9TRUFSUycsICdZQVJEX0lORElBTl8xOTM3JywgJzUwX0tJTE9NRVRFUlMnLCAnMTUwX0tJTE9NRVRFUlMnXVxyXG5jb25zdCBnZW9ncmFwaGljVW5pdHMgPSBbJ0RFQ0lNQUxfREVHUkVFUycsICdERUdSRUVfTUlOVVRFX1NFQ09ORFMnLCAnREVHUkVFJywgJ0RFR1JFRVNfREVDSU1BTF9NSU5VVEVTJywgJ0dSQUQnLCAnTUdSUycsICdVU05HJ11cclxuY29uc3QgdW5pdHNWYWx1ZSA9IHtcclxuICAvLyBNZXRlclxyXG4gIElOQ0hFUzogMC4wMjU0LFxyXG4gIEZPT1Q6IDAuMzA0OCxcclxuICBGT09UX1VTOiAwLjMwNDgwMDYwOTYwMTIxOTIsXHJcbiAgWUFSRFM6IDAuOTE0NCxcclxuICBNSUxFUzogMTYwOS4zNDQsXHJcbiAgTkFVVElDQUxfTUlMRVM6IDE4NTIsXHJcbiAgTUlMTElNRVRFUlM6IDAuMDAxLFxyXG4gIENFTlRJTUVURVJTOiAwLjAxLFxyXG4gIE1FVEVSOiAxLFxyXG4gIEtJTE9NRVRFUlM6IDEwMDAsXHJcbiAgREVDSU1FVEVSUzogMC4xLFxyXG4gIExJTktfQ0xBUktFOiAwLjIwMTE2NjE5NDksXHJcbiAgRk9PVF9HT0xEX0NPQVNUOiAwLjMwNDc5OTcxMDE4MTUwODgsXHJcbiAgRk9PVF9DTEFSS0U6IDAuMzA0Nzk3MjY1LFxyXG4gIENIQUlOX1NFQVJTXzE5MjJfVFJVTkNBVEVEOiAyMC4xMTY3NTYsXHJcbiAgWUFSRF9JTkRJQU46IDAuOTE0Mzk4NTMwNzQ0NDQwOCxcclxuICBDSEFJTl9CRU5PSVRfMTg5NV9COiAyMC4xMTY3ODI0OTQzNzU4NyxcclxuICBZQVJEX1NFQVJTOiAwLjkxNDM5ODQxNDYxNjAyODcsXHJcbiAgQ0hBSU5fU0VBUlM6IDIwLjExNjc2NTEyMTU1MjYzLFxyXG4gIEZPT1RfU0VBUlM6IDAuMzA0Nzk5NDcxNTM4Njc2MixcclxuICBZQVJEX0lORElBTl8xOTM3OiAwLjkxNDM5NTIzLFxyXG4gICc1MF9LSUxPTUVURVJTJzogNTAwMDAuMCxcclxuICAnMTUwX0tJTE9NRVRFUlMnOiAxNTAwMDAuMCxcclxuICAvLyByYWRpYW5cclxuICBERUdSRUU6IDAuMDE3NDUzMjkyNTE5OTQzMyxcclxuICBERUNJTUFMX0RFR1JFRVM6IDAuMDE3NDUzMjkyNTE5OTQzMyxcclxuICBNR1JTOiAwLjAxNzQ1MzI5MjUxOTk0MzMsIC8vIE1HUlMgLyBERUdSRUUgPSAxXHJcbiAgVVNORzogMC4wMTc0NTMyOTI1MTk5NDMzLFxyXG4gIERFR1JFRV9NSU5VVEVfU0VDT05EUzogMC4wMTc0NTMyOTI1MTk5NDMzLFxyXG4gIEdSQUQ6IDAuMDE1NzA3OTYzMjY3OTQ4OTdcclxufVxyXG5jb25zdCBzaW1HZW9nY3NKc29uID0gcmVxdWlyZSgnLi4vanNvbi9zaW1wbGVfZ2VvZ2NzLmpzb24nKVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcmV0dGlmeSBkZWNpbWFsIGRlZ3JlZXMgaW50byBETVMgKGRlZ3JlZXMtbWludXRlcy1zZWNvbmRzKS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGRlY0RlZyBUaGUgZGVjaW1hbCBkZWdyZWUgbnVtYmVyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWNEaXIgTEFUIG9yIExPTlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEh1bWFuLXJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGRlY0RlZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWdUb0RNUyA9IChkZWNEZWcsIGRlY0RpcjogJ0xBVCcgfCAnTE9OJywgZGVjaW1hbDogbnVtYmVyLCBzaG93U2VwYXJhdG9yczogYm9vbGVhbikgPT4ge1xyXG4gIGxldCBkID0gTWF0aC5hYnMoZGVjRGVnKVxyXG4gIGxldCBkZWcgPSBNYXRoLmZsb29yKGQpXHJcbiAgZCA9IGQgLSBkZWdcclxuICBsZXQgbWluID0gTWF0aC5mbG9vcihkICogNjApXHJcbiAgbGV0IHNlYyA9IChkIC0gbWluIC8gNjApICogNjAgKiA2MFxyXG4gIGlmIChzZWMgPT09IDYwKSB7IC8vIGNhbiBoYXBwZW4gZHVlIHRvIHJvdW5kaW5nIGFib3ZlXHJcbiAgICBtaW4rK1xyXG4gICAgc2VjID0gMFxyXG4gIH1cclxuICBpZiAobWluID09PSA2MCkgeyAvLyBjYW4gaGFwcGVuIGR1ZSB0byByb3VuZGluZyBhYm92ZVxyXG4gICAgZGVnKytcclxuICAgIG1pbiA9IDBcclxuICB9XHJcbiAgY29uc3QgZml4ZWRTZWMgPSBsb2NhbGl6ZU51bWJlckJ5U2V0dGluZ0luZm8oc2VjLCB7XHJcbiAgICBwbGFjZXM6IGRlY2ltYWwsXHJcbiAgICBkaWdpdFNlcGFyYXRvcjogc2hvd1NlcGFyYXRvcnNcclxuICB9KVxyXG4gIGNvbnN0IG1pblN0ciA9IG1pbiA8IDEwID8gYDAke21pbn1gIDogbWluXHJcbiAgY29uc3Qgc2VjU3RyID0gc2VjIDwgMTAgPyBgMCR7Zml4ZWRTZWN9YCA6IGZpeGVkU2VjXHJcbiAgY29uc3QgZGlyID0gKGRlY0RpciA9PT0gJ0xBVCcpID8gKGRlY0RlZyA8IDAgPyAnUycgOiAnTicpIDogKGRlY0RlZyA8IDAgPyAnVycgOiAnRScpXHJcbiAgLy8gcmV0dXJuIGAke2RlZ30mZGVnOyR7bWluU3RyfSZwcmltZTske3NlY1N0cn0mUHJpbWU7JHtkaXJ9YFxyXG4gIHJldHVybiBgJHtkZWd9wrAke21pblN0cn3igLIke3NlY1N0cn3igLMke2Rpcn1gXHJcbn1cclxuXHJcbi8vZm9yIGhhY2sgRGVncmVlcyBEZWNpbWFsIE1pbnV0ZXNcclxuZXhwb3J0IGNvbnN0IGRlZ1RvRERNID0gKGRlY0RlZywgZGVjaW1hbDogbnVtYmVyLCBzaG93U2VwYXJhdG9yczogYm9vbGVhbiwgdHlwZTogJ2xvbmdpdHVkZScgfCAnbGF0aXR1ZGUnKSA9PiB7XHJcbiAgY29uc3QgdGFpbFRhZyA9IHR5cGUgPT09ICdsb25naXR1ZGUnXHJcbiAgICA/IChkZWNEZWcgPCAwID8gJ1cnIDogJ0UnKVxyXG4gICAgOiAoZGVjRGVnIDwgMCA/ICdTJyA6ICdOJylcclxuICBsZXQgZCA9IE1hdGguYWJzKGRlY0RlZylcclxuICBsZXQgZGVnID0gTWF0aC5mbG9vcihkKVxyXG4gIGQgPSBkIC0gZGVnXHJcbiAgbGV0IG1pbiA9IE1hdGguZmxvb3IoZCAqIDYwKVxyXG4gIGxldCBzZWMgPSBNYXRoLmZsb29yKChkIC0gbWluIC8gNjApICogNjAgKiA2MClcclxuICBpZiAoc2VjID09PSA2MCkgeyAvLyBjYW4gaGFwcGVuIGR1ZSB0byByb3VuZGluZyBhYm92ZVxyXG4gICAgbWluKytcclxuICAgIHNlYyA9IDBcclxuICB9XHJcbiAgaWYgKG1pbiA9PT0gNjApIHsgLy8gY2FuIGhhcHBlbiBkdWUgdG8gcm91bmRpbmcgYWJvdmVcclxuICAgIGRlZysrXHJcbiAgICBtaW4gPSAwXHJcbiAgfVxyXG5cclxuICBjb25zdCBkbSA9IGxvY2FsaXplTnVtYmVyQnlTZXR0aW5nSW5mbygobWluICsgKHNlYyAvIDYwKSksIHtcclxuICAgIHBsYWNlczogZGVjaW1hbCxcclxuICAgIGRpZ2l0U2VwYXJhdG9yOiBzaG93U2VwYXJhdG9yc1xyXG4gIH0pXHJcbiAgLy8gcmV0dXJuIGAke2RlZ30mZGVnOyR7ZG19JnByaW1lO2BcclxuICByZXR1cm4gYCR7ZGVnfcKwJHtkbX3igLIke3RhaWxUYWd9YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNHZW9ncmFwaGljVW5pdCA9ICh1bml0KSA9PiB7XHJcbiAgcmV0dXJuIGdlb2dyYXBoaWNVbml0cy5pbmNsdWRlcyh1bml0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNQcm9qZWN0VW5pdCA9ICh1bml0KSA9PiB7XHJcbiAgcmV0dXJuIHByb2plY3RVbml0cy5pbmNsdWRlcyh1bml0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9jYWxpemVOdW1iZXJCeVNldHRpbmdJbmZvID0gKG51bTogbnVtYmVyLCBzZXR0aW5nSW5mbykgPT4ge1xyXG4gIGNvbnN0IHsgcGxhY2VzLCBkaWdpdFNlcGFyYXRvciB9ID0gc2V0dGluZ0luZm9cclxuICBpZiAoZGlnaXRTZXBhcmF0b3IpIHtcclxuICAgIHJldHVybiBpMThuLmdldEludGwoKS5mb3JtYXROdW1iZXIobnVtLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogcGxhY2VzLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHBsYWNlcywgdXNlR3JvdXBpbmc6IHRydWUgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGkxOG4uZ2V0SW50bCgpLmZvcm1hdE51bWJlcihudW0sIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwbGFjZXMsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcGxhY2VzLCB1c2VHcm91cGluZzogZmFsc2UgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVbml0cyA9ICgpID0+IHtcclxuICBsZXQgX3VuaXRzID0gJ2VuZ2xpc2gnXHJcbiAgY29uc3QgYXBwU3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKClcclxuICBjb25zdCB1c2VySW5mbyA9IGFwcFN0YXRlPy51c2VyXHJcbiAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICBjb25zdCB7IGN1bHR1cmUsIHVuaXRzIH0gPSB1c2VySW5mb1xyXG4gICAgaWYgKHVuaXRzKSB7XHJcbiAgICAgIF91bml0cyA9IHVuaXRzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY3VsdHVyZT8uc3RhcnRzV2l0aCgnZW4nKSkge1xyXG4gICAgICAgIF91bml0cyA9ICdlbmdsaXNoJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF91bml0cyA9ICdtZXRyaWMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIF91bml0c1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjcyBkZWZhdWx0IHVuaXQgYnkgY3JzXHJcbiAqIEBwYXJhbSB7YW55fSBjcnNcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRDU1VuaXRCeUNycyA9IChjcnM6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3Qgd2t0ID0gY3JzPy53a3RcclxuICBpZiAoIXdrdCkgcmV0dXJuICcnXHJcbiAgY29uc3QgdW5pdEluZGV4ID0gd2t0Py5sYXN0SW5kZXhPZignLFVOSVQnKVxyXG4gIGlmICh1bml0SW5kZXggPiAwKSB7XHJcbiAgICBjb25zdCB0b0RlYWxTdHIgPSB3a3Quc3Vic3RyKHVuaXRJbmRleClcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0b0RlYWxTdHIuaW5kZXhPZignWycpXHJcbiAgICBjb25zdCBlbmRJbmRleCA9IHRvRGVhbFN0ci5pbmRleE9mKCddJylcclxuICAgIGNvbnN0IHNwaGVyb2lkQXJyU3RyID0gdG9EZWFsU3RyLnN1YnN0cmluZyhzdGFydEluZGV4ICsgMSwgZW5kSW5kZXgpXHJcbiAgICBjb25zdCBzcGhlcm9pZEFyciA9IHNwaGVyb2lkQXJyU3RyLnNwbGl0KCcsJylcclxuICAgIHJldHVybiBzcGhlcm9pZEFycj8uWzBdPy5yZXBsYWNlKC9cXFwiL2csICcnKT8ucmVwbGFjZSgvXFwnL2csICcnKVxyXG4gIH1cclxuICByZXR1cm4gJydcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBTUEhFUk9JRC9HRU9HQ1MvREFUVU0gYnkgY3JzXHJcbiAqIEBwYXJhbSB7YW55fSBjcnNcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRXa3RLZXlTdHIgPSAoY3JzOiBhbnksIGtleTogc3RyaW5nID0gJ1NQSEVST0lEJyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3Qgd2t0ID0gY3JzPy53a3RcclxuICBjb25zdCBrZXlJbmRleCA9IHdrdD8uaW5kZXhPZihrZXkpXHJcbiAgaWYgKGtleUluZGV4ID49IDApIHtcclxuICAgIGNvbnN0IHRvRGVhbFN0ciA9IHdrdC5zdWJzdHIoa2V5SW5kZXgpXHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gdG9EZWFsU3RyLmluZGV4T2YoJ1snKVxyXG4gICAgY29uc3QgZW5kSW5kZXggPSB0b0RlYWxTdHIuaW5kZXhPZignXScpXHJcbiAgICBjb25zdCBrZXlBcnJTdHIgPSB0b0RlYWxTdHIuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAxLCBlbmRJbmRleClcclxuICAgIGNvbnN0IGtleUFyciA9IGtleUFyclN0ci5zcGxpdCgnLCcpXHJcbiAgICByZXR1cm4ga2V5QXJyPy5bMF0/LnJlcGxhY2UoL1xcXCIvZywgJycpPy5yZXBsYWNlKC9cXCcvZywgJycpXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgb3V0U1IgY3JzIGJ5IHNwaGVyb2lkU3RyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcGhlcm9pZFN0clxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldENyc0J5U3BoZXJvaWRTdHIgPSAoc3BoZXJvaWRTdHI6IHN0cmluZyk6IGFueSA9PiB7XHJcbiAgcmV0dXJuIHNpbUdlb2djc0pzb24uZmluZChjcnMgPT4ge1xyXG4gICAgcmV0dXJuIHNwaGVyb2lkU3RyID09PSBjcnM/Lm5hbWVcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGNzIGRlZmF1bHQgdW5pdCBieSBjcnNcclxuICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRVbml0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvdXRwdXRVbml0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VW5pdFJhdGUgPSAoZGVmYXVsdFVuaXQ6IHN0cmluZywgb3V0cHV0VW5pdDogc3RyaW5nLCBtYXBJc01lcmNhdG9yPzogYm9vbGVhbikgPT4ge1xyXG4gIGNvbnN0IG5vdEluVW5pdHNWYWx1ZSA9ICF1bml0c1ZhbHVlW2RlZmF1bHRVbml0Py50b1VwcGVyQ2FzZSgpXSB8fCAhdW5pdHNWYWx1ZVtvdXRwdXRVbml0LnRvVXBwZXJDYXNlKCldXHJcbiAgY29uc3QgZGVmYXVsdFJhdGUgPSBtYXBJc01lcmNhdG9yIHx8ICghZGVmYXVsdFVuaXQgfHwgIW91dHB1dFVuaXQpIHx8IG91dHB1dFVuaXQgPT09ICdERUdSRUVTX0RFQ0lNQUxfTUlOVVRFUycgfHwgbm90SW5Vbml0c1ZhbHVlXHJcbiAgaWYgKGRlZmF1bHRSYXRlKSB7XHJcbiAgICByZXR1cm4gMVxyXG4gIH1cclxuICByZXR1cm4gdW5pdHNWYWx1ZVtkZWZhdWx0VW5pdC50b1VwcGVyQ2FzZSgpXSAvIHVuaXRzVmFsdWVbb3V0cHV0VW5pdC50b1VwcGVyQ2FzZSgpXVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVElpSUdobGFXZG9kRDBpTWpJaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TWlBeU1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4bklHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdNRjh6TURkZk1qSXdPQ2tpUGcwS1BIQmhkR2dnWkQwaVRURXhMalVnTkM0MVZqRTJMakUxT0RSTU5pQXlNUzR6TVRRMlREQXVOU0F4Tmk0eE5UZzBWalF1TlVNd0xqVWdNaTR5T1RBNE5pQXlMakk1TURnMklEQXVOU0EwTGpVZ01DNDFTRGN1TlVNNUxqY3dPVEUwSURBdU5TQXhNUzQxSURJdU1qa3dPRFlnTVRFdU5TQTBMalZhSWlCbWFXeHNQU0lqTURBM1JqazBJaUJ6ZEhKdmEyVTlJaU13TURZd056RWlMejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OaUF4TUVNM0xqWTFOamcxSURFd0lEa2dPQzQyTlRZNE5TQTVJRGRET1NBMUxqTTBNekUxSURjdU5qVTJPRFVnTkNBMklEUkROQzR6TkRNeE5TQTBJRE1nTlM0ek5ETXhOU0F6SURkRE15QTRMalkxTmpnMUlEUXVNelF6TVRVZ01UQWdOaUF4TUZvaUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOEwyYytEUW84WkdWbWN6NE5DanhqYkdsd1VHRjBhQ0JwWkQwaVkyeHBjREJmTXpBM1h6SXlNRGdpUGcwS1BISmxZM1FnZDJsa2RHZzlJakV5SWlCb1pXbG5hSFE5SWpJeUlpQm1hV3hzUFNKM2FHbDBaU0l2UGcwS1BDOWpiR2x3VUdGMGFENE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2NvcmVfcmVhY3RpdmVVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvaW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfU3BhdGlhbFJlZmVyZW5jZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2Nvb3JkaW5hdGVGb3JtYXR0ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9wcm9qZWN0aW9uX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfc3VwcG9ydF93ZWJNZXJjYXRvclV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X2dlb21ldHJ5U2VydmljZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3Jlc3Rfc3VwcG9ydF9Qcm9qZWN0UGFyYW1ldGVyc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3N5bWJvbHNfUGljdHVyZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9sYXlvdXRzX2xheW91dF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9iYXNpY19jb3B5X2J1dHRvbl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIHV0aWxzLCBtb2R1bGVMb2FkZXIsIGxvZGFzaCwgUmVhY3RSZXNpemVEZXRlY3RvciwgaG9va3MsIHR5cGUgSU1TdGF0ZSwgUmVhY3RSZWR1eCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBDb29yZGluYXRlQ29uZmlnLCBEaXNwbGF5T3JkZXJUeXBlLCBFbGV2YXRpb25Vbml0VHlwZSwgdHlwZSBJTUNvbmZpZywgdHlwZSBXaWRnZXRSZWN0LCBXaWRnZXRTdHlsZVR5cGUgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgdHlwZSBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHtcclxuICBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkRm9vdGVyLCBEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIERyb3Bkb3duSXRlbSxcclxuICBEcm9wZG93bk1lbnUsIFdpZGdldFBsYWNlaG9sZGVyLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdWlEZWZhdWx0TWVzc2FnZXNcclxufSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnXHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInXHJcbmltcG9ydCBTcGF0aWFsUmVmZXJlbmNlIGZyb20gJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcclxuaW1wb3J0IFBpY3R1cmVNYXJrZXJTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1BpY3R1cmVNYXJrZXJTeW1ib2wnXHJcbmltcG9ydCBjb29yZGluYXRlRm9ybWF0dGVyIGZyb20gJ2VzcmkvZ2VvbWV0cnkvY29vcmRpbmF0ZUZvcm1hdHRlcidcclxuaW1wb3J0IHdlYk1lcmNhdG9yVXRpbHMgZnJvbSAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L3dlYk1lcmNhdG9yVXRpbHMnXHJcbmltcG9ydCBQb2ludCBmcm9tICdlc3JpL2dlb21ldHJ5L1BvaW50J1xyXG5pbXBvcnQgcHJvamVjdGlvbiBmcm9tICdlc3JpL2dlb21ldHJ5L3Byb2plY3Rpb24nXHJcbmltcG9ydCBnZW9tZXRyeVNlcnZpY2UgZnJvbSAnZXNyaS9yZXN0L2dlb21ldHJ5U2VydmljZSdcclxuaW1wb3J0IFByb2plY3RQYXJhbWV0ZXJzIGZyb20gJ2VzcmkvcmVzdC9zdXBwb3J0L1Byb2plY3RQYXJhbWV0ZXJzJ1xyXG5pbXBvcnQgeyBkZWdUb0RETSwgZGVnVG9ETVMsIGdldENyc0J5U3BoZXJvaWRTdHIsIGdldENTVW5pdEJ5Q3JzLCBnZXRXa3RLZXlTdHIsIGdldFVuaXRSYXRlLCBnZXRVbml0cywgaXNHZW9ncmFwaGljVW5pdCwgaXNQcm9qZWN0VW5pdCwgbG9jYWxpemVOdW1iZXJCeVNldHRpbmdJbmZvIH0gZnJvbSAnLi4vdXRpbHMnXHJcbmltcG9ydCB7IGdldFN0eWxlIH0gZnJvbSAnLi9zdHlsZSdcclxuaW1wb3J0IHsgQ29weUJ1dHRvbiB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvY29weS1idXR0b24nXHJcbmltcG9ydCB7IFRleHRBdXRvRml0IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQtZml0J1xyXG5pbXBvcnQgY29vcmRpbmF0ZXNJY29uIGZyb20gJy4uLy4uL2ljb24uc3ZnJ1xyXG5pbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL2Rvd24nXHJcbmltcG9ydCB7IExvY2F0b3JPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2xvY2F0b3InXHJcbmltcG9ydCB7IExheW91dEl0ZW1TaXplTW9kZXMgfSBmcm9tICdqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWUnXHJcbmltcG9ydCByZWFjdGl2ZVV0aWxzIGZyb20gJ2VzcmkvY29yZS9yZWFjdGl2ZVV0aWxzJ1xyXG5cclxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSA9IFJlYWN0XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgeyBjb25maWcsIHVzZU1hcFdpZGdldElkcywgdGhlbWUsIGlkLCBsYXlvdXRJZCwgbGF5b3V0SXRlbUlkIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgY29vcmRpbmF0ZVN5c3RlbSwgY29vcmRpbmF0ZURlY2ltYWwsIGFsdGl0dWRlRGVjaW1hbCwgc2hvd1NlcGFyYXRvcnMsIHNob3dFbGV2YXRpb24sIGRpc3BsYXlPcmRlciwgd2lkZ2V0U3R5bGUsIG1hcEluZm8sIG1hcEluZm8yIH0gPSBjb25maWdcclxuICBjb25zdCB3aWRnZXRTaXplQXV0byA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCBhcHBDb25maWcgPSBzdGF0ZSAmJiBzdGF0ZS5hcHBDb25maWdcclxuICAgIGNvbnN0IGxheW91dCA9IGFwcENvbmZpZy5sYXlvdXRzPy5bbGF5b3V0SWRdXHJcbiAgICBjb25zdCBsYXlvdXRTZXR0aW5nID0gbGF5b3V0Py5jb250ZW50Py5bbGF5b3V0SXRlbUlkXT8uc2V0dGluZ1xyXG4gICAgY29uc3QgaXNIZWlnaHRBdXRvID1cclxuICAgICAgbGF5b3V0U2V0dGluZz8uYXV0b1Byb3BzPy5oZWlnaHQgPT09IExheW91dEl0ZW1TaXplTW9kZXMuQXV0byB8fFxyXG4gICAgICBsYXlvdXRTZXR0aW5nPy5hdXRvUHJvcHM/LmhlaWdodCA9PT0gdHJ1ZVxyXG4gICAgY29uc3QgaXNXaWR0aEF1dG8gPVxyXG4gICAgICBsYXlvdXRTZXR0aW5nPy5hdXRvUHJvcHM/LndpZHRoID09PSBMYXlvdXRJdGVtU2l6ZU1vZGVzLkF1dG8gfHxcclxuICAgICAgbGF5b3V0U2V0dGluZz8uYXV0b1Byb3BzPy53aWR0aCA9PT0gdHJ1ZVxyXG4gICAgcmV0dXJuIGlzSGVpZ2h0QXV0byB8fCBpc1dpZHRoQXV0b1xyXG4gIH0pXHJcbiAgLy8gc3RhdGVcclxuICBjb25zdCBbd2lkZ2V0UmVjdCwgc2V0V2lkZ2V0UmVjdF0gPSB1c2VTdGF0ZTxXaWRnZXRSZWN0Pih7IHdpZHRoOiAyNTAsIGhlaWdodDogMTAwIH0pXHJcbiAgY29uc3QgW2N1cnJlbnRKaW11TWFwVmlldywgc2V0Q3VycmVudEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2VuYWJsZVJlYWx0aW1lLCBzZXRFbmFibGVSZWFsdGltZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFN5c3RlbUlkLCBzZXRTZWxlY3RlZFN5c3RlbUlkXSA9IHVzZVN0YXRlKGNvb3JkaW5hdGVTeXN0ZW0/LlswXT8uaWQpXHJcbiAgY29uc3QgW2xvY2F0ZUFjdGl2ZSwgc2V0TG9jYXRlQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93VGlwcywgc2V0U2hvd1RpcHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Nob3dNb3VzZVRpcHMsIHNldFNob3dNb3VzZVRpcHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2dlb0luZm8sIHNldEdlb0luZm9dID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IFtlbGV2SW5mbywgc2V0RWxldkluZm9dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2VsZXZOdW0sIHNldEVsZXZOdW1dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZWxldlVuaXQsIHNldEVsZXZVbml0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBbZXllSW5mbywgc2V0RXllSW5mb10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZXllTnVtLCBzZXRFeWVOdW1dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZXllVW5pdCwgc2V0RXllVW5pdF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgW21vZHVsZXNMb2FkZWQsIHNldE1vZHVsZXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8gdHJhbnNsYXRlXHJcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzLCBqaW11aURlZmF1bHRNZXNzYWdlcylcclxuICBjb25zdCBtYXBDbGlja1RpcHMgPSB0cmFuc2xhdGUoJ21hcENsaWNrVGlwcycpXHJcbiAgY29uc3QgbW91c2VNb3ZlVGlwcyA9IHRyYW5zbGF0ZSgnbW91c2VNb3ZlVGlwcycpXHJcbiAgY29uc3QgZW5hYmxlQ2xpY2tUaXBzID0gdHJhbnNsYXRlKCdlbmFibGVDbGlja1RpcHMnKVxyXG4gIGNvbnN0IGRpc2FibGVDbGlja1RpcHMgPSB0cmFuc2xhdGUoJ2Rpc2FibGVDbGlja1RpcHMnKVxyXG4gIGNvbnN0IGNvbXB1dGluZyA9IHRyYW5zbGF0ZSgnY29tcHV0aW5nJylcclxuICBjb25zdCBwbGFjZUhvbGRlck5hbWUgPSB0cmFuc2xhdGUoJ193aWRnZXRMYWJlbCcpXHJcbiAgLy91bml0c1xyXG4gIGNvbnN0IHVuaXRJbmNoZXMgPSB0cmFuc2xhdGUoJ3VuaXRzSW5jaGVzJylcclxuICBjb25zdCB1bml0Rm9vdCA9IHRyYW5zbGF0ZSgndW5pdHNMYWJlbEZlZXQnKVxyXG4gIGNvbnN0IHVuaXRGb290VXMgPSB0cmFuc2xhdGUoJ3VuaXRzRm9vdF9VUycpXHJcbiAgY29uc3QgdW5pdFlhcmRzID0gdHJhbnNsYXRlKCd1bml0c0xhYmVsWWFyZHMnKVxyXG4gIGNvbnN0IHVuaXRNaWxlcyA9IHRyYW5zbGF0ZSgndW5pdHNMYWJlbE1pbGVzJylcclxuICBjb25zdCB1bml0TmF1dGljYWxNaWxlcyA9IHRyYW5zbGF0ZSgndW5pdHNMYWJlbE5hdXRpY2FsTWlsZXMnKVxyXG4gIGNvbnN0IHVuaXRNaWxsaW1ldGVycyA9IHRyYW5zbGF0ZSgndW5pdHNNaWxsaW1ldGVycycpXHJcbiAgY29uc3QgdW5pdENlbnRpbWV0ZXJzID0gdHJhbnNsYXRlKCd1bml0c0NlbnRpbWV0ZXJzJylcclxuICBjb25zdCB1bml0TWV0ZXJzID0gdHJhbnNsYXRlKCd1bml0c0xhYmVsTWV0ZXJzJylcclxuICBjb25zdCB1bml0S2lsb21ldGVycyA9IHRyYW5zbGF0ZSgndW5pdHNMYWJlbEtpbG9tZXRlcnMnKVxyXG4gIGNvbnN0IHVuaXREZWNpbWV0ZXJzID0gdHJhbnNsYXRlKCd1bml0c0RlY2ltZXRlcnMnKVxyXG4gIGNvbnN0IHVuaXRERCA9IHRyYW5zbGF0ZSgndW5pdHNEZWNpbWFsRGVncmVlcycpXHJcbiAgY29uc3QgdW5pdERETSA9IHRyYW5zbGF0ZSgndW5pdHNEZWdyZWVzRGVjaW1hbE1pbnV0ZXMnKVxyXG4gIGNvbnN0IHVuaXRETVMgPSB0cmFuc2xhdGUoJ3VuaXRzRGVncmVlTWludXRlc1NlY29uZHMnKVxyXG4gIGNvbnN0IHVuaXRNZ3JzID0gdHJhbnNsYXRlKCd1bml0c01ncnMnKVxyXG4gIGNvbnN0IHVuaXRVc25nID0gdHJhbnNsYXRlKCd1bml0c1VzbmcnKVxyXG4gIGNvbnN0IGNoYW5nZVN5c3RlbSA9IHRyYW5zbGF0ZSgnY2hhbmdlU3lzdGVtJylcclxuICAvLyBnbG9iYWwgdmFyaWFibFxyXG4gIGNvbnN0IG1hcFdraWQgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBtYXBQb3J0YWxJZCA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGdyYXBoaWNzTGF5ZXIgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBtYXJrZXJHcmFwaGljID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgbW92ZUxpc3RlbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY2xpY2tMaXN0ZW5lciA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHdraWRVdGlsc1JlZiA9IHVzZVJlZihudWxsKVxyXG4gIC8vIHVuaXQgbmxzIG1hcFxyXG4gIGNvbnN0IHVuaXRObHNNYXAgPSB7XHJcbiAgICBJTkNIRVM6IHVuaXRJbmNoZXMsXHJcbiAgICBGT09UOiB1bml0Rm9vdCxcclxuICAgIEZPT1RfVVM6IHVuaXRGb290VXMsXHJcbiAgICBZQVJEUzogdW5pdFlhcmRzLFxyXG4gICAgTUlMRVM6IHVuaXRNaWxlcyxcclxuICAgIE5BVVRJQ0FMX01JTEVTOiB1bml0TmF1dGljYWxNaWxlcyxcclxuICAgIE1JTExJTUVURVJTOiB1bml0TWlsbGltZXRlcnMsXHJcbiAgICBDRU5USU1FVEVSUzogdW5pdENlbnRpbWV0ZXJzLFxyXG4gICAgTUVURVI6IHVuaXRNZXRlcnMsXHJcbiAgICBLSUxPTUVURVJTOiB1bml0S2lsb21ldGVycyxcclxuICAgIERFQ0lNRVRFUlM6IHVuaXREZWNpbWV0ZXJzLFxyXG4gICAgREVHUkVFOiB1bml0REQsXHJcbiAgICBERUNJTUFMX0RFR1JFRVM6IHVuaXRERCxcclxuICAgIERFR1JFRVNfREVDSU1BTF9NSU5VVEVTOiB1bml0RERNLFxyXG4gICAgREVHUkVFX01JTlVURV9TRUNPTkRTOiB1bml0RE1TLFxyXG4gICAgTUdSUzogdW5pdE1ncnMsXHJcbiAgICBVU05HOiB1bml0VXNuZ1xyXG4gIH1cclxuICBjb25zdCB1bml0QWJick1hcCA9IHtcclxuICAgIFt1bml0S2lsb21ldGVyc106IHRyYW5zbGF0ZSgna2lsb21ldGVyQWJicicpLFxyXG4gICAgW3VuaXRNZXRlcnNdOiB0cmFuc2xhdGUoJ21ldGVyQWJicicpLFxyXG4gICAgW3VuaXRGb290XTogdHJhbnNsYXRlKCdmZWV0QWJicicpXHJcbiAgfVxyXG4gIGNvbnN0IENPT1JESU5BVEVTX01JTl9XSURUSCA9IDE2MFxyXG4gIGNvbnN0IENPT1JESU5BVEVTX01JTl9IRUlHSFQgPSAyNlxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKG1hcmtlckdyYXBoaWMuY3VycmVudCkge1xyXG4gICAgICAgIGdyYXBoaWNzTGF5ZXIuY3VycmVudD8ucmVtb3ZlKG1hcmtlckdyYXBoaWMuY3VycmVudClcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ3JhcGhpY3NMYXllci5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uc3QgbWFwID0gY3VycmVudEppbXVNYXBWaWV3Py52aWV3Py5tYXBcclxuICAgICAgICBtYXA/LnJlbW92ZShncmFwaGljc0xheWVyLmN1cnJlbnQpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNsaWNrTGlzdGVuZXIuY3VycmVudCkgY2xpY2tMaXN0ZW5lci5jdXJyZW50Py5yZW1vdmUoKVxyXG4gICAgICBpZiAobW92ZUxpc3RlbmVyLmN1cnJlbnQpIG1vdmVMaXN0ZW5lci5jdXJyZW50Py5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgfSwgW10pXHJcblxyXG4gIGhvb2tzLnVzZVVwZGF0ZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3ID0gY3VycmVudEppbXVNYXBWaWV3Py52aWV3XHJcbiAgICBjb25zdCB2aWV3VHlwZUlzVGhyZWUgPSB2aWV3Py50eXBlID09PSAnM2QnXHJcbiAgICBpZiAoZW5hYmxlUmVhbHRpbWUpIHtcclxuICAgICAgY2xpY2tMaXN0ZW5lci5jdXJyZW50Py5yZW1vdmUoKVxyXG4gICAgICBtb3ZlTGlzdGVuZXIuY3VycmVudD8ucmVtb3ZlKClcclxuICAgICAgbW92ZUxpc3RlbmVyLmN1cnJlbnQgPSB2aWV3Py5vbigncG9pbnRlci1tb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSB2aWV3LnRvTWFwKHsgeDogZXZlbnQueCwgeTogZXZlbnQueSB9KVxyXG4gICAgICAgIGNvbnN0IHRocmVlRFBvaW50ID0geyB4OiBldmVudD8ubmF0aXZlPy5wYWdlWCwgeTogZXZlbnQ/Lm5hdGl2ZT8ucGFnZVkgfVxyXG4gICAgICAgIG9uTW91c2VNb3ZlKHBvaW50LCB2aWV3VHlwZUlzVGhyZWUgPyB0aHJlZURQb2ludCA6IHVuZGVmaW5lZClcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsaWNrTGlzdGVuZXIuY3VycmVudD8ucmVtb3ZlKClcclxuICAgICAgbW92ZUxpc3RlbmVyLmN1cnJlbnQ/LnJlbW92ZSgpXHJcbiAgICAgIGlmIChsb2NhdGVBY3RpdmUpIHtcclxuICAgICAgICBjbGlja0xpc3RlbmVyLmN1cnJlbnQgPSB2aWV3Py5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRocmVlRFBvaW50ID0geyB4OiBldmVudD8ubmF0aXZlPy5wYWdlWCwgeTogZXZlbnQ/Lm5hdGl2ZT8ucGFnZVkgfVxyXG4gICAgICAgICAgb25NYXBDbGljayhldmVudCwgdmlld1R5cGVJc1RocmVlID8gdGhyZWVEUG9pbnQgOiB1bmRlZmluZWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtjdXJyZW50SmltdU1hcFZpZXcsIGxvY2F0ZUFjdGl2ZSwgZW5hYmxlUmVhbHRpbWUsIHNlbGVjdGVkU3lzdGVtSWQsXHJcbiAgICBjb29yZGluYXRlU3lzdGVtLCBjb29yZGluYXRlRGVjaW1hbCwgYWx0aXR1ZGVEZWNpbWFsLCBzaG93U2VwYXJhdG9ycywgc2hvd0VsZXZhdGlvbiwgZGlzcGxheU9yZGVyXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdyYXBoaWNzTGF5ZXIuY3VycmVudCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KVxyXG4gICAgbWFya2VyR3JhcGhpYy5jdXJyZW50ID0gbnVsbFxyXG4gICAgY29uc3QgbWFwID0gY3VycmVudEppbXVNYXBWaWV3Py52aWV3Py5tYXBcclxuICAgIG1hcD8uYWRkKGdyYXBoaWNzTGF5ZXIuY3VycmVudClcclxuICAgIC8vIGNoYW5nZSBzdGF0dXMgd2hlbiB2aWV3IHN3aXRjaFxyXG4gICAgY2hlY2tTeXN0ZW1TZXRUaXBzKClcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIH0sIFtjdXJyZW50SmltdU1hcFZpZXcsIG1hcEluZm8sIG1hcEluZm8yXSlcclxuXHJcbiAgY29uc3QgcmVzZXJBbGxHZW9JbmZvID0gKCkgPT4ge1xyXG4gICAgc2V0R2VvSW5mbygnJylcclxuICAgIHNldEVsZXZJbmZvKCcnKVxyXG4gICAgc2V0RWxldk51bShudWxsKVxyXG4gICAgc2V0RWxldlVuaXQoJycpXHJcbiAgICBzZXRFeWVJbmZvKCcnKVxyXG4gICAgc2V0RXllTnVtKG51bGwpXHJcbiAgICBzZXRFeWVVbml0KCcnKVxyXG4gICAgc2V0TG9jYXRlQWN0aXZlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlTGF5ZXJBbmRNYXJrZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobWFya2VyR3JhcGhpYy5jdXJyZW50KSB7XHJcbiAgICAgIGdyYXBoaWNzTGF5ZXIuY3VycmVudD8ucmVtb3ZlKG1hcmtlckdyYXBoaWMuY3VycmVudClcclxuICAgIH1cclxuICAgIGlmIChncmFwaGljc0xheWVyLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgb3JnTWFwID0gY3VycmVudEppbXVNYXBWaWV3Py52aWV3Py5tYXBcclxuICAgICAgb3JnTWFwPy5yZW1vdmUoZ3JhcGhpY3NMYXllci5jdXJyZW50KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BY3RpdmVWaWV3Q2hhbmdlID0gKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgLy8gc3dpdGNoIG1hcDogY2xlYXIgYWxsIGdlbyBpbmZvXHJcbiAgICByZXNlckFsbEdlb0luZm8oKVxyXG4gICAgcmVtb3ZlTGF5ZXJBbmRNYXJrZXIoKVxyXG4gICAgc2V0Q3VycmVudEppbXVNYXBWaWV3KGppbXVNYXBWaWV3KVxyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3Py52aWV3XHJcbiAgICBpZiAoIXZpZXcpIHJldHVyblxyXG4gICAgbWFwV2tpZC5jdXJyZW50ID0gdmlldz8uc3BhdGlhbFJlZmVyZW5jZT8ud2tpZFxyXG4gICAgbWFwUG9ydGFsSWQuY3VycmVudCA9ICh2aWV3Py5tYXAgYXMgYW55KT8ucG9ydGFsSXRlbT8uaWRcclxuICAgIC8vIG1vbml0b3IgYmFzZW1hcCBjaGFuZ2VcclxuICAgIHJlYWN0aXZlVXRpbHMud2F0Y2goKCkgPT4gdmlldz8ubWFwPy5iYXNlbWFwLCAoKSA9PiB7XHJcbiAgICAgICh2aWV3IGFzIGFueSkuY3Vyc29yID0gJ2RlZmF1bHQnXHJcbiAgICAgIGlmICghdmlldz8uYmFzZW1hcFZpZXcpIHJldHVyblxyXG4gICAgICBjb25zdCBiYXNlTWFwVmlldyA9IHZpZXcuYmFzZW1hcFZpZXc/LnZpZXdcclxuICAgICAgbWFwV2tpZC5jdXJyZW50ID0gYmFzZU1hcFZpZXc/LnNwYXRpYWxSZWZlcmVuY2U/LndraWRcclxuICAgICAgbWFwUG9ydGFsSWQuY3VycmVudCA9IChiYXNlTWFwVmlldz8ubWFwIGFzIGFueSk/LnBvcnRhbEl0ZW0/LmlkXHJcbiAgICAgIGNoZWNrU3lzdGVtU2V0VGlwcygpXHJcbiAgICAgIHJlc2VyQWxsR2VvSW5mbygpXHJcbiAgICAgIHJlbW92ZUxheWVyQW5kTWFya2VyKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWJvdW5jZU9uUmVzaXplID0gbG9kYXNoLmRlYm91bmNlKFxyXG4gICAgKHdpZHRoLCBoZWlnaHQpID0+IHsgb25SZXNpemUod2lkdGgsIGhlaWdodCkgfSxcclxuICAgIDIwMFxyXG4gIClcclxuXHJcbiAgY29uc3Qgb25SZXNpemUgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xyXG4gICAgY29uc3QgbmV3V2lkZ2V0UmVjdCA9IHtcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodFxyXG4gICAgfVxyXG4gICAgY29uc3Qgbm90UmVzZXRTaXplID0gd2lkdGggPCBDT09SRElOQVRFU19NSU5fV0lEVEggfHwgaGVpZ2h0IDwgQ09PUkRJTkFURVNfTUlOX0hFSUdIVFxyXG4gICAgaWYgKG5vdFJlc2V0U2l6ZSkgcmV0dXJuXHJcbiAgICBzZXRXaWRnZXRSZWN0KG5ld1dpZGdldFJlY3QpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1N5c3RlbVNldFRpcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFN5c3RlbSA9IGNvb3JkaW5hdGVTeXN0ZW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkU3lzdGVtSWQpXHJcbiAgICBjb25zdCBjYW5TaG93Q2xpZW50ID0gYXdhaXQgY2FuU2hvd0luQ2xpZW50KHNlbGVjdGVkU3lzdGVtKVxyXG4gICAgaWYgKGNhblNob3dDbGllbnQpIHtcclxuICAgICAgaWYgKCFsb2NhdGVBY3RpdmUpIHtcclxuICAgICAgICBzZXRFbmFibGVSZWFsdGltZSh0cnVlKVxyXG4gICAgICAgIHNldFNob3dNb3VzZVRpcHModHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RW5hYmxlUmVhbHRpbWUoZmFsc2UpXHJcbiAgICAgIHNldFNob3dNb3VzZVRpcHMoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRNYXJrZXJHcmFwaGljID0gKG1hcFBvaW50KSA9PiB7XHJcbiAgICBjb25zdCBzeW1ib2wgPSBuZXcgUGljdHVyZU1hcmtlclN5bWJvbCh7XHJcbiAgICAgIHVybDogcmVxdWlyZSgnLi9hc3NldHMvcGluLWV4Yi5zdmcnKSxcclxuICAgICAgd2lkdGg6IDEyLFxyXG4gICAgICBoZWlnaHQ6IDIyLFxyXG4gICAgICB5b2Zmc2V0OiAxMVxyXG4gICAgfSlcclxuICAgIHJldHVybiBuZXcgR3JhcGhpYyh7XHJcbiAgICAgIGdlb21ldHJ5OiBtYXBQb2ludCxcclxuICAgICAgc3ltYm9sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0VXNlZG1hcEluZm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJNYXBJZCA9IGN1cnJlbnRKaW11TWFwVmlldz8udmlldz8ubWFwPy5wb3J0YWxJdGVtPy5pZFxyXG4gICAgY29uc3QgbWFwQXJyID0gW11cclxuICAgIGlmIChtYXBJbmZvKSBtYXBBcnIucHVzaChtYXBJbmZvKVxyXG4gICAgaWYgKG1hcEluZm8yKSBtYXBBcnIucHVzaChtYXBJbmZvMilcclxuICAgIHJldHVybiBtYXBBcnIuZmluZChpbmZvID0+IGluZm8/LmlkID09PSBjdXJNYXBJZClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhblNob3dJbkNsaWVudCA9IGFzeW5jIChzZWxlY3RlZFN5c3RlbTogQ29vcmRpbmF0ZUNvbmZpZyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG4gICAgY29uc3QgeyB3a2lkLCBjcnMgfSA9IHNlbGVjdGVkU3lzdGVtXHJcbiAgICBjb25zdCBjdXJXa2lkTnVtID0gcGFyc2VJbnQod2tpZClcclxuICAgIGNvbnN0IGN1clNyID0gbmV3IFNwYXRpYWxSZWZlcmVuY2UoeyB3a2lkOiBjdXJXa2lkTnVtIH0pXHJcbiAgICBjb25zdCBtYXBTciA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogbWFwV2tpZC5jdXJyZW50IH0pXHJcbiAgICBjb25zdCBzcGVjaWFsQ2FzZSA9IChtYXBXa2lkLmN1cnJlbnQgPT09IDQzMjYgJiYgY3VyU3IuaXNXZWJNZXJjYXRvcikgfHxcclxuICAgICAgKGN1cldraWROdW0gPT09IDQzMjYgJiYgbWFwU3IuaXNXZWJNZXJjYXRvcilcclxuICAgIGNvbnN0IGN1ckxhYmVsID0gY3JzPy5uYW1lXHJcbiAgICAvLyBJZiBzYW1lIHdraWQgd2l0aCBiYXNlbWFwLCB1c2UgdGhlIHJlY29yZGVkIHdraWQuT3RoZXJ3aXNlLCBsb2FkIHdraWR1dGlscy5cclxuICAgIGNvbnN0IHVlc2RDb25maWdNYXBJbmZvID0gZ2V0VXNlZG1hcEluZm8oKVxyXG4gICAgLy8gZ2V0IG1hcCBsYWJlbFxyXG4gICAgY29uc3QgaGFzTWFwID0gdXNlTWFwV2lkZ2V0SWRzICYmIHVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID4gMFxyXG4gICAgY29uc3QgZ2V0TWFwTGFiZWwgPSAoKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICAgICAgaWYgKCFtYXBXa2lkLmN1cnJlbnQgfHwgIWhhc01hcCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpXHJcbiAgICAgIH0gZWxzZSBpZiAodWVzZENvbmZpZ01hcEluZm8/LndraWQgJiYgbWFwV2tpZC5jdXJyZW50ID09PSB1ZXNkQ29uZmlnTWFwSW5mbz8ud2tpZCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodWVzZENvbmZpZ01hcEluZm8/LmxhYmVsKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbW9kdWxlc0xvYWRlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIG1vZHVsZUxvYWRlci5sb2FkTW9kdWxlKCdqaW11LWNvcmUvd2tpZCcpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgd2tpZFV0aWxzUmVmLmN1cnJlbnQgPSBtb2R1bGVcclxuICAgICAgICAgICAgc2V0TW9kdWxlc0xvYWRlZCh0cnVlKVxyXG4gICAgICAgICAgICBjb25zdCB7IGdldFNSTGFiZWwgfSA9IG1vZHVsZVxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0U1JMYWJlbChtYXBXa2lkLmN1cnJlbnQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCB7IGdldFNSTGFiZWwgfSA9IHdraWRVdGlsc1JlZi5jdXJyZW50XHJcbiAgICAgICAgICByZXR1cm4gZ2V0U1JMYWJlbChtYXBXa2lkLmN1cnJlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXBMYWJlbCA9IGF3YWl0IGdldE1hcExhYmVsKClcclxuICAgIGNvbnN0IGlzU2FtZVNSID0gY3VyTGFiZWwgJiYgY3VyTGFiZWwgPT09IG1hcExhYmVsXHJcbiAgICBpZiAoaXNTYW1lU1IgfHwgc3BlY2lhbENhc2UpIHJldHVybiB0cnVlXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RNYXBQb2ludCA9IChwb2ludCwgc2VsZWN0ZWRTeXN0ZW0sIHRocmVlRFBvaW50PykgPT4ge1xyXG4gICAgY29uc3QgeyB3a2lkLCBkYXR1bVdraWQsIGRhdHVtV2tpZDIsIGRpc3BsYXlVbml0LCBjcnMgfSA9IHNlbGVjdGVkU3lzdGVtXHJcbiAgICBpZiAoIXdraWQpIHJldHVyblxyXG4gICAgY29uc3QgY3VyV2tpZE51bSA9IHBhcnNlSW50KHdraWQpXHJcbiAgICBjb25zdCBjdXJTciA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogY3VyV2tpZE51bSB9KVxyXG4gICAgY29uc3QgbWFwU3IgPSBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7IHdraWQ6IG1hcFdraWQuY3VycmVudCB9KVxyXG4gICAgbGV0IG91dFdraWQgPSBudWxsXHJcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgUHJvamVjdFBhcmFtZXRlcnMoe1xyXG4gICAgICBnZW9tZXRyaWVzOiBbcG9pbnRdLFxyXG4gICAgICB0cmFuc2Zvcm1Gb3J3YXJkOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBvdXRXa2lkID0gY3VyV2tpZE51bVxyXG4gICAgbGV0IHVzZUdlbyA9IGZhbHNlXHJcbiAgICBsZXQgb3V0Q3JzXHJcbiAgICBpZiAoY3VyU3IuaXNHZW9ncmFwaGljKSB7XHJcbiAgICAgIG91dFdraWQgPSBjdXJXa2lkTnVtXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB1c2VEaXNwbGF5VW5pdCA9IGRpc3BsYXlVbml0IHx8IGdldERlZmF1bHRVbml0cyhjdXJTci5pc0dlb2dyYXBoaWMsIG1hcFNyLmlzV2ViTWVyY2F0b3IsIGNycylcclxuICAgICAgaWYgKGlzUHJvamVjdFVuaXQodXNlRGlzcGxheVVuaXQpKSB7XHJcbiAgICAgICAgb3V0V2tpZCA9IGN1cldraWROdW1cclxuICAgICAgfSBlbHNlIHsgLy8gZ2VvVW5pdCBvciBVU05HLCBNR1JTXHJcbiAgICAgICAgLy8gV2hlbiBvdXRwdXQgd2tpZCBpcyBub3QgdXNlZCwgbmVlZCB0byB1c2UgR0VPR0NTIHRvIGZpbmQgdGhlIG91dFNSXHJcbiAgICAgICAgY29uc3Qgc3BoZXJvaWRTdHIgPSBnZXRXa3RLZXlTdHIoY3JzLCAnR0VPR0NTJylcclxuICAgICAgICBvdXRDcnMgPSBnZXRDcnNCeVNwaGVyb2lkU3RyKHNwaGVyb2lkU3RyKVxyXG4gICAgICAgIG91dFdraWQgPSBvdXRDcnM/LndraWRcclxuICAgICAgICB1c2VHZW8gPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0dW1Xa2lkICYmIGRhdHVtV2tpZDIpIHtcclxuICAgICAgaWYgKG1hcFBvcnRhbElkLmN1cnJlbnQgPT09IG1hcEluZm8uaWQpIHtcclxuICAgICAgICBwYXJhbXMudHJhbnNmb3JtYXRpb24gPSBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7IHdraWQ6IHBhcnNlSW50KGRhdHVtV2tpZCkgfSlcclxuICAgICAgfSBlbHNlIGlmIChtYXBQb3J0YWxJZC5jdXJyZW50ID09PSBtYXBJbmZvMi5pZCkge1xyXG4gICAgICAgIHBhcmFtcy50cmFuc2Zvcm1hdGlvbiA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogcGFyc2VJbnQoZGF0dW1Xa2lkMikgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkYXR1bVdraWQgJiYgIWRhdHVtV2tpZDIpIHtcclxuICAgICAgcGFyYW1zLnRyYW5zZm9ybWF0aW9uID0gbmV3IFNwYXRpYWxSZWZlcmVuY2UoeyB3a2lkOiBwYXJzZUludChkYXR1bVdraWQpIH0pXHJcbiAgICB9XHJcbiAgICAvLyBUaGlzIHBhcmFtZXRlciBpcyBub3QgdXNlZCwgYnV0IHVzZWQgaW4gV0FCXHJcbiAgICAvLyBwYXJhbXMudHJhbnNmb3JtRm9yd2FyZCA9IEpTT04ucGFyc2UodGhpcy5mb3J3YXJkKVxyXG4gICAgcGFyYW1zLm91dFNwYXRpYWxSZWZlcmVuY2UgPSBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7IHdraWQ6IHBhcnNlSW50KG91dFdraWQpIH0pXHJcbiAgICBzZXRHZW9JbmZvKGNvbXB1dGluZylcclxuICAgIGNvbnN0IGRlZlVybCA9IHV0aWxzLmdldEdlb21ldHJ5U2VydmljZSgpXHJcbiAgICBnZW9tZXRyeVNlcnZpY2UucHJvamVjdChkZWZVcmwsIHBhcmFtcykudGhlbihnZW9tZXRyaWVzID0+IHtcclxuICAgICAgY29uc3QgcG9pbnQgPSBnZW9tZXRyaWVzWzBdXHJcbiAgICAgIGxldCBvdXRwdXRVbml0ID0gZGlzcGxheVVuaXRcclxuICAgICAgLy8gdXNlIGRlZmF1bHQgdW5pdHNcclxuICAgICAgaWYgKCFvdXRwdXRVbml0KSB7XHJcbiAgICAgICAgb3V0cHV0VW5pdCA9IGdldERlZmF1bHRVbml0cyhjdXJTci5pc0dlb2dyYXBoaWMsIG1hcFNyLmlzV2ViTWVyY2F0b3IsIGNycylcclxuICAgICAgfVxyXG4gICAgICBpZiAob3V0cHV0VW5pdCA9PT0gJ01HUlMnIHx8IG91dHB1dFVuaXQgPT09ICdVU05HJykge1xyXG4gICAgICAgIGRpc3BsYXlVc25nT3JNZ3JzKG91dHB1dFVuaXQsIHBvaW50KVxyXG4gICAgICB9IGVsc2UgaWYgKGlzR2VvZ3JhcGhpY1VuaXQob3V0cHV0VW5pdCkpIHtcclxuICAgICAgICBkaXNwbGF5RGVnT3JEbXMob3V0cHV0VW5pdCwgcG9pbnQsIG1hcFNyLmlzV2ViTWVyY2F0b3IsIHVzZUdlbyA/IG91dENycy51bml0IDogJycpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGxheVByb2plY3Qob3V0cHV0VW5pdCwgcG9pbnQsIG1hcFNyLmlzV2ViTWVyY2F0b3IsIHVzZUdlbyA/IG91dENycy51bml0IDogJycpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdmlldyA9IGN1cnJlbnRKaW11TWFwVmlldz8udmlld1xyXG4gICAgY29uc3Qgdmlld1R5cGVJc1RocmVlID0gdmlldz8udHlwZSA9PT0gJzNkJ1xyXG4gICAgaWYgKHZpZXdUeXBlSXNUaHJlZSkge1xyXG4gICAgICBfc2V0RXllSW5mbygpXHJcbiAgICAgIGlmICh0aHJlZURQb2ludCkgX3NldEVsZXZJbmZvKHRocmVlRFBvaW50KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25NYXBDbGljayA9IGFzeW5jIChldnQsIHRocmVlRFBvaW50PykgPT4ge1xyXG4gICAgLy8gaWYgKHdpbmRvdy5hcHBJbmZvLmlzUnVuSW5Nb2JpbGUpIHtcclxuICAgIC8vICAgcmV0dXJuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBDaGFuZ2luZyB0aGUgcmVmZXJlbmNlIGNhdXNlcyBhIGJ1ZyB3aGVyZSBtYXJrJ3MgcG9zaXRpb24gaXMgY2hhbmdlZCB0aGUgZmlyc3QgdGltZVxyXG4gICAgaWYgKCFldnQubWFwUG9pbnQpIHJldHVyblxyXG4gICAgY29uc3QgY29weU1hcFBvaW50ID0gUG9pbnQuZnJvbUpTT04oZXZ0Lm1hcFBvaW50LnRvSlNPTigpKVxyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRTaG93VGlwcyhmYWxzZSlcclxuICAgIGlmIChlbmFibGVSZWFsdGltZSB8fCAhc2VsZWN0ZWRTeXN0ZW1JZCkgcmV0dXJuXHJcbiAgICBjb25zdCBzZWxlY3RlZFN5c3RlbSA9IGNvb3JkaW5hdGVTeXN0ZW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkU3lzdGVtSWQpXHJcbiAgICBjb25zdCBjYW5TaG93Q2xpZW50ID0gYXdhaXQgY2FuU2hvd0luQ2xpZW50KHNlbGVjdGVkU3lzdGVtKVxyXG4gICAgY29uc3QgbmVlZE1hcmtlciA9IGNhblNob3dDbGllbnQgfHwgbG9jYXRlQWN0aXZlXHJcbiAgICBpZiAobmVlZE1hcmtlciAmJiAhbWFya2VyR3JhcGhpYy5jdXJyZW50KSB7XHJcbiAgICAgIG1hcmtlckdyYXBoaWMuY3VycmVudCA9IGdldE1hcmtlckdyYXBoaWMoZXZ0Lm1hcFBvaW50KVxyXG4gICAgICBncmFwaGljc0xheWVyLmN1cnJlbnQuYWRkKG1hcmtlckdyYXBoaWMuY3VycmVudClcclxuICAgIH1cclxuICAgIGlmIChjYW5TaG93Q2xpZW50KSB7XHJcbiAgICAgIG1hcmtlckdyYXBoaWMuY3VycmVudC5nZW9tZXRyeSA9IGV2dC5tYXBQb2ludFxyXG4gICAgICBkaXNwbGF5T25DbGllbnQoY29weU1hcFBvaW50LCB0aHJlZURQb2ludClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRlQWN0aXZlKSB7XHJcbiAgICAgIG1hcmtlckdyYXBoaWMuY3VycmVudC5nZW9tZXRyeSA9IGV2dC5tYXBQb2ludFxyXG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGV2dC5tYXBQb2ludFxyXG4gICAgICBjb25zdCBtYXBTciA9IGN1cnJlbnRKaW11TWFwVmlldz8udmlldz8uc3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh7IHgsIHksIHNwYXRpYWxSZWZlcmVuY2U6IG1hcFNyIH0pXHJcbiAgICAgIHByb2plY3RNYXBQb2ludChwb2ludCwgc2VsZWN0ZWRTeXN0ZW0sIHRocmVlRFBvaW50KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Nb3VzZU1vdmUgPSBhc3luYyAocG9pbnQsIHRocmVlRFBvaW50PykgPT4ge1xyXG4gICAgLy8gaWYgKHdpbmRvdy5hcHBJbmZvLmlzUnVuSW5Nb2JpbGUpIHtcclxuICAgIC8vICAgcmV0dXJuXHJcbiAgICAvLyB9XHJcbiAgICBzZXRTaG93TW91c2VUaXBzKGZhbHNlKVxyXG4gICAgaWYgKCFlbmFibGVSZWFsdGltZSB8fCAhc2VsZWN0ZWRTeXN0ZW1JZCkgcmV0dXJuXHJcbiAgICBjb25zdCBzZWxlY3RlZFN5c3RlbSA9IGNvb3JkaW5hdGVTeXN0ZW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkU3lzdGVtSWQpXHJcbiAgICBjb25zdCBjYW5TaG93Q2xpZW50ID0gYXdhaXQgY2FuU2hvd0luQ2xpZW50KHNlbGVjdGVkU3lzdGVtKVxyXG4gICAgaWYgKGNhblNob3dDbGllbnQpIHtcclxuICAgICAgZGlzcGxheU9uQ2xpZW50KHBvaW50LCB0aHJlZURQb2ludClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVuaXRUb05scyA9ICh1bml0KTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiB1bml0TmxzTWFwW3VuaXRdIHx8IHVuaXRObHNNYXBbdW5pdD8udG9VcHBlckNhc2UoKV1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlVc25nT3JNZ3JzID0gKHVuaXQ6ICdNR1JTJyB8ICdVU05HJywgbm9ybWFsaXplZFBvaW50KSA9PiB7XHJcbiAgICBjb29yZGluYXRlRm9ybWF0dGVyLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc3QgbmxzVW5pdCA9IHVuaXRUb05scyh1bml0KVxyXG4gICAgICBpZiAodW5pdCA9PT0gJ01HUlMnKSB7XHJcbiAgICAgICAgY29uc3QgbWdycyA9IGNvb3JkaW5hdGVGb3JtYXR0ZXIudG9NZ3JzKG5vcm1hbGl6ZWRQb2ludCwgJ2F1dG9tYXRpYycsIDUpXHJcbiAgICAgICAgc2V0R2VvSW5mbyhgJHttZ3JzfSAke25sc1VuaXR9YClcclxuICAgICAgfSBlbHNlIGlmICh1bml0ID09PSAnVVNORycpIHtcclxuICAgICAgICBjb25zdCB1c25nID0gY29vcmRpbmF0ZUZvcm1hdHRlci50b1Vzbmcobm9ybWFsaXplZFBvaW50LCA1KVxyXG4gICAgICAgIHNldEdlb0luZm8oYCR7dXNuZ30gJHtubHNVbml0fWApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwbGF5RGVnT3JEbXMgPSAodW5pdDogc3RyaW5nLCBub3JtYWxpemVkUG9pbnQsIG1hcElzTWVyY2F0b3I/OiBib29sZWFuLCBvdXRDcnNVbml0Pzogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgeyB4LCB5IH0gPSBub3JtYWxpemVkUG9pbnRcclxuICAgIGNvbnN0IG9yZGVyWHkgPSBkaXNwbGF5T3JkZXIgPT09IERpc3BsYXlPcmRlclR5cGUueHlcclxuICAgIC8vIGdldCB1bml0UmF0ZVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRTeXN0ZW0gPSBjb29yZGluYXRlU3lzdGVtLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZFN5c3RlbUlkKVxyXG4gICAgY29uc3QgeyBjcnMgfSA9IHNlbGVjdGVkU3lzdGVtXHJcbiAgICBjb25zdCBkZWZhdWx0VW5pdCA9IG91dENyc1VuaXQgfHwgZ2V0Q1NVbml0QnlDcnMoY3JzKVxyXG4gICAgY29uc3QgdW5pdFJhdGUgPSBnZXRVbml0UmF0ZShkZWZhdWx0VW5pdCwgdW5pdCwgbWFwSXNNZXJjYXRvcilcclxuICAgIHggPSB4ICogdW5pdFJhdGVcclxuICAgIHkgPSB5ICogdW5pdFJhdGVcclxuICAgIGlmICh1bml0ID09PSAnREVHUkVFX01JTlVURV9TRUNPTkRTJykge1xyXG4gICAgICB4ID0gZGVnVG9ETVMoeCwgJ0xPTicsIGNvb3JkaW5hdGVEZWNpbWFsLCBzaG93U2VwYXJhdG9ycylcclxuICAgICAgeSA9IGRlZ1RvRE1TKHksICdMQVQnLCBjb29yZGluYXRlRGVjaW1hbCwgc2hvd1NlcGFyYXRvcnMpXHJcbiAgICAgIG9yZGVyWHkgPyBzZXRHZW9JbmZvKGAke3h9ICR7eX1gKSA6IHNldEdlb0luZm8oYCR7eX0gJHt4fWApXHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdERUdSRUVTX0RFQ0lNQUxfTUlOVVRFUycpIHtcclxuICAgICAgLy9mb3IgaGFjayBERUdSRUVTX0RFQ0lNQUxfTUlOVVRFU1xyXG4gICAgICB4ID0gZGVnVG9ERE0oeCwgY29vcmRpbmF0ZURlY2ltYWwsIHNob3dTZXBhcmF0b3JzLCAnbG9uZ2l0dWRlJylcclxuICAgICAgeSA9IGRlZ1RvRERNKHksIGNvb3JkaW5hdGVEZWNpbWFsLCBzaG93U2VwYXJhdG9ycywgJ2xhdGl0dWRlJylcclxuICAgICAgb3JkZXJYeSA/IHNldEdlb0luZm8oYCR7eH0gJHt5fWApIDogc2V0R2VvSW5mbyhgJHt5fSAke3h9YClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5sc1VuaXQgPSB1bml0VG9ObHModW5pdClcclxuICAgICAgb3JkZXJYeSA/IHNldEdlb0luZm8oYCR7dG9Gb3JtYXQoeCl9ICR7dG9Gb3JtYXQoeSl9ICR7bmxzVW5pdH1gKSA6IHNldEdlb0luZm8oYCR7dG9Gb3JtYXQoeSl9ICR7dG9Gb3JtYXQoeCl9ICR7bmxzVW5pdH1gKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9Gb3JtYXQgPSAobnVtKSA9PiB7XHJcbiAgICBpZiAoaXNOYU4obnVtKSkgcmV0dXJuICcnXHJcbiAgICByZXR1cm4gbG9jYWxpemVOdW1iZXJCeVNldHRpbmdJbmZvKG51bSwge1xyXG4gICAgICBwbGFjZXM6IGNvb3JkaW5hdGVEZWNpbWFsLFxyXG4gICAgICBkaWdpdFNlcGFyYXRvcjogc2hvd1NlcGFyYXRvcnNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwbGF5UHJvamVjdCA9ICh1bml0OiBzdHJpbmcsIG5vcm1hbGl6ZWRQb2ludCwgbWFwSXNNZXJjYXRvcj86IGJvb2xlYW4sIG91dENyc1VuaXQ/OiBzdHJpbmcpID0+IHtcclxuICAgIGxldCB7IHgsIHkgfSA9IG5vcm1hbGl6ZWRQb2ludFxyXG4gICAgLy8gZ2V0IHVuaXRSYXRlXHJcbiAgICBjb25zdCBzZWxlY3RlZFN5c3RlbSA9IGNvb3JkaW5hdGVTeXN0ZW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkU3lzdGVtSWQpXHJcbiAgICBjb25zdCB7IGNycyB9ID0gc2VsZWN0ZWRTeXN0ZW1cclxuICAgIGNvbnN0IGRlZmF1bHRVbml0ID0gb3V0Q3JzVW5pdCB8fCBnZXRDU1VuaXRCeUNycyhjcnMpXHJcbiAgICBjb25zdCB1bml0UmF0ZSA9IGdldFVuaXRSYXRlKGRlZmF1bHRVbml0LCB1bml0LCBtYXBJc01lcmNhdG9yKVxyXG4gICAgeCA9IHggKiB1bml0UmF0ZVxyXG4gICAgeSA9IHkgKiB1bml0UmF0ZVxyXG4gICAgY29uc3QgbmxzVW5pdCA9IHVuaXRUb05scyh1bml0KVxyXG4gICAgY29uc3Qgb3JkZXJYeSA9IGRpc3BsYXlPcmRlciA9PT0gRGlzcGxheU9yZGVyVHlwZS54eVxyXG4gICAgb3JkZXJYeSA/IHNldEdlb0luZm8oYCR7dG9Gb3JtYXQoeCl9ICR7dG9Gb3JtYXQoeSl9ICR7bmxzVW5pdH1gKSA6IHNldEdlb0luZm8oYCR7dG9Gb3JtYXQoeSl9ICR7dG9Gb3JtYXQoeCl9ICR7bmxzVW5pdH1gKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGVmYXVsdFVuaXRzID0gKGlzR2VvZ3JhcGhpYzogYm9vbGVhbiwgbWFwSXNXZWJNZXJjYXRvcjogYm9vbGVhbiwgY3JzOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgdXNlclVuaXQgPSBnZXRVbml0cygpXHJcbiAgICBsZXQgb3V0cHV0VW5pdCA9ICcnXHJcbiAgICBpZiAoaXNHZW9ncmFwaGljKSB7XHJcbiAgICAgIG91dHB1dFVuaXQgPSBnZXRDU1VuaXRCeUNycyhjcnMpXHJcbiAgICAgIGlmICghb3V0cHV0VW5pdCkgb3V0cHV0VW5pdCA9ICdNRVRFUidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG91dHB1dFVuaXQgPSB1c2VyVW5pdCA9PT0gJ2VuZ2xpc2gnID8gJ0ZPT1QnIDogJ01FVEVSJ1xyXG4gICAgfVxyXG4gICAgLy9kZWZhdWx0IHNob3cgbWVyY2F0b3IgaXMgZGVncmVlcy5cclxuICAgIGlmIChtYXBJc1dlYk1lcmNhdG9yKSB7XHJcbiAgICAgIG91dHB1dFVuaXQgPSAnREVDSU1BTF9ERUdSRUVTJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dFVuaXRcclxuICB9XHJcblxyXG4gIGNvbnN0IF9zZXRFbGV2SW5mbyA9ICh0aHJlZURQb2ludCkgPT4ge1xyXG4gICAgY29uc3QgdmlldyA9IGN1cnJlbnRKaW11TWFwVmlldz8udmlld1xyXG4gICAgaWYgKCF0aHJlZURQb2ludCkge1xyXG4gICAgICBzZXRFbGV2SW5mbygnJylcclxuICAgICAgc2V0RWxldk51bShudWxsKVxyXG4gICAgICBzZXRFbGV2VW5pdCgnJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB2aWV3LmhpdFRlc3Qoe1xyXG4gICAgICB4OiB0aHJlZURQb2ludC54LFxyXG4gICAgICB5OiB0aHJlZURQb2ludC55XHJcbiAgICB9KS50aGVuKHBvc2l0aW9uID0+IHtcclxuICAgICAgbGV0IGVsZXYgPSAnJ1xyXG4gICAgICAvLyBpZiAoIWlzSnVzdEVsZXYpIHtcclxuICAgICAgLy8gICB0aGlzLl9zZXRMb25MYXQocG9zaXRpb24pO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGlmIChwb3NpdGlvbi5yZXN1bHRzICYmIHBvc2l0aW9uLnJlc3VsdHNbMF0gJiZcclxuICAgICAgICBwb3NpdGlvbi5yZXN1bHRzWzBdLm1hcFBvaW50ICYmIHBvc2l0aW9uLnJlc3VsdHNbMF0ubWFwUG9pbnQueikge1xyXG4gICAgICAgIGVsZXYgPSBfZ2V0RWxldihwb3NpdGlvbi5yZXN1bHRzWzBdLm1hcFBvaW50KSAvLyByZXN1bHQgZWxldihyYXljYXN0aW5nKVxyXG4gICAgICAgIHNldEVsZXZJbmZvKGVsZXYpXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBvc2l0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBwb3NpdGlvbi5ncm91bmQgJiZcclxuICAgICAgICBwb3NpdGlvbi5ncm91bmQubWFwUG9pbnQgIT09IG51bGwgJiYgdHlwZW9mIHBvc2l0aW9uLmdyb3VuZC5tYXBQb2ludC56ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGVsZXYgPSBfZ2V0RWxldihwb3NpdGlvbi5ncm91bmQubWFwUG9pbnQpIC8vIGdyb3VuZCBlbGV2XHJcbiAgICAgIH1cclxuICAgICAgc2V0RWxldkluZm8oZWxldilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBfZ2V0RWxldiA9IChwb3MpID0+IHtcclxuICAgIGxldCBlbGV2ID0gJydcclxuICAgIGlmIChwb3MgJiYgcG9zLnogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCB7IG51bSwgdW5pdCB9ID0gdHJ1bk51bVRvS21Pck0ocG9zLnosIHRydWUpXHJcbiAgICAgIGNvbnN0IGFiYnRVbml0ID0gdW5pdEFiYnJNYXBbdW5pdF1cclxuICAgICAgc2V0RWxldk51bShudW0pXHJcbiAgICAgIHNldEVsZXZVbml0KHVuaXQpXHJcbiAgICAgIGVsZXYgPSBgJHt0cmFuc2xhdGUoJ2VsZXYnLCB7IGVsZTogYWJidFVuaXQgfSl9ICR7bnVtfSAke3VuaXR9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RWxldk51bShudWxsKVxyXG4gICAgICBzZXRFbGV2VW5pdCgnJylcclxuICAgIH1cclxuICAgIHJldHVybiBlbGV2XHJcbiAgfVxyXG5cclxuICBjb25zdCBfc2V0RXllSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBjdXJyZW50SmltdU1hcFZpZXc/LnZpZXdcclxuICAgIGlmICghdmlldyB8fCAhdmlldz8uY2FtZXJhIHx8ICF2aWV3Py5jYW1lcmE/LnBvc2l0aW9uKSB7XHJcbiAgICAgIHNldEV5ZUluZm8oJycpXHJcbiAgICAgIHNldEV5ZU51bShudWxsKVxyXG4gICAgICBzZXRFeWVVbml0KCcnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGV5ZUFsdCA9IHZpZXcuY2FtZXJhLnBvc2l0aW9uPy56XHJcbiAgICBjb25zdCB7IG51bSwgdW5pdCB9ID0gdHJ1bk51bVRvS21Pck0oZXllQWx0KVxyXG4gICAgY29uc3QgYWJidFVuaXQgPSB1bml0QWJick1hcFt1bml0XVxyXG4gICAgc2V0RXllSW5mbyhgJHt0cmFuc2xhdGUoJ2V5ZUFsdCcsIHsgYWx0OiBhYmJ0VW5pdCB9KX0gJHtudW19ICR7dW5pdH1gKVxyXG4gICAgc2V0RXllTnVtKG51bSlcclxuICAgIHNldEV5ZVVuaXQodW5pdClcclxuICB9XHJcblxyXG4gIGNvbnN0IHRydW5OdW1Ub0ttT3JNID0gKG51bSwgaXNFbGV2PzogYm9vbGVhbikgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRTeXN0ZW0gPSBjb29yZGluYXRlU3lzdGVtLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZFN5c3RlbUlkKVxyXG4gICAgY29uc3QgeyBlbGV2YXRpb25Vbml0IH0gPSBzZWxlY3RlZFN5c3RlbVxyXG4gICAgY29uc3QgaXNNZXRyaWMgPSBlbGV2YXRpb25Vbml0ID09PSBFbGV2YXRpb25Vbml0VHlwZS5tZXRyaWNcclxuICAgIGlmICghbnVtKSByZXR1cm4geyBudW06IDAsIHVuaXQ6IGlzTWV0cmljID8gdW5pdE1ldGVycyA6IHVuaXRGb290IH1cclxuICAgIGxldCB1bml0ID0gJydcclxuICAgIGNvbnN0IHVuaXRSYXRlID0gMVxyXG4gICAgbGV0IHRocmVzaG9sZCA9IDEwMDBcclxuICAgIG51bSA9IHBhcnNlRmxvYXQobnVtKVxyXG4gICAgaWYgKGlzRWxldikge1xyXG4gICAgICAvL3N3aXRjaCB0byBrbSBpZiBtb3JlIHRoYW4gMTAsMDAwIG0uXHJcbiAgICAgIHRocmVzaG9sZCA9IDEwMDAwXHJcbiAgICB9XHJcbiAgICBpZiAoaXNNZXRyaWMpIHtcclxuICAgICAgaWYgKG51bSA+PSB0aHJlc2hvbGQgfHwgbnVtIDw9IC0odGhyZXNob2xkKSkge1xyXG4gICAgICAgIG51bSA9IG51bSAvIDEwMDBcclxuICAgICAgICB1bml0ID0gdW5pdEtpbG9tZXRlcnNcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1bml0ID0gdW5pdE1ldGVyc1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL3Nob3cgZWxldmF0aW9uIGluIGZlZXQgYW5kIG5vdCBtZXRlcnMuXHJcbiAgICAgIG51bSA9IG51bSAqIHVuaXRSYXRlXHJcbiAgICAgIHVuaXQgPSB1bml0Rm9vdFxyXG4gICAgfVxyXG4gICAgbnVtID0gbG9jYWxpemVOdW1iZXJCeVNldHRpbmdJbmZvKG51bSwge1xyXG4gICAgICBwbGFjZXM6IGFsdGl0dWRlRGVjaW1hbCxcclxuICAgICAgZGlnaXRTZXBhcmF0b3I6IHNob3dTZXBhcmF0b3JzXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHsgbnVtLCB1bml0IH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE91dHB1dFdraWQgPSAoc2VsZWN0ZWRTeXN0ZW06IENvb3JkaW5hdGVDb25maWcpID0+IHtcclxuICAgIGNvbnN0IHsgd2tpZCwgZGlzcGxheVVuaXQsIGNycyB9ID0gc2VsZWN0ZWRTeXN0ZW1cclxuICAgIGNvbnN0IGN1cldraWROdW0gPSBwYXJzZUludCh3a2lkKVxyXG4gICAgbGV0IG91dFdraWQgPSBjdXJXa2lkTnVtXHJcbiAgICBjb25zdCBjdXJTciA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogY3VyV2tpZE51bSB9KVxyXG4gICAgY29uc3QgbWFwU3IgPSBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7IHdraWQ6IG1hcFdraWQuY3VycmVudCB9KVxyXG4gICAgbGV0IG91dENyc1xyXG4gICAgaWYgKCFjdXJTci5pc0dlb2dyYXBoaWMpIHtcclxuICAgICAgY29uc3QgdXNlRGlzcGxheVVuaXQgPSBkaXNwbGF5VW5pdCB8fCBnZXREZWZhdWx0VW5pdHMoY3VyU3IuaXNHZW9ncmFwaGljLCBtYXBTci5pc1dlYk1lcmNhdG9yLCBjcnMpXHJcbiAgICAgIGlmIChpc1Byb2plY3RVbml0KHVzZURpc3BsYXlVbml0KSkge1xyXG4gICAgICAgIG91dFdraWQgPSBjdXJXa2lkTnVtXHJcbiAgICAgIH0gZWxzZSB7IC8vIGdlb1VuaXQgb3IgVVNORywgTUdSU1xyXG4gICAgICAgIC8vIFdoZW4gb3V0cHV0IHdraWQgaXMgbm90IHVzZWQsIG5lZWQgdG8gdXNlIEdFT0dDUyB0byBmaW5kIHRoZSBvdXRTUlxyXG4gICAgICAgIGNvbnN0IHNwaGVyb2lkU3RyID0gZ2V0V2t0S2V5U3RyKGNycywgJ0dFT0dDUycpXHJcbiAgICAgICAgb3V0Q3JzID0gZ2V0Q3JzQnlTcGhlcm9pZFN0cihzcGhlcm9pZFN0cilcclxuICAgICAgICBvdXRXa2lkID0gb3V0Q3JzPy53a2lkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRXa2lkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwbGF5T25DbGllbnQgPSAobWFwUG9pbnQsIHRocmVlRFBvaW50PykgPT4ge1xyXG4gICAgLy8gd2hlbiB0aGUgbW91c2UgcG9pbnRlciBvdXQgb2YgZWFydGgsIHNob3cgZXllSW5mbyBvbmx5XHJcbiAgICBpZiAoIW1hcFBvaW50IHx8ICFtYXBQb2ludD8ueCB8fCAhbWFwUG9pbnQ/LnkpIHtcclxuICAgICAgc2V0RWxldkluZm8oJycpXHJcbiAgICAgIHNldEVsZXZOdW0obnVsbClcclxuICAgICAgc2V0RWxldlVuaXQoJycpXHJcbiAgICAgIHNldEdlb0luZm8oJycpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgY29weU1hcFBvaW50ID0gUG9pbnQuZnJvbUpTT04obWFwUG9pbnQudG9KU09OKCkpXHJcbiAgICBjb25zdCBzZWxlY3RlZFN5c3RlbSA9IGNvb3JkaW5hdGVTeXN0ZW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkU3lzdGVtSWQpXHJcbiAgICBjb25zdCB7IGRpc3BsYXlVbml0LCB3a2lkLCBjcnMgfSA9IHNlbGVjdGVkU3lzdGVtXHJcbiAgICBjb25zdCBjdXJXa2lkTnVtID0gcGFyc2VJbnQod2tpZClcclxuICAgIGNvbnN0IGN1clNyID0gbmV3IFNwYXRpYWxSZWZlcmVuY2UoeyB3a2lkOiBjdXJXa2lkTnVtIH0pXHJcbiAgICBjb25zdCBtYXBTciA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogbWFwV2tpZC5jdXJyZW50IH0pXHJcbiAgICBsZXQgeyB4LCB5IH0gPSBtYXBQb2ludFxyXG4gICAgY29uc3QgY29udmVydEluQ2xpZW50ID0gKG1hcFdraWQuY3VycmVudCA9PT0gNDMyNiAmJiBjdXJTci5pc1dlYk1lcmNhdG9yKSB8fFxyXG4gICAgICAoY3VyV2tpZE51bSA9PT0gNDMyNiAmJiBtYXBTci5pc1dlYk1lcmNhdG9yKVxyXG4gICAgbGV0IG5vcm1hbGl6ZWRQb2ludCA9IG51bGxcclxuICAgIC8vIG1ha2Ugc3VyZSBsb25naXR1ZGUgdmFsdWVzIHN0YXlzIHdpdGhpbiAtMTgwLzE4MFxyXG4gICAgbm9ybWFsaXplZFBvaW50ID0gbWFwUG9pbnQubm9ybWFsaXplKClcclxuICAgIC8vIGdldCBkZWZhdWx0IHVuaXRzXHJcbiAgICBsZXQgb3V0cHV0VW5pdCA9IGRpc3BsYXlVbml0XHJcbiAgICBjb25zdCBzeXN0ZW1EZWZhdWx0VW5pdCA9IGdldERlZmF1bHRVbml0cyhjdXJTci5pc0dlb2dyYXBoaWMsIG1hcFNyLmlzV2ViTWVyY2F0b3IsIGNycylcclxuICAgIC8vIGNvbnN0IHN5c3RlbURlZmF1bHRVbml0ID0gZ2V0Q1NVbml0QnlDcnMoY3JzKVxyXG4gICAgaWYgKCFvdXRwdXRVbml0KSB7XHJcbiAgICAgIG91dHB1dFVuaXQgPSBzeXN0ZW1EZWZhdWx0VW5pdFxyXG4gICAgfVxyXG4gICAgLy8gdGhpcyBtZWFucyBzeXN0ZW0gb3V0cHV0IHVuaXRcclxuICAgIGNvbnN0IGlzR2VvVW5pdCA9IGlzR2VvZ3JhcGhpY1VuaXQob3V0cHV0VW5pdClcclxuICAgIGNvbnN0IGlzUHJvVW5pdCA9IGlzUHJvamVjdFVuaXQob3V0cHV0VW5pdClcclxuICAgIGlmIChpc0dlb1VuaXQpIHtcclxuICAgICAgeCA9IG5vcm1hbGl6ZWRQb2ludC5sb25naXR1ZGUgfHwgeFxyXG4gICAgICB5ID0gbm9ybWFsaXplZFBvaW50LmxhdGl0dWRlIHx8IHlcclxuICAgICAgbm9ybWFsaXplZFBvaW50LnggPSB4XHJcbiAgICAgIG5vcm1hbGl6ZWRQb2ludC55ID0geVxyXG4gICAgfVxyXG5cclxuICAgIC8vICdNR1JTJyAmICdVU05HJyBuZWVkIHRvIGNvbnZlcnQgcHJvIHBvaW50IHRvIGdjcyBwb2ludFxyXG4gICAgY29uc3QgY29udmVydFBvaW50ID0gcHJvamVjdGlvbi5wcm9qZWN0KGNvcHlNYXBQb2ludCwgbmV3IFNwYXRpYWxSZWZlcmVuY2UoeyB3a2lkOiBnZXRPdXRwdXRXa2lkKHNlbGVjdGVkU3lzdGVtKSB9KSlcclxuICAgIGlmIChjb252ZXJ0SW5DbGllbnQpIHtcclxuICAgICAgLy8gcHJvY2VzcyBzcGVjaWFsIGNhc2VcclxuICAgICAgaWYgKG1hcFBvaW50LnNwYXRpYWxSZWZlcmVuY2Uud2tpZCA9PT0gNDMyNiAmJiBjdXJTci5pc1dlYk1lcmNhdG9yKSB7XHJcbiAgICAgICAgaWYgKG91dHB1dFVuaXQgPT09ICdNR1JTJyB8fCBvdXRwdXRVbml0ID09PSAnVVNORycpIHtcclxuICAgICAgICAgIGRpc3BsYXlVc25nT3JNZ3JzKG91dHB1dFVuaXQsIGNvbnZlcnRQb2ludClcclxuICAgICAgICB9IGVsc2UgaWYgKGlzR2VvVW5pdCkge1xyXG4gICAgICAgICAgZGlzcGxheURlZ09yRG1zKG91dHB1dFVuaXQsIG5vcm1hbGl6ZWRQb2ludCwgbWFwU3IuaXNXZWJNZXJjYXRvcilcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvVW5pdCkge1xyXG4gICAgICAgICAgY29uc3QgbUNvb3JkID0gd2ViTWVyY2F0b3JVdGlscy5sbmdMYXRUb1hZKHgsIHkpXHJcbiAgICAgICAgICBkaXNwbGF5UHJvamVjdChvdXRwdXRVbml0LCB7IHg6IG1Db29yZFswXSwgeTogbUNvb3JkWzFdIH0sIG1hcFNyLmlzV2ViTWVyY2F0b3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGN1cldraWROdW0gPT09IDQzMjYgJiYgbWFwU3IuaXNXZWJNZXJjYXRvcikge1xyXG4gICAgICAgIGlmIChvdXRwdXRVbml0ID09PSAnTUdSUycgfHwgb3V0cHV0VW5pdCA9PT0gJ1VTTkcnKSB7XHJcbiAgICAgICAgICBkaXNwbGF5VXNuZ09yTWdycyhvdXRwdXRVbml0LCBjb252ZXJ0UG9pbnQpXHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0dlb1VuaXQpIHtcclxuICAgICAgICAgIGRpc3BsYXlEZWdPckRtcyhvdXRwdXRVbml0LCBub3JtYWxpemVkUG9pbnQsIG1hcFNyLmlzV2ViTWVyY2F0b3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzZXR0aW5nIGRpc3BsYXkgdW5pdHNcclxuICAgICAgaWYgKG1hcFBvaW50LnNwYXRpYWxSZWZlcmVuY2Uud2tpZCA9PT0gNDMyNiB8fCBtYXBQb2ludC5zcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IpIHtcclxuICAgICAgICBpZiAob3V0cHV0VW5pdCA9PT0gJ01HUlMnIHx8IG91dHB1dFVuaXQgPT09ICdVU05HJykge1xyXG4gICAgICAgICAgZGlzcGxheVVzbmdPck1ncnMob3V0cHV0VW5pdCwgY29udmVydFBvaW50KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNHZW9Vbml0KSB7XHJcbiAgICAgICAgICBkaXNwbGF5RGVnT3JEbXMob3V0cHV0VW5pdCwgbm9ybWFsaXplZFBvaW50LCBtYXBTci5pc1dlYk1lcmNhdG9yKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9Vbml0KSB7XHJcbiAgICAgICAgICBkaXNwbGF5UHJvamVjdChvdXRwdXRVbml0LCBub3JtYWxpemVkUG9pbnQsIG1hcFNyLmlzV2ViTWVyY2F0b3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgeyAvLyBwcm9qIG9yIGdlb1xyXG4gICAgICAgIGlmIChjdXJTci5pc0dlb2dyYXBoaWMpIHtcclxuICAgICAgICAgIGlmIChvdXRwdXRVbml0ID09PSAnTUdSUycgfHwgb3V0cHV0VW5pdCA9PT0gJ1VTTkcnKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlVc25nT3JNZ3JzKG91dHB1dFVuaXQsIGNvbnZlcnRQb2ludClcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNHZW9Vbml0KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlEZWdPckRtcyhvdXRwdXRVbml0LCBub3JtYWxpemVkUG9pbnQsIG1hcFNyLmlzV2ViTWVyY2F0b3IpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KG91dHB1dFVuaXQsIG5vcm1hbGl6ZWRQb2ludCwgbWFwU3IuaXNXZWJNZXJjYXRvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2aWV3ID0gY3VycmVudEppbXVNYXBWaWV3Py52aWV3XHJcbiAgICBjb25zdCB2aWV3VHlwZUlzVGhyZWUgPSB2aWV3Py50eXBlID09PSAnM2QnXHJcbiAgICBpZiAodmlld1R5cGVJc1RocmVlKSB7XHJcbiAgICAgIF9zZXRFeWVJbmZvKClcclxuICAgICAgaWYgKHRocmVlRFBvaW50KSBfc2V0RWxldkluZm8odGhyZWVEUG9pbnQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkxvY2F0ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0R2VvSW5mbygnJylcclxuICAgIHNldEVsZXZJbmZvKCcnKVxyXG4gICAgc2V0RWxldk51bShudWxsKVxyXG4gICAgc2V0RWxldlVuaXQoJycpXHJcbiAgICBzZXRFeWVJbmZvKCcnKVxyXG4gICAgc2V0RXllTnVtKG51bGwpXHJcbiAgICBzZXRFeWVVbml0KCcnKVxyXG4gICAgZ3JhcGhpY3NMYXllci5jdXJyZW50LnJlbW92ZShtYXJrZXJHcmFwaGljLmN1cnJlbnQpXHJcbiAgICBtYXJrZXJHcmFwaGljLmN1cnJlbnQgPSBudWxsXHJcbiAgICBjb25zdCBzZWxlY3RlZFN5c3RlbSA9IGNvb3JkaW5hdGVTeXN0ZW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkU3lzdGVtSWQpXHJcbiAgICBjb25zdCBjYW5TaG93Q2xpZW50ID0gYXdhaXQgY2FuU2hvd0luQ2xpZW50KHNlbGVjdGVkU3lzdGVtKVxyXG4gICAgaWYgKGNhblNob3dDbGllbnQpIHtcclxuICAgICAgaWYgKCFsb2NhdGVBY3RpdmUpIHtcclxuICAgICAgICBzZXRTaG93VGlwcyh0cnVlKVxyXG4gICAgICAgIHNldFNob3dNb3VzZVRpcHMoZmFsc2UpXHJcbiAgICAgICAgc2V0RW5hYmxlUmVhbHRpbWUoZmFsc2UpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U2hvd1RpcHMoZmFsc2UpXHJcbiAgICAgICAgc2V0U2hvd01vdXNlVGlwcyh0cnVlKVxyXG4gICAgICAgIHNldEVuYWJsZVJlYWx0aW1lKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dNb3VzZVRpcHMoZmFsc2UpXHJcbiAgICAgIHNldEVuYWJsZVJlYWx0aW1lKGZhbHNlKVxyXG4gICAgICBpZiAoIWxvY2F0ZUFjdGl2ZSkge1xyXG4gICAgICAgIHNldFNob3dUaXBzKHRydWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U2hvd1RpcHMoZmFsc2UpXHJcbiAgICAgICAgc2V0R2VvSW5mbygnJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRKaW11TWFwVmlldz8udmlldykge1xyXG4gICAgICBjb25zdCBjdXJzb3JUeXBlID0gbG9jYXRlQWN0aXZlID8gJ2RlZmF1bHQnIDogJ2Nyb3NzaGFpcidcclxuICAgICAgY3VycmVudEppbXVNYXBWaWV3LnZpZXcuY3Vyc29yID0gY3Vyc29yVHlwZVxyXG4gICAgfVxyXG4gICAgc2V0TG9jYXRlQWN0aXZlKCFsb2NhdGVBY3RpdmUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTeXN0ZW1DaGFuZ2UgPSBhc3luYyAoc3lzdGVtSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRTeXN0ZW0gPSBjb29yZGluYXRlU3lzdGVtLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBzeXN0ZW1JZClcclxuICAgIGNvbnN0IGNhblNob3dDbGllbnQgPSBhd2FpdCBjYW5TaG93SW5DbGllbnQoc2VsZWN0ZWRTeXN0ZW0pXHJcbiAgICBpZiAoY2FuU2hvd0NsaWVudCkge1xyXG4gICAgICBzZXRFbmFibGVSZWFsdGltZSh0cnVlKVxyXG4gICAgICBzZXRTaG93TW91c2VUaXBzKHRydWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFbmFibGVSZWFsdGltZShmYWxzZSlcclxuICAgICAgc2V0U2hvd01vdXNlVGlwcyhmYWxzZSlcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkU3lzdGVtSWQoc3lzdGVtSWQpXHJcbiAgICBzZXRMb2NhdGVBY3RpdmUoZmFsc2UpXHJcbiAgICBzZXRTaG93VGlwcyhmYWxzZSlcclxuICAgIHNldEdlb0luZm8oJycpXHJcbiAgICBzZXRFeWVJbmZvKCcnKVxyXG4gICAgc2V0RXllTnVtKG51bGwpXHJcbiAgICBzZXRFeWVVbml0KCcnKVxyXG4gICAgc2V0RWxldkluZm8oJycpXHJcbiAgICBzZXRFbGV2TnVtKG51bGwpXHJcbiAgICBzZXRFbGV2VW5pdCgnJylcclxuICAgIGdyYXBoaWNzTGF5ZXIuY3VycmVudC5yZW1vdmUobWFya2VyR3JhcGhpYy5jdXJyZW50KVxyXG4gICAgbWFya2VyR3JhcGhpYy5jdXJyZW50ID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlTWFwID0gdXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggPiAwXHJcbiAgaWYgKCF1c2VNYXApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxXaWRnZXRQbGFjZWhvbGRlclxyXG4gICAgICAgIHdpZGdldElkPXtpZH1cclxuICAgICAgICBpY29uPXtjb29yZGluYXRlc0ljb259XHJcbiAgICAgICAgZGF0YS10ZXN0aWQ9J2Nvb3JkaW5hdGVzUGxhY2Vob2xkZXInXHJcbiAgICAgICAgbWVzc2FnZT17cGxhY2VIb2xkZXJOYW1lfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuICBjb25zdCBsb2NhdGVCdG5UaXBzID0gbG9jYXRlQWN0aXZlID8gZGlzYWJsZUNsaWNrVGlwcyA6IGVuYWJsZUNsaWNrVGlwc1xyXG4gIGNvbnN0IGlzQ2xhc3NpYyA9IHdpZGdldFN0eWxlID09PSBXaWRnZXRTdHlsZVR5cGUuY2xhc3NpY1xyXG4gIGNvbnN0IGhhc1NlY29uZERpdmlkZXIgPSBnZW9JbmZvIHx8IGVsZXZJbmZvXHJcbiAgLy9jb25zdCBjbGFzc2ljR2VvID0gYCR7Z2VvSW5mb30ke3Nob3dFbGV2YXRpb24gPyAoZWxldkluZm8gJiYgYCR7Z2VvSW5mbyAmJiAnIHwgJ30ke2VsZXZJbmZvfSAke2V5ZUluZm8gJiYgYCR7aGFzU2Vjb25kRGl2aWRlciAmJiAnIHwgJ30ke2V5ZUluZm99YH0pOicnYFxyXG4gIGNvbnN0IGNsYXNzaWNHZW8gPSBgJHtnZW9JbmZvfSR7c2hvd0VsZXZhdGlvbiA/IChlbGV2SW5mbyA/IGAke2dlb0luZm8gPyAnIHwgJyA6ICcnfSR7ZWxldkluZm99YCA6ICcnKSA6ICcnfSR7c2hvd0VsZXZhdGlvbiAmJiBleWVJbmZvID8gYCR7aGFzU2Vjb25kRGl2aWRlciA/ICcgfCAnIDogJyd9JHtleWVJbmZvfWAgOiAnJ31gO1xyXG5cclxuXHJcbiAgY29uc3QgY2xhc3NpY0Nvb3JJbmZvID0gc2hvd1RpcHMgPyBtYXBDbGlja1RpcHMgOiAoc2hvd01vdXNlVGlwcyA/IG1vdXNlTW92ZVRpcHMgOiBjbGFzc2ljR2VvIHx8IGVuYWJsZUNsaWNrVGlwcylcclxuICBjb25zdCBoYXNFbGV2T3JFeWUgPSAoZXllTnVtICE9PSBudWxsKSB8fCAoZWxldk51bSAhPT0gbnVsbClcclxuICBjb25zdCBlbGV2VGV4dCA9IHRyYW5zbGF0ZSgnZWxldicsIHsgZWxlOiB1bml0QWJick1hcFtlbGV2VW5pdF0gfSlcclxuICBjb25zdCBleWVBbHRUZXh0ID0gdHJhbnNsYXRlKCdleWVBbHQnLCB7IGFsdDogdW5pdEFiYnJNYXBbZXllVW5pdF0gfSlcclxuICBjb25zdCBtb2Rlcm5Db29ySW5mbyA9IChcclxuICAgIHNob3dUaXBzXHJcbiAgICAgID8gbWFwQ2xpY2tUaXBzXHJcbiAgICAgIDogKHNob3dNb3VzZVRpcHNcclxuICAgICAgICAgID8gbW91c2VNb3ZlVGlwc1xyXG4gICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0naW5mby1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZC1mbGV4IHctMTAwICR7KGhhc0VsZXZPckV5ZSAmJiBzaG93RWxldmF0aW9uKSA/ICdoLTUwJyA6ICdoLTEwMCd9YH0+XHJcbiAgICAgICAgICAgICAgICB7KGdlb0luZm8gPT09IGNvbXB1dGluZyB8fCAhZ2VvSW5mbylcclxuICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0nY29vcmRpbmF0ZXMtY29tcHV0aW5nJz57Z2VvSW5mbyB8fCAoKGhhc0VsZXZPckV5ZSAmJiBzaG93RWxldmF0aW9uKSA/ICctLScgOiBlbmFibGVDbGlja1RpcHMpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6ICh3aWRnZXRTaXplQXV0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0nY29vcmRpbmF0ZXMtY2FyZC10ZXh0LWdlby1maXhlZCc+e2dlb0luZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IDxUZXh0QXV0b0ZpdCBjbGFzc05hbWU9J2Nvb3JkaW5hdGVzLWNhcmQtdGV4dC1nZW8nIHRleHQ9e2dlb0luZm99IHdpZGdldFJlY3Q9e3dpZGdldFJlY3R9IGRvbUNoYW5nZT17KGhhc0VsZXZPckV5ZSAmJiBzaG93RWxldmF0aW9uKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgeyhoYXNFbGV2T3JFeWUgJiYgc2hvd0VsZXZhdGlvbikgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTUwJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHRmaXQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICB7ZWxldk51bSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyAod2lkZ2V0U2l6ZUF1dG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdjb29yZGluYXRlcy1jYXJkLXRleHQtZml4ZWQnPntlbGV2TnVtfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogPFRleHRBdXRvRml0IGNsYXNzTmFtZT0nY29vcmRpbmF0ZXMtY2FyZC10ZXh0JyB0ZXh0PXtlbGV2TnVtfSB3aWRnZXRSZWN0PXt3aWRnZXRSZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSdjb29yZGluYXRlcy1jYXJkLXRleHQtZW1wdHknPi0tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvLXVuaXQgdHJ1bmNhdGUtdHdvJyB0aXRsZT17ZWxldlRleHR9PntlbGV2VGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0Zml0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAge2V5ZU51bSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyAod2lkZ2V0U2l6ZUF1dG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdjb29yZGluYXRlcy1jYXJkLXRleHQtZml4ZWQnPntleWVOdW19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8VGV4dEF1dG9GaXQgY2xhc3NOYW1lPSdjb29yZGluYXRlcy1jYXJkLXRleHQnIHRleHQ9e2V5ZU51bX0gd2lkZ2V0UmVjdD17d2lkZ2V0UmVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0nY29vcmRpbmF0ZXMtY2FyZC10ZXh0LWVtcHR5Jz4tLTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mby11bml0IHRydW5jYXRlLXR3bycgdGl0bGU9e2V5ZUFsdFRleHR9PntleWVBbHRUZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gIClcclxuICBjb25zdCBpbmZvVGlwc0FyciA9IFttYXBDbGlja1RpcHMsIG1vdXNlTW92ZVRpcHMsIGVuYWJsZUNsaWNrVGlwc11cclxuICBjb25zdCBpc0RlZmF1bHRUaXBzID0gaW5mb1RpcHNBcnIuaW5jbHVkZXMoY2xhc3NpY0Nvb3JJbmZvKVxyXG4gIGNvbnN0IGNsYXNzaWNDb3B5RGlzYWJsZSA9IGVuYWJsZVJlYWx0aW1lIHx8IGlzRGVmYXVsdFRpcHMgfHwgKCFsb2NhdGVBY3RpdmUgJiYgIWdlb0luZm8pXHJcbiAgY29uc3QgbW9kZXJuQ29weURpc2FibGUgPSBlbmFibGVSZWFsdGltZSB8fCBpc0RlZmF1bHRUaXBzIHx8ICghbG9jYXRlQWN0aXZlICYmICFjbGFzc2ljQ29vckluZm8udHJpbSgpKVxyXG4gIGNvbnN0IGhhc1N5c3RlbSA9IGNvb3JkaW5hdGVTeXN0ZW0/Lmxlbmd0aCA+IDBcclxuXHJcbiAgLy8gUmVuZGVyZXJcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0LWNvb3JkaW5hdGVzIGppbXUtd2lkZ2V0IGgtMTAwJyBjc3M9e2dldFN0eWxlKHRoZW1lLCBpc0NsYXNzaWMsIHdpZGdldFJlY3QsIHdpZGdldFNpemVBdXRvKX0+XHJcbiAgICAgIHtpc0NsYXNzaWNcclxuICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdjb29yZGluYXRlcy13aWRnZXQtY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBzdXJmYWNlLTEnPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgIHNpemU9J3NtJ1xyXG4gICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgb25DbGljaz17b25Mb2NhdGVDbGlja31cclxuICAgICAgICAgICAgYWN0aXZlPXtsb2NhdGVBY3RpdmV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtsb2NhdGVCdG5UaXBzfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsb2NhdGVCdG5UaXBzfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2ppbXUtb3V0bGluZS1pbnNpZGUgY29vcmRpbmF0ZXMtbG9jYXRlJ1xyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWhhc1N5c3RlbX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExvY2F0b3JPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29vcmRpbmF0ZXMtaW5mbyB0ZXh0LXRydW5jYXRlJyB0aXRsZT17Y2xhc3NpY0Nvb3JJbmZvfT5cclxuICAgICAgICAgICAge2NsYXNzaWNDb29ySW5mb31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENvcHlCdXR0b25cclxuICAgICAgICAgICAgdGV4dD17Y2xhc3NpY0Nvb3JJbmZvfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17Y2xhc3NpY0NvcHlEaXNhYmxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtoYXNTeXN0ZW0gJiZcclxuICAgICAgICAgICAgPERyb3Bkb3duIHNpemU9J3NtJyBhY3RpdmVJY29uPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc3VzcGVuc2lvbi1kcm9wLWJ0biBqaW11LW91dGxpbmUtaW5zaWRlJ1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NoYW5nZVN5c3RlbX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RG93bk91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgICAge2Nvb3JkaW5hdGVTeXN0ZW0ubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZWQgPSBpdGVtLmlkID09PSBzZWxlY3RlZFN5c3RlbUlkXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBrZXk9e2l0ZW0uaWR9IGFjdGl2ZT17aXNBY3RpdmVkfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTeXN0ZW1DaGFuZ2UoaXRlbS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0nY29vcmRpbmF0ZXMtd2lkZ2V0LWNvbnRhaW5lciB3LTEwMCBoLTEwMCBzdXJmYWNlLTEnPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT0naC0xMDAgY29vcmRpbmF0ZXMtY2FyZCc+XHJcbiAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPSd3aWRnZXQtY2FyZC1jb250ZW50Jz5cclxuICAgICAgICAgICAge21vZGVybkNvb3JJbmZvfVxyXG4gICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT0nd2lkZ2V0LWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9jYXRlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e2xvY2F0ZUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtsb2NhdGVCdG5UaXBzfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bG9jYXRlQnRuVGlwc31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TG9jYXRvck91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICB7Y2xhc3NpY0Nvb3JJbmZvICYmXHJcbiAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17Y2xhc3NpY0Nvb3JJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXttb2Rlcm5Db3B5RGlzYWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nvb3JkaW5hdGVzLWNhcmQtY29weSBtci0xJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2hhc1N5c3RlbSAmJlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd24gc2l6ZT0nc20nIGFjdGl2ZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnJvdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzdXNwZW5zaW9uLWRyb3AtYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NoYW5nZVN5c3RlbX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RG93bk91dGxpbmVkIGNsYXNzTmFtZT0nc3VzcGVuc2lvbi1kcm9wLWJ0bicgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29vcmRpbmF0ZVN5c3RlbS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlZCA9IGl0ZW0uaWQgPT09IHNlbGVjdGVkU3lzdGVtSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGtleT17aXRlbS5pZH0gYWN0aXZlPXtpc0FjdGl2ZWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN5c3RlbUNoYW5nZShpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICB1c2VNYXBXaWRnZXRJZD17dXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXtvbkFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSZWFjdFJlc2l6ZURldGVjdG9yXHJcbiAgICAgICAgaGFuZGxlV2lkdGhcclxuICAgICAgICBoYW5kbGVIZWlnaHRcclxuICAgICAgICBvblJlc2l6ZT17ZGVib3VuY2VPblJlc2l6ZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=