define(["exports","./index-4ba3e564","./index2-929c934e","./utils-170619d9","./analysis-label2-d915c3e1"],(function(e,t,i,l,s){"use strict";const a=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisSelectFieldClick=t.createEvent(this,"analysisSelectFieldClick",7),this.analysisFieldRemove=t.createEvent(this,"analysisFieldRemove",7),this.analysisHelpClick=t.createEvent(this,"analysisHelpClick",7),this.renderErrorMessage=()=>{const e=!1===i.isEmptyDataItem(this.errorMessage);return t.h("calcite-input-message",{class:"error-message",icon:"exclamationMarkTriangle",status:i.UIInputStatus.INVALID,scale:l.UIDefaults.Scale,hidden:!e},this.errorMessage)},this.handleReplaceFieldClick=e=>{const t=e.target;"calcite-value-list-item"!==t?.localName||e.composedPath().find((e=>"calcite-action"===e.localName))||this.analysisSelectFieldClick.emit()},this.handleMouseOver=e=>{const t=e.target;"calcite-value-list-item"!==t?.localName||e.composedPath().find((e=>"calcite-action"===e.localName))||(void 0===this.replaceTooltip&&(this.replaceTooltip=document.createElement("calcite-tooltip"),this.replaceTooltip.placement="bottom",this.replaceTooltip.innerText=this.strings.replaceField),this.replaceTooltip.referenceElement=t,l.addOpenableDomElement(document,this.replaceTooltip))},this.mouseOut=()=>{l.removeOpenableDomElement(this.replaceTooltip)},this.onSelectClick=()=>{this.analysisSelectFieldClick.emit()},this.onListItemRemoved=e=>{l.removeOpenableDomElement(this.replaceTooltip);const t=e.target;this.analysisFieldRemove.emit({value:t.value})},this.value=void 0,this.label=void 0,this.disabled=!1,this.selectionMode=void 0,this.useValueLabel=!1,this.fields=void 0,this.errorMessage=void 0,this.placeholderText=void 0,this.required=!1,this.readOnly=!1,this.loading=!1,this.hideHelp=!1}get fieldLabels(){let e=[];return!0===this.useValueLabel&&void 0!==this.value?e=(Array.isArray(this.value)?this.value:[this.value]).map((e=>[e,e])):!1===this.useValueLabel&&void 0!==this.fields&&(e=this.fields.map((e=>[e.name,e.alias]))),new Map(e)}async componentWillLoad(){({strings:this.strings}=await i.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath(".")))}render(){return t.h(t.Host,{key:"fcc13627b73206d3a79d00adde2313ef4d5c5697"},void 0!==this.label&&""!==this.label?t.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit(),hideHelp:this.hideHelp}):null,void 0===this.selectionMode||"single"===this.selectionMode?void 0===this.value?this.renderSingleSelectButton():this.renderSingleListItem():this.renderMultiple(),this.renderErrorMessage())}renderSingleListItem(){const e="string"==typeof this.value?this.value:this.value?.name,i=this.fieldLabels.get(e)??e;return t.h("calcite-value-list-item",{"data-layerId":e,class:"single-list-item",key:e?.toString(),value:e,label:i,nonInteractive:!0===this.readOnly,removable:!1===this.readOnly,onMouseOver:!1===this.readOnly?this.handleMouseOver:void 0,onMouseOut:!1===this.readOnly?this.mouseOut:void 0,onClick:!1===this.readOnly?this.handleReplaceFieldClick:void 0,onCalciteListItemRemove:!1===this.readOnly?this.onListItemRemoved:void 0})}renderSingleSelectButton(){const e="string"==typeof this.value?this.value:this.value?.name,i=void 0!==e?this.fieldLabels.get(e):this.placeholderText??this.strings.inputPlaceholderText;return t.h("calcite-button",{scale:l.UIDefaults.Scale,width:"full",alignment:"space-between",appearance:"transparent",kind:"neutral","icon-end":"chevron-down",id:"single-select-field-btn",onClick:this.onSelectClick,disabled:this.disabled||this.loading,loading:this.loading},i)}renderMultiple(){const e=void 0!==this.value&&Array.isArray(this.value)&&this.value.length>0?"field-multi-select-btn-spaced":void 0,i=e=>t.h("calcite-value-list-item",{key:e,label:this.fieldLabels.get(e)??e,value:e,removable:!0,onCalciteListItemRemove:this.onListItemRemoved});let s;return s="string"==typeof this.value?.[0]?this.value.map(i):this.value?.map((e=>i(e.name))),t.h("div",{class:"multi-select-container"},void 0!==s&&s.length>0&&t.h("calcite-value-list",null,s),t.h("calcite-button",{iconStart:"plus",appearance:"outline",kind:"neutral",width:"full",onClick:this.onSelectClick,class:e,id:"multi-select-field-btn",scale:l.UIDefaults.Scale,loading:this.loading},this.placeholderText??this.strings.multiSelectFieldButtonText))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{width:var(--analysis-component-default-width);font-size:var(--analysis-label-font-size)}.error-message{margin-top:var(--analysis-quarter-spacing)}.field-multi-select-btn-spaced{margin-top:var(--analysis-half-spacing)}.single-list-item{border:1px solid var(--analysis-ui-border-input)}#single-select-field-btn{border:1px solid var(--analysis-ui-border-input)}.multi-select-container{display:flex;flex-direction:column;gap:var(--analysis-quarter-spacing);width:100%;margin-bottom:var(--analysis-half-spacing)}.text-s{margin-block-start:0;margin-block-end:0;color:var(--calcite-color-text-1);font-size:var(--calcite-font-size--2);line-height:1rem}.text-m{margin-block-start:0;margin-block-end:0;color:var(--calcite-color-text-1);font-size:var(--calcite-font-size--1);line-height:1rem}"}},[1,"analysis-field-select",{value:[1],label:[513],disabled:[516],selectionMode:[513,"selection-mode"],useValueLabel:[516,"use-value-label"],fields:[16],errorMessage:[513,"error-message"],placeholderText:[513,"placeholder-text"],required:[516],readOnly:[516,"read-only"],loading:[516],hideHelp:[516,"hide-help"]}]);function n(){"undefined"!=typeof customElements&&["analysis-field-select","analysis-label"].forEach((e=>{switch(e){case"analysis-field-select":customElements.get(e)||customElements.define(e,a);break;case"analysis-label":customElements.get(e)||s.defineCustomElement()}}))}n(),e.AnalysisFieldSelect=a,e.defineCustomElement=n}));