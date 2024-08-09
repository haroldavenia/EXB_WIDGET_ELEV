define(["exports","./index-4ba3e564","./index2-929c934e","./primitiveFactory-0fd83857","./analysis-attribute-expression2-2e4fa6e5","./analysis-boolean-input2-4cca07bb","./analysis-chip-group2-66b37993","./analysis-data-file-input2-e099b4c1","./analysis-dataset-input2-719df5b8","./analysis-dataset-input-popover2-4ec0074d","./analysis-date-input2-8c5d70f6","./analysis-expression-group2-727233ea","./analysis-field-input2-2985824f","./analysis-field-select2-d1dcbfea","./analysis-folder-input2-614117c4","./analysis-geoenrichment-databrowser2-64112bc3","./analysis-geoenrichment-input2-d0af3a75","./analysis-item-browser2-90d48785","./analysis-item-input2-199dd569","./analysis-label2-d915c3e1","./analysis-layer-input2-10805c18","./analysis-layer-input-popover2-047da354","./analysis-linear-unit-input2-cb0fc12a","./analysis-multiple-input2-632fb56d","./analysis-number-input2-cd69beec","./analysis-query-builder2-359d95da","./analysis-query-entry2-476b236a","./analysis-query-input2-ca2ddf00","./analysis-query-modal2-bc4a8674","./analysis-query-target-select2-26718e9d","./analysis-sketch2-5affb5dd","./analysis-spatial-expression2-57c2b017","./analysis-spatial-reference-input2-471e95f0","./analysis-spatial-reference-selector2-746a6bb2","./analysis-string-input2-7799d6f1","./analysis-summary-fields2-53d7ea42","./analysis-summary-fields-popover2-5b8e537a","./analysis-traffic-time-input2-e4f68e21","./analysis-tree2-f394ec74","./analysis-unsupported-input2-c5738ad3","./analysis-workflow-select2-4c58c8d7","./analysis-workflow-select-popover2-1eb81a2c","./get-ead8032d","./set-a91da829","./_baseGet-1781da83","./isEqual-9b8f87d3"],(function(e,a,s,t,i,n,l,r,o,u,m,c,p,d,y,f,h,g,v,b,E,k,C,I,q,w,_,P,x,V,M,z,H,U,A,$,D,K,L,S,R,T,j,F,N,G){"use strict";const B={Vertical:"vertical",Horizontal:"horizontal"};function W(e,a,s){for(var t=-1,i=a.length,n={};++t<i;){var l=a[t],r=N.baseGet(e,l);s(r,l)&&F.baseSet(n,N.castPath(l,e),r)}return n}const J=c.flatRest((function(e,a){return null==e?{}:function(e,a){return W(e,a,(function(a,s){return k.hasIn(e,s)}))}(e,a)})),O="key-value",Q={groupContainer:`${O}__group-container`,groupLabel:`${O}__group-label-text`,groupHorizontal:`${O}__horizontal-layout`,groupAction:`${O}__group-action`,groupActionHorizontal:`${O}__group-action-horizontal`,errorMessage:`${O}__error-message`};function X(e){return void 0!==e.name}const Y=a.proxyCustomElement(class extends a.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisKeyValueChange=a.createEvent(this,"analysisKeyValueChange",7),this.analysisHelpClick=a.createEvent(this,"analysisHelpClick",7),this.mappedElementMap=new Map,this.updateValue=(e,a)=>{const s=this.mappedElementMap.get(e),t=a;j.get(this.value,e)!==t&&(this.value={...this.value},F.set(this.value,e,t),void 0!==s&&(s.value=t,this.validateParameter(e)),this.analysisKeyValueChange.emit({path:e,value:this.value}))},this.parameterValueChanged=e=>{const a=this.mappedElementMap.get(e);void 0!==a&&(this.value={...this.value},F.set(this.value,e,a.value),this.validate()),this.analysisKeyValueChange.emit({path:e,value:this.value})},this.setAnalysisRef=(e,a)=>{null!=a?this.mappedElementMap.set(e,a):this.mappedElementMap.delete(e)},this.value=void 0,this.parameterInfos=void 0,this.UIparameterInfos=void 0,this.label=void 0,this.required=void 0,this.validationParams=void 0,this.errorMessage=void 0,this.layout=void 0}parameterInfosChange(e,a){const t=[];this.combinedParameterInfos?.forEach((e=>{"object"==typeof e&&(t.push(e.name),void 0!==a||s.isEmptyDataItem(this.value)?this.updateValue(e.name,e.value):e.value=this.value[e.name]??e.value)})),this.value=J(this.value,t),this.analysisKeyValueChange.emit({path:"init",value:this.value})}UIparameterInfosChange(e,a){G.isEqual(e,a)||(s.isEmptyDataItem(this.value)&&(this.value={}),this.combinedParameterInfos?.forEach((e=>{if(void 0!==e.name&&"object"==typeof this.value)if(!1===e.visible)delete this.value[e.name];else{const a=this.value[e.name]??e.value??e.defaultValue;this.updateValue(e.name,a)}})))}get combinedParameterInfos(){let e=this.parameterInfos??[];return void 0!==this.UIparameterInfos&&(e=this.UIparameterInfos.filter(X).map((e=>{const a=this.parameterInfos?.find((a=>a.name===e.name));return{...a,...e}}))),e}componentWillLoad(){this.UIparameterInfosChange(this.UIparameterInfos),this.analysisKeyValueChange.emit({path:"init",value:this.value})}render(){return a.h(a.Host,{key:"8ec722988a3a7793fee210fae0285e1e2977e168"},a.h("analysis-label",{key:"d8e1449828af0d4fc133eecd7b70a74a4235cc3d",label:this.label,required:!1,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}),this.renderParameters(this.combinedParameterInfos),this.renderErrorMessage())}renderErrorMessage(){const e=!1===s.isEmptyDataItem(this.validationParams?.message)||void 0!==this.errorMessage,t=s.formatValidationParamsMessage(s.getValidationParamsMessageFromErrorKey({},this.validationParams)),i=void 0!==this.validationParams?s.getUIInputStatusFromMessageType(this.validationParams.type):s.UIInputStatus.INVALID;return a.h("calcite-input-message",{class:Q.errorMessage,hidden:!e,icon:"exclamationMarkTriangle",scale:s.UIDefaults.Scale,status:i},t??this.errorMessage)}renderParameters(e,s,t){return e?.length>0&&a.h("div",null,void 0!==s?a.h("div",{class:Q.groupLabel},t):null,a.h("div",{class:Q.groupContainer},e?.map((e=>{const t=void 0!==s?`${s}[${e.name}]`:`${e.name}`,i=e.visible??!0;return e?.parameterInfos&&!e.dataType.includes("MultiValue")?this.renderParameters(e.parameterInfos,t,e.label??e.displayName??e.name):i&&a.h("div",{class:this.layout===B.Horizontal?Q.groupHorizontal:""},a.h("analysis-label",{class:Q.groupLabel,label:e.label??e.displayName??e.name,hideHelp:!0,required:!0===this.required||"required"in e&&!0===e.required}),a.h("div",{class:this.layout===B.Horizontal?Q.groupActionHorizontal:Q.groupAction},this.renderDefaultComponent(e,t)))}))))}renderDefaultComponent(e,s){const i=j.get(this.value,s);return a.h(t.AnalysisPrimitiveParameter,{key:s,required:this.required,...e,label:"",onValueChange:()=>this.parameterValueChanged(`${s}`),onSetRef:e=>this.setAnalysisRef(`${s}`,e),value:i})}async checkValidity(){const e=await this.validate(),{message:a,type:s}=this.validationParams||{},t=!1==(void 0!==a)||!0==("informative"===s);return!0===e&&void 0===this.errorMessage&&!0===t}async validate(){const e=Array.from(this.mappedElementMap.keys()).map((async e=>this.validateParameter(e)));return(await Promise.all(e)).every((e=>!0===e))}async validateParameter(e){const a=this.mappedElementMap.get(e),s=this.combinedParameterInfos.find((a=>a.name===e))??{};let t=!0;if(void 0!==a)if("checkValidity"in a)t=await a.checkValidity();else{const e="required"in s&&s.required;t=!1==(!0===this.required||!0===e)||void 0!==a.value}return t}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{parameterInfos:["parameterInfosChange"],UIparameterInfos:["UIparameterInfosChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{height:100%;margin-bottom:var(--analysis-half-spacing)}.key-value__group-container{display:flex;flex-direction:column;border:1px var(--calcite-color-border-1) solid;border-radius:var(--calcite-border-radius);padding:var(--analysis-half-spacing) var(--analysis-half-spacing) 0 var(--analysis-half-spacing);margin-bottom:var(--analysis-half-spacing)}.key-value__group-label-text{margin-bottom:var(--analysis-quarter-spacing);align-self:center;width:48%;font-size:var(--calcite-font-size--2)}.key-value__group-action{align-self:flex-end;width:100%}.key-value__group-action-horizontal{align-self:flex-end;width:50%}.key-value__horizontal-layout{display:flex;width:var(--analysis-component-default-width);justify-content:space-between}.key-value__error-message{margin-top:var(--analysis-quarter-spacing)}"}},[1,"analysis-key-value",{value:[1040],parameterInfos:[16],UIparameterInfos:[16],label:[513],required:[516],validationParams:[16],layout:[1],errorMessage:[32],checkValidity:[64]},void 0,{parameterInfos:["parameterInfosChange"],UIparameterInfos:["UIparameterInfosChange"]}]);function Z(){"undefined"!=typeof customElements&&["analysis-key-value","analysis-attribute-expression","analysis-boolean-input","analysis-chip-group","analysis-data-file-input","analysis-dataset-input","analysis-dataset-input-popover","analysis-date-input","analysis-expression-group","analysis-field-input","analysis-field-select","analysis-folder-input","analysis-geoenrichment-databrowser","analysis-geoenrichment-input","analysis-item-browser","analysis-item-input","analysis-label","analysis-layer-input","analysis-layer-input-popover","analysis-linear-unit-input","analysis-multiple-input","analysis-number-input","analysis-query-builder","analysis-query-entry","analysis-query-input","analysis-query-modal","analysis-query-target-select","analysis-sketch","analysis-spatial-expression","analysis-spatial-reference-input","analysis-spatial-reference-selector","analysis-string-input","analysis-summary-fields","analysis-summary-fields-popover","analysis-traffic-time-input","analysis-tree","analysis-unsupported-input","analysis-workflow-select","analysis-workflow-select-popover"].forEach((e=>{switch(e){case"analysis-key-value":customElements.get(e)||customElements.define(e,Y);break;case"analysis-attribute-expression":customElements.get(e)||i.defineCustomElement();break;case"analysis-boolean-input":customElements.get(e)||n.defineCustomElement();break;case"analysis-chip-group":customElements.get(e)||l.defineCustomElement();break;case"analysis-data-file-input":customElements.get(e)||r.defineCustomElement();break;case"analysis-dataset-input":customElements.get(e)||o.defineCustomElement();break;case"analysis-dataset-input-popover":customElements.get(e)||u.defineCustomElement();break;case"analysis-date-input":customElements.get(e)||m.defineCustomElement();break;case"analysis-expression-group":customElements.get(e)||c.defineCustomElement();break;case"analysis-field-input":customElements.get(e)||p.defineCustomElement();break;case"analysis-field-select":customElements.get(e)||d.defineCustomElement();break;case"analysis-folder-input":customElements.get(e)||y.defineCustomElement();break;case"analysis-geoenrichment-databrowser":customElements.get(e)||f.defineCustomElement();break;case"analysis-geoenrichment-input":customElements.get(e)||h.defineCustomElement();break;case"analysis-item-browser":customElements.get(e)||g.defineCustomElement();break;case"analysis-item-input":customElements.get(e)||v.defineCustomElement();break;case"analysis-label":customElements.get(e)||b.defineCustomElement();break;case"analysis-layer-input":customElements.get(e)||E.defineCustomElement();break;case"analysis-layer-input-popover":customElements.get(e)||k.defineCustomElement();break;case"analysis-linear-unit-input":customElements.get(e)||C.defineCustomElement();break;case"analysis-multiple-input":customElements.get(e)||I.defineCustomElement();break;case"analysis-number-input":customElements.get(e)||q.defineCustomElement();break;case"analysis-query-builder":customElements.get(e)||w.defineCustomElement();break;case"analysis-query-entry":customElements.get(e)||_.defineCustomElement();break;case"analysis-query-input":customElements.get(e)||P.defineCustomElement();break;case"analysis-query-modal":customElements.get(e)||x.defineCustomElement();break;case"analysis-query-target-select":customElements.get(e)||V.defineCustomElement();break;case"analysis-sketch":customElements.get(e)||M.defineCustomElement();break;case"analysis-spatial-expression":customElements.get(e)||z.defineCustomElement();break;case"analysis-spatial-reference-input":customElements.get(e)||H.defineCustomElement();break;case"analysis-spatial-reference-selector":customElements.get(e)||U.defineCustomElement();break;case"analysis-string-input":customElements.get(e)||A.defineCustomElement();break;case"analysis-summary-fields":customElements.get(e)||$.defineCustomElement();break;case"analysis-summary-fields-popover":customElements.get(e)||D.defineCustomElement();break;case"analysis-traffic-time-input":customElements.get(e)||K.defineCustomElement();break;case"analysis-tree":customElements.get(e)||L.defineCustomElement();break;case"analysis-unsupported-input":customElements.get(e)||S.defineCustomElement();break;case"analysis-workflow-select":customElements.get(e)||R.defineCustomElement();break;case"analysis-workflow-select-popover":customElements.get(e)||T.defineCustomElement()}}))}Z(),e.AnalysisKeyValue=Y,e.AnalysisToolUILayout=B,e.basePickBy=W,e.defineCustomElement=Z,e.pick$1=J}));