pubcoder.projectID = pubcoder.projectID || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.id = pubcoder.project.id || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.title = pubcoder.project.title || "Bella Bellows";
pubcoder.page.id = pubcoder.page.id || 20;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
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
var obj68_onTap_activeActionGroupIndex = -1;
var obj68_onTap_runningActionsCount = 0;
var obj68_onTap_loopCount = 0;
var obj246_onLoad_activeActionGroupIndex = -1;
var obj246_onLoad_runningActionsCount = 0;
var obj246_onLoad_loopCount = 0;
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
		
obj68_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68_onTap_activeActionGroupIndex = -1;
		$("#obj68").trigger("obj68_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68) {
				console.warn("de-queueing event obj68." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68_onTap_activeActionGroupIndex = 0;
	













//	action: playPauseAudio
//	target: obj246 
playPauseAudio_423();
function playPauseAudio_423() {
	window.obj68_onTap_runningActionsCount = obj68_onTap_runningActionsCount + 1;
	var myAudio = $("#obj246")[0];
	if (myAudio.paused) {
		myAudio.play();
	} else {
		myAudio.pause();
	}
	window.obj68_onTap_runningActionsCount = window.obj68_onTap_runningActionsCount - 1;
if (window.obj68_onTap_runningActionsCount < 0) {
	window.obj68_onTap_runningActionsCount = 0;
} else if (window.obj68_onTap_runningActionsCount == 0) {
	obj68_onTap_actionGroup1();
}
}








};
obj68_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68_onTap_activeActionGroupIndex = -1;
		$("#obj68").trigger("obj68_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68) {
				console.warn("de-queueing event obj68." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68_onTap_activeActionGroupIndex = 1;
	





















};
obj246_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj246_onLoad_activeActionGroupIndex = -1;
		$("#obj246").trigger("obj246_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 246) {
				console.warn("de-queueing event obj246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj246_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj246 
playAudio_260();
function playAudio_260() {
	window.obj246_onLoad_runningActionsCount = obj246_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj246")[0];
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
		    window.obj246_onLoad_runningActionsCount = window.obj246_onLoad_runningActionsCount - 1;
if (window.obj246_onLoad_runningActionsCount < 0) {
	window.obj246_onLoad_runningActionsCount = 0;
} else if (window.obj246_onLoad_runningActionsCount == 0) {
	obj246_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj246_onLoad_runningActionsCount = window.obj246_onLoad_runningActionsCount - 1;
if (window.obj246_onLoad_runningActionsCount < 0) {
	window.obj246_onLoad_runningActionsCount = 0;
} else if (window.obj246_onLoad_runningActionsCount == 0) {
	obj246_onLoad_actionGroup1();
}
	}
}









};
obj246_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj246_onLoad_activeActionGroupIndex = -1;
		$("#obj246").trigger("obj246_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 246) {
				console.warn("de-queueing event obj246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj246_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj68: Event Touch Down
 *
 */
$("#obj68").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68_onTap is still running");
	return;
}
var obj68_onTap_runningActionsCount = 0;
var obj68_onTap_loopCount = 0;
obj68_onTap_actionGroup0();
});






















/*
 *
 *   obj246: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj246_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj246_onLoad is still running");
	return;
}
var obj246_onLoad_runningActionsCount = 0;
var obj246_onLoad_loopCount = 0;
obj246_onLoad_actionGroup0();
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
	
$("#obj352").trigger('SCEventShow');
$("#obj68").trigger('SCEventShow');
$("#obj71").trigger('SCEventShow');
$("#obj246").trigger('SCEventShow');
$("#obj408").trigger('SCEventShow');
$("#obj453").trigger('SCEventShow');
	
});