(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{TUkU:function(e,t,n){"use strict";n.r(t),n.d(t,"Tab2PageModule",function(){return d});var a=n("TEn/"),c=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),o=n("mrSG"),b=n("fXoL"),l=n("eHuo"),s=n("sYmb");const u=[{path:"",component:(()=>{class e{constructor(e,t,n){this.languageService=e,this.actionSheetController=t,this.translateService=n}ngAfterViewInit(){this.currentLanguage=this.languageService.getCurrentLanguage()}changeLanguage(){return Object(o.a)(this,void 0,void 0,function*(){var e=[];this.languageService.getLanguages().forEach(t=>{e.push({text:t.text,handler:()=>{this.languageService.changeLanguage(t.value),this.currentLanguage=t.value,location.reload()}})}),e.push({text:this.translateService.instant("EXTRAS.PICKER.cancel"),icon:"close",role:"cancel",handler:()=>{}});const t=yield this.actionSheetController.create({header:this.translateService.instant("EXTRAS.PICKER.title"),cssClass:"my-custom-class",buttons:e});yield t.present()})}openURL(e){window.open(e)}clearStorage(){localStorage.clear(),window.location.reload()}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(l.a),b.Jb(a.a),b.Jb(s.d))},e.\u0275cmp=b.Db({type:e,selectors:[["app-tab2"]],decls:37,vars:24,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"],["slot","end","id","flag","alt","",3,"src"],[1,"centered"]],template:function(e,t){1&e&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.mc(3),b.Xb(4,"translate"),b.Lb(),b.Lb(),b.Lb(),b.Mb(5,"ion-content",1),b.Mb(6,"ion-header",2),b.Mb(7,"ion-toolbar"),b.Mb(8,"ion-title",3),b.mc(9),b.Xb(10,"translate"),b.Lb(),b.Lb(),b.Lb(),b.Kb(11,"br"),b.Mb(12,"ion-item",4),b.Ub("click",function(){return t.changeLanguage()}),b.Kb(13,"img",5),b.Mb(14,"ion-label"),b.mc(15),b.Xb(16,"translate"),b.Lb(),b.Lb(),b.Kb(17,"br"),b.Mb(18,"ion-list"),b.Mb(19,"ion-item",4),b.Ub("click",function(){return t.openURL("https://www.disneyplus.com/de-de/brand/marvel")}),b.Mb(20,"ion-label"),b.mc(21),b.Xb(22,"translate"),b.Lb(),b.Lb(),b.Mb(23,"ion-item",4),b.Ub("click",function(){return t.openURL("https://www.instagram.com/marvel/")}),b.Mb(24,"ion-label"),b.mc(25),b.Xb(26,"translate"),b.Lb(),b.Lb(),b.Lb(),b.Kb(27,"br"),b.Mb(28,"ion-list"),b.Mb(29,"ion-item",4),b.Ub("click",function(){return t.clearStorage()}),b.Mb(30,"ion-label"),b.mc(31),b.Xb(32,"translate"),b.Lb(),b.Lb(),b.Lb(),b.Mb(33,"div",6),b.Mb(34,"p"),b.mc(35),b.Xb(36,"translate"),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.cc("translucent",!0),b.zb(3),b.oc(" ",b.Yb(4,10,"EXTRAS.title")," "),b.zb(2),b.cc("fullscreen",!0),b.zb(4),b.oc(" ",b.Yb(10,12,"EXTRAS.title")," "),b.zb(4),b.cc("src","assets/img/flags/"+t.currentLanguage+".png",b.ic),b.zb(2),b.nc(b.Yb(16,14,"EXTRAS.language")),b.zb(6),b.nc(b.Yb(22,16,"EXTRAS.LINKS.disneyplus")),b.zb(4),b.nc(b.Yb(26,18,"EXTRAS.LINKS.instagram")),b.zb(6),b.nc(b.Yb(32,20,"EXTRAS.ACTION.delete")),b.zb(4),b.oc(" ",b.Yb(36,22,"EXTRAS.develop")," "))},directives:[a.n,a.y,a.x,a.k,a.p,a.q,a.r],pipes:[s.c],styles:["#flag[_ngcontent-%COMP%]{height:20px}.centered[_ngcontent-%COMP%]{text-align:center;bottom:100px;position:absolute;width:100vw}.centered[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:var(--ion-color-medium)}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({imports:[[r.i.forChild(u)],r.i]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({imports:[[a.z,c.b,i.a,g,s.b]]}),e})()}}]);