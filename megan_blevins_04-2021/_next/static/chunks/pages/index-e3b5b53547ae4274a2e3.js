_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(s.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},s=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,s=e.hasQuery,i=void 0!==s&&s;return n||a&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("g4pe"),s=n.n(a),i=n("o0o1"),c=n.n(i);function o(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){o(s,r,a,i,c,"next",e)}function c(e){o(s,r,a,i,c,"throw",e)}i(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?h(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=n("q1tI"),g=n.n(v);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var O=function(e){m(n,e);var t=x(n);function n(e){var r;return l(this,n),(r=t.call(this,e)).state={articles:Array()},r.getData=r.getData.bind(h(r)),r}return d(n,[{key:"getData",value:function(){var e=u(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://midwestern-test.netlify.app/articles");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({articles:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(r.jsx)("section",{id:"articles",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Heading One"}),Object(r.jsx)("div",{className:"articles__wrapper",children:this.state.articles.map((function(e){return Object(r.jsxs)("div",{className:"article",children:[Object(r.jsx)("div",{className:"article__image",style:{backgroundImage:"url(".concat(e.image,")")}}),Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{children:e.body}),Object(r.jsx)("a",{className:"button",children:"Read More"})]},e.id)}))})]})})}}]),n}(g.a.Component),w=n("rePB");function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var _=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),k=function(e){m(n,e);var t=S(n);function n(e){var r;return l(this,n),r=t.call(this,e),Object(w.a)(h(r),"handleChange",(function(e,t){switch(e){case"email":r.setState({email:t}),_.test(t)||r.setState({emailErrors:!0});break;case"subject":r.setState({subject:t});break;case"message":r.setState({message:t})}})),Object(w.a)(h(r),"handleSubmit",(function(e){r.setState({emailErrors:!1,subjectErrors:!1,messageErrors:!1}),e.preventDefault(),r.state.emailErrors||r.state.messageErrors||r.state.subjectErrors||""==r.state.subject||""==r.state.subject?(_.test(r.state.email)||r.setState({emailErrors:!0}),""==r.state.subject&&r.setState({subjectErrors:!0}),""==r.state.message&&r.setState({messageErrors:!0}),console.error("Invalid Form")):r.setState({submitted:!0})})),r.state={email:"",subject:"",message:"",emailErrors:!1,subjectErrors:!1,messageErrors:!1,submitted:!1},r}return d(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[!this.state.submitted&&Object(r.jsxs)("form",{className:this.state.submitted?"hidden":"",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(r.jsxs)("fieldset",{className:this.state.emailErrors?"error":"",children:[Object(r.jsxs)("label",{htmlFor:"email",children:["Email ",Object(r.jsx)("span",{children:Object(r.jsx)("em",{children:"Must use a valid email."})})]}),Object(r.jsx)("input",{type:"email",name:"email",onChange:function(t){return e.handleChange("email",t.target.value)}})]}),Object(r.jsxs)("fieldset",{className:this.state.subjectErrors?"error":"",children:[Object(r.jsxs)("label",{htmlFor:"subject",children:["Subject ",Object(r.jsx)("span",{children:Object(r.jsx)("em",{children:"Subject is required."})})]}),Object(r.jsx)("input",{type:"text",name:"subject",onChange:function(t){return e.handleChange("subject",t.target.value)}})]}),Object(r.jsxs)("fieldset",{className:this.state.messageErrors?"error":"",children:[Object(r.jsxs)("label",{htmlFor:"message",children:["Message ",Object(r.jsx)("span",{children:Object(r.jsx)("em",{children:"Message is required."})})]}),Object(r.jsx)("textarea",{rows:8,name:"message",onChange:function(t){return e.handleChange("message",t.target.value)}})]}),Object(r.jsx)("fieldset",{className:"submit",children:Object(r.jsx)("button",{className:"button",children:"Submit"})})]}),this.state.submitted&&Object(r.jsxs)("div",{className:"success "+(this.state.submitted?"":"hidden"),children:[Object(r.jsx)("h2",{children:"Thank you for reaching out to us!"}),Object(r.jsx)("p",{children:"Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum."})]})]})}}]),n}(g.a.Component);function E(){return Object(r.jsx)("section",{className:"contact",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Contact"}),Object(r.jsx)(k,{})]})})}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var N=function(e){m(n,e);var t=C(n);function n(e){var r;return l(this,n),(r=t.call(this,e)).state={lists:[],finalArray:[]},r.combineLists=r.combineLists.bind(h(r)),r.getData=r.getData.bind(h(r)),r}return d(n,[{key:"getData",value:function(){var e=u(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://midwestern-test.netlify.app/lists.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({lists:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"combineLists",value:function(e){e.preventDefault(),this.state.finalArray.length>0&&alert("You've already calculated the final list!");var t=new Set([].concat(A(this.state.lists[0]),A(this.state.lists[1]))),n=Array.from(t);this.setState({finalArray:n})}},{key:"render",value:function(){return Object(r.jsx)("section",{className:"test",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Heading One"}),Object(r.jsxs)("p",{children:["Remove the duplicates in 2 javascript objects and output the list of distinct names in an aunordered list when this",Object(r.jsx)("a",{className:"inline-link",onClick:this.combineLists,children:"link is clicked"}),". If the operation has been completed already notify the user that this has already been done."]}),Object(r.jsxs)("div",{className:"list__wrapper",children:[this.state.lists.map((function(e,t){return Object(r.jsxs)("div",{className:"list",children:[Object(r.jsxs)("h3",{children:["List # ",t+1]}),Object(r.jsx)("ul",{className:"objects__wrapper",children:e.map((function(e,t){return Object(r.jsx)("li",{className:"object",children:e},t)}))},t)]},t)})),this.state.finalArray.length>0&&Object(r.jsxs)("div",{className:"list list--final",children:[Object(r.jsx)("h3",{children:"Final List"}),Object(r.jsx)("ul",{children:this.state.finalArray.map((function(e,t){return Object(r.jsx)("li",{className:"object",children:e},t)}))})]})]})]})})}}]),n}(g.a.Component);t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:"Megan Blevins - Midwestern Interactive"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)(O,{}),Object(r.jsx)(E,{}),Object(r.jsx)(N,{})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),o=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var s=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?s=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(var o=0,u=d.length;o<u;o++){var l=d[o];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{var f=a.props[l],h=r[l]||new Set;"name"===l&&i||!h.has(f)?(h.add(f),r[l]=h):s=!1}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,o.isInAmpMode)(n)},t)}p.rewind=function(){};var m=p;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),s=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||s(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),s=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),o=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var a=o(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var s;return a(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["/EDR",0,2,1]]]);