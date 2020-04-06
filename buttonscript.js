// When user clicks the finished button, they are asked to leave a review, using a prompt box

function userFinishedBook() {
  let userFinishedBook = prompt("Congratulations on finishing {book title}. \n Would you like to leave a review?");
  if (userFinishedBook == null || userFinishedBook == "") {
    userFinishedBook = "Book archived only";
  } else { 
    userFinishedBook = "Book reviewed and archived"
  }
}

// When user clicks the delete button they are asked to confirm or cancel this choice, using a confirm box
function userDeleteBook() {
  if(confirm("Are you sure you want to delete this book?") == true){
    userDeleteBook = "Book deleted";
  } else {
    userDeleteBook = "Delete cancelled";
  } 
}  

// When user clicks the review button, they're shown their review via an alert box
function userBookReview() {
  alert("{Displays user submitted book review from database}");
}