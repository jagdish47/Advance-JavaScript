// Synchronous JavaScript: 

// As the name suggests synchronous means to be in a sequence, 
// i.e. every statement of the code gets executed one by one. So, 
// basically a statement has to wait for the earlier statement to get executed.

// console.log("1st this will execute");
// console.log("2nd this will execute");
// console.log("3rd this will execute");
// console.log("than this");
// console.log("than this");




// Asynchronous JavaScript: 

// Asynchronous code allows the program to be executed immediately 
// where the synchronous code will block further execution of the remaining code until it 
// finishes the current one. This may not look like a big problem but when you see it in a 
// bigger picture you realize that it may lead to delaying the User Interface.


console.log("Hi"); //1st this will run
  
  
    setTimeout(() => {
        console.log("Let us see what happens"); //it take 2 seconds and 3rd this will run
    }, 2000);
  
  
    console.log("End"); //2nd this will run will not wait for setTimeout() 
