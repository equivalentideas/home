$(document).ready(function() {
    // WidowFix
    $('.journal-entry p, .journal-entry h1, .site-intro, .p-name, .p-summary').widowFix();
});

ragadjust('.e-content p,h2, h3', 'all');

$(document).ready(function() {
    // FitVids
	$("figure.media").fitVids();
});