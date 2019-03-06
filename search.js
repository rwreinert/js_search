'use strict';

class SearchBot {
	
	constructor(query, num, interval) {
		
		this.array = new Array();
		this.num = num;
		this.query = query.trim();
		this.interval = interval;
		
		alert("Query: " + this.query);
		alert("Number: " + this.num);
		alert("Interval: " + this.interval);
	}
	
	// Check the hash map for existing queries
	search() {
		//Example query
		//"https://www.bing.com/search?q=how+to+play+cricket+ball"
		var search_query; 
		
		if(this.array.length > 0) {
			search_query = this.array.pop();
			search_query.split(" ").join("+");
		} else {
			search_query = this.query;
		}
		
		
		var iframe = document.getElementById("browser");		
		alert(iframe.src);
		
		//iframe.src="https://www.bing.com/search?q=" + search_query
		//iframe.reload();
		
		
	}
	
	
}





