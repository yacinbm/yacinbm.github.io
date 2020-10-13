'use strict';
const context = cast.framework.CastReceiverContext.getInstance();
context.addCustomMessageListener('urn:x-cast:com.yacinbm.com', function(customEvent) {
	console.log("Got message!")
	if(customEvent.type == "message"){
		document.getElementById("message").innerHTML = customEvent.data.text;
		console.log(customEvent.data.text)
	}
});
context.start();
console.log("Hi from ChromeCast!");
