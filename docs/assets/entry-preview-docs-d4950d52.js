import{a as D}from"./chunk-FJPRWHXQ-0993351e.js";import"./doctrine-27976eef.js";import{i as w}from"./tiny-invariant-dd7d57d2.js";import{j as u}from"./lit-element-b97bcfb0.js";import"./index-356e4a49.js";import"./directive-helpers-51f6ee5d.js";import"./_commonjsHelpers-725317a4.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,{start:y}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:C}=d;C.STORYBOOK_ENV="web-components";var c=y(D);c.forceReRender;c.clientApi.raw;function O(e){if(!e)return!1;if(typeof e=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function f(e){if(!e)return!1;if(e.tags&&Array.isArray(e.tags)||e.modules&&Array.isArray(e.modules))return!0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function E(){return d.__STORYBOOK_CUSTOM_ELEMENTS__||d.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window:S,EventSource:T}=d,_;typeof module<"u"&&((_=module==null?void 0:module.hot)!=null&&_.decline)&&(module.hot.decline(),new T("__webpack_hmr").addEventListener("message",function(e){try{let{action:r}=JSON.parse(e.data);r==="built"&&S.location.reload()}catch{}}));const{combineParameters:b}=__STORYBOOK_MODULE_PREVIEW_API__;var h=(e=>(e.JAVASCRIPT="JavaScript",e.FLOW="Flow",e.TYPESCRIPT="TypeScript",e.UNKNOWN="Unknown",e))(h||{}),M=e=>{let{component:r,argTypes:t,parameters:{docs:a={}}}=e,{extractArgTypes:n}=a,o=n&&r?n(r):{};return o?b(o,t):t},R="storybook/docs",I=`${R}/snippet-rendered`,l=(e=>(e.AUTO="auto",e.CODE="code",e.DYNAMIC="dynamic",e))(l||{});const{logger:m}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{useEffect:L,addons:U}=__STORYBOOK_MODULE_PREVIEW_API__;function A(e,r){var a,n;let t;switch(r){case"attributes":case"properties":t={name:((a=e.type)==null?void 0:a.text)||e.type};break;case"slots":t={name:"string"};break;default:t={name:"void"};break}return{name:e.name,required:!1,description:e.description,type:t,table:{category:r,type:{summary:((n=e.type)==null?void 0:n.text)||e.type},defaultValue:{summary:e.default!==void 0?e.default:e.defaultValue}}}}function N(e){let r=e.name.replace(/(-|_|:|\.|\s)+(.)?/g,(t,a,n)=>n?n.toUpperCase():"").replace(/^([A-Z])/,t=>t.toLowerCase());return r=`on${r.charAt(0).toUpperCase()+r.substr(1)}`,[{name:r,action:{name:e.name},table:{disable:!0}},A(e,"events")]}function s(e,r){return e&&e.filter(t=>t&&t.name).reduce((t,a)=>{if(a.kind==="method")return t;switch(r){case"events":N(a).forEach(n=>{w(n.name,`${n} should have a name property.`),t[n.name]=n});break;default:t[a.name]=A(a,r);break}return t},{})}var Y=(e,r)=>{if(!O(e)||!f(r))return null;let t=r.tags.find(a=>a.name.toUpperCase()===e.toUpperCase());return t||m.warn(`Component not found in custom-elements.json: ${e}`),t},P=(e,r)=>{var a;if(!O(e)||!f(r))return null;let t;return(a=r==null?void 0:r.modules)==null||a.forEach(n=>{var o;(o=n==null?void 0:n.declarations)==null||o.forEach(i=>{i.tagName===e&&(t=i)})}),t||m.warn(`Component not found in custom-elements.json: ${e}`),t},g=(e,r)=>(r==null?void 0:r.version)==="experimental"?Y(e,r):P(e,r),k=(e,r)=>{let t=g(e,r);return t&&{...s(t.members??[],"properties"),...s(t.properties??[],"properties"),...s(t.attributes??[],"attributes"),...s(t.events??[],"events"),...s(t.slots??[],"slots"),...s(t.cssProperties??[],"css custom properties"),...s(t.cssParts??[],"css shadow parts")}},V=e=>{let r=E();return k(e,r)},B=e=>{let r=g(e,E());return r&&r.description},K=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function $(e){var a;let r=(a=e==null?void 0:e.parameters.docs)==null?void 0:a.source,t=e==null?void 0:e.parameters.__isArgsStory;return(r==null?void 0:r.type)===l.DYNAMIC?!1:!t||(r==null?void 0:r.code)||(r==null?void 0:r.type)===l.CODE}function F(e,r){var o,i;let t=e(),a=(i=(o=r==null?void 0:r.parameters.docs)==null?void 0:o.source)!=null&&i.excludeDecorators?r.originalStoryFn(r.args,r):t,n;if(L(()=>{let{id:p,unmappedArgs:v}=r;n&&U.getChannel().emit(I,{id:p,source:n,args:v})}),!$(r)){let p=window.document.createElement("div");a instanceof DocumentFragment?u(a.cloneNode(!0),p):u(a,p),n=p.innerHTML.replace(K,"")}return t}var Z=[F],z={docs:{extractArgTypes:V,extractComponentDescription:B,story:{inline:!0},source:{type:l.DYNAMIC,language:"html"}}},Q=[M];export{Q as argTypesEnhancers,Z as decorators,z as parameters};
