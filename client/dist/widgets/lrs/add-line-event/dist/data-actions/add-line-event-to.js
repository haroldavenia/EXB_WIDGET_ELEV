System.register(["jimu-core","widgets/shared-code/lrs"],(function(e,t){var r={},n={};return{setters:[function(e){r.AbstractDataAction=e.AbstractDataAction,r.DataLevel=e.DataLevel,r.DataSourceStatus=e.DataSourceStatus,r.DataSourceTypes=e.DataSourceTypes,r.MutableStoreManager=e.MutableStoreManager,r.getAppStore=e.getAppStore,r.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){n.QueryRouteMeasures=e.QueryRouteMeasures,n.getDateWithTZOffset=e.getDateWithTZOffset,n.getRouteFromEndMeasures=e.getRouteFromEndMeasures,n.isDefined=e.isDefined,n.queryRouteIdOrName=e.queryRouteIdOrName}],execute:function(){e((()=>{"use strict";var e={79244:e=>{e.exports=r},47626:e=>{e.exports=n}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{default:()=>q});const e="object"==typeof global&&global&&global.Object===Object&&global;var t="object"==typeof self&&self&&self.Object===Object&&self;const r=e||t||Function("return this")();var n=/\s/;const a=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t};var u=/^\s+/;const s=function(e){return e?e.slice(0,a(e)+1).replace(u,""):e};const l=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const c=r.Symbol;var d=Object.prototype,f=d.hasOwnProperty,v=d.toString,g=c?c.toStringTag:void 0;const m=function(e){var t=f.call(e,g),r=e[g];try{e[g]=void 0;var n=!0}catch(e){}var o=v.call(e);return n&&(t?e[g]=r:delete e[g]),o};var S=Object.prototype.toString;const p=function(e){return S.call(e)};var y=c?c.toStringTag:void 0;const D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":y&&y in Object(e)?m(e):p(e)};const b=function(e){return null!=e&&"object"==typeof e};const h=function(e){return"symbol"==typeof e||b(e)&&"[object Symbol]"==D(e)};var N=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,O=/^0o[0-7]+$/i,I=parseInt;const j=function(e){if("number"==typeof e)return e;if(h(e))return NaN;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var r=M.test(e);return r||O.test(e)?I(e.slice(2),r?2:8):N.test(e)?NaN:+e};var R=1/0;const T=function(e){return e?(e=j(e))===R||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};const w=function(e){var t=T(e),r=t%1;return t==t?r?t-r:t:0};const P=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o};const A=Array.isArray;var F=c?c.prototype:void 0,L=F?F.toString:void 0;const x=function e(t){if("string"==typeof t)return t;if(A(t))return P(t,e)+"";if(h(t))return L?L.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};const k=function(e){return null==e?"":x(e)};var E=r.isFinite,J=Math.min;const C=function(e){var t=Math[e];return function(e,r){if(e=j(e),(r=null==r?0:J(w(r),292))&&E(e)){var n=(k(e)+"e").split("e"),o=t(n[0]+"e"+(+n[1]+r));return+((n=(k(o)+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}("round");var G=o(79244),W=o(47626),Z=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function u(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}s((n=n.apply(e,t||[])).next())}))};class q extends G.AbstractDataAction{isSupported(e,t){return Z(this,void 0,void 0,(function*(){var r;if(e.length>1)return!1;const n=e[0];if(1!==n.records.length)return!1;const o=n.records[0],i=o.getData(),a=JSON.parse(JSON.stringify(i)),u=Object.fromEntries(Object.entries(a).map((([e,t])=>[e.toLowerCase(),t])));let s=null,l=!1;if(yield(0,G.loadArcGISJSAPIModules)(["esri/geometry/Polyline"]).then((e=>{[s]=e})).then((()=>{const e=o.getGeometry();0===new s(e).paths.length&&(l=!0)})),!l)return!1;if(""===String(u.measure))return!1;const{dataSource:c,records:d}=n,f=c.type===G.DataSourceTypes.FeatureLayer||c.type===G.DataSourceTypes.SceneLayer,v=c.isDataSourceSet,g=t!==G.DataLevel.Records,m=n.dataSource,S=(null==m?void 0:m.supportSpatialInfo)&&(null==m?void 0:m.supportSpatialInfo()),p=t===G.DataLevel.Records&&0===(null==d?void 0:d.length),y=!c.isInAppConfig()&&!f;if(v||g||p||y||!S)return!1;if(!c||c.getStatus()===G.DataSourceStatus.NotReady)return!1;const D=c.getOriginDataSources()[0],b=Q(),h=null===(r=null==b?void 0:b.widgets)||void 0===r?void 0:r[this.widgetId];if(!(0,W.isDefined)(D))return!1;let N,M;if(h.config.lrsLayers.forEach((e=>{e.id===D.id&&(N=e.networkInfo)})),!N)return!1;const O=N.eventLayers;return h.config.lrsLayers.forEach((e=>{O.forEach((t=>{String(e.originName)===t&&(M=e.eventInfo)}))})),!!M}))}onExecute(e,t){return Z(this,void 0,void 0,(function*(){var r;const n=e[0],{records:o,dataSource:i}=n,a=i.getOriginDataSources()[0];if(t===G.DataLevel.DataSource)G.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"selectedNetworkDataSource",i);else{const e=Q(),t=null===(r=null==e?void 0:e.widgets)||void 0===r?void 0:r[this.widgetId];let n;t.config.lrsLayers.forEach((e=>{e.id===a.id&&(n=e.networkInfo)}));const i=t.config.hideMeasures,u=o[0],s=u.getData(),l=JSON.parse(JSON.stringify(s)),c=Object.fromEntries(Object.entries(l).map((([e,t])=>[e.toLowerCase(),t]))),d={routeId:"",routeName:"",fromMeasure:NaN,toMeasure:NaN,fromDate:void 0,toDate:void 0,selectedMeasure:NaN,selectedFromDate:void 0,selectedToDate:void 0},f=Object.keys(l).find((e=>e===n.routeIdFieldSchema.name)),v=Object.keys(l).find((e=>{var t;return e===(null===(t=n.routeNameFieldSchema)||void 0===t?void 0:t.name)})),g=Object.keys(l).find((e=>e===n.fromDateFieldSchema.name)),m=Object.keys(l).find((e=>e===n.toDateFieldSchema.name)),S=Object.keys(l).find((e=>{var t;return e===(null===(t=n.lineIdFieldSchema)||void 0===t?void 0:t.name)})),p=Object.keys(l).find((e=>{var t;return e===(null===(t=n.lineNameFieldSchema)||void 0===t?void 0:t.name)})),y=Object.keys(l).find((e=>{var t;return e===(null===(t=n.lineOrderFieldSchema)||void 0===t?void 0:t.name)})),D=(0,W.isDefined)(l[g])?(0,W.getDateWithTZOffset)(l[g],a):null,b=(0,W.isDefined)(l[m])?(0,W.getDateWithTZOffset)(l[m],a):null;if(d.fromDate=D,d.toRouteFromDate=D,d.selectedFromDate=D,d.toDate=b,d.toRouteToDate=b,d.selectedToDate=b,d.routeId=(0,W.isDefined)(l[f])?String(l[f]):null,d.toRouteId=(0,W.isDefined)(l[f])?String(l[f]):null,d.routeName=(0,W.isDefined)(l[v])?String(l[v]):null,d.toRouteName=(0,W.isDefined)(l[v])?String(l[v]):null,d.lineId=(0,W.isDefined)(l[S])?String(l[S]):null,d.toLineId=(0,W.isDefined)(l[S])?String(l[S]):null,d.routeLineOrder=(0,W.isDefined)(l[y])?Number(l[y]):null,d.toRouteLineOrder=(0,W.isDefined)(l[y])?Number(l[y]):null,d.lineName=(0,W.isDefined)(l[p])?String(l[p]):null,d.toLineName=(0,W.isDefined)(l[p])?String(l[p]):null,d.fromMeasure=(0,W.isDefined)(c.measure)?Number(c.measure):NaN,d.toRouteFromMeasure=(0,W.isDefined)(c.measure)?Number(c.measure):NaN,d.selectedToMeasure=(0,W.isDefined)(c.measure)?Number(c.measure):NaN,d.toMeasure=(0,W.isDefined)(c.tomeasure)?Number(c.tomeasure):NaN,d.toRouteToMeasure=(0,W.isDefined)(c.tomeasure)?Number(c.tomeasure):NaN,d.validRoute=!0,d.validToRoute=!0,!i){const e=u.getGeometry();d.selectedPoint=null,d.selectedToPoint=e}let h=null;if((0,W.isDefined)(n)){const e=n.useRouteName?d.routeName:d.routeId;yield(0,W.queryRouteIdOrName)(e.trim(),n,a,!1,!0,"",d.fromDate).then((e=>Z(this,void 0,void 0,(function*(){if((0,W.isDefined)(e)&&(yield Promise.all(e.features.map((e=>Z(this,void 0,void 0,(function*(){h=e.geometry}))))),(0,W.isDefined)(h))){const e=(0,W.getRouteFromEndMeasures)(h);if((0,W.isDefined)(e)){const t=yield(0,W.QueryRouteMeasures)(a,n,e,d.fromDate,d.routeId),r=Math.min(...t),o=Math.max(...t);d.fromMeasure=C(r,n.measurePrecision),d.toRouteFromMeasure=C(r,n.measurePrecision),d.toMeasure=C(o,n.measurePrecision),d.toRouteToMeasure=d.toMeasure}if(i){const e=h.getPoint(0,0),t=h.paths[h.paths.length-1].length-1,r=h.getPoint(h.paths.length-1,t);d.selectedPoint=e,d.selectedToPoint=r,d.selectedMeasure=d.fromMeasure,d.selectedToMeasure=d.toRouteToMeasure}}}))))}d.selectedPolyline=(0,W.isDefined)(h)?h:null,d.selectedToPolyline=(0,W.isDefined)(h)?h:null,G.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"selectedNetworkDataSource",a),G.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"selectedRouteInfo",d)}return!0}))}}function Q(){var e,t,r;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,G.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig:null===(r=(0,G.getAppStore)().getState())||void 0===r?void 0:r.appConfig}})(),i})())}}}));