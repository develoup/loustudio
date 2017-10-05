// host params
var pth = window.location.pathname;
var prms = (window.location.pathname == "/web/") ? window.location.pathname : pth.substr(5, pth.length);
var crrntprj = 0;
var prjcts = ["sayfit", "ikea", "drawjay", "intv", "falc", "erf", "messi", "martini-rosato", "fitness", "dolcegusto", "pau-gasol", "cornetto", "magnum", "pau-gasol", "fcbarcelona", "idae", "turespana", "rafa-nadal", "guia-repsol", "ricoh", "porcelanosa", "mastercard", "powerade"];

for (index = 0; index < prjcts.length; ++index) {
	if( prms == prjcts[index] ){
		crrntprj = index;
    	update_url(index);
	}
}


// update url
function update_url(url) {
	var hs = "/web/"+prjcts[url];
	history.pushState(null, null, hs);
}