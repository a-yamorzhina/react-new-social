(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{241:function(e,n,o){e.exports={overlay:"src-components-Login-Login-module__overlay--3Yl3B",loginBlock:"src-components-Login-Login-module__loginBlock--3fGau",avatarGuest:"src-components-Login-Login-module__avatarGuest--3P5xt",title:"src-components-Login-Login-module__title--LllEd",form:"src-components-Login-Login-module__form--3o8Na",userName:"src-components-Login-Login-module__userName--3xa3z",password:"src-components-Login-Login-module__password--2CQ2Z",input:"src-components-Login-Login-module__input--1-WVL",icon:"src-components-Login-Login-module__icon--2k-Up",userIcon:"src-components-Login-Login-module__userIcon--13hvw",passwordIcon:"src-components-Login-Login-module__passwordIcon--1bnT3",iconPassword:"src-components-Login-Login-module__iconPassword--3k-2w",submit:"src-components-Login-Login-module__submit--1VVNM",rememberMe:"src-components-Login-Login-module__rememberMe--2CX0g",elementRememberMe:"src-components-Login-Login-module__elementRememberMe--EX5v4",rememberText:"src-components-Login-Login-module__rememberText--1bQTg",formSummaryError:"src-components-Login-Login-module__formSummaryError--2flue"}},242:function(e,n,o){"use strict";o.d(n,"c",(function(){return f})),o.d(n,"b",(function(){return _})),o.d(n,"a",(function(){return v}));var t=o(25),r=o.n(t),a=o(66),s=o.n(a),c=o(0),i=o.n(c),m=o(243),l=o.n(m),u=o(241),g=o.n(u),d=o(116),p=function(e){e.input;var n=e.meta,o=n.touched,t=n.error,r=e.children,a=o&&t;return i.a.createElement("div",{className:l.a.formControl+" "+(a&&l.a.error)},r)},f=function(e){var n=e.input,o=e.meta,t=(e.child,s()(e,["input","meta","child"])),a=o.touched&&o.error;return i.a.createElement(p,e,i.a.createElement("textarea",r()({},n,t)),a&&i.a.createElement("span",null,o.error))},_=function(e){var n=e.input,o=e.meta,t=(e.child,s()(e,["input","meta","child"]));o.touched&&o.error;return i.a.createElement(p,e,i.a.createElement("input",r()({},n,t)))},v=function(e,n,o,t,r,a){return i.a.createElement(d.a,{component:t,validate:[o],name:n,className:g.a[a],placeholder:e,type:r})}},243:function(e,n,o){e.exports={formControl:"src-components-common-FormsControls-FormsConttrols-module__formControl--1nMKh",error:"src-components-common-FormsControls-FormsConttrols-module__error--IHRiO"}},245:function(e,n,o){"use strict";o.d(n,"b",(function(){return t})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return a}));var t=function(e){if(!e)return"Field is required"},r=function(e){return e},a=function(e){return function(n){if(n.length>e)return"Max length should be ".concat(e," symbols")}}},246:function(e,n,o){e.exports={dialogs:"src-components-Dialogs-Dialogs-module__dialogs--FLZR5",dialogItems:"src-components-Dialogs-Dialogs-module__dialogItems--1tzao",active:"src-components-Dialogs-Dialogs-module__active--3354n",dialog:"src-components-Dialogs-Dialogs-module__dialog--2v0u9",messages:"src-components-Dialogs-Dialogs-module__messages--3ntcv",message:"src-components-Dialogs-Dialogs-module__message--j77t8",textType:"src-components-Dialogs-Dialogs-module__textType--IrReU",dialogImg:"src-components-Dialogs-Dialogs-module__dialogImg--22hT8",textareaStyle:"src-components-Dialogs-Dialogs-module__textareaStyle--1SOWl",mainButton:"src-components-Dialogs-Dialogs-module__mainButton--2uOJC",textareaDiv:"src-components-Dialogs-Dialogs-module__textareaDiv--3vRrZ"}},248:function(e,n,o){"use strict";o.d(n,"a",(function(){return h}));var t=o(31),r=o.n(t),a=o(29),s=o.n(a),c=o(32),i=o.n(c),m=o(33),l=o.n(m),u=o(21),g=o.n(u),d=o(0),p=o.n(d),f=o(4),_=o(16);function v(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,t=g()(e);if(n){var r=g()(this).constructor;o=Reflect.construct(t,arguments,r)}else o=t.apply(this,arguments);return l()(this,o)}}var L=function(e){return{isAuth:e.auth.isAuth}},h=function(e){var n=function(n){i()(t,n);var o=v(t);function t(){return r()(this,t),o.apply(this,arguments)}return s()(t,[{key:"render",value:function(){return this.props.isAuth?p.a.createElement(e,this.props):p.a.createElement(f.a,{to:"/login"})}}]),t}(p.a.Component);return Object(_.b)(L)(n)}},308:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),a=o(83),s=o(16),c=o(248),i=o(246),m=o.n(i),l=o(20),u=function(e){var n="/dialogs/"+e.id;return r.a.createElement("div",{className:m.a.dialog+" "+m.a.active},r.a.createElement("img",{className:m.a.dialogImg,src:e.src,alt:"dialogImg"}),r.a.createElement(l.b,{to:n,className:m.a.textType}," ",e.name," "))},g=function(e){return r.a.createElement("div",{className:m.a.message}," ",e.message," ")},d=o(4),p=o(116),f=o(117),_=o(242),v=o(245),L=Object(v.a)(100),h=Object(f.a)({form:"dialog-add-message-form"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:m.a.textareaDiv},r.a.createElement(p.a,{name:"newMessageBody",placeholder:"Enter your message",component:_.c,className:m.a.textareaStyle,validate:[v.b,L]}),r.a.createElement("button",{className:m.a.mainButton},"Send"))})),b=function(e){var n=e.dialogsPage.dialogs.map((function(e){return r.a.createElement(u,{name:e.name,id:e.id,key:e.id,src:e.src})})),o=e.dialogsPage.messages.map((function(e){return r.a.createElement(g,{message:e.message,key:e.id})}));return e.isAuth?r.a.createElement("div",{className:m.a.dialogs},r.a.createElement("div",{className:m.a.dialogItems},r.a.createElement("div",null),n),r.a.createElement("div",{className:m.a.messages},o),r.a.createElement("div",null),r.a.createElement(h,{onSubmit:function(n){e.sendMessage(n.newMessageBody)}})):r.a.createElement(d.a,{to:"/login"})},E=o(17);n.default=Object(E.d)(Object(s.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(n){e(Object(a.b)(n))}}})),c.a)(b)}}]);