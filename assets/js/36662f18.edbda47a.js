"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[9919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Code reviews",sidebar_position:3},o=void 0,s={unversionedId:"oss/code-reviews",id:"oss/code-reviews",title:"Code reviews",description:"This page will contain guidelines, good practices and mandatory steps, that have to be performed, when doing a review",source:"@site/docs/oss/code-reviews.md",sourceDirName:"oss",slug:"/oss/code-reviews",permalink:"/docs/oss/code-reviews",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/oss/code-reviews.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Code reviews",sidebar_position:3},sidebar:"developer",previous:{title:"How to contribute",permalink:"/docs/oss/how-to-contribute"},next:{title:"Central Github Checks",permalink:"/docs/github-checks"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page will contain guidelines, good practices and mandatory steps, that have to be performed, when doing a review\nof contributions to Eclipse Tractus-X. These reviews are usually done on pull requests."),(0,a.kt)("p",null,"Generally all code contributions have to be done via pull requests (PRs) in the Tractus-X GitHub repositories. All PRs have to be reviewed."),(0,a.kt)("p",null,"We propose a 2-step approach for reviews of PRs."),(0,a.kt)("p",null,"General procdure for a PR:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create the PR"),(0,a.kt)("li",{parentName:"ul"},"Step 1: Content Review",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Assign somebody qualified to make the content review for your PR ( a contributor from your produc team)"),(0,a.kt)("li",{parentName:"ul"},"PR is reviewed, review comments are added to the PR"),(0,a.kt)("li",{parentName:"ul"},"work on the review comments (correct / extend if necessary)"),(0,a.kt)("li",{parentName:"ul"},"ask for re-reviewing if necessary"))),(0,a.kt)("li",{parentName:"ul"},"Step 2: Assign a committer to make the review for the OSS governance",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PR is reviewed, review comments are added to the PR"),(0,a.kt)("li",{parentName:"ul"},"ask for re-reviewing if necessary"))),(0,a.kt)("li",{parentName:"ul"},"PR is merged by the committer who has made the review")),(0,a.kt)("p",null,"Step 1 - Content review (made by a contributor of he product team):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Content checks are defined by the product teams"),(0,a.kt)("li",{parentName:"ul"},"Check for meaningful and descriptive commit messages (amend / sqash committs for a PR)"),(0,a.kt)("li",{parentName:"ul"},"Check if copyright headers have been added to new files"),(0,a.kt)("li",{parentName:"ul"},"Check if new third-party libraries are used:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"are they also been added to the DEPENDENCIES file,"),(0,a.kt)("li",{parentName:"ul"},"all libraries should have the status approved,"),(0,a.kt)("li",{parentName:"ul"},"if there are any with status restricted look if issue numbers are listed in the DEPENDENCIES file."),(0,a.kt)("li",{parentName:"ul"},'Libraries with the status "rejected" cannot be accepted.'))),(0,a.kt)("li",{parentName:"ul"},"Check if IP issues are opened")),(0,a.kt)("p",null,"Step 2 - OSS governance review (made by a committer)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check if the Content Review was succesfull and adequately documented. If not, you have the right to give back the review request."),(0,a.kt)("li",{parentName:"ul"},"Double Check for meaningful and descriptive commit messages"),(0,a.kt)("li",{parentName:"ul"},"Double Check if copyright headers have been added to new files"),(0,a.kt)("li",{parentName:"ul"},'Double Check if new third-party libraries used have also been added to the DEPENDENCIES file. All libraries should be approved, if there are any with restricted status look for issue numbers. Libraries with the status "rejected" cannot be accepted.'),(0,a.kt)("li",{parentName:"ul"},"Double Check if IP issues are opened"),(0,a.kt)("li",{parentName:"ul"},"If the contribution is larger (e.g. > 1000 loc) you are free to request an IP check from the EF. Open an code contribution ticket at the Eclipse IP GitLab."),(0,a.kt)("li",{parentName:"ul"},"to be continued")))}p.isMDXComponent=!0}}]);