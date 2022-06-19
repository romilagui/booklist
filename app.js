// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI Constructor
function UI(){
}
// Create a prototype under the function 
// Add book to  list
UI.prototype.addBookToList = function(book){
  //console.log(book);
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML =`
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X<a></td>
`;
list.appendChild(row);
  //console.log(row);
}

// Clear Fields
// Is not working 
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  //console.log('test');
  // When we click submit we get test on thw console

  // Creating variables to get form values:
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  //console.log(title, author, isbn);

  // Instanciate the book constructor/object
  const book = new Book(title, author, isbn);
  //console.log(book);

  // Instantiate a UI Object
  const ui = new UI();
  // Add book to list
  //console.log(ui);
  ui.addBookToList(book);

// Clear fields 
ui.clearFields();

e.preventDefault();
});
