!function(n){n.fn.superfish=function(s){var i=n.fn.superfish,e=i.c,o=n('<span class="'+e.arrowClass+'"> &#187;</span>'),t=function(){var s=n(this),i=h(s);clearTimeout(i.sfTimer),s.showSuperfishUl().siblings().hideSuperfishUl()},a=function(s){var e=n(this),o=h(e);"click"===s.type||i.ios?n.proxy(l,e,o)():(clearTimeout(o.sfTimer),o.sfTimer=setTimeout(n.proxy(l,e,o),o.delay))},l=function(s){s.retainPath=n.inArray(this[0],s.$path)>-1,this.hideSuperfishUl(),this.parents("."+s.hoverClass).length||(s.onIdle.call(r(this)),s.$path.length&&n.proxy(t,s.$path)())},r=function(n){return n.closest("."+e.menuClass)},h=function(n){return r(n).data("sf-options")},u=function(n){n.css("ms-touch-action","none")},c=function(s,e){var o="li:has(ul)";e.useClick||(n.fn.hoverIntent&&!e.disableHI?s.hoverIntent(t,a,o):s.on("mouseenter",o,t).on("mouseleave",o,a));var l="MSPointerDown";i.ios||(l+=" touchstart"),i.wp7&&(l+=" mousedown"),s.on("focusin","li",t).on("focusout","li",a).on("click","a",e,f).on(l,"a",d)},d=function(s){var i=n(this),e=i.siblings("ul");return e.length>0&&e.is(":hidden")&&(i.data("follow",!1),"MSPointerDown"===s.type)?(i.trigger("focus"),!1):void 0},f=function(s){var i=n(this),e=s.data,o=i.siblings("ul"),l=i.data("follow")===!1?!1:!0;!o.length||!e.useClick&&l||(s.preventDefault(),o.is(":hidden")?n.proxy(t,i.parent("li"))():e.useClick&&l&&n.proxy(a,i.parent("li"),s)())},p=function(s,i){return s.find("li."+i.pathClass).slice(0,i.pathLevels).addClass(i.hoverClass+" "+e.bcClass).filter(function(){return n(this).children("ul").hide().show().length}).removeClass(i.pathClass)},v=function(s,i){i.autoArrows&&s.children("a").each(function(){C(n(this))})},C=function(n){n.addClass(e.anchorClass).append(o.clone())};return i.getOptions=h,this.addClass(e.menuClass).each(function(){var o=n(this),t=n.extend({},i.defaults,s),a=o.find("li:has(ul)");t.$path=p(o,t),o.data("sf-options",t),v(a,t),u(o),c(o,t),a.not("."+e.bcClass).hideSuperfishUl(!0),t.onInit.call(this)})};var s=n.fn.superfish;s.o=[],s.op={},s.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator"},s.defaults={hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",autoArrows:!0,disableHI:!1,useClick:!1,onInit:n.noop,onBeforeShow:n.noop,onShow:n.noop,onBeforeHide:n.noop,onHide:n.noop,onIdle:n.noop},s.ios=/iPhone|iPad|iPod/i.test(navigator.userAgent),s.wp7=function(){var n=document.documentElement.style;return"behavior"in n&&"fill"in n&&/iemobile/i.test(navigator.userAgent)}(),n.fn.extend({hideSuperfishUl:function(i){if(this.length){var e=this,o=s.getOptions(e),t=o.retainPath===!0?o.$path:"",a=e.find("li."+o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children("ul"),l=o.speedOut;i&&(a.show(),l=0),o.retainPath=!1,o.onBeforeHide.call(a),a.stop(!0,!0).animate(o.animationOut,l,function(){var s=n(this);o.onHide.call(s),o.useClick&&s.siblings("a").data("follow",!1)})}return this},showSuperfishUl:function(){var n=s.getOptions(this),i=this.addClass(n.hoverClass),e=i.children("ul");return n.onBeforeShow.call(e),e.stop(!0,!0).animate(n.animation,n.speed,function(){n.onShow.call(e),i.children("a").data("follow",!0)}),this}}),s.ios&&n(window).load(function(){n("body").children().on("click",n.noop)})}(jQuery);