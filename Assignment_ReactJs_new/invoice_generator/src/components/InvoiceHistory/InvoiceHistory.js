
import React, { useState } from 'react';

const InvoiceHistory = () => {
  const [invoices, setInvoices] = useState([]);

  return (
    <div>
      <h2>Invoice History</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.invoiceNumber} - {invoice.issueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceHistory;
