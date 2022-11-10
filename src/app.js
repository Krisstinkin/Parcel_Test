console.log("Привет, мир!")

function updateInput(book) {
    document.getElementById("bookNameUpdate").value = book.title
    document.getElementById("bookAuthorUpdate").value = book.authors
    document.getElementById("bookYearUpdate").value = book.year
    document.getElementById("bookImageUpdate").value = book.image
}
