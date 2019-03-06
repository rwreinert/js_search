'use strict';

class SearchBot {
	
	constructor(query, num, interval) {
		
		this.array = new Array(num);
		this.query = query;
		this.interval = interval;
	}
	
	// Check the hash map for existing queries
	search() {
		var search_query = this.array.pop();
		
		var iframe = document.getElementById("browser");		
		alert(iframe.src);
		
	}
	
	
}





