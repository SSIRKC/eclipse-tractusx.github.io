"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3763],{87670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var s=a(87462),l=(a(67294),a(3905)),i=a(26389),n=a(94891),m=a(75190),p=a(47507),r=a(24310),o=a(63303),d=(a(75035),a(85162));const c={id:"get-all-assets",title:"getAllAssets",description:"Gets all assets according to a particular query",sidebar_label:"getAllAssets",hide_title:!0,hide_table_of_contents:!0,api:{deprecated:!0,description:"Gets all assets according to a particular query",operationId:"getAllAssets",parameters:[{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"filter",schema:{type:"string",example:null}},{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},{in:"query",name:"sortField",schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},title:"AssetResponseDto"}}}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request body was malformed"}},tags:["Asset"],method:"get",path:"/assets",info:{title:"EDC Asset API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get All Assets",description:{content:"Gets all assets according to a particular query",type:"text/plain"},url:{path:["assets"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"offset",value:""},{disabled:!1,key:"limit",value:""},{disabled:!1,key:"filter",value:""},{disabled:!1,key:"sort",value:""},{disabled:!1,key:"sortField",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/edc-asset-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-all-assets",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-all-assets",title:"getAllAssets",description:"Gets all assets according to a particular query",source:"@site/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-all-assets.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-all-assets",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-all-assets",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-assets",title:"getAllAssets",description:"Gets all assets according to a particular query",sidebar_label:"getAllAssets",hide_title:!0,hide_table_of_contents:!0,api:{deprecated:!0,description:"Gets all assets according to a particular query",operationId:"getAllAssets",parameters:[{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"filter",schema:{type:"string",example:null}},{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},{in:"query",name:"sortField",schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},title:"AssetResponseDto"}}}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request body was malformed"}},tags:["Asset"],method:"get",path:"/assets",info:{title:"EDC Asset API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get All Assets",description:{content:"Gets all assets according to a particular query",type:"text/plain"},url:{path:["assets"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"offset",value:""},{disabled:!1,key:"limit",value:""},{disabled:!1,key:"filter",value:""},{disabled:!1,key:"sort",value:""},{disabled:!1,key:"sortField",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/edc-asset-api",custom_edit_url:null},sidebar:"kits",previous:{title:"createAsset",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/create-asset"},next:{title:"getAssetDataAddress",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-asset-data-address"}},g={},k=[{value:"getAllAssets",id:"getallassets",level:2}],x={toc:k};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getallassets"},"getAllAssets"),(0,l.kt)("admonition",{title:"deprecated",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,l.kt)("p",null,"Gets all assets according to a particular query"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Query Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(m.Z,{className:"paramsItem",param:{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},mdxType:"ParamsItem"}),(0,l.kt)(m.Z,{className:"paramsItem",param:{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},mdxType:"ParamsItem"}),(0,l.kt)(m.Z,{className:"paramsItem",param:{in:"query",name:"filter",schema:{type:"string",example:null}},mdxType:"ParamsItem"}),(0,l.kt)(m.Z,{className:"paramsItem",param:{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},mdxType:"ParamsItem"}),(0,l.kt)(m.Z,{className:"paramsItem",param:{in:"query",name:"sortField",schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(r.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:null},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"properties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request body was malformed")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);