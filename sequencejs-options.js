$(document).ready(function(){var e={nextButton:!0,prevButton:!0,animateStartingFrameIn:!0,autoPlayDelay:3e3,preloader:!0,pauseOnHover:!1,preloadTheseFrames:[2]},t=$("#sequence").sequence(e).data("sequence");t.afterLoaded=function(){var e,n=document.createElement("ul");for(n.className="nav",i=0;i<t.numberOfFrames;i++)e=document.createElement("li"),n.appendChild(e);$("#sequence-theme").append(n),$("#sequence-theme .nav").fadeIn(100),$("#sequence-theme .nav li:nth-child("+t.settings.startingFrameID+")").addClass("active")},t.beforeNextFrameAnimatesIn=function(){$("#sequence-theme .nav li:not(:nth-child("+t.nextFrameID+"))").removeClass("active"),$("#sequence-theme .nav li:nth-child("+t.nextFrameID+")").addClass("active"),$("#sequence-theme .full-width img").each(function(){$(this).width()>$(this).parent().width()&&$(this).css({left:($(this).parent().width()-$(this).width())/2})}),$("#sequence-theme .png, #sequence-theme .framed-img").each(function(){var e;e=$("#sequence-theme").height()>315?($(this).parent().height()-80-$(this).height())/2:($(this).parent().height()-$(this).height())/2,0!=$(this).height()&&$(this).css({bottom:e})})},$("#sequence-theme").on("click",".nav li",function(){$(this).children("img").removeClass("active").children("img").addClass("active"),t.nextFrameID=$(this).index()+1,t.goTo(t.nextFrameID)}),$("#sequence-theme").hover(function(){$("#sequence-theme .prev").stop().animate({opacity:1,left:"3%"},500),$("#sequence-theme .next").stop().animate({opacity:1,right:"3%"},500)},function(){$("#sequence-theme .prev").stop().animate({opacity:0,left:"1%"},500),$("#sequence-theme .next").stop().animate({opacity:0,right:"1%"},500)})});