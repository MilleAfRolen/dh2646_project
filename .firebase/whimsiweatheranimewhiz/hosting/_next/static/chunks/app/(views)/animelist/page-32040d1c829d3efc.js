(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{3983:function(e,t,n){Promise.resolve().then(n.bind(n,9742))},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let r=n(1024),o=n(7929),a=n(2637),i=n(413),s=r._(n(9950)),l=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=i.Image},5600:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2265);async function o(e){try{let t=await fetch("https://api.jikan.moe/v4"+e),n=await t.json();return n}catch(e){console.error("Error fetching data:",e)}}function a(){let[e,t]=(0,r.useState)(null);return console.log("wtf"),(0,r.useEffect)(()=>{console.log("bruh"),async function(){try{let e=await o("/anime?q=&sfw");t(e.data)}catch(e){console.error("Error fetching data:",e)}}()},[]),{animeData:e}}},9742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),o=n(5600),a=n(1396),i=n.n(a),s=n(6691),l=n.n(s);function c(e){let{animeData:t}=e;return console.log(t),(0,r.jsxs)("div",{className:"py-2 px-20 z-10 bg-[#e5e5e5]",children:[(0,r.jsx)("h1",{className:"text-center text-6xl font-bold pt-18",children:" Anime List"}),t?(0,r.jsx)("div",{className:"grid grid-cols-4 gap-x-12 gap-y-6 items-start pt-4",children:t.map((e,t)=>(0,r.jsx)("div",{children:(0,r.jsxs)(i(),{href:"/animedetails/".concat(e.mal_id),children:[(0,r.jsx)(l(),{className:"h-96 w-full object-cover rounded-3xl border border-black shadow-gray-800 shadow-2xl transition duration-500 ease-in-out transform hover:scale-105",src:e.images.jpg.large_image_url,height:0,width:0,sizes:"100vw",priority:!0,alt:e.title}),(0,r.jsx)("p",{className:"text-2xs font-bold pt-4 text-center",children:e.title})]})},t))}):(0,r.jsx)("p",{children:"Loading..."})]})}function u(e){let{animeData:t}=e;return console.log(t),(0,r.jsx)(c,{animeData:t})}function f(){let e=(0,o.Z)();return(0,r.jsx)(u,{animeData:e.animeData})}},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,l={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:l,_owner:i.current}}t.jsx=l,t.jsxs=l},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(679)},1396:function(e,t,n){e.exports=n(8326)}},function(e){e.O(0,[326,413,971,472,744],function(){return e(e.s=3983)}),_N_E=e.O()}]);