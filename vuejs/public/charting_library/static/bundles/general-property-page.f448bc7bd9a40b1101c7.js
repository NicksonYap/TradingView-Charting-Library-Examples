(window.webpackJsonp=window.webpackJsonp||[]).push([["general-property-page"],{"1ANp":function(e,t,i){"use strict";function r(e){return e===d.AlwaysOn||e===d.AlwaysOff?e:d.VisibleOnMouseOver}function a(){if(!h){(h=Object(l.a)()).setValue(r(c.getValue("NavigationButtons.visibility"))),h.subscribe(h,function(e){c.setValue("NavigationButtons.visibility",r(e.value()))})}return h}function n(){return[{value:d.VisibleOnMouseOver,title:window.t("Visible on Mouse Over")},{value:d.AlwaysOn,title:window.t("Always Visible")},{value:d.AlwaysOff,title:window.t("Always Invisible")}]}function o(){var e,t;return u||(u=Object(l.a)(),t=function(){var t=e.value();t!==d.AlwaysOn&&t!==d.AlwaysOff&&(t=Modernizr.mobiletouch?d.AlwaysOn:d.VisibleOnMouseOver),u&&u.setValue(t)},(e=a()).subscribe(u,t),t()),u}var s,l,c,d,h,u;i.r(t),i.d(t,"VisibilityType",function(){return d}),i.d(t,"property",function(){return a}),i.d(t,"availableValues",function(){return n}),i.d(t,"actualBehavior",function(){return o}),i("YFKU"),s=i("bf9a"),l=i("m/cY"),c=i("Vdly"),function(e){e.AlwaysOn="alwaysOn",e.VisibleOnMouseOver="visibleOnMouseOver",e.AlwaysOff="alwaysOff"}(d||(d={}))},"34BO":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 7H7v14h2v3h1v-3h2V7h-2V4H9v3zM8 8v12h3V8H8zm9 1h-2v10h2v3h1v-3h2V9h-2V6h-1v3zm-1 1v8h3v-8h-3z"/></svg>'},"5lPo":function(e,t,i){"use strict";var r,a,n,o,s,l,c,d,h,u,p,b,g,w,y,O,v,m,P,j,f,C,S,_,V,L,k,x,M,A,B,z,T,D,N,H,R,E,F,I,W,G,Z,q,U,K,Q,Y,J,X,$,ee,te,ie,re,ae,ne,oe,se,le,ce,de,he,ue,pe,be,ge,we,ye,Oe,ve,me,Pe,je,fe,Ce,Se,_e,Ve;i.r(t),r=i("mrSG"),a=i("Eyy1"),n=i("Kxc7"),o=i("N22A"),s=i("hY0g"),l=i.n(s),c=i("HSjo"),d=i("1yQO"),h=i("1ANp"),u=i("MWAT"),p=i("zqjM"),b=i("qFKp"),g=window.t("Symbol"),w=window.t("OHLC Values"),y=window.t("Bar Change Values"),O=window.t("Indicator Titles"),v=window.t("Indicator Arguments"),m=window.t("Indicator Values"),P=window.t("Background"),j=window.t("Wrap text"),f=b.CheckMobile.any(),C=i("oXaB"),S=i("Z5lT"),_=window.t("Symbol Name Label"),V=window.t("Symbol Last Value Label"),L=window.t("Symbol Previous Close Value Label (Intraday Only)"),k=window.t("Indicator Name Label"),x=window.t("Indicator Last Value Label"),window.t("Financials Name Label"),window.t("Financials Last Value Label"),M=window.t("Countdown To Bar Close"),A=window.t("Currency"),B=window.t("Scales Placement"),z=window.t("Date Format"),T=window.t("Lock Price to Bar Ratio"),D=window.t("No Overlapping Labels"),N=[{value:C.PriceAxisLastValueMode.LastPriceAndPercentageValue,title:window.t("Price and Percentage Value")},{value:C.PriceAxisLastValueMode.LastValueAccordingToScale,title:window.t("Value according to Scale")}],H=window.t("Background"),R=window.t("Vert Grid Lines"),E=window.t("Horz Grid Lines"),F=window.t("Session Breaks"),I=window.t("Scales text"),W=window.t("Scales lines"),G=window.t("Crosshair"),Z=window.t("Watermark"),q=window.t("Top Margin"),U=window.t("Navigation Buttons"),K=window.t("Bottom Margin"),
Q=window.t("Right Margin"),Y=window.t("bars",{context:"unit"}),J=i("e1ZQ"),X=i("ZZnO"),$=i("gQ5K"),ee=window.t("Show Positions"),te=window.t("Show Orders"),ie=window.t("Extend Lines Left"),re=window.t("Connecting Line"),ae=window.t("Show Executions"),ne=window.t("Show Buy/Sell Panel"),oe=window.t("Instant orders placement"),se=window.t("Show Rejection Notifications Only"),le=window.t("Show Price Levels with No Asks and Bids in DOM"),ce=window.t("Play Sound on Order Execution"),de=i("+6ja"),he=i("34BO"),ue=i("ggCF"),pe=i("Iilx"),be=i("DyO1"),ge=i("iUxq"),we=i("WS5G"),(ye={}).symbol=he,ye.legend=ue,ye.scales=pe,ye.appearance=be,ye.events=ge,ye.trading=we,Oe=ye,i.d(t,"ChartPropertyDefinitionsViewModel",function(){return Ve}),ve=window.t("Symbol"),me=window.t("Status line"),Pe=window.t("Scales"),je=window.t("Appearance"),window.t("Events"),fe=window.t("Trading"),Ce=n.enabled("chart_property_page_trading"),Se=null,Ce&&(Se=Object(o.tradingService)()),_e=[{value:"description",title:window.t("Description")},{value:"ticker",title:window.t("Ticker")}],Ve=function(){function e(e,t,i){this._propertyPages=null,this._maxRightOffsetPropertyObject=null,this._isDestroyed=!1,this._undoModel=e,this._model=this._undoModel.model(),this._series=this._model.mainSeries(),this._chartWidgetProperties=t,this._options=i,this._seriesPropertyDefinitionViewModel=this._createSeriesViewModel(),this._legendPropertyPage=this._createLegendPropertyPage(),this._scalesPropertyPage=this._createScalesPropertyPage(),this._appearancePropertyPage=this._createAppearancePropertyPage(),this._tradingPropertyPage=this._createTradingPropertyPage(),this._eventsPropertyPage=this._createEventsPropertyPage(),this._series.onStyleChanged().subscribe(this,this._updateDefinitions),this._series.priceScaleChanged().subscribe(this,this._updateDefinitions)}return e.prototype.destroy=function(){null!==this._propertyPages&&this._propertyPages.filter(function(e,t){return 0!==t}).forEach(function(e){Object(c.t)(e.definitions.value())}),this._seriesPropertyDefinitionViewModel.destroy(),this._series.onStyleChanged().unsubscribe(this,this._updateDefinitions),this._series.priceScaleChanged().unsubscribe(this,this._updateDefinitions),Object(a.ensureNotNull)(this._model.timeScale()).maxRightOffsetChanged().unsubscribeAll(this),this._isDestroyed=!0},e.prototype.propertyPages=function(){var e=this;return null===this._propertyPages?this._seriesPropertyDefinitionViewModel.propertyPages().then(function(t){if(e._isDestroyed)throw new Error("ChartPropertyDefinitionsViewModel already destroyed");return null===e._propertyPages&&(e._propertyPages=Object(r.__spreadArrays)(t),e._propertyPages.push(e._legendPropertyPage,e._scalesPropertyPage,e._appearancePropertyPage),null!==e._tradingPropertyPage&&e._propertyPages.push(e._tradingPropertyPage),null!==e._eventsPropertyPage&&e._propertyPages.push(e._eventsPropertyPage)),e._propertyPages}):Promise.resolve(this._propertyPages)},e.prototype._updateDefinitions=function(){Object(c.t)(this._scalesPropertyPage.definitions.value())
;var e=this._createScalesDefinitions();this._scalesPropertyPage.definitions.setValue(e)},e.prototype._createSeriesViewModel=function(){var e={property:this._model.properties().timezone,values:de.availableTimezones.map(function(e){return{value:e.id,title:e.title}})};return new p.a(this._series,this._undoModel,"symbol",ve,Oe.symbol,e)},e.prototype._createLegendPropertyPage=function(){var e=this._chartWidgetProperties.childs().paneProperties.childs().legendProperties.childs(),t={property:this._series.properties().childs().statusViewStyle.childs().symbolTextSource,values:_e},i=function(e,t,i){var a,n,o,s,d,h,u,p,b=[],C=Object(c.j)({checked:Object(c.b)(e,t.showSeriesTitle,"Change Symbol Description Visibility"),option:Object(c.b)(e,i.property,"Change Symbol Legend Format")},{id:"symbolTextSource",title:g,options:new l.a(i.values)});return b.push(C),a=Object(c.c)({checked:Object(c.b)(e,t.showSeriesOHLC,"Change OHLC Values Visibility")},{id:"ohlcTitle",title:w}),b.push(a),n=Object(c.c)({checked:Object(c.b)(e,t.showBarChange,"Change Bar Change Visibility")},{id:"barChange",title:y}),b.push(n),o=Object(c.c)({checked:Object(c.b)(e,t.showStudyArguments,"Change Indicator Arguments Visibility")},{id:"studyArguments",title:v}),s=Object(c.d)({checked:Object(c.b)(e,t.showStudyTitles,"Change Indicator Titles Visibility")},{id:"studyTitles",title:O},[o]),b.push(s),d=Object(c.c)({checked:Object(c.b)(e,t.showStudyValues,"Change Indicator Values Visibility")},{id:"studyValues",title:m}),b.push(d),h=[],u=Object(c.q)({checked:Object(c.b)(e,t.showBackground,"Change Legend Background Visibility"),transparency:Object(c.b)(e,t.backgroundTransparency,"Change Legend Background Transparency")},{id:"legendBgTransparency",title:P}),h.push(u),f||(p=Object(c.c)({checked:Object(c.b)(e,t.wrapText,"Change wrap text")},{id:"wrapText",title:j}),h.push(p)),Object(r.__spreadArrays)([Object(c.k)(b,"generalLegendVisibilityGroup")],h)}(this._undoModel,e,t);return Object(d.a)(i,"legend",me,Oe.legend)},e.prototype._createScalesPropertyPage=function(){var e=this._createScalesDefinitions();return Object(d.a)(e,"scales",Pe,Oe.scales)},e.prototype._createScalesDefinitions=function(){var e,t,i,r,a,o,s,d,h,p,b,g,w,y,O,v,m,P,j,f=this._chartWidgetProperties.childs(),C=f.scalesProperties.childs(),H={property:this._model.properties().priceScaleSelectionStrategyName,values:Object(u.allPriceScaleSelectionStrategyInfo)().map(function(e){return{value:e.name,title:e.title}})},R={property:X.dateFormatProperty,values:(e=new Date(Date.UTC(1997,8,29)),J.availableDateFormats.map(function(t){return{value:t,title:new $.DateFormatter(t).format(e)}}))},E=this._model.mainSeriesScaleRatioProperty();return t=this._undoModel,i=this._series.properties().childs(),r=C,a={disableSeriesPrevCloseValueProperty:this._series.isDWMProperty(),seriesHasClosePrice:this._series.hasClosePrice(),seriesPriceScale:this._series.priceScale(),mainSeriesScaleRatioProperty:E,scalesPlacementPropertyObj:H,dateFormatPropertyObj:R,currencyLabelEnabled:this._options.currencyLabelEnabled},
m=a.seriesPriceScale.properties().childs(),P=[],j=[],a.seriesHasClosePrice&&(o=Object(c.c)({checked:Object(c.b)(t,r.showSymbolLabels,"Show Symbol Labels")},{id:"symbolNameLabel",title:_}),s=Object(c.j)({checked:Object(c.b)(t,r.showSeriesLastValue,"Change Symbol Last Value Visibility"),option:Object(c.b)(t,r.seriesLastValueMode,"Change Symbol Last Value Mode")},{id:"symbolLastValueLabel",title:V,options:new l.a(N)}),j.push(o,s),d=Object(c.c)({checked:Object(c.b)(t,r.showSeriesPrevCloseValue,"Change Symbol Previous Close Value Visibility"),disabled:Object(c.b)(t,a.disableSeriesPrevCloseValueProperty,"Change disable Symbol Previous Close Value Visibility")},{id:"symbolPrevCloseValue",title:L}),j.push(d)),h=Object(c.c)({checked:Object(c.b)(t,r.showStudyPlotLabels,"Show Study Plots Labels")},{id:"studyNameLabel",title:k}),p=Object(c.c)({checked:Object(c.b)(t,r.showStudyLastValue,"Change Indicator Last Value Visibility")},{id:"studyLastValueLabel",title:x}),j.push(h,p),b=Object(c.c)({checked:Object(c.b)(t,m.alignLabels,"Change No Overlapping Labels")},{id:"noOverlappingLabels",title:D}),j.push(b),n.enabled("countdown")&&(g=Object(c.c)({checked:Object(c.b)(t,i.showCountdown,"Change Show Countdown")},{id:"countdown",title:M}),j.push(g)),a.currencyLabelEnabled&&(w=Object(c.c)({checked:Object(c.b)(t,r.showCurrency,"Change Currency Label Visibility")},{id:"scalesCurrency",title:A}),j.push(w)),P.push(Object(c.k)(j,"generalScalesLabelsGroup")),y=Object(c.i)({checked:Object(c.v)(t,m.lockScale,a.seriesPriceScale,"Change lock scale"),value:Object(c.x)(t,a.mainSeriesScaleRatioProperty,"Change Price to Bar Ratio",[Object(S.d)(7),function(e){return e}])},{id:"lockScale",title:T,min:new l.a(a.mainSeriesScaleRatioProperty.getMinValue()),max:new l.a(a.mainSeriesScaleRatioProperty.getMaxValue()),step:new l.a(a.mainSeriesScaleRatioProperty.getStepChangeValue())}),O=Object(c.j)({option:Object(c.w)(t,a.scalesPlacementPropertyObj.property)},{id:"scalesPlacement",title:B,options:new l.a(a.scalesPlacementPropertyObj.values)}),v=Object(c.j)({option:Object(c.b)(t,a.dateFormatPropertyObj.property,"Change Date Format")},{id:"dateFormat",title:z,options:new l.a(a.dateFormatPropertyObj.values)}),P.push(y,O,v),P},e.prototype._createMaxOffsetPropertyObject=function(){var e=Object(a.ensureNotNull)(this._model.timeScale()),t=new l.a(Math.floor(e.maxRightOffset()));e.maxRightOffsetChanged().subscribe(this,function(e){t.setValue(Math.floor(e))}),this._maxRightOffsetPropertyObject={property:e.defaultRightOffsetProperty(),min:new l.a(0),max:t}},e.prototype._createAppearancePropertyPage=function(){var e,t,i,r,o=this._chartWidgetProperties.childs(),s=o.paneProperties.childs(),u=o.scalesProperties.childs(),p=this._model.watermarkSource(),b=null;return null!==p&&(b=p.properties().childs()),e={property:h.property(),values:h.availableValues()},t=this._model.sessions().properties().childs().graphics.childs().vertlines.childs().sessBreaks.childs(),null===this._maxRightOffsetPropertyObject&&this._createMaxOffsetPropertyObject(),
i=Object(a.ensureNotNull)(this._maxRightOffsetPropertyObject),r=function(e,t,i,r,a,o,s,d){var h,u,p,b,g,w,y=[],O=Object(c.e)({color:Object(c.u)(e,t.background,null,"Change Chart Background Color")},{id:"chartBackground",title:H,noAlpha:!0}),v=t.vertGridProperties.childs(),m=Object(c.h)({color:Object(c.u)(e,v.color,null,"Change Vert Grid Lines Color"),style:Object(c.b)(e,v.style,"Change Vert Grid Lines Style")},{id:"vertGridLine",title:R}),P=t.horzGridProperties.childs(),j=Object(c.h)({color:Object(c.u)(e,P.color,null,"Change Horz Grid Lines Color"),style:Object(c.b)(e,P.style,"Change Horz Grid Lines Style")},{id:"horizGridLine",title:E}),f=Object(c.h)({disabled:Object(c.b)(e,o,"Change Intraday Interval Property"),checked:Object(c.b)(e,a.visible,"Change Sessions Breaks Visibility"),color:Object(c.u)(e,a.color,null,"Change Sessions Breaks Color"),width:Object(c.b)(e,a.width,"Change Sessions Breaks Width"),style:Object(c.b)(e,a.style,"Change Sessions Breaks Style")},{id:"sessionBeaks",title:F}),C=Object(c.p)({color:Object(c.u)(e,r.textColor,null,"Change Scales Text Color"),size:Object(c.b)(e,r.fontSize,"Change Scales Font Size")},{id:"scalesText",title:I}),_=Object(c.h)({color:Object(c.u)(e,r.lineColor,null,"Change Scales Lines Color")},{id:"scalesLine",title:W}),V=t.crossHairProperties.childs(),L=Object(c.h)({color:Object(c.u)(e,V.color,V.transparency,"Change Crosshair Color"),width:Object(c.b)(e,V.width,"Change Crosshair Width"),style:Object(c.b)(e,V.style,"Change Crosshair Style")},{id:"crossHair",title:G});return y.push(O,m,j,f,C,_,L),null!==i&&(h=Object(c.e)({checked:Object(c.b)(e,i.visibility,"Change Symbol Watermark Visibility"),color:Object(c.u)(e,i.color,null,"Change Symbol Watermark Color")},{id:"watermark",title:Z}),y.push(h)),u=Object(c.j)({option:Object(c.b)(e,d.property,"Change Navigation Buttons Visibility")},{id:"navButtons",title:U,options:new l.a(d.values)}),y.push(u),p=Object(c.i)({value:Object(c.b)(e,t.topMargin,"Change Top Margin",[S.c])},{type:0,id:"paneTopMargin",title:q,min:new l.a(0),max:new l.a(25),step:new l.a(1),unit:new l.a("%")}),b=Object(c.i)({value:Object(c.b)(e,t.bottomMargin,"Change Bottom Margin",[S.c])},{type:0,id:"paneBottomMargin",title:K,min:new l.a(0),max:new l.a(25),step:new l.a(1),unit:new l.a("%")}),g=Object(c.i)({value:Object(c.b)(e,s.property,"Change Right Margin",[S.c])},{type:0,id:"paneRightMargin",title:Q,min:s.min,max:s.max,step:new l.a(1),unit:new l.a(Y)}),w=[Object(c.k)(y,"generalAppearanceGroup"),p,b],n.enabled("chart_property_page_right_margin_editor")&&w.push(g),w}(this._undoModel,s,b,u,t,this._series.isDWMProperty(),i,e),Object(d.a)(r,"appearance",je,Oe.appearance)},e.prototype._createTradingPropertyPage=function(){var e,t;return Ce?null===Se?null:(e=this._model.properties().tradingProperties.childs(),t=function(e,t,i){var r=Object(c.c)({checked:Object(c.b)(e,t.showPositions,"Change Positions Visibility")},{id:"tradingPositions",title:ee}),a=Object(c.c)({checked:Object(c.b)(e,t.showOrders,"Change Orders Visibility")},{id:"tradingOrders",title:te}),n=Object(c.h)({
style:Object(c.b)(e,t.lineStyle,"Change Connecting Line Style"),value:Object(c.b)(e,t.lineLength,"Change Connecting Line Length",[S.c]),extendLeft:Object(c.b)(e,t.extendLeft,"Extend Lines Left")},{id:"tradingConnectionLine",title:re,valueType:0,valueMin:new l.a(0),valueMax:new l.a(100),valueStep:new l.a(1),valueUnit:new l.a("%"),extendLeftTitle:ie}),o=Object(c.c)({checked:Object(c.b)(e,t.showExecutions,"Change Executions Visibility")},{id:"tradingExecutions",title:ae}),s=Object(c.c)({checked:Object(c.a)(e,i.orderExecutedSoundParams.enabled,"Change Play sound on order execution")},{id:"tradingSoundEnabled",title:ce}),d=Object(c.c)({checked:Object(c.a)(e,i.noConfirmEnabled,"Change order confirmation state")},{id:"tradingConfirmEnabled",title:oe}),h=Object(c.c)({checked:Object(c.a)(e,i.showOnlyRejectionNotifications,"Change notifications state")},{id:"tradingRejectionNotifications",title:se}),u=Object(c.c)({checked:Object(c.a)(e,i.hideFloatingPanel,"Change buy/sell panel visibility",[S.a])},{id:"tradingSellBuyPanel",title:ne}),p=Object(c.c)({checked:Object(c.a)(e,i.showPricesWithZeroVolume,"Change price levels with zero volume in DOM visibility")},{id:"tradingPricesWithZeroVolume",title:le});return[r,a,n,o,s,d,h,u,p]}(this._undoModel,e,Se),Object(d.a)(t,"trading",fe,Oe.trading)):null},e.prototype._createEventsPropertyPage=function(){return null},e}()},DyO1:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 16.5l-1 1v4h4l1-1m-4-4l2 2m-2-2l9-9m-5 13l-2-2m2 2l9-9m-11 7l9-9m0 0l-2-2m2 2l2 2m-4-4l.94-.94a1.5 1.5 0 0 1 2.12 0l1.88 1.88a1.5 1.5 0 0 1 0 2.12l-.94.94"/></svg>'},Iilx:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 20.5a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h14m-16-2v-14m16 16L21 17m3.5 3.5L21 24M8.5 4.5L12 8M8.5 4.5L5 8"/></svg>'},WS5G:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M24.068 9a.569.569 0 0 1 .73.872L19 14.842l-5.798-4.97a.569.569 0 0 1 .73-.872l4.751 3.887.317.26.317-.26L24.068 9zm1.47-.67a1.569 1.569 0 0 0-2.103-.104L19 11.854l-4.435-3.628a1.569 1.569 0 0 0-2.014 2.405l6.124 5.249.325.279.325-.28 6.124-5.248a1.569 1.569 0 0 0 .088-2.3zm-11.484 9.728a.57.57 0 0 0 .688-.91L9 12.636l-5.742 4.512a.57.57 0 0 0 .688.91l4.76-3.462.294-.214.294.214 4.76 3.462zm1.446.649a1.57 1.57 0 0 1-2.034.16L9 15.618l-4.466 3.249a1.57 1.57 0 0 1-1.894-2.505l6.051-4.755.309-.243.309.243 6.051 4.755c.74.581.806 1.68.14 2.345z"/></svg>'},ggCF:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M6 13h12v1H6zM6 17h12v1H6zM6 21h12v1H6z"/><rect width="17" height="3" stroke="currentColor" rx="1.5" x="5.5" y="6.5"/></svg>'},iUxq:function(e,t){
e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5A1.5 1.5 0 0 0 6 8.5v11A1.5 1.5 0 0 0 7.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 7H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>'}}]);