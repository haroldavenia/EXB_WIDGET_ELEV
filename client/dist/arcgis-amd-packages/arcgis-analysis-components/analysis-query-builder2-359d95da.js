define(["exports","./index-4ba3e564","./index2-929c934e","./utils-170619d9","./t9n-c044c603","./analysis-expression-group2-727233ea","./analysis-attribute-expression2-2e4fa6e5","./analysis-query-entry2-476b236a","./analysis-query-target-select2-26718e9d","./analysis-spatial-expression2-57c2b017"],(function(e,s,t,r,i,a,n,o,l,h){"use strict";class u{constructor(){this.requestCache={}}getOrPut(e,s){return null==this.requestCache[s]&&(this.requestCache[s]=e()),this.requestCache[s]}}const c=s.proxyCustomElement(class extends s.H{constructor(){super(),this.__registerHost(),this.analysisQueryChange=s.createEvent(this,"analysisQueryChange",7),this.analysisQueryError=s.createEvent(this,"analysisQueryError",7),this.cache=new u,this.onGroupChange=e=>{this.workingExpressionGroup=e.target.expressionGroup,this.analysisQueryChange.emit(this.workingExpressionGroup)},this.onTargetChange=e=>{const s=e.target.target;this.workingExpressionGroup=this.workingExpressionGroup.changeTarget(s),this.analysisQueryChange.emit(this.workingExpressionGroup)},this.resetError=()=>{this.errorMessage=void 0,this.analysisQueryError.emit(this.errorMessage)},this.errorMessage=void 0,this.mode=void 0,this.options=void 0,this.expressionGroup=void 0,this.workingExpressionGroup=void 0,this.recordsTerm="features",this.layers=[]}get hasError(){return void 0!==this.errorMessage}async componentWillLoad(){let e;({strings:this.strings,locale:e}=await t.fetchComponentLocaleStrings(this.hostElement,s.getAssetPath("."))),i.setStrings(this.strings,e),this.workingExpressionGroup=this.expressionGroup.clone()}render(){return s.h(s.Host,{key:"e1673d9b6e3feae96850dc5cb36d067abf34d825"},s.h("analysis-query-target-select",{key:"bd91af9f5aac2ce769fb778b67ac2d091a53e7d5",target:this.workingExpressionGroup.layer,layers:this.layers,onAnalysisQueryTargetSelectChange:this.onTargetChange,disabled:"sql"===this.mode,recordsTerm:this.recordsTerm}),s.h("analysis-expression-group",{key:"09d190a47635dddabd28d5fd169e27642877f97a",expressionGroup:this.workingExpressionGroup,layers:this.layers,cache:this.cache,onAnalysisExpressionGroupChange:this.onGroupChange,recordsTerm:this.recordsTerm,mode:this.mode,allowedExpressions:"sql"===this.mode?["attribute","group"]:["attribute","group","spatial"],options:this.options}),this.hasError&&s.h("calcite-notice",{key:"ed21d406a6f97fef3d683f7c54340493df368657",class:a.HTMLClasses$1.errorNotice,open:!0,kind:"danger",closable:!0,scale:r.UIDefaults.Scale,width:"auto",onCalciteNoticeClose:this.resetError},s.h("div",{key:"f61020d560b3825029060e7e9ad9356a20198922",slot:"title"},this.strings.error),s.h("div",{key:"b618a2c92131aab2f3357fe4e41c295a9d644904",slot:"message"},this.errorMessage)))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}.error-notice{margin-top:var(--analysis-half-spacing)}"}},[0,"analysis-query-builder",{mode:[513],options:[16],expressionGroup:[16],recordsTerm:[1,"records-term"],layers:[16],errorMessage:[32],workingExpressionGroup:[32]}]);function p(){"undefined"!=typeof customElements&&["analysis-query-builder","analysis-attribute-expression","analysis-expression-group","analysis-query-entry","analysis-query-target-select","analysis-spatial-expression"].forEach((e=>{switch(e){case"analysis-query-builder":customElements.get(e)||customElements.define(e,c);break;case"analysis-attribute-expression":customElements.get(e)||n.defineCustomElement();break;case"analysis-expression-group":customElements.get(e)||a.defineCustomElement();break;case"analysis-query-entry":customElements.get(e)||o.defineCustomElement();break;case"analysis-query-target-select":customElements.get(e)||l.defineCustomElement();break;case"analysis-spatial-expression":customElements.get(e)||h.defineCustomElement()}}))}p(),e.AnalysisQueryBuilder=c,e.defineCustomElement=p}));