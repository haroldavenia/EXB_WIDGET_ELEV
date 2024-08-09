define(["exports","./index-4ba3e564","./utils-170619d9","./analysis-label2-d915c3e1"],(function(e,s,t,i){"use strict";const l=s.proxyCustomElement(class extends s.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisFolderInputChange=s.createEvent(this,"analysisFolderInputChange",6),this.analysisHelpClick=s.createEvent(this,"analysisHelpClick",7),this.folderSelect=e=>{const s=e.detail.id;this.value=(s===this.user.username?"":s)??"",this.analysisFolderInputChange.emit(this.value)},this.setDefaultFolder=()=>{const e=this.folderPicker.folders.find((e=>e.id===this.value));this.folderPicker.folder=void 0!==e?e:{id:this.folderPicker.folders[0]?.id}},this.value=void 0,this.user=void 0,this.label=void 0,this.hideHelp=!1}render(){return s.h(s.Host,{key:"f6ef5b28c334cba23c5ce4f55d18e017b5e636f2"},void 0!==this.label&&""!==this.label?s.h("analysis-label",{label:this.label,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit(),hideHelp:this.hideHelp}):null,s.h("arcgis-folder-picker",{key:"48da1833f05ef365f6fb5bff23129b67ea072c21",ref:e=>this.folderPicker=e,api:4,user:this.user,portal:this.user.portal,scale:t.UIDefaults.Scale,label:"",onArcgisFolderPickerLoad:this.setDefaultFolder,onArcgisFolderPickerChange:e=>this.folderSelect(e)}))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{--calcite-color-border-input:var(--analysis-ui-border-input)}"}},[1,"analysis-folder-input",{value:[513],user:[16],label:[513],hideHelp:[516,"hide-help"]}]);function a(){"undefined"!=typeof customElements&&["analysis-folder-input","analysis-label"].forEach((e=>{switch(e){case"analysis-folder-input":customElements.get(e)||customElements.define(e,l);break;case"analysis-label":customElements.get(e)||i.defineCustomElement()}}))}a(),e.AnalysisFolderInput=l,e.defineCustomElement=a}));