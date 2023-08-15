"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[64195],{44147:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),i=a(39960),l=a(87357),o=a(55819),s=a(94054),r=a(93433);const c={kits_gallery:"kits_gallery_onRx",container:"container_jCtP",title_container:"title_container_hU45",filters_container:"filters_container_bOvm",button:"button_mF0P",gallery_container:"gallery_container_yJQG",gallery_item:"gallery_item_wv_l",item_img:"item_img_N7d4",no_match:"no_match_sGcE"};function m(e){let{itemsArray:t,title:a,description:m}=e;const[d,u]=(0,n.useState)("All Domains"),[p,_]=(0,n.useState)(t),[g,E]=(0,n.useState)("asc");(0,n.useEffect)((()=>{const e=[...t].sort(((e,t)=>e.name.localeCompare(t.name)));_(e)}),[]);const f=()=>{const e=[...p];"asc"===g?(e.sort(((e,t)=>t.name.localeCompare(e.name))),E("desc")):(e.sort(((e,t)=>e.name.localeCompare(t.name))),E("asc")),_(e)};return n.createElement("section",{className:c.kits_gallery},n.createElement("div",{className:c.container},n.createElement("div",{className:c.title_container},n.createElement("h2",{className:"title-h2"},a),n.createElement("p",{className:"subtitle-h3"},m)),n.createElement("div",{className:c.filters_container},n.createElement(l.Z,null,n.createElement(s.Z,{size:"small"},n.createElement(r.Z,{labelId:"domain-label",id:"domain-options",value:d,onChange:e=>{const a=e.target.value;u(a);let n=t;"All Domains"!==a&&(n=t.filter((e=>e.domain===a)));let i=n;"asc"===g?i.sort(((e,t)=>e.name.localeCompare(t.name))):i.sort(((e,t)=>t.name.localeCompare(e.name))),_(i)},sx:{color:"#fff",padding:"0 0.5rem","& .MuiSvgIcon-root":{color:"#faa023"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#faa023"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#c37304"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#ed8c05"}},inputProps:{MenuProps:{MenuListProps:{sx:{backgroundColor:"#1f1f1f",color:"#fff"}}}}},n.createElement(o.Z,{value:"All Domains"},"All Domains"),n.createElement(o.Z,{value:"Network & Core Services"},"Network & Core Services"),n.createElement(o.Z,{value:"PLM / Quality"},"PLM / Quality"),n.createElement(o.Z,{value:"Sustainability"},"Sustainability"),n.createElement(o.Z,{value:"Resiliency"},"Resiliency")))),n.createElement("div",{className:c.button_container},"asc"===g?n.createElement("button",{className:c.button,onClick:f},"A-Z \u2193"):n.createElement("button",{className:c.button,onClick:f},"Z-A \u2191"))),n.createElement("div",{className:c.gallery_container},0===p.length?n.createElement("p",{className:c.no_match},"NO MATCH FOUND..."):p.map(((e,t)=>n.createElement("div",{key:t,className:c.gallery_item},n.createElement(i.Z,{to:e.pageRoute,className:c.gallery_link},n.createElement("img",{src:e.img,className:c.item_img}))))))))}},46710:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(67294),i=a(52263),l=a(67418),o=a(39960),s=a(87462),r=a(46066);const c=[{date:"10.02.2023",title:"Eclipse Tractus-X Developer Portal is LIVE!",blogLink:"/blog/portal-is-live"},{date:"26.05.2023",title:"Tractus-X 3.1 is available now",blogLink:"/blog/new-release-3-1-0"}],m={news_ticker:"news_ticker_EymU",container:"container_XTRf",button_container:"button_container_ZrKt",button:"button_TBEJ",carousel_container:"carousel_container_S1kG",slider_item:"slider_item_Ey4k",date:"date__dYN",introduction:"introduction_g0nv",arrow:"arrow_EjwB",arrow_container:"arrow_container_DeUQ"};function d(){const e=e=>{let{date:t,title:a,blogLink:i}=e;return n.createElement(o.Z,{className:m.slider_item,to:i},n.createElement("div",{className:m.date},t),n.createElement("div",{className:m.introduction},n.createElement("strong",null,a)),n.createElement("div",{className:m.arrow_container},n.createElement("div",{className:m.arrow},"->")))};return n.createElement("section",{className:m.news_ticker},n.createElement("div",{className:m.container},n.createElement("div",{className:m.button_container},n.createElement(o.Z,{className:m.button,to:"/blog"},"News")),n.createElement("div",{className:m.carousel_container},n.createElement(r.Z,(0,s.Z)({},{dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,speed:3e3,autoplaySpeed:6e3},{className:m.slider}),c.map(((t,a)=>n.createElement(e,(0,s.Z)({key:a},t))))))))}const u="heroBanner_IPoZ",p="container_Fwk4",_="title__Rvb",g="subtitle_qDyw",E="subtitle_box_n37J",f="btn_container_tPJk";function b(){return n.createElement("header",{className:u},n.createElement("div",{className:p},n.createElement("h1",{className:_},"Welcome to ",n.createElement("br",null),"Eclipse Tractus-X"),n.createElement("div",{className:E},n.createElement("p",{className:g},"We support service and app provider in developing applications for the Catena-X ecosystem. Find documentation, APIs, SDKs and more.")),n.createElement("div",{className:f},n.createElement(o.Z,{className:"button",to:"/developer"},"Our Dev Kits"))),n.createElement(d,null))}const h=a.p+"assets/images/about-us-card-minified-4f4ad7e73118b6fa922a2ca5e8cd5d32.png",v="about_us_sIX3",N="container_tT5G",k="img_container_BDGj",w="img_ULpw",y="information_container_AUSI";function C(){return n.createElement("section",{className:v},n.createElement("div",{className:N},n.createElement("div",{className:k},n.createElement("img",{className:w,src:h})),n.createElement("div",{className:y},n.createElement("h2",{className:"title-h2"},"About Eclipse Tractus-X"),n.createElement("p",{className:"subtitle-h3"},"Background about Eclipse Tractus-X, license and legal information."),n.createElement("div",null,n.createElement(o.Z,{className:"button",to:"/aboutus"},"About Tractus-X")))))}var Z=a(44679),T=a(38895),I=a(22797),A=a(15861),K=a(23508);const S=[{id:1,question:"Why are there KITs and where does this naming comes from?",answer:"KIT means \u201cKeep It Together\u201d - Catena-X KITs aim to accelerate the development of Catena-X applications and services and contribute significantly to the rapid scaling of the Catena-X ecosystem."},{id:2,question:"Are there more KITs coming?",answer:"There are the first three lighthouse KITs available. More and more KITs will come from different domains."},{id:3,question:"Does every KIT contain the same things and follow the same structure?",answer:"KITs are guided with three different views (adoption, develop and operation) but not every KIT will provide the same objectives. Some will be more focused on the adoption view with a vision & mission, semantic model .. and other KITs will have a different target-group like developers - so there will be more focus on the technical specification."}],x="faqs_Cby0",P="container_Zg83",D="title_container_BpR_",M="accordion_box_PIQ3",O="accordion_F8I5",X="btn_container_eq9r";function B(){const[e,t]=(0,n.useState)([]),a=e.length===S.length;return n.createElement("section",{className:x},n.createElement("div",{className:P},n.createElement("div",{className:D},n.createElement("h2",{className:"title-h2"},"FAQs")),n.createElement("div",{className:M},S.map((a=>{return n.createElement(Z.Z,{key:a.id,className:O,expanded:e.includes(a.id),onChange:(i=a.id,(a,n)=>{t(n?[...e,i]:e.filter((e=>e!==i)))}),sx:{"&:before":{display:"none"},backgroundColor:"transparent"},elevation:0},n.createElement(T.Z,{expandIcon:n.createElement(K.Z,{sx:{color:"#FAA023"}}),"aria-controls":`panel${a.id}-content`,id:`panel${a.id}-header`,sx:{color:"#fff",paddingBottom:"1rem"}},n.createElement(A.Z,{sx:{fontFamily:"Manrope, sans-serif",fontSize:"18px",fontWeight:"bold",lineHeight:"26px",letterSpacing:"0.6px"}},a.question)),n.createElement(I.Z,{sx:{color:"#fff",paddingBottom:"2rem"}},n.createElement(A.Z,{sx:{fontFamily:"Manrope, sans-serif",fontSize:"14px",lineHeight:"22px",letterSpacing:"-0.4px"}},a.answer)));var i}))),n.createElement("div",{className:X},n.createElement("button",{className:"button",onClick:()=>{if(e.length===S.length)t([]);else{const e=S.map((e=>e.id));t(e)}}},a?"Close All":"Open All"))))}var R=a(44147),F=a(39418);function L(){const{siteConfig:e}=(0,i.Z)();return n.createElement(l.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(b,null),n.createElement("main",null,n.createElement(C,null),n.createElement(R.Z,{itemsArray:F.h,title:"Our Kits",description:"Unlock the power of kits. Browse the latest kits, their documentation, including tutorials,sample code, articles, and API reference."}),n.createElement(B,null)))}},39418:(e,t,a)=>{a.d(t,{h:()=>n});const n=[{id:1,name:"Business Partner Kit",domain:"Network & Core Services",img:a.p+"assets/images/bpkit-4d5d7c5edbe3f3e161ad6c0dfcaac5ee.png",pageRoute:"docs-kits/kits/Business Partner Kit/Adoption View"},{id:2,name:"Data Chain Kit",domain:"Network & Core Services",img:a.p+"assets/images/datachainkit-bc7e2d916ddf729220d49741f8aa8a6a.png",pageRoute:"docs-kits/kits/Data Chain Kit/Adoption View"},{id:3,name:"Connector Kit",domain:"Network & Core Services",img:a.p+"assets/images/connectorkit-min-81d8f35a17ffe4aee1e2a4a8b3bbe42a.png",pageRoute:"docs-kits/kits/tractusx-edc/docs/kit/adoption-view/Adoption%20View"},{id:4,name:"Traceability Kit",domain:"PLM / Quality",img:a.p+"assets/images/traceabilitykit-38d487512ce71cbd8982743797f7c99e.png",pageRoute:"docs-kits/kits/Traceability%20Kit/Adoption%20View%20Traceability%20Kit"}]}}]);