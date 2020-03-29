(window.webpackJsonp=window.webpackJsonp||[]).push([["dialogs-core"],{nbyR:function(e,t,o){"use strict";function n(e){var t,o;if(e&&e.__esModule)return e;if(t={},null!=e)for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}var i,l,s,r,c,a,h,p,u,d,f,g,v,b,w,y,_,C;Object.defineProperty(t,"__esModule",{value:!0}),t.TVPopup=void 0,i=Object.assign||function(e){var t,o,n;for(t=1;t<arguments.length;t++)for(n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},l=function(){function e(e,t){var o,n;for(o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o("j1f4"),r=n(s),c=o("33OQ"),a=(C=c)&&C.__esModule?C:{default:C},h=o("KHon"),p=o("sFgq"),u=o("5qpw"),d=o("lxNp"),f=n(d),g=$("body"),v=$(window),b={closeOnClickAtOtherDialogs:!0,draggable:!0,scrollWrap:'<div class="tv-dialog__scroll-wrap">',scrollWrapInner:'<div class="tv-dialog__scroll-wrap-inner">',withScroll:!0},w="js-dialog__scroll-wrap",y=10,_=10,t.TVPopup=function(e){function t(){var e,o,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,i({},b,n)))).$scrollWrap=e.$content.hasClass(w)?e.$content:e.$content.find("."+w),e.$scrollWrap.length?e.$scrollWrapInner=e.$scrollWrap.children().first():(e.$scrollWrap=e.$content.wrap($(e.options.scrollWrap)).parent(),e.$scrollWrapInner=e.$content.wrap($(e.options.scrollWrapInner)).parent()),e.$actions&&e.$scrollWrap.addClass("i-with-actions"),e.options.withScroll&&(e.scroll=new p.SidebarCustomScroll(e.$scrollWrap,e.$scrollWrapInner),e.scroll.scrolled.subscribe(null,function(){return e.trigger("scroll")})),e.$scrollWrap.css("overflow",""),o=e.getDialogId(),e.$el.addClass("tv-dialog--popup i-closed i-hidden"),e.options.width&&e.$el.css({width:"calc(100% - "+2*_+"px)","max-width":e.options.width}),e._hotkeys=f.createGroup({desc:"Dialog",isDisabled:function(){return!e.opened},modal:!1}),e.options.closeOnEsc&&e._hotkeys.add({desc:"Close",hotkey:27,handler:function(){return e.close()}}),e.$el.on("mousedown touchstart",e.toTop.bind(e)),e.options.closeOnOutsideClick&&(e._preventClick=!0,e.on("beforeOpen",function(){setTimeout(function(){e.opened&&($(document).on("mousedown touchstart",function(){e._preventClick=!1}),$(document).on("click.tv-popup-"+o,function(t){if(!e._preventClick){var o=$(t.target).closest(".js-dialog");(e.options.closeOnClickAtOtherDialogs||0===o.length)&&e.isEventOut(t)&&e.close()}}))},0)}),e.on("beforeClose",function(){return $(document).off("click.tv-popup-"+o)})),e.on("change:zIndex",function(){e.$el.css("z-index",e.zIndex)}),e.on("destroy",function(){var t=function(){
e.$el.remove(),e._hotkeys.destroy()};e.opened?(e.close(),setTimeout(t,r.dur/2)):t()}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,h.TVDialogAbstract),l(t,[{key:"open",value:function(){var e,t,o,n,i,l=this;return this.opened?this:(this.opened=!0,this.trigger("beforeOpen",[this]),this.$el.appendTo(this.$wrap).removeClass("i-hidden").css((l.calcHeight(),e=v.height(),t=v.width(),o=l.$el.height(),n=l.$el.width(),(i=l.options.position)||(i={top:e/2-o/2,left:t/2-n/2}),i.top>e-o&&(i.top=e-o),i.left>t-n&&(i.left=t-n),i.top<y&&(i.top=y),i.left<_&&(i.left=_),i)),this.focus(),this.toTop(),this._doOpenAnimation().then(function(){l.opened&&(l.$el.removeClass("i-closed"),l.options.draggable&&((0,u.lazyJqueryUI)(l.$el).draggable({handle:".js-dialog__drag",cancel:"input, textarea, button, select, option, .js-dialog__no-drag, .js-dialog__close",containment:"window",cursor:"-webkit-grabbing"}),l.$el.find(".js-dialog__drag").addClass("tv-dialog__grab")),l.trigger("afterOpen",[l]))}),v.on("resize.tv-popup-"+this.getDialogId(),function(){l.calcHeight(),l.fixPos()}),this)}},{key:"close",value:function(){var e=this;if(this.opened)return this.trigger("beforeClose",[this]),this.$el.addClass("i-closed"),this.opened=!1,this._doCloseAnimation().then(function(){e.opened||((0,u.lazyJqueryUI)(e.$el).draggable("instance").then(function(e){e&&e.destroy()}),e.$el.addClass("i-hidden").detach(),g.css("cursor","auto"),e.trigger("afterClose",[e]),e.options.destroyOnClose&&e.destroy())}),v.off("resize.tv-popup-"+this.getDialogId()),this}},{key:"hide",value:function(){this.$el.addClass("i-hidden")}},{key:"show",value:function(){this.$el.removeClass("i-hidden")}},{key:"fixPos",value:function(){var e=this.$el[0].getBoundingClientRect(),t={};e.bottom>a.default.height-y&&(t.top=a.default.height-y-e.height,t.top<y&&(t.top=y)),e.right>a.default.width-_&&(t.left=a.default.width-_-e.width,t.left<_&&(t.left=_)),(t.top||t.left)&&this.$el.css(t)}},{key:"calcHeight",value:function(){var e,t,o=this.$el[0].getBoundingClientRect(),n=this.$scrollWrapInner[0].getBoundingClientRect(),i=this.$scrollWrap[0].getBoundingClientRect(),l=this.options.height&&this.options.height<a.default.height-2*y?this.options.height:a.default.height-2*y;this.$scrollWrap.css({height:""}).removeClass("i-scrollable"),e=this.$el[0].getBoundingClientRect(),(this.options.height||e.height>l)&&((l-=o.height-i.height)<60&&(l=60),this.$scrollWrap.css({height:l})),this.options.withScroll&&this.scroll.resize(),(t=l<n.height)||this.$scrollWrapInner.css("top",0),this.$scrollWrap.toggleClass("i-scrollable",t),this.$actions&&this.$actions.toggleClass("tv-dialog__section--actions_with-border",t)}},{key:"updateScroll",value:function(){this.scroll&&(this.scroll.updateScroll(),this.scroll.updateScrollBar())}},{key:"scrollToStart",
value:function(){this.scroll&&this.scroll.scrollToStart()}},{key:"_doOpenAnimation",value:function(){return Promise.resolve()}},{key:"_doCloseAnimation",value:function(){return Promise.resolve()}}]),t}()},tKRU:function(e,t,o){"use strict";var n=o("nbyR");o.d(t,"a",function(){return n.TVPopup})}}]);