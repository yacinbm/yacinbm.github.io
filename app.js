'use strict';
const context = cast.framework.CastReceiverContext.getInstance();
context.addCustomMessageListener('urn:x-cast:com.example.castdata', function(customEvent) {
	if(customEvent.data.type == "message"){
		document.getElementById("message").innerHTML = customEvent.data.text;
		console.log(customEvent.data.text)
	}
});
context.start();
console.log("Hi from ChromeCast!");
