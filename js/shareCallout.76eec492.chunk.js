"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[8318],{16805:function(e,r,t){t.d(r,{E:function(){return u}});var n=t(15671),o=t(43144),a=t(60136),i=t(29388),s=t(72791),c=t(87504),l=t(39647),u=function(e){(0,a.Z)(t,e);var r=(0,i.Z)(t);function t(e){var o;return(0,n.Z)(this,t),(o=r.call(this,e)).state={hasError:!1},o}return(0,o.Z)(t,[{key:"componentDidCatch",value:function(e){var r=new l.hl(c.k6.FluentUiError,e.stack,e.stack);this.props.onRenderPromise.reject(r),this.props.onCompletePromise.reject(r)}},{key:"render",value:function(){if(!this.state.hasError)return this.props.children;alert(this.props.stringTable.fluentUiErrorTitle)}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(s.Component)},85670:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(29439),o=t(72791),a=t(97708),i=t(90110),s=t(42110),c=t(46839),l=t(87504),u=t(39647),d=t(93184),h="shareIframe",m="www.odwebp.svc.ms",f="https://".concat(m,"/share"),p=void 0,v=o.memo((function(e){var r=e.payloadPromise,t=e.onRenderPromise,s=e.onCompletePromise,c=e.stringTable,l=e.perfMarks,v=e.localization,k=e.renderState,C=e.setRenderState,S=e.onIframeDismiss,y=e.isEnterpriseEndpointEnabled,T=e.isCrossDomainClipboardAccessEnabled,P=o.useState(void 0),L=(0,n.Z)(P,2),Z=L[0],R=L[1],D=o.useState({width:(0,d.qB)(d.pJ),height:d.PN}),M=(0,n.Z)(D,2),U=M[0],$=M[1],_=o.useRef(null),x=o.useRef(null),j=o.useCallback((function(e){var r=e.width,t=e.height;$({width:(0,d.qB)(r),height:t})}),[]),N=o.useCallback((function(e){if(y){p=new URL(e).hostname;var r=Date.now();return"".concat(e).concat("/_layouts/15/sharedialog.aspx?crossdomain=true&migratedhosting=true","&clientId=").concat("fluid","&clickTime=").concat(r)}return p=m,"".concat(f,"?smkt=").concat(v.locale)}),[y,v.locale]),I=o.useCallback((function(e){e&&e.focus()}),[]),z=o.useCallback((function(e){e&&(e.submit(),l.payloadSendStartTime=performance.now())}),[l]),A=o.useCallback((function(){if(null!==_.current&&void 0!==Z){var e=Z.authToken,r=N(Z.webAbsoluteUrl);_.current.target=h,_.current.method="POST",_.current.action=r;var t=document.createElement("input");t.type="text",t.value=e,t.name="access_token",t.hidden=!0,_.current.appendChild(t);var n=document.createElement("input");n.type="text",n.value=JSON.stringify(Z),n.name="context",n.hidden=!0,_.current.appendChild(n),_.current.submit(),l.payloadSendStartTime=performance.now()}}),[N,_,Z,l]),B=y?A:z;o.useEffect((function(){r.then((function(e){if(R(e),T){var r=function(e,r){var t="";return"clipboard-read self "+(t=r?new URL(e).origin:f)+"; clipboard-write self "+t}(e.webAbsoluteUrl,y);x.current&&(x.current.allow=r)}B()})).catch((function(e){t.reject(e),s.reject(e)}))}),[r,Z,s,t,B,y,T]),o.useEffect((function(){s.catch((function(){C(u.T$.Error)}))}),[s]),o.useEffect((function(){var e=function(e){g(e,S,t,s,C,j,l)};return window.addEventListener("message",e),function(){window.removeEventListener("message",e)}}),[]);var F=b(k,U.width,U.height),J=w(U.width,U.height);return o.createElement(o.Fragment,null,k===u.T$.Loading&&o.createElement("div",{className:E,"aria-label":"Loading",ref:I},o.createElement(a.$,{size:i.E.large})),k===u.T$.Error&&o.createElement("div",{"aria-label":c.shareDialogErrorMessage},c.shareDialogErrorMessage),k!==u.T$.Error&&o.createElement("div",{className:F},y?o.createElement("form",{id:"shareform",ref:_}):Z&&o.createElement("form",{id:"shareform",action:N(""),method:"post",target:h,ref:B},o.createElement("input",{type:"text",name:"context",defaultValue:JSON.stringify(Z),style:{display:"none"}})),o.createElement("iframe",{className:J,name:h,title:e.stringTable.shareIframeTitle,sandbox:void 0,role:"dialog",ref:x})))})),g=function(e,r,t,n,o,a,i){var s=new URL(e.origin);if("https:"===s.protocol&&s.hostname===p){var d=JSON.parse(e.data);switch(d.name){case"share_started":i.sharePointLoadStartTime=performance.now();break;case"share_ready":o(u.T$.Loaded),t.resolve(!0);break;case"share_resize":d&&(0,c.h)(d.width)&&(0,c.h)(d.height)&&0!==d.width&&0!==d.height&&a({width:d.width,height:d.height});break;case"share_dismiss":r();break;case"share_grantAccessCompleted":n.resolve(null===d||void 0===d?void 0:d.successful);break;case"share_completed":n.resolve(!0);break;case"share_error":var h=null!==d&&void 0!==d&&d.error?d.error.toString():"error not provided",m=null!==d&&void 0!==d&&d.errorCategory?d.errorCategory.toString():"error category not provided",f=null!==d&&void 0!==d&&d.errorMessage?d.errorMessage:"error message not provided",v=null!==d&&void 0!==d&&d.debugErrorMessage?d.debugErrorMessage:"debug error message not provided",g=new u.hl(l.k6.SpoShareError,f,v,h,m);t.reject(g),n.reject(g)}}},E=(0,s.y0)({width:350,height:250,paddingBottom:50,display:"flex",justifyContent:"center",alignContent:"center",selectors:{":focus":{outline:"none"}}}),w=function(e,r){return(0,s.y0)({width:e,height:r,border:"none"})},b=function(e,r,t){return(0,s.y0)({width:e===u.T$.Loaded?r:0,height:e===u.T$.Loaded?t:0,overflow:"hidden"})}},19573:function(e,r,t){t.r(r),t.d(r,{ShareCallout:function(){return v},ShareCalloutRenderer:function(){return g}});var n=t(1413),o=t(29439),a=t(72791),i=t(99128),s=t(88096),c=t(88057),l=t(69359),u=t(93184),d=t(39647),h=t(85670),m=t(87504),f=t(16805),p=t(75815),v=a.memo((function(e){var r=e.onRenderPromise,t=e.onCompletePromise,v=e.stringTable,g=e.perfMarks,w=e.localization,b=e.onDismissCallout,k=e.calloutProps,C=e.showShareProps,S=a.useState(d.T$.Loading),y=(0,o.Z)(S,2),T=y[0],P=y[1],L=a.useState(!1),Z=(0,o.Z)(L,2),R=Z[0],D=Z[1],M=function(){D(!0),b()};!function(e){var r=a.useRef(!1);a.useEffect((function(){var t=function(t){r.current&&!t.relatedTarget&&e()};return window.addEventListener("blur",t),r.current=!0,function(){r.current=!1,window.removeEventListener("blur",t)}}),[])}(M);var U=(0,s.F)(),$=(0,u.bB)(U,null===k||void 0===k?void 0:k.theme,C);return $.then((function(){g.payloadLoadEndTime=performance.now(),(0,i.s)(15e3,[r,t]).then((function(e){if(e){var n=new d.hl(m.k6.SpoTimeoutError);(0,u.C9)(r,t,n)}})).catch((function(){}))})).catch((function(){})),a.createElement(f.E,{onCompletePromise:t,onRenderPromise:r,stringTable:v},a.createElement(c.f,{theme:null===k||void 0===k?void 0:k.theme},a.createElement(l.U,(0,n.Z)((0,n.Z)({hidden:R,onDismiss:M},E),k),a.createElement(h.Z,{payloadPromise:$,onRenderPromise:r,onCompletePromise:t,stringTable:v,perfMarks:g,localization:w,renderState:T,setRenderState:P,onIframeDismiss:M,isEnterpriseEndpointEnabled:!(0,u.L2)(e.showShareProps.tokenProvider,e.showShareProps.settingsProvider),isCrossDomainClipboardAccessEnabled:(0,p.qU)(e.showShareProps.settingsProvider)}))))})),g=function(e){var r=a.useState(!0),t=(0,o.Z)(r,2),i=t[0],s=t[1];return i?a.createElement(v,(0,n.Z)((0,n.Z)({},e),{},{onDismissCallout:function(){s(!1),e.onDismissCallout()}})):null},E={setInitialFocus:!0,isBeakVisible:!1,gapSpace:0}}}]);
//# sourceMappingURL=shareCallout.76eec492.chunk.js.map