// weather url https://api.darksky.net/forecast/f693ad4fa47137321f70f403e91be488/37.8267,-122.4233


var baseURL = 'https://api.darksky.net/forecast/f693ad4fa47137321f70f403e91be488',
	weatherNode = document.querySelector('.weather')



var makeNavString = function(lat,lng) {
	// use the lat and lng to write 
	// the buttons/links for current, daily, and hourly 
	// views
	// stick them onto the DOM
}
var hashController = function() {
	// hash must have form #LAT/LNG/VIEWTYPE
	// read the latitude, longitude, and viewtype from the hash

		// the lat and long should be used to construct an api request url
		// make that request, store the promise.

		// depending on the viewtype, assign one of three view rendering functions
		// to run when the response comes back


	var hashString = location.hash.substr(1),
		hashParts = hashString.split('/'),
		lat = hashParts[0],
		lng = hashParts[1],
		viewType = hashParts[2]


	makeNavString(lat,lng)

	if (hashParts.length < 3) {
		// redirect the user. tbd later.
		// default behavior. run a function to get current position, writing the 
			// current lat and long to the hash after some delay. let the controller
			// kick back into action at that point.
		return 
	}

	var requestURL = baseURL + '/' + lat + ',' + lng + '?callback=?'
	var weatherPromise = $.getJSON(requestURL)

	if (viewType === 'current')  {
		// queue up the currentRenderer
		alert('showing current data')
	}

	else if (viewType === 'daily') {
		// queue up the dailyRenderer
		alert('showing daily data')

	}

	else if (viewType === 'hourly') {
		//queue up the hourly renderer
		alert('showing hourly data')
	}
}

window.addEventListener('hashchange',hashController)












































// var getWeatherData = function(apiResponse){
// 	console.log(apiResponse)
// 	weatherNode.innerHTML = '<h2>' + apiResponse.currently.temperature + '</h2>'
// }

var successFunction = function(positionObject){
	// var long = positionObject.coords.longitude,
	// 	lat = positionObject.coords.latitude
	// console.log('latitude is' + positionObject.coords.latitude)
	// console.log('longitude is' + positionObject.coords.longitude)
}

// navigator.geolocation.getCurrentPosition(successFunction)