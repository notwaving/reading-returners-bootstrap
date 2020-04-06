// When user clicks the finished button, they are asked to leave a review, using a prompt box

userFinishedBook = () => prompt("Congratulations on finishing {book title}.\nWould you like to leave a review?") ? 
userFinishedBook == null || userFinishedBook == "" (userFinishedBook = "Book archived only")  : 
userFinishedBook = "Book reviewed and archived";


// When user clicks the delete button they are asked to confirm or cancel this choice, using a confirm box
userDeleteBook = () => confirm("Are you sure you want to delete this book?") ? userDeleteBook = "Book deleted" : userDeleteBook = "Delete cancelled";

// When user clicks the review button, they're shown their review via an alert box
userBookReview = () => alert("{Displays user submitted book review from database}");