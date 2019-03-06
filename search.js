'use strict';

class SearchBot {
	
	constructor(query, num, interval) {
		
		this.array = new Array();
		this.num = num;
		this.query = query.trim();
		this.interval = interval;
		
		alert("Query: " + this.query);		
	}
	
	// Check the hash map for existing queries
	search() {
		//Example query
		//"https://www.bing.com/search?q=how+to+play+cricket+ball"
		var search_query; 
		var page_html;
		var start_index, end_index;
		
		if(this.array.length > 0) {
			search_query = this.array.pop().split(" ").join("+");
		} else {
			search_query = this.query.split(" ").join("+");;
		}
		
		alert("New query: " + search_query);
		
		var iframe = document.getElementById("browser");		
		iframe.src="https://www.bing.com/search?q=" + search_query
		alert(iframe.src);
		
		// Scrape the page for related searches
		if(this.array.length < this.num) {
			//this.scrape_page(iframe);
			page_html = iframe.contentWindow.document.body.innerHTML;
			start_index = page_html.indexOf("Related searches");
			end_index = page_html.indexOf("Pagination");
			
			page_html = page_html.substr(start_index,end_index);
			
			alert("Scraper: "+page_html);
			
		}
		
		
		
	}
	scrape_page(frame_window) {
	
		page_html = frame_window.contentWindow.document.body.innerHTML;
	}
	
	
}





