System.register(["jimu-core","jimu-arcgis","jimu-core/react","jimu-ui","esri/layers/ElevationLayer","esri/Graphic","esri/geometry"],(function(e,t){var r={},o={},n={},i={},a={},s={},l={};return{setters:[function(e){r.React=e.React},function(e){o.JimuMapViewComponent=e.JimuMapViewComponent},function(e){n.Fragment=e.Fragment,n.useEffect=e.useEffect,n.useRef=e.useRef,n.useState=e.useState},function(e){i.Alert=e.Alert},function(e){a.default=e.default},function(e){s.default=e.default},function(e){l.Polyline=e.Polyline}],execute:function(){e((()=>{var e={89:e=>{"use strict";e.exports=s},435:e=>{"use strict";e.exports=l},282:e=>{"use strict";e.exports=a},686:e=>{"use strict";e.exports=o},244:e=>{"use strict";e.exports=r},972:e=>{"use strict";e.exports=n},321:e=>{"use strict";e.exports=i}},t={};function c(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,c),n.exports}c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var u={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(u),c.d(u,{__set_webpack_public_path__:()=>d,default:()=>l});var e=c(244),t=c(686),r=c(972),o=c(321),n=c(282),i=c(89),a=c(435),s=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))};const l=l=>{var c;const[u,d]=(0,r.useState)(),[p,m]=(0,r.useState)(!1),f=(0,r.useRef)();return(0,r.useEffect)((()=>{var e,t;if(!(null===(e=l.useMapWidgetIds)||void 0===e?void 0:e.length)||!u||"2d"==(null===(t=null==u?void 0:u.view)||void 0===t?void 0:t.type))return m(!0),void(f.current&&f.current.remove());m(!1);let r=u.view;r.when((()=>{const e=r.map.initialViewProperties.viewpoint.camera;r.camera=e;const t={type:"point-3d",verticalOffset:{screenLength:10},symbolLayers:[{type:"text",material:{color:"black"},size:12,text:"",background:{color:[255,255,255,.75]},verticalAlignment:"bottom"}]},o={type:"line-3d",symbolLayers:[{type:"line",material:{color:[150,26,15]},size:2,marker:{type:"style",style:"arrow",placement:"end"}},{type:"line",material:{color:"green"},size:2,marker:{type:"style",style:"circle",placement:"begin"}}]};f.current=r.on("click",(e=>s(void 0,void 0,void 0,(function*(){if(2!=e.button)return;const s=e.mapPoint;(null==s?void 0:s.spatialReference)||(s.spatialReference=r.spatialReference);try{const e=new n.default({url:"https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"}),l=(yield e.queryElevation(s)).geometry.z,c=s.z||0;console.log(`Ground Elevation: ${l}`),console.log(`Scene Elevation: ${c}`),console.log("Total Elevation: "+(c-l)),t.symbolLayers[0].text=`Layer Elevation: ${c.toFixed(2)} FT - Ground Elevation: ${l.toFixed(2)}`,r.graphics.removeAll(),r.graphics.add(new i.default({geometry:s,symbol:t}));const u=new a.Polyline({spatialReference:s.spatialReference,hasZ:!0});u.addPath([[s.x,s.y,l],[s.x,s.y,c]]),r.graphics.add(new i.default({geometry:u,symbol:o}))}catch(e){console.error("Error querying elevation:",e)}}))))}))}),[u,l.useMapWidgetIds]),e.React.createElement("div",{className:"jimu-widget p-2"},p?e.React.createElement(o.Alert,{type:"warning",withIcon:!0,className:"w-100"},"Map is not loaded or is not a scene view"):e.React.createElement(r.Fragment,null,e.React.createElement("div",{style:{borderBottom:"1px solid gray",marginBottom:"10px",paddingBottom:"10px"}},"Right click on the map to see the total elevation.")),l.hasOwnProperty("useMapWidgetIds")&&l.useMapWidgetIds&&1===l.useMapWidgetIds.length&&e.React.createElement(t.JimuMapViewComponent,{useMapWidgetId:null===(c=l.useMapWidgetIds)||void 0===c?void 0:c[0],onActiveViewChange:e=>{d(e)}}))};function d(e){c.p=e}})(),u})())}}}));