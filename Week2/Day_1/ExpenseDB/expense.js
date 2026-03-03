let db;

// =========================
// CREATE TABLE (Object Store)
// =========================
let request = indexedDB.open("ExpenseDB", 1);

request.onupgradeneeded = function (event) {
    db = event.target.result;

    if (!db.objectStoreNames.contains("expenses")) {
        db.createObjectStore("expenses", {
            keyPath: "id",
            autoIncrement: true
        });
    }

    console.log("Database & Table Created");
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database Opened Successfully");
};

request.onerror = function () {
    console.log("Database Error");
};

// =========================
// INSERT (Add Expense)
// =========================
document.getElementById("add").addEventListener("click", function () {

    let title = document.getElementById("title").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("date").value;

    if (!title || !amount || !date) {
        alert("Please fill all fields");
        return;
    }

    let transaction = db.transaction("expenses", "readwrite");
    let store = transaction.objectStore("expenses");

    let expense = {
        title: title,
        amount: amount,
        date: date
    };

    store.add(expense);

    transaction.oncomplete = function () {
        alert("Expense Added Successfully");
    };

    transaction.onerror = function () {
        alert("Transaction Failed");
    };
});

// =========================
// SELECT (View Expenses)
// =========================
document.getElementById("view").addEventListener("click", function () {

    let transaction = db.transaction("expenses", "readonly");
    let store = transaction.objectStore("expenses");

    let request = store.getAll();

    request.onsuccess = function () {

        let expenses = request.result;
        let list = document.getElementById("expenseList");

        list.innerHTML = "";

        if (expenses.length === 0) {
            list.innerHTML = "<li>No Expenses Found</li>";
            return;
        }

        expenses.forEach(function (exp) {
            let li = document.createElement("li");
            li.textContent =
                "ID: " + exp.id +
                " | Title: " + exp.title +
                " | Amount: ₹" + exp.amount +
                " | Date: " + exp.date;

            list.appendChild(li);
        });
    };
});

// =========================
// DELETE (Delete by ID)
// =========================
document.getElementById("delete").addEventListener("click", function () {

    let id = Number(prompt("Enter Expense ID to delete:"));

    if (!id) {
        alert("Invalid ID");
        return;
    }

    let transaction = db.transaction("expenses", "readwrite");
    let store = transaction.objectStore("expenses");

    store.delete(id);

    transaction.oncomplete = function () {
        alert("Expense Deleted Successfully");
    };

    transaction.onerror = function () {
        alert("Delete Failed");
    };
});