'use strict';
const context = cast.framework.CastReceiverContext.getInstance();
context.addCustomMessageListener('urn:x-cast:com.example.castdata', function(customEvent) {
	if(customEvent.data.type == "message"){
		document.getElementById("message").innerHTML = customEvent.data.text;
	}
});
context.start();
