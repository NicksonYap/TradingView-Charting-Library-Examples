(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"4qhP":function(n,e,t){"use strict";function r(n){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'\(\)~]|%20|%00/g,function(n){return e[n]})}function o(n){var e=[];return n&&Object.keys(n).forEach(function(t){e.push(r(t)+"="+r(n[t]))}),e.join("&")}function i(){U||(U=!0,_[2]=$.t("Market"),_[1]=$.t("Limit"),_[3]=$.t("Stop",{context:"order"}),_[4]=$.t("StopLimit"),J[1]=$.t("Buy",{context:"trading"}),J[-1]=$.t("Sell",{context:"trading"}),Q[2]=$.t("filled"),Q[1]=$.t("cancelled"),Q[6]=$.t("working"),Q[3]=$.t("inactive"),Q[4]=$.t("placing"),Q[5]=$.t("rejected"))}function u(n){return n?n.map(function(n){return"-"===n.text||n.separator?new E.Separator:new E.Action({name:n.name,checkable:n.checkable,checked:n.checked,disabled:void 0!==n.enabled&&!n.enabled,shortcut:n.shortcut,label:n.text,statName:n.statName,icon:n.icon,onExecute:function(e){n.action({checkable:e.isCheckable(),checked:e.isChecked(),enabled:!e.isDisabled(),text:e.getLabel().toString()})}})}):[]}function c(n){return n?n.map(function(n){if("-"===n.text||n.separator)return{separator:!0};var e={};return n.checkable&&(e.icon={image:"url('"+TradingView.wrapUrl("/static/images/dialogs/checkbox.png")+"')",offset:n.checked?"0 -16px":""}),e.title=n.text,e.action=n.action,n.url&&(e.url=n.url),n.target&&(e.target=n.target),n.externalLink&&(e.externalLink=n.externalLink),e}):[]}function a(n){if(!n||!n.done)return n;var e=n;return new Promise(function(n,t){e.done(function(e){n(e)}).fail(function(n){t(n)})})}function s(n,e){i();var t=J[n];return e?t.toUpperCase():t}function f(n,e){return i(),e?_[n].toUpperCase():_[n]}function d(n){return i(),Q[n]}function l(n){switch(n){case 2:return"orderstatus-filled";case 1:return"orderstatus-cancelled";case 6:return"orderstatus-working";case 3:return"orderstatus-inactive";case 4:return"orderstatus-placing";case 5:return"orderstatus-rejected";default:return"orderstatus-unknown"}}function p(n){return 6===n||3===n}function m(n){return n.indexOf("JPY")===n.length-3?.01:1e-4}function g(n,e,t,r,o){var i={added:[],modified:[],removed:[]},u=n.slice(0);return e.forEach(function(e){var c,a,s,f,d,l=n.findIndex(function(n){return n[t]===e[t]});if(-1!==l){for(u[l]=null,c=n[l],a=0,s=r;a<s.length;a++)if(d=!0,null===c[f=s[a]]||"object"!=typeof c[f]?d=c[f]===e[f]:o&&(d=Object(F.deepEquals)(c[f],e[f])[0]),!d)return void i.modified.push(e)}else i.added.push(e)}),u.forEach(function(n){n&&i.removed.push(n)}),i}function b(n,e,t){var r,o,i;for(r=0,o=t;r<o.length;r++)if((null===n[i=o[r]]||"object"!=typeof n[i])&&n[i]!==e[i])return!0;return!1}function h(n,e){return n.reduce(function(n,t){return n[t[e]]=t,n},{})}function k(n){return Math.abs(n||0)<.001?"0.00":Object(A.splitThousands)((n||0).toFixed(2))}function v(n){return-1!==[2,1,5].indexOf(n)}function y(n,e){return void 0===e&&(e=[1,100,1e3,5e3]),function t(r){return n().catch(function(n){return r<e.length?X(e[r]).then(function(){return t(r+1)}):Promise.reject(n)})}(0)}function x(n){
return-1!==Object.keys(I.OrderOrPositionMessageType).map(function(n){return I.OrderOrPositionMessageType[n]}).indexOf(n)}function w(n,e,t,r){var o=0,i=Object(M.fixComputationError)(n/e);return(1===t&&1===r||2===t&&-1===r)&&(o=Math.floor(i)*e),(1===t&&-1===r||2===t&&1===r)&&(o=Math.ceil(i)*e),Object(M.fixComputationError)(o)}function O(n){var e;return e=n instanceof Error?n.message:"object"==typeof n?JSON.stringify(n):n.toString(),Object(L.removeTags)(e)}function P(n){var e=n.disconnectWarningMessage&&n.disconnectWarningMessage();return e?new Promise(function(n){Object(B.createConfirmDialog)({title:window.t("Disconnect Confirmation"),content:e,type:"modal",actions:[{name:"yes",type:"danger",text:window.t("Disconnect"),key:13},{name:"cancel",type:"default",text:window.t("Cancel"),method:"close"}]}).then(function(e){e.on("action:yes",function(e){e.close(),n(!0)}),e.on("action:cancel",function(e){e.close(),n(!1)}),e.open()})}):Promise.resolve(!0)}function j(n){return n.map(function(n){return n.metainfo.id})}function T(n){return n.findIndex(function(n){return n.brokerPlan&&!n.brokerPlan.hidden&&n.brokerPlan.flags&&n.brokerPlan.flags.includes("featured")})}function C(n,e){return Object(N.ensureDefined)(n.find(function(n){return n.id.toLowerCase()===e.toLowerCase()}))}function D(n,e){var t=n.map(function(n){return n.id}),r=e.map(function(n){return n.slug_name}),o=e.filter(function(n){return t.includes(n.slug_name)}).map(function(e){return{metainfo:C(n,e.slug_name),brokerPlan:e}}),i=n.filter(function(n){return!r.includes(n.id)&&!R.includes(n.id)}).map(function(n){return{metainfo:n}}),u=T(o),c=R.map(function(e){return{metainfo:C(n,e)}});return c.length>0&&o.splice.apply(o,Object(S.__spreadArrays)([u+1,0],c)),Object(S.__spreadArrays)(o,i)}var S,M,E,I,A,F,L,N,B,_,J,Q,U,W,q,R,X;t.r(e),S=t("mrSG"),t("YFKU"),M=t("ivNn"),E=t("7KDR"),I=t("OekH"),A=t("9XXR"),F=t("ogJP"),L=t("LIFs"),N=t("Eyy1"),B=t("oNDq"),t.d(e,"bottomTradingTabClassName",function(){return W}),t.d(e,"isPositionActive",function(){return q}),t.d(e,"afterFeaturedBrokerIds",function(){return R}),t.d(e,"createQueryParams",function(){return o}),t.d(e,"convertActionDescriptionsToActions",function(){return u}),t.d(e,"convertActionDescriptionsToPopupMenuDescriptions",function(){return c}),t.d(e,"wrapDeferredWithPromise",function(){return a}),t.d(e,"sideToText",function(){return s}),t.d(e,"orderTypeToText",function(){return f}),t.d(e,"orderStatusToText",function(){return d}),t.d(e,"orderStatusId",function(){return l}),t.d(e,"isOrderActive",function(){return p}),t.d(e,"pipSizeForForex",function(){return m}),t.d(e,"findArraysDifferences",function(){return g}),t.d(e,"isObjectDifferent",function(){return b}),t.d(e,"objectsArrayToMap",function(){return h}),t.d(e,"formatNumber",function(){return k}),t.d(e,"isFinalOrderStatus",function(){return v}),t.d(e,"retryWithChangingIntervals",function(){return y}),t.d(e,"isOrderOrPositionMessageType",function(){return x}),t.d(e,"roundToStepByPriceTypeAndSide",function(){return w}),t.d(e,"getErrorMessage",function(){return O}),
t.d(e,"showDisconnectWarningIfNeeded",function(){return P}),t.d(e,"filteredBrokerIds",function(){return j}),t.d(e,"getFeaturedBrokerIdx",function(){return T}),t.d(e,"brokerMetaInfoById",function(){return C}),t.d(e,"brokersListFromPlans",function(){return D}),_={},J={},Q={},U=!1,W="js-bottom-trading-tab",q=function(n){return 0!==n.qty||0!==n.longQty&&void 0!==n.longQty||0!==n.shortQty&&void 0!==n.shortQty},R=["Paper"],X=function(n){return new Promise(function(e){return setTimeout(e,n)})}},"9XXR":function(n,e,t){"use strict";function r(n,e){var t,r;return void 0===e&&(e="&nbsp;"),-1!==(t=n+"").indexOf("e")&&(t=function(n){return Object(o.fixComputationError)(n).toFixed(10).replace(/\.?0+$/,"")}(Number(n))),(r=t.split("."))[0].replace(/\B(?=(\d{3})+(?!\d))/g,e)+(r[1]?"."+r[1]:"")}var o;t.r(e),t.d(e,"splitThousands",function(){return r}),o=t("ivNn")}}]);