(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"7XZl":function(t,e,o){"use strict";var i,s,n,l,d,r;Object.defineProperty(e,"__esModule",{value:!0}),e.DropdownView=void 0,i=function(){function t(t,e){var o,i;for(o=0;o<e.length;o++)(i=e[o]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),o("TkT6"),s=o("29gu"),n=o("sFgq"),l=o("wmOI"),d=function(t){var e,o;if(t&&t.__esModule)return t;if(e={},null!=t)for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(l),r=e.DropdownView=function(){function t(e){var o=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,this.$wrap=i.$wrap||e.find(".tv-dropdown-behavior__button"),this.$body=i.$body||e.find(".tv-dropdown-behavior__body"),this.notCloseWithCtrl=!!i.notCloseWithCtrl&&i.notCloseWithCtrl,this.closeWithEsc=void 0===i.closeWithEsc||i.closeWithEsc,this.closeWithEsc&&this.$el.attr("tabIndex",0),(e.data("scroll")||i.scroll)&&(this.$scroll=this.$body.find(".tv-dropdown-behavior__scroll"),this.$inScroll=this.$scroll.find(".tv-dropdown-behavior__inscroll"),this.scroll=new n.SidebarCustomScroll(this.$scroll,this.$inScroll,{showTopShadow:!1,showBottomShadow:!1}),this.$scrollBar=this.scroll.getScrollBar(),this.$scrollBar&&this.$scrollBar.on("mousedown.tv-dropdown-view-scroll",function(){o.offClickOutside(),$(document).on("mouseup.tv-dropdown-view-scroll",function(){o.onClickOutside(),$(document).off("mouseup.tv-dropdown-view-scroll")})})),(e.data("adaptBody")||i.adaptBody)&&(this._adaptBody=!0),(e.data("adaptOnlyInScrollHeight")||i.adaptOnlyInScrollHeight)&&(this._adaptOnlyInScrollHeight=!0),this._fitScreen=e.data("fitScreen")||i.fitScreen,this._maxHeight=e.data("maxHeight")||i.maxHeight,this._dropdownWidth=e.data("dropdownWidth")||i.dropdownWidth,this._boundingElement=i.boundingElement,this.$wrap.add(e.find(".js-dropdown-toggle")).on("click",function(t){$(t.currentTarget).hasClass("js-prevent-dropdown")||o.toggle()}),this._checkIgnoreClickOutside=[]}return i(t,[{key:"toggle",value:function(){this.opened?this.close(!0):this.open()}},{key:"open",value:function(){var t=this;this.opened||this.disabled||this.readonly||(this.$el.trigger("beforeOpenMenu"),this.$body.removeClass("i-hidden").addClass("i-opened"),this.$wrap.addClass("i-dropped"),this.$el.addClass("i-opened"),"horz"===this._fitScreen&&this.fitHorizontally(),this._adaptBody&&this.adaptBody(),this.onClickOutside(),this.$el.trigger("updateScroll"),this.$el.trigger("afterOpenMenu"),this.opened=!0,this.closeWithEsc&&this.$el.on("keypress keyup",function(e){e.keyCode===d.ESC&&t.close(!0)}))}},{key:"onClickOutside",value:function(){var t=this;setTimeout(function(){t.$body.on("clickoutside",function(e){t._checkIgnoreClickOutside.length&&t._checkIgnoreClickOutside.some(function(t){return t(e)})||t.close(!0)})},0)}},{key:"offClickOutside",
value:function(){this.$body.off("clickoutside")}},{key:"setCheckIgnoreClickOutside",value:function(t){this._checkIgnoreClickOutside.push(t)}},{key:"dropCheckIgnoreClickOutside",value:function(t){var e=this._checkIgnoreClickOutside.indexOf(t);-1!==e&&this._checkIgnoreClickOutside.splice(e,1)}},{key:"close",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!this.opened||this.disabled||this.readonly||!t&&this.notCloseWithCtrl&&(window.event.ctrlKey||window.event.metaKey)||(this.offClickOutside(),this.$wrap.removeClass("i-dropped"),this.$el.trigger("beforeCloseMenu"),this.$body.removeClass("i-opened").addClass("i-hidden"),this.$el.removeClass("i-opened"),this.closeWithEsc&&this.$el.off("keypress keyup"),this.opened=!1,this.$el.trigger("afterCloseMenu"))}},{key:"isOpened",value:function(){return this.opened}},{key:"updateScroll",value:function(){this.scroll&&(this.scroll.updateScrollBar(),this.scroll.scrollToStart())}},{key:"enable",value:function(){this.$wrap.removeClass("i-disabled"),this.disabled=!1}},{key:"disable",value:function(){this.$wrap.addClass("i-disabled"),this.disabled=!0}},{key:"setReadonly",value:function(t){this.readonly=t}},{key:"adaptBody",value:function(){var t,e,o,i,s,n,l,d,r,h=15,a=25,c=this.$body,u=this.$wrap.get(0).getBoundingClientRect(),p=this._boundingElement?this._boundingElement.getBoundingClientRect():{top:0,bottom:window.innerHeight,height:window.innerHeight},f=parseFloat(c.css("padding-top")),g=parseFloat(c.css("padding-bottom")),y=this.$inScroll.outerHeight(!0)+f+g;if(this.scroll&&this.scroll.scrollToStart(),this._adaptOnlyInScrollHeight)return e=(t=c.find(".js-dropdown-dummy"))?parseFloat(t.css("padding-bottom"))+parseFloat(t.css("margin-bottom")):0,o=u.top+u.height+e,void this.$el.find(".tv-dropdown-behavior__scroll").css("maxHeight",p.bottom-g-o-a);i=this._maxHeight||y,s=u.top+i+a<=p.bottom,n=p.top+h+i<=u.bottom,l=this._maxHeight||"auto",d=void 0,s?d=-f:n?d=-i+u.height+g:(d=-u.top+p.top+h,i>(r=p.height-h-a)&&(l=r)),c.css("top",d),c.height(l),this._dropdownWidth&&c.width(this._dropdownWidth)}},{key:"fitHorizontally",value:function(){var t,e,o,i;this.$body.css("marginLeft",0),t=document.body.getBoundingClientRect(),e=parseFloat($(document.body).css("paddingRight")),(o=this.$body.offset()).right=o.left+this.$body.outerWidth(),(i=Math.max(Math.min(0,t.right-e-o.right),t.left-o.left))&&this.$body.css("marginLeft",i)}},{key:"destroy",value:function(){this.scroll&&this.scroll.destroy(),this.offClickOutside(),this.$el.find(".js-dropdown-toggle").off("click"),this.$wrap.off("click")}}]),t}(),$.fn.tvDropdown=(0,s.createTvBlockWithInstance)("tv-dropdown",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new r(t,e)})},TkT6:function(t,e,o){}}]);