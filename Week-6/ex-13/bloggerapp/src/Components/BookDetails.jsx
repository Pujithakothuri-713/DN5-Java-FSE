import { books } from "../data";

function BookDetails() {

  const bookList = (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1>Book Details</h1>
      {bookList}
    </div>
  );
}

export default BookDetails;