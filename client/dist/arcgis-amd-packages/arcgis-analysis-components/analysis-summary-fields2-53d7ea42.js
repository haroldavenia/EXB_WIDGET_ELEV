define(["exports","./index-4ba3e564","./index2-929c934e","./utils-170619d9","./analysis-chip-group2-66b37993","./analysis-label2-d915c3e1","./analysis-summary-fields-popover2-5b8e537a"],(function(e,s,t,i,a,l,o){"use strict";const r=s.proxyCustomElement(class extends s.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisSummaryFieldsChange=s.createEvent(this,"analysisSummaryFieldsChange",7),this.analysisHelpClick=s.createEvent(this,"analysisHelpClick",7),this.valueMap=new Map,this.useInitialSelectedStatistics=!1,this.selection=new Set,this.updateValueMap=(e,s)=>{if(!1===this.valueMap.has(e))this.valueMap.set(e,[s]);else{const t=this.valueMap.get(e)??[];!1===t.includes(s)&&(t.push(s),this.valueMap.set(e,t))}},this.popoverAction=()=>{this.fieldPopoverOpen=!0,!0===this.fieldPopoverOpen?this.createSummaryFieldsPopover():void 0!==this.summaryFieldsPopover&&(this.summaryFieldsPopover.open=!1,this.validate())},this.createSummaryFieldsPopover=()=>{void 0===this.summaryFieldsPopover&&(this.summaryFieldsPopover=document.createElement("analysis-summary-fields-popover"),this.summaryFieldsPopover.addEventListener("analysisSummaryFieldSelectionDone",this.onAnalysisSummaryFieldSelectionDone),this.summaryFieldsPopover.addEventListener("analysisSummaryFieldPopoverClose",this.closePopover)),!1===document.body.contains(this.summaryFieldsPopover)&&(document.body.appendChild(this.summaryFieldsPopover),this.summaryFieldsPopover.open=!0),this.summaryFieldsPopover.referenceElement=this.fieldButton,this.summaryFieldsPopover.open=!0,this.summaryFieldsPopover.layer=this.layer,this.summaryFieldsPopover.usePopupTemplatesInfo=this.usePopupTemplatesInfo,this.summaryFieldsPopover.selection=new Set(this.selection.keys()),this.summaryFieldsPopover.allowDateType=this.allowDateType,this.summaryFieldsPopover.allowStringType=this.allowStringType,this.summaryFieldsPopover.layerInputLocalizedLabel=this.layerInputLocalizedLabel,this.summaryFieldsPopover.noFieldsText=this.noFieldsText,this.summaryFieldsPopover.noLayersText=this.noLayersText,this.summaryFieldsPopover.showFieldDescription=this.showFieldDescription},this.closePopover=()=>{void 0!==this.summaryFieldsPopover&&!0===document.body.contains(this.summaryFieldsPopover)&&(document.body.removeChild(this.summaryFieldsPopover),this.summaryFieldsPopover?.remove(),this.summaryFieldsPopover=void 0,this.fieldPopoverOpen=!1)},this.onAnalysisSummaryFieldSelectionDone=e=>{this.selection=e.detail,this.fieldPopoverOpen=!1,0===this.selection.size?(this.valueMap=new Map,this.value=void 0):(Array.from(this.valueMap.keys()).map((e=>{!1===this.selection.has(e)&&this.removeFromValueMap(e)})),Array.from(this.selection).map((e=>{const s=this.layer.fieldsIndex.get(e),{statistics:t}=this.updateStatisticTypes(s.type);this.useInitialSelectedStatistics=!0,!1===this.valueMap.has(e)&&this.updateValueMap(s.name,t[0])})),this.updateValue()),this.analysisSummaryFieldsChange.emit(),this.validate()},this.onAnalysisChipGroupSelectionChange=e=>{const s=e.target,t=s.selectedChips,i=s.parentElement,a=i.description??i.id;!0===this.useInitialSelectedStatistics&&(this.useInitialSelectedStatistics=!1),this.valueMap.set(a,t),this.updateValue(),this.analysisSummaryFieldsChange.emit()},this.closeField=e=>{const s=e.target.parentElement.id;if(this.selection.delete(s),this.removeFromValueMap(s),void 0!==this.value){let e;e="string"===this.valueFormat?this.value.filter((e=>e.split(" ")[0]!==s)):this.value.filter((e=>e.onStatisticField!==s)),this.value=[...e],this.analysisSummaryFieldsChange.emit()}this.validate()},this.validate=()=>{this.errorMessage=void 0;const e=!this.required||this.valueMap.size>0,s=Array.from(this.valueMap.values()).every((e=>e.length>0));e&&s||(this.errorMessage=this.validationParams?.requiredMessage??this.strings.isRequired)},this.renderErrorMessage=()=>void 0!==this.errorMessage?s.h("calcite-input-message",{status:t.UIInputStatus.INVALID,scale:i.UIDefaults.Scale,icon:"exclamationMarkTriangle"},this.errorMessage):null,this.renderFields=()=>{const e={badInputMessage:this.strings.statisticNotSelected,...this.validationParams};return s.h("calcite-list",null,[...this.valueMap.keys()].map((t=>{const i=this.layer.fieldsIndex.get(t),a=i?.alias??t,l=this.valueMap.get(t),{statistics:o,labels:r}=this.updateStatisticTypes(i?.type??"integer");return s.h("calcite-list-item",{class:"calcite-list-item",label:a,key:t,id:t,description:i?.name},s.h("analysis-chip-group",{onAnalysisChipGroupSelectionChange:this.onAnalysisChipGroupSelectionChange,required:!0,scale:"s",class:"calcite-chip",chipLabel:r,value:o,label:this.strings.statistic,selectionMode:"multi",selectAllEnabled:!0,initialChipSelection:this.useInitialSelectedStatistics?l:[],selectedChips:l,validationParams:e}),s.h("calcite-action",{text:"",slot:"actions-end",icon:"trash",onClick:this.closeField}))})))},this.layer=void 0,this.label=void 0,this.valueFormat=void 0,this.value=void 0,this.required=!1,this.usePopupTemplatesInfo=!0,this.allowDateType=!1,this.allowStringType=!1,this.showFirstLastStatistics=!1,this.validationParams=void 0,this.layerInputLocalizedLabel=void 0,this.noFieldsText=void 0,this.noLayersText=void 0,this.showFieldDescription=!1,this.fieldPopoverOpen=!1,this.errorMessage=void 0}valueChange(){this.valueFormat=void 0!==this.value&&this.value.length>0&&"object"==typeof this.value[0]?"object":this.valueFormat??"string",void 0!==this.value&&0===this.valueMap.size&&void 0!==this.valueFormat&&(this.selection=new Set,this.value.forEach((e=>{let s,t;if("string"===this.valueFormat){const i=e.split(" ");s=i[0],t=i[1]}else s=e.onStatisticField,t=e.statisticType;this.updateValueMap(s,t),this.selection.add(s)})))}async layerChange(e,s){if(void 0!==e&&void 0===s&&!1===this.useInitialSelectedStatistics&&void 0!==this.value?(this.valueChange(),this.useInitialSelectedStatistics=!0):(this.valueMap=new Map,this.selection=new Set,void 0!==s&&(this.value=void 0,this.analysisSummaryFieldsChange.emit())),!1===e?.loaded){this.abortController?.abort();try{this.abortController=new AbortController,await(e?.load(this.abortController.signal))}catch(e){t.wasAborted(e)||(this.errorMessage=this.strings.fieldLoadingErrorText)}}this.closePopover()}disconnectedCallback(){this.closePopover()}async componentWillLoad(){({strings:this.strings}=await t.fetchComponentLocaleStrings(this.hostElement,s.getAssetPath("."))),void 0===this.layer&&void 0===this.usePopupTemplatesInfo||await this.layerChange(this.layer),void 0!==this.layer&&void 0!==this.value&&(this.valueChange(),this.useInitialSelectedStatistics=!0)}async checkValidity(){return this.validate(),Promise.resolve(void 0===this.errorMessage)}updateValue(){const e=[];this.valueMap.forEach(((s,t)=>{s.forEach((s=>{let i;"string"===this.valueFormat?(i=`${t} ${s}`,e.push(i)):(i={onStatisticField:t,statisticType:s},e.push(i))}))})),this.value=[...e]}removeFromValueMap(e){const s=this.valueMap;s.delete(e),this.valueMap=new Map(s)}updateStatisticTypes(e){let s=[],a=[];return!0===t.isNumericField(e)?(s=[i.StatisticType.Sum,i.StatisticType.Minimum,i.StatisticType.Maximum,i.StatisticType.Mean,i.StatisticType.StdDev],a=[this.strings.sum,this.strings.min,this.strings.max,this.strings.mean,this.strings.standardDeviation]):"date"===e&&!0===this.allowDateType?(s=[i.StatisticType.Minimum,i.StatisticType.Maximum],a=[this.strings.min,this.strings.max]):"string"===e&&!0===this.allowStringType&&(s=[i.StatisticType.Any,i.StatisticType.Count],a=[this.strings.any,this.strings.count]),!0===this.showFirstLastStatistics&&(s=[...s,i.StatisticType.First,i.StatisticType.Last],a=[...a,this.strings.first,this.strings.last]),{statistics:s,labels:a}}render(){return s.h(s.Host,{key:"4420b375fff287a79197f2ee602b3cd4f95b64e6"},void 0!==this.label&&""!==this.label?s.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):null,void 0!==this.valueMap&&this.valueMap.size>0&&this.renderFields(),s.h("calcite-button",{key:"2b3de710a484352e0c159862f8d40fce83513887",appearance:"outline",kind:"neutral","icon-start":"plus",width:"full",scale:i.UIDefaults.Scale,ref:e=>{this.fieldButton=e},onClick:this.popoverAction},this.strings.field),this.renderErrorMessage())}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{value:["valueChange"],layer:["layerChange"],usePopupTemplatesInfo:["layerChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;flex-direction:column;margin-bottom:var(--analysis-half-spacing)}.label{margin-top:0}.calcite-chip{margin:var(--analysis-quarter-spacing)}.calcite-list-item{border:2px solid var(--calcite-color-border-1);margin-bottom:var(--analysis-quarter-spacing);margin-top:var(--analysis-quarter-spacing);border-radius:var(--analysis-quarter-spacing);overflow:hidden}.calcite-switch{border:2px solid var(--calcite-color-border-1);margin-bottom:var(--analysis-quarter-spacing);margin-top:var(--analysis-quarter-spacing);padding:var(--analysis-quarter-spacing);padding-top:var(--analysis-three-quarter-spacing);border-radius:var(--analysis-quarter-spacing);overflow:hidden}"}},[1,"analysis-summary-fields",{layer:[16],label:[513],valueFormat:[1537,"value-format"],value:[1040],required:[516],usePopupTemplatesInfo:[516,"use-popup-templates-info"],allowDateType:[516,"allow-date-type"],allowStringType:[516,"allow-string-type"],showFirstLastStatistics:[516,"show-first-last-statistics"],validationParams:[16],layerInputLocalizedLabel:[1,"layer-input-localized-label"],noFieldsText:[1,"no-fields-text"],noLayersText:[1,"no-layers-text"],showFieldDescription:[4,"show-field-description"],fieldPopoverOpen:[32],errorMessage:[32],checkValidity:[64]},void 0,{value:["valueChange"],layer:["layerChange"],usePopupTemplatesInfo:["layerChange"]}]);function n(){"undefined"!=typeof customElements&&["analysis-summary-fields","analysis-chip-group","analysis-label","analysis-summary-fields-popover"].forEach((e=>{switch(e){case"analysis-summary-fields":customElements.get(e)||customElements.define(e,r);break;case"analysis-chip-group":customElements.get(e)||a.defineCustomElement();break;case"analysis-label":customElements.get(e)||l.defineCustomElement();break;case"analysis-summary-fields-popover":customElements.get(e)||o.defineCustomElement()}}))}n(),e.AnalysisSummaryFields=r,e.defineCustomElement=n}));