"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[17410],{52916:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var a=s(87462),o=(s(67294),s(3905)),l=s(26389),c=s(94891),r=s(75190),i=s(47507),n=s(24310),p=s(63303),d=(s(75035),s(85162));const u={id:"complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",sidebar_label:"complete",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process Control Api"],description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",operationId:"complete",parameters:[{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/transferprocess/{processId}/complete",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"complete",description:{content:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",type:"text/plain"},url:{path:["transferprocess",":processId","complete"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},m=void 0,h={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/complete",id:"version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/complete.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/complete",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/complete",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",sidebar_label:"complete",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process Control Api"],description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",operationId:"complete",parameters:[{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/transferprocess/{processId}/complete",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"complete",description:{content:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",type:"text/plain"},url:{path:["transferprocess",":processId","complete"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"checkHealth",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/check-health"},next:{title:"createAsset_1",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-asset-1"}},y={},f=[{value:"complete",id:"complete",level:2}],v={toc:f};function k(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"complete"},"complete"),(0,o.kt)("p",null,"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(l.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Request was malformed, e.g. id was null")),(0,o.kt)("div",null,(0,o.kt)(c.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema"),(0,o.kt)("span",{style:{opacity:"0.6"}}," array")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(n.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(n.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(n.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(i.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);