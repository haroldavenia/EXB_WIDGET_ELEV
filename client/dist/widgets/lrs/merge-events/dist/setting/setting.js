System.register(["jimu-core","widgets/shared-code/lrs","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/basic/list-tree","jimu-core/react"],(function(e,t){var a={},i={},n={},r={},s={},o={};return{setters:[function(e){a.DataSourceManager=e.DataSourceManager,a.DataSourceTypes=e.DataSourceTypes,a.Immutable=e.Immutable,a.React=e.React,a.ReactRedux=e.ReactRedux,a.SessionManager=e.SessionManager,a.classNames=e.classNames,a.css=e.css,a.getAppStore=e.getAppStore,a.hooks=e.hooks,a.jsx=e.jsx,a.polished=e.polished,a.urlUtils=e.urlUtils},function(e){i.LrsLayerType=e.LrsLayerType,i.errorMessageDelay=e.errorMessageDelay,i.formatMessage=e.formatMessage,i.getFeatureLayer=e.getFeatureLayer,i.isConflictPreventionEnabled=e.isConflictPreventionEnabled,i.isDefined=e.isDefined,i.requestService=e.requestService},function(e){n.Alert=e.Alert,n.Button=e.Button,n.Checkbox=e.Checkbox,n.Select=e.Select,n.Switch=e.Switch,n.TextInput=e.TextInput,n.defaultMessages=e.defaultMessages},function(e){r.MapWidgetSelector=e.MapWidgetSelector,r.SettingRow=e.SettingRow,r.SettingSection=e.SettingSection,r.SidePopper=e.SidePopper},function(e){s.List=e.List,s.TreeItemActionType=e.TreeItemActionType},function(e){o.Fragment=e.Fragment}],execute:function(){e((()=>{var e={31027:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5m-9 0a3.5 3.5 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5M15.5 11l-5 1-3 4-1-9.5zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38z" clip-rule="evenodd"></path></svg>'},62838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},8547:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},51334:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7H9m-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},28996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=a},68972:e=>{"use strict";e.exports=o},14321:e=>{"use strict";e.exports=n},79298:e=>{"use strict";e.exports=r},98640:e=>{"use strict";e.exports=s},47626:e=>{"use strict";e.exports=i}},t={};function l(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,l),n.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var d={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(d),l.d(d,{__set_webpack_public_path__:()=>w,default:()=>b});var e=l(79244),t=l(47626),a=l(14321);const i={blankStatus:"Select a map to import LRS networks",defaultSettings:"Default Settings",defaultEvent:"Event",defaultMethod:"Method",defaultType:"Type",methodMeasure:"Route and Measure",methodCoordinate:"Coordinate",methodLocationOffset:"Location Offset",operationTypeSingle:"Single Point",operationTypeMultiple:"Multiple Point",loadLayers:"Load Layers",clearLayers:"Clear Layers",useFieldAlias:"Use field alias",configureFields:"Configure Fields",layerConfig:"Layer Configuration",selectMap:"Select Map",noNetworkLayersTips:"No Network layers in the map",noPointEventLayersTips:"No Point event layers in the map",missingParentNetwork:"Parent network is missing",attributeEditable:"Editable",attributeNotEditable:"Not editable"};var n=l(79298),r=l(98640),s=l(68972),o=l(28996),c=l.n(o),m=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]])}return a};const u=t=>{const a=window.SVG,{className:i}=t,n=m(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",i);return a?e.React.createElement(a,Object.assign({className:r,src:c()},n)):e.React.createElement("svg",Object.assign({className:r},n))};var p=l(31027),g=l.n(p),f=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]])}return a};const h=t=>{const a=window.SVG,{className:i}=t,n=f(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",i);return a?e.React.createElement(a,Object.assign({className:r,src:g()},n)):e.React.createElement("svg",Object.assign({className:r},n))};const v=l(8547),y=l(51334);function S(s){var o;const{widgetId:l,index:d,lrsLayer:c,onLayerChanged:m}=s,u=e.hooks.useTranslation(i),[p,g]=e.React.useState(null==c?void 0:c.name),f=function(t){const{widgetId:a,useDataSourceId:i}=t;return e.ReactRedux.useSelector((e=>{var t;let n;return n=window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig,(null!==(t=n.widgets[a].useDataSources)&&void 0!==t?t:[]).some((e=>e.dataSourceId===i))}))}({widgetId:l,useDataSourceId:null===(o=null==c?void 0:c.useDataSource)||void 0===o?void 0:o.dataSourceId});e.React.useEffect((()=>{(null==c?void 0:c.name)&&p!==(null==c?void 0:c.name)&&g(null==c?void 0:c.name)}),[null==c?void 0:c.name]);const h=e.React.useCallback(((e,t,a=!1)=>{let i;i=null==t?c.without(e):c.set(e,t),m(d,i,a)}),[m,d,c]),S=e.React.useCallback(((e,t,a=!1)=>{const i=c.eventInfo.set(e,t),n=c.set("eventInfo",i);m(d,n,a)}),[m,d,c]),I=e.React.useCallback((e=>{g(e.target.value)}),[]),x=e.React.useCallback((e=>{e.trim().length>0?h("name",e,!0):g(null==c?void 0:c.name)}),[null==c?void 0:c.name,h]),L=e=>c.eventInfo.attributeFields[e].enabled,N=e=>{const t=c.eventInfo.attributeFields.asMutable({deep:!0});t[e].enabled=!t[e].enabled,S("attributeFields",t,!0)},b={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:r.TreeItemActionType.RenderOverrideItem,children:[{name:r.TreeItemActionType.RenderOverrideItemDroppableContainer,withListGroupItemWrapper:!1,children:[{name:r.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:r.TreeItemActionType.RenderOverrideItemBody,children:[{name:r.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:r.TreeItemActionType.RenderOverrideItemDragHandle},{name:r.TreeItemActionType.RenderOverrideItemDetailToggle},{name:r.TreeItemActionType.RenderOverrideItemTitle},{name:r.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})};return(0,e.jsx)("div",{className:"h-100"},(0,e.jsx)("div",{css:e.css`height: 100%; overflow:auto;`},c&&f&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(n.SettingSection,{role:"group","aria-label":u("label"),title:u("label")},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(a.TextInput,{size:"sm",type:"text",className:"w-100",value:p,onChange:I,onAcceptValue:x,"aria-label":u("label")})),c.layerType===t.LrsLayerType.event&&(0,e.jsx)(n.SettingRow,{flow:"no-wrap",label:u("useFieldAlias")},(0,e.jsx)(a.Switch,{"aria-label":u("useFieldAlias"),checked:c.useFieldAlias,onChange:(e,t)=>{h("useFieldAlias",t,!1)}}))),c.layerType===t.LrsLayerType.event&&(0,e.jsx)(n.SettingSection,{role:"group"},(0,e.jsx)(n.SettingRow,{flow:"wrap",label:u("configureFields")},(0,e.jsx)(r.List,Object.assign({className:"list-routeid-fields pt-2 w-100",showCheckbox:!0,itemsJson:Array.from(c.eventInfo.attributeFields).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`,itemStateChecked:L(t),itemStateTitle:c.useFieldAlias?e.field.alias:e.field.name,itemStateCommands:[{label:e.editable?u("attributeEditable"):u("attributeNotEditable"),iconProps:()=>({icon:e.editable?y:v,size:12}),action:({data:e})=>{const{itemJsons:[t]}=e;(e=>{const t=c.eventInfo.attributeFields.asMutable({deep:!0});t[e].editable=!t[e].editable,S("attributeFields",t,!0)})(+t.itemKey)}}]}))),renderOverrideItemDetailToggle:(t,i)=>{const{itemJsons:n,itemJsons:[{itemStateDetailVisible:r,itemStateDetailContent:s}]}=i.props,[o]=n,l=+o.itemKey;return s?(0,e.jsx)(a.Checkbox,{"aria-expanded":!!r,className:"jimu-tree-item__detail-toggle mr-2",checked:c.eventInfo.attributeFields[l].enabled,onClick:e=>{N(l)}}):null},dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:a}=t.props,[,i]=a;var n;n=i.map((e=>e.itemStateDetailContent)),S("attributeFields",n,!0)},onClickItemBody:(e,t)=>{const{itemJsons:[a]}=t.props;N(+a.itemKey)}},b)))))))}var I=function(e,t,a,i){return new(a||(a=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function o(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}l((i=i.apply(e,t||[])).next())}))};const x=l(62838);function L(o){const{widgetId:l,layers:d=[],mapWidgetIds:c,portalUrl:m,theme:p,onLayersAdded:g,onLayerRemoved:f,onClearAll:v,onLayerChanged:y,onLayerOrderChanged:L,onMapWidgetedChanged:N,intl:b}=o,w=e.React.useRef(null),[F,j]=e.React.useState(!1),[T,R]=e.React.useState(!1),[M,D]=e.React.useState(!1),[C,O]=e.React.useState(!1),[k,E]=e.React.useState(!1),[A,P]=e.React.useState(-1),B=e.hooks.useTranslation(i),U=()=>{const e=null==c?void 0:c[0],t=_(e),a=[];return t.forEach((e=>{var t;const i=null===(t=null==e?void 0:e.getDataSourceJson())||void 0===t?void 0:t.url,n=H(i);a.includes(n)||a.push(n)})),a},_=t=>{var a,i,n,r,s;let o=[];if(!t)return o;const l=(null===(a=null===window||void 0===window?void 0:window.jimuConfig)||void 0===a?void 0:a.isBuilder)?null===(n=null===(i=(0,e.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===n?void 0:n.appConfig:null===(r=(0,e.getAppStore)().getState())||void 0===r?void 0:r.appConfig;if(!l)return o;const d=null===(s=l.widgets[t])||void 0===s?void 0:s.useDataSources;if(void 0!==d){d.map((e=>e.dataSourceId)).forEach((t=>{const a=e.DataSourceManager.getInstance().getDataSource(t),i=null==a?void 0:a.getDataSourcesByType(e.DataSourceTypes.FeatureLayer);i&&(o=o.concat(i))}))}return o},J=(a,i)=>I(this,void 0,void 0,(function*(){let n=!1;const r=a[i];let s=null;const o=e.SessionManager.getInstance().getSessionByUrl(m),l=o&&o.token?o.token:"";return s=l?{f:"json",token:l}:{f:"json"},n=yield(0,t.requestService)({method:"GET",url:r,params:s}).then((e=>{if(!e.hasOwnProperty("lrs"))return j(!0),setTimeout((()=>{j(!1)}),t.errorMessageDelay),!1;W(e)})).catch((e=>!1)),n})),W=e=>{const a=null==c?void 0:c[0],i=_(a),n=[],r=[],s=[],o=[],l=[],m=[],u=[];i.forEach((e=>{u.push(e)})),e.networkLayers.forEach((e=>{u.findIndex((t=>t.layerId===e.id.toString()))>-1&&(s.push(e.id),r.push(e.id))})),e.eventLayers.forEach((e=>{u.findIndex((t=>t.layerId===e.id.toString()))>-1&&(o.push(e.id),r.push(e.id),"esriLRSPointEventLayer"===e.type&&m.push(e))})),e.intersectionLayers.forEach((e=>{u.findIndex((t=>t.layerId===e.id.toString()))>-1&&(l.push(e.id),r.push(e.id))})),i.forEach((e=>{var t,a;const i=null===(t=null==e?void 0:e.getDataSourceJson())||void 0===t?void 0:t.url,s=null==e?void 0:e.getLayerDefinition(),o=-1===d.findIndex((t=>t.id===e.id)),l=r.findIndex((e=>e===s.id))>-1;i&&o&&l&&n.push({dataSourceId:e.id,mainDataSourceId:e.id,dataViewId:e.dataViewId,rootDataSourceId:null===(a=e.getRootDataSource())||void 0===a?void 0:a.id})})),0===d.length&&0===n.length?(j(!0),setTimeout((()=>{j(!1)}),t.errorMessageDelay)):0===s.length?(D(!0),setTimeout((()=>{D(!1)}),t.errorMessageDelay)):0===m.length?(O(!0),setTimeout((()=>{O(!1)}),t.errorMessageDelay)):n.length>0&&z(n,s,o,l)},z=(t,a,i,n)=>I(this,void 0,void 0,(function*(){if(0===(null==t?void 0:t.length))return;const r=yield(()=>I(this,void 0,void 0,(function*(){let r=[];const s=[];return t.forEach((t=>{s.push(e.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,e.Immutable)(t)).then((s=>I(this,void 0,void 0,(function*(){const o=null==s?void 0:s.getLayerDefinition(),l=a.findIndex((e=>e===o.id))>-1,d=i.findIndex((e=>e===o.id))>-1,c=n.findIndex((e=>e===o.id))>-1,m=null==s?void 0:s.url,u=H(m);let p="";l?p=u+"/networkLayers/"+o.id:d?p=u+"/eventLayers/"+o.id:c&&(p=u+"/intersectionLayers/"+o.id),p.length>0&&(yield V(s,t,p,u,l,d,c).then((t=>(t&&(r=r.concat([(0,e.Immutable)(t)])),r))))})))))})),yield Promise.all(s),r})))();g(r)})),V=(a,i,n,r,s,o,l)=>(0,t.getFeatureLayer)(a).then((d=>{const c=e.SessionManager.getInstance().getSessionByUrl(m),u=c&&c.token?c.token:"";let p=null;return p=u?{f:"json",token:u}:{f:"json"},new Promise(((c,m)=>{(0,t.requestService)({method:"POST",url:n,params:p}).then((m=>{var u,p,g;m||c(null);const f=d.fields,h=m.type;if("esriLRSNetworkLayer"===h||"esriLRSLinearEventLayer"===h){const h={},v={},y={},S=null==a?void 0:a.getSchema(),I=(null==S?void 0:S.fields)?Object.values(null==S?void 0:S.fields):[],x=m.id;let L=t.LrsLayerType.nonLrs;if(s){L=t.LrsLayerType.network,h.networkUrl=n,h.datasetName=m.datasetName,h.lrsNetworkId=m.lrsNetworkId;const e=m.routeIdFieldName;h.routeIdFieldSchema=I.find((t=>e===t.name));const a=m.routeNameFieldName;h.routeNameFieldSchema=I.find((e=>a===e.name));const i=m.lineIdFieldName;h.lineIdFieldSchema=I.find((e=>i===e.name));const r=m.lineNameFieldName;h.lineNameFieldSchema=I.find((e=>r===e.name));const s=m.lineOrderFieldName;h.lineOrderFieldSchema=I.find((e=>s===e.name));const o=m.fromDateFieldName;h.fromDateFieldSchema=I.find((e=>o===e.name));const l=m.toDateFieldName;if(h.toDateFieldSchema=I.find((e=>l===e.name)),h.useRouteName=m.supportsLines,(0,t.isDefined)(a)&&e.length&&(h.useRouteName=!0),h.supportsLines=m.supportsLines,h.supportsLines){const e=null==m?void 0:m.lineIdFieldName;h.lineIdFieldSchema=I.find((t=>e===t.name));const t=null==m?void 0:m.lineNameFieldName;h.lineNameFieldSchema=I.find((e=>t===e.name));const a=null==m?void 0:m.lineOrderFieldName;h.lineOrderFieldSchema=I.find((e=>a===e.name))}h.measurePrecision=m.measurePrecision,h.unitsOfMeasure=m.unitsOfMeasure;const d=[],c=m.eventLayers;c.length>0&&c.forEach((e=>{d.push(e.name)})),h.eventLayers=d;const u=[],p=m.intersectionLayers;p.length>0&&p.forEach((e=>{u.push(e.name)})),h.intersectionLayers=u}else if(o){L=t.LrsLayerType.event,v.datasetName=m.datasetName,v.eventUrl=n,v.fromDateFieldName=m.fromDateFieldName,v.toDateFieldName=m.toDateFieldName,v.derivedFromMeasureFieldName=m.derivedFromMeasureFieldName,v.derivedRouteIdFieldName=m.derivedRouteIdFieldName,v.derivedRouteNameFieldName=m.derivedRouteNameFieldName,v.derivedToMeasureFieldName=m.derivedToMeasureFieldName,v.fromReferentLocationFieldName=m.fromReferentLocationFieldName,v.fromReferentMethodFieldName=m.fromReferentMethodFieldName,v.fromReferentOffsetFieldName=m.fromReferentOffsetFieldName,v.toReferentLocationFieldName=m.toReferentLocationFieldName,v.toReferentMethodFieldName=m.toReferentMethodFieldName,v.toReferentOffsetFieldName=m.toReferentOffsetFieldName,v.locErrorFieldName=m.locErrorFieldName,v.eventIdFieldName=m.eventIdFieldName,v.routeIdFieldName=m.routeIdFieldName,v.routeNameFieldName=m.routeNameFieldName,v.fromMeasureFieldName=m.fromMeasureFieldName,v.toRouteIdFieldName=m.toRouteIdFieldName,v.toRouteNameFieldName=m.toRouteNameFieldName,v.toMeasureFieldName=m.toMeasureFieldName;const e=[v.fromDateFieldName,v.toDateFieldName,v.derivedFromMeasureFieldName,v.derivedRouteIdFieldName,v.derivedRouteNameFieldName,v.derivedToMeasureFieldName,v.fromReferentLocationFieldName,v.fromReferentMethodFieldName,v.fromReferentOffsetFieldName,v.toReferentLocationFieldName,v.toReferentMethodFieldName,v.toReferentOffsetFieldName,v.locErrorFieldName,v.eventIdFieldName,v.routeIdFieldName,v.routeNameFieldName,v.fromMeasureFieldName,v.toRouteIdFieldName,v.toRouteNameFieldName,v.toMeasureFieldName],i=null==d?void 0:d.objectIdField,r=null==d?void 0:d.globalIdField,s=null==d?void 0:d.editFieldsInfo,o=[i,r];s&&(o.push(s.creationDateField),o.push(s.creatorField),o.push(s.editDateField),o.push(s.editorField));const l=a;(null===(u=null==l?void 0:l.layerDefinition)||void 0===u?void 0:u.hasGeometryProperties)&&(null===(g=null===(p=null==l?void 0:l.layerDefinition)||void 0===p?void 0:p.geometryProperties)||void 0===g?void 0:g.shapeLengthFieldName)&&o.push(l.layerDefinition.geometryProperties.shapeLengthFieldName);const c=e.map((e=>(0,t.isDefined)(e)?e.toLowerCase():e)),f=o.map((e=>(0,t.isDefined)(e)?e.toLowerCase():e));v.lrsFields=I.filter((e=>c.includes(e.name.toLowerCase())));const h=I.filter((e=>!c.includes(e.name.toLowerCase())&&!f.includes(e.name.toLowerCase()))),y=[];h.forEach((e=>{const t={field:e,enabled:!0,editable:!0,description:""};y.push(t)})),v.attributeFields=y,v.parentNetworkId=m.parentNetwork.id,v.canSpanRoutes=m.canSpanRoutes}else if(l){L=t.LrsLayerType.intersection;const e=m.routeIdFieldName;y.routeIdFieldSchema=f.find((t=>e===t.name)),y.parentNetworkId=m.parentNetwork.id}const N={id:a.id,serviceId:x,name:a.getLabel(),originName:a.getLayerDefinition().name,lrsUrl:r,useDataSource:i,layerType:L,networkInfo:h||void 0,eventInfo:v||void 0,intersectionInfo:y||void 0,useFieldAlias:!0},b=(0,e.Immutable)(Object.assign({},N,{layerInfo:N}));c(b)}else c(null)}))}))})),H=e=>{let t=e;return t.includes("FeatureServer")&&(t=t.substring(0,t.indexOf("FeatureServer"))),t.includes("MapServer")&&(t=t.substring(0,t.indexOf("MapServer"))),t+"MapServer/exts/LRServer"},q=e.React.useCallback((()=>{P(-1)}),[]),K=e.css`
    border-bottom: 1px 
    solid var(--ref-palette-neutral-700);
        
    &.h-100 > 
    .jimu-widget-setting--section {
      border-bottom: none;
    }

    .error-tips {
      font-style: italic;
      font-size: 12px;
      color: var(--ref-palette-neutral-1000);
      margin-top: 5px;
      .display-error-tips {
        width: calc(100% - 20px);
        margin: 0 4px;
        color: ${p.sys.color.error.main};
      }
    }

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
          color: ${p.ref.palette.neutral[1e3]};
          font-size: ${e.polished.rem(14)};
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon {
          color: ${p.ref.palette.neutral[800]};
        }
      }
    }
  `,$={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:r.TreeItemActionType.RenderOverrideItem,children:[{name:r.TreeItemActionType.RenderOverrideItemDroppableContainer,withListGroupItemWrapper:!1,children:[{name:r.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:r.TreeItemActionType.RenderOverrideItemBody,children:[{name:r.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:r.TreeItemActionType.RenderOverrideItemDragHandle},{name:r.TreeItemActionType.RenderOverrideItemTitle},{name:r.TreeItemActionType.RenderOverrideItemDetailToggle},{name:r.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})};return(0,e.jsx)("div",{ref:w,css:K,className:(0,e.classNames)("d-flex flex-column",{"h-100":0===d.length})},(0,e.jsx)(n.SettingSection,{className:"border-0"},(0,e.jsx)(s.Fragment,null,(0,e.jsx)(n.SettingRow,{label:B("selectMap")}),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(n.MapWidgetSelector,{onSelect:e=>{N(e)},useMapWidgetIds:c})),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(a.Button,{role:"button",className:"w-100 text-dark",type:"primary",onClick:()=>{if(j(!1),E(!1),D(!1),R(!1),void 0===(null==c?void 0:c[0]))R(!0),setTimeout((()=>{R(!1)}),t.errorMessageDelay);else{const e=U();e.length>1?(E(!0),setTimeout((()=>{E(!1)}),t.errorMessageDelay)):e.length>0?J(e,0):(j(!0),setTimeout((()=>{j(!1)}),t.errorMessageDelay))}},title:B("loadLayers"),"aria-label":B("loadLayers")},B("loadLayers"))),d&&d.length>0&&(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(a.Button,{role:"button",className:"w-100 text-dark",type:"primary",onClick:v,title:B("clearLayers"),"aria-label":B("clearLayers")},B("clearLayers"))),F&&(0,e.jsx)("div",{className:"text-break error-tips d-flex align-items-center"},(0,e.jsx)(s.Fragment,null,(0,e.jsx)(u,{color:p.sys.color.error.main}),(0,e.jsx)("div",{className:"display-error-tips"},(0,t.formatMessage)(b,"noLrsLayersTips")))),T&&(0,e.jsx)("div",{className:"text-break error-tips d-flex align-items-center"},(0,e.jsx)(s.Fragment,null,(0,e.jsx)(u,{color:p.sys.color.error.main}),(0,e.jsx)("div",{className:"display-error-tips"},(0,t.formatMessage)(b,"noMapSelectedTips")))),M&&(0,e.jsx)("div",{className:"text-break error-tips d-flex align-items-center"},(0,e.jsx)(s.Fragment,null,(0,e.jsx)(u,{color:p.sys.color.error.main}),(0,e.jsx)("div",{className:"display-error-tips"},B("noNetworkLayersTips")))),C&&(0,e.jsx)("div",{className:"text-break error-tips d-flex align-items-center"},(0,e.jsx)(s.Fragment,null,(0,e.jsx)(u,{color:p.sys.color.error.main}),(0,e.jsx)("div",{className:"display-error-tips"},B("noPointEventLayersTips")))),k&&(0,e.jsx)("div",{className:"text-break error-tips d-flex align-items-center"},(0,e.jsx)(s.Fragment,null,(0,e.jsx)(u,{color:p.sys.color.error.main}),(0,e.jsx)("div",{className:"display-error-tips"},(0,t.formatMessage)(b,"multipleServicesTips")))))),(0,e.jsx)(n.SettingSection,{className:(0,e.classNames)("pt-0 border-0",{"h-100":0===d.length})},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)("div",{className:"setting-ui-unit-list w-100"},(0,e.jsx)(r.List,Object.assign({className:"setting-ui-unit-list-exsiting",itemsJson:d.map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`,itemStateChecked:A===t,itemStateTitle:e.name,itemStateCommands:[{label:B("remove"),iconProps:()=>({icon:x,size:12}),action:({data:e})=>{const{itemJsons:[t]}=e,a=+t.itemKey;a===A&&q(),f(a)}}]}))),renderOverrideItemDetailToggle:(i,n)=>{const{itemJsons:r}=n.props,[s]=r;return(e=>{const a=d.at(e);return!(0,t.isDefined)(a)||!(0,t.isDefined)(a.eventInfo)||a.layerType!==t.LrsLayerType.event||d.findIndex((e=>e.serviceId===a.eventInfo.parentNetworkId))>-1})(+s.itemKey)?"":(0,e.jsx)(a.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:B("missingParentNetwork")})},dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:a}=t.props,[,i]=a;L(i.map((e=>e.itemStateDetailContent)))},onClickItemBody:(e,t)=>{const{itemJsons:[a]}=t.props;var i;i=+a.itemKey,P(i===A?-1:i)}},$)),d.length===A&&(0,e.jsx)(r.List,Object.assign({className:"setting-ui-unit-list-new",css:e.css`.jimu-tree-item__detail-toggle { display: none !important; }`,itemsJson:[{name:"......"}].map((e=>({itemStateDetailContent:e,itemKey:`${A}`,itemStateChecked:!0,itemStateTitle:e.name,itemStateCommands:[]}))),dndEnabled:!1},$)))),0===d.length&&(0,e.jsx)("div",{className:"empty-placeholder w-100 h-100"},(0,e.jsx)("div",{className:"empty-placeholder-inner"},(0,e.jsx)("div",{className:"empty-placeholder-icon"},(0,e.jsx)(h,{size:48})),(0,e.jsx)("div",{className:"empty-placeholder-text",id:"edit-blank-msg",dangerouslySetInnerHTML:{__html:B("blankStatus")}}))),(0,e.jsx)(n.SidePopper,{isOpen:A>=0&&!e.urlUtils.getAppIdPageIdFromUrl().pageId,toggle:q,position:"right",trigger:null==w?void 0:w.current,title:B("layerConfig")},(0,e.jsx)(S,{widgetId:l,index:A,total:d.length,lrsLayer:d[A],onLayerChanged:y}))))}var N=function(e,t,a,i){return new(a||(a=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function o(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}l((i=i.apply(e,t||[])).next())}))};class b extends e.React.PureComponent{constructor(n){super(n),this.updateWidgetJson=(...e)=>{const[t,...a]=e,i=Object.assign(Object.assign({id:this.props.id},t));this.props.onSettingChange(i,...a)},this.updateConfigForOptions=(...e)=>N(this,void 0,void 0,(function*(){let a=null,i=e.reduce(((e,[t,i,n])=>("lrsLayers"===t&&(null==n?void 0:n.dsUpdateRequired)&&(a=this.getAllDataSources(i)),e.set(t,i))),this.props.config);const n=[],r=[],s=[];if(i.lrsLayers.forEach((e=>{e.layerType===t.LrsLayerType.network?n.push(e.name):e.layerType===t.LrsLayerType.event?r.push(e.name):e.layerType===t.LrsLayerType.intersection&&s.push(e.name)})),i=i.setIn(["networkLayers"],n),i=i.setIn(["eventLayers"],r),i=i.setIn(["intersectionLayers"],s),0===i.lrsLayers.length){const e={index:-1,name:""};i=i.setIn(["defaultEvent"],e)}if(n.length>0){const e=i.lrsLayers.find((e=>e.layerType===t.LrsLayerType.network));if((0,t.isDefined)(e)){const a=yield(0,t.isConflictPreventionEnabled)(e.lrsUrl);i=i.setIn(["conflictPreventionEnabled"],a)}}a?this.updateWidgetJson({config:i,useDataSources:Object.values(a.useDataSourceMap)}):this.updateWidgetJson({config:i})})),this.updateLrsList=()=>{},this.getAllDataSources=t=>(0,e.Immutable)(t).asMutable({deep:!0}).reduce(((e,t)=>{const a=t.useDataSource,i=a.dataSourceId;return e.useDataSourceMap[i]=e.useDataSourceMap[i]||a,e.useDataSourceMap[i].fields=a.fields,e}),{useDataSourceMap:{}}),this.addLayers=(t,a=!0)=>{var i,n,r;let s=null!==(i=this.props.config.lrsLayers)&&void 0!==i?i:(0,e.Immutable)([]),o=null!==(r=null===(n=this.props.config.lrsLayers)||void 0===n?void 0:n.length)&&void 0!==r?r:0;t.forEach((t=>{s=e.Immutable.set(s,o,t),o++})),this.updateConfigForOptions(["lrsLayers",s,{dsUpdateRequired:a}])},this.updateLayerItem=(t,a,i=!1)=>{var n;let r=null!==(n=this.props.config.lrsLayers)&&void 0!==n?n:(0,e.Immutable)([]);r=e.Immutable.set(r,t,a),this.updateConfigForOptions(["lrsLayers",r,{dsUpdateRequired:i}])},this.reOrderLayers=e=>{this.updateConfigForOptions(["lrsLayers",e])},this.removeAllLayers=(e=!1)=>{const t={dsUpdateRequired:e};this.updateConfigForOptions(["lrsLayers",[],t])},this.removeLayer=(e,t=!1)=>{const a={dsUpdateRequired:t},i=this.props.config.lrsLayers.asMutable({deep:!0});i.splice(e,1),this.updateConfigForOptions(["lrsLayers",i,a])},this.mapWidgetIdUpdated=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e}),this.removeAllLayers()},this.getI18nMessage=(e,t)=>{const n=Object.assign({},i,a.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:n[e]},t)},this.handleDefaultEventChanged=e=>{const t=this.props.config.lrsLayers.findIndex((t=>t.name===e)),a={index:t,name:this.props.config.lrsLayers[t].name};this.props.onSettingChange({id:this.props.id,config:this.props.config.set("defaultEvent",a)})},this.handleDisplayChange=()=>{const e=this.props.config.displayConfig.asMutable({deep:!0});e.hideEvent=!e.hideEvent,this.props.onSettingChange({id:this.props.id,config:this.props.config.set("displayConfig",e)})},this.state={showLayerPanel:!1,noLrsLayers:!1,noLrsEvents:!1,dsToRemove:null}}getDefaultEvent(){const e=this.props.config;if(e.defaultEvent&&-1!==e.defaultEvent.index){const t=e.defaultEvent.index,a=e.defaultEvent.name;return a===e.lrsLayers[t].name?a:(this.handleDefaultEventChanged(e.lrsLayers[t].name),e.lrsLayers[t].name)}{const e=this.props.config.lrsLayers.find((e=>e.layerType===t.LrsLayerType.event));return this.handleDefaultEventChanged(e.name),e.name}}getDefaultDisplayConfig(){return{hideEvent:!1}}getDisplayConfig(){if(this.props.config.displayConfig)return this.props.config.displayConfig;{const e=this.getDefaultDisplayConfig();return this.props.onSettingChange({id:this.props.id,config:this.props.config.set("displayConfig",e)}),e}}render(){const{config:i}=this.props;return(0,e.jsx)("div",{className:"setting-add-point-event h-100"},(0,e.jsx)("div",{className:"jimu-widget-setting setting-add-point-event__setting-content h-100"},(0,e.jsx)(L,{widgetId:this.props.id,layers:this.props.config.lrsLayers,mapWidgetIds:this.props.useMapWidgetIds,portalUrl:this.props.portalUrl,theme:this.props.theme,onLayersAdded:this.addLayers,onLayerChanged:this.updateLayerItem,onClearAll:this.removeAllLayers,onLayerRemoved:this.removeLayer,onLayerOrderChanged:this.reOrderLayers,onMapWidgetedChanged:this.mapWidgetIdUpdated,intl:this.props.intl}),i.eventLayers&&0!==i.eventLayers.length&&(0,e.jsx)("div",null,(0,e.jsx)(n.SettingSection,{role:"group",title:this.getI18nMessage("defaultSettings"),"aria-label":this.getI18nMessage("defaultSettings")},(0,e.jsx)(n.SettingRow,{flow:"wrap",label:this.getI18nMessage("defaultEvent")},(0,e.jsx)(a.Select,{"aria-label":this.getI18nMessage("defaultEvent"),className:"w-100",size:"sm",value:this.getDefaultEvent(),onChange:e=>{this.handleDefaultEventChanged(e.target.value)}},i.eventLayers.map(((t,a)=>(0,e.jsx)("option",{key:a,value:t},t)))))),(0,e.jsx)(n.SettingSection,{role:"group","aria-label":(0,t.formatMessage)(this.props.intl,"displaySettings"),title:(0,t.formatMessage)(this.props.intl,"displaySettings")},(0,e.jsx)(n.SettingRow,{flow:"no-wrap",label:(0,t.formatMessage)(this.props.intl,"hideEvent")},(0,e.jsx)(a.Switch,{"aria-label":(0,t.formatMessage)(this.props.intl,"hideEvent"),checked:this.getDisplayConfig().hideEvent,onChange:()=>{this.handleDisplayChange()}}))))))}}function w(e){l.p=e}})(),d})())}}}));