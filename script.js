// --- ASSIGNMENT:01 Shopping Cart System ---
function shoppingCart(){
    var menu = prompt("Select your product: \n1. Watch (Rs.25,000)\n2. Shoes (Rs.10,000)\n3. Cap (Rs.250)\n4. Bracelet (Rs.250) ");
    const quantity = prompt("Enter the quantity");
    
    var items = ["Watch","Shoes","Cap","Bracelet"];
    var cost = [25000, 10000, 250, 250];
    

    var totalAmount = (cost[menu-1] * quantity); 
    var tax = (totalAmount * 0.15); // tax = 15%
    
    var delivery;
    if(totalAmount >= 5000){
        delivery = 0;
    }
    else{
        delivery = 200;
    }

    var bill = totalAmount + tax + delivery;

    alert("Total Price (tax excluded): " + totalAmount + 
          "\nTax Applied (15%): " + tax + 
          "\nDelivery: " + (delivery === 0 ? "Free" : delivery) + 
          "\nTotal Amount: " + bill);
}


// --- ASSIGNMENT:02 Student Result System ---
function studentResult(){
    var marks = prompt("Enter student marks(0-100):");
    var grade;
    var scholarship;

// For Grade
    if(marks >= 100){
        grade = "A+";
    } else if(marks >= 85){
        grade = "A";
    } else if(marks >= 75){
        grade = "C";
    } else if(marks >=65){
        grade = "D";
    } else{
        grade = "Fail!"
    }

// For Scholarship
    if(marks>=85){
        scholarship = "Eligible";
    }else{
        scholarship = "Not Eligible";
    }

// For Result
alert("Result Summary" + "\nMarks:" + marks + "\nGrade:" + grade + "\nScholarship Status:" + scholarship)
}


// --- ASSIGNMENT:03 City Search System ---
function citySearch(){
    var cities = ["KARACHI","SHANGHAI","MUMBAI","MEXICO CITY","TOKYO","SEOUL","DHAKA","DELHI","JAKARTA","ISLAMABAD","QUETTA","NEWYORK","HOUSTON","CHICAGO","SAN DIEGO"];
    var input = prompt("Enter city name to search:");
    var search = input.toUpperCase();

    if(cities.includes(search)){
        alert("Yes! " + input + " is in our list.")
    }else{
        alert("Sorry! " + input + " was not found.")
    }
}


// --- ASSIGNMENT:04 Array Operations System ---
function arrayOperations() {
    // 1. Create an initial array
    var fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
    console.log("Starting Array: ", fruits);

    // 2. push: Add to the END
    fruits.push("Orange"); 
    
    // 3. unshift: Add to the START
    fruits.unshift("Mango");

    // 4. pop: Remove from the END
    fruits.pop();

    // 5. shift: Remove from the START
    fruits.shift();

    // 6. splice: Add/Remove at a specific position
    fruits.splice(1, 0, "Grapes");

    // 7. slice: Create a copy of a portion of the array
    var favoriteFruits = fruits.slice(0, 2);

    // Final result display
    alert("Full Array: " + fruits + "\nSliced Version: " + favoriteFruits);
}


// --- ASSIGNMENT:05 Product Search and Index System ---
function productSearch(){
    var products = ["LAPTOP", "MOBILE", "TABLET", "LAPTOP", "WATCH"];
    
    var query = prompt("Enter product to search (Laptop, Mobile, Tablet, Watch):").toUpperCase();
    
    var firstIndex = products.indexOf(query);
    
    var lastIndex = products.lastIndexOf(query);


    if (firstIndex !== -1) {
        alert("Product: " + query + 
              "\nFirst found at index: " + firstIndex + 
              "\nLast found at index: " + lastIndex);
    } else {
        alert("Product not found in our inventory.");
    }
}
