
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import TransactionForm from './components/TransactionForm';
// import TransactionList from './components/TransactionList';

// function App() {
//   const [transactions, setTransactions] = useState([]);

//   const addTransaction = (text, amount) => {
//     setTransactions([...transactions, { id: Date.now(), text, amount }]);
//   };

//   const calculateTotalExpenses = () => {
//     return transactions.reduce((total, transaction) => {
//       return transaction.amount > 0 ? total + Math.abs(transaction.amount) : total;
//     }, 0);
//   };

//   const [totalExpenses, setTotalExpenses] = useState(0);

//   useEffect(() => {
//     // Update total expenses when transactions change
//     setTotalExpenses(calculateTotalExpenses());
//   }, [transactions]);

//   return (
//     <div className="App">
//       <h1>Simple Expense Tracker</h1>
//       <TransactionForm addTransaction={addTransaction} />
//       <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
//       <TransactionList transactions={transactions} />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (text, amount) => {
    setTransactions([...transactions, { id: Date.now(), text, amount }]);
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const calculateTotalExpenses = () => {
    return transactions.reduce((total, transaction) => {
      return transaction.amount > 0 ? total + Math.abs(transaction.amount) : total;
    }, 0);
  };

  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    // Update total expenses when transactions change
    setTotalExpenses(calculateTotalExpenses());
  }, [transactions]);

  return (
    <div className="App">
      <h1>Simple Expense Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <h3>Total Expenses: Rs {totalExpenses.toFixed(2)}</h3>
      <TransactionList transactions={transactions} removeTransaction={removeTransaction} />
    </div> 
  );
}

export default App;


