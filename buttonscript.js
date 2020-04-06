// When user clicks the finished button, they are asked to leave a review

function userFinishedBook() {
  let userReview = prompt("Congratulations on finishing (book title). \n Would you like to leave a review?");
  if (userReview == null || userReview == "") {
    userReview = "Book archived only";
  } else { 
    userReview = "Book reviewed and archived"
  }
}

// When user clicks the delete button they are asked to confirm or cancel this choice
function userDeleteBook() {
  if(confirm("Are you sure you want to delete this book?") == true){
    userDeleteBook = "Book deleted";
  } else {
    userDeleteBook = "Delete cancelled";
  } 
}  

