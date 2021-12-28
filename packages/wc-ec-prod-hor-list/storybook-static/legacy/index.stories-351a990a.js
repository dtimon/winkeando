System.register(["./preview-cb42c80a.js"],(function(e){"use strict";var t,r,n,o,i,a,s,u,c,l,p,h,d,f,y,v,m,S,_,w,g,P,b,k,C,T,x,A,N,E;return{setters:[function(e){t=e.i,r=e.e,n=e.f,o=e.r,i=e.t,a=e.m,s=e.T,u=e.g,c=e.h,l=e.j,p=e.k,h=e.l,d=e.n,f=e.o,y=e.q,v=e.s,m=e._,S=e.u,_=e.v,w=e.w,g=e.x,P=e.y,b=e.z,k=e.A,C=e.B,T=e.C,x=e.D,A=e.E,N=e.F,E=e.G}],execute:function(){function O(e,t){for(var r=e.element.content,n=e.parts,o=document.createTreeWalker(r,133,null,!1),i=R(n),a=n[i],s=-1,u=0,c=[],l=null;o.nextNode();){s++;var p=o.currentNode;for(p.previousSibling===l&&(l=null),t.has(p)&&(c.push(p),null===l&&(l=p)),null!==l&&u++;void 0!==a&&a.index===s;)a.index=null!==l?-1:a.index-u,a=n[i=R(n,i)]}c.forEach((function(e){return e.parentNode.removeChild(e)}))}var U=function(e){for(var t=11===e.nodeType?0:1,r=document.createTreeWalker(e,133,null,!1);r.nextNode();)t++;return t},R=function(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=r+1;n<e.length;n++){var o=e[n];if(t(o))return n}return-1};var j=function(e,t){return"".concat(e,"--").concat(t)},q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);var M=function(e){return function(t){var r=j(t.type,e),n=i.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},i.set(r,n));var o=n.stringsArray.get(t.strings);if(void 0!==o)return o;var u=t.strings.join(a);if(void 0===(o=n.keyString.get(u))){var c=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(c,e),o=new s(t,c),n.keyString.set(u,o)}return n.stringsArray.set(t.strings,o),o}},z=["html","svg"],H=new Set,W=function(e,t,r){H.add(e);var n=r?r.element:document.createElement("template"),o=t.querySelectorAll("style"),a=o.length;if(0!==a){for(var s=document.createElement("style"),u=0;u<a;u++){var c=o[u];c.parentNode.removeChild(c),s.textContent+=c.textContent}!function(e){z.forEach((function(t){var r=i.get(j(t,e));void 0!==r&&r.keyString.forEach((function(e){var t=e.element.content,r=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){r.add(e)})),O(e,r)}))}))}(e);var l=n.content;r?function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e.element.content,o=e.parts;if(null!=r)for(var i=document.createTreeWalker(n,133,null,!1),a=R(o),s=0,u=-1;i.nextNode();){u++;var c=i.currentNode;for(c===r&&(s=U(t),r.parentNode.insertBefore(t,r));-1!==a&&o[a].index===u;){if(s>0){for(;-1!==a;)o[a].index+=s,a=R(o,a);return}a=R(o,a)}}else n.appendChild(t)}(r,s,l.firstChild):l.insertBefore(s,l.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);var p=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(r){l.insertBefore(s,l.firstChild);var h=new Set;h.add(s),O(r,h)}}else window.ShadyCSS.prepareTemplateStyles(n,e)};window.JSCompiler_renameProperty=function(e,t){return e};var F={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},V=function(e,t){return t!==e&&(t==t||e==e)},B={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:V},D=Promise.resolve(!0),I=function(e){function t(){var e;return d(this,t),(e=f(this,y(t).call(this)))._updateState=0,e._instanceProperties=void 0,e._updatePromise=D,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}var n;return l(t,e),p(t,[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach((function(t,r){if(e.hasOwnProperty(r)){var n=e[r];delete e[r],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(r,n)}}))}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach((function(t,r){return e[r]=t})),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,r){t!==r&&this._attributeToProperty(e,r)}},{key:"_propertyToAttribute",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:B,n=this.constructor,o=n._attributeNameForProperty(e,r);if(void 0!==o){var i=n._propertyValueToAttribute(t,r);if(void 0===i)return;this._updateState=8|this._updateState,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){var o=r._classProperties.get(n)||B;this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(t,o),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var r=!0;if(void 0!==e){var n=this.constructor,o=n._classProperties.get(e)||B;n._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:(n=m(regeneratorRuntime.mark((function e(){var t,r,n,o,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,n=this._updatePromise,this._updatePromise=new Promise((function(e,n){t=e,r=n})),e.prev=3,e.next=6,n;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:if(this._hasConnected){e.next=13;break}return e.next=13,new Promise((function(e){return i._hasConnectedResolver=e}));case 13:if(e.prev=13,null==(o=this.performUpdate())){e.next=18;break}return e.next=18,o;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),r(e.t1);case 23:t(!this._hasRequestedUpdate);case 24:case"end":return e.stop()}}),e,this,[[3,8],[13,20]])}))),function(){return n.apply(this,arguments)})},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"_getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((function(e,r){return t._propertyToAttribute(r,t[r],e)})),this._reflectingProperties=void 0)}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}}],[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((function(t,r){return e._classProperties.set(r,t)}))}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===r(e)?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get:function(){return this[n]},set:function(t){var r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}}},{key:"finalize",value:function(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,r=[].concat(v(Object.getOwnPropertyNames(t)),v("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),n=!0,o=!1,i=void 0;try{for(var a,s=r[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value;this.createProperty(u,t[u])}}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}}}},{key:"_attributeNameForProperty",value:function(e,t){var r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:V;return r(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var r=t.type,n=t.converter||F,o="function"==typeof n?n:n.fromAttribute;return o?o(e,r):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var r=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,r)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach((function(r,n){var o=e._attributeNameForProperty(n,r);void 0!==o&&(e._attributeToPropertyMap.set(o,n),t.push(o))})),t}}]),t}(h(HTMLElement));I.finalized=!0;
/**
            @license
            Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
            This code may only be used under the BSD style license found at
            http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
            http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
            found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
            part of the polymer project is also subject to an additional IP rights grant
            found at http://polymer.github.io/PATENTS.txt
            */
