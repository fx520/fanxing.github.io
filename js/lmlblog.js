// JavaScript Document
!function(a){a.fn.slide=function(b){return a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=a(this),e=c.effect,f=a(c.prevCell,d),g=a(c.nextCell,d),h=a(c.pageStateCell,d),i=a(c.playStateCell,d),j=a(c.titCell,d),k=j.size(),l=a(c.mainCell,d),m=l.children().size(),n=c.switchLoad,o=a(c.targetCell,d),p=parseInt(c.defaultIndex),q=parseInt(c.delayTime),r=parseInt(c.interTime);parseInt(c.triggerTime);var Q,t=parseInt(c.scroll),u=parseInt(c.vis),v="false"==c.autoPlay||0==c.autoPlay?!1:!0,w="false"==c.opp||0==c.opp?!1:!0,x="false"==c.autoPage||0==c.autoPage?!1:!0,y="false"==c.pnLoop||0==c.pnLoop?!1:!0,z="false"==c.mouseOverStop||0==c.mouseOverStop?!1:!0,A="false"==c.defaultPlay||0==c.defaultPlay?!1:!0,B="false"==c.returnDefault||0==c.returnDefault?!1:!0,C=0,D=0,E=0,F=0,G=c.easing,H=null,I=null,J=null,K=c.titOnClassName,L=j.index(d.find("."+K)),M=p=-1==L?p:L,N=p,O=p,P=m>=u?0!=m%t?m%t:t:0,R="leftMarquee"==e||"topMarquee"==e?!0:!1,S=function(){a.isFunction(c.startFun)&&c.startFun(p,k,d,a(c.titCell,d),l,o,f,g)},T=function(){a.isFunction(c.endFun)&&c.endFun(p,k,d,a(c.titCell,d),l,o,f,g)},U=function(){j.removeClass(K),A&&j.eq(N).addClass(K)};if("menu"==c.type)return A&&j.removeClass(K).eq(p).addClass(K),j.hover(function(){Q=a(this).find(c.targetCell);var b=j.index(a(this));I=setTimeout(function(){switch(p=b,j.removeClass(K).eq(p).addClass(K),S(),e){case"fade":Q.stop(!0,!0).animate({opacity:"show"},q,G,T);break;case"slideDown":Q.stop(!0,!0).animate({height:"show"},q,G,T)}},c.triggerTime)},function(){switch(clearTimeout(I),e){case"fade":Q.animate({opacity:"hide"},q,G);break;case"slideDown":Q.animate({height:"hide"},q,G)}}),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(U,q)}),void 0;if(0==k&&(k=m),R&&(k=2),x){if(m>=u)if("leftLoop"==e||"topLoop"==e)k=0!=m%t?(0^m/t)+1:m/t;else{var V=m-u;k=1+parseInt(0!=V%t?V/t+1:V/t),0>=k&&(k=1)}else k=1;j.html("");var W="";if(1==c.autoPage||"true"==c.autoPage)for(var X=0;k>X;X++)W+="<li>"+(X+1)+"</li>";else for(var X=0;k>X;X++)W+=c.autoPage.replace("$",X+1);j.html(W);var j=j.children()}if(m>=u){l.children().each(function(){a(this).width()>E&&(E=a(this).width(),D=a(this).outerWidth(!0)),a(this).height()>F&&(F=a(this).height(),C=a(this).outerHeight(!0))});var Y=l.children(),Z=function(){for(var a=0;u>a;a++)Y.eq(a).clone().addClass("clone").appendTo(l);for(var a=0;P>a;a++)Y.eq(m-a-1).clone().addClass("clone").prependTo(l)};switch(e){case"fold":l.css({position:"relative",width:D,height:C}).children().css({position:"absolute",width:E,left:0,top:0,display:"none"});break;case"top":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({top:-(p*t)*C,position:"relative",padding:"0",margin:"0"}).children().css({height:F});break;case"left":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:m*D,left:-(p*t)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:E});break;case"leftLoop":case"leftMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:(m+u+P)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(P+p*t)*D}).children().css({"float":"left",width:E});break;case"topLoop":case"topMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({height:(m+u+P)*C,position:"relative",padding:"0",margin:"0",top:-(P+p*t)*C}).children().css({height:F})}}var $=function(a){var b=a*t;return a==k?b=m:-1==a&&0!=m%t&&(b=-m%t),b},_=function(b){var c=function(c){for(var d=c;u+c>d;d++)b.eq(d).find("img["+n+"]").each(function(){var b=a(this);if(b.attr("src",b.attr(n)).removeAttr(n),l.find(".clone")[0])for(var c=l.children(),d=0;d<c.size();d++)c.eq(d).find("img["+n+"]").each(function(){a(this).attr(n)==b.attr("src")&&a(this).attr("src",a(this).attr(n)).removeAttr(n)})})};switch(e){case"fade":case"fold":case"top":case"left":case"slideDown":c(p*t);break;case"leftLoop":case"topLoop":c(P+$(O));break;case"leftMarquee":case"topMarquee":var d="leftMarquee"==e?l.css("left").replace("px",""):l.css("top").replace("px",""),f="leftMarquee"==e?D:C,g=P;if(0!=d%f){var h=Math.abs(0^d/f);g=1==p?P+h:P+h-1}c(g)}},ab=function(a){if(!A||M!=p||a||R){if(R?p>=1?p=1:0>=p&&(p=0):(O=p,p>=k?p=0:0>p&&(p=k-1)),S(),null!=n&&_(l.children()),o[0]&&(Q=o.eq(p),null!=n&&_(o),"slideDown"==e?(o.not(Q).stop(!0,!0).slideUp(q),Q.slideDown(q,G,function(){l[0]||T()})):(o.not(Q).stop(!0,!0).hide(),Q.animate({opacity:"show"},q,function(){l[0]||T()}))),m>=u)switch(e){case"fade":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().hide();break;case"fold":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().animate({opacity:"hide"},q,G);break;case"top":l.stop(!0,!1).animate({top:-p*t*C},q,G,function(){T()});break;case"left":l.stop(!0,!1).animate({left:-p*t*D},q,G,function(){T()});break;case"leftLoop":var b=O;l.stop(!0,!0).animate({left:-($(O)+P)*D},q,G,function(){-1>=b?l.css("left",-(P+(k-1)*t)*D):b>=k&&l.css("left",-P*D),T()});break;case"topLoop":var b=O;l.stop(!0,!0).animate({top:-($(O)+P)*C},q,G,function(){-1>=b?l.css("top",-(P+(k-1)*t)*C):b>=k&&l.css("top",-P*C),T()});break;case"leftMarquee":var c=l.css("left").replace("px","");0==p?l.animate({left:++c},0,function(){l.css("left").replace("px","")>=0&&l.css("left",-m*D)}):l.animate({left:--c},0,function(){l.css("left").replace("px","")<=-(m+P)*D&&l.css("left",-P*D)});break;case"topMarquee":var d=l.css("top").replace("px","");0==p?l.animate({top:++d},0,function(){l.css("top").replace("px","")>=0&&l.css("top",-m*C)}):l.animate({top:--d},0,function(){l.css("top").replace("px","")<=-(m+P)*C&&l.css("top",-P*C)})}j.removeClass(K).eq(p).addClass(K),M=p,y||(g.removeClass("nextStop"),f.removeClass("prevStop"),0==p&&f.addClass("prevStop"),p==k-1&&g.addClass("nextStop")),h.html("<span>"+(p+1)+"</span>/"+k)}};A&&ab(!0),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(function(){p=N,A?ab():"slideDown"==e?Q.slideUp(q,U):Q.animate({opacity:"hide"},q,U),M=p},300)});var bb=function(a){H=setInterval(function(){w?p--:p++,ab()},a?a:r)},cb=function(a){H=setInterval(ab,a?a:r)},db=function(){z||(clearInterval(H),bb())},eb=function(){(y||p!=k-1)&&(p++,ab(),R||db())},fb=function(){(y||0!=p)&&(p--,ab(),R||db())},gb=function(){clearInterval(H),R?cb():bb(),i.removeClass("pauseState")},hb=function(){clearInterval(H),i.addClass("pauseState")};if(v?R?(w?p--:p++,cb(),z&&l.hover(hb,gb)):(bb(),z&&d.hover(hb,gb)):(R&&(w?p--:p++),i.addClass("pauseState")),i.click(function(){i.hasClass("pauseState")?gb():hb()}),"mouseover"==c.trigger?j.hover(function(){var a=j.index(this);I=setTimeout(function(){p=a,ab(),db()},c.triggerTime)},function(){clearTimeout(I)}):j.click(function(){p=j.index(this),ab(),db()}),R){if(g.mousedown(eb),f.mousedown(fb),y){var ib,jb=function(){ib=setTimeout(function(){clearInterval(H),cb(0^r/10)},150)},kb=function(){clearTimeout(ib),clearInterval(H),cb()};g.mousedown(jb),g.mouseup(kb),f.mousedown(jb),f.mouseup(kb)}"mouseover"==c.trigger&&(g.hover(eb,function(){}),f.hover(fb,function(){}))}else g.click(eb),f.click(fb)})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
//ajax加载分页
var IASCallbacks=function(){return this.list=[],this.fireStack=[],this.isFiring=!1,this.isDisabled=!1,this.fire=function(a){var b=a[0],c=a[1],d=a[2];this.isFiring=!0;for(var e=0,f=this.list.length;f>e;e++)if(void 0!=this.list[e]&&!1===this.list[e].fn.apply(b,d)){c.reject();break}this.isFiring=!1,c.resolve(),this.fireStack.length&&this.fire(this.fireStack.shift())},this.inList=function(a,b){b=b||0;for(var c=b,d=this.list.length;d>c;c++)if(this.list[c].fn===a||a.guid&&this.list[c].fn.guid&&a.guid===this.list[c].fn.guid)return c;return-1},this};IASCallbacks.prototype={add:function(a,b){var c={fn:a,priority:b};b=b||0;for(var d=0,e=this.list.length;e>d;d++)if(b>this.list[d].priority)return this.list.splice(d,0,c),this;return this.list.push(c),this},remove:function(a){for(var b=0;(b=this.inList(a,b))>-1;)this.list.splice(b,1);return this},has:function(a){return this.inList(a)>-1},fireWith:function(a,b){var c=jQuery.Deferred();return this.isDisabled?c.reject():(b=b||[],b=[a,c,b.slice?b.slice():b],this.isFiring?this.fireStack.push(b):this.fire(b),c)},disable:function(){this.isDisabled=!0},enable:function(){this.isDisabled=!1}},function(a){"use strict";var b=-1,c=function(c,d){return this.itemsContainerSelector=d.container,this.itemSelector=d.item,this.nextSelector=d.next,this.paginationSelector=d.pagination,this.$scrollContainer=c,this.$container=window===c.get(0)?a(document):c,this.defaultDelay=d.delay,this.negativeMargin=d.negativeMargin,this.nextUrl=null,this.isBound=!1,this.isPaused=!1,this.isInitialized=!1,this.listeners={next:new IASCallbacks,load:new IASCallbacks,loaded:new IASCallbacks,render:new IASCallbacks,rendered:new IASCallbacks,scroll:new IASCallbacks,noneLeft:new IASCallbacks,ready:new IASCallbacks},this.extensions=[],this.scrollHandler=function(){if(this.isBound&&!this.isPaused){var a=this.getCurrentScrollOffset(this.$scrollContainer),c=this.getScrollThreshold();b!=c&&(this.fire("scroll",[a,c]),a>=c&&this.next())}},this.getItemsContainer=function(){return a(this.itemsContainerSelector)},this.getLastItem=function(){return a(this.itemSelector,this.getItemsContainer().get(0)).last()},this.getFirstItem=function(){return a(this.itemSelector,this.getItemsContainer().get(0)).first()},this.getScrollThreshold=function(a){var c;return a=a||this.negativeMargin,a=a>=0?-1*a:a,c=this.getLastItem(),0===c.length?b:c.offset().top+c.height()+a},this.getCurrentScrollOffset=function(a){var b=0,c=a.height();return b=window===a.get(0)?a.scrollTop():a.offset().top,(-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod"))&&(c+=80),b+c},this.getNextUrl=function(b){return b=b||this.$container,a(this.nextSelector,b).last().attr("href")},this.load=function(b,c,d){var e,f,g=this,h=[],i=+new Date;d=d||this.defaultDelay;var j={url:b};return g.fire("load",[j]),a.get(j.url,null,a.proxy(function(b){e=a(this.itemsContainerSelector,b).eq(0),0===e.length&&(e=a(b).filter(this.itemsContainerSelector).eq(0)),e&&e.find(this.itemSelector).each(function(){h.push(this)}),g.fire("loaded",[b,h]),c&&(f=+new Date-i,d>f?setTimeout(function(){c.call(g,b,h)},d-f):c.call(g,b,h))},g),"html")},this.render=function(b,c){var d=this,e=this.getLastItem(),f=0,g=this.fire("render",[b]);g.done(function(){a(b).hide(),e.after(b),a(b).fadeIn(400,function(){++f<b.length||(d.fire("rendered",[b]),c&&c())})})},this.hidePagination=function(){this.paginationSelector&&a(this.paginationSelector,this.$container).hide()},this.restorePagination=function(){this.paginationSelector&&a(this.paginationSelector,this.$container).show()},this.throttle=function(b,c){var d,e,f=0;return d=function(){function a(){f=+new Date,b.apply(d,g)}var d=this,g=arguments,h=+new Date-f;e?clearTimeout(e):a(),h>c?a():e=setTimeout(a,c)},a.guid&&(d.guid=b.guid=b.guid||a.guid++),d},this.fire=function(a,b){return this.listeners[a].fireWith(this,b)},this.pause=function(){this.isPaused=!0},this.resume=function(){this.isPaused=!1},this};c.prototype.initialize=function(){if(this.isInitialized)return!1;var a=!!("onscroll"in this.$scrollContainer.get(0)),b=this.getCurrentScrollOffset(this.$scrollContainer),c=this.getScrollThreshold();return a?(this.hidePagination(),this.bind(),this.fire("ready"),this.nextUrl=this.getNextUrl(),b>=c?(this.next(),this.one("rendered",function(){this.isInitialized=!0})):this.isInitialized=!0,this):!1},c.prototype.reinitialize=function(){this.isInitialized=!1,this.unbind(),this.initialize()},c.prototype.bind=function(){if(!this.isBound){this.$scrollContainer.on("scroll",a.proxy(this.throttle(this.scrollHandler,150),this));for(var b=0,c=this.extensions.length;c>b;b++)this.extensions[b].bind(this);this.isBound=!0,this.resume()}},c.prototype.unbind=function(){if(this.isBound){this.$scrollContainer.off("scroll",this.scrollHandler);for(var a=0,b=this.extensions.length;b>a;a++)"undefined"!=typeof this.extensions[a].unbind&&this.extensions[a].unbind(this);this.isBound=!1}},c.prototype.destroy=function(){this.unbind(),this.$scrollContainer.data("ias",null)},c.prototype.on=function(b,c,d){if("undefined"==typeof this.listeners[b])throw new Error('There is no event called "'+b+'"');return d=d||0,this.listeners[b].add(a.proxy(c,this),d),this},c.prototype.one=function(a,b){var c=this,d=function(){c.off(a,b),c.off(a,d)};return this.on(a,b),this.on(a,d),this},c.prototype.off=function(a,b){if("undefined"==typeof this.listeners[a])throw new Error('There is no event called "'+a+'"');return this.listeners[a].remove(b),this},c.prototype.next=function(){var a=this.nextUrl,b=this;if(this.pause(),!a)return this.fire("noneLeft",[this.getLastItem()]),this.listeners.noneLeft.disable(),b.resume(),!1;var c=this.fire("next",[a]);return c.done(function(){b.load(a,function(a,c){b.render(c,function(){b.nextUrl=b.getNextUrl(a),b.resume()})})}),c.fail(function(){b.resume()}),!0},c.prototype.extension=function(a){if("undefined"==typeof a.bind)throw new Error('Extension doesn\'t have required method "bind"');return"undefined"!=typeof a.initialize&&a.initialize(this),this.extensions.push(a),this.isInitialized&&this.reinitialize(),this},a.ias=function(b){var c=a(window);return c.ias.apply(c,arguments)},a.fn.ias=function(b){var d=Array.prototype.slice.call(arguments),e=this;return this.each(function(){var f=a(this),g=f.data("ias"),h=a.extend({},a.fn.ias.defaults,f.data(),"object"==typeof b&&b);if(g||(f.data("ias",g=new c(f,h)),a(document).ready(a.proxy(g.initialize,g))),"string"==typeof b){if("function"!=typeof g[b])throw new Error('There is no method called "'+b+'"');d.shift(),g[b].apply(g,d)}e=g}),e},a.fn.ias.defaults={item:".item",container:".listing",next:".next",pagination:!1,delay:600,negativeMargin:10}}(jQuery);var IASHistoryExtension=function(a){return a=jQuery.extend({},this.defaults,a),this.ias=null,this.prevSelector=a.prev,this.prevUrl=null,this.listeners={prev:new IASCallbacks},this.onPageChange=function(a,b,c){if(window.history&&window.history.replaceState){var d=history.state;history.replaceState(d,document.title,c)}},this.onScroll=function(a,b){var c=this.getScrollThresholdFirstItem();this.prevUrl&&(a-=this.ias.$scrollContainer.height(),c>=a&&this.prev())},this.onReady=function(){var a=this.ias.getCurrentScrollOffset(this.ias.$scrollContainer),b=this.getScrollThresholdFirstItem();a-=this.ias.$scrollContainer.height(),b>=a&&this.prev()},this.getPrevUrl=function(a){return a||(a=this.ias.$container),jQuery(this.prevSelector,a).last().attr("href")},this.getScrollThresholdFirstItem=function(){var a;return a=this.ias.getFirstItem(),0===a.length?-1:a.offset().top},this.renderBefore=function(a,b){var c=this.ias,d=c.getFirstItem(),e=0;c.fire("render",[a]),jQuery(a).hide(),d.before(a),jQuery(a).fadeIn(400,function(){++e<a.length||(c.fire("rendered",[a]),b&&b())})},this};IASHistoryExtension.prototype.initialize=function(a){var b=this;this.ias=a,jQuery.extend(a.listeners,this.listeners),a.prev=function(){return b.prev()},this.prevUrl=this.getPrevUrl()},IASHistoryExtension.prototype.bind=function(a){a.on("pageChange",jQuery.proxy(this.onPageChange,this)),a.on("scroll",jQuery.proxy(this.onScroll,this)),a.on("ready",jQuery.proxy(this.onReady,this))},IASHistoryExtension.prototype.unbind=function(a){a.off("pageChange",this.onPageChange),a.off("scroll",this.onScroll),a.off("ready",this.onReady)},IASHistoryExtension.prototype.prev=function(){var a=this.prevUrl,b=this,c=this.ias;if(!a)return!1;c.pause();var d=c.fire("prev",[a]);return d.done(function(){c.load(a,function(a,d){b.renderBefore(d,function(){b.prevUrl=b.getPrevUrl(a),c.resume(),b.prevUrl&&b.prev()})})}),d.fail(function(){c.resume()}),!0},IASHistoryExtension.prototype.defaults={prev:".prev"};var IASNoneLeftExtension=function(a){return a=jQuery.extend({},this.defaults,a),this.ias=null,this.uid=(new Date).getTime(),this.html=a.html.replace("{text}",a.text),this.showNoneLeft=function(){var a=jQuery(this.html).attr("id","ias_noneleft_"+this.uid),b=this.ias.getLastItem();b.after(a),a.fadeIn()},this};IASNoneLeftExtension.prototype.bind=function(a){this.ias=a,a.on("noneLeft",jQuery.proxy(this.showNoneLeft,this))},IASNoneLeftExtension.prototype.unbind=function(a){a.off("noneLeft",this.showNoneLeft)},IASNoneLeftExtension.prototype.defaults={text:"end.",html:'<div class="ias-trigger"><a>{text}</a></div>'};var IASPagingExtension=function(){return this.ias=null,this.pagebreaks=[[0,document.location.toString()]],this.lastPageNum=1,this.enabled=!0,this.listeners={pageChange:new IASCallbacks},this.onScroll=function(a,b){if(this.enabled){var c,d=this.ias,e=this.getCurrentPageNum(a),f=this.getCurrentPagebreak(a);this.lastPageNum!==e&&(c=f[1],d.fire("pageChange",[e,a,c])),this.lastPageNum=e}},this.onNext=function(a){var b=this.ias.getCurrentScrollOffset(this.ias.$scrollContainer);this.pagebreaks.push([b,a]);var c=this.getCurrentPageNum(b)+1;this.ias.fire("pageChange",[c,b,a]),this.lastPageNum=c},this.onPrev=function(a){var b=this,c=b.ias,d=c.getCurrentScrollOffset(c.$scrollContainer),e=d-c.$scrollContainer.height(),f=c.getFirstItem();this.enabled=!1,this.pagebreaks.unshift([0,a]),c.one("rendered",function(){for(var d=1,g=b.pagebreaks.length;g>d;d++)b.pagebreaks[d][0]=b.pagebreaks[d][0]+f.offset().top;var h=b.getCurrentPageNum(e)+1;c.fire("pageChange",[h,e,a]),b.lastPageNum=h,b.enabled=!0})},this};IASPagingExtension.prototype.initialize=function(a){this.ias=a,jQuery.extend(a.listeners,this.listeners)},IASPagingExtension.prototype.bind=function(a){try{a.on("prev",jQuery.proxy(this.onPrev,this),this.priority)}catch(b){}a.on("next",jQuery.proxy(this.onNext,this),this.priority),a.on("scroll",jQuery.proxy(this.onScroll,this),this.priority)},IASPagingExtension.prototype.unbind=function(a){try{a.off("prev",this.onPrev)}catch(b){}a.off("next",this.onNext),a.off("scroll",this.onScroll)},IASPagingExtension.prototype.getCurrentPageNum=function(a){for(var b=this.pagebreaks.length-1;b>0;b--)if(a>this.pagebreaks[b][0])return b+1;return 1},IASPagingExtension.prototype.getCurrentPagebreak=function(a){for(var b=this.pagebreaks.length-1;b>=0;b--)if(a>this.pagebreaks[b][0])return this.pagebreaks[b];return null},IASPagingExtension.prototype.priority=500;var IASSpinnerExtension=function(a){return a=jQuery.extend({},this.defaults,a),this.ias=null,this.uid=(new Date).getTime(),this.src=a.src,this.html=a.html.replace("{src}",this.src),this.showSpinner=function(){var a=this.getSpinner()||this.createSpinner(),b=this.ias.getLastItem();b.after(a),a.fadeIn()},this.showSpinnerBefore=function(){var a=this.getSpinner()||this.createSpinner(),b=this.ias.getFirstItem();b.before(a),a.fadeIn()},this.removeSpinner=function(){this.hasSpinner()&&this.getSpinner().remove()},this.getSpinner=function(){var a=jQuery("#ias_spinner_"+this.uid);return a.length>0?a:!1},this.hasSpinner=function(){var a=jQuery("#ias_spinner_"+this.uid);return a.length>0},this.createSpinner=function(){var a=jQuery(this.html).attr("id","ias_spinner_"+this.uid);return a.hide(),a},this};IASSpinnerExtension.prototype.bind=function(a){this.ias=a,a.on("next",jQuery.proxy(this.showSpinner,this)),a.on("render",jQuery.proxy(this.removeSpinner,this));try{a.on("prev",jQuery.proxy(this.showSpinnerBefore,this))}catch(b){}},IASSpinnerExtension.prototype.unbind=function(a){a.off("next",this.showSpinner),a.off("render",this.removeSpinner);try{a.off("prev",this.showSpinnerBefore)}catch(b){}},IASSpinnerExtension.prototype.defaults={src:"努力加载中",html:'<div class="ias-trigger"><a>{src}  <i class="fa fa-spinner fa-pulse"></i></a></div>'};var IASTriggerExtension=function(a){return a=jQuery.extend({},this.defaults,a),this.ias=null,this.html=a.html.replace("{text}",a.text),this.htmlPrev=a.htmlPrev.replace("{text}",a.textPrev),this.enabled=!0,this.count=0,this.offset=a.offset,this.$triggerNext=null,this.$triggerPrev=null,this.showTriggerNext=function(){if(!this.enabled)return!0;if(!1===this.offset||++this.count<this.offset)return!0;var a=this.$triggerNext||(this.$triggerNext=this.createTrigger(this.next,this.html)),b=this.ias.getLastItem();return b.after(a),a.fadeIn(),!1},this.showTriggerPrev=function(){if(!this.enabled)return!0;var a=this.$triggerPrev||(this.$triggerPrev=this.createTrigger(this.prev,this.htmlPrev)),b=this.ias.getFirstItem();return b.before(a),a.fadeIn(),!1},this.onRendered=function(){this.enabled=!0},this.createTrigger=function(a,b){var c,d=(new Date).getTime();return b=b||this.html,c=jQuery(b).attr("id","ias_trigger_"+d),c.hide(),c.on("click",jQuery.proxy(a,this)),c},this};IASTriggerExtension.prototype.bind=function(a){this.ias=a,a.on("next",jQuery.proxy(this.showTriggerNext,this),this.priority),a.on("rendered",jQuery.proxy(this.onRendered,this),this.priority);try{a.on("prev",jQuery.proxy(this.showTriggerPrev,this),this.priority)}catch(b){}},IASTriggerExtension.prototype.unbind=function(a){a.off("next",this.showTriggerNext),a.off("rendered",this.onRendered);try{a.off("prev",this.showTriggerPrev)}catch(b){}},IASTriggerExtension.prototype.next=function(){this.enabled=!1,this.ias.pause(),this.$triggerNext&&(this.$triggerNext.remove(),this.$triggerNext=null),this.ias.next()},IASTriggerExtension.prototype.prev=function(){this.enabled=!1,this.ias.pause(),this.$triggerPrev&&(this.$triggerPrev.remove(),this.$triggerPrev=null),this.ias.prev()},IASTriggerExtension.prototype.defaults={text:"Load more items",html:'<div class="ias-trigger ias-trigger-next" style="text-align: center; cursor: pointer;"><a>{text} <i class="fa fa-chevron-circle-right"></i></a></div>',textPrev:"Load previous items",htmlPrev:'<div class="ias-trigger ias-trigger-prev"cursor: pointer;"><a>{text}</a></div>',offset:0},IASTriggerExtension.prototype.priority=1e3;
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
if(document.body.clientWidth < 931){
 var ias = $.ias({
    container: "#ajax_list",
    item: ".ajaxs",
    pagination: "#pagination", 
    next: "#pagination a",
}); 
 
ias.extension(new IASTriggerExtension({
    text: '加载更多',
    offset: um.page_num, 
}));
ias.extension(new IASSpinnerExtension());
ias.extension(new IASNoneLeftExtension({
    text: '客官，已经到底了',
}));
ias.on('rendered', function(items) {
    $(".ae_ct article img").lazyload({effect:"fadeIn",threshold: 500,});
});
}
$(document).ready(function(){
//变量定义
  var $header = $('.header-menu-nav li');
  var $headernav = $('.header-menu-nav');
  var $yscd = $(".dashboard .yscd");  
  var $aside = $(".dashboard .aside"); 
  var $yinxsh = $(".yinxsh");   
  var $tancu = $("#tancu span");
  var $tancut = $("#tancu");
  var $gmtx = $("#gmtx");
  var $gmtxs = $("#gmtx span"); 
//导航  
  $header.hover(function(){$('ul',this).slideDown(100)},function(){$('ul',this).slideUp(100)});
  $headernav.find('.sub-menu').siblings('a').addClass('arrow');

//延迟加载
 $("img").lazyload({effect:"fadeIn",threshold: 500,});
 //折叠导航
$yscd.on('click',function(){
$aside.animate({left:'140px'});
$yscd.animate({left:'-160px'});
$yinxsh.toggle();
});
$yinxsh.on('click',function(){
$aside.animate({left:'0px'});
$yscd.animate({left:'5px'});
$yinxsh.toggle();
});

//window
$gmtx.on('click',function(){
  $gmtxs.toggle(200);
});
$(window).on('load scroll', function () {
	$('.cx-sect').each(function() {
		this.getBoundingClientRect().top < $(window).height()
		? $(this).addClass('visible')
		: $(this).removeClass('visible');
	});
});
});

//移动导航
$('#cd-menu-trigger').on('click',function(e){
	var wh=$('.wrapper').height();
	$('.slide-mask').css('height',wh).show();
	$('html,body').addClass('over-hid');
	$('.slide-wrapper').css('height',wh).addClass('moved')
});
$('.slide-mask').on('click',function(){
	$('.slide-mask').hide();
	$('html,body').removeClass('over-hid');
	$('.slide-wrapper').removeClass('moved')
});

//主题教程js代码
jQuery(function($) {
    var pending_ajax = false;
    $('.wedocs-feedback-wrap').on('click', 'a', function(e) {
        e.preventDefault();
        // return if any request is in process already
        if ( pending_ajax ) {
            return;
        }
        pending_ajax = true;
        var self = $(this),
            wrap = self.closest('.wedocs-feedback-wrap'),
            data = {
                post_id: self.data('id'),
                type: self.data('type'),
                action: 'wedocs_ajax_feedback',
                _wpnonce: um.nonce
            };
        wrap.append('&nbsp; <span class="wedocs-spinner"></span>');
        $.post(um.ajax_url, data, function(resp) {
            wrap.html(resp.data);

            pending_ajax = false;
        });
    });
    $('#top-search-form .dropdown-menu').on('click', 'a', function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('#top-search-form span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});

//js侧边栏悬浮滚动效果代码
$(window).load(function() {
	var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
	var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));
	var maxY = footTop - $('#sidebar').outerHeight() - parseFloat(40);
	$(window).scroll(function(evt) {
		var y = $(this).scrollTop();
		if (y > top) {
		if (y < maxY) {
			$('#sidebar').addClass('fixed').removeAttr('style');
		} else {
			$('#sidebar').removeClass('fixed').css({
				position: 'absolute',
				bottom: '-15px',
				top: 'auto'
			});
		}
		} else {
			$('#sidebar').removeClass('fixed');
		}
	});
});
//返回顶部	
$(function(){
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();
		if(scrolltop>=200){
			$("#elevator_item").show()
		}else{
			$("#elevator_item").hide()}});
			$("#elevator").click(function(){
			$("html,body").animate({scrollTop:0},500)});
			$(".qr").hover(function(){
			$(".qr-popup").show()
		},function(){
			$(".qr-popup").hide()
		})
});

//移动判断
$(window).resize(function() {
	var sUserAgent = navigator.userAgent.toLowerCase();
   var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
   var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
   var bIsMidp = sUserAgent.match(/midp/i) == "midp";
   var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
   var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
   var bIsAndroid = sUserAgent.match(/android/i) == "android";
   var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
   var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
   if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM){
   	//alert('移动端');
   }else{
  		window.location.reload();
	}
});

//代码演示					
function runCode(objname){
	var winname=window.open('',"_blank",'');
	var obj=document.getElementById(objname);
	winname.document.open('text/html','replace');
	winname.opener=null;
	winname.document.write(obj.value);
    winname.document.close();
};