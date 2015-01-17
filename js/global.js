$(document).ready(function() {
  $('.p-name, .journal-entry h1').widowFix({
      letterLimit: 10,
      prevLimit: 8
  });

  // WidowFix
  $('.journal-entry p, .site-intro, .p-summary').widowFix();

    // FitVids
	$(".media-figure").fitVids();

  if ($("#mp-list").length ) {
    $("#mp-list").prepend("<input id='list-search' class='search list-search-input' placeholder='e.g. Baird or Manly' />");
    $(".list-search-input").before("<label for='list-search' class='list-search-label'>Filter list by name or electorate</label>");

    var options = {
      valueNames: [ 'p-name', 'p-role' ]
    };

    var mpList = new List('mp-list', options);
  }
});
