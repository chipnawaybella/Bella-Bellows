pubcoder.projectID = pubcoder.projectID || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.id = pubcoder.project.id || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.title = pubcoder.project.title || "Bella Bellows";
pubcoder.page.id = pubcoder.page.id || 305;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
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
var obj310_onTap_activeActionGroupIndex = -1;
var obj310_onTap_runningActionsCount = 0;
var obj310_onTap_loopCount = 0;
var obj321_onLoad_activeActionGroupIndex = -1;
var obj321_onLoad_runningActionsCount = 0;
var obj321_onLoad_loopCount = 0;
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
		
obj310_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj310_onTap_activeActionGroupIndex = -1;
		$("#obj310").trigger("obj310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 310) {
				console.warn("de-queueing event obj310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj310_onTap_activeActionGroupIndex = 0;
	













//	action: playPauseAudio
//	target: obj321 
playPauseAudio_419();
function playPauseAudio_419() {
	window.obj310_onTap_runningActionsCount = obj310_onTap_runningActionsCount + 1;
	var myAudio = $("#obj321")[0];
	if (myAudio.paused) {
		myAudio.play();
	} else {
		myAudio.pause();
	}
	window.obj310_onTap_runningActionsCount = window.obj310_onTap_runningActionsCount - 1;
if (window.obj310_onTap_runningActionsCount < 0) {
	window.obj310_onTap_runningActionsCount = 0;
} else if (window.obj310_onTap_runningActionsCount == 0) {
	obj310_onTap_actionGroup1();
}
}








};
obj310_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj310_onTap_activeActionGroupIndex = -1;
		$("#obj310").trigger("obj310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 310) {
				console.warn("de-queueing event obj310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj310_onTap_activeActionGroupIndex = 1;
	





















};
obj321_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj321_onLoad_activeActionGroupIndex = -1;
		$("#obj321").trigger("obj321_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 321) {
				console.warn("de-queueing event obj321." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj321").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj321_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj321 
playAudio_323();
function playAudio_323() {
	window.obj321_onLoad_runningActionsCount = obj321_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj321")[0];
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
		    window.obj321_onLoad_runningActionsCount = window.obj321_onLoad_runningActionsCount - 1;
if (window.obj321_onLoad_runningActionsCount < 0) {
	window.obj321_onLoad_runningActionsCount = 0;
} else if (window.obj321_onLoad_runningActionsCount == 0) {
	obj321_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj321_onLoad_runningActionsCount = window.obj321_onLoad_runningActionsCount - 1;
if (window.obj321_onLoad_runningActionsCount < 0) {
	window.obj321_onLoad_runningActionsCount = 0;
} else if (window.obj321_onLoad_runningActionsCount == 0) {
	obj321_onLoad_actionGroup1();
}
	}
}









};
obj321_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj321_onLoad_activeActionGroupIndex = -1;
		$("#obj321").trigger("obj321_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 321) {
				console.warn("de-queueing event obj321." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj321").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj321_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		























/*
 *
 *   obj310: Event Touch Down
 *
 */
$("#obj310").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj310_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj310_onTap is still running");
	return;
}
var obj310_onTap_runningActionsCount = 0;
var obj310_onTap_loopCount = 0;
obj310_onTap_actionGroup0();
});












/*
 *
 *   obj321: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj321_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj321_onLoad is still running");
	return;
}
var obj321_onLoad_runningActionsCount = 0;
var obj321_onLoad_loopCount = 0;
obj321_onLoad_actionGroup0();
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
	
$("#obj306").trigger('SCEventShow');
$("#obj308").trigger('SCEventShow');
$("#obj310").trigger('SCEventShow');
$("#obj321").trigger('SCEventShow');
$("#obj398").trigger('SCEventShow');
	
});