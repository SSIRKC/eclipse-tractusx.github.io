"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5058],{61213:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>y,toc:()=>h});var a=s(87462),l=(s(67294),s(3905)),n=s(26389),r=s(94891),i=s(75190),o=s(47507),p=s(24310),m=s(63303),c=(s(75035),s(85162));const u={id:"terminate-transfer-process",title:"terminateTransferProcess",description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"terminateTransferProcess",hide_title:!0,hide_table_of_contents:!0,api:{description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"terminateTransferProcess",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{reason:{type:"string",example:null}},required:["reason"],title:"TerminateTransferDto"}}}},responses:{200:{description:"Request to cancel the transfer process was successfully received",links:{"poll-state":{operationId:"getTransferProcessState"}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"A contract negotiation with the given ID does not exist"},409:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Could not terminate transfer process, because it is already completed or terminated."}},tags:["Transfer Process"],method:"post",path:"/transferprocess/{id}/terminate",jsonRequestBodyExample:null,info:{title:"EDC Transfer Process API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"terminate Transfer Process",description:{content:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["transferprocess",":id","terminate"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/edc-transfer-process-api",custom_edit_url:null},d=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process",title:"terminateTransferProcess",description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",source:"@site/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"terminate-transfer-process",title:"terminateTransferProcess",description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"terminateTransferProcess",hide_title:!0,hide_table_of_contents:!0,api:{description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"terminateTransferProcess",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{reason:{type:"string",example:null}},required:["reason"],title:"TerminateTransferDto"}}}},responses:{200:{description:"Request to cancel the transfer process was successfully received",links:{"poll-state":{operationId:"getTransferProcessState"}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"A contract negotiation with the given ID does not exist"},409:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Could not terminate transfer process, because it is already completed or terminated."}},tags:["Transfer Process"],method:"post",path:"/transferprocess/{id}/terminate",jsonRequestBodyExample:null,info:{title:"EDC Transfer Process API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"terminate Transfer Process",description:{content:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["transferprocess",":id","terminate"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/edc-transfer-process-api",custom_edit_url:null},sidebar:"kits",previous:{title:"queryAllTransferProcesses",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/query-all-transfer-processes"},next:{title:"Control Plane",permalink:"/docs/kits/tractusx-edc/edc-controlplane/"}},f={},h=[{value:"terminateTransferProcess",id:"terminatetransferprocess",level:2}],x={toc:h};function g(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,a.Z)({},x,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"terminatetransferprocess"},"terminateTransferProcess"),(0,l.kt)("p",null,"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state."),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(i.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)(r.Z,{mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"reason",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)(n.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request to cancel the transfer process was successfully received")),(0,l.kt)("div",null)),(0,l.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed, e.g. id was null")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"A contract negotiation with the given ID does not exist")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Could not terminate transfer process, because it is already completed or terminated.")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);