(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+EG+":function(e,t,n){"use strict";var r,o,i,u;n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u}),r=n("mrSG"),o=n("q1tI"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return o.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})},t}(o.Component),u=o.createContext(null)},"6uNr":function(e,t,n){e.exports={menuWrap:"menuWrap-1gEtmoET",isMeasuring:"isMeasuring-FZ0EJCM2",scrollWrap:"scrollWrap-1B5MfTJt",momentumBased:"momentumBased-1Jq4gQt2",menuBox:"menuBox-20sJGjtG",isHidden:"isHidden-2vLQpR1t"}},"8Rai":function(e,t,n){"use strict";function r(e){var t=e.click,n=e.mouseDown,r=e.touchEnd,s=e.touchStart,a=e.handler,l=e.ownerDocument,c=void 0===l?document:l,d=Object(o.useRef)(null),p=Object(o.useRef)(new i.CustomEvent("timestamp").timeStamp);return Object(o.useLayoutEffect)(function(){var e={click:t,mouseDown:n,touchEnd:r,touchStart:s};return Object(u.a)(p.current,d.current,a,c,e)},[t,n,r,s,a]),d}var o,i,u;n.d(t,"a",function(){return r}),o=n("q1tI"),i=n("efOF"),u=n("R5JZ")},DTHj:function(e,t,n){"use strict";function r(e){var t=Object(s.useState)(null),n=t[0],r=t[1],o=Object(s.useRef)(null),i=Object(s.useRef)(new Map);return Object(s.useEffect)(function(){return function(){null!==o.current&&clearTimeout(o.current)}},[]),a.a.createElement(b.Provider,{value:{current:n,setCurrent:function(e){null!==o.current&&(clearTimeout(o.current),o.current=null),null===n?r(e):o.current=setTimeout(function(){o.current=null,r(e)},100)},registerSubmenu:function(e,t){return i.current.set(e,t),function(){i.current.delete(e)}},isSubmenuNode:function(e){return Array.from(i.current.values()).some(function(t){return t(e)})}}},e.children)}function o(e){var t=Object(d.ensureNotNull)(Object(s.useContext)(b));return a.a.createElement("div",{className:e.className,onMouseOver:function(e){null!==t.current&&e.target instanceof Node&&(t.isSubmenuNode(e.target)||t.setCurrent(null))},"data-name":"menu-inner"},e.children)}var i,u=n("mrSG"),s=n("q1tI"),a=n.n(s),l=n("TSYQ"),c=n.n(l),d=n("Eyy1"),p=n("Hr11"),h=n("XAms"),f=n("+EG+"),m=n("tWVy"),v=n("jAh7"),_=n("lxNp"),b=a.a.createContext(null),g=n("PN6A"),y=n("6uNr");n.d(t,"a",function(){return i}),i=function(e){function t(t){var n=e.call(this,t)||this;return n._containerRef=null,n._scrollWrapRef=null,n._raf=null,n._manager=new v.OverlapManager,n._hotkeys=null,n._scroll=0,n._handleContainerRef=function(e){n._containerRef=e,"function"==typeof n.props.reference&&n.props.reference(e),"object"==typeof n.props.reference&&(n.props.reference.current=e)},n._handleScrollWrapRef=function(e){return n._scrollWrapRef=e},n._handleMeasure=function(e){var t,r,o,i,u,s,a,l,c,h,f,m,v,_,b,g;n.state.isMeasureValid||(t=n.props.position,o=(r=Object(d.ensureNotNull)(n._containerRef)).getBoundingClientRect(),i=document.documentElement.clientHeight,
u=document.documentElement.clientWidth,s=i-0,(a=o.height>s)&&(Object(d.ensureNotNull)(n._scrollWrapRef).style.overflowY="scroll",o=r.getBoundingClientRect()),l=o.width,c=o.height,f=0,m=u-((h="function"==typeof t?t(l,c):t).overrideWidth||l)-0,v=Object(p.clamp)(h.x,f,Math.max(f,m)),_=0,b=i-(h.overrideHeight||c)-0,g=Object(p.clamp)(h.y,_,Math.max(_,b)),n.setState({appearingMenuHeight:h.overrideHeight||(a?s:void 0),appearingMenuWidth:h.overrideWidth,appearingPosition:{x:v,y:g},isMeasureValid:!0},function(){n._restoreScrollPosition(),e&&e()}))},n._restoreScrollPosition=function(){var e=document.activeElement,t=Object(d.ensureNotNull)(n._containerRef);if(null!==e&&t.contains(e))try{e.scrollIntoView()}catch(e){}else Object(d.ensureNotNull)(n._scrollWrapRef).scrollTop=n._scroll},n._resize=function(){null===n._raf&&(n._raf=requestAnimationFrame(function(){n.setState({appearingMenuHeight:void 0,appearingMenuWidth:void 0,appearingPosition:void 0,isMeasureValid:void 0}),n._raf=null}))},n._handleGlobalClose=function(){n.props.onClose()},n._handleSlot=function(e){n._manager.setContainer(e)},n._handleScroll=function(){n._scroll=Object(d.ensureNotNull)(n._scrollWrapRef).scrollTop},n.state={},n}return Object(u.__extends)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.isOpened&&!e.isOpened&&(this.setState({isMeasureValid:void 0}),this._scroll=0)},t.prototype.componentDidMount=function(){var e,t=this;this._handleMeasure(this.props.onOpen),(void 0===(e=this.props.customCloseDelegate)?m.a:e).subscribe(this,this._handleGlobalClose),window.addEventListener("resize",this._resize),this._hotkeys||(this._hotkeys=_.createGroup({desc:"Popup menu"}),this._hotkeys.add({desc:"Close",hotkey:27,handler:function(){return t._handleGlobalClose()}}))},t.prototype.componentDidUpdate=function(){this._handleMeasure()},t.prototype.componentWillUnmount=function(){var e=this.props.customCloseDelegate;(void 0===e?m.a:e).unsubscribe(this,this._handleGlobalClose),window.removeEventListener("resize",this._resize),this._hotkeys&&(this._hotkeys.destroy(),this._hotkeys=null),null!==this._raf&&(cancelAnimationFrame(this._raf),this._raf=null)},t.prototype.render=function(){var e=this.props,t=e.children,n=e.minWidth,i=e.theme,u=void 0===i?y:i,s=e.className,l=e.onMouseOver,d=e.onMouseOut,p=e.onKeyDown,m=this.state,v=m.appearingMenuHeight,_=m.appearingMenuWidth,b=m.appearingPosition,E=m.isMeasureValid;return a.a.createElement(g.a.Provider,{value:this},a.a.createElement(r,null,a.a.createElement(f.b.Provider,{value:this._manager},a.a.createElement("div",{className:c()(s,u.menuWrap,!E&&u.isMeasuring),style:{height:v,left:b&&b.x,minWidth:n,position:"fixed",top:b&&b.y,width:_},ref:this._handleContainerRef,onScroll:this.props.onScroll,onContextMenu:h.b,tabIndex:this.props.tabIndex,onMouseOver:l,onMouseOut:d,onKeyDown:p},a.a.createElement("div",{className:c()(u.scrollWrap,!this.props.noMomentumBasedScroll&&u.momentumBased),style:{overflowY:void 0!==v?"scroll":"auto"},onScroll:this._handleScroll,ref:this._handleScrollWrapRef},a.a.createElement(o,{
className:u.menuBox},t)))),a.a.createElement(f.a,{reference:this._handleSlot})))},t.prototype.update=function(){this._resize()},t}(a.a.PureComponent)},PN6A:function(e,t,n){"use strict";var r,o;n.d(t,"a",function(){return o}),r=n("q1tI"),o=n.n(r).a.createContext(null)},R5JZ:function(e,t,n){"use strict";function r(e,t,n,r,o){function i(o){if(!(e>o.timeStamp)){var i=o.target;void 0!==n&&null!==t&&null!==i&&i.ownerDocument===r&&(t.contains(i)||n(o))}}return o.click&&r.addEventListener("click",i,!1),o.mouseDown&&r.addEventListener("mousedown",i,!1),o.touchEnd&&r.addEventListener("touchend",i,!1),o.touchStart&&r.addEventListener("touchstart",i,!1),function(){r.removeEventListener("click",i,!1),r.removeEventListener("mousedown",i,!1),r.removeEventListener("touchend",i,!1),r.removeEventListener("touchstart",i,!1)}}n.d(t,"a",function(){return r})}}]);