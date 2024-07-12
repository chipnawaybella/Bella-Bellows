pubcoder.projectID = pubcoder.projectID || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.id = pubcoder.project.id || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.title = pubcoder.project.title || "Bella Bellows";
pubcoder.page.id = pubcoder.page.id || 19;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj63_onTap_activeActionGroupIndex = -1;
var obj63_onTap_runningActionsCount = 0;
var obj63_onTap_loopCount = 0;
var obj271_onLoad_activeActionGroupIndex = -1;
var obj271_onLoad_runningActionsCount = 0;
var obj271_onLoad_loopCount = 0;
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
		
obj63_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj63_onTap_activeActionGroupIndex = -1;
		$("#obj63").trigger("obj63_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 63) {
				console.warn("de-queueing event obj63." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj63").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj63_onTap_activeActionGroupIndex = 0;
	













//	action: playPauseAudio
//	target: obj271 
playPauseAudio_422();
function playPauseAudio_422() {
	window.obj63_onTap_runningActionsCount = obj63_onTap_runningActionsCount + 1;
	var myAudio = $("#obj271")[0];
	if (myAudio.paused) {
		myAudio.play();
	} else {
		myAudio.pause();
	}
	window.obj63_onTap_runningActionsCount = window.obj63_onTap_runningActionsCount - 1;
if (window.obj63_onTap_runningActionsCount < 0) {
	window.obj63_onTap_runningActionsCount = 0;
} else if (window.obj63_onTap_runningActionsCount == 0) {
	obj63_onTap_actionGroup1();
}
}








};
obj63_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj63_onTap_activeActionGroupIndex = -1;
		$("#obj63").trigger("obj63_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 63) {
				console.warn("de-queueing event obj63." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj63").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj63_onTap_activeActionGroupIndex = 1;
	





















};
obj271_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj271_onLoad_activeActionGroupIndex = -1;
		$("#obj271").trigger("obj271_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 271) {
				console.warn("de-queueing event obj271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj271_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj271 
playAudio_273();
function playAudio_273() {
	window.obj271_onLoad_runningActionsCount = obj271_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj271")[0];
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
		    window.obj271_onLoad_runningActionsCount = window.obj271_onLoad_runningActionsCount - 1;
if (window.obj271_onLoad_runningActionsCount < 0) {
	window.obj271_onLoad_runningActionsCount = 0;
} else if (window.obj271_onLoad_runningActionsCount == 0) {
	obj271_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj271_onLoad_runningActionsCount = window.obj271_onLoad_runningActionsCount - 1;
if (window.obj271_onLoad_runningActionsCount < 0) {
	window.obj271_onLoad_runningActionsCount = 0;
} else if (window.obj271_onLoad_runningActionsCount == 0) {
	obj271_onLoad_actionGroup1();
}
	}
}









};
obj271_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj271_onLoad_activeActionGroupIndex = -1;
		$("#obj271").trigger("obj271_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 271) {
				console.warn("de-queueing event obj271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj271_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj63: Event Touch Down
 *
 */
$("#obj63").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj63_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj63_onTap is still running");
	return;
}
var obj63_onTap_runningActionsCount = 0;
var obj63_onTap_loopCount = 0;
obj63_onTap_actionGroup0();
});






















/*
 *
 *   obj271: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj271_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj271_onLoad is still running");
	return;
}
var obj271_onLoad_runningActionsCount = 0;
var obj271_onLoad_loopCount = 0;
obj271_onLoad_actionGroup0();
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
	
$("#obj350").trigger('SCEventShow');
$("#obj63").trigger('SCEventShow');
$("#obj66").trigger('SCEventShow');
$("#obj271").trigger('SCEventShow');
$("#obj406").trigger('SCEventShow');
$("#obj449").trigger('SCEventShow');
$("#obj451").trigger('SCEventShow');
	
});