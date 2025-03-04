import{j as Ke,r as Z}from"./index-XqtgtB4L.js";import{h as un,E as ln,c as cn,w as hn,T as dn,s as ri,r as _n,u as pn,i as mn,g as gn}from"./emotion-element-5486c51c.browser.esm-Dse1Xu1W.js";var Ne={exports:{}},k={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar;function yn(){if(Ar)return k;Ar=1;var o=typeof Symbol=="function"&&Symbol.for,t=o?Symbol.for("react.element"):60103,e=o?Symbol.for("react.portal"):60106,r=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,n=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,a=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,u=o?Symbol.for("react.concurrent_mode"):60111,l=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,_=o?Symbol.for("react.suspense_list"):60120,p=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,c=o?Symbol.for("react.block"):60121,d=o?Symbol.for("react.fundamental"):60117,x=o?Symbol.for("react.responder"):60118,y=o?Symbol.for("react.scope"):60119;function v(m){if(typeof m=="object"&&m!==null){var w=m.$$typeof;switch(w){case t:switch(m=m.type,m){case f:case u:case r:case n:case i:case h:return m;default:switch(m=m&&m.$$typeof,m){case a:case l:case g:case p:case s:return m;default:return w}}case e:return w}}}function b(m){return v(m)===u}return k.AsyncMode=f,k.ConcurrentMode=u,k.ContextConsumer=a,k.ContextProvider=s,k.Element=t,k.ForwardRef=l,k.Fragment=r,k.Lazy=g,k.Memo=p,k.Portal=e,k.Profiler=n,k.StrictMode=i,k.Suspense=h,k.isAsyncMode=function(m){return b(m)||v(m)===f},k.isConcurrentMode=b,k.isContextConsumer=function(m){return v(m)===a},k.isContextProvider=function(m){return v(m)===s},k.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===t},k.isForwardRef=function(m){return v(m)===l},k.isFragment=function(m){return v(m)===r},k.isLazy=function(m){return v(m)===g},k.isMemo=function(m){return v(m)===p},k.isPortal=function(m){return v(m)===e},k.isProfiler=function(m){return v(m)===n},k.isStrictMode=function(m){return v(m)===i},k.isSuspense=function(m){return v(m)===h},k.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===r||m===u||m===n||m===i||m===h||m===_||typeof m=="object"&&m!==null&&(m.$$typeof===g||m.$$typeof===p||m.$$typeof===s||m.$$typeof===a||m.$$typeof===l||m.$$typeof===d||m.$$typeof===x||m.$$typeof===y||m.$$typeof===c)},k.typeOf=v,k}var Er;function vn(){return Er||(Er=1,Ne.exports=yn()),Ne.exports}var Le,zr;function xn(){if(zr)return Le;zr=1;var o=vn(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n={};n[o.ForwardRef]=r,n[o.Memo]=i;function s(g){return o.isMemo(g)?i:n[g.$$typeof]||t}var a=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,_=Object.prototype;function p(g,c,d){if(typeof c!="string"){if(_){var x=h(c);x&&x!==_&&p(g,x,d)}var y=f(c);u&&(y=y.concat(u(c)));for(var v=s(g),b=s(c),m=0;m<y.length;++m){var w=y[m];if(!e[w]&&!(d&&d[w])&&!(b&&b[w])&&!(v&&v[w])){var O=l(c,w);try{a(g,w,O)}catch{}}}}return g}return Le=p,Le}xn();var bn=Ke.Fragment;function q(o,t,e){return un.call(t,"css")?Ke.jsx(ln,cn(o,t),e):Ke.jsx(o,t,e)}function ii(){for(var o=arguments.length,t=new Array(o),e=0;e<o;e++)t[e]=arguments[e];return ri(t)}var T=function(){var t=ii.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Tn=function o(t){for(var e=t.length,r=0,i="";r<e;r++){var n=t[r];if(n!=null){var s=void 0;switch(typeof n){case"boolean":break;case"object":{if(Array.isArray(n))s=o(n);else{s="";for(var a in n)n[a]&&a&&(s&&(s+=" "),s+=a)}break}default:s=n}s&&(i&&(i+=" "),i+=s)}}return i};function wn(o,t,e){var r=[],i=gn(o,r,e);return r.length<2?e:i+t(r)}var Sn=function(t){var e=t.cache,r=t.serializedArr;return pn(function(){for(var i=0;i<r.length;i++)mn(e,r[i],!1)}),null},$e=hn(function(o,t){var e=[],r=function(){for(var f=arguments.length,u=new Array(f),l=0;l<f;l++)u[l]=arguments[l];var h=ri(u,t.registered);return e.push(h),_n(t,h,!1),t.key+"-"+h.name},i=function(){for(var f=arguments.length,u=new Array(f),l=0;l<f;l++)u[l]=arguments[l];return wn(t.registered,r,Tn(u))},n={css:r,cx:i,theme:Z.useContext(dn)},s=o.children(n);return Z.createElement(Z.Fragment,null,Z.createElement(Sn,{cache:t,serializedArr:e}),s)}),On=Object.defineProperty,Pn=(o,t,e)=>t in o?On(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,be=(o,t,e)=>Pn(o,typeof t!="symbol"?t+"":t,e),Qe=new Map,Te=new WeakMap,Ir=0,Cn=void 0;function Mn(o){return o?(Te.has(o)||(Ir+=1,Te.set(o,Ir.toString())),Te.get(o)):"0"}function kn(o){return Object.keys(o).sort().filter(t=>o[t]!==void 0).map(t=>`${t}_${t==="root"?Mn(o.root):o[t]}`).toString()}function Rn(o){const t=kn(o);let e=Qe.get(t);if(!e){const r=new Map;let i;const n=new IntersectionObserver(s=>{s.forEach(a=>{var f;const u=a.isIntersecting&&i.some(l=>a.intersectionRatio>=l);o.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(f=r.get(a.target))==null||f.forEach(l=>{l(u,a)})})},o);i=n.thresholds||(Array.isArray(o.threshold)?o.threshold:[o.threshold||0]),e={id:t,observer:n,elements:r},Qe.set(t,e)}return e}function ni(o,t,e={},r=Cn){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const f=o.getBoundingClientRect();return t(r,{isIntersecting:r,target:o,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:i,observer:n,elements:s}=Rn(e),a=s.get(o)||[];return s.has(o)||s.set(o,a),a.push(t),n.observe(o),function(){a.splice(a.indexOf(t),1),a.length===0&&(s.delete(o),n.unobserve(o)),s.size===0&&(n.disconnect(),Qe.delete(i))}}function Dn(o){return typeof o.children!="function"}var Fr=class extends Z.Component{constructor(o){super(o),be(this,"node",null),be(this,"_unobserveCb",null),be(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),be(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),Dn(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!o.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:o,root:t,rootMargin:e,trackVisibility:r,delay:i,fallbackInView:n}=this.props;this._unobserveCb=ni(this.node,this.handleChange,{threshold:o,root:t,rootMargin:e,trackVisibility:r,delay:i},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:o}=this.props;if(typeof o=="function"){const{inView:p,entry:g}=this.state;return o({inView:p,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:e,threshold:r,root:i,rootMargin:n,onChange:s,skip:a,trackVisibility:f,delay:u,initialInView:l,fallbackInView:h,..._}=this.props;return Z.createElement(t||"div",{ref:this.handleNode,..._},o)}};function si({threshold:o,delay:t,trackVisibility:e,rootMargin:r,root:i,triggerOnce:n,skip:s,initialInView:a,fallbackInView:f,onChange:u}={}){var l;const[h,_]=Z.useState(null),p=Z.useRef(u),[g,c]=Z.useState({inView:!!a,entry:void 0});p.current=u,Z.useEffect(()=>{if(s||!h)return;let v;return v=ni(h,(b,m)=>{c({inView:b,entry:m}),p.current&&p.current(b,m),m.isIntersecting&&n&&v&&(v(),v=void 0)},{root:i,rootMargin:r,threshold:o,trackVisibility:e,delay:t},f),()=>{v&&v()}},[Array.isArray(o)?o.toString():o,h,i,r,n,s,e,f,t]);const d=(l=g.entry)==null?void 0:l.target,x=Z.useRef(void 0);!h&&d&&!n&&!s&&x.current!==d&&(x.current=d,c({inView:!!a,entry:void 0}));const y=[_,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var Ye={exports:{}},R={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr;function An(){if(Nr)return R;Nr=1;var o=Symbol.for("react.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),n=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),g;g=Symbol.for("react.module.reference");function c(d){if(typeof d=="object"&&d!==null){var x=d.$$typeof;switch(x){case o:switch(d=d.type,d){case e:case i:case r:case u:case l:return d;default:switch(d=d&&d.$$typeof,d){case a:case s:case f:case _:case h:case n:return d;default:return x}}case t:return x}}}return R.ContextConsumer=s,R.ContextProvider=n,R.Element=o,R.ForwardRef=f,R.Fragment=e,R.Lazy=_,R.Memo=h,R.Portal=t,R.Profiler=i,R.StrictMode=r,R.Suspense=u,R.SuspenseList=l,R.isAsyncMode=function(){return!1},R.isConcurrentMode=function(){return!1},R.isContextConsumer=function(d){return c(d)===s},R.isContextProvider=function(d){return c(d)===n},R.isElement=function(d){return typeof d=="object"&&d!==null&&d.$$typeof===o},R.isForwardRef=function(d){return c(d)===f},R.isFragment=function(d){return c(d)===e},R.isLazy=function(d){return c(d)===_},R.isMemo=function(d){return c(d)===h},R.isPortal=function(d){return c(d)===t},R.isProfiler=function(d){return c(d)===i},R.isStrictMode=function(d){return c(d)===r},R.isSuspense=function(d){return c(d)===u},R.isSuspenseList=function(d){return c(d)===l},R.isValidElementType=function(d){return typeof d=="string"||typeof d=="function"||d===e||d===i||d===r||d===u||d===l||d===p||typeof d=="object"&&d!==null&&(d.$$typeof===_||d.$$typeof===h||d.$$typeof===n||d.$$typeof===s||d.$$typeof===f||d.$$typeof===g||d.getModuleId!==void 0)},R.typeOf=c,R}var Lr;function En(){return Lr||(Lr=1,Ye.exports=An()),Ye.exports}var zn=En();T`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;T`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;T`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;T`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;T`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;T`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;T`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;T`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;T`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;T`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;T`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;T`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const In=T`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Fn=T`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nn=T`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ln=T`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$n=T`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dr=T`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yn=T`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vn=T`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bn=T`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xn=T`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Un=T`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qn=T`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jn=T`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Wn({duration:o=1e3,delay:t=0,timingFunction:e="ease",keyframes:r=dr,iterationCount:i=1}){return ii`
    animation-duration: ${o}ms;
    animation-timing-function: ${e};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Gn(o){return o==null}function Kn(o){return typeof o=="string"||typeof o=="number"||typeof o=="boolean"}function ai(o,t){return e=>e?o():t()}function ce(o){return ai(o,()=>null)}function He(o){return ce(()=>({opacity:0}))(o)}const oi=o=>{const{cascade:t=!1,damping:e=.5,delay:r=0,duration:i=1e3,fraction:n=0,keyframes:s=dr,triggerOnce:a=!1,className:f,style:u,childClassName:l,childStyle:h,children:_,onVisibilityChange:p}=o,g=Z.useMemo(()=>Wn({keyframes:s,duration:i}),[i,s]);return Gn(_)?null:Kn(_)?q(Hn,{...o,animationStyles:g,children:String(_)}):zn.isFragment(_)?q(fi,{...o,animationStyles:g}):q(bn,{children:Z.Children.map(_,(c,d)=>{if(!Z.isValidElement(c))return null;const x=r+(t?d*i*e:0);switch(c.type){case"ol":case"ul":return q($e,{children:({cx:y})=>q(c.type,{...c.props,className:y(f,c.props.className),style:Object.assign({},u,c.props.style),children:q(oi,{...o,children:c.props.children})})});case"li":return q(Fr,{threshold:n,triggerOnce:a,onChange:p,children:({inView:y,ref:v})=>q($e,{children:({cx:b})=>q(c.type,{...c.props,ref:v,className:b(l,c.props.className),css:ce(()=>g)(y),style:Object.assign({},h,c.props.style,He(!y),{animationDelay:x+"ms"})})})});default:return q(Fr,{threshold:n,triggerOnce:a,onChange:p,children:({inView:y,ref:v})=>q("div",{ref:v,className:f,css:ce(()=>g)(y),style:Object.assign({},u,He(!y),{animationDelay:x+"ms"}),children:q($e,{children:({cx:b})=>q(c.type,{...c.props,className:b(l,c.props.className),style:Object.assign({},h,c.props.style)})})})})}})})},Qn={display:"inline-block",whiteSpace:"pre"},Hn=o=>{const{animationStyles:t,cascade:e=!1,damping:r=.5,delay:i=0,duration:n=1e3,fraction:s=0,triggerOnce:a=!1,className:f,style:u,children:l,onVisibilityChange:h}=o,{ref:_,inView:p}=si({triggerOnce:a,threshold:s,onChange:h});return ai(()=>q("div",{ref:_,className:f,style:Object.assign({},u,Qn),children:l.split("").map((g,c)=>q("span",{css:ce(()=>t)(p),style:{animationDelay:i+c*n*r+"ms"},children:g},c))}),()=>q(fi,{...o,children:l}))(e)},fi=o=>{const{animationStyles:t,fraction:e=0,triggerOnce:r=!1,className:i,style:n,children:s,onVisibilityChange:a}=o,{ref:f,inView:u}=si({triggerOnce:r,threshold:e,onChange:a});return q("div",{ref:f,className:i,css:ce(()=>t)(u),style:Object.assign({},n,He(!u)),children:s})};T`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;T`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;T`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;T`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;T`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;T`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Zn=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Jn=T`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,ts=T`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,es=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,rs=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,is=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ns=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ss=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,as=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,os=T`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,fs=T`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,us=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ls=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function cs(o,t,e){switch(e){case"bottom-left":return t?Jn:Fn;case"bottom-right":return t?ts:Nn;case"down":return o?t?rs:$n:t?es:Ln;case"left":return o?t?ns:Yn:t?is:dr;case"right":return o?t?as:Bn:t?ss:Vn;case"top-left":return t?os:Xn;case"top-right":return t?fs:Un;case"up":return o?t?ls:jn:t?us:qn;default:return t?Zn:In}}const ka=o=>{const{big:t=!1,direction:e,reverse:r=!1,...i}=o,n=Z.useMemo(()=>cs(t,r,e),[t,e,r]);return q(oi,{keyframes:n,...i})};T`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;T`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;T`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;T`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;T`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;T`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;T`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;T`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;T`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;T`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;T`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;T`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;T`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;T`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;T`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;T`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;T`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;T`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;T`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function bt(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ui(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ft={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ht={duration:.5,overwrite:!1,delay:0},_r,G,I,gt=1e8,Q=1/gt,Ze=Math.PI*2,hs=Ze/4,ds=0,li=Math.sqrt,_s=Math.cos,ps=Math.sin,j=function(t){return typeof t=="string"},L=function(t){return typeof t=="function"},wt=function(t){return typeof t=="number"},pr=function(t){return typeof t>"u"},vt=function(t){return typeof t=="object"},tt=function(t){return t!==!1},mr=function(){return typeof window<"u"},we=function(t){return L(t)||j(t)},ci=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},H=Array.isArray,Je=/(?:-?\.?\d|\.)+/gi,hi=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ve=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,di=/[+-]=-?[.\d]+/,_i=/[^,'"\[\]\s]+/gi,ms=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,F,_t,tr,gr,ut={},Ce={},pi,mi=function(t){return(Ce=Zt(t,ut))&&nt},yr=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},he=function(t,e){return!e&&console.warn(t)},gi=function(t,e){return t&&(ut[t]=e)&&Ce&&(Ce[t]=e)||ut},de=function(){return 0},gs={suppressEvents:!0,isStart:!0,kill:!1},Se={suppressEvents:!0,kill:!1},ys={suppressEvents:!0},vr={},Mt=[],er={},yi,st={},Be={},$r=30,Oe=[],xr="",br=function(t){var e=t[0],r,i;if(vt(e)||L(e)||(t=[t]),!(r=(e._gsap||{}).harness)){for(i=Oe.length;i--&&!Oe[i].targetTest(e););r=Oe[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Bi(t[i],r)))||t.splice(i,1);return t},$t=function(t){return t._gsap||br(ht(t))[0]._gsap},vi=function(t,e,r){return(r=t[e])&&L(r)?t[e]():pr(r)&&t.getAttribute&&t.getAttribute(e)||r},et=function(t,e){return(t=t.split(",")).forEach(e)||t},$=function(t){return Math.round(t*1e5)/1e5||0},B=function(t){return Math.round(t*1e7)/1e7||0},Gt=function(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),r==="+"?t+i:r==="-"?t-i:r==="*"?t*i:t/i},vs=function(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r},Me=function(){var t=Mt.length,e=Mt.slice(0),r,i;for(er={},Mt.length=0,r=0;r<t;r++)i=e[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xi=function(t,e,r,i){Mt.length&&!G&&Me(),t.render(e,r,G&&e<0&&(t._initted||t._startAt)),Mt.length&&!G&&Me()},bi=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(_i).length<2?e:j(t)?t.trim():t},Ti=function(t){return t},lt=function(t,e){for(var r in e)r in t||(t[r]=e[r]);return t},xs=function(t){return function(e,r){for(var i in r)i in e||i==="duration"&&t||i==="ease"||(e[i]=r[i])}},Zt=function(t,e){for(var r in e)t[r]=e[r];return t},Yr=function o(t,e){for(var r in e)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=vt(e[r])?o(t[r]||(t[r]={}),e[r]):e[r]);return t},ke=function(t,e){var r={},i;for(i in t)i in e||(r[i]=t[i]);return r},fe=function(t){var e=t.parent||F,r=t.keyframes?xs(H(t.keyframes)):lt;if(tt(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t},bs=function(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0},wi=function(t,e,r,i,n){var s=t[i],a;if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e},ze=function(t,e,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var n=e._prev,s=e._next;n?n._next=s:t[r]===e&&(t[r]=s),s?s._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null},Rt=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yt=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},Ts=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},rr=function(t,e,r,i){return t._startAt&&(G?t._startAt.revert(Se):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ws=function o(t){return!t||t._ts&&o(t.parent)},Vr=function(t){return t._repeat?Jt(t._tTime,t=t.duration()+t._rDelay)*t:0},Jt=function(t,e){var r=Math.floor(t=B(t/e));return t&&r===t?r-1:r},Re=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ie=function(t){return t._end=B(t._start+(t._tDur/Math.abs(t._ts||t._rts||Q)||0))},Fe=function(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=B(r._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ie(t),r._dirty||Yt(r,t)),t},Si=function(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Re(t.rawTime(),e),(!e._dur||ve(0,e.totalDuration(),r)-e._tTime>Q)&&e.render(r,!0)),Yt(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-1e-8}},pt=function(t,e,r,i){return e.parent&&Rt(e),e._start=B((wt(r)?r:r||t!==F?ct(t,r,e):t._time)+e._delay),e._end=B(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),wi(t,e,"_first","_last",t._sort?"_start":0),ir(e)||(t._recent=e),i||Si(t,e),t._ts<0&&Fe(t,t._tTime),t},Oi=function(t,e){return(ut.ScrollTrigger||yr("scrollTrigger",e))&&ut.ScrollTrigger.create(e,t)},Pi=function(t,e,r,i,n){if(wr(t,e,n),!t._initted)return 1;if(!r&&t._pt&&!G&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&yi!==at.frame)return Mt.push(t),t._lazy=[n,i],1},Ss=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},ir=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Os=function(t,e,r,i){var n=t.ratio,s=e<0||!e&&(!t._start&&Ss(t)&&!(!t._initted&&ir(t))||(t._ts<0||t._dp._ts<0)&&!ir(t))?0:1,a=t._rDelay,f=0,u,l,h;if(a&&t._repeat&&(f=ve(0,t._tDur,e),l=Jt(f,a),t._yoyo&&l&1&&(s=1-s),l!==Jt(t._tTime,a)&&(n=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==n||G||i||t._zTime===Q||!e&&t._zTime){if(!t._initted&&Pi(t,e,i,r,f))return;for(h=t._zTime,t._zTime=e||(r?Q:0),r||(r=e&&!h),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=f,u=t._pt;u;)u.r(s,u.d),u=u._next;e<0&&rr(t,e,r,!0),t._onUpdate&&!r&&ot(t,"onUpdate"),f&&t._repeat&&!r&&t.parent&&ot(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&Rt(t,1),!r&&!G&&(ot(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ps=function(t,e,r){var i;if(r>e)for(i=t._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},te=function(t,e,r,i){var n=t._repeat,s=B(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=s/t._dur),t._dur=s,t._tDur=n?n<0?1e10:B(s*(n+1)+t._rDelay*n):s,a>0&&!i&&Fe(t,t._tTime=t._tDur*a),t.parent&&Ie(t),r||Yt(t.parent,t),t},Br=function(t){return t instanceof J?Yt(t):te(t,t._dur)},Cs={_start:0,endTime:de,totalDuration:de},ct=function o(t,e,r){var i=t.labels,n=t._recent||Cs,s=t.duration()>=gt?n.endTime(!1):t._dur,a,f,u;return j(e)&&(isNaN(e)||e in i)?(f=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),f==="<"||f===">"?(a>=0&&(e=e.replace(/=/,"")),(f==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?n:r).totalDuration()/100:1)):a<0?(e in i||(i[e]=s),i[e]):(f=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&r&&(f=f/100*(H(r)?r[0]:r).totalDuration()),a>1?o(t,e.substr(0,a-1),r)+f:s+f)):e==null?s:+e},ue=function(t,e,r){var i=wt(e[1]),n=(i?2:1)+(t<2?0:1),s=e[n],a,f;if(i&&(s.duration=e[1]),s.parent=r,t){for(a=s,f=r;f&&!("immediateRender"in a);)a=f.vars.defaults||{},f=tt(f.vars.inherit)&&f.parent;s.immediateRender=tt(a.immediateRender),t<2?s.runBackwards=1:s.startAt=e[n-1]}return new V(e[0],s,e[n+1])},At=function(t,e){return t||t===0?e(t):e},ve=function(t,e,r){return r<t?t:r>e?e:r},K=function(t,e){return!j(t)||!(e=ms.exec(t))?"":e[1]},Ms=function(t,e,r){return At(r,function(i){return ve(t,e,i)})},nr=[].slice,Ci=function(t,e){return t&&vt(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&vt(t[0]))&&!t.nodeType&&t!==_t},ks=function(t,e,r){return r===void 0&&(r=[]),t.forEach(function(i){var n;return j(i)&&!e||Ci(i,1)?(n=r).push.apply(n,ht(i)):r.push(i)})||r},ht=function(t,e,r){return I&&!e&&I.selector?I.selector(t):j(t)&&!r&&(tr||!ee())?nr.call((e||gr).querySelectorAll(t),0):H(t)?ks(t,r):Ci(t)?nr.call(t,0):t?[t]:[]},sr=function(t){return t=ht(t)[0]||he("Invalid scope")||{},function(e){var r=t.current||t.nativeElement||t;return ht(e,r.querySelectorAll?r:r===t?he("Invalid scope")||gr.createElement("div"):t)}},Mi=function(t){return t.sort(function(){return .5-Math.random()})},ki=function(t){if(L(t))return t;var e=vt(t)?t:{each:t},r=Vt(e.ease),i=e.from||0,n=parseFloat(e.base)||0,s={},a=i>0&&i<1,f=isNaN(i)||a,u=e.axis,l=i,h=i;return j(i)?l=h={center:.5,edges:.5,end:1}[i]||0:!a&&f&&(l=i[0],h=i[1]),function(_,p,g){var c=(g||e).length,d=s[c],x,y,v,b,m,w,O,P,S;if(!d){if(S=e.grid==="auto"?0:(e.grid||[1,gt])[1],!S){for(O=-1e8;O<(O=g[S++].getBoundingClientRect().left)&&S<c;);S<c&&S--}for(d=s[c]=[],x=f?Math.min(S,c)*l-.5:i%S,y=S===gt?0:f?c*h/S-.5:i/S|0,O=0,P=gt,w=0;w<c;w++)v=w%S-x,b=y-(w/S|0),d[w]=m=u?Math.abs(u==="y"?b:v):li(v*v+b*b),m>O&&(O=m),m<P&&(P=m);i==="random"&&Mi(d),d.max=O-P,d.min=P,d.v=c=(parseFloat(e.amount)||parseFloat(e.each)*(S>c?c-1:u?u==="y"?c/S:S:Math.max(S,c/S))||0)*(i==="edges"?-1:1),d.b=c<0?n-c:n,d.u=K(e.amount||e.each)||0,r=r&&c<0?$i(r):r}return c=(d[_]-d.min)/d.max||0,B(d.b+(r?r(c):c)*d.v)+d.u}},ar=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var i=B(Math.round(parseFloat(r)/t)*t*e);return(i-i%1)/e+(wt(r)?0:K(r))}},Ri=function(t,e){var r=H(t),i,n;return!r&&vt(t)&&(i=r=t.radius||gt,t.values?(t=ht(t.values),(n=!wt(t[0]))&&(i*=i)):t=ar(t.increment)),At(e,r?L(t)?function(s){return n=t(s),Math.abs(n-s)<=i?n:s}:function(s){for(var a=parseFloat(n?s.x:s),f=parseFloat(n?s.y:0),u=gt,l=0,h=t.length,_,p;h--;)n?(_=t[h].x-a,p=t[h].y-f,_=_*_+p*p):_=Math.abs(t[h]-a),_<u&&(u=_,l=h);return l=!i||u<=i?t[l]:s,n||l===s||wt(s)?l:l+K(s)}:ar(t))},Di=function(t,e,r,i){return At(H(t)?!e:r===!0?!!(r=0):!i,function(){return H(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+r*.99))/r)*r*i)/i})},Rs=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(i){return e.reduce(function(n,s){return s(n)},i)}},Ds=function(t,e){return function(r){return t(parseFloat(r))+(e||K(r))}},As=function(t,e,r){return Ei(t,e,0,1,r)},Ai=function(t,e,r){return At(r,function(i){return t[~~e(i)]})},Es=function o(t,e,r){var i=e-t;return H(t)?Ai(t,o(0,t.length),e):At(r,function(n){return(i+(n-t)%i)%i+t})},zs=function o(t,e,r){var i=e-t,n=i*2;return H(t)?Ai(t,o(0,t.length-1),e):At(r,function(s){return s=(n+(s-t)%n)%n||0,t+(s>i?n-s:s)})},_e=function(t){for(var e=0,r="",i,n,s,a;~(i=t.indexOf("random(",e));)s=t.indexOf(")",i),a=t.charAt(i+7)==="[",n=t.substr(i+7,s-i-7).match(a?_i:Je),r+=t.substr(e,i-e)+Di(a?n:+n[0],a?0:+n[1],+n[2]||1e-5),e=s+1;return r+t.substr(e,t.length-e)},Ei=function(t,e,r,i,n){var s=e-t,a=i-r;return At(n,function(f){return r+((f-t)/s*a||0)})},Is=function o(t,e,r,i){var n=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!n){var s=j(t),a={},f,u,l,h,_;if(r===!0&&(i=1)&&(r=null),s)t={p:t},e={p:e};else if(H(t)&&!H(e)){for(l=[],h=t.length,_=h-2,u=1;u<h;u++)l.push(o(t[u-1],t[u]));h--,n=function(g){g*=h;var c=Math.min(_,~~g);return l[c](g-c)},r=e}else i||(t=Zt(H(t)?[]:{},t));if(!l){for(f in e)Tr.call(a,t,f,"get",e[f]);n=function(g){return Pr(g,a)||(s?t.p:t)}}}return At(r,n)},Xr=function(t,e,r){var i=t.labels,n=gt,s,a,f;for(s in i)a=i[s]-e,a<0==!!r&&a&&n>(a=Math.abs(a))&&(f=s,n=a);return f},ot=function(t,e,r){var i=t.vars,n=i[e],s=I,a=t._ctx,f,u,l;if(n)return f=i[e+"Params"],u=i.callbackScope||t,r&&Mt.length&&Me(),a&&(I=a),l=f?n.apply(u,f):n.call(u),I=s,l},ae=function(t){return Rt(t),t.scrollTrigger&&t.scrollTrigger.kill(!!G),t.progress()<1&&ot(t,"onInterrupt"),t},Wt,zi=[],Ii=function(t){if(t)if(t=!t.name&&t.default||t,mr()||t.headless){var e=t.name,r=L(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:de,render:Pr,add:Tr,kill:Hs,modifier:Qs,rawVars:0},s={targetTest:0,get:0,getSetter:Or,aliases:{},register:0};if(ee(),t!==i){if(st[e])return;lt(i,lt(ke(t,n),s)),Zt(i.prototype,Zt(n,ke(t,s))),st[i.prop=e]=i,t.targetTest&&(Oe.push(i),vr[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}gi(e,i),t.register&&t.register(nt,i,rt)}else zi.push(t)},D=255,oe={aqua:[0,D,D],lime:[0,D,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,D],navy:[0,0,128],white:[D,D,D],olive:[128,128,0],yellow:[D,D,0],orange:[D,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[D,0,0],pink:[D,192,203],cyan:[0,D,D],transparent:[D,D,D,0]},Xe=function(t,e,r){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(r-e)*t*6:t<.5?r:t*3<2?e+(r-e)*(2/3-t)*6:e)*D+.5|0},Fi=function(t,e,r){var i=t?wt(t)?[t>>16,t>>8&D,t&D]:0:oe.black,n,s,a,f,u,l,h,_,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),oe[t])i=oe[t];else if(t.charAt(0)==="#"){if(t.length<6&&(n=t.charAt(1),s=t.charAt(2),a=t.charAt(3),t="#"+n+n+s+s+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&D,i&D,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&D,t&D]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Je),!e)f=+i[0]%360/360,u=+i[1]/100,l=+i[2]/100,s=l<=.5?l*(u+1):l+u-l*u,n=l*2-s,i.length>3&&(i[3]*=1),i[0]=Xe(f+1/3,n,s),i[1]=Xe(f,n,s),i[2]=Xe(f-1/3,n,s);else if(~t.indexOf("="))return i=t.match(hi),r&&i.length<4&&(i[3]=1),i}else i=t.match(Je)||oe.transparent;i=i.map(Number)}return e&&!g&&(n=i[0]/D,s=i[1]/D,a=i[2]/D,h=Math.max(n,s,a),_=Math.min(n,s,a),l=(h+_)/2,h===_?f=u=0:(p=h-_,u=l>.5?p/(2-h-_):p/(h+_),f=h===n?(s-a)/p+(s<a?6:0):h===s?(a-n)/p+2:(n-s)/p+4,f*=60),i[0]=~~(f+.5),i[1]=~~(u*100+.5),i[2]=~~(l*100+.5)),r&&i.length<4&&(i[3]=1),i},Ni=function(t){var e=[],r=[],i=-1;return t.split(kt).forEach(function(n){var s=n.match(jt)||[];e.push.apply(e,s),r.push(i+=s.length+1)}),e.c=r,e},Ur=function(t,e,r){var i="",n=(t+i).match(kt),s=e?"hsla(":"rgba(",a=0,f,u,l,h;if(!n)return t;if(n=n.map(function(_){return(_=Fi(_,e,1))&&s+(e?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),r&&(l=Ni(t),f=r.c,f.join(i)!==l.c.join(i)))for(u=t.replace(kt,"1").split(jt),h=u.length-1;a<h;a++)i+=u[a]+(~f.indexOf(a)?n.shift()||s+"0,0,0,0)":(l.length?l:n.length?n:r).shift());if(!u)for(u=t.split(kt),h=u.length-1;a<h;a++)i+=u[a]+n[a];return i+u[h]},kt=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in oe)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),Fs=/hsl[a]?\(/,Li=function(t){var e=t.join(" "),r;if(kt.lastIndex=0,kt.test(e))return r=Fs.test(e),t[1]=Ur(t[1],r),t[0]=Ur(t[0],r,Ni(t[1])),!0},pe,at=function(){var o=Date.now,t=500,e=33,r=o(),i=r,n=1e3/240,s=n,a=[],f,u,l,h,_,p,g=function c(d){var x=o()-i,y=d===!0,v,b,m,w;if((x>t||x<0)&&(r+=x-e),i+=x,m=i-r,v=m-s,(v>0||y)&&(w=++h.frame,_=m-h.time*1e3,h.time=m=m/1e3,s+=v+(v>=n?4:n-v),b=1),y||(f=u(c)),b)for(p=0;p<a.length;p++)a[p](m,_,w,d)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return _/(1e3/(d||60))},wake:function(){pi&&(!tr&&mr()&&(_t=tr=window,gr=_t.document||{},ut.gsap=nt,(_t.gsapVersions||(_t.gsapVersions=[])).push(nt.version),mi(Ce||_t.GreenSockGlobals||!_t.gsap&&_t||{}),zi.forEach(Ii)),l=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&h.sleep(),u=l||function(d){return setTimeout(d,s-h.time*1e3+1|0)},pe=1,g(2))},sleep:function(){(l?cancelAnimationFrame:clearTimeout)(f),pe=0,u=de},lagSmoothing:function(d,x){t=d||1/0,e=Math.min(x||33,t)},fps:function(d){n=1e3/(d||240),s=h.time*1e3+n},add:function(d,x,y){var v=x?function(b,m,w,O){d(b,m,w,O),h.remove(v)}:d;return h.remove(d),a[y?"unshift":"push"](v),ee(),v},remove:function(d,x){~(x=a.indexOf(d))&&a.splice(x,1)&&p>=x&&p--},_listeners:a},h}(),ee=function(){return!pe&&at.wake()},C={},Ns=/^[\d.\-M][\d.\-,\s]/,Ls=/["']/g,$s=function(t){for(var e={},r=t.substr(1,t.length-3).split(":"),i=r[0],n=1,s=r.length,a,f,u;n<s;n++)f=r[n],a=n!==s-1?f.lastIndexOf(","):f.length,u=f.substr(0,a),e[i]=isNaN(u)?u.replace(Ls,"").trim():+u,i=f.substr(a+1).trim();return e},Ys=function(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)},Vs=function(t){var e=(t+"").split("("),r=C[e[0]];return r&&e.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[$s(e[1])]:Ys(t).split(",").map(bi)):C._CE&&Ns.test(t)?C._CE("",t):r},$i=function(t){return function(e){return 1-t(1-e)}},Yi=function o(t,e){for(var r=t._first,i;r;)r instanceof J?o(r,e):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==e&&(r.timeline?o(r.timeline,e):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=e)),r=r._next},Vt=function(t,e){return t&&(L(t)?t:C[t]||Vs(t))||e},Ut=function(t,e,r,i){r===void 0&&(r=function(f){return 1-e(1-f)}),i===void 0&&(i=function(f){return f<.5?e(f*2)/2:1-e((1-f)*2)/2});var n={easeIn:e,easeOut:r,easeInOut:i},s;return et(t,function(a){C[a]=ut[a]=n,C[s=a.toLowerCase()]=r;for(var f in n)C[s+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=C[a+"."+f]=n[f]}),n},Vi=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ue=function o(t,e,r){var i=e>=1?e:1,n=(r||(t?.3:.45))/(e<1?e:1),s=n/Ze*(Math.asin(1/i)||0),a=function(l){return l===1?1:i*Math.pow(2,-10*l)*ps((l-s)*n)+1},f=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:Vi(a);return n=Ze/n,f.config=function(u,l){return o(t,u,l)},f},qe=function o(t,e){e===void 0&&(e=1.70158);var r=function(s){return s?--s*s*((e+1)*s+e)+1:0},i=t==="out"?r:t==="in"?function(n){return 1-r(1-n)}:Vi(r);return i.config=function(n){return o(t,n)},i};et("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Ut(o+",Power"+(e-1),t?function(r){return Math.pow(r,e)}:function(r){return r},function(r){return 1-Math.pow(1-r,e)},function(r){return r<.5?Math.pow(r*2,e)/2:1-Math.pow((1-r)*2,e)/2})});C.Linear.easeNone=C.none=C.Linear.easeIn;Ut("Elastic",Ue("in"),Ue("out"),Ue());(function(o,t){var e=1/t,r=2*e,i=2.5*e,n=function(a){return a<e?o*a*a:a<r?o*Math.pow(a-1.5/t,2)+.75:a<i?o*(a-=2.25/t)*a+.9375:o*Math.pow(a-2.625/t,2)+.984375};Ut("Bounce",function(s){return 1-n(1-s)},n)})(7.5625,2.75);Ut("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ut("Circ",function(o){return-(li(1-o*o)-1)});Ut("Sine",function(o){return o===1?1:-_s(o*hs)+1});Ut("Back",qe("in"),qe("out"),qe());C.SteppedEase=C.steps=ut.SteppedEase={config:function(t,e){t===void 0&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0,s=1-Q;return function(a){return((i*ve(0,s,a)|0)+n)*r}}};Ht.ease=C["quad.out"];et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return xr+=o+","+o+"Params,"});var Bi=function(t,e){this.id=ds++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:vi,this.set=e?e.getSetter:Or},me=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,te(this,+e.duration,1,1),this.data=e.data,I&&(this._ctx=I,I.data.push(this)),pe||at.wake()}var t=o.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,te(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,i){if(ee(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Fe(this,r),!n._dp||n.parent||Si(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&pt(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Q||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),xi(this,r,i)),this},t.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Vr(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},t.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Vr(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(r,i){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*n,i):this._repeat?Jt(this._tTime,n)+1:1},t.timeScale=function(r,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var n=this.parent&&this._ts?Re(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(ve(-Math.abs(this._delay),this._tDur,n),i!==!1),Ie(this),Ts(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ee(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Q&&(this._tTime-=Q)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pt(i,this,r-this._delay),this}return this._start},t.endTime=function(r){return this._start+(tt(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Re(i.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=ys);var i=G;return G=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),G=i,this},t.globalTime=function(r){for(var i=this,n=arguments.length?r:i.rawTime();i;)n=i._start+n/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):n},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Br(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,Br(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,i){return this.totalTime(ct(this,r),tt(i))},t.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,tt(i)),this._dur||(this._zTime=-1e-8),this},t.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},t.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var r=this.parent||this._dp,i=this._start,n;return!!(!r||this._ts&&this._initted&&r.isActive()&&(n=r.rawTime(!0))>=i&&n<this.endTime(!0)-Q)},t.eventCallback=function(r,i,n){var s=this.vars;return arguments.length>1?(i?(s[r]=i,n&&(s[r+"Params"]=n),r==="onUpdate"&&(this._onUpdate=i)):delete s[r],this):s[r]},t.then=function(r){var i=this;return new Promise(function(n){var s=L(r)?r:Ti,a=function(){var u=i.then;i.then=null,L(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=u),n(s),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ae(this)},o}();lt(me.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var J=function(o){ui(t,o);function t(r,i){var n;return r===void 0&&(r={}),n=o.call(this,r)||this,n.labels={},n.smoothChildTiming=!!r.smoothChildTiming,n.autoRemoveChildren=!!r.autoRemoveChildren,n._sort=tt(r.sortChildren),F&&pt(r.parent||F,bt(n),i),r.reversed&&n.reverse(),r.paused&&n.paused(!0),r.scrollTrigger&&Oi(bt(n),r.scrollTrigger),n}var e=t.prototype;return e.to=function(i,n,s){return ue(0,arguments,this),this},e.from=function(i,n,s){return ue(1,arguments,this),this},e.fromTo=function(i,n,s,a){return ue(2,arguments,this),this},e.set=function(i,n,s){return n.duration=0,n.parent=this,fe(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new V(i,n,ct(this,s),1),this},e.call=function(i,n,s){return pt(this,V.delayedCall(0,i,n),s)},e.staggerTo=function(i,n,s,a,f,u,l){return s.duration=n,s.stagger=s.stagger||a,s.onComplete=u,s.onCompleteParams=l,s.parent=this,new V(i,s,ct(this,f)),this},e.staggerFrom=function(i,n,s,a,f,u,l){return s.runBackwards=1,fe(s).immediateRender=tt(s.immediateRender),this.staggerTo(i,n,s,a,f,u,l)},e.staggerFromTo=function(i,n,s,a,f,u,l,h){return a.startAt=s,fe(a).immediateRender=tt(a.immediateRender),this.staggerTo(i,n,a,f,u,l,h)},e.render=function(i,n,s){var a=this._time,f=this._dirty?this.totalDuration():this._tDur,u=this._dur,l=i<=0?0:B(i),h=this._zTime<0!=i<0&&(this._initted||!u),_,p,g,c,d,x,y,v,b,m,w,O;if(this!==F&&l>f&&i>=0&&(l=f),l!==this._tTime||s||h){if(a!==this._time&&u&&(l+=this._time-a,i+=this._time-a),_=l,b=this._start,v=this._ts,x=!v,h&&(u||(a=this._zTime),(i||!n)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,d=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,n,s);if(_=B(l%d),l===f?(c=this._repeat,_=u):(m=B(l/d),c=~~m,c&&c===m&&(_=u,c--),_>u&&(_=u)),m=Jt(this._tTime,d),!a&&this._tTime&&m!==c&&this._tTime-m*d-this._dur<=0&&(m=c),w&&c&1&&(_=u-_,O=1),c!==m&&!this._lock){var P=w&&m&1,S=P===(w&&c&1);if(c<m&&(P=!P),a=P?0:l%u?u:l,this._lock=1,this.render(a||(O?0:B(c*d)),n,!u)._lock=0,this._tTime=l,!n&&this.parent&&ot(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,f=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Yi(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ps(this,B(a),B(_)),y&&(l-=_-(_=y._start))),this._tTime=l,this._time=_,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&_&&!n&&!c&&(ot(this,"onStart"),this._tTime!==l))return this;if(_>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||_>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,n,s);if(p.render(p._ts>0?(_-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(_-p._start)*p._ts,n,s),_!==this._time||!this._ts&&!x){y=0,g&&(l+=this._zTime=-1e-8);break}}p=g}else{p=this._last;for(var M=i<0?i:_;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,n,s);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,n,s||G&&(p._initted||p._startAt)),_!==this._time||!this._ts&&!x){y=0,g&&(l+=this._zTime=M?-1e-8:Q);break}}p=g}}if(y&&!n&&(this.pause(),y.render(_>=a?0:-1e-8)._zTime=_>=a?1:-1,this._ts))return this._start=b,Ie(this),this.render(i,n,s);this._onUpdate&&!n&&ot(this,"onUpdate",!0),(l===f&&this._tTime>=this.totalDuration()||!l&&a)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(l===f&&this._ts>0||!l&&this._ts<0)&&Rt(this,1),!n&&!(i<0&&!a)&&(l||a||!f)&&(ot(this,l===f&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(l<f&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,n){var s=this;if(wt(n)||(n=ct(this,n,i)),!(i instanceof me)){if(H(i))return i.forEach(function(a){return s.add(a,n)}),this;if(j(i))return this.addLabel(i,n);if(L(i))i=V.delayedCall(0,i);else return this}return this!==i?pt(this,i,n):this},e.getChildren=function(i,n,s,a){i===void 0&&(i=!0),n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=-1e8);for(var f=[],u=this._first;u;)u._start>=a&&(u instanceof V?n&&f.push(u):(s&&f.push(u),i&&f.push.apply(f,u.getChildren(!0,n,s)))),u=u._next;return f},e.getById=function(i){for(var n=this.getChildren(1,1,1),s=n.length;s--;)if(n[s].vars.id===i)return n[s]},e.remove=function(i){return j(i)?this.removeLabel(i):L(i)?this.killTweensOf(i):(i.parent===this&&ze(this,i),i===this._recent&&(this._recent=this._last),Yt(this))},e.totalTime=function(i,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=B(at.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,n),this._forcing=0,this):this._tTime},e.addLabel=function(i,n){return this.labels[i]=ct(this,n),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,n,s){var a=V.delayedCall(0,n||de,s);return a.data="isPause",this._hasPause=1,pt(this,a,ct(this,i))},e.removePause=function(i){var n=this._first;for(i=ct(this,i);n;)n._start===i&&n.data==="isPause"&&Rt(n),n=n._next},e.killTweensOf=function(i,n,s){for(var a=this.getTweensOf(i,s),f=a.length;f--;)Ot!==a[f]&&a[f].kill(i,n);return this},e.getTweensOf=function(i,n){for(var s=[],a=ht(i),f=this._first,u=wt(n),l;f;)f instanceof V?vs(f._targets,a)&&(u?(!Ot||f._initted&&f._ts)&&f.globalTime(0)<=n&&f.globalTime(f.totalDuration())>n:!n||f.isActive())&&s.push(f):(l=f.getTweensOf(a,n)).length&&s.push.apply(s,l),f=f._next;return s},e.tweenTo=function(i,n){n=n||{};var s=this,a=ct(s,i),f=n,u=f.startAt,l=f.onStart,h=f.onStartParams,_=f.immediateRender,p,g=V.to(s,lt({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:n.duration||Math.abs((a-(u&&"time"in u?u.time:s._time))/s.timeScale())||Q,onStart:function(){if(s.pause(),!p){var d=n.duration||Math.abs((a-(u&&"time"in u?u.time:s._time))/s.timeScale());g._dur!==d&&te(g,d,0,1).render(g._time,!0,!0),p=1}l&&l.apply(g,h||[])}},n));return _?g.render(0):g},e.tweenFromTo=function(i,n,s){return this.tweenTo(n,lt({startAt:{time:ct(this,i)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Xr(this,ct(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Xr(this,ct(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Q)},e.shiftChildren=function(i,n,s){s===void 0&&(s=0);for(var a=this._first,f=this.labels,u;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(n)for(u in f)f[u]>=s&&(f[u]+=i);return Yt(this)},e.invalidate=function(i){var n=this._first;for(this._lock=0;n;)n.invalidate(i),n=n._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var n=this._first,s;n;)s=n._next,this.remove(n),n=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yt(this)},e.totalDuration=function(i){var n=0,s=this,a=s._last,f=gt,u,l,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),l=a._start,l>f&&s._sort&&a._ts&&!s._lock?(s._lock=1,pt(s,a,l-a._delay,1)._lock=0):f=l,l<0&&a._ts&&(n-=l,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=l/s._ts,s._time-=l,s._tTime-=l),s.shiftChildren(-l,!1,-1/0),f=0),a._end>n&&a._ts&&(n=a._end),a=u;te(s,s===F&&s._time>n?s._time:n,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(i){if(F._ts&&(xi(F,Re(i,F)),yi=at.frame),at.frame>=$r){$r+=ft.autoSleep||120;var n=F._first;if((!n||!n._ts)&&ft.autoSleep&&at._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||at.sleep()}}},t}(me);lt(J.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bs=function(t,e,r,i,n,s,a){var f=new rt(this._pt,t,e,0,1,Gi,null,n),u=0,l=0,h,_,p,g,c,d,x,y;for(f.b=r,f.e=i,r+="",i+="",(x=~i.indexOf("random("))&&(i=_e(i)),s&&(y=[r,i],s(y,t,e),r=y[0],i=y[1]),_=r.match(Ve)||[];h=Ve.exec(i);)g=h[0],c=i.substring(u,h.index),p?p=(p+1)%5:c.substr(-5)==="rgba("&&(p=1),g!==_[l++]&&(d=parseFloat(_[l-1])||0,f._pt={_next:f._pt,p:c||l===1?c:",",s:d,c:g.charAt(1)==="="?Gt(d,g)-d:parseFloat(g)-d,m:p&&p<4?Math.round:0},u=Ve.lastIndex);return f.c=u<i.length?i.substring(u,i.length):"",f.fp=a,(di.test(i)||x)&&(f.e=0),this._pt=f,f},Tr=function(t,e,r,i,n,s,a,f,u,l){L(i)&&(i=i(n||0,t,s));var h=t[e],_=r!=="get"?r:L(h)?u?t[e.indexOf("set")||!L(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():h,p=L(h)?u?Ws:ji:Sr,g;if(j(i)&&(~i.indexOf("random(")&&(i=_e(i)),i.charAt(1)==="="&&(g=Gt(_,i)+(K(_)||0),(g||g===0)&&(i=g))),!l||_!==i||or)return!isNaN(_*i)&&i!==""?(g=new rt(this._pt,t,e,+_||0,i-(_||0),typeof h=="boolean"?Ks:Wi,0,p),u&&(g.fp=u),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&yr(e,i),Bs.call(this,t,e,_,i,p,f||ft.stringFilter,u))},Xs=function(t,e,r,i,n){if(L(t)&&(t=le(t,n,e,r,i)),!vt(t)||t.style&&t.nodeType||H(t)||ci(t))return j(t)?le(t,n,e,r,i):t;var s={},a;for(a in t)s[a]=le(t[a],n,e,r,i);return s},Xi=function(t,e,r,i,n,s){var a,f,u,l;if(st[t]&&(a=new st[t]).init(n,a.rawVars?e[t]:Xs(e[t],i,n,s,r),r,i,s)!==!1&&(r._pt=f=new rt(r._pt,n,t,0,1,a.render,a,0,a.priority),r!==Wt))for(u=r._ptLookup[r._targets.indexOf(n)],l=a._props.length;l--;)u[a._props[l]]=f;return a},Ot,or,wr=function o(t,e,r){var i=t.vars,n=i.ease,s=i.startAt,a=i.immediateRender,f=i.lazy,u=i.onUpdate,l=i.runBackwards,h=i.yoyoEase,_=i.keyframes,p=i.autoRevert,g=t._dur,c=t._startAt,d=t._targets,x=t.parent,y=x&&x.data==="nested"?x.vars.targets:d,v=t._overwrite==="auto"&&!_r,b=t.timeline,m,w,O,P,S,M,z,A,E,W,X,Y,U;if(b&&(!_||!n)&&(n="none"),t._ease=Vt(n,Ht.ease),t._yEase=h?$i(Vt(h===!0?n:h,Ht.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!b&&!!i.runBackwards,!b||_&&!i.stagger){if(A=d[0]?$t(d[0]).harness:0,Y=A&&i[A.prop],m=ke(i,vr),c&&(c._zTime<0&&c.progress(1),e<0&&l&&a&&!p?c.render(-1,!0):c.revert(l&&g?Se:gs),c._lazy=0),s){if(Rt(t._startAt=V.set(d,lt({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!c&&tt(f),startAt:null,delay:0,onUpdate:u&&function(){return ot(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(G||!a&&!p)&&t._startAt.revert(Se),a&&g&&e<=0&&r<=0){e&&(t._zTime=e);return}}else if(l&&g&&!c){if(e&&(a=!1),O=lt({overwrite:!1,data:"isFromStart",lazy:a&&!c&&tt(f),immediateRender:a,stagger:0,parent:x},m),Y&&(O[A.prop]=Y),Rt(t._startAt=V.set(d,O)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(G?t._startAt.revert(Se):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,Q,Q);else if(!e)return}for(t._pt=t._ptCache=0,f=g&&tt(f)||f&&!g,w=0;w<d.length;w++){if(S=d[w],z=S._gsap||br(d)[w]._gsap,t._ptLookup[w]=W={},er[z.id]&&Mt.length&&Me(),X=y===d?w:y.indexOf(S),A&&(E=new A).init(S,Y||m,t,X,y)!==!1&&(t._pt=P=new rt(t._pt,S,E.name,0,1,E.render,E,0,E.priority),E._props.forEach(function(dt){W[dt]=P}),E.priority&&(M=1)),!A||Y)for(O in m)st[O]&&(E=Xi(O,m,t,X,S,y))?E.priority&&(M=1):W[O]=P=Tr.call(t,S,O,"get",m[O],X,y,0,i.stringFilter);t._op&&t._op[w]&&t.kill(S,t._op[w]),v&&t._pt&&(Ot=t,F.killTweensOf(S,W,t.globalTime(e)),U=!t.parent,Ot=0),t._pt&&f&&(er[z.id]=1)}M&&Ki(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!U,_&&e<=0&&b.render(gt,!0,!0)},Us=function(t,e,r,i,n,s,a,f){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,_,p;if(!u)for(u=t._ptCache[e]=[],_=t._ptLookup,p=t._targets.length;p--;){if(l=_[p][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return or=1,t.vars[e]="+=0",wr(t,a),or=0,f?he(e+" not eligible for reset"):1;u.push(l)}for(p=u.length;p--;)h=u[p],l=h._pt||h,l.s=(i||i===0)&&!n?i:l.s+(i||0)+s*l.c,l.c=r-l.s,h.e&&(h.e=$(r)+K(h.e)),h.b&&(h.b=l.s+K(h.b))},qs=function(t,e){var r=t[0]?$t(t[0]).harness:0,i=r&&r.aliases,n,s,a,f;if(!i)return e;n=Zt({},e);for(s in i)if(s in n)for(f=i[s].split(","),a=f.length;a--;)n[f[a]]=n[s];return n},js=function(t,e,r,i){var n=e.ease||i||"power1.inOut",s,a;if(H(e))a=r[t]||(r[t]=[]),e.forEach(function(f,u){return a.push({t:u/(e.length-1)*100,v:f,e:n})});else for(s in e)a=r[s]||(r[s]=[]),s==="ease"||a.push({t:parseFloat(t),v:e[s],e:n})},le=function(t,e,r,i,n){return L(t)?t.call(e,r,i,n):j(t)&&~t.indexOf("random(")?_e(t):t},Ui=xr+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qi={};et(Ui+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return qi[o]=1});var V=function(o){ui(t,o);function t(r,i,n,s){var a;typeof i=="number"&&(n.duration=i,i=n,n=null),a=o.call(this,s?i:fe(i))||this;var f=a.vars,u=f.duration,l=f.delay,h=f.immediateRender,_=f.stagger,p=f.overwrite,g=f.keyframes,c=f.defaults,d=f.scrollTrigger,x=f.yoyoEase,y=i.parent||F,v=(H(r)||ci(r)?wt(r[0]):"length"in i)?[r]:ht(r),b,m,w,O,P,S,M,z;if(a._targets=v.length?br(v):he("GSAP target "+r+" not found. https://gsap.com",!ft.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||_||we(u)||we(l)){if(i=a.vars,b=a.timeline=new J({data:"nested",defaults:c||{},targets:y&&y.data==="nested"?y.vars.targets:v}),b.kill(),b.parent=b._dp=bt(a),b._start=0,_||we(u)||we(l)){if(O=v.length,M=_&&ki(_),vt(_))for(P in _)~Ui.indexOf(P)&&(z||(z={}),z[P]=_[P]);for(m=0;m<O;m++)w=ke(i,qi),w.stagger=0,x&&(w.yoyoEase=x),z&&Zt(w,z),S=v[m],w.duration=+le(u,bt(a),m,S,v),w.delay=(+le(l,bt(a),m,S,v)||0)-a._delay,!_&&O===1&&w.delay&&(a._delay=l=w.delay,a._start+=l,w.delay=0),b.to(S,w,M?M(m,S,v):0),b._ease=C.none;b.duration()?u=l=0:a.timeline=0}else if(g){fe(lt(b.vars.defaults,{ease:"none"})),b._ease=Vt(g.ease||i.ease||"none");var A=0,E,W,X;if(H(g))g.forEach(function(Y){return b.to(v,Y,">")}),b.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||js(P,g[P],w,g.easeEach);for(P in w)for(E=w[P].sort(function(Y,U){return Y.t-U.t}),A=0,m=0;m<E.length;m++)W=E[m],X={ease:W.e,duration:(W.t-(m?E[m-1].t:0))/100*u},X[P]=W.v,b.to(v,X,A),A+=X.duration;b.duration()<u&&b.to({},{duration:u-b.duration()})}}u||a.duration(u=b.duration())}else a.timeline=0;return p===!0&&!_r&&(Ot=bt(a),F.killTweensOf(v),Ot=0),pt(y,bt(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!u&&!g&&a._start===B(y._time)&&tt(h)&&ws(bt(a))&&y.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-l)||0)),d&&Oi(bt(a),d),a}var e=t.prototype;return e.render=function(i,n,s){var a=this._time,f=this._tDur,u=this._dur,l=i<0,h=i>f-Q&&!l?f:i<Q?0:i,_,p,g,c,d,x,y,v,b;if(!u)Os(this,i,n,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==l||this._lazy){if(_=h,v=this.timeline,this._repeat){if(c=u+this._rDelay,this._repeat<-1&&l)return this.totalTime(c*100+i,n,s);if(_=B(h%c),h===f?(g=this._repeat,_=u):(d=B(h/c),g=~~d,g&&g===d?(_=u,g--):_>u&&(_=u)),x=this._yoyo&&g&1,x&&(b=this._yEase,_=u-_),d=Jt(this._tTime,c),_===a&&!s&&this._initted&&g===d)return this._tTime=h,this;g!==d&&(v&&this._yEase&&Yi(v,x),this.vars.repeatRefresh&&!x&&!this._lock&&_!==c&&this._initted&&(this._lock=s=1,this.render(B(c*g),!0).invalidate()._lock=0))}if(!this._initted){if(Pi(this,l?i:_,s,n,h))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&g!==d))return this;if(u!==this._dur)return this.render(i,n,s)}if(this._tTime=h,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(_/u),this._from&&(this.ratio=y=1-y),_&&!a&&!n&&!g&&(ot(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;v&&v.render(i<0?i:v._dur*v._ease(_/this._dur),n,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!n&&(l&&rr(this,i,n,s),ot(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!n&&this.parent&&ot(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(l&&!this._onUpdate&&rr(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Rt(this,1),!n&&!(l&&!a)&&(h||a||x)&&(ot(this,h===f?"onComplete":"onReverseComplete",!0),this._prom&&!(h<f&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,n,s,a,f){pe||at.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||wr(this,u),l=this._ease(u/this._dur),Us(this,i,n,s,a,l,u,f)?this.resetTo(i,n,s,a,1):(Fe(this,0),this.parent||wi(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,n){if(n===void 0&&(n="all"),!i&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?ae(this):this.scrollTrigger&&this.scrollTrigger.kill(!!G),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,n,Ot&&Ot.vars.overwrite!==!0)._first||ae(this),this.parent&&s!==this.timeline.totalDuration()&&te(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,f=i?ht(i):a,u=this._ptLookup,l=this._pt,h,_,p,g,c,d,x;if((!n||n==="all")&&bs(a,f))return n==="all"&&(this._pt=0),ae(this);for(h=this._op=this._op||[],n!=="all"&&(j(n)&&(c={},et(n,function(y){return c[y]=1}),n=c),n=qs(a,n)),x=a.length;x--;)if(~f.indexOf(a[x])){_=u[x],n==="all"?(h[x]=n,g=_,p={}):(p=h[x]=h[x]||{},g=n);for(c in g)d=_&&_[c],d&&((!("kill"in d.d)||d.d.kill(c)===!0)&&ze(this,d,"_pt"),delete _[c]),p!=="all"&&(p[c]=1)}return this._initted&&!this._pt&&l&&ae(this),this},t.to=function(i,n){return new t(i,n,arguments[2])},t.from=function(i,n){return ue(1,arguments)},t.delayedCall=function(i,n,s,a){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:n,onReverseComplete:n,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},t.fromTo=function(i,n,s){return ue(2,arguments)},t.set=function(i,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(i,n)},t.killTweensOf=function(i,n,s){return F.killTweensOf(i,n,s)},t}(me);lt(V.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});et("staggerTo,staggerFrom,staggerFromTo",function(o){V[o]=function(){var t=new J,e=nr.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var Sr=function(t,e,r){return t[e]=r},ji=function(t,e,r){return t[e](r)},Ws=function(t,e,r,i){return t[e](i.fp,r)},Gs=function(t,e,r){return t.setAttribute(e,r)},Or=function(t,e){return L(t[e])?ji:pr(t[e])&&t.setAttribute?Gs:Sr},Wi=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ks=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Gi=function(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Pr=function(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Qs=function(t,e,r,i){for(var n=this._pt,s;n;)s=n._next,n.p===i&&n.modifier(t,e,r),n=s},Hs=function(t){for(var e=this._pt,r,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ze(this,e,"_pt"):e.dep||(r=1),e=i;return!r},Zs=function(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)},Ki=function(t){for(var e=t._pt,r,i,n,s;e;){for(r=e._next,i=n;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:s)?e._prev._next=e:n=e,(e._next=i)?i._prev=e:s=e,e=r}t._pt=n},rt=function(){function o(e,r,i,n,s,a,f,u,l){this.t=r,this.s=n,this.c=s,this.p=i,this.r=a||Wi,this.d=f||this,this.set=u||Sr,this.pr=l||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(r,i,n){this.mSet=this.mSet||this.set,this.set=Zs,this.m=r,this.mt=n,this.tween=i},o}();et(xr+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return vr[o]=1});ut.TweenMax=ut.TweenLite=V;ut.TimelineLite=ut.TimelineMax=J;F=new J({sortChildren:!1,defaults:Ht,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ft.stringFilter=Li;var Bt=[],Pe={},Js=[],qr=0,ta=0,je=function(t){return(Pe[t]||Js).map(function(e){return e()})},fr=function(){var t=Date.now(),e=[];t-qr>2&&(je("matchMediaInit"),Bt.forEach(function(r){var i=r.queries,n=r.conditions,s,a,f,u;for(a in i)s=_t.matchMedia(i[a]).matches,s&&(f=1),s!==n[a]&&(n[a]=s,u=1);u&&(r.revert(),f&&e.push(r))}),je("matchMediaRevert"),e.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),qr=t,je("matchMedia"))},Qi=function(){function o(e,r){this.selector=r&&sr(r),this.data=[],this._r=[],this.isReverted=!1,this.id=ta++,e&&this.add(e)}var t=o.prototype;return t.add=function(r,i,n){L(r)&&(n=i,i=r,r=L);var s=this,a=function(){var u=I,l=s.selector,h;return u&&u!==s&&u.data.push(s),n&&(s.selector=sr(n)),I=s,h=i.apply(s,arguments),L(h)&&s._r.push(h),I=u,s.selector=l,s.isReverted=!1,h};return s.last=a,r===L?a(s,function(f){return s.add(null,f)}):r?s[r]=a:a},t.ignore=function(r){var i=I;I=null,r(this),I=i},t.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof o?r.push.apply(r,i.getTweens()):i instanceof V&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,i){var n=this;if(r?function(){for(var a=n.getTweens(),f=n.data.length,u;f--;)u=n.data[f],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(l){return a.splice(a.indexOf(l),1)}));for(a.map(function(l){return{g:l._dur||l._delay||l._sat&&!l._sat.vars.immediateRender?l.globalTime(0):-1/0,t:l}}).sort(function(l,h){return h.g-l.g||-1/0}).forEach(function(l){return l.t.revert(r)}),f=n.data.length;f--;)u=n.data[f],u instanceof J?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof V)&&u.revert&&u.revert(r);n._r.forEach(function(l){return l(r,n)}),n.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var s=Bt.length;s--;)Bt[s].id===this.id&&Bt.splice(s,1)},t.revert=function(r){this.kill(r||{})},o}(),ea=function(){function o(e){this.contexts=[],this.scope=e,I&&I.data.push(this)}var t=o.prototype;return t.add=function(r,i,n){vt(r)||(r={matches:r});var s=new Qi(0,n||this.scope),a=s.conditions={},f,u,l;I&&!s.selector&&(s.selector=I.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=r;for(u in r)u==="all"?l=1:(f=_t.matchMedia(r[u]),f&&(Bt.indexOf(s)<0&&Bt.push(s),(a[u]=f.matches)&&(l=1),f.addListener?f.addListener(fr):f.addEventListener("change",fr)));return l&&i(s,function(h){return s.add(null,h)}),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},o}(),De={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(i){return Ii(i)})},timeline:function(t){return new J(t)},getTweensOf:function(t,e){return F.getTweensOf(t,e)},getProperty:function(t,e,r,i){j(t)&&(t=ht(t)[0]);var n=$t(t||{}).get,s=r?Ti:bi;return r==="native"&&(r=""),t&&(e?s((st[e]&&st[e].get||n)(t,e,r,i)):function(a,f,u){return s((st[a]&&st[a].get||n)(t,a,f,u))})},quickSetter:function(t,e,r){if(t=ht(t),t.length>1){var i=t.map(function(l){return nt.quickSetter(l,e,r)}),n=i.length;return function(l){for(var h=n;h--;)i[h](l)}}t=t[0]||{};var s=st[e],a=$t(t),f=a.harness&&(a.harness.aliases||{})[e]||e,u=s?function(l){var h=new s;Wt._pt=0,h.init(t,r?l+r:l,Wt,0,[t]),h.render(1,h),Wt._pt&&Pr(1,Wt)}:a.set(t,f);return s?u:function(l){return u(t,f,r?l+r:l,a,1)}},quickTo:function(t,e,r){var i,n=nt.to(t,lt((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),s=function(f,u,l){return n.resetTo(e,f,u,l)};return s.tween=n,s},isTweening:function(t){return F.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vt(t.ease,Ht.ease)),Yr(Ht,t||{})},config:function(t){return Yr(ft,t||{})},registerEffect:function(t){var e=t.name,r=t.effect,i=t.plugins,n=t.defaults,s=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!st[a]&&!ut[a]&&he(e+" effect requires "+a+" plugin.")}),Be[e]=function(a,f,u){return r(ht(a),lt(f||{},n),u)},s&&(J.prototype[e]=function(a,f,u){return this.add(Be[e](a,vt(f)?f:(u=f)&&{},this),u)})},registerEase:function(t,e){C[t]=Vt(e)},parseEase:function(t,e){return arguments.length?Vt(t,e):C},getById:function(t){return F.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var r=new J(t),i,n;for(r.smoothChildTiming=tt(t.smoothChildTiming),F.remove(r),r._dp=0,r._time=r._tTime=F._time,i=F._first;i;)n=i._next,(e||!(!i._dur&&i instanceof V&&i.vars.onComplete===i._targets[0]))&&pt(r,i,i._start-i._delay),i=n;return pt(F,r,0),r},context:function(t,e){return t?new Qi(t,e):I},matchMedia:function(t){return new ea(t)},matchMediaRefresh:function(){return Bt.forEach(function(t){var e=t.conditions,r,i;for(i in e)e[i]&&(e[i]=!1,r=1);r&&t.revert()})||fr()},addEventListener:function(t,e){var r=Pe[t]||(Pe[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function(t,e){var r=Pe[t],i=r&&r.indexOf(e);i>=0&&r.splice(i,1)},utils:{wrap:Es,wrapYoyo:zs,distribute:ki,random:Di,snap:Ri,normalize:As,getUnit:K,clamp:Ms,splitColor:Fi,toArray:ht,selector:sr,mapRange:Ei,pipe:Rs,unitize:Ds,interpolate:Is,shuffle:Mi},install:mi,effects:Be,ticker:at,updateRoot:J.updateRoot,plugins:st,globalTimeline:F,core:{PropTween:rt,globals:gi,Tween:V,Timeline:J,Animation:me,getCache:$t,_removeLinkedListItem:ze,reverting:function(){return G},context:function(t){return t&&I&&(I.data.push(t),t._ctx=I),I},suppressOverwrites:function(t){return _r=t}}};et("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return De[o]=V[o]});at.add(J.updateRoot);Wt=De.to({},{duration:0});var ra=function(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r},ia=function(t,e){var r=t._targets,i,n,s;for(i in e)for(n=r.length;n--;)s=t._ptLookup[n][i],s&&(s=s.d)&&(s._pt&&(s=ra(s,i)),s&&s.modifier&&s.modifier(e[i],t,r[n],i))},We=function(t,e){return{name:t,rawVars:1,init:function(i,n,s){s._onInit=function(a){var f,u;if(j(n)&&(f={},et(n,function(l){return f[l]=1}),n=f),e){f={};for(u in n)f[u]=e(n[u]);n=f}ia(a,n)}}}},nt=De.registerPlugin({name:"attr",init:function(t,e,r,i,n){var s,a,f;this.tween=r;for(s in e)f=t.getAttribute(s)||"",a=this.add(t,"setAttribute",(f||0)+"",e[s],i,n,0,0,s),a.op=s,a.b=f,this._props.push(s)},render:function(t,e){for(var r=e._pt;r;)G?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},We("roundProps",ar),We("modifiers"),We("snap",Ri))||De;V.version=J.version=nt.version="3.12.7";pi=1;mr()&&ee();C.Power0;C.Power1;C.Power2;C.Power3;C.Power4;C.Linear;C.Quad;C.Cubic;C.Quart;C.Quint;C.Strong;C.Elastic;C.Back;C.SteppedEase;C.Bounce;C.Sine;C.Expo;C.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jr,Pt,Kt,Cr,Lt,Wr,Mr,na=function(){return typeof window<"u"},St={},Nt=180/Math.PI,Qt=Math.PI/180,qt=Math.atan2,Gr=1e8,kr=/([A-Z])/g,sa=/(left|right|width|margin|padding|x)/i,aa=/[\s,\(]\S/,mt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ur=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},oa=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},fa=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ua=function(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)},Hi=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Zi=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},la=function(t,e,r){return t.style[e]=r},ca=function(t,e,r){return t.style.setProperty(e,r)},ha=function(t,e,r){return t._gsap[e]=r},da=function(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r},_a=function(t,e,r,i,n){var s=t._gsap;s.scaleX=s.scaleY=r,s.renderTransform(n,s)},pa=function(t,e,r,i,n){var s=t._gsap;s[e]=r,s.renderTransform(n,s)},N="transform",it=N+"Origin",ma=function o(t,e){var r=this,i=this.target,n=i.style,s=i._gsap;if(t in St&&n){if(this.tfm=this.tfm||{},t!=="transform")t=mt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return r.tfm[a]=Tt(i,a)}):this.tfm[t]=s.x?s[t]:Tt(i,t),t===it&&(this.tfm.zOrigin=s.zOrigin);else return mt.transform.split(",").forEach(function(a){return o.call(r,a,e)});if(this.props.indexOf(N)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(it,e,"")),t=N}(n||e)&&this.props.push(t,e,n[t])},Ji=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ga=function(){var t=this.props,e=this.target,r=e.style,i=e._gsap,n,s;for(n=0;n<t.length;n+=3)t[n+1]?t[n+1]===2?e[t[n]](t[n+2]):e[t[n]]=t[n+2]:t[n+2]?r[t[n]]=t[n+2]:r.removeProperty(t[n].substr(0,2)==="--"?t[n]:t[n].replace(kr,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=Mr(),(!n||!n.isStart)&&!r[N]&&(Ji(r),i.zOrigin&&r[it]&&(r[it]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},tn=function(t,e){var r={target:t,props:[],revert:ga,save:ma};return t._gsap||nt.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return r.save(i)}),r},en,lr=function(t,e){var r=Pt.createElementNS?Pt.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Pt.createElement(t);return r&&r.style?r:Pt.createElement(t)},yt=function o(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(kr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&o(t,re(e)||e,1)||""},Kr="O,Moz,ms,Ms,Webkit".split(","),re=function(t,e,r){var i=e||Lt,n=i.style,s=5;if(t in n&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(Kr[s]+t in n););return s<0?null:(s===3?"ms":s>=0?Kr[s]:"")+t},cr=function(){na()&&window.document&&(jr=window,Pt=jr.document,Kt=Pt.documentElement,Lt=lr("div")||{style:{}},lr("div"),N=re(N),it=N+"Origin",Lt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",en=!!re("perspective"),Mr=nt.core.reverting,Cr=1)},Qr=function(t){var e=t.ownerSVGElement,r=lr("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),n;i.style.display="block",r.appendChild(i),Kt.appendChild(r);try{n=i.getBBox()}catch{}return r.removeChild(i),Kt.removeChild(r),n},Hr=function(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])},rn=function(t){var e,r;try{e=t.getBBox()}catch{e=Qr(t),r=1}return e&&(e.width||e.height)||r||(e=Qr(t)),e&&!e.width&&!e.x&&!e.y?{x:+Hr(t,["x","cx","x1"])||0,y:+Hr(t,["y","cy","y1"])||0,width:0,height:0}:e},nn=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&rn(t))},Xt=function(t,e){if(e){var r=t.style,i;e in St&&e!==it&&(e=N),r.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),r.removeProperty(i==="--"?e:e.replace(kr,"-$1").toLowerCase())):r.removeAttribute(e)}},Ct=function(t,e,r,i,n,s){var a=new rt(t._pt,e,r,0,1,s?Zi:Hi);return t._pt=a,a.b=i,a.e=n,t._props.push(r),a},Zr={deg:1,rad:1,turn:1},ya={grid:1,flex:1},Dt=function o(t,e,r,i){var n=parseFloat(r)||0,s=(r+"").trim().substr((n+"").length)||"px",a=Lt.style,f=sa.test(e),u=t.tagName.toLowerCase()==="svg",l=(u?"client":"offset")+(f?"Width":"Height"),h=100,_=i==="px",p=i==="%",g,c,d,x;if(i===s||!n||Zr[i]||Zr[s])return n;if(s!=="px"&&!_&&(n=o(t,e,r,"px")),x=t.getCTM&&nn(t),(p||s==="%")&&(St[e]||~e.indexOf("adius")))return g=x?t.getBBox()[f?"width":"height"]:t[l],$(p?n/g*h:n/100*g);if(a[f?"width":"height"]=h+(_?s:i),c=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!u?t:t.parentNode,x&&(c=(t.ownerSVGElement||{}).parentNode),(!c||c===Pt||!c.appendChild)&&(c=Pt.body),d=c._gsap,d&&p&&d.width&&f&&d.time===at.time&&!d.uncache)return $(n/d.width*h);if(p&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,g=t[l],y?t.style[e]=y:Xt(t,e)}else(p||s==="%")&&!ya[yt(c,"display")]&&(a.position=yt(t,"position")),c===t&&(a.position="static"),c.appendChild(Lt),g=Lt[l],c.removeChild(Lt),a.position="absolute";return f&&p&&(d=$t(c),d.time=at.time,d.width=c[l]),$(_?g*n/h:g&&n?h/g*n:0)},Tt=function(t,e,r,i){var n;return Cr||cr(),e in mt&&e!=="transform"&&(e=mt[e],~e.indexOf(",")&&(e=e.split(",")[0])),St[e]&&e!=="transform"?(n=ye(t,i),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:Ee(yt(t,it))+" "+n.zOrigin+"px"):(n=t.style[e],(!n||n==="auto"||i||~(n+"").indexOf("calc("))&&(n=Ae[e]&&Ae[e](t,e,r)||yt(t,e)||vi(t,e)||(e==="opacity"?1:0))),r&&!~(n+"").trim().indexOf(" ")?Dt(t,e,n,r)+r:n},va=function(t,e,r,i){if(!r||r==="none"){var n=re(e,t,1),s=n&&yt(t,n,1);s&&s!==r?(e=n,r=s):e==="borderColor"&&(r=yt(t,"borderTopColor"))}var a=new rt(this._pt,t.style,e,0,1,Gi),f=0,u=0,l,h,_,p,g,c,d,x,y,v,b,m;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(c=t.style[e],t.style[e]=i,i=yt(t,e)||i,c?t.style[e]=c:Xt(t,e)),l=[r,i],Li(l),r=l[0],i=l[1],_=r.match(jt)||[],m=i.match(jt)||[],m.length){for(;h=jt.exec(i);)d=h[0],y=i.substring(f,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),d!==(c=_[u++]||"")&&(p=parseFloat(c)||0,b=c.substr((p+"").length),d.charAt(1)==="="&&(d=Gt(p,d)+b),x=parseFloat(d),v=d.substr((x+"").length),f=jt.lastIndex-v.length,v||(v=v||ft.units[e]||b,f===i.length&&(i+=v,a.e+=v)),b!==v&&(p=Dt(t,e,c,v)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:p,c:x-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=f<i.length?i.substring(f,i.length):""}else a.r=e==="display"&&i==="none"?Zi:Hi;return di.test(i)&&(a.e=0),this._pt=a,a},Jr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xa=function(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(t=r,r=i,i=t),e[0]=Jr[r]||r,e[1]=Jr[i]||i,e.join(" ")},ba=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r=e.t,i=r.style,n=e.u,s=r._gsap,a,f,u;if(n==="all"||n===!0)i.cssText="",f=1;else for(n=n.split(","),u=n.length;--u>-1;)a=n[u],St[a]&&(f=1,a=a==="transformOrigin"?it:N),Xt(r,a);f&&(Xt(r,N),s&&(s.svg&&r.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ye(r,1),s.uncache=1,Ji(i)))}},Ae={clearProps:function(t,e,r,i,n){if(n.data!=="isFromStart"){var s=t._pt=new rt(t._pt,e,r,0,0,ba);return s.u=i,s.pr=-10,s.tween=n,t._props.push(r),1}}},ge=[1,0,0,1,0,0],sn={},an=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ti=function(t){var e=yt(t,N);return an(e)?ge:e.substr(7).match(hi).map($)},Rr=function(t,e){var r=t._gsap||$t(t),i=t.style,n=ti(t),s,a,f,u;return r.svg&&t.getAttribute("transform")?(f=t.transform.baseVal.consolidate().matrix,n=[f.a,f.b,f.c,f.d,f.e,f.f],n.join(",")==="1,0,0,1,0,0"?ge:n):(n===ge&&!t.offsetParent&&t!==Kt&&!r.svg&&(f=i.display,i.display="block",s=t.parentNode,(!s||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,Kt.appendChild(t)),n=ti(t),f?i.display=f:Xt(t,"display"),u&&(a?s.insertBefore(t,a):s?s.appendChild(t):Kt.removeChild(t))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},hr=function(t,e,r,i,n,s){var a=t._gsap,f=n||Rr(t,!0),u=a.xOrigin||0,l=a.yOrigin||0,h=a.xOffset||0,_=a.yOffset||0,p=f[0],g=f[1],c=f[2],d=f[3],x=f[4],y=f[5],v=e.split(" "),b=parseFloat(v[0])||0,m=parseFloat(v[1])||0,w,O,P,S;r?f!==ge&&(O=p*d-g*c)&&(P=b*(d/O)+m*(-c/O)+(c*y-d*x)/O,S=b*(-g/O)+m*(p/O)-(p*y-g*x)/O,b=P,m=S):(w=rn(t),b=w.x+(~v[0].indexOf("%")?b/100*w.width:b),m=w.y+(~(v[1]||v[0]).indexOf("%")?m/100*w.height:m)),i||i!==!1&&a.smooth?(x=b-u,y=m-l,a.xOffset=h+(x*p+y*c)-x,a.yOffset=_+(x*g+y*d)-y):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=m,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!r,t.style[it]="0px 0px",s&&(Ct(s,a,"xOrigin",u,b),Ct(s,a,"yOrigin",l,m),Ct(s,a,"xOffset",h,a.xOffset),Ct(s,a,"yOffset",_,a.yOffset)),t.setAttribute("data-svg-origin",b+" "+m)},ye=function(t,e){var r=t._gsap||new Bi(t);if("x"in r&&!e&&!r.uncache)return r;var i=t.style,n=r.scaleX<0,s="px",a="deg",f=getComputedStyle(t),u=yt(t,it)||"0",l,h,_,p,g,c,d,x,y,v,b,m,w,O,P,S,M,z,A,E,W,X,Y,U,dt,xe,ie,ne,Et,Dr,xt,zt;return l=h=_=c=d=x=y=v=b=0,p=g=1,r.svg=!!(t.getCTM&&nn(t)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(i[N]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[N]!=="none"?f[N]:"")),i.scale=i.rotate=i.translate="none"),O=Rr(t,r.svg),r.svg&&(r.uncache?(dt=t.getBBox(),u=r.xOrigin-dt.x+"px "+(r.yOrigin-dt.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),hr(t,U||u,!!U||r.originIsAbsolute,r.smooth!==!1,O)),m=r.xOrigin||0,w=r.yOrigin||0,O!==ge&&(z=O[0],A=O[1],E=O[2],W=O[3],l=X=O[4],h=Y=O[5],O.length===6?(p=Math.sqrt(z*z+A*A),g=Math.sqrt(W*W+E*E),c=z||A?qt(A,z)*Nt:0,y=E||W?qt(E,W)*Nt+c:0,y&&(g*=Math.abs(Math.cos(y*Qt))),r.svg&&(l-=m-(m*z+w*E),h-=w-(m*A+w*W))):(zt=O[6],Dr=O[7],ie=O[8],ne=O[9],Et=O[10],xt=O[11],l=O[12],h=O[13],_=O[14],P=qt(zt,Et),d=P*Nt,P&&(S=Math.cos(-P),M=Math.sin(-P),U=X*S+ie*M,dt=Y*S+ne*M,xe=zt*S+Et*M,ie=X*-M+ie*S,ne=Y*-M+ne*S,Et=zt*-M+Et*S,xt=Dr*-M+xt*S,X=U,Y=dt,zt=xe),P=qt(-E,Et),x=P*Nt,P&&(S=Math.cos(-P),M=Math.sin(-P),U=z*S-ie*M,dt=A*S-ne*M,xe=E*S-Et*M,xt=W*M+xt*S,z=U,A=dt,E=xe),P=qt(A,z),c=P*Nt,P&&(S=Math.cos(P),M=Math.sin(P),U=z*S+A*M,dt=X*S+Y*M,A=A*S-z*M,Y=Y*S-X*M,z=U,X=dt),d&&Math.abs(d)+Math.abs(c)>359.9&&(d=c=0,x=180-x),p=$(Math.sqrt(z*z+A*A+E*E)),g=$(Math.sqrt(Y*Y+zt*zt)),P=qt(X,Y),y=Math.abs(P)>2e-4?P*Nt:0,b=xt?1/(xt<0?-xt:xt):0),r.svg&&(U=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!an(yt(t,N)),U&&t.setAttribute("transform",U))),Math.abs(y)>90&&Math.abs(y)<270&&(n?(p*=-1,y+=c<=0?180:-180,c+=c<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||r.uncache,r.x=l-((r.xPercent=l&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-l)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+s,r.y=h-((r.yPercent=h&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+s,r.z=_+s,r.scaleX=$(p),r.scaleY=$(g),r.rotation=$(c)+a,r.rotationX=$(d)+a,r.rotationY=$(x)+a,r.skewX=y+a,r.skewY=v+a,r.transformPerspective=b+s,(r.zOrigin=parseFloat(u.split(" ")[2])||!e&&r.zOrigin||0)&&(i[it]=Ee(u)),r.xOffset=r.yOffset=0,r.force3D=ft.force3D,r.renderTransform=r.svg?wa:en?on:Ta,r.uncache=0,r},Ee=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ge=function(t,e,r){var i=K(e);return $(parseFloat(e)+parseFloat(Dt(t,"x",r+"px",i)))+i},Ta=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,on(t,e)},It="0deg",se="0px",Ft=") ",on=function(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,s=r.x,a=r.y,f=r.z,u=r.rotation,l=r.rotationY,h=r.rotationX,_=r.skewX,p=r.skewY,g=r.scaleX,c=r.scaleY,d=r.transformPerspective,x=r.force3D,y=r.target,v=r.zOrigin,b="",m=x==="auto"&&t&&t!==1||x===!0;if(v&&(h!==It||l!==It)){var w=parseFloat(l)*Qt,O=Math.sin(w),P=Math.cos(w),S;w=parseFloat(h)*Qt,S=Math.cos(w),s=Ge(y,s,O*S*-v),a=Ge(y,a,-Math.sin(w)*-v),f=Ge(y,f,P*S*-v+v)}d!==se&&(b+="perspective("+d+Ft),(i||n)&&(b+="translate("+i+"%, "+n+"%) "),(m||s!==se||a!==se||f!==se)&&(b+=f!==se||m?"translate3d("+s+", "+a+", "+f+") ":"translate("+s+", "+a+Ft),u!==It&&(b+="rotate("+u+Ft),l!==It&&(b+="rotateY("+l+Ft),h!==It&&(b+="rotateX("+h+Ft),(_!==It||p!==It)&&(b+="skew("+_+", "+p+Ft),(g!==1||c!==1)&&(b+="scale("+g+", "+c+Ft),y.style[N]=b||"translate(0, 0)"},wa=function(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,s=r.x,a=r.y,f=r.rotation,u=r.skewX,l=r.skewY,h=r.scaleX,_=r.scaleY,p=r.target,g=r.xOrigin,c=r.yOrigin,d=r.xOffset,x=r.yOffset,y=r.forceCSS,v=parseFloat(s),b=parseFloat(a),m,w,O,P,S;f=parseFloat(f),u=parseFloat(u),l=parseFloat(l),l&&(l=parseFloat(l),u+=l,f+=l),f||u?(f*=Qt,u*=Qt,m=Math.cos(f)*h,w=Math.sin(f)*h,O=Math.sin(f-u)*-_,P=Math.cos(f-u)*_,u&&(l*=Qt,S=Math.tan(u-l),S=Math.sqrt(1+S*S),O*=S,P*=S,l&&(S=Math.tan(l),S=Math.sqrt(1+S*S),m*=S,w*=S)),m=$(m),w=$(w),O=$(O),P=$(P)):(m=h,P=_,w=O=0),(v&&!~(s+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(v=Dt(p,"x",s,"px"),b=Dt(p,"y",a,"px")),(g||c||d||x)&&(v=$(v+g-(g*m+c*O)+d),b=$(b+c-(g*w+c*P)+x)),(i||n)&&(S=p.getBBox(),v=$(v+i/100*S.width),b=$(b+n/100*S.height)),S="matrix("+m+","+w+","+O+","+P+","+v+","+b+")",p.setAttribute("transform",S),y&&(p.style[N]=S)},Sa=function(t,e,r,i,n){var s=360,a=j(n),f=parseFloat(n)*(a&&~n.indexOf("rad")?Nt:1),u=f-i,l=i+u+"deg",h,_;return a&&(h=n.split("_")[1],h==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-360)),h==="cw"&&u<0?u=(u+s*Gr)%s-~~(u/s)*s:h==="ccw"&&u>0&&(u=(u-s*Gr)%s-~~(u/s)*s)),t._pt=_=new rt(t._pt,e,r,i,u,oa),_.e=l,_.u="deg",t._props.push(r),_},ei=function(t,e){for(var r in e)t[r]=e[r];return t},Oa=function(t,e,r){var i=ei({},r._gsap),n="perspective,force3D,transformOrigin,svgOrigin",s=r.style,a,f,u,l,h,_,p,g;i.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),s[N]=e,a=ye(r,1),Xt(r,N),r.setAttribute("transform",u)):(u=getComputedStyle(r)[N],s[N]=e,a=ye(r,1),s[N]=u);for(f in St)u=i[f],l=a[f],u!==l&&n.indexOf(f)<0&&(p=K(u),g=K(l),h=p!==g?Dt(r,f,u,g):parseFloat(u),_=parseFloat(l),t._pt=new rt(t._pt,a,f,h,_-h,ur),t._pt.u=g||0,t._props.push(f));ei(a,i)};et("padding,margin,Width,Radius",function(o,t){var e="Top",r="Right",i="Bottom",n="Left",s=(t<3?[e,r,i,n]:[e+n,e+r,i+r,i+n]).map(function(a){return t<2?o+a:"border"+a+o});Ae[t>1?"border"+o:o]=function(a,f,u,l,h){var _,p;if(arguments.length<4)return _=s.map(function(g){return Tt(a,g,u)}),p=_.join(" "),p.split(_[0]).length===5?_[0]:p;_=(l+"").split(" "),p={},s.forEach(function(g,c){return p[g]=_[c]=_[c]||_[(c-1)/2|0]}),a.init(f,p,h)}});var fn={name:"css",register:cr,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,r,i,n){var s=this._props,a=t.style,f=r.vars.startAt,u,l,h,_,p,g,c,d,x,y,v,b,m,w,O,P;Cr||cr(),this.styles=this.styles||tn(t),P=this.styles.props,this.tween=r;for(c in e)if(c!=="autoRound"&&(l=e[c],!(st[c]&&Xi(c,e,r,i,t,n)))){if(p=typeof l,g=Ae[c],p==="function"&&(l=l.call(r,i,t,n),p=typeof l),p==="string"&&~l.indexOf("random(")&&(l=_e(l)),g)g(this,t,c,l,r)&&(O=1);else if(c.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(c)+"").trim(),l+="",kt.lastIndex=0,kt.test(u)||(d=K(u),x=K(l)),x?d!==x&&(u=Dt(t,c,u,x)+x):d&&(l+=d),this.add(a,"setProperty",u,l,i,n,0,0,c),s.push(c),P.push(c,0,a[c]);else if(p!=="undefined"){if(f&&c in f?(u=typeof f[c]=="function"?f[c].call(r,i,t,n):f[c],j(u)&&~u.indexOf("random(")&&(u=_e(u)),K(u+"")||u==="auto"||(u+=ft.units[c]||K(Tt(t,c))||""),(u+"").charAt(1)==="="&&(u=Tt(t,c))):u=Tt(t,c),_=parseFloat(u),y=p==="string"&&l.charAt(1)==="="&&l.substr(0,2),y&&(l=l.substr(2)),h=parseFloat(l),c in mt&&(c==="autoAlpha"&&(_===1&&Tt(t,"visibility")==="hidden"&&h&&(_=0),P.push("visibility",0,a.visibility),Ct(this,a,"visibility",_?"inherit":"hidden",h?"inherit":"hidden",!h)),c!=="scale"&&c!=="transform"&&(c=mt[c],~c.indexOf(",")&&(c=c.split(",")[0]))),v=c in St,v){if(this.styles.save(c),b||(m=t._gsap,m.renderTransform&&!e.parseTransform||ye(t,e.parseTransform),w=e.smoothOrigin!==!1&&m.smooth,b=this._pt=new rt(this._pt,a,N,0,1,m.renderTransform,m,0,-1),b.dep=1),c==="scale")this._pt=new rt(this._pt,m,"scaleY",m.scaleY,(y?Gt(m.scaleY,y+h):h)-m.scaleY||0,ur),this._pt.u=0,s.push("scaleY",c),c+="X";else if(c==="transformOrigin"){P.push(it,0,a[it]),l=xa(l),m.svg?hr(t,l,0,w,0,this):(x=parseFloat(l.split(" ")[2])||0,x!==m.zOrigin&&Ct(this,m,"zOrigin",m.zOrigin,x),Ct(this,a,c,Ee(u),Ee(l)));continue}else if(c==="svgOrigin"){hr(t,l,1,w,0,this);continue}else if(c in sn){Sa(this,m,c,_,y?Gt(_,y+l):l);continue}else if(c==="smoothOrigin"){Ct(this,m,"smooth",m.smooth,l);continue}else if(c==="force3D"){m[c]=l;continue}else if(c==="transform"){Oa(this,l,t);continue}}else c in a||(c=re(c)||c);if(v||(h||h===0)&&(_||_===0)&&!aa.test(l)&&c in a)d=(u+"").substr((_+"").length),h||(h=0),x=K(l)||(c in ft.units?ft.units[c]:d),d!==x&&(_=Dt(t,c,u,x)),this._pt=new rt(this._pt,v?m:a,c,_,(y?Gt(_,y+h):h)-_,!v&&(x==="px"||c==="zIndex")&&e.autoRound!==!1?ua:ur),this._pt.u=x||0,d!==x&&x!=="%"&&(this._pt.b=u,this._pt.r=fa);else if(c in a)va.call(this,t,c,u,y?y+l:l);else if(c in t)this.add(t,c,u||t[c],y?y+l:l,i,n);else if(c!=="parseTransform"){yr(c,l);continue}v||(c in a?P.push(c,0,a[c]):typeof t[c]=="function"?P.push(c,2,t[c]()):P.push(c,1,u||t[c])),s.push(c)}}O&&Ki(this)},render:function(t,e){if(e.tween._time||!Mr())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:Tt,aliases:mt,getSetter:function(t,e,r){var i=mt[e];return i&&i.indexOf(",")<0&&(e=i),e in St&&e!==it&&(t._gsap.x||Tt(t,"x"))?r&&Wr===r?e==="scale"?da:ha:(Wr=r||{})&&(e==="scale"?_a:pa):t.style&&!pr(t.style[e])?la:~e.indexOf("-")?ca:Or(t,e)},core:{_removeProperty:Xt,_getMatrix:Rr}};nt.utils.checkPrefix=re;nt.core.getStyleSaver=tn;(function(o,t,e,r){var i=et(o+","+t+","+e,function(n){St[n]=1});et(t,function(n){ft.units[n]="deg",sn[n]=1}),mt[i[13]]=o+","+t,et(r,function(n){var s=n.split(":");mt[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");et("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ft.units[o]="px"});nt.registerPlugin(fn);var Pa=nt.registerPlugin(fn)||nt;Pa.core.Tween;export{ka as F,Pa as g};
