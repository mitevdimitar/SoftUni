function solve(rectangles) {
	let rectanglesList = [];
	class Rectangle {
		constructor(width, height) {
			this.width = width;
			this.height = height;
		}
		area() {
			return this.width * this.height
		}
		compareTo(other) {
			 return other.area() - this.area() || other.width - this.width;
		}
	}
	for (let rectangle of rectangles) {
		let [width, height] = rectangle;
		let currentRect = new Rectangle(width, height);
		rectanglesList.push(currentRect);
	}
	let sorted = rectanglesList.sort((a, b) => {
		if ( a.area() < b.area() ){
   			 return 1;
 		 } else if ( a.area() > b.area() ){
   			 return -1;
		  } else {
 		 	if ( a.width < b.width ){
   				 return 1;
 			 } else if ( a.width > b.width ){
   				 return -1;
			  } else {
 				 return 0;
			}
		}
	})
	
	return sorted;
}
