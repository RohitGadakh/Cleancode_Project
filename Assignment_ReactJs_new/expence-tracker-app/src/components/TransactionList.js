// import React from 'react';

// function TransactionList({ transactions }) {
//   return (
//     <div>
//       <h3>Transaction History</h3>
//       <ul>
//         {transactions.map(transaction => (
//           <li key={transaction.id}>
//             {transaction.text} <span>${transaction.amount.toFixed(2)}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TransactionList;


import React from 'react';

function TransactionList({ transactions, removeTransaction }) {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.text} <span>Rs{transaction.amount.toFixed(2)}</span>
            <button onClick={() => removeTransaction(transaction.id)}>Remove</button>
          </li>
        ))} 
      </ul>
    </div>
  );
}

export default TransactionList;
