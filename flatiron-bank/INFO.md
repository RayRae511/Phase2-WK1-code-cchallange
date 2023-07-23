PHASE 2 WEEK 1 CODE CHALLANGE

# Bank of Flatiron

This is the Bank of Flatiron app, a JavaScript/React application that fetches data from an API and dynamically manipulates the DOM to displays in the transactions data and allow the user to add and/or delete transactions.


## Description

The Bank of Flatiron app fetches data from an API and dynamically manipulates the DOM to display a collection of transactions data. It showcases how to use JavaScript and React to interact with APIs and dynamically create HTML elements.

To add a new transaction to the app, you simply put in the details of the transaction i.e the date, amount, description and category of the transaction. If you did make a mistake or just didn't want to put in the details of the transaction, you can simply delete it but a click of a button!

## Usage

1. Clone the repository:

`https://github.com/RayRae511/Phase2-WK1-code-cchallange`

2. Navigate to the project folder

`cd Phase2-WK1-code-cchallange `

3. Install json-server tool with the command

`npm install -g json-server`


 4. Run db.json file using the command
 `json-server --watch db.json`

 5.Open the index.html file on the server and access the index.html file using this URL

 ` http://localhost:3000/transactions`


6. The application will send a GET request to the API endpoint to fetch the transactions data.

7. Once the data is fetched, the app will create HTML elements to display the transactions data on the page.

8. If you want to delete the transaction, the application will send a DELETE request to the API endpoint which will make the transaction data to be deleted.
