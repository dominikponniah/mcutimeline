(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a});const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,c=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},JbSX:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("wEJo"),r=n("qULd"),c=n("iWo5");const o=(t,e)=>{let n,o;const a=(t,i,r)=>{if("undefined"==typeof document)return;const c=document.elementFromPoint(t,i);c&&e(c)?c!==n&&(l(),s(c,r)):l()},s=(t,e)=>{n=t,o||(o=n);const r=n;Object(i.f)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&o!==n&&n.click(),n=void 0};return Object(c.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,r.a),onMove:t=>a(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),o=void 0}})}},acej:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c});var i=n("1vRN");const r=async(t,e,n,r,c)=>{if(t)return t.attachViewToDom(e,n,c,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>o.classList.add(t)),c&&Object.assign(o,c),e.appendChild(o),await new Promise(t=>Object(i.c)(o,t)),o},c=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",c=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(c)+"px",left:9*Math.cos(c)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},mrSG:function(t,e,n){"use strict";function i(t,e,n,i){return new(n||(n=Promise))(function(r,c){function o(t){try{s(i.next(t))}catch(e){c(e)}}function a(t){try{s(i.throw(t))}catch(e){c(e)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(o,a)}s((i=i.apply(t,e||[])).next())})}n.d(e,"a",function(){return i})},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return a});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},c=()=>{i.selectionStart()},o=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},s=t=>{i.impact(t)}},qtYk:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("ofXK"),r=n("3Pt+"),c=n("TEn/"),o=n("fXoL");let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({imports:[[i.b,r.a,c.t]]}),t})()},vgIa:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n("fXoL"),r=n("jhN1"),c=n("TEn/"),o=n("ofXK"),a=n("sYmb");function s(t,e){1&t&&(i.Mb(0,"ion-card-subtitle"),i.kc(1),i.Xb(2,"translate"),i.Lb()),2&t&&(i.zb(1),i.mc(" ",i.Yb(2,1,"DETAILS.episodes")," "))}function l(t,e){1&t&&(i.kc(0),i.Xb(1,"translate")),2&t&&i.mc(" ",i.Yb(1,1,"DETAILS.duration")," ")}function u(t,e){if(1&t&&(i.Mb(0,"p"),i.kc(1),i.Lb()),2&t){const t=i.Wb();i.zb(1),i.mc(" ",t.mediaItem.episodes_to_watch," ")}}function d(t,e){if(1&t&&i.kc(0),2&t){const t=i.Wb();i.mc(" ",t.mediaItem.duration," Minutes ")}}function b(t,e){if(1&t&&i.Kb(0,"iframe",6),2&t){const t=i.Wb();i.bc("src",t.videoURL,i.fc)}}let f=(()=>{class t{constructor(t){this.sanitizer=t,this.isYouTube=!1,this.videoURL=null}ngOnInit(){this.videoURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.mediaItem.trailer_url),this.isYouTube=!!this.mediaItem.trailer_url.includes("youtube.com")}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(r.b))},t.\u0275cmp=i.Db({type:t,selectors:[["app-details"]],inputs:{mediaItem:["value","mediaItem"]},decls:33,vars:20,consts:[[1,"details"],[1,"icon",3,"src"],[4,"ngIf","ngIfElse"],["durationTitle",""],["durationValue",""],["id","trailerBox","height","315","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src",4,"ngIf"],["id","trailerBox","height","315","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(t,e){if(1&t&&(i.Mb(0,"ion-content"),i.Mb(1,"div",0),i.Kb(2,"img",1),i.Mb(3,"h1"),i.kc(4),i.Lb(),i.Mb(5,"ion-card"),i.Mb(6,"ion-card-header"),i.Mb(7,"ion-card-subtitle"),i.kc(8),i.Xb(9,"translate"),i.Lb(),i.Lb(),i.Mb(10,"ion-card-content"),i.kc(11),i.Lb(),i.Mb(12,"ion-card-header"),i.ic(13,s,3,3,"ion-card-subtitle",2),i.ic(14,l,2,3,"ng-template",null,3,i.jc),i.Lb(),i.Mb(16,"ion-card-content"),i.ic(17,u,2,1,"p",2),i.ic(18,d,1,1,"ng-template",null,4,i.jc),i.Lb(),i.Mb(20,"ion-card-content"),i.Mb(21,"b"),i.kc(22),i.Xb(23,"translate"),i.Lb(),i.kc(24),i.Mb(25,"b"),i.kc(26),i.Xb(27,"translate"),i.Lb(),i.kc(28),i.Lb(),i.Lb(),i.Mb(29,"ion-card"),i.Mb(30,"ion-card-content"),i.kc(31),i.Lb(),i.Lb(),i.ic(32,b,1,1,"iframe",5),i.Lb(),i.Lb()),2&t){const t=i.dc(15),n=i.dc(19);i.zb(2),i.bc("src",e.mediaItem.cover_url,i.gc),i.zb(2),i.lc(e.mediaItem.title),i.zb(4),i.mc(" ",i.Yb(9,14,"DETAILS.directed")," "),i.zb(3),i.mc(" ",e.mediaItem.directed_by," "),i.zb(2),i.bc("ngIf","0"!==e.mediaItem.episodes_to_watch)("ngIfElse",t),i.zb(4),i.bc("ngIf","0"!==e.mediaItem.episodes_to_watch)("ngIfElse",n),i.zb(5),i.mc(" ",i.Yb(23,16,"DETAILS.release")," "),i.zb(2),i.mc(" ",e.mediaItem.release_date," | "),i.zb(2),i.mc(" ",i.Yb(27,18,"DETAILS.year_it_played")," "),i.zb(2),i.mc(" ",e.mediaItem.year_it_played," "),i.zb(3),i.mc(" ",e.mediaItem.overview," "),i.zb(1),i.bc("ngIf",e.isYouTube)}},directives:[c.h,c.d,c.f,c.g,c.e,o.i],pipes:[a.c],styles:[".details[_ngcontent-%COMP%]{text-align:center;margin-top:60px}.details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:25px}.details[_ngcontent-%COMP%]   #trailerBox[_ngcontent-%COMP%]{width:93%;border-radius:7px}.details[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-weight:700}.details[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:55vw}"]}),t})()}}]);