var J="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),X=function(){function e(t,r){if(d(this,e),r!==L)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}return p(e,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),e}(),G=function(e){if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");var K=function(e){return e.flat?e.flat(1/0):function e(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=0,o=t.length;n<o;n++){var i=t[n];Array.isArray(i)?e(i,r):r.push(i)}return r}(e)},$=function(e){function t(){return d(this,t),f(this,y(t).apply(this,arguments))}return l(t,e),p(t,[{key:"initialize",value:function(){S(y(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?J?this.renderRoot.adoptedStyleSheets=e.map((function(e){return e.styleSheet})):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((function(e){return e.cssText})),this.localName))}},{key:"connectedCallback",value:function(){S(y(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var r=this;S(y(t.prototype),"update",this).call(this,e);var n=this.render();n instanceof _&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((function(e){var t=document.createElement("style");t.textContent=e.cssText,r.renderRoot.appendChild(t)})))}},{key:"render",value:function(){}}],[{key:"finalize",value:function(){S(y(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}},{key:"_getUniqueStyles",value:function(){var e=this.styles,t=[];Array.isArray(e)?K(e).reduceRight((function(e,t){return e.add(t),e}),new Set).forEach((function(e){return t.unshift(e)})):e&&t.push(e);return t}}]),t}(I);function Q(){var e=g([" <h2>"," Nr. ",'!</h2> <button @click="','">increment</button> ']);return Q=function(){return e},e}function Y(){var e=g([":host{--wc-ec-prod-hor-list-text-color:#000;display:block;padding:25px;color:var(--wc-ec-prod-hor-list-text-color)}"]);return Y=function(){return e},e}$.finalized=!0,$.render=function(e,t,i){if(!i||"object"!==r(i)||!i.scopeName)throw new Error("The `scopeName` option is required.");var a=i.scopeName,s=n.has(t),l=q&&11===t.nodeType&&!!t.host,p=l&&!H.has(a),h=p?document.createDocumentFragment():t;if(o(e,h,Object.assign({templateFactory:M(a)},i)),p){var d=n.get(h);n.delete(h);var f=d.value instanceof u?d.value.template:void 0;W(a,h,f),c(t,t.firstChild),t.appendChild(h),n.set(t,d)}!s&&l&&window.ShadyCSS.styleElement(t.host)};var Z=function(e){function t(){var e;return d(this,t),(e=f(this,y(t).call(this))).title="Hey there",e.counter=5,e}return l(t,e),p(t,null,[{key:"styles",get:function(){return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=r.reduce((function(t,r,n){return t+G(r)+e[n+1]}),e[0]);return new X(o,L)}(Y())}},{key:"properties",get:function(){return{title:{type:String},counter:{type:Number}}}}]),p(t,[{key:"__increment",value:function(){this.counter+=1}},{key:"render",value:function(){return w(Q(),this.title,this.counter,this.__increment)}}]),t}($);function ee(){var e=g(["\n    <wc-ec-prod-hor-list .title=","></wc-ec-prod-hor-list>\n  "]);return ee=function(){return e},e}function te(){var e=g(["\n      <wc-ec-prod-hor-list></wc-ec-prod-hor-list>\n    "]);return te=function(){return e},e}function re(){var e=g(["\n    <wc-ec-prod-hor-list .title=","></wc-ec-prod-hor-list>\n  "]);return re=function(){return e},e}function ne(){var e=g(["\n      <wc-ec-prod-hor-list></wc-ec-prod-hor-list>\n    "]);return ne=function(){return e},e}function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}window.customElements.define("wc-ec-prod-hor-list",Z);var ie={};function ae(e){var t=e.components,r=T(e,["components"]);return k("wrapper",oe({},ie,r,{components:t,mdxType:"MDXLayout"}),k(x,{title:"WcEcProdHorList",parameters:{component:"wc-ec-prod-hor-list",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),k("h1",null,"WcEcProdHorList"),k("p",null,"A component for..."),k("h2",null,"Features:"),k("ul",null,k("li",{parentName:"ul"},"a"),k("li",{parentName:"ul"},"b"),k("li",{parentName:"ul"},"...")),k("h2",null,"How to use"),k("h3",null,"Installation"),k("pre",null,k("code",oe({parentName:"pre"},{className:"language-bash"}),"yarn add wc-ec-prod-hor-list\n")),k("pre",null,k("code",oe({parentName:"pre"},{className:"language-js"}),"import 'wc-ec-prod-hor-list/wc-ec-prod-hor-list.js';\n")),k(A,{withToolbar:!0,mdxType:"Preview"},k(N,{name:"Simple",mdxType:"Story"},P(ne()))),k("h2",null,"API"),k(E,{of:"wc-ec-prod-hor-list",mdxType:"Props"}),k("h2",null,"Variations"),k("h6",null,"Custom Title"),k(N,{name:"Custom Title",mdxType:"Story"},P(re(),"Hello World")))}ae.isMDXComponent=!0;var se=e("simple",(function(){return P(te())}));se.story={},se.story.name="Simple",se.story.parameters={mdxSource:"html`\n      <wc-ec-prod-hor-list></wc-ec-prod-hor-list>\n    `"};var ue=e("customTitle",(function(){return P(ee(),"Hello World")}));ue.story={},ue.story.name="Custom Title",ue.story.parameters={mdxSource:"html`\n    <wc-ec-prod-hor-list .title=${'Hello World'}></wc-ec-prod-hor-list>\n  `"};var ce={title:"WcEcProdHorList",parameters:{component:"wc-ec-prod-hor-list",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","customTitle"]},le={Simple:"simple","Custom Title":"customTitle"};ce.parameters=ce.parameters||{},ce.parameters.docs=b({},ce.parameters.docs||{},{page:function(){return k(C,{mdxStoryNameToKey:le,mdxComponentMeta:ce},k(ae,null))}}),e("default",ce);e("__namedExportsOrder",["simple","customTitle"])}}}));
//# sourceMappingURL=index.stories-351a990a.js.map