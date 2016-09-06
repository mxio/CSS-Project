var searchForm = document.getElementById('searchform');
var search = document.getElementById('search');

searchform.addEventListener('submit', function (event) {
	event.preventDefault();
	if (validator.isEmpty(search.value) || !validator.isTrimmed(search.value)) {
		searchForm.className = "invalid";
		search.className = "search invalid";
	} 
}, false);

search.addEventListener('input', function (event) {
	if (!validator.isEmpty(search.value) || validator.isTrimmed(search.value)) {
		searchForm.className = "valid";
		search.className = "search valid";
	}
}, 
false);