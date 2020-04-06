function myFunction() { 
  alert("I am an alert box!"); 
};

function userPreference() {
  if(confirm("Are you sure you want to delete this book?") == true){
    userPreference = "Book deleted";
  } else {
    userPreference = "Delete cancelled"
  }
}  
