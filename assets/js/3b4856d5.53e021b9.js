"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[63528],{21891:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>T,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var s=i(87462),a=(i(67294),i(3905)),r=i(26389),o=i(94891),n=(i(75190),i(47507)),d=i(24310),l=i(63303),c=(i(75035),i(85162));const p={id:"search-main-addresses",title:"Search Main Addresses",description:"Search main addresses of site business partners by BPNS",sidebar_label:"Search Main Addresses",hide_title:!0,hide_table_of_contents:!0,api:{tags:["site-controller"],description:"Search main addresses of site business partners by BPNS",operationId:"searchMainAddresses",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"string"}}}},required:!0},responses:{200:{description:"The found main addresses",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{physicalPostalAddress:{type:"object",properties:{geographicCoordinates:{type:"object",properties:{longitude:{type:"number",description:"Longitude coordinate",format:"float"},latitude:{type:"number",description:"Latitude coordinate",format:"float"},altitude:{type:"number",description:"Altitude, if applicable",format:"float"}},description:"Geo coordinates record for an address"},country:{type:"string",description:"Describes the country",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},postalCode:{type:"string",description:"A postal code, also known as postcode, PIN or ZIP Code"},city:{type:"string",description:"The city of the address (Synonym: Town, village, municipality)"},street:{type:"object",properties:{name:{type:"string",description:"Describes the official Name of the Street."},houseNumber:{type:"string",description:"Describes the House Number"},milestone:{type:"string",description:"The Milestone is relevant for long roads without specific house numbers."},direction:{type:"string",description:"Describes the direction"}},description:"A public road in a city, town, or village, typically with houses and buildings on one or both sides."},administrativeAreaLevel1:{type:"string",description:"Identifying code of the Region within the country (e.g. Bayern)"},administrativeAreaLevel2:{type:"string",description:"Further possibility to describe the region/address(e.g. County/Landkreis)"},administrativeAreaLevel3:{type:"string",description:"Further possibility to describe the region/address(e.g. Township/Gemeinde)"},district:{type:"string",description:"Divides the city in several smaller areas"},companyPostalCode:{type:"string",description:"A separate postal code for a company, also known as postcode, PIN or ZIP Code"},industrialZone:{type:"string",description:"The practice of designating an area for industrial development"},building:{type:"string",description:"Describes a specific building within the address"},floor:{type:"string",description:"Describes the floor/level the delivery shall take place"},door:{type:"string",description:"Describes the  door/room/suite on the respective floor the delivery shall take place"}},description:"Physical Postal Address Part"},alternativePostalAddress:{type:"object",properties:{geographicCoordinates:{type:"object",properties:{longitude:{type:"number",description:"Longitude coordinate",format:"float"},latitude:{type:"number",description:"Latitude coordinate",format:"float"},altitude:{type:"number",description:"Altitude, if applicable",format:"float"}},description:"Geo coordinates record for an address"},country:{type:"string",description:"Describes the country",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},postalCode:{type:"string",description:"A postal code, also known as postcode, PIN or ZIP Code"},city:{type:"string",description:"The city of the address (Synonym: Town, village, municipality)"},administrativeAreaLevel1:{type:"string",description:"Identifying code of the Region within the country (e.g. Bayern)"},deliveryServiceNumber:{type:"string",description:"Describes the PO Box or private Bag number the delivery should be placed at."},deliveryServiceType:{type:"string",description:"The type of this specified delivery",enum:["PO_BOX","PRIVATE_BAG","BOITE_POSTALE"]},deliveryServiceQualifier:{type:"string",description:"Delivery Service Qualifier"}},description:"Alternative Postal Address Part"},bpnSite:{type:"string"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time"}},description:"Main address for site"}}}}},400:{description:"On malformed request parameters"}},method:"post",path:"/api/catena/sites/main-addresses/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:["string"],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0-SNAPSHOT"},postman:{name:"Search Main Addresses",description:{content:"Search main addresses of site business partners by BPNS",type:"text/plain"},url:{path:["api","catena","sites","main-addresses","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},m=void 0,u={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/search-main-addresses",id:"kits/Business Partner Kit/Software Development View/Pool Api/search-main-addresses",title:"Search Main Addresses",description:"Search main addresses of site business partners by BPNS",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/search-main-addresses.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/search-main-addresses",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/search-main-addresses",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"search-main-addresses",title:"Search Main Addresses",description:"Search main addresses of site business partners by BPNS",sidebar_label:"Search Main Addresses",hide_title:!0,hide_table_of_contents:!0,api:{tags:["site-controller"],description:"Search main addresses of site business partners by BPNS",operationId:"searchMainAddresses",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"string"}}}},required:!0},responses:{200:{description:"The found main addresses",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{physicalPostalAddress:{type:"object",properties:{geographicCoordinates:{type:"object",properties:{longitude:{type:"number",description:"Longitude coordinate",format:"float"},latitude:{type:"number",description:"Latitude coordinate",format:"float"},altitude:{type:"number",description:"Altitude, if applicable",format:"float"}},description:"Geo coordinates record for an address"},country:{type:"string",description:"Describes the country",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},postalCode:{type:"string",description:"A postal code, also known as postcode, PIN or ZIP Code"},city:{type:"string",description:"The city of the address (Synonym: Town, village, municipality)"},street:{type:"object",properties:{name:{type:"string",description:"Describes the official Name of the Street."},houseNumber:{type:"string",description:"Describes the House Number"},milestone:{type:"string",description:"The Milestone is relevant for long roads without specific house numbers."},direction:{type:"string",description:"Describes the direction"}},description:"A public road in a city, town, or village, typically with houses and buildings on one or both sides."},administrativeAreaLevel1:{type:"string",description:"Identifying code of the Region within the country (e.g. Bayern)"},administrativeAreaLevel2:{type:"string",description:"Further possibility to describe the region/address(e.g. County/Landkreis)"},administrativeAreaLevel3:{type:"string",description:"Further possibility to describe the region/address(e.g. Township/Gemeinde)"},district:{type:"string",description:"Divides the city in several smaller areas"},companyPostalCode:{type:"string",description:"A separate postal code for a company, also known as postcode, PIN or ZIP Code"},industrialZone:{type:"string",description:"The practice of designating an area for industrial development"},building:{type:"string",description:"Describes a specific building within the address"},floor:{type:"string",description:"Describes the floor/level the delivery shall take place"},door:{type:"string",description:"Describes the  door/room/suite on the respective floor the delivery shall take place"}},description:"Physical Postal Address Part"},alternativePostalAddress:{type:"object",properties:{geographicCoordinates:{type:"object",properties:{longitude:{type:"number",description:"Longitude coordinate",format:"float"},latitude:{type:"number",description:"Latitude coordinate",format:"float"},altitude:{type:"number",description:"Altitude, if applicable",format:"float"}},description:"Geo coordinates record for an address"},country:{type:"string",description:"Describes the country",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},postalCode:{type:"string",description:"A postal code, also known as postcode, PIN or ZIP Code"},city:{type:"string",description:"The city of the address (Synonym: Town, village, municipality)"},administrativeAreaLevel1:{type:"string",description:"Identifying code of the Region within the country (e.g. Bayern)"},deliveryServiceNumber:{type:"string",description:"Describes the PO Box or private Bag number the delivery should be placed at."},deliveryServiceType:{type:"string",description:"The type of this specified delivery",enum:["PO_BOX","PRIVATE_BAG","BOITE_POSTALE"]},deliveryServiceQualifier:{type:"string",description:"Delivery Service Qualifier"}},description:"Alternative Postal Address Part"},bpnSite:{type:"string"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time"}},description:"Main address for site"}}}}},400:{description:"On malformed request parameters"}},method:"post",path:"/api/catena/sites/main-addresses/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:["string"],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0-SNAPSHOT"},postman:{name:"Search Main Addresses",description:{content:"Search main addresses of site business partners by BPNS",type:"text/plain"},url:{path:["api","catena","sites","main-addresses","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Search site partners by BPNs and/or parent BPNs",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/search-sites"},next:{title:"Get site partners by bpn",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/get-site"}},y={},h=[{value:"Search Main Addresses",id:"search-main-addresses",level:2}],S={toc:h};function T(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},S,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"search-main-addresses"},"Search Main Addresses"),(0,a.kt)("p",null,"Search main addresses of site business partners by BPNS"),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("strong",null,"string"))))))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The found main addresses")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"physicalPostalAddress"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Physical Postal Address Part")),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"geographicCoordinates"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Geo coordinates record for an address")),(0,a.kt)(d.Z,{collapsible:!1,name:"longitude",required:!1,deprecated:void 0,schemaDescription:"Longitude coordinate",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"latitude",required:!1,deprecated:void 0,schemaDescription:"Latitude coordinate",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"altitude",required:!1,deprecated:void 0,schemaDescription:"Altitude, if applicable",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{collapsible:!1,name:"country",required:!1,deprecated:void 0,schemaDescription:"Describes the country",schemaName:"string",qualifierMessage:"**Possible values:** [`UNDEFINED`, `AC`, `AD`, `AE`, `AF`, `AG`, `AI`, `AL`, `AM`, `AN`, `AO`, `AQ`, `AR`, `AS`, `AT`, `AU`, `AW`, `AX`, `AZ`, `BA`, `BB`, `BD`, `BE`, `BF`, `BG`, `BH`, `BI`, `BJ`, `BL`, `BM`, `BN`, `BO`, `BQ`, `BR`, `BS`, `BT`, `BU`, `BV`, `BW`, `BY`, `BZ`, `CA`, `CC`, `CD`, `CF`, `CG`, `CH`, `CI`, `CK`, `CL`, `CM`, `CN`, `CO`, `CP`, `CR`, `CS`, `CU`, `CV`, `CW`, `CX`, `CY`, `CZ`, `DE`, `DG`, `DJ`, `DK`, `DM`, `DO`, `DZ`, `EA`, `EC`, `EE`, `EG`, `EH`, `ER`, `ES`, `ET`, `EU`, `EZ`, `FI`, `FJ`, `FK`, `FM`, `FO`, `FR`, `FX`, `GA`, `GB`, `GD`, `GE`, `GF`, `GG`, `GH`, `GI`, `GL`, `GM`, `GN`, `GP`, `GQ`, `GR`, `GS`, `GT`, `GU`, `GW`, `GY`, `HK`, `HM`, `HN`, `HR`, `HT`, `HU`, `IC`, `ID`, `IE`, `IL`, `IM`, `IN`, `IO`, `IQ`, `IR`, `IS`, `IT`, `JE`, `JM`, `JO`, `JP`, `KE`, `KG`, `KH`, `KI`, `KM`, `KN`, `KP`, `KR`, `KW`, `KY`, `KZ`, `LA`, `LB`, `LC`, `LI`, `LK`, `LR`, `LS`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `MD`, `ME`, `MF`, `MG`, `MH`, `MK`, `ML`, `MM`, `MN`, `MO`, `MP`, `MQ`, `MR`, `MS`, `MT`, `MU`, `MV`, `MW`, `MX`, `MY`, `MZ`, `NA`, `NC`, `NE`, `NF`, `NG`, `NI`, `NL`, `NO`, `NP`, `NR`, `NT`, `NU`, `NZ`, `OM`, `PA`, `PE`, `PF`, `PG`, `PH`, `PK`, `PL`, `PM`, `PN`, `PR`, `PS`, `PT`, `PW`, `PY`, `QA`, `RE`, `RO`, `RS`, `RU`, `RW`, `SA`, `SB`, `SC`, `SD`, `SE`, `SF`, `SG`, `SH`, `SI`, `SJ`, `SK`, `SL`, `SM`, `SN`, `SO`, `SR`, `SS`, `ST`, `SU`, `SV`, `SX`, `SY`, `SZ`, `TA`, `TC`, `TD`, `TF`, `TG`, `TH`, `TJ`, `TK`, `TL`, `TM`, `TN`, `TO`, `TP`, `TR`, `TT`, `TV`, `TW`, `TZ`, `UA`, `UG`, `UK`, `UM`, `US`, `UY`, `UZ`, `VA`, `VC`, `VE`, `VG`, `VI`, `VN`, `VU`, `WF`, `WS`, `XI`, `XU`, `XK`, `YE`, `YT`, `YU`, `ZA`, `ZM`, `ZR`, `ZW`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"postalCode",required:!1,deprecated:void 0,schemaDescription:"A postal code, also known as postcode, PIN or ZIP Code",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"city",required:!1,deprecated:void 0,schemaDescription:"The city of the address (Synonym: Town, village, municipality)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"street"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"A public road in a city, town, or village, typically with houses and buildings on one or both sides.")),(0,a.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"Describes the official Name of the Street.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"houseNumber",required:!1,deprecated:void 0,schemaDescription:"Describes the House Number",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"milestone",required:!1,deprecated:void 0,schemaDescription:"The Milestone is relevant for long roads without specific house numbers.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"direction",required:!1,deprecated:void 0,schemaDescription:"Describes the direction",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{collapsible:!1,name:"administrativeAreaLevel1",required:!1,deprecated:void 0,schemaDescription:"Identifying code of the Region within the country (e.g. Bayern)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"administrativeAreaLevel2",required:!1,deprecated:void 0,schemaDescription:"Further possibility to describe the region/address(e.g. County/Landkreis)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"administrativeAreaLevel3",required:!1,deprecated:void 0,schemaDescription:"Further possibility to describe the region/address(e.g. Township/Gemeinde)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"district",required:!1,deprecated:void 0,schemaDescription:"Divides the city in several smaller areas",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"companyPostalCode",required:!1,deprecated:void 0,schemaDescription:"A separate postal code for a company, also known as postcode, PIN or ZIP Code",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"industrialZone",required:!1,deprecated:void 0,schemaDescription:"The practice of designating an area for industrial development",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"building",required:!1,deprecated:void 0,schemaDescription:"Describes a specific building within the address",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"floor",required:!1,deprecated:void 0,schemaDescription:"Describes the floor/level the delivery shall take place",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"door",required:!1,deprecated:void 0,schemaDescription:"Describes the  door/room/suite on the respective floor the delivery shall take place",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"alternativePostalAddress"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Alternative Postal Address Part")),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"geographicCoordinates"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Geo coordinates record for an address")),(0,a.kt)(d.Z,{collapsible:!1,name:"longitude",required:!1,deprecated:void 0,schemaDescription:"Longitude coordinate",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"latitude",required:!1,deprecated:void 0,schemaDescription:"Latitude coordinate",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"altitude",required:!1,deprecated:void 0,schemaDescription:"Altitude, if applicable",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{collapsible:!1,name:"country",required:!1,deprecated:void 0,schemaDescription:"Describes the country",schemaName:"string",qualifierMessage:"**Possible values:** [`UNDEFINED`, `AC`, `AD`, `AE`, `AF`, `AG`, `AI`, `AL`, `AM`, `AN`, `AO`, `AQ`, `AR`, `AS`, `AT`, `AU`, `AW`, `AX`, `AZ`, `BA`, `BB`, `BD`, `BE`, `BF`, `BG`, `BH`, `BI`, `BJ`, `BL`, `BM`, `BN`, `BO`, `BQ`, `BR`, `BS`, `BT`, `BU`, `BV`, `BW`, `BY`, `BZ`, `CA`, `CC`, `CD`, `CF`, `CG`, `CH`, `CI`, `CK`, `CL`, `CM`, `CN`, `CO`, `CP`, `CR`, `CS`, `CU`, `CV`, `CW`, `CX`, `CY`, `CZ`, `DE`, `DG`, `DJ`, `DK`, `DM`, `DO`, `DZ`, `EA`, `EC`, `EE`, `EG`, `EH`, `ER`, `ES`, `ET`, `EU`, `EZ`, `FI`, `FJ`, `FK`, `FM`, `FO`, `FR`, `FX`, `GA`, `GB`, `GD`, `GE`, `GF`, `GG`, `GH`, `GI`, `GL`, `GM`, `GN`, `GP`, `GQ`, `GR`, `GS`, `GT`, `GU`, `GW`, `GY`, `HK`, `HM`, `HN`, `HR`, `HT`, `HU`, `IC`, `ID`, `IE`, `IL`, `IM`, `IN`, `IO`, `IQ`, `IR`, `IS`, `IT`, `JE`, `JM`, `JO`, `JP`, `KE`, `KG`, `KH`, `KI`, `KM`, `KN`, `KP`, `KR`, `KW`, `KY`, `KZ`, `LA`, `LB`, `LC`, `LI`, `LK`, `LR`, `LS`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `MD`, `ME`, `MF`, `MG`, `MH`, `MK`, `ML`, `MM`, `MN`, `MO`, `MP`, `MQ`, `MR`, `MS`, `MT`, `MU`, `MV`, `MW`, `MX`, `MY`, `MZ`, `NA`, `NC`, `NE`, `NF`, `NG`, `NI`, `NL`, `NO`, `NP`, `NR`, `NT`, `NU`, `NZ`, `OM`, `PA`, `PE`, `PF`, `PG`, `PH`, `PK`, `PL`, `PM`, `PN`, `PR`, `PS`, `PT`, `PW`, `PY`, `QA`, `RE`, `RO`, `RS`, `RU`, `RW`, `SA`, `SB`, `SC`, `SD`, `SE`, `SF`, `SG`, `SH`, `SI`, `SJ`, `SK`, `SL`, `SM`, `SN`, `SO`, `SR`, `SS`, `ST`, `SU`, `SV`, `SX`, `SY`, `SZ`, `TA`, `TC`, `TD`, `TF`, `TG`, `TH`, `TJ`, `TK`, `TL`, `TM`, `TN`, `TO`, `TP`, `TR`, `TT`, `TV`, `TW`, `TZ`, `UA`, `UG`, `UK`, `UM`, `US`, `UY`, `UZ`, `VA`, `VC`, `VE`, `VG`, `VI`, `VN`, `VU`, `WF`, `WS`, `XI`, `XU`, `XK`, `YE`, `YT`, `YU`, `ZA`, `ZM`, `ZR`, `ZW`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"postalCode",required:!1,deprecated:void 0,schemaDescription:"A postal code, also known as postcode, PIN or ZIP Code",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"city",required:!1,deprecated:void 0,schemaDescription:"The city of the address (Synonym: Town, village, municipality)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"administrativeAreaLevel1",required:!1,deprecated:void 0,schemaDescription:"Identifying code of the Region within the country (e.g. Bayern)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"deliveryServiceNumber",required:!1,deprecated:void 0,schemaDescription:"Describes the PO Box or private Bag number the delivery should be placed at.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"deliveryServiceType",required:!1,deprecated:void 0,schemaDescription:"The type of this specified delivery",schemaName:"string",qualifierMessage:"**Possible values:** [`PO_BOX`, `PRIVATE_BAG`, `BOITE_POSTALE`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"deliveryServiceQualifier",required:!1,deprecated:void 0,schemaDescription:"Delivery Service Qualifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{collapsible:!1,name:"bpnSite",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"updatedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'[\n  {\n    "physicalPostalAddress": {\n      "geographicCoordinates": {\n        "longitude": 0,\n        "latitude": 0,\n        "altitude": 0\n      },\n      "country": "UNDEFINED",\n      "postalCode": "string",\n      "city": "string",\n      "street": {\n        "name": "string",\n        "houseNumber": "string",\n        "milestone": "string",\n        "direction": "string"\n      },\n      "administrativeAreaLevel1": "string",\n      "administrativeAreaLevel2": "string",\n      "administrativeAreaLevel3": "string",\n      "district": "string",\n      "companyPostalCode": "string",\n      "industrialZone": "string",\n      "building": "string",\n      "floor": "string",\n      "door": "string"\n    },\n    "alternativePostalAddress": {\n      "geographicCoordinates": {\n        "longitude": 0,\n        "latitude": 0,\n        "altitude": 0\n      },\n      "country": "UNDEFINED",\n      "postalCode": "string",\n      "city": "string",\n      "administrativeAreaLevel1": "string",\n      "deliveryServiceNumber": "string",\n      "deliveryServiceType": "PO_BOX",\n      "deliveryServiceQualifier": "string"\n    },\n    "bpnSite": "string",\n    "createdAt": "2023-06-26",\n    "updatedAt": "2023-06-26"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"On malformed request parameters")),(0,a.kt)("div",null)))))}T.isMDXComponent=!0}}]);