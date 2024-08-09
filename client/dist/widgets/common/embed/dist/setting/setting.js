System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/dynamic-url-editor"],(function(e,t){var s={},a={},o={},i={},r={},n={};return{setters:[function(e){s.AllDataSourceTypes=e.AllDataSourceTypes,s.Immutable=e.Immutable,s.React=e.React,s.classNames=e.classNames,s.css=e.css,s.esri=e.esri,s.expressionUtils=e.expressionUtils,s.getAppStore=e.getAppStore,s.jsx=e.jsx},function(e){a.builderAppSync=e.builderAppSync,a.helpUtils=e.helpUtils},function(e){o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection},function(e){i.AdvancedButtonGroup=e.AdvancedButtonGroup,i.Button=e.Button,i.NumericInput=e.NumericInput,i.Switch=e.Switch,i.TextArea=e.TextArea,i.TextInput=e.TextInput,i.defaultMessages=e.defaultMessages,i.richTextUtils=e.richTextUtils},function(e){r.DataSourceSelector=e.DataSourceSelector},function(e){n.DynamicUrlEditor=e.DynamicUrlEditor}],execute:function(){e((()=>{var e={28996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=s},4108:e=>{"use strict";e.exports=a},14321:e=>{"use strict";e.exports=i},13089:e=>{"use strict";e.exports=r},91480:e=>{"use strict";e.exports=n},79298:e=>{"use strict";e.exports=o}},t={};function l(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,l),o.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var c={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(c),l.d(c,{__set_webpack_public_path__:()=>S,default:()=>b});var e=l(79244),t=l(4108),s=l(79298),a=l(14321);const o={_widgetLabel:"Embed",websiteAddress:"Website address",code:"Code",codePlaceholder:"Paste the HTML code you want to embed.",embedBy:"Embed by",attributeHint:"URL from an attribute",expressionHint:"URL by an expression",autoRefresh:"Auto refresh",autoInterval:"Interval",autoUnit:"Minute",reloadSetting:"Do not reload iframe when URL changes",maxLimit:"Maximum character limit exceeded.",moreDetails:"Check more details on the supported HTML formats {detailsFormatLinkTag}here{detailsFormatLinkTag}."};var i;!function(e){e.Url="url",e.Code="code"}(i||(i={}));var r=l(13089),n=l(91480),d=l(28996),p=l.n(d),u=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]])}return s};const h=t=>{const s=window.SVG,{className:a}=t,o=u(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:i,src:p()},o)):e.React.createElement("svg",Object.assign({className:i},o))},g=new(0,e.esri.Sanitizer),m=["Trial","Trial Developer","HUP Online Entitlements","Trial Press","Personal Use","Developer Subscription"],x=["Developer","Trial Developer","Developer Subscription"];class f extends e.React.PureComponent{constructor(s){var r,n;super(s),this.supportedDsTypes=(0,e.Immutable)([e.AllDataSourceTypes.FeatureLayer,e.AllDataSourceTypes.SceneLayer,e.AllDataSourceTypes.OrientedImageryLayer,e.AllDataSourceTypes.ImageryLayer,e.AllDataSourceTypes.BuildingComponentSubLayer]),this.embedTypeChange=e=>{const{config:t}=this.props;e===i.Url&&this.setState({showCodeError:!1}),t.embedType!==e&&this.props.onSettingChange({id:this.props.id,config:t.set("embedType",e)})},this.checkURL=e=>{if(!e||""===e)return this.setState({urlError:""}),!0;if(!new RegExp("^(([h][t]{2}[p][s])?://)").test(e))return this.setState({urlError:this.formatMessage("httpsUrlMessage")}),!1;if(new RegExp("^(([h][t]{2}[p][s])?://localhost)").test(e))return this.setState({urlError:""}),!0;const t=e.indexOf(".");return t<0||t===e.length-1?(this.setState({urlError:this.formatMessage("invalidUrlMessage")}),!1):(this.setState({urlError:""}),!0)},this.embedCodeChangeRightAway=e=>{const{config:s,id:a}=this.props;if((null==e?void 0:e.length)>8192)return this.setState({showCodeError:!0,codeErrorMessage:"maxLimit"}),void t.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:a,propKey:"codeLimitExceeded",value:!0});t.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:a,propKey:"codeLimitExceeded",value:!1});let o=e;const i=!!o&&!(e=>{let t="";const s=/<iframe\s+[^>]*src=['"]([^'"]+)[^>](.*)/gi,a=/<blockquote [^>]*data-instgrm-permalink=['"]([^'"]+)[^>]*>(.*)<\/blockquote>/gi,o=/<a [^>]*href=['"]([^'"]+)[^>]*>/gi,i=/<blockquote [^>]*data-theme=['"]([^'"]+)[^>]*>(.*)<\/blockquote>/gi,r=/<blockquote [^>]*data-lang=['"]([^'"]+)[^>]*>(.*)<\/blockquote>/gi,n=/<a [^>]*data-theme=['"]([^'"]+)[^>]*>(.*)<\/a>/gi,l=/<a [^>]*data-lang=['"]([^'"]+)[^>]*>(.*)<\/a>/gi;return s.test(e)?e.replace(s,((e,s)=>(t=s,e))):a.test(e)?e.replace(a,((e,s)=>{const a=s.substr(0,s.indexOf("?"));return t=`${a}embed`,e})):/<blockquote class="twitter-tweet"(.*)<\/blockquote>/gi.test(e)?e.replace(o,((s,a)=>{if(a.includes("twitter.com")){const s=a.substring(a.lastIndexOf("/")+1).replace(/[?].*$/,""),o=i.exec(e),n=r.exec(e);let l,c;(null==o?void 0:o.length)>1&&(l=o[1]),(null==n?void 0:n.length)>1&&(c=n[1]),t=`https://platform.twitter.com/embed/Tweet.html?id=${s}${l?`&theme=${l}`:""}${c?`&lang=${c}`:""}`}return s})):/<a class="twitter-timeline" [^>]*href=['"]([^'"]+)[^>]*>(.*)<\/a>/gi.test(e)&&e.replace(o,((s,a)=>{if(a.includes("twitter.com")){const s=a.substring(a.lastIndexOf("/")+1).replace(/[?].*$/,""),o=n.exec(e),i=l.exec(e);let r,c;(null==o?void 0:o.length)>1&&(r=o[1]),(null==i?void 0:i.length)>1&&(c=i[1]),t=`https://syndication.twitter.com/srv/timeline-profile/screen-name/${s}${r||c?"?":""}${r?`&theme=${r}`:""}${c?`&lang=${c}`:""}`}return s})),t.toLocaleLowerCase().trim().startsWith("javascript:")&&(t=""),t})(o);o&&i&&(o=g.sanitize(o)),this.setState({showCodeError:!1}),this.props.onSettingChange({id:a,config:s.set("embedCode",o)})},this.formatMessage=(e,t)=>{const s=Object.assign({},o,a.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:s[e]},t)},this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onSwitchChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)})},this.handleAutoInterval=e=>{if(null===e)return;const{config:t,id:s}=this.props;this.props.onSettingChange({id:s,config:t.set("autoInterval",e)})},this.labelChange=e=>{var t;const{config:s,id:a}=this.props,o=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;this.props.onSettingChange({id:a,config:s.set("label",o)})},this.webAddressExpressionChange=t=>{const{config:s,onSettingChange:o,id:r,useDataSourcesEnabled:n,useDataSources:l}=this.props,{embedType:c}=s,d=/\<exp((?!\<exp).)+\<\/exp\>/gim,p=null==t?void 0:t.match(/\<urlsearch((?!\<urlsearch).)+\<\/urlsearch\>/gim),u=null==t?void 0:t.match(d),h=t&&t.replace(/<[^>]+>/g,"").replace(/(^\s*|\s*$)/g,"");void 0===t&&(t=""),(p||u)&&0===h.indexOf("{")||this.checkURL(h)?this.setState({showUrlError:!1}):this.setState({showUrlError:!0});const g=(e=>{let t=[];for(const s in e){const a=e[s],o=null==a?void 0:a.parts;null!=o&&(t=t.concat(o))}return t})(a.richTextUtils.getAllExpressions(t));let m;m=e.expressionUtils.getUseDataSourceFromExpParts(g,l);const x=e.expressionUtils.getUseDataSourcesWithoutFields(l);m=e.expressionUtils.mergeUseDataSources(x,m);const f=null==t?void 0:t.match(d),b=c===i.Url&&n&&(null==l?void 0:l.length)>0&&f;t!==s.expression&&o(b?{id:r,config:s.set("expression",t),useDataSources:m}:{id:r,config:s.set("expression",t).set("enableLabel",!1),useDataSources:m})},this.isUsedDataSource=()=>{const{useDataSources:e,useDataSourcesEnabled:t}=this.props;return t&&e&&e.length>0},this.hasExpressionTag=e=>null==e?void 0:e.match(/\<exp((?!\<exp).)+\<\/exp\>/gim);const l=(0,e.getAppStore)().getState();this.accountType=null===(n=null===(r=null==l?void 0:l.portalSelf)||void 0===r?void 0:r.subscriptionInfo)||void 0===n?void 0:n.type,this.state={showUrlError:!1,urlError:"",isExpPopupOpen:!1,showCodeError:!1,codeErrorMessage:"maxLimit",helpUrl:""}}componentDidMount(){const{config:e}=this.props,{embedType:s,expression:a}=e;a||s!==i.Url||this.props.onSettingChange({id:this.props.id,config:this.props.config.set("expression","")}),t.helpUtils.getWidgetHelpLink("embed").then((e=>{this.setState({helpUrl:e})}))}componentDidUpdate(){const{config:e}=this.props,{embedType:t,embedCode:s}=e;t===i.Code&&this.textAreaRef&&(this.textAreaRef.value=s||"")}componentWillUnmount(){t.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:this.props.id,propKey:"codeLimitExceeded",value:!1})}render(){const{showUrlError:t,urlError:o,showCodeError:l,helpUrl:c}=this.state,{theme:d,useDataSources:p,config:u,useDataSourcesEnabled:g,id:f,selectWidgets:b}=this.props,{embedType:S,enableLabel:v,label:w}=u,y=S===i.Url&&g&&(null==p?void 0:p.length)>0&&this.hasExpressionTag(u.expression),j=m.includes(this.accountType)||x.includes(this.accountType),C=`<a target="_blank" style="text-decoration: none !important;" href=${c}>$1</a>`,T=this.formatMessage("moreDetails",{detailsFormatLinkTag:"<detailsFormatLinkTag>"}).replace(/\<detailsFormatLinkTag\>(.+)\<detailsFormatLinkTag\>/,C);return(0,e.jsx)("div",{css:(this.props.theme,e.css`
    label {
      cursor: pointer;
    }
    .embed-dynamic-con{
      z-index: 3;
      .ql-editor{
        min-height: 174px;
      }
    }
  `)},(0,e.jsx)("div",{className:"widget-iframe jimu-widget"},(0,e.jsx)("div",null,(0,e.jsx)(s.SettingSection,null,(0,e.jsx)(s.SettingRow,{label:this.formatMessage("embedBy")}),(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(a.AdvancedButtonGroup,{className:"w-100"},(0,e.jsx)(a.Button,{className:"w-50","aria-label":`${this.formatMessage("embedBy")} ${this.formatMessage("url")}`,active:S===i.Url,onClick:()=>{this.embedTypeChange(i.Url)}},this.formatMessage("url")),(0,e.jsx)(a.Button,{className:"w-50","aria-label":`${this.formatMessage("embedBy")} ${this.formatMessage("code")}`,active:S===i.Code,onClick:()=>{this.embedTypeChange(i.Code)},disabled:j},this.formatMessage("code")))),S===i.Url&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"choose-ds w-100"},(0,e.jsx)(r.DataSourceSelector,{types:this.supportedDsTypes,useDataSources:this.props.useDataSources,useDataSourcesEnabled:g,onToggleUseDataEnabled:this.onToggleUseDataEnabled,onChange:this.onDataSourceChange,widgetId:this.props.id}))),S===i.Code&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"body2 text-paper",css:e.css`
                      color: var(--ref-palette-neutral-1100);
                    `,dangerouslySetInnerHTML:{__html:T}})),(0,e.jsx)(s.SettingRow,null,S===i.Url?(0,e.jsx)("div",{className:"d-flex flex-column w-100 embed-dynamic-con"},(0,e.jsx)(n.DynamicUrlEditor,{widgetId:f,useDataSourcesEnabled:g,useDataSources:p,selectWidgets:b,onChange:this.webAddressExpressionChange,value:u.expression}),t&&(0,e.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between",style:{marginTop:"5px"}},(0,e.jsx)(h,{color:d.sys.color.error.main}),(0,e.jsx)("div",{style:{width:"calc(100% - 20px)",margin:"0 4px",overflow:"hidden",textOverflow:"ellipsis",color:d.sys.color.error.main}},o))):(0,e.jsx)("div",{className:"d-flex flex-column w-100"},(0,e.jsx)(a.TextArea,{height:300,className:"w-100",spellCheck:!1,placeholder:this.formatMessage("codePlaceholder"),defaultValue:u.embedCode||"",onAcceptValue:this.embedCodeChangeRightAway,ref:e=>this.textAreaRef=e}),l&&(0,e.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between",style:{marginTop:"5px"}},(0,e.jsx)(h,{color:d.sys.color.error.main}),(0,e.jsx)("div",{style:{width:"calc(100% - 20px)",margin:"0 4px",overflow:"hidden",textOverflow:"ellipsis",color:d.sys.color.error.main}},this.formatMessage("maxLimit"))))),y&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"d-flex justify-content-between w-100"},(0,e.jsx)("label",{className:"w-75 text-truncate d-inline-block font-dark-600"},this.formatMessage("label")),(0,e.jsx)(a.Switch,{className:"can-x-switch",checked:v||!1,"data-key":"enableLabel",onChange:e=>{this.onSwitchChanged(e.target.checked,"enableLabel")},"aria-label":this.formatMessage("label")}))),v&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(a.TextInput,{type:"text",className:"w-100",value:w||"",onChange:this.labelChange}))),(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"d-flex justify-content-between w-100"},(0,e.jsx)("label",{className:"w-75 text-truncate d-inline-block font-dark-600"},this.formatMessage("autoRefresh")),(0,e.jsx)(a.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.autoRefresh||!1,"data-key":"autoRefresh",onChange:e=>{this.onSwitchChanged(e.target.checked,"autoRefresh")},"aria-label":this.formatMessage("autoRefresh")}))),u.autoRefresh&&(0,e.jsx)(s.SettingRow,{flow:"wrap",label:`${this.formatMessage("autoInterval")} (${this.formatMessage("autoUnit")})`},(0,e.jsx)(a.NumericInput,{size:"sm",style:{width:"100%"},value:u.autoInterval||1,precision:2,min:.2,max:1440,onChange:this.handleAutoInterval,"aria-label":`${this.formatMessage("autoInterval")} (${this.formatMessage("autoUnit")})`}))))))}}f.mapExtraStateProps=(e,t)=>{var s,a,o;const i=e&&(null===(a=null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===a?void 0:a.widgets),r=[];if(i)for(const e in i){const s=i[e];"widgets/common/embed/"===s.uri&&s.id!==t.id&&r.push(s)}return{appConfig:null===(o=null==e?void 0:e.appStateInBuilder)||void 0===o?void 0:o.appConfig,selectWidgets:r}};const b=f;function S(e){l.p=e}})(),c})())}}}));