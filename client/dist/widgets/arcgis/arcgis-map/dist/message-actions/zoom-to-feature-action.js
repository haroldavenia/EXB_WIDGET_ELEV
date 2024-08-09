System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},o={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.AppMode=e.AppMode,a.DataSourceManager=e.DataSourceManager,a.DataSourcesChangeType=e.DataSourcesChangeType,a.Immutable=e.Immutable,a.MessageCarryData=e.MessageCarryData,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.RecordSetChangeType=e.RecordSetChangeType,a.getAppStore=e.getAppStore},function(e){o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{"use strict";var e={62686:e=>{e.exports=o},79244:e=>{e.exports=a}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>i});var e=r(79244),t=r(62686);function a(e,t){let a=null;return e.clone?a=e.clone():(a=t.fromJSON(Object.assign({},e)),a.attributes=Object.assign({},e.attributes)),a}function o(t,a){var o,r;const s=u(),n=null===(o=null==s?void 0:s.widgets)||void 0===o?void 0:o[t],i=null===(r=null==n?void 0:n.manifest)||void 0===r?void 0:r.publishMessages;let c=e.MessageCarryData.UseDataSource;return null==i||i.forEach((e=>{const t=e;(null==t?void 0:t.messageCarryData)&&(null==t?void 0:t.messageType)===a&&(c=null==t?void 0:t.messageCarryData)})),c}function n(t,a){var r;const s=o(t,a),n=u(),i=null===(r=null==n?void 0:n.widgets)||void 0===r?void 0:r[t],c=(null==i?void 0:i.useDataSources)||(0,e.Immutable)([]),l=function(t){var a;const o=null!==(a=null==t?void 0:t.map((e=>({dataSourceId:e,mainDataSourceId:e,rootDataSourceId:null}))))&&void 0!==a?a:[];return(0,e.Immutable)(o)}(null==i?void 0:i.outputDataSources)||(0,e.Immutable)([]),d=null==c?void 0:c.asMutable({deep:!0}).concat(null==l?void 0:l.asMutable({deep:!0}));switch(s){case e.MessageCarryData.OutputDataSource:return l;case e.MessageCarryData.UseDataSource:return c;case e.MessageCarryData.BothDataSource:return(0,e.Immutable)(d)}}function u(){var t,a,o;return window.jimuConfig.isBuilder?null===(a=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===a?void 0:a.appConfig:null===(o=(0,e.getAppStore)().getState())||void 0===o?void 0:o.appConfig}class i extends e.AbstractMessageAction{constructor(){super(...arguments),this.NoLockTriggerLayerWidgets=["Map"]}filterMessageDescription(t){const a=(0,e.getAppStore)().getState().appRuntimeInfo.appMode;if(t.messageType===e.MessageType.ExtentChange)return a!==e.AppMode.Express;if(t.messageType===e.MessageType.DataSourcesChange)return!0;if(t.messageType!==e.MessageType.DataRecordSetChange&&t.messageType!==e.MessageType.DataRecordsSelectionChange&&t.messageType!==e.MessageType.DataSourceFilterChange)return!1;{const a=e.DataSourceManager.getInstance();return n(t.widgetId,t.messageType).some((e=>{const t=a.getDataSource(e.dataSourceId);return!!t&&("WEB_MAP"===t.type||"WEB_SCENE"===t.type||!!t.getGeometryType())}))}}filterMessage(e){return!0}getSettingComponentUri(t,a){const o=(0,e.getAppStore)().getState().appRuntimeInfo.appMode;return t===e.MessageType.DataRecordsSelectionChange||t===e.MessageType.DataRecordSetChange||t===e.MessageType.DataSourceFilterChange?o===e.AppMode.Express?null:"message-actions/zoom-to-feature-action-setting":null}onExecute(o,r){return(0,t.loadArcGISJSAPIModules)(["esri/Graphic"]).then((t=>{var s;let n=null;[n]=t;let u=null;const i={left:50,right:50,top:50,bottom:50};switch(o.type){case e.MessageType.DataRecordSetChange:const t=o;if(t.changeType===e.RecordSetChangeType.CreateUpdate){const o=[];t.dataRecordSets.forEach((e=>{if(e&&e.records){const t=[];for(let o=0;o<e.records.length;o++)e.records[o].feature&&t.push(a(e.records[o].feature,n));t.length>0&&o.push(t)}})),u=c(r,i);const s={type:"zoom-to-array-graphics",arrayFeatures:o,zoomToOption:u};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",s)}break;case e.MessageType.DataRecordsSelectionChange:const l=o.records,d=[];let g=null;if(l){if(l[0]){l[0].dataSource&&(g=l[0].dataSource.id);const e=[],t=l[0].dataSource.getMainDataSource();if(t){e.push(t.id);const a=t.getAssociatedDataSource&&t.getAssociatedDataSource();a&&e.push(a.id)}if(!(null===(s=null==r?void 0:r.useDataSources)||void 0===s?void 0:s.some((t=>(null==t?void 0:t.mainDataSourceId)&&e.includes(null==t?void 0:t.mainDataSourceId)))))break}for(let e=0;e<l.length;e++)l[e].feature&&d.push(a(l[e].feature,n))}const p=d&&d.length>0;if(u=c(r,i),p&&g){const t={type:"zoom-to-graphics",features:d,dataSourceId:g,zoomToOption:u};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",t)}break;case e.MessageType.ExtentChange:const S=o,m=S.getRelatedWidgetIds();if(m.includes(this.widgetId))break;const y={value:{type:"zoom-to-extent",extent:S.extent,viewpoint:S.viewpoint,stationary:S.stationary,interacive:S.interacive,zoomToOption:void 0,publishTime:S.publishTime,publishWidgetId:S.widgetId},relatedWidgets:m};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue",y);break;case e.MessageType.DataSourceFilterChange:const M=o,h=[];r.useDataSources&&r.useDataSources.forEach((e=>{const t=null==e?void 0:e.dataSourceId;t&&h.push(t)}));const f=(M.dataSourceIds||[]).filter((e=>h.includes(e)));if(0===f.length)break;u=c(r,i);const v={type:"zoom-to-query-params",dataSourceIds:f,zoomToOption:u,useDataSources:r.useDataSources||[]};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",v);break;case e.MessageType.DataSourcesChange:const T=o;if(T.changeType===e.DataSourcesChangeType.Create){const t=[];T.dataSources.forEach((e=>{t.push(e.id)})),u=c(r,i);const a={type:"zoom-to-layers",dataSourceIds:t,zoomToOption:u};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",a)}}return!0}))}}function c(e,t){let a={};return e&&e.isUseCustomZoomToOption&&"number"==typeof e.zoomToOption.scale&&(a.scale=e.zoomToOption.scale),t&&(a.padding=t),0===Object.keys(a).length&&(a=null),a}})(),s})())}}}));