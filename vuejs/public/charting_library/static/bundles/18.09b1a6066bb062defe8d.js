(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/KDZ":function(e,t,n){"use strict";var r,o,a;n.d(t,"a",function(){return a}),r=n("mrSG"),o=n("q1tI"),a=function(e){function t(t){var n=e.call(this,t)||this;return n._handleChange=function(){n.forceUpdate()},n.state={query:window.matchMedia(n.props.rule)},n}return Object(r.__extends)(t,e),t.prototype.componentDidMount=function(){this._subscribe(this.state.query)},t.prototype.componentDidUpdate=function(e,t){this.state.query!==t.query&&(this._unsubscribe(t.query),this._subscribe(this.state.query))},t.prototype.componentWillUnmount=function(){this._unsubscribe(this.state.query)},t.prototype.render=function(){return this.props.children(this.state.query.matches)},t.getDerivedStateFromProps=function(e,t){return e.rule!==t.query.media?{query:window.matchMedia(e.rule)}:null},t.prototype._subscribe=function(e){e.addListener(this._handleChange)},t.prototype._unsubscribe=function(e){e.removeListener(this._handleChange)},t}(o.PureComponent)},"8NUT":function(e,t,n){e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",footer:"footer-1mvnCDqp",submitButton:"submitButton-2lNICzl3",buttons:"buttons-3yvtQ_uI"}},ASyk:function(e,t,n){e.exports={"tablet-normal-breakpoint":"screen and (max-width: 768px)","small-height-breakpoint":"screen and (max-height: 360px)","tablet-small-breakpoint":"screen and (max-width: 419px)"}},ItnF:function(e,t,n){e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",dialog:"dialog-2QwUBM-N",wrapper:"wrapper-3ePvQMAQ",header:"header-wLx8lLYF",title:"title-1G1MZPHW",ellipsis:"ellipsis-DluwX2yc",closeButton:"closeButton-2yDdjHyO"}},g89m:function(e,t,n){"use strict";var r,o,a,i,l,s,u,c,d,p,m,h,f,b,_,C,y,v,w,g;n.d(t,"a",function(){return g}),r=n("mrSG"),o=n("q1tI"),a=n.n(o),i=n("Eyy1"),l=n("TSYQ"),s=n.n(l),u=n("/3z9"),c=n("d700"),d=n("WXjp"),p=n("uhCe"),m=n("/KDZ"),h=n("jjrI"),f=n("pafz"),b=n("ZjKI"),_=n("FQhm"),C=n("ItnF"),y=n("zztK"),v={vertical:20},w={vertical:0},g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._controller=null,t._reference=null,t._renderChildren=function(e,n){return t._controller=e,t.props.render({requestResize:t._requestResize,isSmallWidth:n})},t._handleReference=function(e){return t._reference=e},t._handleClose=function(){t.props.onClose()},t._handleKeyDown=function(e){var n,r,o;if(!e.defaultPrevented)switch(t.props.onKeyDown&&t.props.onKeyDown(e),Object(u.hashFromEvent)(e)){case 27:if(n=document.activeElement,r=Object(i.ensureNotNull)(t._reference),null!==n){if(e.preventDefault(),"true"===(o=n).getAttribute("data-haspopup")&&"true"!==o.getAttribute("data-expanded"))return void t._handleClose();if(Object(c.b)(n))return void r.focus();if(r.contains(n))return void t._handleClose()}}},t._requestResize=function(){null!==t._controller&&t._controller.recalculateBounds()},t}return Object(r.__extends)(t,e),t.prototype.componentDidMount=function(){_.subscribe(b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null)},t.prototype.componentWillUnmount=function(){
_.unsubscribe(b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null)},t.prototype.focus=function(){Object(i.ensureNotNull)(this._reference).focus()},t.prototype.render=function(){var e=this,t=this.props,n=t.className,r=t.isOpened,o=t.title,i=t.dataName,l=t.onClickOutside,u=t.additionalHeaderElement,c=t.backdrop;return a.a.createElement(m.a,{rule:p.a.SmallHeight},function(t){return a.a.createElement(m.a,{rule:p.a.TabletSmall},function(p){return a.a.createElement(d.a,{className:s()(C.dialog,n),isOpened:r,reference:e._handleReference,onKeyDown:e._handleKeyDown,onClickOutside:l,fullscreen:p,guard:t?w:v,boundByScreen:p,shouldForceFocus:!0,backdrop:c},a.a.createElement("div",{className:C.wrapper,"data-name":i,"data-dialog-name":o},a.a.createElement("div",{className:C.header},u,a.a.createElement("div",{"data-dragg-area":!0,className:C.title},a.a.createElement("div",{className:C.ellipsis},o)),a.a.createElement(h.a,{className:C.closeButton,icon:y,onClick:e._handleClose,"data-name":"close","data-role":"button"})),a.a.createElement(f.a.Consumer,null,function(t){return e._renderChildren(t,p)})))})})},t}(a.a.PureComponent)},uhCe:function(e,t,n){"use strict";var r,o;n.d(t,"a",function(){return o}),r=n("ASyk"),o={SmallHeight:r["small-height-breakpoint"],TabletSmall:r["tablet-small-breakpoint"],TabletNormal:r["tablet-normal-breakpoint"]}},ycFu:function(e,t,n){"use strict";var r,o,a,i,l,s,u,c,d,p,m;n.d(t,"b",function(){return d}),n.d(t,"a",function(){return m}),r=n("mrSG"),o=n("q1tI"),a=n.n(o),i=n("vWed"),l=n("Eyy1"),n("YFKU"),s=n("/3z9"),u=n("g89m"),c=n("8NUT"),function(e){e.Submit="submit",e.Cancel="cancel",e.None="none"}(d||(d={})),p={defaultActionOnClose:d.Submit,submitOnEnterKey:!0},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._dialogRef=a.a.createRef(),t._handleClose=function(){var e=t.props,n=e.defaultActionOnClose,r=e.onSubmit,o=e.onCancel,a=e.onClose;switch(n){case d.Submit:r();break;case d.Cancel:o()}a()},t._handleCancel=function(){t.props.onCancel(),t.props.onClose()},t._handleKeyDown=function(e){var n=t.props,r=n.onSubmit,o=n.submitButtonDisabled,a=n.submitOnEnterKey;switch(Object(s.hashFromEvent)(e)){case 13:!o&&a&&(e.preventDefault(),r())}},t}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=(e.render,e.onClose,e.onSubmit,e.onCancel,e.footerLeftRenderer,e.submitButtonText,e.submitButtonDisabled,e.defaultActionOnClose,e.submitOnEnterKey,Object(r.__rest)(e,["render","onClose","onSubmit","onCancel","footerLeftRenderer","submitButtonText","submitButtonDisabled","defaultActionOnClose","submitOnEnterKey"]));return a.a.createElement(u.a,Object(r.__assign)({},t,{ref:this._dialogRef,onKeyDown:this._handleKeyDown,render:this._renderChildren(),onClose:this._handleClose}))},t.prototype.focus=function(){Object(l.ensureNotNull)(this._dialogRef.current).focus()},t.prototype._renderChildren=function(){var e=this;return function(t){var n=e.props,r=n.render,o=n.footerLeftRenderer,l=n.additionalButtons,s=n.submitButtonText,u=n.submitButtonDisabled,d=n.onSubmit
;return a.a.createElement(a.a.Fragment,null,r(t),a.a.createElement("div",{className:c.footer},o&&o(t.isSmallWidth),a.a.createElement("div",{className:c.buttons},l,a.a.createElement(i.Button,{name:"cancel",appearance:"stroke",onClick:e._handleCancel},window.t("Cancel")),a.a.createElement("span",{className:c.submitButton},a.a.createElement(i.Button,{disabled:u,name:"submit",onClick:d},s||window.t("Ok"))))))}},t.defaultProps=p,t}(a.a.PureComponent)},zztK:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'}}]);