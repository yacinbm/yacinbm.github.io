'use strict';
const context = cast.framework.CastReceiverContext.getInstance();
context.addCustomMessageListener('urn:x-cast:msg.yacinbm.cast', function(customEvent) {
	console.log("Got message!")
	if(customEvent.type == "message"){
		console.log(customEvent.data.text)
	}
});
context.start();
console.log("App V0.1");
