System.register("chunks:///_virtual/CrazySDK.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,r,s,o,a,u;return{setters:[function(t){e=t.asyncToGenerator,n=t.createClass,i=t.regeneratorRuntime},function(t){r=t.cclegacy,s=t.error,o=t.sys,a=t.DebugMode,u=t.game}],execute:function(){r._RF.push({},"954943rZC9D25RCFh4kmaEB","CrazySDK",void 0);var c=function(){function t(){}return t.Log=function(){var t;if(!([a.VERBOSE,a.INFO].indexOf(u.config.debugMode)<0)){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["[CrazySDK]"].concat(n))}},t}(),d=function(t){return t[t.UNINITIALIZED=0]="UNINITIALIZED",t[t.REQUESTED=1]="REQUESTED",t[t.INITIALIZED=2]="INITIALIZED",t}(d||{});t("default",new(function(){function t(){this.initResolvers=[],this.initState=d.UNINITIALIZED,this.sdk=void 0,this._isSupportedPlatform=void 0,this._version="2.0.0";var t=[o.Platform.MOBILE_BROWSER,o.Platform.DESKTOP_BROWSER];this._isSupportedPlatform=t.indexOf(o.platform)>=0}var r=t.prototype;return r.ensureInitialized=function(){if(this.initState!==d.INITIALIZED)throw new Error("CrazySDK is not initialized yet. Please call CrazySDK.init() first.")},r.isInited=function(){return this.initState==d.INITIALIZED},r.initInternal=function(){var t=this;if(this.initState===d.UNINITIALIZED){this.initState=d.REQUESTED;var n=document.createElement("script");n.src="https://sdk.crazygames.com/crazygames-sdk-v3.js",n.async=!0,n.onload=e(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.Log("JS SDK loaded"),t.sdk=window.CrazyGames.SDK,e.next=4,t.sdk.init({wrapper:{engine:"cocos",sdkVersion:t._version}});case 4:t.initState=d.INITIALIZED,t.initResolvers.forEach((function(t){return t()})),t.initResolvers=[];case 7:case"end":return e.stop()}}),e)}))),n.onerror=function(){return s("Failed to load CrazySDK JS. Please check your internet connection.")},document.head.appendChild(n)}},r.init=function(){var t=this;if(!this.isSupportedPlatform)throw new Error("CrazySDK is not enabled on this platform");return new Promise((function(e){t.initState===d.INITIALIZED?e():(t.initResolvers.push(e),t.initInternal())}))},n(t,[{key:"isSupportedPlatform",get:function(){return this._isSupportedPlatform}},{key:"environment",get:function(){return this.ensureInitialized(),this.sdk.environment}},{key:"isQaTool",get:function(){return this.ensureInitialized(),this.sdk.isQaTool}},{key:"ad",get:function(){return this.ensureInitialized(),this.sdk.ad}},{key:"game",get:function(){return this.ensureInitialized(),this.sdk.game}},{key:"user",get:function(){return this.ensureInitialized(),this.sdk.user}},{key:"data",get:function(){return this.ensureInitialized(),this.sdk.data}}]),t}()));r._RF.pop()}}}));

System.register("chunks:///_virtual/CrazySDK.types.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,t;return{setters:[function(r){e=r.inheritsLoose},function(r){t=r.cclegacy}],execute:function(){t._RF.push({},"b581fU4oyxMdp3d+3NdYqW4","CrazySDK.types",void 0);var n=r("GeneralError",(function(r,e){this.code=r,this.message=e}));r("AdError",function(r){function t(e,t){var n;return(n=r.call(this,e,t)||this).code=e,n.message=t,n}return e(t,r),t}(n)),r("UserError",function(r){function t(e,t){var n;return(n=r.call(this,e,t)||this).code=e,n.message=t,n}return e(t,r),t}(n)),r("DataError",function(r){function t(e,t){var n;return(n=r.call(this,e,t)||this).code=e,n.message=t,n}return e(t,r),t}(n)),r("BannerError",function(r){function t(e,t,n){var s;return(s=r.call(this,e,t)||this).code=e,s.message=t,s.containerId=n,s}return e(t,r),t}(n));t._RF.pop()}}}));

System.register("chunks:///_virtual/CrazySDKDemoLoadScript.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CrazySDK.ts","./SceneChange.ts"],(function(e){var t,n,a,i,o,r,c,s,d,l,u,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,c=e.CCString,s=e.director,d=e.find,l=e.Component},function(e){u=e.default},function(e){m=e.SceneChange}],execute:function(){var S,f,p,g,y;o._RF.push({},"fc47bGV3W5HJathgkkNsHj8","CrazySDKDemoLoadScript",void 0);var h=r.ccclass,C=r.property;e("CrazySDKDemoLoadScene",(S=h("CrazySDKDemoLoadScene"),f=C(c),S((y=t((g=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,a(t,"nextSceneName",y,i(t)),t}n(t,e);var o=t.prototype;return o.start=function(){var e=this;s.addPersistRootNode(d("Ads")),s.addPersistRootNode(d("MenuMusic"));try{u.init().then((function(){e.loadScene()})).catch((function(e){e("Initialization failed "+e)}))}catch(e){this.loadScene()}},o.loadScene=function(){if(null==u.data.getItem("iconNum")&&(u.data.setItem("iconNum","1"),u.data.setItem("iconCol","1"),u.data.setItem("col1","1")),null==u.data.getItem("firstTime")){u.data.setItem("CrossSceneData",JSON.stringify({editLevelID:1,editLevelName:"Adventure Begins",lastScene:1}));u.data.setItem("Wins",JSON.stringify({})),d("Canvas/Fade").getComponent(m).changeScene("Game",!1)}else d("Canvas/Fade").getComponent(m).changeScene("Main Menu",!1);u.data.setItem("firstTime","true"),u.data.setItem("CrossSceneData",JSON.stringify({editLevelID:1,editLevelName:"Adventure Begins",lastScene:1}))},t}(l)).prototype,"nextSceneName",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=g))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./CrazySDK.ts","./CrazySDK.types.ts","./CrazySDKDemoLoadScript.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});