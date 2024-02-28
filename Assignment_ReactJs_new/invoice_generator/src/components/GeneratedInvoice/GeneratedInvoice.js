
import React from 'react';
import './GeneratedInvoice.css';
const GeneratedInvoice = ({ invoice }) => {
  return (
    <div>
      <h2>Generated Invoice</h2>
      <p>Invoice Number: {invoice.invoiceNumber}</p>
      <p>Issue Date: {invoice.issueDate}</p>
      <p>Due Date: {invoice.dueDate}</p>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.quantity * item.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Subtotal: {invoice.subtotal}</p>
      <p>Taxes: {invoice.taxes}</p>
      <p>Grand Total: {invoice.grandTotal}</p>
    </div>
  );
};

export default GeneratedInvoice;
