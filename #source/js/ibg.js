function ibg() {
	function isIE() {
		var ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(../' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();