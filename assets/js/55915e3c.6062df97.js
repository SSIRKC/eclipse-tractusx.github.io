"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[95356],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(i),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||s;return i?n.createElement(m,o(o({ref:t},c),{},{components:i})):n.createElement(m,o({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<s;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5977:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const s={id:"Specification Digital Twin KIT",title:"Developing with the DT KIT",description:"Digital Twin KIT",sidebar_position:4},o=void 0,r={unversionedId:"kits/Digital Twin Kit/Software Development View/Specification Digital Twin KIT",id:"version-23.09/kits/Digital Twin Kit/Software Development View/Specification Digital Twin KIT",title:"Developing with the DT KIT",description:"Digital Twin KIT",source:"@site/docs-kits_versioned_docs/version-23.09/kits/Digital Twin Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/Digital Twin Kit/Software Development View",slug:"/kits/Digital Twin Kit/Software Development View/Specification Digital Twin KIT",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/Specification Digital Twin KIT",draft:!1,tags:[],version:"23.09",sidebarPosition:4,frontMatter:{id:"Specification Digital Twin KIT",title:"Developing with the DT KIT",description:"Digital Twin KIT",sidebar_position:4},sidebar:"kits",previous:{title:"Operation View",permalink:"/docs-kits/kits/Digital Twin Kit/Operation View Digital Twin Kit"},next:{title:"Introduction",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API AAS Discovery/dotaas-part-2-http-rest-discovery-service-specification"}},l={},d=[{value:"Digital Twin KIT",id:"digital-twin-kit",level:3},{value:"API Specifications",id:"api-specifications",level:2},{value:"Asset Administration Shell",id:"asset-administration-shell",level:3},{value:"Submodels",id:"submodels",level:4},{value:"Digital Twin Registry",id:"digital-twin-registry",level:4},{value:"Catena-X specific Services",id:"catena-x-specific-services",level:3},{value:"Discovery Sequence",id:"discovery-sequence",level:2},{value:"Sample Data",id:"sample-data",level:2},{value:"Registration at EDC",id:"registration-at-edc",level:3},{value:"Digital Twin Registry as EDC Data Asset",id:"digital-twin-registry-as-edc-data-asset",level:4},{value:"Submodel as EDC Data Asset",id:"submodel-as-edc-data-asset",level:4},{value:"Registration at Digital Twin Registry",id:"registration-at-digital-twin-registry",level:3},{value:"Example for AAS-Registration",id:"example-for-aas-registration",level:4},{value:"Example for Submodel-Registration at existing AAS",id:"example-for-submodel-registration-at-existing-aas",level:4},{value:"EDC Usage Policies",id:"edc-usage-policies",level:3},{value:"Data Provisioning",id:"data-provisioning",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Register Digital Twins",id:"register-digital-twins",level:3}],c={toc:d};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DT Kit Pictotogram",src:i(53530).Z,width:"285",height:"244"})),(0,a.kt)("h3",{id:"digital-twin-kit"},"Digital Twin KIT"),(0,a.kt)("h2",{id:"api-specifications"},"API Specifications"),(0,a.kt)("p",null,"All openAPI-specifications for the Digital Twin Kit services are rendered in the section ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20AAS%20Discovery/dotaas-part-2-http-rest-discovery-service-specification"},"of these docs")),(0,a.kt)("h3",{id:"asset-administration-shell"},"Asset Administration Shell"),(0,a.kt)("p",null,"The Asset Administration Shell (AAS) is a specification that is released by the Industrial Digital Twin Association\n",(0,a.kt)("a",{parentName:"p",href:"https://industrialdigitaltwin.org/"},"(IDTA)")," with a perspective to be adopted by the International Electrotechnical\nCommission ",(0,a.kt)("a",{parentName:"p",href:"https://www.iec.ch/homepage"},"(IEC)"),".\nIts mission is defining how \u201cinformation about assets ","[\u2026]"," can be exchanged in a meaningful way between partners in a value\ncreation network\u201d. As such, it is well-suited to contribute to the toolbox of Catena-X. While the Spec offers an extensive\nsuite of meta-model elements and APIs, Catena-X only uses a small subset. What exactly is defined in the Catena-X standard\nCX - 0002."),(0,a.kt)("h4",{id:"submodels"},"Submodels"),(0,a.kt)("p",null,"An Asset Administration Shell is organized in Submodels. Each Submodel represents a self-contained aspect of an asset -\ntypical examples are the Nameplate or SingleLevelBomAsBuilt (which denotes the hierarchical composition of parts into\na whole). As different aspects of an Asset may be known to different parties on the value-chain, Submodels for a single asset\nmust be capable to run independently of each other. The specification explicitly allows this, enabling easy cross-company\ndata integration."),(0,a.kt)("p",null,"Recognizing that not all use-cases require the full functionality of the AAS-Spec, Catena-X demands that Data\nProviders offer only a subset of the SubmodelServiceSpecification - namely the ",(0,a.kt)("inlineCode",{parentName:"p"},"$value")," serialization. This is an abbreviated\nnotation of an AAS-Submodel that is focused on data instead of context. While it is advisable to expose Submodels with help of\na full-fletched AAS-server SDK that provides the content-modifiers and API-endpoints out-of-the-box, this is not yet\nmandatory."),(0,a.kt)("h4",{id:"digital-twin-registry"},"Digital Twin Registry"),(0,a.kt)("p",null,'What Catena-X calls the "Digital Twin Registry" (DTR) is actually the union of two different services that the AAS specification\nhas specified. For the sake of simplicity, they are both defined in a single service. The DTR serves a similar function as the\nindex in a book: When trying to discover information, it\'s convenient to have an overview WHAT one will find and HOW to\naccess it. The registry caters exactly that information: For every asset it knows, it holds a number of Submodel Descriptors and in\nthese, a consumer app will find information WHAT it will find (via the semanticId) and how to access the information (endpoint,\nsecurity setup etc.). As the information contained in the DTR may be sensitive and not be trusted with a central entity,\nevery data provider must offer his own DTR as an EDC Data Asset. While it is only mandatory to implement the GET endpoints\nas specified in the ',(0,a.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/Digital%20Twin%20Kit/Software%20Development%20View/Specification%20Digital%20Twin%20Kit"},"Development View"),",\ndata providers may find it useful to implement POST requests for registration on top. Either way, they are free to populate\ntheir DTR in any way they desire."),(0,a.kt)("h3",{id:"catena-x-specific-services"},"Catena-X specific Services"),(0,a.kt)("p",null,"DTRs hold sensitive information: a SubmodelDescriptor may not give access to the actual Submodel-data but all in cumulo hint at\nproduction volumes as each Twin represents an asset. Therefore, Catena-X implements decentral DTRs (DDTR), each running with a\nbusiness partner. ",(0,a.kt)("a",{parentName:"p",href:"https://industrialdigitaltwin.org/en/wp-content/uploads/sites/2/2023/06/Decentralized-Registries-Taxonomy-of-decentralized-registries-and-an-architectural-overview_.pdf"},"In an IDTA-Whitepaper"),",\nseveral high-level concepts for DDTRs are introduced. The AAS-specification remains agnostic to the approaches and endorses\nnone of them. Catena-X must deal with the additional complexity that stems from the interaction with the EDC."),(0,a.kt)("p",null,"Leveraging the native capabilities of the EDC and the EDC Discovery Service, Catena-X uses a discovery pattern that has the\nsame capability as a central ",(0,a.kt)("a",{parentName:"p",href:"#digital-twin-registry"},"Digital Twin Registry"),": It allows to start a Discovery Process with only an AssetId and\nAs none of the options fit the data-space-specific requirements of Catena-X entirely, yet a different approach is implemented:\nHowever, in Catena-X some of the data is deemed so sensitive that a central authority can't be\ntrusted with it. Thus, each Data Provider will run their own DTR which poses a challenge for discovery. After all, a\nData Consumer must still find out the address where to fetch the data from. That's why Catena-X has introduced a\nthree-step discovery pattern made up of the central microservices Discovery Finder, BPN Discovery (or several of them)\nand finally the EDC discovery that is part of the CX-Portal. They are also part of this Kit."),(0,a.kt)("h2",{id:"discovery-sequence"},"Discovery Sequence"),(0,a.kt)("p",null,"The services that make up the Digital Twin Kit partly rely on each other. Executing them in the right sequence allows\na Data Consumer to get access to data whose location was previously unknown. However, this discovery process relies on a\nset of assumptions. Most relevant is the presence of the discovery services defined in CX - 0053 (",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20Discovery%20Finder/discovery-finder"},"Discovery Finder"),",\n",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20BPN%20Discovery/bpn-discovery-service"},"BPN Discovery"),") and CX - 0001 (",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20EDC%20Discovery/post-list-of-bpns-or-an-empty-array-to-retrieve-available-company-connector-authorization-required-roles-view-connectors"},"EDC Discovery"),").\nAs portrayed in the ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/kits/Digital%20Twin%20Kit/Operation%20View%20Digital%20Twin%20Kit"},"Operation View"),", these\ndiscovery services are assumed to run centrally in a data space. A concept for decentralization will be validated in the\nfuture."),(0,a.kt)("p",null,'Apart from their presence, the discovery services also must be populated with data by the data providers. This process\nis portrayed in the "setup of registration" section of the diagram below (steps 1-5). They describe the assumed calls\nthat have been made prior to consumer-side discovery. While step 1 was completed during onboarding of a company to the\nCatena-X network, step 2 was executed by the operating company offering the BPN-Discovery Service. Step 3-5 are in the\nresponsibility of each Data Provider. '),(0,a.kt)("p",null,"In steps 6-17, the consumer fetches the previously registered data from the central services and initiates data access.\nPlease note that especially steps 12 & 13 (negotiation at EDC) are simplified in this figure as they are explained in the\nConnector Kit already. The discovery sequence ends with step 17, after which the data consumer can make a request for the\ndata that he set out to find."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DT Kit Discovery Sequence",src:i(9965).Z,width:"2314",height:"1352"})),(0,a.kt)("p",null,"Some use-cases assume that a consumer has prior knowledge of an asset's location in a provider's infrastructure. That's\nwhy data on a new asset will not necessarily be obtained by executing the whole discovery sequence above. For example,\na consumer may know not only the assetId but also the provider's BPN, allowing him to enter the sequence at step 10.\nIf this prior knowledge is given under all circumstances, registration steps 2-3 can be skipped provider-side."),(0,a.kt)("h2",{id:"sample-data"},"Sample Data"),(0,a.kt)("p",null,"Generic sample data for relevant data objects is contained in the openAPI-specs of the respective services. This chapter\ncontains data structures that are more specifically designed for use in the Digital Twin Kit. They are compliant with\nthe base-specifications (like AAS) but restrict the application even further for use in this dataspace."),(0,a.kt)("h3",{id:"registration-at-edc"},"Registration at EDC"),(0,a.kt)("p",null,"While the exact AAS-EDC-integration is at the discretion of each Kit and use case, there are good practices\nthat are likely to be standardized on the level of CX-0002 in the future. One relevant question is how the EDC-shielded services\nof this Kit should register with the Asset endpoint of the EDC Management API. The following recommendations follow\nthe data structure expected from tractusx-edc v0.4.1 onwards. It demands a json-ld structure."),(0,a.kt)("p",null,"Json-ld is a serialization for RDF graphs (see ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/RDF/"},"Resource Description Framework"),"). The json-ld\n",(0,a.kt)("inlineCode",{parentName:"p"},"@context")," section can declare the namespaces that resources explicitly mentioned in the rest of the document belong to.\nIt may also define default namespace with ",(0,a.kt)("inlineCode",{parentName:"p"},"@vocab"),' for resources without explicitly stated namespaces. Outside of\nthe "@context" section, the "@type" property always defines the class that an object belongs to.\nAs stated in the openAPI-specification of the EDC Management API\'s relevant endpoint, all entries in the ',(0,a.kt)("inlineCode",{parentName:"p"},"asset/properties"),"\nobject and the ",(0,a.kt)("inlineCode",{parentName:"p"},"privateProperties")," object can be chosen freely. The section on the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataAddress")," is structured depending\non the ",(0,a.kt)("inlineCode",{parentName:"p"},"edc:type")," property. The example below is determined by the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/blob/main/spi/common/core-spi/src/main/java/org/eclipse/edc/spi/types/domain/HttpDataAddress.java"},"HttpDataAddress"),"\nclass. Other implementations may require different parameters."),(0,a.kt)("p",null,"For successful discovery of Digital Twins, it is critical to register Submodels and Digital-Twin-Registries in a\nharmonized way. The following overview shall explain how the ",(0,a.kt)("inlineCode",{parentName:"p"},"asset/properties")," section could be used. Bear in mind that\nthis is a non-normative example."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"asset:prop:type")," (mandatory as per CX-0002): denotes the type of Asset that is registered. For all AAS-registries\nthis property must be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"data.core.digitalTwinRegistry"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rdfs:label")," (optional): short name for asset."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rdfs:comment")," (optional): free text property for human consumption."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dcat:version")," (optional): version-string of the registered resource. Please note that the version of the AAS-spec is\nalready considered in the ",(0,a.kt)("inlineCode",{parentName:"li"},"aas"),"-namespace.")),(0,a.kt)("p",null,"The top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"@id")," field denotes the identifier of the resource that is being registered."),(0,a.kt)("h4",{id:"digital-twin-registry-as-edc-data-asset"},"Digital Twin Registry as EDC Data Asset"),(0,a.kt)("p",null,"The top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"@id")," field is mandatory but can (for a DTR) be chosen freely at registration since a DTR usually has no unique\nidentifier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "@base": "http://myCompany.org/identifiers/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "dcat": "https://www.w3.org/ns/dcat/",\n    "rdfs": "http://www.w3.org/2000/01/rdf-schema#"\n  },\n  "edc:asset": {\n    "@type": "Asset",\n    "@id": "04a0993c-aa76-446f-a026-cb2ed62ea03f",\n    "edc:properties": {\n      "asset:prop:type": "data.core.digitalTwinRegistry",\n      "rdfs:label": "Digital Twin Registry",\n      "rdfs:comment": "DTR Endpoint of provider Processor_BackendIntegrationTests",\n      "dcat:version": "0.0.1"\n    },\n    "edc:privateProperties": null\n  },\n  "edc:dataAddress": {\n    "@type": "DataAddress",\n    "edc:type": "edc:HttpData",\n    "edc:baseUrl": "https://mycompany.com/dtr/",\n    "edc:authKey": "Authorization",\n    "edc:authCode": "Basic XXX",\n    "edc:proxyBody": "true",\n    "edc:proxyPath": "true",\n    "edc:proxyQueryParams": "true",\n    "edc:proxyMethod": "true",\n    "edc:contentType": "application/json"\n  }\n}\n')),(0,a.kt)("h4",{id:"submodel-as-edc-data-asset"},"Submodel as EDC Data Asset"),(0,a.kt)("p",null,'Registering a Submodel as Asset with the EDC Management API is at the discretion of each Data Provider. She may create\none entry per Submodel or bundle them into one - yielding a smaller catalogue hence better performance. This may seem\nstrange because unharmonized Asset Registration does not allow a Data Consumer to systematically find all EDC-Assets of\ntype "Submodel". The discovery-sequence, however, is still intact since a Data Consumer will always know the Data Plane\nand Control Plane of a Submodel from its ',(0,a.kt)("a",{parentName:"p",href:"#registration-at-digital-twin-registry"},"Submodel Descriptor in the Digital Twin Registry"),"."),(0,a.kt)("p",null,"If a Data Provider wanted to\nThe following shows an example for registration of an AAS-Submodel as EDC Data Asset. The basic structure of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"properties")," section extends that of the DTR but additionally holds ",(0,a.kt)("inlineCode",{parentName:"p"},"hasSemantics:semanticId"),". It is\nrecommended and shall signify the meaning of the Submodel's payload."),(0,a.kt)("p",null,"The top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"@id")," field should be equivalent to the id of the Submodel."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "@base": "http://myCompany.org/identifiers/",\n    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "aas": "https://admin-shell.io/aas/API/3/0/",\n    "aas-submodel": "aas:SubmodelServiceSpecification/",\n    "aas-semantics": "aas:hasSemantics/"\n  },\n  "edc:asset": {\n    "@id": "urn:uuid:ca180cf7-7ed6-4f53-b32f-d072d4cad834",\n    "@type": "Asset",\n    "edc:properties": {\n      "asset:prop:type": ["aas-submodel:SSP001"],\n      "rdfs:label": "PCF Data",\n      "rdfs:comment": "Endpoint for PCF data",\n      "aas-semantics:semanticId": "urn:bamm:io:pcf:4.0.1:Pcf",\n      "edc:contentType": "application/json"\n    },\n    "edc:privateProperties": null,\n    "edc:dataAddress": {\n      "@type": "DataAddress",\n      "edc:type": "edc:HttpData",\n      "edc:baseUrl": "https://data.plane",\n      "edc:authKey": "Authorization",\n      "edc:authCode": "Basic XXX",\n      "edc:proxyBody": "true",\n      "edc:proxyPath": "true",\n      "edc:proxyQueryParams": "true",\n      "edc:proxyMethod": "true",\n      "edc:contentType": "application/json"\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"registration-at-digital-twin-registry"},"Registration at Digital Twin Registry"),(0,a.kt)("h4",{id:"example-for-aas-registration"},"Example for AAS-Registration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "urn:uuid:e5c96ab5-896a-1234-8761-efd74777ca97",\n  "idShort": "myAas",\n  "specificAssetIds": [\n    {\n      "name": "manufacturerPartId",\n      "value": "BPN:123-345-567103",\n      "externalSubjectId": {\n        "type": "ExternalReference",\n        "keys": [\n          {\n            "type": "GlobalReference",\n            "value": "BPNL:someBpnOfAssetOwner"\n          }\n        ]\n      }\n    }\n  ],\n  "submodelDescriptors": [\n    {\n      "id": "e5c96ab5-896a-482c-8761-efd74777ca97",\n      "semanticId": {\n        "type": "ExternalReference",\n        "keys": [\n          {\n            "type": "GlobalReference",\n            "value": "urn:bamm:io.catenax.material_for_recycling:1.1.0#MaterialForRecycling"\n          }\n        ]\n      },\n      "endpoints": [\n        {\n          "interface": "SUBMODEL-3.0",\n          "protocolInformation": {\n            "href": "https://edc.data.plane/mypath/submodel",\n            "endpointProtocol": "HTTP",\n            "endpointProtocolVersion": [\n              "1.1"\n            ],\n            "subprotocol": "DSP",\n            "subprotocolBody": "id=123;dspEndpoint=http://edc.control.plane/",\n            "subprotocolBodyEncoding": "plain",\n            "securityAttributes": [\n              {\n                "type": "NONE",\n                "key": "NONE",\n                "value": "NONE"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h4",{id:"example-for-submodel-registration-at-existing-aas"},"Example for Submodel-Registration at existing AAS"),(0,a.kt)("p",null,"The Submodel Descriptors in the DTR must not only follow the schema defined by the openAPI file. Additionally, it is\nimperative that the network mandates how they shall be populated with data. This is especially critical because the\ndata access is not straight-forward but passes through an EDC which the Data Consumer must negotiate with. That's why\nthe subprotocol body holds information on how to talk to the EDC's Data Plane."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "e5c96ab5-896a-482c-8761-efd74777ca97",\n  "semanticId": {\n    "type": "ExternalReference",\n    "keys": [\n      {\n        "type": "GlobalReference",\n        "value": "urn:bamm:io.catenax.material_for_recycling:1.1.0#MaterialForRecycling"\n      }\n    ]\n  },\n  "endpoints": [\n    {\n      "interface": "SUBMODEL-3.0",\n      "protocolInformation": {\n        "href": "https://edc.data.plane/mypath/submodel",\n        "endpointProtocol": "HTTP",\n        "endpointProtocolVersion": [\n          "1.1"\n        ],\n        "subprotocol": "DSP",\n        "subprotocolBody": "id=123;dspEndpoint=http://edc.control.plane/",\n        "subprotocolBodyEncoding": "plain",\n        "securityAttributes": [\n          {\n            "type": "NONE",\n            "key": "NONE",\n            "value": "NONE"\n          }\n        ]\n      }\n    }\n  ]\n}\n\n')),(0,a.kt)("p",null,"Currently, this structure is still standardized ambiguously in CX-0002. There, the ",(0,a.kt)("inlineCode",{parentName:"p"},"subprotocolBody")," is not mandated to\ncontain the specific data (",(0,a.kt)("inlineCode",{parentName:"p"},'"id=xyz;dspEndpoint=myControlPlane"'),"). As this is however good practice in other Kits, the\nstructure will likely find its way into the CX-0002 standard in the future."),(0,a.kt)("h3",{id:"edc-usage-policies"},"EDC Usage Policies"),(0,a.kt)("p",null,"The decision what policies shall be implemented for the exchange of data is at the discretion of each use-case and cannot\nbe standardized in the context of the semantics-standards or the DT Kit."),(0,a.kt)("h2",{id:"data-provisioning"},"Data Provisioning"),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,"Data Providers will usually follow one of two patterns:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Digital Twin Repository: Deploying a dedicated Repository for the persistence of digital twins and related data is the most\nconvenient way to get going with the AAS. Due to the risk of data duplication and unclear initial ingestion mechanisms,\nit may not scale to industrial sizes."),(0,a.kt)("li",{parentName:"ol"},"Delegation: Wrapping another API or a database may deploy the Submodel API as a new facade. It delegates the incoming\nrequests to the respective backend systems. ")),(0,a.kt)("p",null,"Offering data to the network requires mappings that are naturally dependent on the data source format. More on data integration\ncan be found in the corresponding ",(0,a.kt)("a",{parentName:"p",href:"https://catena-x.net/fileadmin/user_upload/04_Einfuehren_und_umsetzen/Onboarding/DataIntegrationPatterns_Guide_Final_V1.pdf"},"CX e.V. guide"),"."),(0,a.kt)("h3",{id:"register-digital-twins"},"Register Digital Twins"),(0,a.kt)("p",null,"As mentioned in CX - 0002, every Data Provider is required not only to deploy a DTR in his infrastructure but also to\nregister each of the Submodels. Otherwise, the data will not be discoverable by Data Consumers."))}p.isMDXComponent=!0},9965:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/DTKIT_discovery_seq-e1f28b7e46296c2485720fdcdcff090b.svg"},53530:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/DTKIT_pictogram_blue-27dcbba19b516a444d647f3f8377ce4f.png"}}]);