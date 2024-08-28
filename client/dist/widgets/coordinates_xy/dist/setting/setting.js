System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/basic/list-tree","jimu-arcgis","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_list_tree__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_list_tree__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_list_tree__[key] = module[key];
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/application/click.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/click.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5m-9 0a3.5 3.5 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5M15.5 11l-5 1-3 4-1-9.5zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/close.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/close.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/suggested/info.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/suggested/info.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/suggested/warning.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/suggested/warning.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/application/click.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/application/click.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickOutlined: () => (/* binding */ ClickOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_click_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/click.svg */ "./jimu-icons/svg/outlined/application/click.svg");
/* harmony import */ var _svg_outlined_application_click_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_click_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ClickOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_click_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/suggested/info.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/outlined/suggested/info.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoOutlined: () => (/* binding */ InfoOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/suggested/info.svg */ "./jimu-icons/svg/outlined/suggested/info.svg");
/* harmony import */ var _svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const InfoOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/suggested/warning.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/suggested/warning.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningOutlined: () => (/* binding */ WarningOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/suggested/warning.svg */ "./jimu-icons/svg/outlined/suggested/warning.svg");
/* harmony import */ var _svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const WarningOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
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

/***/ "./your-extensions/widgets/coordinates_xy/src/setting/style.ts":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/setting/style.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPanelStyle: () => (/* binding */ getPanelStyle),
/* harmony export */   getSettingStyle: () => (/* binding */ getSettingStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getPanelStyle(theme) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .system-config-panel {
      .wkid-link {
        cursor: pointer;
        color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.sys.color.primary.light, 0.8)};
        padding: 3px 2px;
        font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(12)};
        text-decoration: none;
        &:hover {
          color: ${theme.sys.color.primary.light};
        }
      }
      .system-name {
        font-style: italic;
        font-size: 12px;
        color: ${theme.ref.palette.neutral[1000]};
        margin-top: 5px;
        .invalid-tips {
          width: calc(100% - 20px);
          margin: 0 4px;
          color: ${theme.sys.color.error.main}
        }
      }
      .tip-text {
        margin: 8px 0;
      }
    }
  `;
}
function getSettingStyle(theme) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .empty-placeholder {
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: calc(100% - 255px);
      overflow: hidden;
      .empty-placeholder-inner {
        padding: 0px 20px;
        flex-direction: column;
        align-items: center;
        display: flex;
        .empty-placeholder-text {
          color: ${theme.ref.palette.neutral[1000]};
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)};
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon {
          color: ${theme.ref.palette.neutral[800]};
        }
      }
    }
    .arrange-style-container {
      .arrange_container {
        margin-top: 10px;
        display: flex;
        .jimu-btn {
          padding: 0;
          background: ${theme.ref.palette.neutral[300]};
          &.active {
            border: 2px solid ${theme.sys.color.primary.light};
          }
        }
      }
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/setting/system-config.tsx":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/setting/system-config.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemConfig: () => (/* binding */ SystemConfig)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/coordinates_xy/src/setting/translations/default.ts");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/suggested/info */ "./jimu-icons/outlined/suggested/info.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/coordinates_xy/src/config.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-icons/outlined/suggested/warning */ "./jimu-icons/outlined/suggested/warning.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./your-extensions/widgets/coordinates_xy/src/setting/style.ts");
/** @jsx jsx */










const { useState, useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const SystemConfig = (props) => {
    const { id, name, wkid, displayUnit, elevationUnit, datumWkid, datumName, datumWkid2, datumName2, mapInfo, mapInfo2, mapView, theme, wkidUtils, allDataLoaded, multiOptionsChange, onWkidChangeSave } = props;
    // state
    const [apiLoaded, setApiLoaded] = useState(false);
    const [datumStatus, setDatumStatus] = useState(false);
    const [datum2Status, setDatum2Status] = useState(false);
    const [curWkid, setCurWkid] = useState(wkid);
    const [curDatumWkid, setCurDatumWkid] = useState(datumWkid);
    const [curDatumWkid2, setCurDatumWkid2] = useState(datumWkid2);
    const [wkidInvalid, setWkidInvalid] = useState(false);
    const [datumWkidInvalid, setDatumWkidInvalid] = useState(false);
    const [datumWkid2Invalid, setDatumWkid2Invalid] = useState(false);
    // translate
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const outputCoordinateHint = translate('outputCoordinateHint');
    const datumTransformationHint = translate('datumTransformationHint');
    const displayUnitsLabel = translate('displayUnits');
    const elevationUnitLabel = translate('elevationUnit');
    const elevationHint = translate('elevationHint');
    const invalidWkidTips = translate('invalidWkidTips');
    const invalidDatumWkidTips = translate('invalidDatumWkidTips');
    const elevMeter = translate('elevMeter');
    const elevMile = translate('elevMile');
    // units translate
    const unitDefault = translate('default');
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
    // global variabl
    const spatialReferenceRef = useRef(null);
    const helpUrl = 'https://developers.arcgis.com/rest/services-reference/enterprise/using-spatial-references.htm';
    useEffect(() => {
        if (!apiLoaded) {
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.loadArcGISJSAPIModules)([
                'esri/geometry/SpatialReference'
            ]).then(modules => {
                [spatialReferenceRef.current] = modules;
                setApiLoaded(true);
            });
        }
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        setCurWkid(wkid);
        setCurDatumWkid(datumWkid);
        setCurDatumWkid2(datumWkid2);
        if (apiLoaded) {
            checkMapSupportDatum(wkid);
        }
        // eslint-disable-next-line
    }, [apiLoaded, wkid, datumWkid, mapInfo, mapInfo2, wkidUtils]);
    const wkidChange = (value) => {
        setCurWkid(value);
    };
    const checkMapSupportDatum = (wkid) => {
        const map1Wkid = mapInfo === null || mapInfo === void 0 ? void 0 : mapInfo.wkid;
        const map2Wkid = mapInfo2 === null || mapInfo2 === void 0 ? void 0 : mapInfo2.wkid;
        const SRConstructors = spatialReferenceRef.current;
        if (!wkidUtils)
            return;
        const { isSameSpheroid } = wkidUtils;
        if (wkid) {
            const outputSr = new SRConstructors({ wkid: wkid });
            // only one map view
            if (map1Wkid && !map2Wkid) {
                const mapSr = new SRConstructors({ wkid: map1Wkid });
                if (!isSameSpheroid(outputSr, mapSr)) {
                    setDatumStatus(true);
                }
                else {
                    setDatumStatus(false);
                }
            }
            else if (map1Wkid && map2Wkid) {
                const map1Sr = new SRConstructors({ wkid: map1Wkid });
                const map2Sr = new SRConstructors({ wkid: map2Wkid });
                const map1EqualMap2 = isSameSpheroid(map1Sr, map2Sr);
                const map1EqualOutput = isSameSpheroid(map1Sr, outputSr);
                const map2EqualOutput = isSameSpheroid(map2Sr, outputSr);
                // map1Sr != map2Sr
                if (!map1EqualMap2) {
                    if (!map1EqualOutput && map2EqualOutput) {
                        setDatumStatus(true);
                        setDatum2Status(false);
                    }
                    else if (!map2EqualOutput && map1EqualOutput) {
                        setDatumStatus(false);
                        setDatum2Status(true);
                    }
                    else {
                        setDatumStatus(true);
                        setDatum2Status(true);
                    }
                }
                else { // map1Sr = map2Sr
                    if (map1EqualOutput) {
                        setDatumStatus(false);
                        setDatum2Status(false);
                    }
                    else {
                        setDatumStatus(true);
                        setDatum2Status(false);
                    }
                }
            }
        }
    };
    const wkidAccept = (value) => {
        if (!wkidInvalid && (wkid === value))
            return;
        if (!wkidUtils)
            return;
        const { wkidLookup, isValidWkid } = wkidUtils;
        const newWkid = value === '' ? wkid : value;
        const isValid = isValidWkid(newWkid);
        const crs = wkidLookup(newWkid);
        const label = crs === null || crs === void 0 ? void 0 : crs.name;
        // new system
        if (!id) {
            if (isValid) {
                setWkidInvalid(false);
                onWkidChangeSave(newWkid, crs);
            }
            else {
                setWkidInvalid(true);
            }
            return;
        }
        // edit system
        if (isValid) {
            setWkidInvalid(false);
            // check whether support datum
            checkMapSupportDatum(newWkid);
            setCurWkid(newWkid);
            multiOptionsChange({
                wkid: newWkid,
                name: label,
                crs,
                displayUnit: '',
                datumWkid: '',
                datumName: '',
                datumWkid2: '',
                datumName2: ''
            });
        }
        else { // invalid
            setWkidInvalid(true);
        }
    };
    const datumWkidChange = (event) => {
        setCurDatumWkid(event.target.value);
    };
    const datumWkid2Change = (event) => {
        setCurDatumWkid2(event.target.value);
    };
    const datumWkidAccept = (value) => {
        if (datumWkid === value)
            return;
        const newDatumWkid = value;
        const { isValidDatumWkid, getDatumSRLabel } = wkidUtils;
        if (isValidDatumWkid(newDatumWkid)) {
            setDatumWkidInvalid(false);
            const label = getDatumSRLabel(newDatumWkid);
            multiOptionsChange({
                datumWkid: newDatumWkid,
                datumName: label
            });
        }
        else { // invalid
            setDatumWkidInvalid(true);
            multiOptionsChange({
                datumWkid: '',
                datumName: ''
            });
        }
    };
    const datumWkid2Accept = (value) => {
        if (datumWkid === value)
            return;
        const newDatumWkid = value;
        const { isValidDatumWkid, getDatumSRLabel } = wkidUtils;
        if (isValidDatumWkid(newDatumWkid)) {
            setDatumWkid2Invalid(false);
            const label = getDatumSRLabel(newDatumWkid);
            multiOptionsChange({
                datumWkid2: newDatumWkid,
                datumName2: label
            });
        }
        else { // invalid
            setDatumWkid2Invalid(true);
            multiOptionsChange({
                datumWkid2: '',
                datumName2: ''
            });
        }
    };
    const handleUnitChange = (event) => {
        const newUnit = event.target.value;
        if (displayUnit === newUnit)
            return;
        multiOptionsChange({ displayUnit: newUnit });
    };
    const getUnitOptions = () => {
        var _a, _b;
        const allUnits = [
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'Default', value: '' }, unitDefault),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'INCHES', value: 'INCHES' }, unitInches),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'FOOT', value: 'FOOT' }, unitFoot),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'FOOT_US', value: 'FOOT_US' }, unitFootUs),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'YARDS', value: 'YARDS' }, unitYards),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'MILES', value: 'MILES' }, unitMiles),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'NAUTICAL_MILES', value: 'NAUTICAL_MILES' }, unitNauticalMiles),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'MILLIMETERS', value: 'MILLIMETERS' }, unitMillimeters),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'CENTIMETERS', value: 'CENTIMETERS' }, unitCentimeters),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'METER', value: 'METER' }, unitMeters),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'KILOMETERS', value: 'KILOMETERS' }, unitKilometers),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'DECIMETERS', value: 'DECIMETERS' }, unitDecimeters),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'DECIMAL_DEGREES', value: 'DECIMAL_DEGREES' }, unitDD),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'DEGREES_DECIMAL_MINUTES', value: 'DEGREES_DECIMAL_MINUTES' }, unitDDM),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'DEGREE_MINUTE_SECONDS', value: 'DEGREE_MINUTE_SECONDS' }, unitDMS),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'MGRS', value: 'MGRS' }, unitMgrs),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'USNG', value: 'USNG' }, unitUsng)
        ];
        const geographicUnits = [(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: 'Default', value: '' }, unitDefault)].concat(allUnits.slice(12));
        const projectUnits = allUnits.slice(0, 12);
        const curWkidNum = parseInt(curWkid);
        const SRConstructors = spatialReferenceRef.current;
        if (!SRConstructors)
            return allUnits;
        const sr = new SRConstructors({ wkid: curWkidNum });
        if (curWkidNum === ((_b = (_a = mapView === null || mapView === void 0 ? void 0 : mapView.view) === null || _a === void 0 ? void 0 : _a.spatialReference) === null || _b === void 0 ? void 0 : _b.wkid)) { // realtime
            const isSpecialCS = sr.isWebMercator;
            if (isSpecialCS) {
                return allUnits;
            }
            else if (curWkidNum === 4326 || sr.isGeographic) {
                return geographicUnits;
            }
            else {
                return projectUnits;
            }
        }
        else if (sr.isGeographic) {
            return geographicUnits;
        }
        return allUnits;
    };
    const wkidLink = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Link, { className: 'wkid-link jimu-outline-inside', icon: true, to: helpUrl, target: '_blank', title: 'WKID', "aria-label": 'WKID' }, 'WKID'));
    const outputSystemTip = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'p-1 d-flex justify-content-between' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'tip-text' }, translate('outputCoordinate', { wkid: wkidLink })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: outputCoordinateHint, showArrow: true, placement: 'left' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { icon: true, type: 'tertiary', className: 'd-inline jimu-outline-inside' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_4__.InfoOutlined, null))))));
    const displayUnitsTip = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'p-1 d-flex justify-content-between' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'tip-text' }, elevationUnitLabel),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: elevationHint, showArrow: true, placement: 'left' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { icon: true, type: 'tertiary', className: 'd-inline jimu-outline-inside' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_4__.InfoOutlined, null))))));
    const datumTip = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'p-1 d-flex justify-content-between' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'tip-text' }, translate('datumTransformation', { wkid: wkidLink })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: datumTransformationHint, showArrow: true, placement: 'left' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { icon: true, type: 'tertiary', className: 'd-inline jimu-outline-inside' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_4__.InfoOutlined, null))))));
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100', css: (0,_style__WEBPACK_IMPORTED_MODULE_9__.getPanelStyle)(theme) },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 system-config-panel' }, allDataLoaded
            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'pt-0' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: outputSystemTip, truncateLabel: false },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: 'sm', className: 'w-100', value: curWkid, precision: 0, min: 0, onChange: wkidChange, onAcceptValue: wkidAccept, showHandlers: false, "aria-describedby": 'output-system-name', "aria-label": translate('outputCoordinate', { wkid: 'WKID' }) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: 'output-system-name', className: 'text-break system-name d-flex align-items-center' }, wkidInvalid
                        ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_7__.WarningOutlined, { color: theme.sys.color.error.main }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'invalid-tips' }, invalidWkidTips))
                        : name)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: displayUnitsLabel },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: 'sm', value: displayUnit, onChange: handleUnitChange, "aria-label": displayUnitsLabel, disabled: !curWkid || wkidInvalid }, getUnitOptions())),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: displayUnitsTip, truncateLabel: false },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { role: 'radiogroup', className: 'mb-4', "aria-label": elevationUnitLabel },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'd-flex align-items-center' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, name: 'displayOrderType', className: 'mr-2', checked: elevationUnit === _config__WEBPACK_IMPORTED_MODULE_5__.ElevationUnitType.metric, onChange: () => { multiOptionsChange({ elevationUnit: _config__WEBPACK_IMPORTED_MODULE_5__.ElevationUnitType.metric }); }, disabled: !curWkid || wkidInvalid }),
                                elevMeter),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'd-flex align-items-center' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, name: 'displayOrderType', className: 'mr-2', checked: elevationUnit === _config__WEBPACK_IMPORTED_MODULE_5__.ElevationUnitType.imperial, onChange: () => { multiOptionsChange({ elevationUnit: _config__WEBPACK_IMPORTED_MODULE_5__.ElevationUnitType.imperial }); }, disabled: !curWkid || wkidInvalid }),
                                elevMile)))),
                (datumStatus || datum2Status) &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: datumTip, truncateLabel: false }),
                        datumStatus &&
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null,
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', className: 'mt-4' },
                                    datumStatus && datum2Status &&
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, mapInfo === null || mapInfo === void 0 ? void 0 : mapInfo.title),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: 'sm', className: 'w-100', value: curDatumWkid, precision: 0, min: 0, onChange: datumWkidChange, onAcceptValue: datumWkidAccept, showHandlers: false, "aria-describedby": 'datum-transformation-1', "aria-label": translate('datumTransformation', { wkid: 'WKID' }), disabled: !curWkid || wkidInvalid })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: 'datum-transformation-1', className: 'text-break system-name d-flex align-items-center' }, datumWkidInvalid
                                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null,
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_7__.WarningOutlined, { color: theme.sys.color.error.main }),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'invalid-tips' }, invalidDatumWkidTips))
                                    : datumName)),
                        datum2Status &&
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null,
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', className: 'mt-4' },
                                    datumStatus && datum2Status &&
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, mapInfo2 === null || mapInfo2 === void 0 ? void 0 : mapInfo2.title),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: 'sm', className: 'w-100', value: curDatumWkid2, precision: 0, min: 0, onChange: datumWkid2Change, onAcceptValue: datumWkid2Accept, showHandlers: false, "aria-describedby": 'datum-transformation-2', "aria-label": translate('datumTransformation', { wkid: 'WKID' }), disabled: !curWkid || wkidInvalid })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: 'datum-transformation-2', className: 'text-break system-name d-flex align-items-center' }, datumWkid2Invalid
                                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null,
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_7__.WarningOutlined, { color: theme.sys.color.error.main }),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'invalid-tips' }, invalidDatumWkidTips))
                                    : datumName2))))
            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingType.Secondary }))));
};


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/setting/translations/default.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/setting/translations/default.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    modern: 'Modern',
    outputCoorSystem: 'Output coordinate system',
    outputCoordinate: 'Output coordinate system well-known ID ({wkid})',
    outputCoordinateHint: 'Geographic coordinate systems and Projected coordinate systems are supported.',
    newCoordinate: 'New coordinate system',
    configureCoordinate: 'Configure coordinate system',
    displayOptions: 'Display options',
    coordinateDecimal: 'Number of decimal places for coordinates',
    altitudeDecimal: 'Number of decimal places for altitude (3D)',
    showSeparators: 'Show thousand separators',
    showElevation: 'Show elevation',
    displayOrder: 'Display order',
    loLaMode: 'Longitude/Latitude (X, Y)',
    laLoMode: 'Latitude/Longitude (Y, X)',
    datumTransformation: 'Datum transformation ID ({wkid})',
    datumTransformationHint: 'Geographic datum transformations are supported.',
    displayUnits: 'Display units',
    elevationUnit: 'Elevation unit (3D)',
    elevationHint: 'Specify the unit for elevations for 3D scenes if available.',
    elevMeter: 'Metric',
    elevMile: 'Imperial',
    invalidWkidTips: 'Please enter a valid coordinate system WKID.',
    invalidDatumWkidTips: 'Please enter a valid datum transformation ID.',
    selectMapTips: 'Select a map for further configurations.'
});


/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/setting/assets/style-coordinate-classic.svg":
/*!************************************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/setting/assets/style-coordinate-classic.svg ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTA4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iMjYiIHdpZHRoPSI5MiIgaGVpZ2h0PSIyMCIgZmlsbD0iIzI4MjgyOCIvPg0KPHJlY3QgeD0iMTIiIHk9IjMwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIzMyIgeT0iMzMiIHdpZHRoPSI0MiIgaGVpZ2h0PSI2IiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSI3OSIgeT0iMzAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSIyOCIgeT0iMzAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSI4NCIgeT0iMzAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiM2QTZBNkEiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./your-extensions/widgets/coordinates_xy/src/setting/assets/style-coordinate-modern.svg":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/setting/assets/style-coordinate-modern.svg ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTA4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjU2IiBmaWxsPSIjMjgyODI4Ii8+DQo8cmVjdCB4PSIxMyIgeT0iNDIiIHdpZHRoPSI4MSIgaGVpZ2h0PSIxIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSIyOSIgeT0iNTIiIHdpZHRoPSIxOCIgaGVpZ2h0PSIzIiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIxMyIgeT0iNDgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjEzIiB5PSIxNiIgd2lkdGg9IjYxIiBoZWlnaHQ9IjQiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjEzIiB5PSIyOCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjgyIiB5PSI0OCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iIzZBNkE2QSIvPg0KPC9zdmc+DQo="

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

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/basic/list-tree":
/*!******************************************!*\
  !*** external "jimu-ui/basic/list-tree" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_list_tree__;

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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/coordinates_xy/src/setting/setting.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/coordinates_xy/src/config.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/coordinates_xy/src/setting/translations/default.ts");
/* harmony import */ var jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-ui/basic/list-tree */ "jimu-ui/basic/list-tree");
/* harmony import */ var jimu_icons_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-icons/svg/outlined/editor/close.svg */ "./jimu-icons/svg/outlined/editor/close.svg");
/* harmony import */ var jimu_icons_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _system_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system-config */ "./your-extensions/widgets/coordinates_xy/src/setting/system-config.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_icons_outlined_application_click__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jimu-icons/outlined/application/click */ "./jimu-icons/outlined/application/click.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style */ "./your-extensions/widgets/coordinates_xy/src/setting/style.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/** @jsx jsx */













const { useState, useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const coordinateSystemDefault = {
    id: '',
    name: '',
    wkid: '',
    displayUnit: '',
    elevationUnit: _config__WEBPACK_IMPORTED_MODULE_4__.ElevationUnitType.metric,
    datumWkid: '',
    datumName: ''
};
const Setting = (props) => {
    var _a;
    const { id, theme, onSettingChange, config: propConfig, useMapWidgetIds } = props;
    const { coordinateSystem, showSeparators, showElevation, coordinateDecimal, altitudeDecimal, displayOrder, widgetStyle, mapInfo, mapInfo2 } = propConfig;
    const sidePopperTrigger = useRef(null);
    // state
    const [showLayerPanel, setShowLayerPanel] = useState(false);
    const [popperFocusNode, setPopperFocusNode] = useState(null);
    const [mapView, setMapView] = useState(undefined);
    const [views, setViews] = useState(undefined);
    const [modulesLoaded, setModulesLoaded] = useState(false);
    const [allDataLoaded, setAllDataLoaded] = useState(false);
    // translate
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_5__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const selectMapWidget = translate('selectMapWidget');
    const classicType = translate('classic');
    const modernType = translate('modern');
    const outputCoorSystem = translate('outputCoorSystem');
    const newCoordinateSystem = translate('newCoordinate');
    const remove = translate('remove');
    const configureCoordinateSystem = translate('configureCoordinate');
    const displayOptions = translate('displayOptions');
    const coordinateDecimalLabel = translate('coordinateDecimal');
    const altitudeDecimalLabel = translate('altitudeDecimal');
    const showSeparatorsLabel = translate('showSeparators');
    const showElevationLabel = translate('showElevation');
    const displayOrderLabel = translate('displayOrder');
    const loLaMode = translate('loLaMode');
    const laLoMode = translate('laLoMode');
    const selectMapTips = translate('selectMapTips');
    const widgetStyleLabel = translate('style');
    // global variabl
    const panelIndex = useRef(undefined);
    const wkidUtilsRef = useRef(null);
    useEffect(() => {
        const useMap = (useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds.length) > 0;
        if (useMap && !modulesLoaded) {
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-core/wkid').then(module => {
                wkidUtilsRef.current = module;
                setModulesLoaded(true);
            });
        }
        // eslint-disable-next-line
    }, [useMapWidgetIds]);
    useEffect(() => {
        if (useMapWidgetIds && modulesLoaded)
            viewGroupSetMapInfo(views);
        // eslint-disable-next-line
    }, [modulesLoaded, views, useMapWidgetIds]);
    const viewGroupSetMapInfo = (views) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!views)
            return;
        const viewsKeys = Object.keys(views);
        if (viewsKeys.length > 0) {
            setAllDataLoaded(true);
            const { getSRLabel, getCSUnit } = wkidUtilsRef.current;
            const view1 = (_a = views === null || views === void 0 ? void 0 : views[viewsKeys[0]]) === null || _a === void 0 ? void 0 : _a.view;
            const view2 = (_b = views === null || views === void 0 ? void 0 : views[viewsKeys[1]]) === null || _b === void 0 ? void 0 : _b.view;
            const map1Wkid = (_c = view1 === null || view1 === void 0 ? void 0 : view1.spatialReference) === null || _c === void 0 ? void 0 : _c.wkid;
            const map2Wkid = (_d = view2 === null || view2 === void 0 ? void 0 : view2.spatialReference) === null || _d === void 0 ? void 0 : _d.wkid;
            const mapId = (_f = (_e = view1 === null || view1 === void 0 ? void 0 : view1.map) === null || _e === void 0 ? void 0 : _e.portalItem) === null || _f === void 0 ? void 0 : _f.id;
            const mapId2 = (_h = (_g = view2 === null || view2 === void 0 ? void 0 : view2.map) === null || _g === void 0 ? void 0 : _g.portalItem) === null || _h === void 0 ? void 0 : _h.id;
            if (mapId === (mapInfo === null || mapInfo === void 0 ? void 0 : mapInfo.id) && mapId2 === (mapInfo2 === null || mapInfo2 === void 0 ? void 0 : mapInfo2.id))
                return;
            const mapTitle = (_k = (_j = view1 === null || view1 === void 0 ? void 0 : view1.map) === null || _j === void 0 ? void 0 : _j.portalItem) === null || _k === void 0 ? void 0 : _k.title;
            const mapTitle2 = (_m = (_l = view2 === null || view2 === void 0 ? void 0 : view2.map) === null || _l === void 0 ? void 0 : _l.portalItem) === null || _m === void 0 ? void 0 : _m.title;
            onMultiSettingChange({
                mapInfo: { id: mapId, title: mapTitle, wkid: map1Wkid, label: getSRLabel(map1Wkid), csUnit: getCSUnit(map1Wkid) },
                mapInfo2: { id: mapId2, title: mapTitle2, wkid: map2Wkid, label: getSRLabel(map2Wkid), csUnit: getCSUnit(map2Wkid) }
            });
        }
    };
    const onMultiSettingChange = (updateOptions) => {
        const newConfig = propConfig.set('mapInfo', updateOptions.mapInfo).set('mapInfo2', updateOptions.mapInfo2);
        const config = { id, config: newConfig };
        onSettingChange(config);
    };
    const onMapWidgetSelected = (useMapWidgetIds) => {
        onSettingChange({ id, useMapWidgetIds });
    };
    const onCloseLayerPanel = () => {
        setShowLayerPanel(false);
        panelIndex.current = undefined;
    };
    const setSidePopperAnchor = (index, newAdded = false) => {
        let node;
        if (newAdded) {
            node = sidePopperTrigger.current.getElementsByClassName('add-table-btn')[0];
        }
        else {
            node = sidePopperTrigger.current.getElementsByClassName('jimu-tree-item__body')[index];
        }
        setPopperFocusNode(node);
    };
    const onShowLayerPanel = (index, newAdded = false) => {
        setSidePopperAnchor(index, newAdded);
        if (index === panelIndex.current) {
            setShowLayerPanel(!showLayerPanel);
            panelIndex.current = undefined;
        }
        else {
            setShowLayerPanel(true);
            panelIndex.current = index;
        }
    };
    const onWkidChangeSave = (newWkid, crs) => {
        const itemsLength = coordinateSystem.length;
        if (itemsLength === panelIndex.current) {
            addNewSystem(newWkid, crs);
        }
    };
    const getArrayMaxId = () => {
        const numbers = coordinateSystem.map(systemConfig => {
            var _a;
            return (_a = systemConfig.id) === null || _a === void 0 ? void 0 : _a.split('-').reverse()[0];
        });
        return numbers.length > 0 ? Math.max.apply(null, numbers) : 0;
    };
    const getNewConfigId = () => {
        const index = coordinateSystem.length > 0
            ? getArrayMaxId()
            : 0;
        return `system-${index + 1}`;
    };
    const addNewSystem = (newWkid, crs, elevationUnit) => {
        var _a;
        const newConfigId = getNewConfigId();
        const systemItem = {
            id: newConfigId,
            name: (_a = crs === null || crs === void 0 ? void 0 : crs.name) !== null && _a !== void 0 ? _a : newConfigId,
            wkid: newWkid,
            crs,
            displayUnit: '',
            elevationUnit: _config__WEBPACK_IMPORTED_MODULE_4__.ElevationUnitType.metric,
            datumWkid: '',
            datumName: ''
        };
        const currentLayer = coordinateSystem[panelIndex.current];
        let systemItems;
        if (currentLayer) {
            // update config, reset other opts for current config
            const _conf = coordinateSystem.asMutable({ deep: true });
            _conf.splice(panelIndex.current, 1, systemItem);
            systemItems = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(_conf);
        }
        else {
            // add new config
            systemItems = coordinateSystem.concat([
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(systemItem)
            ]);
        }
        onPropertyChange('coordinateSystem', systemItems);
    };
    const removeSystem = (index) => {
        if (panelIndex.current === index) {
            onCloseLayerPanel();
        }
        // del current filter item
        const _system = propConfig.coordinateSystem.asMutable({ deep: true });
        _system.splice(index, 1);
        onPropertyChange('coordinateSystem', _system);
        if (panelIndex.current > index) {
            panelIndex.current--;
        }
        jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.builderAppSync.publishChangeWidgetStatePropToApp({
            widgetId: id,
            propKey: 'removeLayerFlag',
            value: true
        });
    };
    const onItemUpdated = (parentItemJson, currentIndex) => {
        const newSystemConfigs = parentItemJson.map(item => {
            return item.itemStateDetailContent;
        });
        onPropertyChange('coordinateSystem', newSystemConfigs);
    };
    const handleCoordinateDecimal = (valueInt) => {
        onPropertyChange('coordinateDecimal', valueInt);
    };
    const handleAltitudeDecimal = (valueInt) => {
        onPropertyChange('altitudeDecimal', valueInt);
    };
    const onPropertyChange = (name, value) => {
        if (value === propConfig[name])
            return;
        const newConfig = propConfig.set(name, value);
        const newProps = { id, config: newConfig };
        onSettingChange(newProps);
    };
    const multiOptionsChangeSave = (updateOptions) => {
        const currentSystem = coordinateSystem[panelIndex.current];
        if (currentSystem) {
            const newConfig = propConfig.setIn(['coordinateSystem', panelIndex.current.toString()], Object.assign(Object.assign({}, currentSystem), updateOptions));
            const config = { id, config: newConfig };
            onSettingChange(config);
        }
    };
    const switchWidgetType = (type) => {
        if (type !== widgetStyle) {
            onPropertyChange('widgetStyle', type);
        }
    };
    const itemsLength = coordinateSystem.length;
    const useMap = (useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds.length) > 0;
    const advancedActionMap = {
        overrideItemBlockInfo: ({ itemBlockInfo }, refComponent) => {
            return {
                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItem,
                children: [{
                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItemDroppableContainer,
                        children: [{
                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItemDraggableContainer,
                                children: [{
                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItemBody,
                                        children: [{
                                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItemMainLine,
                                                children: [{
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItemDragHandle
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItemIcon,
                                                        autoCollapsed: true
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItemTitle
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.TreeItemActionType.RenderOverrideItemCommands
                                                    }]
                                            }]
                                    }]
                            }]
                    }]
            };
        }
    };
    const onActiveViewChange = (jimuMapView) => {
        setMapView(jimuMapView);
    };
    const onViewsCreate = (views) => {
        setViews(views);
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-setting-coordinates jimu-widget-setting', css: (0,_style__WEBPACK_IMPORTED_MODULE_11__.getSettingStyle)(theme) },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { title: selectMapWidget },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: useMapWidgetIds, "aria-describedby": 'coordinates-blank-msg' }))),
        !useMap &&
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'empty-placeholder w-100' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'empty-placeholder-inner' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'empty-placeholder-icon' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_click__WEBPACK_IMPORTED_MODULE_10__.ClickOutlined, { size: 48 })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'empty-placeholder-text', id: 'coordinates-blank-msg' }, selectMapTips))),
        useMap &&
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'arrange-style-container', title: widgetStyleLabel, role: 'group', "aria-label": widgetStyleLabel },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { className: 'arrange_container' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { title: classicType, placement: 'bottom' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: () => { switchWidgetType(_config__WEBPACK_IMPORTED_MODULE_4__.WidgetStyleType.classic); }, icon: true, size: 'sm', type: 'tertiary', active: widgetStyle === _config__WEBPACK_IMPORTED_MODULE_4__.WidgetStyleType.classic, "aria-pressed": widgetStyle === _config__WEBPACK_IMPORTED_MODULE_4__.WidgetStyleType.classic },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { autoFlip: true, width: 109, height: 70, icon: __webpack_require__(/*! ./assets/style-coordinate-classic.svg */ "./your-extensions/widgets/coordinates_xy/src/setting/assets/style-coordinate-classic.svg") }))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { title: modernType, placement: 'bottom' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: () => { switchWidgetType(_config__WEBPACK_IMPORTED_MODULE_4__.WidgetStyleType.modern); }, className: 'ml-2', icon: true, size: 'sm', type: 'tertiary', active: widgetStyle === _config__WEBPACK_IMPORTED_MODULE_4__.WidgetStyleType.modern, "aria-pressed": widgetStyle === _config__WEBPACK_IMPORTED_MODULE_4__.WidgetStyleType.modern },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { autoFlip: true, width: 109, height: 70, icon: __webpack_require__(/*! ./assets/style-coordinate-modern.svg */ "./your-extensions/widgets/coordinates_xy/src/setting/assets/style-coordinate-modern.svg") }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { title: outputCoorSystem, role: 'group', "aria-label": outputCoorSystem },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: sidePopperTrigger },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { className: 'w-100 text-default add-table-btn', type: 'primary', onClick: () => {
                                    onShowLayerPanel(itemsLength, true);
                                }, title: newCoordinateSystem },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 px-2 text-truncate' }, newCoordinateSystem))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'setting-ui-unit-list w-100' },
                                !!itemsLength &&
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.List, Object.assign({ className: 'setting-ui-unit-list-exsiting', itemsJson: Array.from(coordinateSystem).map((item, index) => ({
                                            itemStateDetailContent: item,
                                            itemKey: `${index}`,
                                            itemStateTitle: item.name,
                                            itemStateChecked: index === panelIndex.current,
                                            itemStateCommands: [
                                                {
                                                    label: remove,
                                                    iconProps: () => ({ icon: (jimu_icons_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_7___default()), size: 12 }),
                                                    action: () => {
                                                        removeSystem(index);
                                                    }
                                                }
                                            ]
                                        })), dndEnabled: true, onUpdateItem: (actionData, refComponent) => {
                                            const { itemJsons } = refComponent.props;
                                            const [currentItemJson, parentItemJson] = itemJsons;
                                            onItemUpdated(parentItemJson, +currentItemJson.itemKey);
                                        }, onClickItemBody: (actionData, refComponent) => {
                                            const { itemJsons: [currentItemJson] } = refComponent.props;
                                            onShowLayerPanel(+currentItemJson.itemKey);
                                        } }, advancedActionMap)),
                                itemsLength === panelIndex.current && showLayerPanel &&
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_6__.List, Object.assign({ className: 'setting-ui-unit-list-new', itemsJson: [{
                                                name: '......'
                                            }].map((item, x) => ({
                                            itemStateDetailContent: item,
                                            itemKey: `${panelIndex.current}`,
                                            itemStateChecked: true,
                                            itemStateTitle: item.name,
                                            itemStateCommands: []
                                        })), dndEnabled: false, renderOverrideItemDetailToggle: () => '' }, advancedActionMap)))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { title: displayOptions, role: 'group', "aria-label": displayOptions },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: coordinateDecimalLabel },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: 'sm', value: coordinateDecimal, precision: 0, min: 0, max: 10, onChange: handleCoordinateDecimal, "aria-label": coordinateDecimalLabel, className: 'w-100' })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: showElevationLabel },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { className: 'can-x-switch', checked: showElevation, "data-key": 'showElevation', onChange: evt => {
                                onPropertyChange('showElevation', evt.target.checked);
                            }, "aria-label": showElevationLabel })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: altitudeDecimalLabel },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: 'sm', value: altitudeDecimal, precision: 0, min: 0, max: 10, onChange: handleAltitudeDecimal, "aria-label": altitudeDecimalLabel, className: 'w-100' })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: showSeparatorsLabel },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { className: 'can-x-switch', checked: showSeparators, "data-key": 'showSeparators', onChange: evt => {
                                onPropertyChange('showSeparators', evt.target.checked);
                            }, "aria-label": showSeparatorsLabel })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: displayOrderLabel },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { role: 'radiogroup', className: 'mb-4', "aria-label": displayOrderLabel },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { className: 'd-flex align-items-center' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Radio, { style: { cursor: 'pointer' }, name: 'displayOrderType', className: 'mr-2', checked: displayOrder === _config__WEBPACK_IMPORTED_MODULE_4__.DisplayOrderType.xy, onChange: () => { onPropertyChange('displayOrder', _config__WEBPACK_IMPORTED_MODULE_4__.DisplayOrderType.xy); } }),
                                loLaMode),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { className: 'd-flex align-items-center' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Radio, { style: { cursor: 'pointer' }, name: 'displayOrderType', className: 'mr-2', checked: displayOrder === _config__WEBPACK_IMPORTED_MODULE_4__.DisplayOrderType.yx, onChange: () => { onPropertyChange('displayOrder', _config__WEBPACK_IMPORTED_MODULE_4__.DisplayOrderType.yx); } }),
                                laLoMode))))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_12__.JimuMapViewComponent, { useMapWidgetId: useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds[0], onActiveViewChange: onActiveViewChange, onViewsCreate: onViewsCreate }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SidePopper, { position: 'right', title: configureCoordinateSystem, isOpen: showLayerPanel && !jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAppIdPageIdFromUrl().pageId, toggle: onCloseLayerPanel, trigger: sidePopperTrigger === null || sidePopperTrigger === void 0 ? void 0 : sidePopperTrigger.current, backToFocusNode: popperFocusNode },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_system_config__WEBPACK_IMPORTED_MODULE_8__.SystemConfig, Object.assign({}, ((_a = coordinateSystem.asMutable({ deep: true })[panelIndex.current]) !== null && _a !== void 0 ? _a : coordinateSystemDefault), { allDataLoaded: allDataLoaded, useMapWidgetIds: useMapWidgetIds, theme: theme, multiOptionsChange: multiOptionsChangeSave, onWkidChangeSave: onWkidChangeSave, onClose: onCloseLayerPanel, mapView: mapView, wkidUtils: wkidUtilsRef.current, mapInfo: mapInfo, mapInfo2: mapInfo2 })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb29yZGluYXRlc194eS9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBRWE7QUFFbkQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDeEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsNEVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRVU7QUFFaEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJ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LENBQ1MsQ0FDVCxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE9BQU87QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jbGljay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL3N1Z2dlc3RlZC9pbmZvLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvc3VnZ2VzdGVkL3dhcm5pbmcuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2NsaWNrLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mby50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvc3VnZ2VzdGVkL3dhcm5pbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb29yZGluYXRlc194eS9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb29yZGluYXRlc194eS9zcmMvc2V0dGluZy9zdHlsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29vcmRpbmF0ZXNfeHkvc3JjL3NldHRpbmcvc3lzdGVtLWNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2Nvb3JkaW5hdGVzX3h5L3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb29yZGluYXRlc194eS9zcmMvc2V0dGluZy9hc3NldHMvc3R5bGUtY29vcmRpbmF0ZS1jbGFzc2ljLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29vcmRpbmF0ZXNfeHkvc3JjL3NldHRpbmcvYXNzZXRzL3N0eWxlLWNvb3JkaW5hdGUtbW9kZXJuLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1mb3ItYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvbGlzdC10cmVlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2Nvb3JkaW5hdGVzX3h5L3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMiA2LjVjMCAuNTI3LS4wNzQgMS4wMzYtLjIxMiAxLjUxOGwuOTEyLjQzOGE2LjUgNi41IDAgMSAwLTYuNTg2IDQuNTMzbC0uMDc3LTEuMDA4QTUuNSA1LjUgMCAxIDEgMTIgNi41bS05IDBhMy41IDMuNSAwIDAgMCAyLjg4IDMuNDQ1TDUuOCA4LjkwMWEyLjUwMSAyLjUwMSAwIDEgMSAzLjE5NC0yLjIyNGwuOTQ5LjQ1NkEzLjUgMy41IDAgMSAwIDMgNi41TTE1LjUgMTFsLTUgMS0zIDQtMS05LjV6bS01LjU3LjA5NC0xLjcwMiAyLjI2OS0uNTQyLTUuMTUyIDQuNzYgMi4zOHpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIm04Ljc0NSA4IDYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0NS43NDZMOCA4Ljc0NmwtNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ2LS43NDZsNi4xLTYuMS02LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYtLjc0Nmw2LjEgNi4xIDYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni43NDZ6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTggNS41YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMk02LjUgNy41QS41LjUgMCAwIDEgNyA3aDEuNXY0LjVoMWEuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxIDAtMWgxVjhIN2EuNS41IDAgMCAxLS41LS41XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOCAxNkE4IDggMCAxIDEgOCAwYTggOCAwIDAgMSAwIDE2bTAtMUE3IDcgMCAxIDAgOCAxYTcgNyAwIDAgMCAwIDE0XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk04IDIuMTI1IDE0LjMzNCAxNEgxLjY2N3ptLS44ODItLjQ3YTEgMSAwIDAgMSAxLjc2NSAwbDYuMzMzIDExLjg3NEExIDEgMCAwIDEgMTQuMzM0IDE1SDEuNjY3YTEgMSAwIDAgMS0uODgyLTEuNDd6TTggNC44NzRhLjkwNS45MDUgMCAwIDAtLjkuOTk1bC4zNSAzLjUwN2EuNTUyLjU1MiAwIDAgMCAxLjEgMEw4LjkgNS44N2EuOTA1LjkwNSAwIDAgMC0uOS0uOTk1bTEgN2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jbGljay5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgQ2xpY2tPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mby5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgSW5mb091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL3N1Z2dlc3RlZC93YXJuaW5nLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBXYXJuaW5nT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGVudW0gRGlzcGxheU9yZGVyVHlwZSB7XHJcbiAgeHkgPSAnWFknLFxyXG4gIHl4ID0gJ1lYJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBXaWRnZXRTdHlsZVR5cGUge1xyXG4gIGNsYXNzaWMgPSAnQ0xBU1NJQycsXHJcbiAgbW9kZXJuID0gJ01PREVSTidcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRWxldmF0aW9uVW5pdFR5cGUge1xyXG4gIG1ldHJpYyA9ICdNRVRSSUMnLFxyXG4gIGltcGVyaWFsID0gJ0lNUEVSSUFMJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcEluZm8ge1xyXG4gIGlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgd2tpZDogc3RyaW5nXHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIGNzVW5pdDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0UmVjdCB7XHJcbiAgd2lkdGg6IG51bWJlclxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZUNvbmZpZyB7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHdraWQ6IHN0cmluZ1xyXG4gIGNycz86IGFueVxyXG4gIGRpc3BsYXlVbml0OiBzdHJpbmdcclxuICBlbGV2YXRpb25Vbml0PzogRWxldmF0aW9uVW5pdFR5cGVcclxuICBkYXR1bVdraWQ/OiBzdHJpbmdcclxuICBkYXR1bU5hbWU/OiBzdHJpbmdcclxuICBkYXR1bVdraWQyPzogc3RyaW5nXHJcbiAgZGF0dW1OYW1lMj86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgY29vcmRpbmF0ZVN5c3RlbTogSW1tdXRhYmxlQXJyYXk8Q29vcmRpbmF0ZUNvbmZpZz5cclxuICBjb29yZGluYXRlRGVjaW1hbDogbnVtYmVyXHJcbiAgYWx0aXR1ZGVEZWNpbWFsOiBudW1iZXJcclxuICBzaG93U2VwYXJhdG9yczogYm9vbGVhblxyXG4gIHNob3dFbGV2YXRpb246IGJvb2xlYW5cclxuICBkaXNwbGF5T3JkZXI6IERpc3BsYXlPcmRlclR5cGVcclxuICB3aWRnZXRTdHlsZTogV2lkZ2V0U3R5bGVUeXBlXHJcbiAgbWFwSW5mbz86IE1hcEluZm9cclxuICBtYXBJbmZvMj86IE1hcEluZm9cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxyXG4iLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYW5lbFN0eWxlICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gIHJldHVybiBjc3NgXHJcbiAgICAuc3lzdGVtLWNvbmZpZy1wYW5lbCB7XHJcbiAgICAgIC53a2lkLWxpbmsge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJHtwb2xpc2hlZC5yZ2JhKHRoZW1lLnN5cy5jb2xvci5wcmltYXJ5LmxpZ2h0LCAwLjgpfTtcclxuICAgICAgICBwYWRkaW5nOiAzcHggMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHtwb2xpc2hlZC5yZW0oMTIpfTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5zeXMuY29sb3IucHJpbWFyeS5saWdodH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zeXN0ZW0tbmFtZSB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS5uZXV0cmFsWzEwMDBdfTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgLmludmFsaWQtdGlwcyB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuc3lzLmNvbG9yLmVycm9yLm1haW59XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50aXAtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldHRpbmdTdHlsZSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzIHtcclxuICByZXR1cm4gY3NzYFxyXG4gICAgLmVtcHR5LXBsYWNlaG9sZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI1NXB4KTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmVtcHR5LXBsYWNlaG9sZGVyLWlubmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuZW1wdHktcGxhY2Vob2xkZXItdGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS5uZXV0cmFsWzEwMDBdfTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogJHtwb2xpc2hlZC5yZW0oMTQpfTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lbXB0eS1wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLm5ldXRyYWxbODAwXX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXJyYW5nZS1zdHlsZS1jb250YWluZXIge1xyXG4gICAgICAuYXJyYW5nZV9jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuamltdS1idG4ge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFszMDBdfTtcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHt0aGVtZS5zeXMuY29sb3IucHJpbWFyeS5saWdodH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYFxyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIHR5cGUgSW1tdXRhYmxlQXJyYXksIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBMaW5rLCBTZWxlY3QsIFRvb2x0aXAsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11aURlZmF1bHRNZXNzYWdlcywgTGFiZWwsIFJhZGlvLCBCdXR0b24sIE51bWVyaWNJbnB1dCwgTG9hZGluZywgTG9hZGluZ1R5cGUgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IFNldHRpbmdSb3csIFNldHRpbmdTZWN0aW9uIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IEluZm9PdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvc3VnZ2VzdGVkL2luZm8nXHJcbmltcG9ydCB7IHR5cGUgQ29vcmRpbmF0ZUNvbmZpZywgRWxldmF0aW9uVW5pdFR5cGUsIHR5cGUgTWFwSW5mbyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgdHlwZSBKaW11TWFwVmlldywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBXYXJuaW5nT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL3N1Z2dlc3RlZC93YXJuaW5nJ1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXRQYW5lbFN0eWxlIH0gZnJvbSAnLi9zdHlsZSdcclxuXHJcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gPSBSZWFjdFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTeXN0ZW1Db25maWdQcm9wcyB7XHJcbiAgYWxsRGF0YUxvYWRlZDogYm9vbGVhblxyXG4gIHVzZU1hcFdpZGdldElkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPlxyXG4gIG1hcFZpZXc6IEppbXVNYXBWaWV3XHJcbiAgdGhlbWU6IElNVGhlbWVWYXJpYWJsZXNcclxuICB3a2lkVXRpbHM6IGFueVxyXG4gIG1hcEluZm86IE1hcEluZm9cclxuICBtYXBJbmZvMjogTWFwSW5mb1xyXG4gIG11bHRpT3B0aW9uc0NoYW5nZTogKHVwZGF0ZU9wdGlvbnM6IGFueSkgPT4gdm9pZFxyXG4gIG9uV2tpZENoYW5nZVNhdmU6IChuZXdXa2lkOiBzdHJpbmcsIGNyczogYW55KSA9PiB2b2lkXHJcbiAgb25DbG9zZT86ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN5c3RlbUNvbmZpZyA9IChwcm9wczogU3lzdGVtQ29uZmlnUHJvcHMgJiBDb29yZGluYXRlQ29uZmlnKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpZCwgbmFtZSwgd2tpZCwgZGlzcGxheVVuaXQsIGVsZXZhdGlvblVuaXQsIGRhdHVtV2tpZCwgZGF0dW1OYW1lLCBkYXR1bVdraWQyLCBkYXR1bU5hbWUyLFxyXG4gICAgbWFwSW5mbywgbWFwSW5mbzIsIG1hcFZpZXcsIHRoZW1lLCB3a2lkVXRpbHMsIGFsbERhdGFMb2FkZWQsIG11bHRpT3B0aW9uc0NoYW5nZSwgb25Xa2lkQ2hhbmdlU2F2ZVxyXG4gIH0gPSBwcm9wc1xyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGNvbnN0IFthcGlMb2FkZWQsIHNldEFwaUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZGF0dW1TdGF0dXMsIHNldERhdHVtU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtkYXR1bTJTdGF0dXMsIHNldERhdHVtMlN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW2N1cldraWQsIHNldEN1cldraWRdID0gdXNlU3RhdGUod2tpZClcclxuICBjb25zdCBbY3VyRGF0dW1Xa2lkLCBzZXRDdXJEYXR1bVdraWRdID0gdXNlU3RhdGUoZGF0dW1Xa2lkKVxyXG4gIGNvbnN0IFtjdXJEYXR1bVdraWQyLCBzZXRDdXJEYXR1bVdraWQyXSA9IHVzZVN0YXRlKGRhdHVtV2tpZDIpXHJcbiAgY29uc3QgW3draWRJbnZhbGlkLCBzZXRXa2lkSW52YWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZGF0dW1Xa2lkSW52YWxpZCwgc2V0RGF0dW1Xa2lkSW52YWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZGF0dW1Xa2lkMkludmFsaWQsIHNldERhdHVtV2tpZDJJbnZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIHRyYW5zbGF0ZVxyXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcywgamltdWlEZWZhdWx0TWVzc2FnZXMpXHJcbiAgY29uc3Qgb3V0cHV0Q29vcmRpbmF0ZUhpbnQgPSB0cmFuc2xhdGUoJ291dHB1dENvb3JkaW5hdGVIaW50JylcclxuICBjb25zdCBkYXR1bVRyYW5zZm9ybWF0aW9uSGludCA9IHRyYW5zbGF0ZSgnZGF0dW1UcmFuc2Zvcm1hdGlvbkhpbnQnKVxyXG4gIGNvbnN0IGRpc3BsYXlVbml0c0xhYmVsID0gdHJhbnNsYXRlKCdkaXNwbGF5VW5pdHMnKVxyXG4gIGNvbnN0IGVsZXZhdGlvblVuaXRMYWJlbCA9IHRyYW5zbGF0ZSgnZWxldmF0aW9uVW5pdCcpXHJcbiAgY29uc3QgZWxldmF0aW9uSGludCA9IHRyYW5zbGF0ZSgnZWxldmF0aW9uSGludCcpXHJcbiAgY29uc3QgaW52YWxpZFdraWRUaXBzID0gdHJhbnNsYXRlKCdpbnZhbGlkV2tpZFRpcHMnKVxyXG4gIGNvbnN0IGludmFsaWREYXR1bVdraWRUaXBzID0gdHJhbnNsYXRlKCdpbnZhbGlkRGF0dW1Xa2lkVGlwcycpXHJcbiAgY29uc3QgZWxldk1ldGVyID0gdHJhbnNsYXRlKCdlbGV2TWV0ZXInKVxyXG4gIGNvbnN0IGVsZXZNaWxlID0gdHJhbnNsYXRlKCdlbGV2TWlsZScpXHJcbiAgLy8gdW5pdHMgdHJhbnNsYXRlXHJcbiAgY29uc3QgdW5pdERlZmF1bHQgPSB0cmFuc2xhdGUoJ2RlZmF1bHQnKVxyXG4gIGNvbnN0IHVuaXRJbmNoZXMgPSB0cmFuc2xhdGUoJ3VuaXRzSW5jaGVzJylcclxuICBjb25zdCB1bml0Rm9vdCA9IHRyYW5zbGF0ZSgndW5pdHNMYWJlbEZlZXQnKVxyXG4gIGNvbnN0IHVuaXRGb290VXMgPSB0cmFuc2xhdGUoJ3VuaXRzRm9vdF9VUycpXHJcbiAgY29uc3QgdW5pdFlhcmRzID0gdHJhbnNsYXRlKCd1bml0c0xhYmVsWWFyZHMnKVxyXG4gIGNvbnN0IHVuaXRNaWxlcyA9IHRyYW5zbGF0ZSgndW5pdHNMYWJlbE1pbGVzJylcclxuICBjb25zdCB1bml0TmF1dGljYWxNaWxlcyA9IHRyYW5zbGF0ZSgndW5pdHNMYWJlbE5hdXRpY2FsTWlsZXMnKVxyXG4gIGNvbnN0IHVuaXRNaWxsaW1ldGVycyA9IHRyYW5zbGF0ZSgndW5pdHNNaWxsaW1ldGVycycpXHJcbiAgY29uc3QgdW5pdENlbnRpbWV0ZXJzID0gdHJhbnNsYXRlKCd1bml0c0NlbnRpbWV0ZXJzJylcclxuICBjb25zdCB1bml0TWV0ZXJzID0gdHJhbnNsYXRlKCd1bml0c0xhYmVsTWV0ZXJzJylcclxuICBjb25zdCB1bml0S2lsb21ldGVycyA9IHRyYW5zbGF0ZSgndW5pdHNMYWJlbEtpbG9tZXRlcnMnKVxyXG4gIGNvbnN0IHVuaXREZWNpbWV0ZXJzID0gdHJhbnNsYXRlKCd1bml0c0RlY2ltZXRlcnMnKVxyXG4gIGNvbnN0IHVuaXRERCA9IHRyYW5zbGF0ZSgndW5pdHNEZWNpbWFsRGVncmVlcycpXHJcbiAgY29uc3QgdW5pdERETSA9IHRyYW5zbGF0ZSgndW5pdHNEZWdyZWVzRGVjaW1hbE1pbnV0ZXMnKVxyXG4gIGNvbnN0IHVuaXRETVMgPSB0cmFuc2xhdGUoJ3VuaXRzRGVncmVlTWludXRlc1NlY29uZHMnKVxyXG4gIGNvbnN0IHVuaXRNZ3JzID0gdHJhbnNsYXRlKCd1bml0c01ncnMnKVxyXG4gIGNvbnN0IHVuaXRVc25nID0gdHJhbnNsYXRlKCd1bml0c1VzbmcnKVxyXG4gIC8vIGdsb2JhbCB2YXJpYWJsXHJcbiAgY29uc3Qgc3BhdGlhbFJlZmVyZW5jZVJlZiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGhlbHBVcmwgPSAnaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vcmVzdC9zZXJ2aWNlcy1yZWZlcmVuY2UvZW50ZXJwcmlzZS91c2luZy1zcGF0aWFsLXJlZmVyZW5jZXMuaHRtJ1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhcGlMb2FkZWQpIHtcclxuICAgICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcclxuICAgICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgICBbc3BhdGlhbFJlZmVyZW5jZVJlZi5jdXJyZW50XSA9IG1vZHVsZXNcclxuICAgICAgICBzZXRBcGlMb2FkZWQodHJ1ZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q3VyV2tpZCh3a2lkKVxyXG4gICAgc2V0Q3VyRGF0dW1Xa2lkKGRhdHVtV2tpZClcclxuICAgIHNldEN1ckRhdHVtV2tpZDIoZGF0dW1Xa2lkMilcclxuICAgIGlmIChhcGlMb2FkZWQpIHtcclxuICAgICAgY2hlY2tNYXBTdXBwb3J0RGF0dW0od2tpZClcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIH0sIFthcGlMb2FkZWQsIHdraWQsIGRhdHVtV2tpZCwgbWFwSW5mbywgbWFwSW5mbzIsIHdraWRVdGlsc10pXHJcblxyXG4gIGNvbnN0IHdraWRDaGFuZ2UgPSAodmFsdWUpOiB2b2lkID0+IHtcclxuICAgIHNldEN1cldraWQodmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja01hcFN1cHBvcnREYXR1bSA9ICh3a2lkKSA9PiB7XHJcbiAgICBjb25zdCBtYXAxV2tpZCA9IG1hcEluZm8/LndraWRcclxuICAgIGNvbnN0IG1hcDJXa2lkID0gbWFwSW5mbzI/LndraWRcclxuICAgIGNvbnN0IFNSQ29uc3RydWN0b3JzID0gc3BhdGlhbFJlZmVyZW5jZVJlZi5jdXJyZW50XHJcbiAgICBpZiAoIXdraWRVdGlscykgcmV0dXJuXHJcbiAgICBjb25zdCB7IGlzU2FtZVNwaGVyb2lkIH0gPSB3a2lkVXRpbHNcclxuICAgIGlmICh3a2lkKSB7XHJcbiAgICAgIGNvbnN0IG91dHB1dFNyID0gbmV3IFNSQ29uc3RydWN0b3JzKHsgd2tpZDogd2tpZCB9KVxyXG4gICAgICAvLyBvbmx5IG9uZSBtYXAgdmlld1xyXG4gICAgICBpZiAobWFwMVdraWQgJiYgIW1hcDJXa2lkKSB7XHJcbiAgICAgICAgY29uc3QgbWFwU3IgPSBuZXcgU1JDb25zdHJ1Y3RvcnMoeyB3a2lkOiBtYXAxV2tpZCB9KVxyXG4gICAgICAgIGlmICghaXNTYW1lU3BoZXJvaWQob3V0cHV0U3IsIG1hcFNyKSkge1xyXG4gICAgICAgICAgc2V0RGF0dW1TdGF0dXModHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0RGF0dW1TdGF0dXMoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG1hcDFXa2lkICYmIG1hcDJXa2lkKSB7XHJcbiAgICAgICAgY29uc3QgbWFwMVNyID0gbmV3IFNSQ29uc3RydWN0b3JzKHsgd2tpZDogbWFwMVdraWQgfSlcclxuICAgICAgICBjb25zdCBtYXAyU3IgPSBuZXcgU1JDb25zdHJ1Y3RvcnMoeyB3a2lkOiBtYXAyV2tpZCB9KVxyXG4gICAgICAgIGNvbnN0IG1hcDFFcXVhbE1hcDIgPSBpc1NhbWVTcGhlcm9pZChtYXAxU3IsIG1hcDJTcilcclxuICAgICAgICBjb25zdCBtYXAxRXF1YWxPdXRwdXQgPSBpc1NhbWVTcGhlcm9pZChtYXAxU3IsIG91dHB1dFNyKVxyXG4gICAgICAgIGNvbnN0IG1hcDJFcXVhbE91dHB1dCA9IGlzU2FtZVNwaGVyb2lkKG1hcDJTciwgb3V0cHV0U3IpXHJcbiAgICAgICAgLy8gbWFwMVNyICE9IG1hcDJTclxyXG4gICAgICAgIGlmICghbWFwMUVxdWFsTWFwMikge1xyXG4gICAgICAgICAgaWYgKCFtYXAxRXF1YWxPdXRwdXQgJiYgbWFwMkVxdWFsT3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHNldERhdHVtU3RhdHVzKHRydWUpXHJcbiAgICAgICAgICAgIHNldERhdHVtMlN0YXR1cyhmYWxzZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIW1hcDJFcXVhbE91dHB1dCAmJiBtYXAxRXF1YWxPdXRwdXQpIHtcclxuICAgICAgICAgICAgc2V0RGF0dW1TdGF0dXMoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldERhdHVtMlN0YXR1cyh0cnVlKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RGF0dW1TdGF0dXModHJ1ZSlcclxuICAgICAgICAgICAgc2V0RGF0dW0yU3RhdHVzKHRydWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gbWFwMVNyID0gbWFwMlNyXHJcbiAgICAgICAgICBpZiAobWFwMUVxdWFsT3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHNldERhdHVtU3RhdHVzKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXREYXR1bTJTdGF0dXMoZmFsc2UpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXREYXR1bVN0YXR1cyh0cnVlKVxyXG4gICAgICAgICAgICBzZXREYXR1bTJTdGF0dXMoZmFsc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB3a2lkQWNjZXB0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXdraWRJbnZhbGlkICYmICh3a2lkID09PSB2YWx1ZSkpIHJldHVyblxyXG4gICAgaWYgKCF3a2lkVXRpbHMpIHJldHVyblxyXG4gICAgY29uc3QgeyB3a2lkTG9va3VwLCBpc1ZhbGlkV2tpZCB9ID0gd2tpZFV0aWxzXHJcbiAgICBjb25zdCBuZXdXa2lkID0gdmFsdWUgPT09ICcnID8gd2tpZCA6IHZhbHVlXHJcbiAgICBjb25zdCBpc1ZhbGlkID0gaXNWYWxpZFdraWQobmV3V2tpZClcclxuICAgIGNvbnN0IGNycyA9IHdraWRMb29rdXAobmV3V2tpZClcclxuICAgIGNvbnN0IGxhYmVsID0gY3JzPy5uYW1lXHJcbiAgICAvLyBuZXcgc3lzdGVtXHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgc2V0V2tpZEludmFsaWQoZmFsc2UpXHJcbiAgICAgICAgb25Xa2lkQ2hhbmdlU2F2ZShuZXdXa2lkLCBjcnMpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0V2tpZEludmFsaWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIC8vIGVkaXQgc3lzdGVtXHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICBzZXRXa2lkSW52YWxpZChmYWxzZSlcclxuICAgICAgLy8gY2hlY2sgd2hldGhlciBzdXBwb3J0IGRhdHVtXHJcbiAgICAgIGNoZWNrTWFwU3VwcG9ydERhdHVtKG5ld1draWQpXHJcbiAgICAgIHNldEN1cldraWQobmV3V2tpZClcclxuICAgICAgbXVsdGlPcHRpb25zQ2hhbmdlKHtcclxuICAgICAgICB3a2lkOiBuZXdXa2lkLFxyXG4gICAgICAgIG5hbWU6IGxhYmVsLFxyXG4gICAgICAgIGNycyxcclxuICAgICAgICBkaXNwbGF5VW5pdDogJycsXHJcbiAgICAgICAgZGF0dW1Xa2lkOiAnJyxcclxuICAgICAgICBkYXR1bU5hbWU6ICcnLFxyXG4gICAgICAgIGRhdHVtV2tpZDI6ICcnLFxyXG4gICAgICAgIGRhdHVtTmFtZTI6ICcnXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgeyAvLyBpbnZhbGlkXHJcbiAgICAgIHNldFdraWRJbnZhbGlkKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXR1bVdraWRDaGFuZ2UgPSAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgIHNldEN1ckRhdHVtV2tpZChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXR1bVdraWQyQ2hhbmdlID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICBzZXRDdXJEYXR1bVdraWQyKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdHVtV2tpZEFjY2VwdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKGRhdHVtV2tpZCA9PT0gdmFsdWUpIHJldHVyblxyXG4gICAgY29uc3QgbmV3RGF0dW1Xa2lkID0gdmFsdWVcclxuICAgIGNvbnN0IHsgaXNWYWxpZERhdHVtV2tpZCwgZ2V0RGF0dW1TUkxhYmVsIH0gPSB3a2lkVXRpbHNcclxuICAgIGlmIChpc1ZhbGlkRGF0dW1Xa2lkKG5ld0RhdHVtV2tpZCkpIHtcclxuICAgICAgc2V0RGF0dW1Xa2lkSW52YWxpZChmYWxzZSlcclxuICAgICAgY29uc3QgbGFiZWwgPSBnZXREYXR1bVNSTGFiZWwobmV3RGF0dW1Xa2lkKVxyXG4gICAgICBtdWx0aU9wdGlvbnNDaGFuZ2Uoe1xyXG4gICAgICAgIGRhdHVtV2tpZDogbmV3RGF0dW1Xa2lkLFxyXG4gICAgICAgIGRhdHVtTmFtZTogbGFiZWxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7IC8vIGludmFsaWRcclxuICAgICAgc2V0RGF0dW1Xa2lkSW52YWxpZCh0cnVlKVxyXG4gICAgICBtdWx0aU9wdGlvbnNDaGFuZ2Uoe1xyXG4gICAgICAgIGRhdHVtV2tpZDogJycsXHJcbiAgICAgICAgZGF0dW1OYW1lOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0dW1Xa2lkMkFjY2VwdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKGRhdHVtV2tpZCA9PT0gdmFsdWUpIHJldHVyblxyXG4gICAgY29uc3QgbmV3RGF0dW1Xa2lkID0gdmFsdWVcclxuICAgIGNvbnN0IHsgaXNWYWxpZERhdHVtV2tpZCwgZ2V0RGF0dW1TUkxhYmVsIH0gPSB3a2lkVXRpbHNcclxuICAgIGlmIChpc1ZhbGlkRGF0dW1Xa2lkKG5ld0RhdHVtV2tpZCkpIHtcclxuICAgICAgc2V0RGF0dW1Xa2lkMkludmFsaWQoZmFsc2UpXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gZ2V0RGF0dW1TUkxhYmVsKG5ld0RhdHVtV2tpZClcclxuICAgICAgbXVsdGlPcHRpb25zQ2hhbmdlKHtcclxuICAgICAgICBkYXR1bVdraWQyOiBuZXdEYXR1bVdraWQsXHJcbiAgICAgICAgZGF0dW1OYW1lMjogbGFiZWxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7IC8vIGludmFsaWRcclxuICAgICAgc2V0RGF0dW1Xa2lkMkludmFsaWQodHJ1ZSlcclxuICAgICAgbXVsdGlPcHRpb25zQ2hhbmdlKHtcclxuICAgICAgICBkYXR1bVdraWQyOiAnJyxcclxuICAgICAgICBkYXR1bU5hbWUyOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVW5pdENoYW5nZSA9IChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgbmV3VW5pdCA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgaWYgKGRpc3BsYXlVbml0ID09PSBuZXdVbml0KSByZXR1cm5cclxuICAgIG11bHRpT3B0aW9uc0NoYW5nZSh7IGRpc3BsYXlVbml0OiBuZXdVbml0IH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRVbml0T3B0aW9ucyA9ICgpOiBKU1guRWxlbWVudFtdID0+IHtcclxuICAgIGNvbnN0IGFsbFVuaXRzID0gW1xyXG4gICAgICA8b3B0aW9uIGtleT0nRGVmYXVsdCcgdmFsdWU9Jyc+e3VuaXREZWZhdWx0fTwvb3B0aW9uPixcclxuXHJcbiAgICAgIDxvcHRpb24ga2V5PSdJTkNIRVMnIHZhbHVlPSdJTkNIRVMnPnt1bml0SW5jaGVzfTwvb3B0aW9uPixcclxuICAgICAgPG9wdGlvbiBrZXk9J0ZPT1QnIHZhbHVlPSdGT09UJz57dW5pdEZvb3R9PC9vcHRpb24+LFxyXG4gICAgICA8b3B0aW9uIGtleT0nRk9PVF9VUycgdmFsdWU9J0ZPT1RfVVMnPnt1bml0Rm9vdFVzfTwvb3B0aW9uPixcclxuICAgICAgPG9wdGlvbiBrZXk9J1lBUkRTJyB2YWx1ZT0nWUFSRFMnPnt1bml0WWFyZHN9PC9vcHRpb24+LFxyXG4gICAgICA8b3B0aW9uIGtleT0nTUlMRVMnIHZhbHVlPSdNSUxFUyc+e3VuaXRNaWxlc308L29wdGlvbj4sXHJcbiAgICAgIDxvcHRpb24ga2V5PSdOQVVUSUNBTF9NSUxFUycgdmFsdWU9J05BVVRJQ0FMX01JTEVTJz57dW5pdE5hdXRpY2FsTWlsZXN9PC9vcHRpb24+LFxyXG4gICAgICA8b3B0aW9uIGtleT0nTUlMTElNRVRFUlMnIHZhbHVlPSdNSUxMSU1FVEVSUyc+e3VuaXRNaWxsaW1ldGVyc308L29wdGlvbj4sXHJcbiAgICAgIDxvcHRpb24ga2V5PSdDRU5USU1FVEVSUycgdmFsdWU9J0NFTlRJTUVURVJTJz57dW5pdENlbnRpbWV0ZXJzfTwvb3B0aW9uPixcclxuICAgICAgPG9wdGlvbiBrZXk9J01FVEVSJyB2YWx1ZT0nTUVURVInPnt1bml0TWV0ZXJzfTwvb3B0aW9uPixcclxuICAgICAgPG9wdGlvbiBrZXk9J0tJTE9NRVRFUlMnIHZhbHVlPSdLSUxPTUVURVJTJz57dW5pdEtpbG9tZXRlcnN9PC9vcHRpb24+LFxyXG4gICAgICA8b3B0aW9uIGtleT0nREVDSU1FVEVSUycgdmFsdWU9J0RFQ0lNRVRFUlMnPnt1bml0RGVjaW1ldGVyc308L29wdGlvbj4sXHJcblxyXG4gICAgICA8b3B0aW9uIGtleT0nREVDSU1BTF9ERUdSRUVTJyB2YWx1ZT0nREVDSU1BTF9ERUdSRUVTJz57dW5pdEREfTwvb3B0aW9uPixcclxuICAgICAgPG9wdGlvbiBrZXk9J0RFR1JFRVNfREVDSU1BTF9NSU5VVEVTJyB2YWx1ZT0nREVHUkVFU19ERUNJTUFMX01JTlVURVMnPnt1bml0RERNfTwvb3B0aW9uPixcclxuICAgICAgPG9wdGlvbiBrZXk9J0RFR1JFRV9NSU5VVEVfU0VDT05EUycgdmFsdWU9J0RFR1JFRV9NSU5VVEVfU0VDT05EUyc+e3VuaXRETVN9PC9vcHRpb24+LFxyXG4gICAgICA8b3B0aW9uIGtleT0nTUdSUycgdmFsdWU9J01HUlMnPnt1bml0TWdyc308L29wdGlvbj4sXHJcbiAgICAgIDxvcHRpb24ga2V5PSdVU05HJyB2YWx1ZT0nVVNORyc+e3VuaXRVc25nfTwvb3B0aW9uPlxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGdlb2dyYXBoaWNVbml0cyA9IFs8b3B0aW9uIGtleT0nRGVmYXVsdCcgdmFsdWU9Jyc+e3VuaXREZWZhdWx0fTwvb3B0aW9uPl0uY29uY2F0KGFsbFVuaXRzLnNsaWNlKDEyKSlcclxuICAgIGNvbnN0IHByb2plY3RVbml0cyA9IGFsbFVuaXRzLnNsaWNlKDAsIDEyKVxyXG5cclxuICAgIGNvbnN0IGN1cldraWROdW0gPSBwYXJzZUludChjdXJXa2lkKVxyXG4gICAgY29uc3QgU1JDb25zdHJ1Y3RvcnMgPSBzcGF0aWFsUmVmZXJlbmNlUmVmLmN1cnJlbnRcclxuICAgIGlmICghU1JDb25zdHJ1Y3RvcnMpIHJldHVybiBhbGxVbml0c1xyXG4gICAgY29uc3Qgc3IgPSBuZXcgU1JDb25zdHJ1Y3RvcnMoeyB3a2lkOiBjdXJXa2lkTnVtIH0pXHJcbiAgICBpZiAoY3VyV2tpZE51bSA9PT0gbWFwVmlldz8udmlldz8uc3BhdGlhbFJlZmVyZW5jZT8ud2tpZCkgeyAvLyByZWFsdGltZVxyXG4gICAgICBjb25zdCBpc1NwZWNpYWxDUyA9IHNyLmlzV2ViTWVyY2F0b3JcclxuICAgICAgaWYgKGlzU3BlY2lhbENTKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsbFVuaXRzXHJcbiAgICAgIH0gZWxzZSBpZiAoY3VyV2tpZE51bSA9PT0gNDMyNiB8fCBzci5pc0dlb2dyYXBoaWMpIHtcclxuICAgICAgICByZXR1cm4gZ2VvZ3JhcGhpY1VuaXRzXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RVbml0c1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNyLmlzR2VvZ3JhcGhpYykge1xyXG4gICAgICByZXR1cm4gZ2VvZ3JhcGhpY1VuaXRzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsVW5pdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IHdraWRMaW5rID0gKFxyXG4gICAgPExpbmtcclxuICAgICAgY2xhc3NOYW1lPSd3a2lkLWxpbmsgamltdS1vdXRsaW5lLWluc2lkZSdcclxuICAgICAgaWNvblxyXG4gICAgICB0bz17aGVscFVybH1cclxuICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgIHRpdGxlPXsnV0tJRCd9XHJcbiAgICAgIGFyaWEtbGFiZWw9eydXS0lEJ31cclxuICAgID5cclxuICAgICAgeydXS0lEJ31cclxuICAgIDwvTGluaz5cclxuICApXHJcblxyXG4gIGNvbnN0IG91dHB1dFN5c3RlbVRpcCA9IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGlwLXRleHQnPnt0cmFuc2xhdGUoJ291dHB1dENvb3JkaW5hdGUnLCB7IHdraWQ6IHdraWRMaW5rIH0pfTwvZGl2PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPXtvdXRwdXRDb29yZGluYXRlSGludH0gc2hvd0Fycm93IHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICA8QnV0dG9uIGljb24gdHlwZT0ndGVydGlhcnknIGNsYXNzTmFtZT0nZC1pbmxpbmUgamltdS1vdXRsaW5lLWluc2lkZScgPlxyXG4gICAgICAgICAgICA8SW5mb091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxuICBjb25zdCBkaXNwbGF5VW5pdHNUaXAgPSAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpcC10ZXh0Jz57ZWxldmF0aW9uVW5pdExhYmVsfTwvZGl2PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPXtlbGV2YXRpb25IaW50fSBzaG93QXJyb3cgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgIDxCdXR0b24gaWNvbiB0eXBlPSd0ZXJ0aWFyeScgY2xhc3NOYW1lPSdkLWlubGluZSBqaW11LW91dGxpbmUtaW5zaWRlJyA+XHJcbiAgICAgICAgICAgIDxJbmZvT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG4gIGNvbnN0IGRhdHVtVGlwID0gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXAtdGV4dCc+e3RyYW5zbGF0ZSgnZGF0dW1UcmFuc2Zvcm1hdGlvbicsIHsgd2tpZDogd2tpZExpbmsgfSl9PC9kaXY+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2RhdHVtVHJhbnNmb3JtYXRpb25IaW50fSBzaG93QXJyb3cgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgIDxCdXR0b24gaWNvbiB0eXBlPSd0ZXJ0aWFyeScgY2xhc3NOYW1lPSdkLWlubGluZSBqaW11LW91dGxpbmUtaW5zaWRlJyA+XHJcbiAgICAgICAgICAgIDxJbmZvT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAnIGNzcz17Z2V0UGFuZWxTdHlsZSh0aGVtZSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAgc3lzdGVtLWNvbmZpZy1wYW5lbCc+XHJcbiAgICAgICAge2FsbERhdGFMb2FkZWRcclxuICAgICAgICAgID8gPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gY2xhc3NOYW1lPSdwdC0wJz5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1Jvd1xyXG4gICAgICAgICAgICAgICAgZmxvdz0nd3JhcCdcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtvdXRwdXRTeXN0ZW1UaXB9XHJcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZUxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VyV2tpZH1cclxuICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uPXswfVxyXG4gICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt3a2lkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXt3a2lkQWNjZXB0fVxyXG4gICAgICAgICAgICAgICAgICBzaG93SGFuZGxlcnM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXsnb3V0cHV0LXN5c3RlbS1uYW1lJ31cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdvdXRwdXRDb29yZGluYXRlJywgeyB3a2lkOiAnV0tJRCcgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPSdvdXRwdXQtc3lzdGVtLW5hbWUnIGNsYXNzTmFtZT0ndGV4dC1icmVhayBzeXN0ZW0tbmFtZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIHt3a2lkSW52YWxpZFxyXG4gICAgICAgICAgICAgICAgICA/IDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nT3V0bGluZWQgY29sb3I9e3RoZW1lLnN5cy5jb2xvci5lcnJvci5tYWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludmFsaWQtdGlwcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZhbGlkV2tpZFRpcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgOiBuYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgICAgICAgIGZsb3c9J3dyYXAnXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZGlzcGxheVVuaXRzTGFiZWx9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3BsYXlVbml0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVW5pdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17ZGlzcGxheVVuaXRzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY3VyV2tpZCB8fCB3a2lkSW52YWxpZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2dldFVuaXRPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93XHJcbiAgICAgICAgICAgICAgICBmbG93PSd3cmFwJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2Rpc3BsYXlVbml0c1RpcH1cclxuICAgICAgICAgICAgICAgIHRydW5jYXRlTGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT0ncmFkaW9ncm91cCcgY2xhc3NOYW1lPSdtYi00JyBhcmlhLWxhYmVsPXtlbGV2YXRpb25Vbml0TGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaXNwbGF5T3JkZXJUeXBlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci0yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZWxldmF0aW9uVW5pdCA9PT0gRWxldmF0aW9uVW5pdFR5cGUubWV0cmljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHsgbXVsdGlPcHRpb25zQ2hhbmdlKHsgZWxldmF0aW9uVW5pdDogRWxldmF0aW9uVW5pdFR5cGUubWV0cmljIH0pIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWN1cldraWQgfHwgd2tpZEludmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZWxldk1ldGVyfVxyXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaXNwbGF5T3JkZXJUeXBlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci0yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZWxldmF0aW9uVW5pdCA9PT0gRWxldmF0aW9uVW5pdFR5cGUuaW1wZXJpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyBtdWx0aU9wdGlvbnNDaGFuZ2UoeyBlbGV2YXRpb25Vbml0OiBFbGV2YXRpb25Vbml0VHlwZS5pbXBlcmlhbCB9KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjdXJXa2lkIHx8IHdraWRJbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2VsZXZNaWxlfVxyXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgeyhkYXR1bVN0YXR1cyB8fCBkYXR1bTJTdGF0dXMpICYmXHJcbiAgICAgICAgICAgICAgPFNldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCcgbGFiZWw9e2RhdHVtVGlwfSB0cnVuY2F0ZUxhYmVsPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgIHtkYXR1bVN0YXR1cyAmJlxyXG4gICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCcgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkYXR1bVN0YXR1cyAmJiBkYXR1bTJTdGF0dXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57bWFwSW5mbz8udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VyRGF0dW1Xa2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb249ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RhdHVtV2tpZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZGF0dW1Xa2lkQWNjZXB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93SGFuZGxlcnM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXsnZGF0dW0tdHJhbnNmb3JtYXRpb24tMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnZGF0dW1UcmFuc2Zvcm1hdGlvbicsIHsgd2tpZDogJ1dLSUQnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWN1cldraWQgfHwgd2tpZEludmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdkYXR1bS10cmFuc2Zvcm1hdGlvbi0xJyBjbGFzc05hbWU9J3RleHQtYnJlYWsgc3lzdGVtLW5hbWUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0dW1Xa2lkSW52YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nT3V0bGluZWQgY29sb3I9e3RoZW1lLnN5cy5jb2xvci5lcnJvci5tYWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludmFsaWQtdGlwcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZhbGlkRGF0dW1Xa2lkVGlwc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRhdHVtTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2RhdHVtMlN0YXR1cyAmJlxyXG4gICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCcgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkYXR1bVN0YXR1cyAmJiBkYXR1bTJTdGF0dXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57bWFwSW5mbzI/LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1ckRhdHVtV2tpZDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0dW1Xa2lkMkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZGF0dW1Xa2lkMkFjY2VwdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0hhbmRsZXJzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17J2RhdHVtLXRyYW5zZm9ybWF0aW9uLTInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2RhdHVtVHJhbnNmb3JtYXRpb24nLCB7IHdraWQ6ICdXS0lEJyB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjdXJXa2lkIHx8IHdraWRJbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nZGF0dW0tdHJhbnNmb3JtYXRpb24tMicgY2xhc3NOYW1lPSd0ZXh0LWJyZWFrIHN5c3RlbS1uYW1lIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdHVtV2tpZDJJbnZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmdPdXRsaW5lZCBjb2xvcj17dGhlbWUuc3lzLmNvbG9yLmVycm9yLm1haW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52YWxpZC10aXBzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ludmFsaWREYXR1bVdraWRUaXBzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0dW1OYW1lMlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICA6IDxMb2FkaW5nIHR5cGU9e0xvYWRpbmdUeXBlLlNlY29uZGFyeX0gLz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBtb2Rlcm46ICdNb2Rlcm4nLFxyXG4gIG91dHB1dENvb3JTeXN0ZW06ICdPdXRwdXQgY29vcmRpbmF0ZSBzeXN0ZW0nLFxyXG4gIG91dHB1dENvb3JkaW5hdGU6ICdPdXRwdXQgY29vcmRpbmF0ZSBzeXN0ZW0gd2VsbC1rbm93biBJRCAoe3draWR9KScsXHJcbiAgb3V0cHV0Q29vcmRpbmF0ZUhpbnQ6ICdHZW9ncmFwaGljIGNvb3JkaW5hdGUgc3lzdGVtcyBhbmQgUHJvamVjdGVkIGNvb3JkaW5hdGUgc3lzdGVtcyBhcmUgc3VwcG9ydGVkLicsXHJcbiAgbmV3Q29vcmRpbmF0ZTogJ05ldyBjb29yZGluYXRlIHN5c3RlbScsXHJcbiAgY29uZmlndXJlQ29vcmRpbmF0ZTogJ0NvbmZpZ3VyZSBjb29yZGluYXRlIHN5c3RlbScsXHJcbiAgZGlzcGxheU9wdGlvbnM6ICdEaXNwbGF5IG9wdGlvbnMnLFxyXG4gIGNvb3JkaW5hdGVEZWNpbWFsOiAnTnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIGZvciBjb29yZGluYXRlcycsXHJcbiAgYWx0aXR1ZGVEZWNpbWFsOiAnTnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIGZvciBhbHRpdHVkZSAoM0QpJyxcclxuICBzaG93U2VwYXJhdG9yczogJ1Nob3cgdGhvdXNhbmQgc2VwYXJhdG9ycycsXHJcbiAgc2hvd0VsZXZhdGlvbjogJ1Nob3cgZWxldmF0aW9uJyxcclxuICBkaXNwbGF5T3JkZXI6ICdEaXNwbGF5IG9yZGVyJyxcclxuICBsb0xhTW9kZTogJ0xvbmdpdHVkZS9MYXRpdHVkZSAoWCwgWSknLFxyXG4gIGxhTG9Nb2RlOiAnTGF0aXR1ZGUvTG9uZ2l0dWRlIChZLCBYKScsXHJcblxyXG4gIGRhdHVtVHJhbnNmb3JtYXRpb246ICdEYXR1bSB0cmFuc2Zvcm1hdGlvbiBJRCAoe3draWR9KScsXHJcbiAgZGF0dW1UcmFuc2Zvcm1hdGlvbkhpbnQ6ICdHZW9ncmFwaGljIGRhdHVtIHRyYW5zZm9ybWF0aW9ucyBhcmUgc3VwcG9ydGVkLicsXHJcbiAgZGlzcGxheVVuaXRzOiAnRGlzcGxheSB1bml0cycsXHJcbiAgZWxldmF0aW9uVW5pdDogJ0VsZXZhdGlvbiB1bml0ICgzRCknLFxyXG4gIGVsZXZhdGlvbkhpbnQ6ICdTcGVjaWZ5IHRoZSB1bml0IGZvciBlbGV2YXRpb25zIGZvciAzRCBzY2VuZXMgaWYgYXZhaWxhYmxlLicsXHJcbiAgZWxldk1ldGVyOiAnTWV0cmljJyxcclxuICBlbGV2TWlsZTogJ0ltcGVyaWFsJyxcclxuICBpbnZhbGlkV2tpZFRpcHM6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBjb29yZGluYXRlIHN5c3RlbSBXS0lELicsXHJcbiAgaW52YWxpZERhdHVtV2tpZFRpcHM6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXR1bSB0cmFuc2Zvcm1hdGlvbiBJRC4nLFxyXG4gIHNlbGVjdE1hcFRpcHM6ICdTZWxlY3QgYSBtYXAgZm9yIGZ1cnRoZXIgY29uZmlndXJhdGlvbnMuJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVEE0SWlCb1pXbG5hSFE5SWpjeUlpQjJhV1YzUW05NFBTSXdJREFnTVRBNElEY3lJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BISmxZM1FnZUQwaU9DSWdlVDBpTWpZaUlIZHBaSFJvUFNJNU1pSWdhR1ZwWjJoMFBTSXlNQ0lnWm1sc2JEMGlJekk0TWpneU9DSXZQZzBLUEhKbFkzUWdlRDBpTVRJaUlIazlJak13SWlCM2FXUjBhRDBpTVRJaUlHaGxhV2RvZEQwaU1USWlJSEo0UFNJMklpQm1hV3hzUFNJak5rRTJRVFpCSWk4K0RRbzhjbVZqZENCNFBTSXpNeUlnZVQwaU16TWlJSGRwWkhSb1BTSTBNaUlnYUdWcFoyaDBQU0kySWlCbWFXeHNQU0lqTmtFMlFUWkJJaTgrRFFvOGNtVmpkQ0I0UFNJM09TSWdlVDBpTXpBaUlIZHBaSFJvUFNJeElpQm9aV2xuYUhROUlqRXlJaUJtYVd4c1BTSWpORFEwTkRRMElpOCtEUW84Y21WamRDQjRQU0l5T0NJZ2VUMGlNekFpSUhkcFpIUm9QU0l4SWlCb1pXbG5hSFE5SWpFeUlpQm1hV3hzUFNJak5EUTBORFEwSWk4K0RRbzhjbVZqZENCNFBTSTROQ0lnZVQwaU16QWlJSGRwWkhSb1BTSXhNaUlnYUdWcFoyaDBQU0l4TWlJZ2NuZzlJallpSUdacGJHdzlJaU0yUVRaQk5rRWlMejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRBNElpQm9aV2xuYUhROUlqY3lJaUIyYVdWM1FtOTRQU0l3SURBZ01UQTRJRGN5SWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQSEpsWTNRZ2VEMGlPQ0lnZVQwaU9DSWdkMmxrZEdnOUlqa3lJaUJvWldsbmFIUTlJalUySWlCbWFXeHNQU0lqTWpneU9ESTRJaTgrRFFvOGNtVmpkQ0I0UFNJeE15SWdlVDBpTkRJaUlIZHBaSFJvUFNJNE1TSWdhR1ZwWjJoMFBTSXhJaUJtYVd4c1BTSWpORFEwTkRRMElpOCtEUW84Y21WamRDQjRQU0l5T1NJZ2VUMGlOVElpSUhkcFpIUm9QU0l4T0NJZ2FHVnBaMmgwUFNJeklpQm1hV3hzUFNJak5rRTJRVFpCSWk4K0RRbzhjbVZqZENCNFBTSXhNeUlnZVQwaU5EZ2lJSGRwWkhSb1BTSXhNaUlnYUdWcFoyaDBQU0l4TWlJZ2NuZzlJallpSUdacGJHdzlJaU0yUVRaQk5rRWlMejROQ2p4eVpXTjBJSGc5SWpFeklpQjVQU0l4TmlJZ2QybGtkR2c5SWpZeElpQm9aV2xuYUhROUlqUWlJR1pwYkd3OUlpTTJRVFpCTmtFaUx6NE5Danh5WldOMElIZzlJakV6SWlCNVBTSXlPQ0lnZDJsa2RHZzlJalExSWlCb1pXbG5hSFE5SWpRaUlHWnBiR3c5SWlNMlFUWkJOa0VpTHo0TkNqeHlaV04wSUhnOUlqZ3lJaUI1UFNJME9DSWdkMmxrZEdnOUlqRXlJaUJvWldsbmFIUTlJakV5SWlCeWVEMGlOaUlnWm1sc2JEMGlJelpCTmtFMlFTSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfZm9yX2J1aWxkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX2xpc3RfdHJlZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIEltbXV0YWJsZSwgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVjb3JlTWVzc2FnZXMsIHVybFV0aWxzLCBtb2R1bGVMb2FkZXIsIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcywgYnVpbGRlckFwcFN5bmMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgeyBCdXR0b24sIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11aU1lc3NhZ2VzLCBJY29uLCBMYWJlbCwgTnVtZXJpY0lucHV0LCBSYWRpbywgU3dpdGNoLCBUb29sdGlwIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IsIFNldHRpbmdSb3csIFNldHRpbmdTZWN0aW9uLCBTaWRlUG9wcGVyIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHR5cGUgQ29vcmRpbmF0ZUNvbmZpZywgRGlzcGxheU9yZGVyVHlwZSwgRWxldmF0aW9uVW5pdFR5cGUsIHR5cGUgSU1Db25maWcsIFdpZGdldFN0eWxlVHlwZSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgeyBMaXN0LCBUcmVlSXRlbUFjdGlvblR5cGUgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2xpc3QtdHJlZSdcclxuaW1wb3J0IENsb3NlT3V0bGluZWQgZnJvbSAnamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL2Nsb3NlLnN2ZydcclxuaW1wb3J0IHsgU3lzdGVtQ29uZmlnIH0gZnJvbSAnLi9zeXN0ZW0tY29uZmlnJ1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDbGlja091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jbGljaydcclxuaW1wb3J0IHsgZ2V0U2V0dGluZ1N0eWxlIH0gZnJvbSAnLi9zdHlsZSdcclxuaW1wb3J0IHsgdHlwZSBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gPSBSZWFjdFxyXG5jb25zdCBjb29yZGluYXRlU3lzdGVtRGVmYXVsdCA9IHtcclxuICBpZDogJycsXHJcbiAgbmFtZTogJycsXHJcbiAgd2tpZDogJycsXHJcbiAgZGlzcGxheVVuaXQ6ICcnLFxyXG4gIGVsZXZhdGlvblVuaXQ6IEVsZXZhdGlvblVuaXRUeXBlLm1ldHJpYyxcclxuICBkYXR1bVdraWQ6ICcnLFxyXG4gIGRhdHVtTmFtZTogJydcclxufVxyXG5cclxudHlwZSBTZXR0aW5nUHJvcHMgPSBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+XHJcblxyXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBTZXR0aW5nUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgdGhlbWUsXHJcbiAgICBvblNldHRpbmdDaGFuZ2UsXHJcbiAgICBjb25maWc6IHByb3BDb25maWcsXHJcbiAgICB1c2VNYXBXaWRnZXRJZHNcclxuICB9ID0gcHJvcHNcclxuICBjb25zdCB7IGNvb3JkaW5hdGVTeXN0ZW0sIHNob3dTZXBhcmF0b3JzLCBzaG93RWxldmF0aW9uLCBjb29yZGluYXRlRGVjaW1hbCwgYWx0aXR1ZGVEZWNpbWFsLCBkaXNwbGF5T3JkZXIsIHdpZGdldFN0eWxlLCBtYXBJbmZvLCBtYXBJbmZvMiB9ID0gcHJvcENvbmZpZ1xyXG4gIGNvbnN0IHNpZGVQb3BwZXJUcmlnZ2VyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIC8vIHN0YXRlXHJcbiAgY29uc3QgW3Nob3dMYXllclBhbmVsLCBzZXRTaG93TGF5ZXJQYW5lbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcG9wcGVyRm9jdXNOb2RlLCBzZXRQb3BwZXJGb2N1c05vZGVdID0gdXNlU3RhdGU8SFRNTEVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3QgW21hcFZpZXcsIHNldE1hcFZpZXddID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG4gIGNvbnN0IFt2aWV3cywgc2V0Vmlld3NdID0gdXNlU3RhdGU8eyBbdmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlldyB9Pih1bmRlZmluZWQpXHJcbiAgY29uc3QgW21vZHVsZXNMb2FkZWQsIHNldE1vZHVsZXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2FsbERhdGFMb2FkZWQsIHNldEFsbERhdGFMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8gdHJhbnNsYXRlXHJcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzLCBqaW11aU1lc3NhZ2VzLCBqaW11Y29yZU1lc3NhZ2VzKVxyXG4gIGNvbnN0IHNlbGVjdE1hcFdpZGdldCA9IHRyYW5zbGF0ZSgnc2VsZWN0TWFwV2lkZ2V0JylcclxuICBjb25zdCBjbGFzc2ljVHlwZSA9IHRyYW5zbGF0ZSgnY2xhc3NpYycpXHJcbiAgY29uc3QgbW9kZXJuVHlwZSA9IHRyYW5zbGF0ZSgnbW9kZXJuJylcclxuICBjb25zdCBvdXRwdXRDb29yU3lzdGVtID0gdHJhbnNsYXRlKCdvdXRwdXRDb29yU3lzdGVtJylcclxuICBjb25zdCBuZXdDb29yZGluYXRlU3lzdGVtID0gdHJhbnNsYXRlKCduZXdDb29yZGluYXRlJylcclxuICBjb25zdCByZW1vdmUgPSB0cmFuc2xhdGUoJ3JlbW92ZScpXHJcbiAgY29uc3QgY29uZmlndXJlQ29vcmRpbmF0ZVN5c3RlbSA9IHRyYW5zbGF0ZSgnY29uZmlndXJlQ29vcmRpbmF0ZScpXHJcbiAgY29uc3QgZGlzcGxheU9wdGlvbnMgPSB0cmFuc2xhdGUoJ2Rpc3BsYXlPcHRpb25zJylcclxuICBjb25zdCBjb29yZGluYXRlRGVjaW1hbExhYmVsID0gdHJhbnNsYXRlKCdjb29yZGluYXRlRGVjaW1hbCcpXHJcbiAgY29uc3QgYWx0aXR1ZGVEZWNpbWFsTGFiZWwgPSB0cmFuc2xhdGUoJ2FsdGl0dWRlRGVjaW1hbCcpXHJcbiAgY29uc3Qgc2hvd1NlcGFyYXRvcnNMYWJlbCA9IHRyYW5zbGF0ZSgnc2hvd1NlcGFyYXRvcnMnKVxyXG4gIGNvbnN0IHNob3dFbGV2YXRpb25MYWJlbCA9IHRyYW5zbGF0ZSgnc2hvd0VsZXZhdGlvbicpXHJcbiAgY29uc3QgZGlzcGxheU9yZGVyTGFiZWwgPSB0cmFuc2xhdGUoJ2Rpc3BsYXlPcmRlcicpXHJcbiAgY29uc3QgbG9MYU1vZGUgPSB0cmFuc2xhdGUoJ2xvTGFNb2RlJylcclxuICBjb25zdCBsYUxvTW9kZSA9IHRyYW5zbGF0ZSgnbGFMb01vZGUnKVxyXG4gIGNvbnN0IHNlbGVjdE1hcFRpcHMgPSB0cmFuc2xhdGUoJ3NlbGVjdE1hcFRpcHMnKVxyXG4gIGNvbnN0IHdpZGdldFN0eWxlTGFiZWwgPSB0cmFuc2xhdGUoJ3N0eWxlJylcclxuICAvLyBnbG9iYWwgdmFyaWFibFxyXG4gIGNvbnN0IHBhbmVsSW5kZXggPSB1c2VSZWYodW5kZWZpbmVkKVxyXG4gIGNvbnN0IHdraWRVdGlsc1JlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlTWFwID0gdXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggPiAwXHJcbiAgICBpZiAodXNlTWFwICYmICFtb2R1bGVzTG9hZGVkKSB7XHJcbiAgICAgIG1vZHVsZUxvYWRlci5sb2FkTW9kdWxlKCdqaW11LWNvcmUvd2tpZCcpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICB3a2lkVXRpbHNSZWYuY3VycmVudCA9IG1vZHVsZVxyXG4gICAgICAgIHNldE1vZHVsZXNMb2FkZWQodHJ1ZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIH0sIFt1c2VNYXBXaWRnZXRJZHNdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZU1hcFdpZGdldElkcyAmJiBtb2R1bGVzTG9hZGVkKSB2aWV3R3JvdXBTZXRNYXBJbmZvKHZpZXdzKVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgfSwgW21vZHVsZXNMb2FkZWQsIHZpZXdzLCB1c2VNYXBXaWRnZXRJZHNdKVxyXG5cclxuICBjb25zdCB2aWV3R3JvdXBTZXRNYXBJbmZvID0gKHZpZXdzOiB7IFt2aWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3IH0pID0+IHtcclxuICAgIGlmICghdmlld3MpIHJldHVyblxyXG4gICAgY29uc3Qgdmlld3NLZXlzID0gT2JqZWN0LmtleXModmlld3MpXHJcbiAgICBpZiAodmlld3NLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0QWxsRGF0YUxvYWRlZCh0cnVlKVxyXG4gICAgICBjb25zdCB7IGdldFNSTGFiZWwsIGdldENTVW5pdCB9ID0gd2tpZFV0aWxzUmVmLmN1cnJlbnRcclxuICAgICAgY29uc3QgdmlldzEgPSB2aWV3cz8uW3ZpZXdzS2V5c1swXV0/LnZpZXdcclxuICAgICAgY29uc3QgdmlldzIgPSB2aWV3cz8uW3ZpZXdzS2V5c1sxXV0/LnZpZXdcclxuICAgICAgY29uc3QgbWFwMVdraWQgPSB2aWV3MT8uc3BhdGlhbFJlZmVyZW5jZT8ud2tpZFxyXG4gICAgICBjb25zdCBtYXAyV2tpZCA9IHZpZXcyPy5zcGF0aWFsUmVmZXJlbmNlPy53a2lkXHJcbiAgICAgIGNvbnN0IG1hcElkID0gKHZpZXcxPy5tYXAgYXMgYW55KT8ucG9ydGFsSXRlbT8uaWRcclxuICAgICAgY29uc3QgbWFwSWQyID0gKHZpZXcyPy5tYXAgYXMgYW55KT8ucG9ydGFsSXRlbT8uaWRcclxuICAgICAgaWYgKG1hcElkID09PSBtYXBJbmZvPy5pZCAmJiBtYXBJZDIgPT09IG1hcEluZm8yPy5pZCkgcmV0dXJuXHJcbiAgICAgIGNvbnN0IG1hcFRpdGxlID0gKHZpZXcxPy5tYXAgYXMgYW55KT8ucG9ydGFsSXRlbT8udGl0bGVcclxuICAgICAgY29uc3QgbWFwVGl0bGUyID0gKHZpZXcyPy5tYXAgYXMgYW55KT8ucG9ydGFsSXRlbT8udGl0bGVcclxuICAgICAgb25NdWx0aVNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgIG1hcEluZm86IHsgaWQ6IG1hcElkLCB0aXRsZTogbWFwVGl0bGUsIHdraWQ6IG1hcDFXa2lkLCBsYWJlbDogZ2V0U1JMYWJlbChtYXAxV2tpZCksIGNzVW5pdDogZ2V0Q1NVbml0KG1hcDFXa2lkKSB9LFxyXG4gICAgICAgIG1hcEluZm8yOiB7IGlkOiBtYXBJZDIsIHRpdGxlOiBtYXBUaXRsZTIsIHdraWQ6IG1hcDJXa2lkLCBsYWJlbDogZ2V0U1JMYWJlbChtYXAyV2tpZCksIGNzVW5pdDogZ2V0Q1NVbml0KG1hcDJXa2lkKSB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk11bHRpU2V0dGluZ0NoYW5nZSA9ICh1cGRhdGVPcHRpb25zOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IG5ld0NvbmZpZyA9IHByb3BDb25maWcuc2V0KCdtYXBJbmZvJywgdXBkYXRlT3B0aW9ucy5tYXBJbmZvKS5zZXQoJ21hcEluZm8yJywgdXBkYXRlT3B0aW9ucy5tYXBJbmZvMilcclxuICAgIGNvbnN0IGNvbmZpZyA9IHsgaWQsIGNvbmZpZzogbmV3Q29uZmlnIH1cclxuICAgIG9uU2V0dGluZ0NoYW5nZShjb25maWcpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcclxuICAgIG9uU2V0dGluZ0NoYW5nZSh7IGlkLCB1c2VNYXBXaWRnZXRJZHMgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2xvc2VMYXllclBhbmVsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0xheWVyUGFuZWwoZmFsc2UpXHJcbiAgICBwYW5lbEluZGV4LmN1cnJlbnQgPSB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIGNvbnN0IHNldFNpZGVQb3BwZXJBbmNob3IgPSAoaW5kZXg6IG51bWJlciwgbmV3QWRkZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xyXG4gICAgbGV0IG5vZGU6IGFueVxyXG4gICAgaWYgKG5ld0FkZGVkKSB7XHJcbiAgICAgIG5vZGUgPSBzaWRlUG9wcGVyVHJpZ2dlci5jdXJyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkZC10YWJsZS1idG4nKVswXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm9kZSA9IHNpZGVQb3BwZXJUcmlnZ2VyLmN1cnJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnamltdS10cmVlLWl0ZW1fX2JvZHknKVtpbmRleF1cclxuICAgIH1cclxuICAgIHNldFBvcHBlckZvY3VzTm9kZShub2RlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TaG93TGF5ZXJQYW5lbCA9IChpbmRleDogbnVtYmVyLCBuZXdBZGRlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBzZXRTaWRlUG9wcGVyQW5jaG9yKGluZGV4LCBuZXdBZGRlZClcclxuICAgIGlmIChpbmRleCA9PT0gcGFuZWxJbmRleC5jdXJyZW50KSB7XHJcbiAgICAgIHNldFNob3dMYXllclBhbmVsKCFzaG93TGF5ZXJQYW5lbClcclxuICAgICAgcGFuZWxJbmRleC5jdXJyZW50ID0gdW5kZWZpbmVkXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93TGF5ZXJQYW5lbCh0cnVlKVxyXG4gICAgICBwYW5lbEluZGV4LmN1cnJlbnQgPSBpbmRleFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Xa2lkQ2hhbmdlU2F2ZSA9IChuZXdXa2lkOiBzdHJpbmcsIGNyczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtc0xlbmd0aCA9IGNvb3JkaW5hdGVTeXN0ZW0ubGVuZ3RoXHJcbiAgICBpZiAoaXRlbXNMZW5ndGggPT09IHBhbmVsSW5kZXguY3VycmVudCkge1xyXG4gICAgICBhZGROZXdTeXN0ZW0obmV3V2tpZCwgY3JzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QXJyYXlNYXhJZCA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgY29uc3QgbnVtYmVycyA9IGNvb3JkaW5hdGVTeXN0ZW0ubWFwKHN5c3RlbUNvbmZpZyA9PiB7XHJcbiAgICAgIHJldHVybiBzeXN0ZW1Db25maWcuaWQ/LnNwbGl0KCctJykucmV2ZXJzZSgpWzBdXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG51bWJlcnMubGVuZ3RoID4gMCA/IE1hdGgubWF4LmFwcGx5KG51bGwsIG51bWJlcnMpIDogMFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TmV3Q29uZmlnSWQgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGluZGV4ID1cclxuICAgICAgY29vcmRpbmF0ZVN5c3RlbS5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBnZXRBcnJheU1heElkKClcclxuICAgICAgICA6IDBcclxuICAgIHJldHVybiBgc3lzdGVtLSR7aW5kZXggKyAxfWBcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZE5ld1N5c3RlbSA9IChuZXdXa2lkOiBzdHJpbmcsIGNyczogYW55LCBlbGV2YXRpb25Vbml0PzogRWxldmF0aW9uVW5pdFR5cGUpID0+IHtcclxuICAgIGNvbnN0IG5ld0NvbmZpZ0lkID0gZ2V0TmV3Q29uZmlnSWQoKVxyXG4gICAgY29uc3Qgc3lzdGVtSXRlbTogQ29vcmRpbmF0ZUNvbmZpZyA9IHtcclxuICAgICAgaWQ6IG5ld0NvbmZpZ0lkLFxyXG4gICAgICBuYW1lOiBjcnM/Lm5hbWUgPz8gbmV3Q29uZmlnSWQsXHJcbiAgICAgIHdraWQ6IG5ld1draWQsXHJcbiAgICAgIGNycyxcclxuICAgICAgZGlzcGxheVVuaXQ6ICcnLFxyXG4gICAgICBlbGV2YXRpb25Vbml0OiBFbGV2YXRpb25Vbml0VHlwZS5tZXRyaWMsXHJcbiAgICAgIGRhdHVtV2tpZDogJycsXHJcbiAgICAgIGRhdHVtTmFtZTogJydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50TGF5ZXIgPSBjb29yZGluYXRlU3lzdGVtW3BhbmVsSW5kZXguY3VycmVudF1cclxuICAgIGxldCBzeXN0ZW1JdGVtc1xyXG4gICAgaWYgKGN1cnJlbnRMYXllcikge1xyXG4gICAgICAvLyB1cGRhdGUgY29uZmlnLCByZXNldCBvdGhlciBvcHRzIGZvciBjdXJyZW50IGNvbmZpZ1xyXG4gICAgICBjb25zdCBfY29uZiA9IGNvb3JkaW5hdGVTeXN0ZW0uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxyXG4gICAgICBfY29uZi5zcGxpY2UocGFuZWxJbmRleC5jdXJyZW50LCAxLCBzeXN0ZW1JdGVtKVxyXG4gICAgICBzeXN0ZW1JdGVtcyA9IEltbXV0YWJsZShfY29uZilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGFkZCBuZXcgY29uZmlnXHJcbiAgICAgIHN5c3RlbUl0ZW1zID0gY29vcmRpbmF0ZVN5c3RlbS5jb25jYXQoW1xyXG4gICAgICAgIEltbXV0YWJsZShzeXN0ZW1JdGVtKVxyXG4gICAgICBdKVxyXG4gICAgfVxyXG4gICAgb25Qcm9wZXJ0eUNoYW5nZSgnY29vcmRpbmF0ZVN5c3RlbScsIHN5c3RlbUl0ZW1zKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlU3lzdGVtID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIGlmIChwYW5lbEluZGV4LmN1cnJlbnQgPT09IGluZGV4KSB7XHJcbiAgICAgIG9uQ2xvc2VMYXllclBhbmVsKClcclxuICAgIH1cclxuICAgIC8vIGRlbCBjdXJyZW50IGZpbHRlciBpdGVtXHJcbiAgICBjb25zdCBfc3lzdGVtID0gcHJvcENvbmZpZy5jb29yZGluYXRlU3lzdGVtLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcclxuICAgIF9zeXN0ZW0uc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgb25Qcm9wZXJ0eUNoYW5nZSgnY29vcmRpbmF0ZVN5c3RlbScsIF9zeXN0ZW0pXHJcblxyXG4gICAgaWYgKHBhbmVsSW5kZXguY3VycmVudCA+IGluZGV4KSB7XHJcbiAgICAgIHBhbmVsSW5kZXguY3VycmVudC0tXHJcbiAgICB9XHJcbiAgICBidWlsZGVyQXBwU3luYy5wdWJsaXNoQ2hhbmdlV2lkZ2V0U3RhdGVQcm9wVG9BcHAoe1xyXG4gICAgICB3aWRnZXRJZDogaWQsXHJcbiAgICAgIHByb3BLZXk6ICdyZW1vdmVMYXllckZsYWcnLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uSXRlbVVwZGF0ZWQgPSAocGFyZW50SXRlbUpzb24sIGN1cnJlbnRJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTeXN0ZW1Db25maWdzID0gcGFyZW50SXRlbUpzb24ubWFwKGl0ZW0gPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbS5pdGVtU3RhdGVEZXRhaWxDb250ZW50XHJcbiAgICB9KVxyXG4gICAgb25Qcm9wZXJ0eUNoYW5nZSgnY29vcmRpbmF0ZVN5c3RlbScsIG5ld1N5c3RlbUNvbmZpZ3MpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDb29yZGluYXRlRGVjaW1hbCA9ICh2YWx1ZUludDogbnVtYmVyKSA9PiB7XHJcbiAgICBvblByb3BlcnR5Q2hhbmdlKCdjb29yZGluYXRlRGVjaW1hbCcsIHZhbHVlSW50KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQWx0aXR1ZGVEZWNpbWFsID0gKHZhbHVlSW50OiBudW1iZXIpID0+IHtcclxuICAgIG9uUHJvcGVydHlDaGFuZ2UoJ2FsdGl0dWRlRGVjaW1hbCcsIHZhbHVlSW50KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Qcm9wZXJ0eUNoYW5nZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBwcm9wQ29uZmlnW25hbWVdKSByZXR1cm5cclxuICAgIGNvbnN0IG5ld0NvbmZpZyA9IHByb3BDb25maWcuc2V0KG5hbWUsIHZhbHVlKVxyXG4gICAgY29uc3QgbmV3UHJvcHMgPSB7IGlkLCBjb25maWc6IG5ld0NvbmZpZyB9XHJcbiAgICBvblNldHRpbmdDaGFuZ2UobmV3UHJvcHMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBtdWx0aU9wdGlvbnNDaGFuZ2VTYXZlID0gKHVwZGF0ZU9wdGlvbnM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFN5c3RlbSA9IGNvb3JkaW5hdGVTeXN0ZW1bcGFuZWxJbmRleC5jdXJyZW50XVxyXG4gICAgaWYgKGN1cnJlbnRTeXN0ZW0pIHtcclxuICAgICAgY29uc3QgbmV3Q29uZmlnID0gcHJvcENvbmZpZy5zZXRJbihbJ2Nvb3JkaW5hdGVTeXN0ZW0nLCBwYW5lbEluZGV4LmN1cnJlbnQudG9TdHJpbmcoKV0sIHsgLi4uY3VycmVudFN5c3RlbSwgLi4udXBkYXRlT3B0aW9ucyB9KVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7IGlkLCBjb25maWc6IG5ld0NvbmZpZyB9XHJcbiAgICAgIG9uU2V0dGluZ0NoYW5nZShjb25maWcpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzd2l0Y2hXaWRnZXRUeXBlID0gKHR5cGU6IFdpZGdldFN0eWxlVHlwZSkgPT4ge1xyXG4gICAgaWYgKHR5cGUgIT09IHdpZGdldFN0eWxlKSB7XHJcbiAgICAgIG9uUHJvcGVydHlDaGFuZ2UoJ3dpZGdldFN0eWxlJywgdHlwZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGl0ZW1zTGVuZ3RoID0gY29vcmRpbmF0ZVN5c3RlbS5sZW5ndGhcclxuICBjb25zdCB1c2VNYXAgPSB1c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCA+IDBcclxuICBjb25zdCBhZHZhbmNlZEFjdGlvbk1hcCA9IHtcclxuICAgIG92ZXJyaWRlSXRlbUJsb2NrSW5mbzogKHsgaXRlbUJsb2NrSW5mbyB9LCByZWZDb21wb25lbnQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBUcmVlSXRlbUFjdGlvblR5cGUuUmVuZGVyT3ZlcnJpZGVJdGVtLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICAgICAgbmFtZTogVHJlZUl0ZW1BY3Rpb25UeXBlLlJlbmRlck92ZXJyaWRlSXRlbURyb3BwYWJsZUNvbnRhaW5lcixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICAgICAgICBuYW1lOiBUcmVlSXRlbUFjdGlvblR5cGUuUmVuZGVyT3ZlcnJpZGVJdGVtRHJhZ2dhYmxlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW3tcclxuICAgICAgICAgICAgICBuYW1lOiBUcmVlSXRlbUFjdGlvblR5cGUuUmVuZGVyT3ZlcnJpZGVJdGVtQm9keSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFRyZWVJdGVtQWN0aW9uVHlwZS5SZW5kZXJPdmVycmlkZUl0ZW1NYWluTGluZSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBUcmVlSXRlbUFjdGlvblR5cGUuUmVuZGVyT3ZlcnJpZGVJdGVtRHJhZ0hhbmRsZVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBUcmVlSXRlbUFjdGlvblR5cGUuUmVuZGVyT3ZlcnJpZGVJdGVtSWNvbixcclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbGxhcHNlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBUcmVlSXRlbUFjdGlvblR5cGUuUmVuZGVyT3ZlcnJpZGVJdGVtVGl0bGVcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogVHJlZUl0ZW1BY3Rpb25UeXBlLlJlbmRlck92ZXJyaWRlSXRlbUNvbW1hbmRzXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQWN0aXZlVmlld0NoYW5nZSA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIHNldE1hcFZpZXcoamltdU1hcFZpZXcpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblZpZXdzQ3JlYXRlID0gKHZpZXdzOiB7IFt2aWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3IH0pID0+IHtcclxuICAgIHNldFZpZXdzKHZpZXdzKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtc2V0dGluZy1jb29yZGluYXRlcyBqaW11LXdpZGdldC1zZXR0aW5nJyBjc3M9e2dldFNldHRpbmdTdHlsZSh0aGVtZSl9PlxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICB0aXRsZT17c2VsZWN0TWFwV2lkZ2V0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgb25TZWxlY3Q9e29uTWFwV2lkZ2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dXNlTWFwV2lkZ2V0SWRzfVxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXsnY29vcmRpbmF0ZXMtYmxhbmstbXNnJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgeyF1c2VNYXAgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1wdHktcGxhY2Vob2xkZXIgdy0xMDAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtcHR5LXBsYWNlaG9sZGVyLWlubmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtcHR5LXBsYWNlaG9sZGVyLWljb24nPjxDbGlja091dGxpbmVkIHNpemU9ezQ4fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZW1wdHktcGxhY2Vob2xkZXItdGV4dCdcclxuICAgICAgICAgICAgICAgIGlkPSdjb29yZGluYXRlcy1ibGFuay1tc2cnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdE1hcFRpcHN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG5cclxuICAgICAge3VzZU1hcCAmJlxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2FycmFuZ2Utc3R5bGUtY29udGFpbmVyJ1xyXG4gICAgICAgICAgICB0aXRsZT17d2lkZ2V0U3R5bGVMYWJlbH1cclxuICAgICAgICAgICAgcm9sZT0nZ3JvdXAnXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3dpZGdldFN0eWxlTGFiZWx9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGNsYXNzTmFtZT0nYXJyYW5nZV9jb250YWluZXInPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtjbGFzc2ljVHlwZX0gcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHN3aXRjaFdpZGdldFR5cGUoV2lkZ2V0U3R5bGVUeXBlLmNsYXNzaWMpIH19XHJcbiAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e3dpZGdldFN0eWxlID09PSBXaWRnZXRTdHlsZVR5cGUuY2xhc3NpY31cclxuICAgICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXt3aWRnZXRTdHlsZSA9PT0gV2lkZ2V0U3R5bGVUeXBlLmNsYXNzaWN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZsaXBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTA5fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17cmVxdWlyZSgnLi9hc3NldHMvc3R5bGUtY29vcmRpbmF0ZS1jbGFzc2ljLnN2ZycpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXttb2Rlcm5UeXBlfSBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc3dpdGNoV2lkZ2V0VHlwZShXaWRnZXRTdHlsZVR5cGUubW9kZXJuKSB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTInXHJcbiAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e3dpZGdldFN0eWxlID09PSBXaWRnZXRTdHlsZVR5cGUubW9kZXJufVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9e3dpZGdldFN0eWxlID09PSBXaWRnZXRTdHlsZVR5cGUubW9kZXJufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9GbGlwXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwOX1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e3JlcXVpcmUoJy4vYXNzZXRzL3N0eWxlLWNvb3JkaW5hdGUtbW9kZXJuLnN2ZycpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT17b3V0cHV0Q29vclN5c3RlbX1cclxuICAgICAgICAgICAgcm9sZT0nZ3JvdXAnXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e291dHB1dENvb3JTeXN0ZW19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtzaWRlUG9wcGVyVHJpZ2dlcn0+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAgdGV4dC1kZWZhdWx0IGFkZC10YWJsZS1idG4nXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblNob3dMYXllclBhbmVsKGl0ZW1zTGVuZ3RoLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17bmV3Q29vcmRpbmF0ZVN5c3RlbX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIHB4LTIgdGV4dC10cnVuY2F0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAge25ld0Nvb3JkaW5hdGVTeXN0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXR0aW5nLXVpLXVuaXQtbGlzdCB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgIHshIWl0ZW1zTGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2V0dGluZy11aS11bml0LWxpc3QtZXhzaXRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtc0pzb249e0FycmF5LmZyb20oY29vcmRpbmF0ZVN5c3RlbSkubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0YXRlRGV0YWlsQ29udGVudDogaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUtleTogYCR7aW5kZXh9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0YXRlVGl0bGU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0YXRlQ2hlY2tlZDogaW5kZXggPT09IHBhbmVsSW5kZXguY3VycmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0YXRlQ29tbWFuZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcmVtb3ZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblByb3BzOiAoKSA9PiAoeyBpY29uOiBDbG9zZU91dGxpbmVkLCBzaXplOiAxMiB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTeXN0ZW0oaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkbmRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZUl0ZW09eyhhY3Rpb25EYXRhLCByZWZDb21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtSnNvbnMgfSA9IHJlZkNvbXBvbmVudC5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbY3VycmVudEl0ZW1Kc29uLCBwYXJlbnRJdGVtSnNvbl0gPSBpdGVtSnNvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtVXBkYXRlZChwYXJlbnRJdGVtSnNvbiwgK2N1cnJlbnRJdGVtSnNvbi5pdGVtS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtQm9keT17KGFjdGlvbkRhdGEsIHJlZkNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1Kc29uczogW2N1cnJlbnRJdGVtSnNvbl0gfSA9IHJlZkNvbXBvbmVudC5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNob3dMYXllclBhbmVsKCtjdXJyZW50SXRlbUpzb24uaXRlbUtleSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uYWR2YW5jZWRBY3Rpb25NYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7aXRlbXNMZW5ndGggPT09IHBhbmVsSW5kZXguY3VycmVudCAmJiBzaG93TGF5ZXJQYW5lbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NldHRpbmctdWktdW5pdC1saXN0LW5ldydcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zSnNvbj17W3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJy4uLi4uLidcclxuICAgICAgICAgICAgICAgICAgICAgIH1dLm1hcCgoaXRlbSwgeCkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0YXRlRGV0YWlsQ29udGVudDogaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUtleTogYCR7cGFuZWxJbmRleC5jdXJyZW50fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TdGF0ZUNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TdGF0ZVRpdGxlOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TdGF0ZUNvbW1hbmRzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZG5kRW5hYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPdmVycmlkZUl0ZW1EZXRhaWxUb2dnbGU9eygpID0+ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5hZHZhbmNlZEFjdGlvbk1hcH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgICAgdGl0bGU9e2Rpc3BsYXlPcHRpb25zfVxyXG4gICAgICAgICAgICByb2xlPSdncm91cCdcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17ZGlzcGxheU9wdGlvbnN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGZsb3c9J3dyYXAnIGxhYmVsPXtjb29yZGluYXRlRGVjaW1hbExhYmVsfT5cclxuICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0XHJcbiAgICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb29yZGluYXRlRGVjaW1hbH1cclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbj17MH1cclxuICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgIG1heD17MTB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29vcmRpbmF0ZURlY2ltYWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtjb29yZGluYXRlRGVjaW1hbExhYmVsfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXtzaG93RWxldmF0aW9uTGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FuLXgtc3dpdGNoJ1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd0VsZXZhdGlvbn1cclxuICAgICAgICAgICAgICAgIGRhdGEta2V5PSdzaG93RWxldmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uUHJvcGVydHlDaGFuZ2UoJ3Nob3dFbGV2YXRpb24nLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2hvd0VsZXZhdGlvbkxhYmVsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCcgbGFiZWw9e2FsdGl0dWRlRGVjaW1hbExhYmVsfT5cclxuICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0XHJcbiAgICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthbHRpdHVkZURlY2ltYWx9XHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb249ezB9XHJcbiAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICBtYXg9ezEwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFsdGl0dWRlRGVjaW1hbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FsdGl0dWRlRGVjaW1hbExhYmVsfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXtzaG93U2VwYXJhdG9yc0xhYmVsfT5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nhbi14LXN3aXRjaCdcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dTZXBhcmF0b3JzfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1rZXk9J3Nob3dTZXBhcmF0b3JzJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uUHJvcGVydHlDaGFuZ2UoJ3Nob3dTZXBhcmF0b3JzJywgZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3Nob3dTZXBhcmF0b3JzTGFiZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJyBsYWJlbD17ZGlzcGxheU9yZGVyTGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxkaXYgcm9sZT0ncmFkaW9ncm91cCcgY2xhc3NOYW1lPSdtYi00JyBhcmlhLWxhYmVsPXtkaXNwbGF5T3JkZXJMYWJlbH0+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaXNwbGF5T3JkZXJUeXBlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXItMidcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkaXNwbGF5T3JkZXIgPT09IERpc3BsYXlPcmRlclR5cGUueHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHsgb25Qcm9wZXJ0eUNoYW5nZSgnZGlzcGxheU9yZGVyJywgRGlzcGxheU9yZGVyVHlwZS54eSkgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge2xvTGFNb2RlfVxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rpc3BsYXlPcmRlclR5cGUnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci0yJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Rpc3BsYXlPcmRlciA9PT0gRGlzcGxheU9yZGVyVHlwZS55eH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyBvblByb3BlcnR5Q2hhbmdlKCdkaXNwbGF5T3JkZXInLCBEaXNwbGF5T3JkZXJUeXBlLnl4KSB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7bGFMb01vZGV9XHJcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXt1c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e29uQWN0aXZlVmlld0NoYW5nZX1cclxuICAgICAgICBvblZpZXdzQ3JlYXRlPXtvblZpZXdzQ3JlYXRlfVxyXG4gICAgICAvPlxyXG4gICAgICA8U2lkZVBvcHBlclxyXG4gICAgICAgIHBvc2l0aW9uPSdyaWdodCdcclxuICAgICAgICB0aXRsZT17Y29uZmlndXJlQ29vcmRpbmF0ZVN5c3RlbX1cclxuICAgICAgICBpc09wZW49e3Nob3dMYXllclBhbmVsICYmICF1cmxVdGlscy5nZXRBcHBJZFBhZ2VJZEZyb21VcmwoKS5wYWdlSWR9XHJcbiAgICAgICAgdG9nZ2xlPXtvbkNsb3NlTGF5ZXJQYW5lbH1cclxuICAgICAgICB0cmlnZ2VyPXtzaWRlUG9wcGVyVHJpZ2dlcj8uY3VycmVudH1cclxuICAgICAgICBiYWNrVG9Gb2N1c05vZGU9e3BvcHBlckZvY3VzTm9kZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTeXN0ZW1Db25maWdcclxuICAgICAgICAgIHsuLi4oY29vcmRpbmF0ZVN5c3RlbS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pW3BhbmVsSW5kZXguY3VycmVudF0gPz8gY29vcmRpbmF0ZVN5c3RlbURlZmF1bHQpfVxyXG4gICAgICAgICAgYWxsRGF0YUxvYWRlZD17YWxsRGF0YUxvYWRlZH1cclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dXNlTWFwV2lkZ2V0SWRzfVxyXG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgICAgICAgbXVsdGlPcHRpb25zQ2hhbmdlPXttdWx0aU9wdGlvbnNDaGFuZ2VTYXZlfVxyXG4gICAgICAgICAgb25Xa2lkQ2hhbmdlU2F2ZT17b25Xa2lkQ2hhbmdlU2F2ZX1cclxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VMYXllclBhbmVsfVxyXG4gICAgICAgICAgbWFwVmlldz17bWFwVmlld31cclxuICAgICAgICAgIHdraWRVdGlscz17d2tpZFV0aWxzUmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICBtYXBJbmZvPXttYXBJbmZvfVxyXG4gICAgICAgICAgbWFwSW5mbzI9e21hcEluZm8yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU2lkZVBvcHBlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1xyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9