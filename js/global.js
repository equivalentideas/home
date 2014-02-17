$(document).ready(function() {
    $('.p-name, .journal-entry h1').widowFix({
        letterLimit: 10,
        prevLimit: 8
    });

    // WidowFix
    $('.journal-entry p, .site-intro, .p-summary').widowFix();

    // FitVids
	$(".media-figure").fitVids();
});