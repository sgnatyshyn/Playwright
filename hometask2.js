

// hometask 2.1
function processData(num1 = 0, num2 = 0, action = "sum") { 
    switch (action) {
        case "sum":
            return num1 + num2;
        case "product":
            return num1 * num2;
        case "square":
            return num1 ** num2;
        }
    }

    console.log(processData(-10, 20, "product"));


// hometask 2.2 - 1st variant
    const array = [1, 2, 3, 4, "Alex", 10, "Nick"];

    function findElem(array, el) {
        if (array.indexOf(el) >= 0) {
            return "true";
        } else {return "false";
        };
    }
    
    console.log(findElem(array, 1));		// true
    console.log(findElem(array, "Alex"));	// true
    console.log(findElem(array, -1));       //false
    
    // hometask 2.2 - 2nd variant
    const array = [1, 2, 3, 4, "Alex", 10, "Nick"];

    function findElem(array, el) {
        if (array.includes(el)) {
            return "true";
        } else {return "false";
        };
    }
    
    console.log(findElem(array, 1));		// true
    console.log(findElem(array, "Alex"));		// true
    console.log(findElem(array, -1)); 


     // hometask 2.3
    const array = [3, 12, 16, 19, 21, 33, 19];
    function deleteItem(array, item) {
        let i;
        while ((i = array.indexOf(item)) >= 0) {
            array.splice(i, 1);}
            return array;
        };
    
    deleteItem(array, 19);
    console.log(array);

// hometask 2.4
function getCircleLength(r) {
    if (r <= 0 || typeof r !== "number") {
       throw new Error("Incorrect radius - please, enter a positive numeric value!");
    }
    return 2 * Math.PI * r; 
 }
 
 try {
    let result = getCircleLength("rw");
    console.log(result);
 } catch (exception) {
    console.log(exception.name);    
    console.log(exception.message); 
    console.log(exception.stack);  
 }
 
//hometask 2.5
function checkID() {
    let Id = prompt ("Please enter your Id in range 1 - 1000", "");
    if (Id.trim() === "") {
        throw new Error("The field is empty! Please enter your ID");    
 } else if (isNaN(+Id)) {
    throw new Error("Please enter numeric value");
 } else if (+Id <= 0 || +Id > 1000) {
    throw new Error("Your Id is out of range, please enter valid Id");
 } else {
    console.log("Your Id is valid!")
 };
}
try {
    checkID();
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}