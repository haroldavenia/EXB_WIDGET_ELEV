"use strict";var StatusMessage,__awaiter=this&&this.__awaiter||function(e,o,a,c){return new(a=a||Promise)(function(n,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function s(e){try{r(c.throw(e))}catch(e){t(e)}}function r(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(i,s)}r((c=c.apply(e,o||[])).next())})},__generator=this&&this.__generator||function(i,s){var r,o,a,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},u={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function e(n){return function(e){var t=[n,e];if(r)throw new TypeError("Generator is already executing.");for(;c=u&&t[u=0]?0:c;)try{if(r=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,o=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3]))c.label=t[1];else if(6===t[0]&&c.label<a[1])c.label=a[1],a=t;else{if(!(a&&c.label<a[2])){a[2]&&c.ops.pop(),c.trys.pop();continue}c.label=a[2],c.ops.push(t)}}t=s.call(i,c)}catch(e){t=[6,e],o=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},path=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.zipApp=exports.download=exports.DownloadAppZip=exports.getDownloadStatus=void 0,require("path")),fs=require("fs-extra"),AdmZip=require("adm-zip"),fetch=require("cross-fetch"),child_process_1=require("child_process"),uuid_1=require("uuid"),i18n_utils_1=(require("isomorphic-form-data"),require("../../../global"),require("../i18n-utils")),utils_1=require("../../utils"),utils_2=require("./utils"),lodash=require("lodash"),downloadTimes=(!function(e){e.Start="Start",e.CopyingCode="Copying code",e.CompilingWidget="Compiling the custom widgets",e.GeneratingZip="Generating a zip file",e.Fail="Fail",e.Completed="completed"}(StatusMessage=StatusMessage||{}),0),prodDistFolder="dist-prod",isReleasePackage=fs.existsSync(path.join(utils_2.CLIENT_PATH,utils_2.DIST_FOLDER,"widgets/widgets-info-existed.json")),ANALYSIS_URI="widgets/arcgis/analysis/",CHART_URI="widgets/common/chart/",EntryDependency={"widgets/arcgis/analysis/":[{pkgFolder:"arcgis-amd-packages/arcgis-analysis-components",i18nFolder:["arcgis-amd-packages/arcgis-analysis-components"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["t9n"],t=void 0===t?[]:t)}},{pkgFolder:"arcgis-amd-packages/arcgis-analysis-core",i18nFolder:["arcgis-amd-packages/arcgis-analysis-core"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["t9n"],t=void 0===t?[]:t)}},{pkgFolder:"arcgis-amd-packages/arcgis-analysis-raster-function-utils",i18nFolder:["arcgis-amd-packages/arcgis-analysis-raster-function-utils"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["strings"],t=void 0===t?[]:t)}},{pkgFolder:"arcgis-amd-packages/arcgis-analysis-shared-utils",i18nFolder:["arcgis-amd-packages/arcgis-analysis-shared-utils"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["t9n"],t=void 0===t?[]:t)}},{pkgFolder:"arcgis-amd-packages/arcgis-analysis-tool-app",i18nFolder:["arcgis-amd-packages/arcgis-analysis-tool-app"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["strings","t9n"],t=void 0===t?[]:t)}},{pkgFolder:"arcgis-amd-packages/arcgis-analysis-assets",i18nFolder:["arcgis-amd-packages/arcgis-analysis-assets/t9n","arcgis-amd-packages/arcgis-analysis-assets/assets/t9n"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["t9n"],t=void 0===t?[]:t)}},{pkgFolder:"arcgis-amd-packages/arcgis-app-assets",i18nFolder:["arcgis-amd-packages/arcgis-app-assets/i18n"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["i18n"],t=void 0===t?[]:t)}},{pkgFolder:"arcgis-amd-packages/arcgis-geoenrichment-components-assets",isHasI18nFolder:!0,i18nFolder:["arcgis-amd-packages/arcgis-geoenrichment-components-assets/t9n"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["_"],t=void 0===t?[]:t,"")}},{pkgFolder:"arcgis-amd-packages/arcgis-raster-function-editor-assets",i18nFolder:["arcgis-amd-packages/arcgis-raster-function-editor-assets/t9n"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["t9n"],t=void 0===t?[]:t)}}],"widgets/common/chart/":[{pkgFolder:"arcgis-charts-components",i18nFolder:["arcgis-charts-components/t9n"],i18nFilterFunction:function(e,t){return i18nFilterFunction(e,["t9n"],t=void 0===t?[]:t)}}]},i18nFilterFunction=function(n,e,t,i){void 0===t&&(t=[]),void 0===i&&(i=".");var s=!1,s=e.every(function(e){return!n.includes("".concat(e).concat(i))});return t.map(function(t){e.forEach(function(e){n.includes("".concat(e).concat(i).concat(t))&&(s=!0)})}),s};function getDownloadStatus(i,e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(e){switch(e.label){case 0:return t=i.params.appId,n=i.query.uuid,[4,getDownloadStatusByAppId(t,n)];case 1:return t=e.sent(),n=downloadTimes,"001"!==t.code&&null!=t&&t.code||(n=null),i.body={status:t,cdnNumber:n},[2]}})})}function getDownloadStatusByAppId(i,s){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(e){return t=getPathOfDownloadStatus(i,s),n={},fs.existsSync(t)&&(n=JSON.parse(fs.readFileSync(t,"utf8"))||{}),[2,Promise.resolve(n)]})})}function DownloadAppZip(a,e){return __awaiter(this,void 0,void 0,function(){var t,n,i,s,r,o;return __generator(this,function(e){switch(e.label){case 0:return[4,(0,utils_1.checkToken)(a.query.token)];case 1:return t=e.sent(),n=a.params.appId,i=a.query.uuid,s=path.join(utils_2.SERVER_PATH,"temp"),s=path.join(s,"".concat(n,"-").concat(i,".zip")),[4,getDownloadStatusByAppId(n,i)];case 2:return r=e.sent(),removeDownloadStatus(n,i),t?"006"===r.code?a.body="The app has not been packaged yet.":fs.existsSync(s)?(o=new AdmZip(s),a.response.set("Content-disposition","attachment; filename="+(r.fileName||n)+".zip"),a.body=o.toBuffer(),removeTemporaryAppInTempFolder(n,i)):a.body="No app zip.":a.body="Please log in.",[2]}})})}function download(s,r){return __awaiter(this,void 0,void 0,function(){var t,n,i;return __generator(this,function(e){switch(e.label){case 0:return[4,(0,utils_1.checkToken)(s.query.token)];case 1:if(!e.sent())return s.body="Please log in.",[2];t=s.params.appId,i=s.query.locale?null==(i=s.query.locale)?void 0:i.split(","):[],n=(0,uuid_1.v1)(),removeDownloadStatus(t,n),setDownloadStatus(t,"001",n);try{s.body={uuid:n,message:"Create zip for app..."},createZipForApp(t,null,n,{locales:i})}catch(e){console.error(e)}return[4,r()];case 2:return e.sent(),[2]}})})}function zipApp(e,t,n){return __awaiter(this,arguments,void 0,function(t,n,i,s){var r,o,a;return void 0===s&&(s={}),__generator(this,function(e){switch(e.label){case 0:return(e.trys.push([0,2,,3]),fs.existsSync(n))?(console.log("".concat(n," exists, please use a new name.")),[2]):(s.locales||(s.locales=[]),r=(0,uuid_1.v1)(),[4,createZipForApp(t,i,r,s)]);case 1:return(o=e.sent(),a=o.message,o=o.zip,a)?(console.log(a),[2]):(o&&o.writeZip(n,function(e){removeTemporaryAppInTempFolder(t,r),e?console.error(e):console.log("Done.")}),[3,3]);case 2:return a=e.sent(),console.error(a),[3,3];case 3:return[2]}})})}function createZipForApp(j,w,S,D){return __awaiter(this,void 0,void 0,function(){var t,n,i,s,r,o,a,c,u,l,p,d,f,h,g,_,m,y,v,F;return __generator(this,function(e){switch(e.label){case 0:return(t=path.join(utils_2.SERVER_PATH,"temp"),n=path.join(utils_2.SERVER_PATH,"public/apps",j),i=path.join(t,"".concat(j,"-").concat(S)),s=D.locales,fs.existsSync(n))?(a=(o=JSON).parse,[4,fs.readFile(path.join(n,"config.json"),"utf-8")]):[2,(0,i18n_utils_1.getMessage)("notFound",s[0]||"en").then(function(e){return setDownloadStatus(j,"006",S,e),{message:e,fileName:null,zip:null}})];case 1:return r=a.apply(o,[e.sent()]),D.configModifier&&(r=modifyAppConfig(r,D)),l=(u=JSON).parse,[4,fs.readFile(path.join(n,"info.json"),"utf-8")];case 2:return(c=l.apply(u,[e.sent()]),p=path.join(n,"download-times.json"),fs.existsSync(p))?(f=parseInt,[4,fs.readFile(p,"utf-8")]):[3,4];case 3:return d=f.apply(void 0,[e.sent()]),[3,5];case 4:d=0,e.label=5;case 5:return downloadTimes=d,h=++downloadTimes,fs.writeFileSync(p,h+"","utf-8"),!0===r.__not_publish?[2,(0,i18n_utils_1.getMessage)("notPublished",s[0]||"en").then(function(e){return setDownloadStatus(j,"006",S,e),{message:e,fileName:null,zip:null}})]:[4,fs.pathExists(i)];case 6:return e.sent()?[4,fs.remove(i)]:[3,8];case 7:e.sent(),e.label=8;case 8:return[4,fs.ensureDir(i)];case 9:return e.sent(),setDownloadStatus(j,"002",S),[4,compileWidgets(r)];case 10:return e.sent(),setDownloadStatus(j,"003",S),[4,copyAppCode(i,r,c.title,s,h)];case 11:return e.sent(),_=(g=JSON).parse,[4,fs.readFile((0,utils_1.getBuilderSettingFilePath)(),"utf-8")];case 12:return F=_.apply(g,[e.sent()]),null!=(F=F.devEnv[global.hostEnv])&&F.isWebTier?r.attributes.isWebTier=!0:r.attributes.isWebTier=!1,r.attributes.clientId=w||"",r.attributes.title=c.title,r.attributes.description=c.snippet,r.attributes.type=c.type,r.attributes.thumbnail=(null==c?void 0:c.thumbnail)||null,F=path.join(i,getCDNString(h)),[4,fs.writeFile(path.join(F,"config.json"),JSON.stringify(r,null,2),"utf-8")];case 13:return e.sent(),[4,fs.copy(path.join(n,"resources"),path.join(F,"resources"))];case 14:return(e.sent(),fs.existsSync(path.join(n,"thumbnail")))?[4,fs.copy(path.join(n,"thumbnail"),path.join(F,"thumbnail"))]:[3,16];case 15:e.sent(),e.label=16;case 16:return(setDownloadStatus(j,"004",S),(m=new AdmZip).addLocalFolder(i),y=encodeURI(c.title),v=path.join(t,"".concat(j,"-").concat(S,".zip")),fs.existsSync(v))?[4,fs.remove(v)]:[3,18];case 17:e.sent(),e.label=18;case 18:return fs.writeFile(v,m.toBuffer()),setDownloadStatus(j,"005",S,null,y),[2,Promise.resolve({message:null,fileName:y,zip:m})]}})})}function modifyAppConfig(t,n){if("function"==typeof n.configModifier)try{t=n.configModifier(t)}catch(e){console.error("Modify app config error.",e)}else Object.keys(n.configModifier).forEach(function(e){void 0===lodash.get(t,e)?console.error("The ".concat(e," is not found in the app config.")):lodash.set(t,e,n.configModifier[e])});return t}function copyAppCode(r,o,a,c,u){return __awaiter(this,void 0,void 0,function(){var t,n,i,s;return __generator(this,function(e){switch(e.label){case 0:return t=path.join(utils_2.CLIENT_PATH,utils_2.DIST_FOLDER),n=path.join(utils_2.CLIENT_PATH,prodDistFolder),[4,fs.copy(path.join(t,"experience/index.html"),path.join(r,"index.html"))];case 1:return e.sent(),[4,fs.copy(path.join(t,"experience/web.config"),path.join(r,"web.config"))];case 2:return e.sent(),[4,fixIndexFile(path.join(r,"index.html"),a,u)];case 3:return(e.sent(),"production"===process.env.NODE_ENV&&fs.existsSync(path.join(t,"service-worker.prod.js")))?[4,fs.copy(path.join(t,"service-worker.prod.js"),path.join(r,"service-worker.js"))]:[3,5];case 4:return e.sent(),[3,7];case 5:return[4,fs.copy(path.join(t,"service-worker.js"),path.join(r,"service-worker.js"))];case 6:e.sent(),e.label=7;case 7:return i=path.join(r,getCDNString(u)),[4,fs.copy(path.join(t,"experience/index.js"),path.join(i,"index.js"))];case 8:return e.sent(),[4,fs.copy(path.join(t,"experience/assets"),path.join(i,"assets"))];case 9:return e.sent(),[4,fs.copy(path.join(t,"service-worker-registration.js"),path.join(i,"service-worker-registration.js"))];case 10:return e.sent(),[4,fixServiceWorkerFile(path.join(i,"service-worker-registration.js"))];case 11:return e.sent(),[4,copyJimuFolder(i,c)];case 12:return e.sent(),[4,copyCalciteComponents(t,i,c)];case 13:return e.sent(),[4,copyArcgisMapComponents(t,i,c)];case 14:return e.sent(),[4,fs.copy(path.join(t,o.theme),path.join(i,o.theme))];case 15:return e.sent(),[4,copyOnDemandPackages(o,t,i,c)];case 16:return e.sent(),s=(0,utils_2.getWidgetsUriFromAppConfig)(o),[4,copyWidgets(t,i,n,s,c)];case 17:return(e.sent(),"production"===process.env.NODE_ENV&&fs.existsSync(path.join(n,utils_2.WIDGET_INFO_PATH)))?[4,fs.copy(path.join(n,utils_2.WIDGET_INFO_PATH),path.join(i,utils_2.WIDGET_INFO_PATH))]:[3,19];case 18:return e.sent(),[3,21];case 19:return fs.existsSync(path.join(t,utils_2.WIDGET_INFO_PATH))?[4,fs.copy(path.join(t,utils_2.WIDGET_INFO_PATH),path.join(i,utils_2.WIDGET_INFO_PATH))]:[3,21];case 20:e.sent(),e.label=21;case 21:return"production"===process.env.NODE_ENV&&fs.existsSync(path.join(n,utils_2.WIDGET_CHUNKS_PATH))?[4,fs.copy(path.join(n,utils_2.WIDGET_CHUNKS_PATH),path.join(i,utils_2.WIDGET_CHUNKS_PATH))]:[3,23];case 22:return e.sent(),[3,25];case 23:return fs.existsSync(path.join(t,utils_2.WIDGET_CHUNKS_PATH))?[4,fs.copy(path.join(t,utils_2.WIDGET_CHUNKS_PATH),path.join(i,utils_2.WIDGET_CHUNKS_PATH))]:[3,25];case 24:e.sent(),e.label=25;case 25:return fs.existsSync(path.join(t,utils_2.WIDGET_SHARED_CODE_PATH))?[4,fs.copy(path.join(t,utils_2.WIDGET_SHARED_CODE_PATH),path.join(i,utils_2.WIDGET_SHARED_CODE_PATH))]:[3,27];case 26:e.sent(),e.label=27;case 27:return"production"===process.env.NODE_ENV&&fs.existsSync(path.join(n,utils_2.WIDGET_SHARED_CODE_PATH))?[4,fs.copy(path.join(n,utils_2.WIDGET_SHARED_CODE_PATH),path.join(i,utils_2.WIDGET_SHARED_CODE_PATH))]:[3,29];case 28:e.sent(),e.label=29;case 29:return[4,Promise.all(s.coreWidgetsUri.concat(s.customWidgetsUri).map(function(e){var t=path.join(i,e,"src"),e=path.join(i,e,"tests"),n=[];return fs.existsSync(t)&&n.push(fs.remove(t)),fs.existsSync(e)&&n.push(fs.remove(e)),Promise.all(n)}))];case 30:return e.sent(),[2]}})})}function copyFilesWithLocales(a){return __awaiter(this,void 0,void 0,function(){var t,n,i,s,r,o;return __generator(this,function(e){return t=a.distPath,n=a.cdnFolder,r=a.folderName,i=a.keywordsOfI18nFiles,s=initLocalesToArcGisLocale(a.locales),r=getAllFilesInDir(r,t,n),o=[],r.forEach(function(e){var t=e.distPath,n=e.name,e=e.cdnPath;checkIsCopyFiles(n,s,i)&&o.push(fs.copy(t,e,{overwrite:!0}))}),[2,Promise.all(o)]})})}function copyCalciteComponents(t,n,i){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,copyFilesWithLocales({distPath:t,cdnFolder:n,folderName:"calcite-components",locales:i,keywordsOfI18nFiles:"messages_"})]})})}function copyArcgisMapComponents(t,n,i){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,copyFilesWithLocales({distPath:t,cdnFolder:n,folderName:"arcgis-map-components",locales:i,keywordsOfI18nFiles:"t9n."})]})})}function checkIsCopyFiles(t,e,n){var i=!t.includes(".json")||!t.includes(n);return!(e&&0!==(null==e?void 0:e.length)&&!i)||(e.map(function(e){t.includes("".concat(e,".json"))&&(i=!0)}),i)}function copyOnDemandPackages(a,c,u,l){return __awaiter(this,void 0,void 0,function(){var t,n,i,s,r,o;return __generator(this,function(e){switch(e.label){case 0:return(l=initLocalesToArcGisLocale(l),n=(0,utils_2.getWidgetsUriFromAppConfig)(a),t=n.customWidgetsUri,n=n.coreWidgetsUri,i=n.concat(t),0===(null==t?void 0:t.length)&&0===(null==n?void 0:n.length))?[2,Promise.resolve([])]:(s=[],null!=i&&i.forEach(function(e){e!==ANALYSIS_URI&&e!==CHART_URI||(s=s.concat(EntryDependency[e]))}),r=[],s.forEach(function(n){n.i18nFolder.includes(n.pkgFolder)&&l&&0!==(null==l?void 0:l.length)||r.push(fs.copy(path.join(c,n.pkgFolder),path.join(u,n.pkgFolder),{filter:function(e,t){return copyOnDemandPackagFilter(e,t,n,c,l)},overwrite:!0}))}),[4,Promise.all(r)]);case 1:return(e.sent(),0<(null==l?void 0:l.length))?(o=[],s.forEach(function(i){var e;0<(null==(e=i.i18nFolder)?void 0:e.length)&&i.i18nFolder.forEach(function(e){getAllFilesInDir(e,c,u).forEach(function(e){var t=e.distPath,n=e.name,e=e.cdnPath;i.i18nFilterFunction(n,l)&&o.push(fs.copy(t,e,{overwrite:!0}))})})}),[4,Promise.all(o)]):[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}function getAllFilesInDir(n,i,s,r){return void 0===r&&(r=[]),fs.readdirSync(path.join(i,n)).forEach(function(e){var t=path.join(n,e);fs.statSync(path.join(i,t)).isDirectory()?getAllFilesInDir(t,i,s,r):r.push({name:e,distPath:path.join(i,t),cdnPath:path.join(s,t)})}),r}function copyOnDemandPackagFilter(t,e,n,i,s){var r;return!s||0===(null==s?void 0:s.length)||!n.i18nFolder&&0===n.i18nFolder.length||(s=n.i18nFolder,r=!0,s.forEach(function(e){isFolderInFolder(t,path.join(i,e))&&(r=!1)}),r)}function isFolderInFolder(e,t){t=path.relative(t,e);return!t.startsWith("..")&&!path.isAbsolute(t)}function initLocalesToArcGisLocale(e){return e.map(function(e){var t;return e.includes("-")?(t=e.split("-"),"".concat(t[0],"-").concat(t[1].toUpperCase())):e})}function compileWidgets(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return"production"!==process.env.NODE_ENV||!isReleasePackage||0===(0,utils_2.getWidgetsUriFromAppConfig)(t).customWidgetsUri.length?[2,Promise.resolve()]:((0,child_process_1.execSync)("npm run build:prod",{cwd:utils_2.CLIENT_PATH}),[2])})})}function fixIndexFile(n,i,s){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,fs.readFile(n,"utf-8")];case 1:return t=(t=e.sent()).replace(/<base.*\/>/,'<base href="./'.concat(getCDNString(s),'/"/>')).replace('"isOutOfExb": false','"isOutOfExb": true').replace('"isDevEdition": false','"isDevEdition": true').replace('"useStructuralUrl": true','"useStructuralUrl": false').replace(/"buildNumber": ".*"/,'"buildNumber": "'.concat(s,'"')).replace('"appFolderName": "experience"','"appFolderName": "."').replace('<script src="../jimu-core/init.js"><\/script>','<script src="./jimu-core/init.js"><\/script>').replace("<title>Experience</title>","<title>".concat(i,"</title>")),[4,fs.writeFile(n,t,"utf-8")];case 2:return e.sent(),[2]}})})}function fixServiceWorkerFile(n){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,fs.readFile(n,"utf-8")];case 1:return t=(t=e.sent()).replace("register(window.jimuConfig.mountPath + 'service-worker.js')","register('../../service-worker.js')"),[4,fs.writeFile(n,t,"utf-8")];case 2:return e.sent(),[2]}})})}function getCDNString(e){return"cdn/".concat(e)}function translationsFolderFilter(e,t,n){return!n||0===(null==n?void 0:n.length)||!e.includes("translations")||!fs.existsSync(path.join(e,"default.ts"))}function copyJimuFolder(s,r){return __awaiter(this,void 0,void 0,function(){var t,n,i;return __generator(this,function(e){switch(e.label){case 0:return t=path.join(utils_2.CLIENT_PATH,utils_2.DIST_FOLDER),i=(n=["jimu-core","jimu-ui","jimu-layouts","jimu-arcgis","jimu-theme","jimu-for-builder"]).map(function(e){return fs.copy(path.join(t,e),path.join(s,e),{filter:function(e,t){return translationsFolderFilter(e,t,r)}})}),[4,Promise.all(i)];case 1:return(e.sent(),0<(null==r?void 0:r.length))?[4,copyJimuTranslations(s,r,n)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}function copyJimuTranslations(s,r,t){return __awaiter(this,void 0,void 0,function(){var n,i;return __generator(this,function(e){return n=path.join(utils_2.CLIENT_PATH,utils_2.DIST_FOLDER),i=[],r&&(t.forEach(function(t){var e="".concat(t,"/lib/translations/default.ts");fs.existsSync(path.join(n,e))&&i.push(fs.copy(path.join(n,e),path.join(s,e))),r.forEach(function(e){e="".concat(t,"/lib/translations/").concat(e,".js");fs.existsSync(path.join(n,e))&&i.push(fs.copy(path.join(n,e),path.join(s,e)))})}),Promise.all(i)),[2]})})}function copyWidgets(t,n,i,s,r){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,copyWidgetOrTranslationsByUri(t,n,i,s,r)];case 1:return(e.sent(),0<(null==r?void 0:r.length))?[4,copyWidgetOrTranslationsByUri(t,n,i,s,r,!0)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}function copyWidgetOrTranslationsByUri(e,t,n,i,s){return __awaiter(this,arguments,void 0,function(n,i,s,t,r,o){var a;return void 0===o&&(o=!1),__generator(this,function(e){switch(e.label){case 0:return a=[],t.coreWidgetsUri.forEach(function(e){e=(o?copyWidgetTranslations:copyWidget)(n,i,r,e);a=a.concat(e)}),t.customWidgetsUri.forEach(function(e){var t="production"===process.env.NODE_ENV&&isReleasePackage?s:n,t=(o?copyWidgetTranslations:copyWidget)(t,i,r,e);a=a.concat(t)}),[4,Promise.all(a)];case 1:return e.sent(),[2]}})})}function copyWidget(e,t,n,i){var s=[];return s.push(fs.copy(path.join(e,i),path.join(t,i),{filter:function(e,t){return translationsFolderFilter(e,t,n)},overwrite:!0})),s}function copyWidgetTranslations(n,i,e,s){var t,r,o=[];return e&&(t="dist/runtime/translations/default.ts",fs.existsSync(path.join(n,s,r="dist/setting/translations/default.ts"))&&o.push(fs.copy(path.join(n,s,r),path.join(i,s,r),{overwrite:!0})),fs.existsSync(path.join(n,s,t))&&o.push(fs.copy(path.join(n,s,t),path.join(i,s,t),{overwrite:!0})),e.forEach(function(e){var t="dist/runtime/translations/".concat(e,".js"),e="dist/setting/translations/".concat(e,".js");fs.existsSync(path.join(n,s,t))&&o.push(fs.copy(path.join(n,s,t),path.join(i,s,t),{overwrite:!0})),fs.existsSync(path.join(n,s,e))&&o.push(fs.copy(path.join(n,s,e),path.join(i,s,e),{overwrite:!0}))})),o}function setDownloadStatus(r,o,a,c,u){return __awaiter(this,void 0,void 0,function(){var t,n,i,s;return __generator(this,function(e){switch(e.label){case 0:if(!r||!o)return[2];switch(o){case"001":t=StatusMessage.Start;break;case"002":t=StatusMessage.CopyingCode;break;case"003":t=StatusMessage.CompilingWidget;break;case"004":t=StatusMessage.GeneratingZip;break;case"005":t=StatusMessage.Completed;break;case"006":t=StatusMessage.Fail}return[4,getDownloadStatusByAppId(r,a)];case 1:return i=e.sent(),n=null==i?void 0:i.hasCustomWidget,i.hasOwnProperty("hasCustomWidget")?[3,3]:[4,checkIsHasCustomWidgets(r)];case 2:n=e.sent(),e.label=3;case 3:return i={message:t,code:o},c&&(i.error=c),u&&(i.fileName=u),i.hasCustomWidget=n,s=getPathOfDownloadStatus(r,i.uuid=a),fs.writeFileSync(s,JSON.stringify(i,null,2)),[2,i]}})})}function getPathOfDownloadStatus(e,t){var n=path.join(utils_2.SERVER_PATH,"temp"),e=(fs.ensureDirSync(n),"download-status-".concat(e,"-").concat(t));return path.join(n,e)}function removeDownloadStatus(e,t){e=getPathOfDownloadStatus(e,t);fs.existsSync(e)&&fs.removeSync(e)}function removeTemporaryAppInTempFolder(e,t){var n=path.join(utils_2.SERVER_PATH,"temp"),i=path.join(n,"".concat(e,"-").concat(t)),n=path.join(n,"".concat(e,"-").concat(t,".zip"));fs.existsSync(i)&&fs.removeSync(i),fs.existsSync(n)&&fs.removeSync(n)}function checkIsHasCustomWidgets(o){return __awaiter(this,void 0,void 0,function(){var t,n,i,s,r;return __generator(this,function(e){switch(e.label){case 0:return t=path.join(utils_2.SERVER_PATH,"public/apps",o),i=(n=JSON).parse,[4,fs.readFile(path.join(t,"config.json"),"utf-8")];case 1:return(t=i.apply(n,[e.sent()]))?(s=(0,utils_2.getWidgetsUriFromAppConfig)(t),r=!1,0<s.customWidgetsUri.length&&(r=!0),[2,Promise.resolve(r)]):[2,Promise.resolve(!1)]}})})}exports.getDownloadStatus=getDownloadStatus,exports.DownloadAppZip=DownloadAppZip,global.fetch=fetch,exports.download=download,exports.zipApp=zipApp;