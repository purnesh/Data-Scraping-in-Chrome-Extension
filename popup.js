//This is an example JS taken from HTML5 Rocks website
//It has been modified according to the demand of this tutorial


//CORS request is a crucial part for this application
//you can read more about it here:
//http://en.wikipedia.org/wiki/Cross-origin_resource_sharing


function createCORSRequest(method, url) {
	  var xhr = new XMLHttpRequest();
	  if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	  } else if (typeof XDomainRequest != "undefined") {
		// XDomainRequest for IE.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	  } else {
		// CORS not supported.
		xhr = null;
	  }
	return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
	  return text.match('<title>(.*)?</title>')[1];
	}

// Make the actual CORS request.
function makeCorsRequest() {
	  // All HTML5 Rocks properties support CORS.
	  var url = 'http://ln0.in/tutorial/index.php';

	  var xhr = createCORSRequest('GET', url);
	  if (!xhr) {
		document.getElementById('revert').innerHTML = 'CORS not supported';
		return;
	  }

	  // Response handlers.
	  xhr.onload = function() {
		var text = xhr.responseText;
		var title = getTitle(text);
		document.getElementById('revert').innerHTML=text;
	  };

	  xhr.onerror = function() {
		document.getElementById('revert').innerHTML = 'Woops, there was an error making the request.';
	  };

	  xhr.send();
}

var a = makeCorsRequest;
a();
