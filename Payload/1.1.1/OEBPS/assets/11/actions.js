pubcoder.projectID = pubcoder.projectID || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.id = pubcoder.project.id || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.title = pubcoder.project.title || "Bella Bellows";
pubcoder.page.id = pubcoder.page.id || 24;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj128_onLoad_activeActionGroupIndex = -1;
var obj128_onLoad_runningActionsCount = 0;
var obj128_onLoad_loopCount = 0;
var obj124_onTap_activeActionGroupIndex = -1;
var obj124_onTap_runningActionsCount = 0;
var obj124_onTap_loopCount = 0;
var obj137_onLoad_activeActionGroupIndex = -1;
var obj137_onLoad_runningActionsCount = 0;
var obj137_onLoad_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj128_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj128_onLoad_activeActionGroupIndex = -1;
		$("#obj128").trigger("obj128_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 128) {
				console.warn("de-queueing event obj128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj128_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj128 
playAudio_257();
function playAudio_257() {
	window.obj128_onLoad_runningActionsCount = obj128_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj128")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj128_onLoad_runningActionsCount = window.obj128_onLoad_runningActionsCount - 1;
if (window.obj128_onLoad_runningActionsCount < 0) {
	window.obj128_onLoad_runningActionsCount = 0;
} else if (window.obj128_onLoad_runningActionsCount == 0) {
	obj128_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj128_onLoad_runningActionsCount = window.obj128_onLoad_runningActionsCount - 1;
if (window.obj128_onLoad_runningActionsCount < 0) {
	window.obj128_onLoad_runningActionsCount = 0;
} else if (window.obj128_onLoad_runningActionsCount == 0) {
	obj128_onLoad_actionGroup1();
}
	}
}









};
obj128_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj128_onLoad_activeActionGroupIndex = -1;
		$("#obj128").trigger("obj128_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 128) {
				console.warn("de-queueing event obj128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj128_onLoad_activeActionGroupIndex = 1;
	





















};
obj124_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj124_onTap_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 124) {
				console.warn("de-queueing event obj124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj124_onTap_activeActionGroupIndex = 0;
	













//	action: playPauseAudio
//	target: obj128 
playPauseAudio_130();
function playPauseAudio_130() {
	window.obj124_onTap_runningActionsCount = obj124_onTap_runningActionsCount + 1;
	var myAudio = $("#obj128")[0];
	if (myAudio.paused) {
		myAudio.play();
	} else {
		myAudio.pause();
	}
	window.obj124_onTap_runningActionsCount = window.obj124_onTap_runningActionsCount - 1;
if (window.obj124_onTap_runningActionsCount < 0) {
	window.obj124_onTap_runningActionsCount = 0;
} else if (window.obj124_onTap_runningActionsCount == 0) {
	obj124_onTap_actionGroup1();
}
}








};
obj124_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj124_onTap_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 124) {
				console.warn("de-queueing event obj124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj124_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj137
(function(){
	window.obj124_onTap_runningActionsCount = obj124_onTap_runningActionsCount + 1;

	var selector = "#obj137";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj124_onTap_runningActionsCount = window.obj124_onTap_runningActionsCount - 1;
if (window.obj124_onTap_runningActionsCount < 0) {
	window.obj124_onTap_runningActionsCount = 0;
} else if (window.obj124_onTap_runningActionsCount == 0) {
	obj124_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj124_onTap_runningActionsCount = window.obj124_onTap_runningActionsCount - 1;
if (window.obj124_onTap_runningActionsCount < 0) {
	window.obj124_onTap_runningActionsCount = 0;
} else if (window.obj124_onTap_runningActionsCount == 0) {
	obj124_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj124_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj124_onTap_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 124) {
				console.warn("de-queueing event obj124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj124_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_143();
function runjs_143() {
	window.obj124_onTap_runningActionsCount = obj124_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj137"));
	
	setTimeout(function() {
		window.obj124_onTap_runningActionsCount = window.obj124_onTap_runningActionsCount - 1;
if (window.obj124_onTap_runningActionsCount < 0) {
	window.obj124_onTap_runningActionsCount = 0;
} else if (window.obj124_onTap_runningActionsCount == 0) {
	obj124_onTap_actionGroup3();
}
	}, 1);
}







};
obj124_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj124_onTap_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 124) {
				console.warn("de-queueing event obj124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj124_onTap_activeActionGroupIndex = 3;
	





















};
obj137_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_onLoad_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 137) {
				console.warn("de-queueing event obj137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj137_onLoad_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_259();
function runjs_259() {
	window.obj137_onLoad_runningActionsCount = obj137_onLoad_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj137"));
	
	setTimeout(function() {
		window.obj137_onLoad_runningActionsCount = window.obj137_onLoad_runningActionsCount - 1;
if (window.obj137_onLoad_runningActionsCount < 0) {
	window.obj137_onLoad_runningActionsCount = 0;
} else if (window.obj137_onLoad_runningActionsCount == 0) {
	obj137_onLoad_actionGroup1();
}
	}, 1);
}







};
obj137_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj137_onLoad_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 137) {
				console.warn("de-queueing event obj137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj137_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj128: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj128_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj128_onLoad is still running");
	return;
}
var obj128_onLoad_runningActionsCount = 0;
var obj128_onLoad_loopCount = 0;
obj128_onLoad_actionGroup0();
});








/*
 *
 *   obj124: Event Touch Down
 *
 */
$("#obj124").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj124_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj124_onTap is still running");
	return;
}
var obj124_onTap_runningActionsCount = 0;
var obj124_onTap_loopCount = 0;
obj124_onTap_actionGroup0();
});












/*
 *
 *   obj137: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj137_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj137_onLoad is still running");
	return;
}
var obj137_onLoad_runningActionsCount = 0;
var obj137_onLoad_loopCount = 0;
obj137_onLoad_actionGroup0();
});













































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj360").trigger('SCEventShow');
$("#obj128").trigger('SCEventShow');
$("#obj124").trigger('SCEventShow');
$("#obj137").trigger('SCEventShow');
$("#obj412").trigger('SCEventShow');
$("#obj458").trigger('SCEventShow');
$("#obj460").trigger('SCEventShow');
$("#obj462").trigger('SCEventShow');
	
});