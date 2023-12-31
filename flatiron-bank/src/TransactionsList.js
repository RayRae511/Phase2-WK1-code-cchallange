import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, handleSortToggle, onDelete }) {
  return (
    <div>
      <button className="ui blue tiny inverted button" onClick={handleSortToggle}>
        Sort Category by Order
      </button>
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {/* render a list of <Transaction> components here */}
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              amount={transaction.amount}
              onDelete={() => onDelete(transaction.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;