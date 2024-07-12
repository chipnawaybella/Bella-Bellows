pubcoder.projectID = pubcoder.projectID || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.id = pubcoder.project.id || "97B67C4DD58C2F488F9C17BD612E8D17";
pubcoder.project.title = pubcoder.project.title || "Bella Bellows";
pubcoder.page.id = pubcoder.page.id || 21;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj73_SCQuizCompletedAllCorrectAnswers_activeActionGroupIndex = -1;
var obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
var obj73_SCQuizCompletedAllCorrectAnswers_loopCount = 0;
var obj73_SCQuizReset_activeActionGroupIndex = -1;
var obj73_SCQuizReset_runningActionsCount = 0;
var obj73_SCQuizReset_loopCount = 0;
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
	
var scQuizObj73 = new SCQuiz('#obj73', {"assessmentID":"quiz73","autosave":false,"countdown":false,"enableReset":true,"mode":"ask-all","numberOfQuestionsToAsk":1,"perfectMessage":"Perfect!","quiz":[{"answers":[{"choice":"obj73_1_1_1","correct":true},{"choice":"obj73_1_1_2","correct":true},{"choice":"obj73_1_1_3","correct":true},{"choice":"obj73_1_1_4","correct":true},{"choice":"obj73_1_1_5","correct":true},{"choice":"obj73_1_1_6","correct":true}],"question":"obj73_1_1"}],"showMissed":true,"uncompletedMessage":"Missing Answers!"});
pubcoder.controllers.SCQuiz = pubcoder.controllers.SCQuiz || {};
pubcoder.controllers.SCQuiz["obj73"] = scQuizObj73;
pubcoder.controllers.all["obj73"] = scQuizObj73;
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
		
obj73_SCQuizCompletedAllCorrectAnswers_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73_SCQuizCompletedAllCorrectAnswers_activeActionGroupIndex = -1;
		$("#obj73").trigger("obj73_SCQuizCompletedAllCorrectAnswers_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73) {
				console.warn("de-queueing event obj73." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73_SCQuizCompletedAllCorrectAnswers_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj389
(function(){
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount + 1;

	var selector = "#obj389";
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
					window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount - 1;
if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount < 0) {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
} else if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount == 0) {
	obj73_SCQuizCompletedAllCorrectAnswers_actionGroup1();
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
				window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount - 1;
if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount < 0) {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
} else if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount == 0) {
	obj73_SCQuizCompletedAllCorrectAnswers_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj163
(function(){
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount + 1;

	var selector = "#obj163";
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
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount - 1;
if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount < 0) {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
} else if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount == 0) {
	obj73_SCQuizCompletedAllCorrectAnswers_actionGroup1();
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
				window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount - 1;
if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount < 0) {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
} else if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount == 0) {
	obj73_SCQuizCompletedAllCorrectAnswers_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj148 
playAudio_150();
function playAudio_150() {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount + 1;
	var myAudio = $("#obj148")[0];
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
		    window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount - 1;
if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount < 0) {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
} else if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount == 0) {
	obj73_SCQuizCompletedAllCorrectAnswers_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount - 1;
if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount < 0) {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
} else if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount == 0) {
	obj73_SCQuizCompletedAllCorrectAnswers_actionGroup1();
}
	}
}


//	action: Run JavaScript
runjs_166();
function runjs_166() {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj163"));
	
	setTimeout(function() {
		window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount - 1;
if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount < 0) {
	window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
} else if (window.obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount == 0) {
	obj73_SCQuizCompletedAllCorrectAnswers_actionGroup1();
}
	}, 1);
}







};
obj73_SCQuizCompletedAllCorrectAnswers_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73_SCQuizCompletedAllCorrectAnswers_activeActionGroupIndex = -1;
		$("#obj73").trigger("obj73_SCQuizCompletedAllCorrectAnswers_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73) {
				console.warn("de-queueing event obj73." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73_SCQuizCompletedAllCorrectAnswers_activeActionGroupIndex = 1;
	





















};
obj73_SCQuizReset_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73_SCQuizReset_activeActionGroupIndex = -1;
		$("#obj73").trigger("obj73_SCQuizReset_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73) {
				console.warn("de-queueing event obj73." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73_SCQuizReset_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj163 
hide_391();
function hide_391() {
	var selector = "#obj163";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73_SCQuizReset_runningActionsCount = obj73_SCQuizReset_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73_SCQuizReset_runningActionsCount = window.obj73_SCQuizReset_runningActionsCount - 1;
if (window.obj73_SCQuizReset_runningActionsCount < 0) {
	window.obj73_SCQuizReset_runningActionsCount = 0;
} else if (window.obj73_SCQuizReset_runningActionsCount == 0) {
	obj73_SCQuizReset_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_391(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73_SCQuizReset_runningActionsCount = window.obj73_SCQuizReset_runningActionsCount - 1;
if (window.obj73_SCQuizReset_runningActionsCount < 0) {
	window.obj73_SCQuizReset_runningActionsCount = 0;
} else if (window.obj73_SCQuizReset_runningActionsCount == 0) {
	obj73_SCQuizReset_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj389 
hide_165();
function hide_165() {
	var selector = "#obj389";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73_SCQuizReset_runningActionsCount = obj73_SCQuizReset_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73_SCQuizReset_runningActionsCount = window.obj73_SCQuizReset_runningActionsCount - 1;
if (window.obj73_SCQuizReset_runningActionsCount < 0) {
	window.obj73_SCQuizReset_runningActionsCount = 0;
} else if (window.obj73_SCQuizReset_runningActionsCount == 0) {
	obj73_SCQuizReset_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_165(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73_SCQuizReset_runningActionsCount = window.obj73_SCQuizReset_runningActionsCount - 1;
if (window.obj73_SCQuizReset_runningActionsCount < 0) {
	window.obj73_SCQuizReset_runningActionsCount = 0;
} else if (window.obj73_SCQuizReset_runningActionsCount == 0) {
	obj73_SCQuizReset_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73_SCQuizReset_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73_SCQuizReset_activeActionGroupIndex = -1;
		$("#obj73").trigger("obj73_SCQuizReset_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73) {
				console.warn("de-queueing event obj73." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73_SCQuizReset_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





































/*
 *
 *   obj73: Event SCQuizCompletedAllCorrectAnswers
 *
 */
$("#obj73").bind("SCQuizCompletedAllCorrectAnswers", function(event) {
	if (window.obj73_SCQuizCompletedAllCorrectAnswers_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73_SCQuizCompletedAllCorrectAnswers is still running");
	return;
}
var obj73_SCQuizCompletedAllCorrectAnswers_runningActionsCount = 0;
var obj73_SCQuizCompletedAllCorrectAnswers_loopCount = 0;
obj73_SCQuizCompletedAllCorrectAnswers_actionGroup0();
});
/*
 *
 *   obj73: Event SCQuizReset
 *
 */
$("#obj73").bind("SCQuizReset", function(event) {
	if (window.obj73_SCQuizReset_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73_SCQuizReset is still running");
	return;
}
var obj73_SCQuizReset_runningActionsCount = 0;
var obj73_SCQuizReset_loopCount = 0;
obj73_SCQuizReset_actionGroup0();
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
	
$("#obj354").trigger('SCEventShow');
$("#obj148").trigger('SCEventShow');
$("#obj73").trigger('SCEventShow');
$("#obj396").trigger('SCEventShow');
	
});