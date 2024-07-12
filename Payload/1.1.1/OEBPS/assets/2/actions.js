pubcoder.projectID = pubcoder.projectID || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.id = pubcoder.project.id || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.title = pubcoder.project.title || "Bella Bellows";
pubcoder.page.id = pubcoder.page.id || 281;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj286_onTap_activeActionGroupIndex = -1;
var obj286_onTap_runningActionsCount = 0;
var obj286_onTap_loopCount = 0;
var obj289_onLoad_activeActionGroupIndex = -1;
var obj289_onLoad_runningActionsCount = 0;
var obj289_onLoad_loopCount = 0;
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
		
obj286_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj286_onTap_activeActionGroupIndex = -1;
		$("#obj286").trigger("obj286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 286) {
				console.warn("de-queueing event obj286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj286_onTap_activeActionGroupIndex = 0;
	













//	action: playPauseAudio
//	target: obj289 
playPauseAudio_418();
function playPauseAudio_418() {
	window.obj286_onTap_runningActionsCount = obj286_onTap_runningActionsCount + 1;
	var myAudio = $("#obj289")[0];
	if (myAudio.paused) {
		myAudio.play();
	} else {
		myAudio.pause();
	}
	window.obj286_onTap_runningActionsCount = window.obj286_onTap_runningActionsCount - 1;
if (window.obj286_onTap_runningActionsCount < 0) {
	window.obj286_onTap_runningActionsCount = 0;
} else if (window.obj286_onTap_runningActionsCount == 0) {
	obj286_onTap_actionGroup1();
}
}








};
obj286_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj286_onTap_activeActionGroupIndex = -1;
		$("#obj286").trigger("obj286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 286) {
				console.warn("de-queueing event obj286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj286_onTap_activeActionGroupIndex = 1;
	





















};
obj289_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj289_onLoad_activeActionGroupIndex = -1;
		$("#obj289").trigger("obj289_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 289) {
				console.warn("de-queueing event obj289." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj289").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj289_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj289 
playAudio_379();
function playAudio_379() {
	window.obj289_onLoad_runningActionsCount = obj289_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj289")[0];
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
		    window.obj289_onLoad_runningActionsCount = window.obj289_onLoad_runningActionsCount - 1;
if (window.obj289_onLoad_runningActionsCount < 0) {
	window.obj289_onLoad_runningActionsCount = 0;
} else if (window.obj289_onLoad_runningActionsCount == 0) {
	obj289_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj289_onLoad_runningActionsCount = window.obj289_onLoad_runningActionsCount - 1;
if (window.obj289_onLoad_runningActionsCount < 0) {
	window.obj289_onLoad_runningActionsCount = 0;
} else if (window.obj289_onLoad_runningActionsCount == 0) {
	obj289_onLoad_actionGroup1();
}
	}
}









};
obj289_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj289_onLoad_activeActionGroupIndex = -1;
		$("#obj289").trigger("obj289_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 289) {
				console.warn("de-queueing event obj289." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj289").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj289_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj286: Event Touch Down
 *
 */
$("#obj286").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj286_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj286_onTap is still running");
	return;
}
var obj286_onTap_runningActionsCount = 0;
var obj286_onTap_loopCount = 0;
obj286_onTap_actionGroup0();
});






















/*
 *
 *   obj289: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj289_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj289_onLoad is still running");
	return;
}
var obj289_onLoad_runningActionsCount = 0;
var obj289_onLoad_loopCount = 0;
obj289_onLoad_actionGroup0();
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
	
$("#obj282").trigger('SCEventShow');
$("#obj286").trigger('SCEventShow');
$("#obj331").trigger('SCEventShow');
$("#obj289").trigger('SCEventShow');
$("#obj392").trigger('SCEventShow');
$("#obj464").trigger('SCEventShow');
$("#obj466").trigger('SCEventShow');
$("#obj470").trigger('SCEventShow');
	
});