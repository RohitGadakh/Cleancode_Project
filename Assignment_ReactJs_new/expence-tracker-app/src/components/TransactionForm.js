import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() !== '' && amount !== '' && !isNaN(amount)) {
      addTransaction(text, parseFloat(amount));
      setText('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Description:</label>
      <input
        type="text"
        id="text"
        placeholder="Enter description..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="text"
        id="amount"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
