System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},o={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.AppMode=e.AppMode,a.DataSourceManager=e.DataSourceManager,a.Immutable=e.Immutable,a.MessageCarryData=e.MessageCarryData,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.RecordSetChangeType=e.RecordSetChangeType,a.getAppStore=e.getAppStore},function(e){o.ActionType=e.ActionType,o.SHOW_ON_MAP_DATA_ID_PREFIX=e.SHOW_ON_MAP_DATA_ID_PREFIX}],execute:function(){e((()=>{"use strict";var e={62686:e=>{e.exports=o},79244:e=>{e.exports=a}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{default:()=>i});var e=r(79244),t=r(62686);function a(t,a){var o,r;const n=s(),i=null===(o=null==n?void 0:n.widgets)||void 0===o?void 0:o[t],u=null===(r=null==i?void 0:i.manifest)||void 0===r?void 0:r.publishMessages;let d=e.MessageCarryData.UseDataSource;return null==u||u.forEach((e=>{const t=e;(null==t?void 0:t.messageCarryData)&&(null==t?void 0:t.messageType)===a&&(d=null==t?void 0:t.messageCarryData)})),d}function o(t,o){var r;const n=a(t,o),i=s(),u=null===(r=null==i?void 0:i.widgets)||void 0===r?void 0:r[t],d=(null==u?void 0:u.useDataSources)||(0,e.Immutable)([]),l=function(t){var a;const o=null!==(a=null==t?void 0:t.map((e=>({dataSourceId:e,mainDataSourceId:e,rootDataSourceId:null}))))&&void 0!==a?a:[];return(0,e.Immutable)(o)}(null==u?void 0:u.outputDataSources)||(0,e.Immutable)([]),g=null==d?void 0:d.asMutable({deep:!0}).concat(null==l?void 0:l.asMutable({deep:!0}));switch(n){case e.MessageCarryData.OutputDataSource:return l;case e.MessageCarryData.UseDataSource:return d;case e.MessageCarryData.BothDataSource:return(0,e.Immutable)(g)}}function s(){var t,a,o;return window.jimuConfig.isBuilder?null===(a=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===a?void 0:a.appConfig:null===(o=(0,e.getAppStore)().getState())||void 0===o?void 0:o.appConfig}class i extends e.AbstractMessageAction{filterMessageDescription(t){if(t.messageType===e.MessageType.DataRecordSetChange){const a=e.DataSourceManager.getInstance();return o(t.widgetId,t.messageType).some((e=>{const t=a.getDataSource(e.dataSourceId);return!!t&&!!t.getGeometryType()}))}return!1}filterMessage(e){return!0}onRemoveListen(t,a){var o;const r=(null===(o=e.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===o?void 0:o.showOnMapDatas)||{},n={};Object.entries(r).forEach((e=>{var t;(null===(t=e[1])||void 0===t?void 0:t.messageWidgetId)!==a&&(n[e[0]]=e[1])})),e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"showOnMapDatas",n)}getSettingComponentUri(t,a){return(0,e.getAppStore)().getState().appRuntimeInfo.appMode===e.AppMode.Express?null:"message-actions/show-on-map-action-setting"}onExecute(a,o){var r;const n=this._getActiveViewId(this.widgetId,(0,e.getAppStore)().getState().jimuMapViewsInfo),s=this._getDefaultViewId(this.widgetId,(0,e.getAppStore)().getState().jimuMapViewsInfo),i=n||s;let u=(null===(r=e.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===r?void 0:r.showOnMapDatas)||{};return a.changeType===e.RecordSetChangeType.CreateUpdate?a.dataRecordSets.forEach((e=>{const r=this._getIdBase(e.name),d=`${r}???`,l=n?`${r}${n}`:d;s&&s===n&&delete u[d],u[l]={mapWidgetId:this.widgetId,messageWidgetId:a.widgetId,jimuMapViewId:i,dataSet:e,type:t.ActionType.MessageAction,symbolOption:(null==o?void 0:o.isUseCustomSymbol)?o.symbolOption:!1===(null==o?void 0:o.isUseCustomSymbol)?null:void 0,title:l}})):a.changeType===e.RecordSetChangeType.Remove&&a.dataRecordSetNames.forEach((e=>{const t=this._getIdBase(e),a={};Object.entries(u).forEach((e=>{0!==e[0].indexOf(t)&&(a[e[0]]=e[1])})),u=a})),e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"showOnMapDatas",u),Promise.resolve(!0)}_getIdBase(e){return`${t.SHOW_ON_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${e}_`}_getActiveViewId(e,t){return Object.keys(t||{}).find((a=>t[a].mapWidgetId===e&&t[a].isActive))}_getDefaultViewId(e,t){return Object.keys(t||{}).find((a=>t[a].mapWidgetId===e))}}})(),n})())}}}));