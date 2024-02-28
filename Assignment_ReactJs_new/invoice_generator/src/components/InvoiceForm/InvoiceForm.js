
import React, { useState } from 'react';

const InvoiceForm = ({ onGenerateInvoice }) => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '',
    issueDate: '',
    dueDate: '',
    items: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const handleAddItem = () => {
    const newItem = {
      description: '',
      quantity: 0,
      unitPrice: 0,
    };
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, newItem],
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = value;
    setInvoiceData({
      ...invoiceData,
      items: updatedItems,
    });
  };

  const handleGenerateInvoice = () => {
    // Calculate subtotal, taxes, and grand total
    const subtotal = invoiceData.items.reduce(
      (total, item) => total + item.quantity * item.unitPrice,
      0
    );
    const taxes = subtotal * 0.1; // Assuming a 10% tax rate
    const grandTotal = subtotal + taxes;

    const generatedInvoice = {
      ...invoiceData,
      subtotal,
      taxes,
      grandTotal,
    };

    onGenerateInvoice(generatedInvoice);
  };

  return (
    <div>
      <h2>Generate Invoice</h2>
      <form>
        <label>Invoice Number:</label>
        <input
          type="text"
          name="invoiceNumber"
          value={invoiceData.invoiceNumber}
          onChange={handleInputChange}
        />

        <label>Issue Date:</label>
        <input
          type="text"
          name="issueDate"
          value={invoiceData.issueDate}
          onChange={handleInputChange}
        />

        <label>Due Date:</label>
        <input
          type="text"
          name="dueDate"
          value={invoiceData.dueDate}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>

        {invoiceData.items.map((item, index) => (
          <div key={index}>
            <label>Description:</label>
            <input
              type="text"
              value={item.description}
              onChange={(e) => handleItemChange(index, 'description', e.target.value)}
            />

            <label>Quantity:</label>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
            />

            <label>Unit Price:</label>
            <input
              type="number"
              value={item.unitPrice}
              onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value))}
            />
          </div>
        ))}

        <button type="button" onClick={handleGenerateInvoice}>
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
