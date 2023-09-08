"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[63333],{6949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var l=a(87462),i=(a(67294),a(3905)),s=a(26389),r=a(94891),p=(a(75190),a(47507)),n=a(24310),m=a(63303),o=(a(75035),a(85162));const c={id:"query-all-agreements",title:"queryAllAgreements",description:"Gets all contract agreements according to a particular query",sidebar_label:"queryAllAgreements",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Agreement"],description:"Gets all contract agreements according to a particular query",operationId:"queryAllAgreements",requestBody:{content:{"*/*":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/QuerySpec"},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Criterion"},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"Criterion",operandLeft:"fieldName",operator:"=",operandRight:"some value"}}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}}}},responses:{200:{description:"The contract agreements matching the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/ContractAgreement"},assetId:{type:"string",example:null},consumerId:{type:"string",example:null},contractSigningDate:{type:"integer",format:"int64",example:null},policy:{type:"object",properties:{"@type":{type:"string",example:null,enum:["SET","OFFER","CONTRACT"]},assignee:{type:"string",example:null},assigner:{type:"string",example:null},extensibleProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},inheritsFrom:{type:"string",example:null},obligations:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},parentPermission:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},duties:{type:"array",example:null,items:"circular()"},target:{type:"string",example:null}},example:null},target:{type:"string",example:null}},example:null}},permissions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},duties:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},parentPermission:"circular()",target:{type:"string",example:null}},example:null}},target:{type:"string",example:null}},example:null}},prohibitions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},target:{type:"string",example:null}},example:null}},target:{type:"string",example:null}},example:null},providerId:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"https://w3id.org/edc/v0.0.1/ns/ContractAgreement","@id":"negotiation-id",providerId:"provider-id",consumerId:"consumer-id",assetId:"asset-id",contractSigningDate:1688465655,policy:{"@context":"http://www.w3.org/ns/odrl.jsonld","@type":"Set","@id":"offer-id",permission:[{target:"asset-id",action:"display"}]}}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/v2/contractagreements/request",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"query All Agreements",description:{content:"Gets all contract agreements according to a particular query",type:"text/plain"},url:{path:["v2","contractagreements","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"*/*"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""'}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},d=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-all-agreements",id:"version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-all-agreements",title:"queryAllAgreements",description:"Gets all contract agreements according to a particular query",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-all-agreements.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-all-agreements",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-all-agreements",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"query-all-agreements",title:"queryAllAgreements",description:"Gets all contract agreements according to a particular query",sidebar_label:"queryAllAgreements",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Agreement"],description:"Gets all contract agreements according to a particular query",operationId:"queryAllAgreements",requestBody:{content:{"*/*":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/QuerySpec"},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Criterion"},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"Criterion",operandLeft:"fieldName",operator:"=",operandRight:"some value"}}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}}}},responses:{200:{description:"The contract agreements matching the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/ContractAgreement"},assetId:{type:"string",example:null},consumerId:{type:"string",example:null},contractSigningDate:{type:"integer",format:"int64",example:null},policy:{type:"object",properties:{"@type":{type:"string",example:null,enum:["SET","OFFER","CONTRACT"]},assignee:{type:"string",example:null},assigner:{type:"string",example:null},extensibleProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},inheritsFrom:{type:"string",example:null},obligations:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},parentPermission:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},duties:{type:"array",example:null,items:"circular()"},target:{type:"string",example:null}},example:null},target:{type:"string",example:null}},example:null}},permissions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},duties:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},parentPermission:"circular()",target:{type:"string",example:null}},example:null}},target:{type:"string",example:null}},example:null}},prohibitions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},target:{type:"string",example:null}},example:null}},target:{type:"string",example:null}},example:null},providerId:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"https://w3id.org/edc/v0.0.1/ns/ContractAgreement","@id":"negotiation-id",providerId:"provider-id",consumerId:"consumer-id",assetId:"asset-id",contractSigningDate:1688465655,policy:{"@context":"http://www.w3.org/ns/odrl.jsonld","@type":"Set","@id":"offer-id",permission:[{target:"asset-id",action:"display"}]}}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/v2/contractagreements/request",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"query All Agreements",description:{content:"Gets all contract agreements according to a particular query",type:"text/plain"},url:{path:["v2","contractagreements","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"*/*"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""'}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"put",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/put"},next:{title:"queryAllContractDefinitions",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-all-contract-definitions"}},y={},g=[{value:"queryAllAgreements",id:"queryallagreements",level:2}],x={toc:g};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"queryallagreements"},"queryAllAgreements"),(0,i.kt)("p",null,"Gets all contract agreements according to a particular query"),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"*/*",value:"*/*-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"filterExpression"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"operandLeft",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"operandRight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"operator",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"sortField",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"sortOrder",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ASC`, `DESC`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The contract agreements matching the query")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"assetId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"consumerId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"contractSigningDate",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"policy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`SET`, `OFFER`, `CONTRACT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"extensibleProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(n.Z,{collapsible:!1,name:"inheritsFrom",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"obligations"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"action"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraint"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"consequence",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraints"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"parentPermission"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"action"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraint"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraints"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!1,name:"duties",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"permissions"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"action"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraint"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraints"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"duties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"action"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraint"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"consequence",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraints"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!1,name:"parentPermission",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"prohibitions"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"action"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraint"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"constraints"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(n.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"providerId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request body was malformed")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);