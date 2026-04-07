function movies() {
   const settings = {
	async: true,
	crossDomain: true,
	url: 'https://real-time-news-data.p.rapidapi.com/search?query=Football&limit=10&time_published=anytime&country=US&lang=en',
	method: 'GET',
	headers: {
		'x-rapidapi-key': '90759be50dmsh864952a04bd881ep160f09jsnf3871288fa1e',
		'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
}