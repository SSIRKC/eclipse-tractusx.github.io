"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[4827],{44687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),r=a(26389),s=a(94891),o=a(75190),l=a(47507),d=a(24310),m=a(63303),p=(a(75035),a(85162));const c={id:"get-all-contract-definitions",title:"getAllContractDefinitions",description:"Returns all contract definitions according to a query",sidebar_label:"getAllContractDefinitions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Definition"],description:"Returns all contract definitions according to a query",operationId:"getAllContractDefinitions",parameters:[{name:"offset",in:"query",required:!1,style:"form",explode:!0,schema:{type:"integer",format:"int32"}},{name:"limit",in:"query",required:!1,style:"form",explode:!0,schema:{type:"integer",format:"int32"}},{name:"filter",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string"}},{name:"sort",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",enum:["ASC","DESC"]}},{name:"sortField",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{accessPolicyId:{type:"string"},contractPolicyId:{type:"string"},createdAt:{type:"integer",format:"int64"},criteria:{type:"array",items:{required:["operandLeft","operator"],type:"object",properties:{operandLeft:{type:"object"},operandRight:{type:"object"},operator:{type:"string"}}}},id:{type:"string"},validity:{type:"integer",format:"int64"}}}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},deprecated:!0,method:"get",path:"/contractdefinitions",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"get All Contract Definitions",description:{content:"Returns all contract definitions according to a query",type:"text/plain"},url:{path:["contractdefinitions"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"offset",value:""},{disabled:!1,key:"limit",value:""},{disabled:!1,key:"filter",value:""},{disabled:!1,key:"sort",value:""},{disabled:!1,key:"sortField",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/product-edc/docs/kit/development-view/openAPI/management-api/get-all-contract-definitions",id:"kits/product-edc/docs/kit/development-view/openAPI/management-api/get-all-contract-definitions",title:"getAllContractDefinitions",description:"Returns all contract definitions according to a query",source:"@site/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-all-contract-definitions.api.mdx",sourceDirName:"kits/product-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-all-contract-definitions",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-all-contract-definitions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-contract-definitions",title:"getAllContractDefinitions",description:"Returns all contract definitions according to a query",sidebar_label:"getAllContractDefinitions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Definition"],description:"Returns all contract definitions according to a query",operationId:"getAllContractDefinitions",parameters:[{name:"offset",in:"query",required:!1,style:"form",explode:!0,schema:{type:"integer",format:"int32"}},{name:"limit",in:"query",required:!1,style:"form",explode:!0,schema:{type:"integer",format:"int32"}},{name:"filter",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string"}},{name:"sort",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",enum:["ASC","DESC"]}},{name:"sortField",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{accessPolicyId:{type:"string"},contractPolicyId:{type:"string"},createdAt:{type:"integer",format:"int64"},criteria:{type:"array",items:{required:["operandLeft","operator"],type:"object",properties:{operandLeft:{type:"object"},operandRight:{type:"object"},operator:{type:"string"}}}},id:{type:"string"},validity:{type:"integer",format:"int64"}}}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},deprecated:!0,method:"get",path:"/contractdefinitions",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"get All Contract Definitions",description:{content:"Returns all contract definitions according to a query",type:"text/plain"},url:{path:["contractdefinitions"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"offset",value:""},{disabled:!1,key:"limit",value:""},{disabled:!1,key:"filter",value:""},{disabled:!1,key:"sort",value:""},{disabled:!1,key:"sortField",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getAllAssets",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-all-assets"},next:{title:"getAllPolicies",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-all-policies"}},g={},f=[{value:"getAllContractDefinitions",id:"getallcontractdefinitions",level:2}],v={toc:f};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"getallcontractdefinitions"},"getAllContractDefinitions"),(0,n.kt)("admonition",{title:"deprecated",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,n.kt)("p",null,"Returns all contract definitions according to a query"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"offset",in:"query",required:!1,style:"form",explode:!0,schema:{type:"integer",format:"int32"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",required:!1,style:"form",explode:!0,schema:{type:"integer",format:"int32"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"filter",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"sort",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",enum:["ASC","DESC"]}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"sortField",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"accessPolicyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"contractPolicyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"criteria"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"operandLeft",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"operandRight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"operator",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"validity",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'[\n  {\n    "accessPolicyId": "string",\n    "contractPolicyId": "string",\n    "createdAt": 0,\n    "criteria": [\n      {\n        "operandLeft": {},\n        "operandRight": {},\n        "operator": "string"\n      }\n    ],\n    "id": "string",\n    "validity": 0\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request was malformed")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);