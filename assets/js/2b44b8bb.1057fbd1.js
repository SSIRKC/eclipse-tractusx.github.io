"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[94950],{28128:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var a=s(87462),o=(s(67294),s(3905)),l=s(26389),n=s(94891),r=s(75190),i=s(47507),p=s(24310),c=s(63303),m=(s(75035),s(85162));const u={id:"complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",sidebar_label:"complete",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process Control Api"],description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",operationId:"complete",parameters:[{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"post",path:"/transferprocess/{processId}/complete",servers:[{url:"/"}],info:{title:"control-api",description:"REST API documentation for the control-api",version:"0.1.3-SNAPSHOT"},postman:{name:"complete",description:{content:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",type:"text/plain"},url:{path:["transferprocess",":processId","complete"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-api",custom_edit_url:null},d=void 0,h={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/complete",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/complete.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/complete",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/complete",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",sidebar_label:"complete",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process Control Api"],description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",operationId:"complete",parameters:[{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"post",path:"/transferprocess/{processId}/complete",servers:[{url:"/"}],info:{title:"control-api",description:"REST API documentation for the control-api",version:"0.1.3-SNAPSHOT"},postman:{name:"complete",description:{content:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",type:"text/plain"},url:{path:["transferprocess",":processId","complete"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-api",custom_edit_url:null},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-api"},next:{title:"delete",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/delete"}},y={},f=[{value:"complete",id:"complete",level:2}],k={toc:f};function v(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"complete"},"complete"),(0,o.kt)("p",null,"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(l.Z,{mdxType:"ApiTabs"},(0,o.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Request was malformed, e.g. id was null")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(i.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);