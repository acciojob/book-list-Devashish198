//your JS code here. If required.
document.getElementById("submit").addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;

    if (title && author && isbn) {
        addElement(title, author, isbn);

        // Clear input fields
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("isbn").value = '';
    } else {
        alert("Please fill in all fields.");
    }
});

function addElement(title, author, isbn) {
    let tableBody = document.getElementById("book-list");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
    newRow.querySelector(".delete").addEventListener("click", () => {
        tableBody.removeChild(newRow);
    });
    tableBody.scrollTop = tableBody.scrollHeight; // Scroll to the bottom
}