pubcoder.projectID = pubcoder.projectID || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.id = pubcoder.project.id || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.title = pubcoder.project.title || "Bella Bellows";
pubcoder.page.id = pubcoder.page.id || 18;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
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
var obj490_onTap_activeActionGroupIndex = -1;
var obj490_onTap_runningActionsCount = 0;
var obj490_onTap_loopCount = 0;
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
		
obj490_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj490_onTap_activeActionGroupIndex = -1;
		$("#obj490").trigger("obj490_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 490) {
				console.warn("de-queueing event obj490." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj490").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj490_onTap_activeActionGroupIndex = 0;
	













//	action: playPauseAudio
//	target: obj497 
playPauseAudio_492();
function playPauseAudio_492() {
	window.obj490_onTap_runningActionsCount = obj490_onTap_runningActionsCount + 1;
	var myAudio = $("#obj497")[0];
	if (myAudio.paused) {
		myAudio.play();
	} else {
		myAudio.pause();
	}
	window.obj490_onTap_runningActionsCount = window.obj490_onTap_runningActionsCount - 1;
if (window.obj490_onTap_runningActionsCount < 0) {
	window.obj490_onTap_runningActionsCount = 0;
} else if (window.obj490_onTap_runningActionsCount == 0) {
	obj490_onTap_actionGroup1();
}
}








};
obj490_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj490_onTap_activeActionGroupIndex = -1;
		$("#obj490").trigger("obj490_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 490) {
				console.warn("de-queueing event obj490." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj490").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj490_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		































































/*
 *
 *   obj490: Event Touch Down
 *
 */
$("#obj490").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj490_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj490_onTap is still running");
	return;
}
var obj490_onTap_runningActionsCount = 0;
var obj490_onTap_loopCount = 0;
obj490_onTap_actionGroup0();
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
	
$("#obj345").trigger('SCEventShow');
$("#obj58").trigger('SCEventShow');
$("#obj275").trigger('SCEventShow');
$("#obj404").trigger('SCEventShow');
$("#obj481").trigger('SCEventShow');
$("#obj488").trigger('SCEventShow');
$("#obj490").trigger('SCEventShow');
$("#obj493").trigger('SCEventShow');
$("#obj497").trigger('SCEventShow');
	
});