import{r as l,j as a}from"./index-XqtgtB4L.js";import{G as u}from"./index-CbOGGaJ3.js";import{g as q,F as m}from"./index-CF6GlkGc.js";import{N as X}from"./Navbar-DqyI8etN.js";import{r as K}from"./index-D6b19ZNV.js";import J from"./Footer-n64Xac5R.js";import"./emotion-element-5486c51c.browser.esm-Dse1Xu1W.js";/* empty css               */import"./logo-TELqML9G.js";function Z(e){return u({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function ee(e){return u({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(e)}function ne(e){return u({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(e)}function te(e){return u({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}const oe="/assets/contactus-CRzmQ7kj.jpg";var y=function(e,t){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(o[i]=n[i])},y(e,t)};function p(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");y(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var d=function(){return d=Object.assign||function(t){for(var o,n=1,i=arguments.length;n<i;n++){o=arguments[n];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c])}return t},d.apply(this,arguments)};function ae(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",o==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var le=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
    font-size:16px;
    line-height:1.2em
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
    display:inline;
    width:100%;
    height:100%
}

.calendly-popup-content {
    position:relative
}

.calendly-popup-content.calendly-mobile {
    -webkit-overflow-scrolling:touch;
    overflow-y:auto
}

.calendly-overlay {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;
    z-index:9999;
    background-color:#a5a5a5;
    background-color:rgba(31,31,31,0.4)
}

.calendly-overlay .calendly-close-overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0
}

.calendly-overlay .calendly-popup {
    box-sizing:border-box;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%);
    transform:translateY(-50%) translateX(-50%);
    width:80%;
    min-width:900px;
    max-width:1000px;
    height:90%;
    max-height:680px
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup {
        position:fixed;
        top:50px;
        left:0;
        right:0;
        bottom:0;
        -webkit-transform:none;
        transform:none;
        width:100%;
        height:auto;
        min-width:0;
        max-height:none
    }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
    height:100%;
}

.calendly-overlay .calendly-popup-close {
    position:absolute;
    top:25px;
    right:25px;
    color:#fff;
    width:19px;
    height:19px;
    cursor:pointer;
    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;
    background-size:contain
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup-close {
        top:15px;
        right:15px
    }
}

.calendly-badge-widget {
    position:fixed;
    right:20px;
    bottom:15px;
    z-index:9998
}

.calendly-badge-widget .calendly-badge-content {
    display:table-cell;
    width:auto;
    height:45px;
    padding:0 30px;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;
    font-family:sans-serif;
    text-align:center;
    vertical-align:middle;
    font-weight:bold;
    font-size:14px;
    color:#fff;
    cursor:pointer
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
    color:#666a73
}

.calendly-badge-widget .calendly-badge-content span {
    display:block;
    font-size:12px
}

.calendly-spinner {
    position:absolute;
    top:50%;
    left:0;
    right:0;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    text-align:center;
    z-index:-1
}

.calendly-spinner>div {
    display:inline-block;
    width:18px;
    height:18px;
    background-color:#e1e1e1;
    border-radius:50%;
    vertical-align:middle;
    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both
}

.calendly-spinner .calendly-bounce1 {
    -webkit-animation-delay:-0.32s;
    animation-delay:-0.32s
}

.calendly-spinner .calendly-bounce2 {
    -webkit-animation-delay:-0.16s;
    animation-delay:-0.16s
}

@-webkit-keyframes calendly-bouncedelay {
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    } 
    
    40%{
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}

@keyframes calendly-bouncedelay{ 
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    
    40% {
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}`;ae(le);function g(e){return e.charAt(0)==="#"?e.slice(1):e}function ie(e){return e!=null&&e.primaryColor&&(e.primaryColor=g(e.primaryColor)),e!=null&&e.textColor&&(e.textColor=g(e.textColor)),e!=null&&e.backgroundColor&&(e.backgroundColor=g(e.backgroundColor)),e}var A;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled",e.PAGE_HEIGHT="calendly.page_height"})(A||(A={}));var D=function(e){var t=e.url,o=e.prefill,n=o===void 0?{}:o,i=e.pageSettings,c=i===void 0?{}:i,x=e.utm,r=x===void 0?{}:x,b=e.embedType,s=ie(c),v=s.backgroundColor,W=s.hideEventTypeDetails,G=s.hideLandingPageDetails,C=s.primaryColor,w=s.textColor,Y=s.hideGdprBanner,E=n.customAnswers,h=n.date,k=n.email,j=n.firstName,N=n.guests,_=n.lastName,S=n.location,L=n.smsReminderNumber,T=n.name,P=r.utmCampaign,I=r.utmContent,O=r.utmMedium,R=r.utmSource,M=r.utmTerm,U=r.salesforce_uuid,f=t.indexOf("?"),z=f>-1,V=t.slice(f+1),H=z?t.slice(0,f):t,Q=[z?V:null,v?"background_color=".concat(v):null,W?"hide_event_type_details=1":null,G?"hide_landing_page_details=1":null,C?"primary_color=".concat(C):null,w?"text_color=".concat(w):null,Y?"hide_gdpr_banner=1":null,T?"name=".concat(encodeURIComponent(T)):null,L?"phone_number=".concat(encodeURIComponent(L)):null,S?"location=".concat(encodeURIComponent(S)):null,j?"first_name=".concat(encodeURIComponent(j)):null,_?"last_name=".concat(encodeURIComponent(_)):null,N?"guests=".concat(N.map(encodeURIComponent).join(",")):null,k?"email=".concat(encodeURIComponent(k)):null,h&&h instanceof Date?"date=".concat(re(h)):null,P?"utm_campaign=".concat(encodeURIComponent(P)):null,I?"utm_content=".concat(encodeURIComponent(I)):null,O?"utm_medium=".concat(encodeURIComponent(O)):null,R?"utm_source=".concat(encodeURIComponent(R)):null,M?"utm_term=".concat(encodeURIComponent(M)):null,U?"salesforce_uuid=".concat(encodeURIComponent(U)):null,b?"embed_type=".concat(b):null,"embed_domain=1"].concat(E?ce(E):[]).filter(function($){return $!==null}).join("&");return"".concat(H,"?").concat(Q)},re=function(e){var t=e.getMonth()+1,o=e.getDate(),n=e.getFullYear();return[n,t<10?"0".concat(t):t,o<10?"0".concat(o):o].join("-")},se=/^a\d{1,2}$/,ce=function(e){var t=Object.keys(e).filter(function(o){return o.match(se)});return t.length?t.map(function(o){return"".concat(o,"=").concat(encodeURIComponent(e[o]))}):[]},F=function(e){p(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.render=function(){return l.createElement("div",{className:"calendly-spinner"},l.createElement("div",{className:"calendly-bounce1"}),l.createElement("div",{className:"calendly-bounce2"}),l.createElement("div",{className:"calendly-bounce3"}))},t}(l.Component),de={minWidth:"320px",height:"630px"},pe=function(e){p(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=D({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||F;return l.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||de},this.state.isLoading&&l.createElement(n,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t}(l.Component),me=function(e){p(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=D({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||F;return l.createElement(l.Fragment,null,this.state.isLoading&&l.createElement(n,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t}(l.Component),B=function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return K.createPortal(l.createElement("div",{className:"calendly-overlay"},l.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),l.createElement("div",{className:"calendly-popup"},l.createElement("div",{className:"calendly-popup-content"},l.createElement(me,d({},e)))),l.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)};(function(e){p(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(o){o.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return l.createElement(l.Fragment,null,l.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),l.createElement(B,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(l.Component);(function(e){p(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return l.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},l.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&l.createElement("span",null,"powered by Calendly")),l.createElement(B,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(l.Component);function we(){const e=l.useRef([]);return l.useEffect(()=>{e.current.forEach(t=>{q.fromTo(t,{scale:1,opacity:.7},{scale:.9,opacity:1,scrollTrigger:{trigger:t,scrub:!0,start:"top bottom",end:"top top"}})})},[]),a.jsxs(a.Fragment,{children:[a.jsx(X,{}),a.jsxs("section",{className:"py-5 text-center",children:[a.jsx(m,{direction:"down",duration:1e3,children:a.jsx("h1",{className:"display-4 font-weight-bold headingofcont ",children:"CONTACT US"})}),a.jsx(m,{direction:"top",duration:1e3,children:a.jsx("form",{action:"https://formspree.io/f/xovjlwkk",method:"POST",children:a.jsx("div",{className:"container d-flex justify-content-center flex-wrap callmaincontainer",children:a.jsxs("div",{className:"shadow-lg rounded bg-white p-4 d-flex flex-column flex-lg-row w-100 ",children:[a.jsxs("div",{className:"image-container",children:[a.jsx("img",{src:oe,alt:"Contact Us",className:"img-fluid rounded",loading:"lazy"}),a.jsxs("div",{className:"contact-overlay",children:[a.jsxs("div",{className:"d-flex align-items-center mb-3",children:[a.jsx(ne,{className:"icon"}),a.jsx("h5",{className:"text-white ml-3 mb-0",children:"+27 0769675814"})]}),a.jsxs("div",{className:"d-flex align-items-center mb-3",children:[a.jsx(Z,{className:"icon"}),a.jsx("h5",{className:"text-white ml-3 mb-0",children:"icellmobileweb@gmail.com"})]}),a.jsxs("div",{className:"d-flex align-items-center",children:[a.jsx(ee,{className:"icon"}),a.jsx("h5",{className:"text-white ml-3 mb-0",children:"Nic Peshawar, Pakistan"})]})]})]}),a.jsxs("div",{className:"w-100 w-lg-50 p-4",children:[a.jsx("input",{type:"text",className:"form-control mb-3 input-hover",placeholder:"Name",name:"name"}),a.jsx("input",{type:"email",className:"form-control mb-3 input-hover",placeholder:"Email",name:"email"}),a.jsx("input",{type:"text",className:"form-control mb-3 input-hover",placeholder:"Phone",name:"phone"}),a.jsxs("select",{className:"form-control mb-3 input-hover",name:"service",children:[a.jsx("option",{value:"select",disabled:!0,children:"Select a service"}),a.jsx("option",{value:"web-development",children:"Product "}),a.jsx("option",{value:"mobile-app",children:"Order"}),a.jsx("option",{value:"web-development",children:"Press "}),a.jsx("option",{value:"mobile-app",children:"Other"})]}),a.jsx("textarea",{className:"form-control mb-3 input-hover",placeholder:"Message",rows:"8",name:"message"}),a.jsxs("button",{className:"btn btn-dark w-100",type:"submit",children:["Send ",a.jsx(te,{className:"ml-2"})]})]})]})})})})]}),a.jsxs("div",{className:"text-center",children:[a.jsx(m,{direction:"top",damping:5e5,duration:2e3,children:a.jsx("h1",{className:"display-4 font-weight-bold headingofcont",children:"BOOK A MEETING"})}),a.jsx(m,{direction:"top",damping:5e5,duration:1e3,children:a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"embed-responsive embed-responsive-16by9",children:a.jsx(pe,{url:"https://cal.com/icellmobileweb-gmail.com/30min",styles:{height:"1000px",width:"100%"}})})})})]}),a.jsx(J,{})]})}export{we as default};
