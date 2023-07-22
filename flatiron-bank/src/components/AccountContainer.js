import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [formdata, setFormdata] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });
  const url = "http://localhost:3000/transactions";

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortToggle = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedTransactions = [...transactions].sort((a, b) => {
      const sortFieldA = a.category.toLowerCase();
      const sortFieldB = b.category.toLowerCase();
      return newSortOrder === "asc"
        ? sortFieldA.localeCompare(sortFieldB)
        : sortFieldB.localeCompare(sortFieldA);
    });
    setTransactions(sortedTransactions);
  };

  //Handling  the search input
  const handleSearch = (searchValue) => {
    console.log("I searched for...");
    setSearch(searchValue);

    //fetch the transactions to make  the search dynamic
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        //filtering the transaction description by the search input value
        const filteredTransactions = data.filter((transaction) =>
          transaction.description
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
        setTransactions(filteredTransactions);
      })
      .catch((error) => {
        console.log("Error fetching transactions:", error);
      });
  };

  // Fetching the data from server
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.log("Error fetching transactions:", error);
      });
  }, []);

  // Handling the changes on the inputs
  function handleChange(event) {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  }

  // Posting the data to the server
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("POST request successful:", data);
        setTransactions([...transactions, data]);
        setFormdata({
          date: "",
          description: "",
          category: "",
          amount: 0,
        });
      })
      .catch((error) => {
        console.log("Error making POST request:", error);
      });
      event.target.reset();
  };

  // Deleting a transaction
  const handleDelete = (id) => {
    fetch(`${url}/${id}`, {
       method: "DELETE" })
       .then((response) => response.json())
       .then((data) => {
        console.log("DELETE request successful:", data);
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  });
}

  return (
    <div>
      <Search handleSearch={handleSearch} search={search} />
      <AddTransactionForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <TransactionsList
        transactions={transactions}
        handleSortToggle={handleSortToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default AccountContainer;
