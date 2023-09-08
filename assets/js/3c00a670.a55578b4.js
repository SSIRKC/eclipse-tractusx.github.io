"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[90879],{27818:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>g,toc:()=>f});var a=i(87462),s=(i(67294),i(3905)),n=i(26389),r=i(94891),l=i(75190),p=i(47507),o=i(24310),d=i(63303),m=(i(75035),i(85162));const c={id:"get-sites",title:"Get site partners of a legal entity",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",sidebar_label:"Get site partners of a legal entity",hide_title:!0,hide_table_of_contents:!0,api:{tags:["legal-entity-controller"],description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",operationId:"getSites",parameters:[{name:"bpnl",in:"path",description:"Bpnl value",required:!0,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"The sites for the specified bpnl",content:{"application/json":{schema:{type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{type:"object",properties:{bpns:{type:"string",description:"Business Partner Number, main identifier value for sites"},name:{type:"string",description:"Site name"},states:{type:"array",items:{type:"object",properties:{description:{type:"string",description:"Description of the status"},validFrom:{type:"string",description:"Since when the status is/was valid",format:"date-time"},validTo:{type:"string",description:"Until the status was valid, if applicable",format:"date-time"},type:{type:"object",properties:{technicalKey:{type:"string",enum:["ACTIVE","INACTIVE"]},name:{type:"string"}},description:"Named type uniquely identified by its technical key"}},description:"Status record of a site"}},bpnLegalEntity:{type:"string",description:"Business Partner Number of the related legal entity"},createdAt:{type:"string",description:"The timestamp the business partner data was created",format:"date-time"},updatedAt:{type:"string",description:"The timestamp the business partner data was last updated",format:"date-time"}},description:"Site of a legal entity"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpnl"}},method:"get",path:"/api/catena/legal-entities/{bpnl}/sites",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0-SNAPSHOT"},postman:{name:"Get site partners of a legal entity",description:{content:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",type:"text/plain"},url:{path:["api","catena","legal-entities",":bpnl","sites"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[{disabled:!1,description:{content:"(Required) Bpnl value",type:"text/plain"},type:"any",value:"",key:"bpnl"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-sites",id:"version-23.09/kits/Business Partner Kit/Software Development View/Pool Api/get-sites",title:"Get site partners of a legal entity",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",source:"@site/docs-kits_versioned_docs/version-23.09/kits/Business Partner Kit/Software Development View/Pool Api/get-sites.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-sites",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-sites",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"get-sites",title:"Get site partners of a legal entity",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",sidebar_label:"Get site partners of a legal entity",hide_title:!0,hide_table_of_contents:!0,api:{tags:["legal-entity-controller"],description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",operationId:"getSites",parameters:[{name:"bpnl",in:"path",description:"Bpnl value",required:!0,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"The sites for the specified bpnl",content:{"application/json":{schema:{type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{type:"object",properties:{bpns:{type:"string",description:"Business Partner Number, main identifier value for sites"},name:{type:"string",description:"Site name"},states:{type:"array",items:{type:"object",properties:{description:{type:"string",description:"Description of the status"},validFrom:{type:"string",description:"Since when the status is/was valid",format:"date-time"},validTo:{type:"string",description:"Until the status was valid, if applicable",format:"date-time"},type:{type:"object",properties:{technicalKey:{type:"string",enum:["ACTIVE","INACTIVE"]},name:{type:"string"}},description:"Named type uniquely identified by its technical key"}},description:"Status record of a site"}},bpnLegalEntity:{type:"string",description:"Business Partner Number of the related legal entity"},createdAt:{type:"string",description:"The timestamp the business partner data was created",format:"date-time"},updatedAt:{type:"string",description:"The timestamp the business partner data was last updated",format:"date-time"}},description:"Site of a legal entity"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpnl"}},method:"get",path:"/api/catena/legal-entities/{bpnl}/sites",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0-SNAPSHOT"},postman:{name:"Get site partners of a legal entity",description:{content:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",type:"text/plain"},url:{path:["api","catena","legal-entities",":bpnl","sites"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[{disabled:!1,description:{content:"(Required) Bpnl value",type:"text/plain"},type:"any",value:"",key:"bpnl"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Get legal entity business partner by identifier",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-entity"},next:{title:"Get address partners of a legal entity",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-addresses"}},y={},f=[{value:"Get site partners of a legal entity",id:"get-site-partners-of-a-legal-entity",level:2}],b={toc:f};function h(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-site-partners-of-a-legal-entity"},"Get site partners of a legal entity"),(0,s.kt)("p",null,"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"bpnl",in:"path",description:"Bpnl value",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The sites for the specified bpnl")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:"Total number of all results in all pages",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:"Total number pages",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:"Current page number",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:"Number of results in the page",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Collection of results in the page")),(0,s.kt)(o.Z,{collapsible:!1,name:"bpns",required:!1,deprecated:void 0,schemaDescription:"Business Partner Number, main identifier value for sites",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"Site name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"states"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"description",required:!1,deprecated:void 0,schemaDescription:"Description of the status",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"validFrom",required:!1,deprecated:void 0,schemaDescription:"Since when the status is/was valid",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"validTo",required:!1,deprecated:void 0,schemaDescription:"Until the status was valid, if applicable",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Named type uniquely identified by its technical key")),(0,s.kt)(o.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ACTIVE`, `INACTIVE`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(o.Z,{collapsible:!1,name:"bpnLegalEntity",required:!1,deprecated:void 0,schemaDescription:"Business Partner Number of the related legal entity",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:"The timestamp the business partner data was created",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"updatedAt",required:!1,deprecated:void 0,schemaDescription:"The timestamp the business partner data was last updated",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "bpns": "string",\n      "name": "string",\n      "states": [\n        {\n          "description": "string",\n          "validFrom": "2023-06-26",\n          "validTo": "2023-06-26",\n          "type": {\n            "technicalKey": "ACTIVE",\n            "name": "string"\n          }\n        }\n      ],\n      "bpnLegalEntity": "string",\n      "createdAt": "2023-06-26",\n      "updatedAt": "2023-06-26"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"On malformed pagination request")),(0,s.kt)("div",null)),(0,s.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"No business partner found for specified bpnl")),(0,s.kt)("div",null)))))}h.isMDXComponent=!0}}]);