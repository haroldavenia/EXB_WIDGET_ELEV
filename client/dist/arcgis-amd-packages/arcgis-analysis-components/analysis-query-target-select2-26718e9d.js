define(["exports","./index-4ba3e564","./index2-929c934e"],(function(e,t,s){"use strict";const a=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisQueryTargetSelectChange=t.createEvent(this,"analysisQueryTargetSelectChange",7),this.onLayerSelectChange=e=>{const t=e.target.selectedOption.value;this.target=this.layers.find((e=>e.id===t))??this.layers[0],this.analysisQueryTargetSelectChange.emit(this.target)},this.target=void 0,this.disabled=!1,this.recordsTerm="features",this.layers=[]}async componentWillLoad(){({strings:this.strings}=await s.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),void 0===this.target&&(this.target=this.layers[0],this.analysisQueryTargetSelectChange.emit(this.target))}render(){const e="records"===this.recordsTerm?this.strings.recordsLabel:this.strings.featuresLabel;return t.h(t.Host,{key:"7837e1e858fe020d5994c4353911f089d4422b78"},t.h("calcite-label",{key:"9fac1f45b599094a46727d6579b7d3c7922d299d"},e,t.h("calcite-select",{key:"15003c61c7b97550aa658b9eb79afe44209d77a0",label:e,onCalciteSelectChange:this.onLayerSelectChange,width:"auto",disabled:this.disabled},this.layers.map((e=>t.h("calcite-option",{value:e.id,selected:this.target.id===e.id,key:e.id},s.getLayerLabel(e)))))))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex}"}},[1,"analysis-query-target-select",{target:[1040],disabled:[4],recordsTerm:[1,"records-term"],layers:[16]}]);function i(){"undefined"!=typeof customElements&&["analysis-query-target-select"].forEach((e=>{"analysis-query-target-select"===e&&(customElements.get(e)||customElements.define(e,a))}))}i(),e.AnalysisQueryTargetSelect=a,e.defineCustomElement=i}));