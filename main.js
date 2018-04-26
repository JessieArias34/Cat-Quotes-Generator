$(document).ready(function() {
	
	var forismaticAPI = "http://www.thegreatcat.org/stories-poems-and-quotations/cat-quotes-by-subject/";
	
	$("#GetQuoteBtn").on("click", function() {
		
		$.getJSON(forismaticAPI, function(json) {
			
			var quote = "";
			var author = "";
			
			quote += json.quoteText;
			author += json.quoteAuthor;
			
			$(".the-quote").html(quote);
			$("#Tweet-Quote").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
			$(".the-author").html(author);
			
		});
	});	
});