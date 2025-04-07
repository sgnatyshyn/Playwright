

//hometask10.1
function display(x: string): string;
function display(x: string, y: string): string;
function display(x: string[]): any;


function display(arg1: string | string[], arg2?: string): any {
    if (typeof arg1 === 'string' && typeof arg2 === 'undefined') {
               
         console.log(arg1);

    } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        
        console.log(arg1);
        console.log(arg2);
    } else if (Array.isArray(arg1)) {
        
        for (const msg of arg1) {
        console.log(msg);
        }
    
    }
}

// Приклади використання:
display("Hello, World!");		// Hello, World!

display("Hello", "World!");		// Hello
							  // World!

display(["Hello", "World", "!"]);	// Hello
  // World
   //!


//hometask10.2
   interface HasRating {
    rating: number;
  }
  
  function identity<T extends HasRating>(items: T[]): number {
    
    const sum = items
    .map(item => item.rating)
    .reduce((a, b) => a + b, 0);
    return sum / items.length;
  }
  
  console.log(identity([{name: "Anna", rating: 3}]))	// 3
  
  console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}]))		// 4
  
  