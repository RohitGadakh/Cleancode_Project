
import React, { useState } from 'react';
import Authentication from './components/Authentication/Authentication';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import ClientManagement from './components/ClientManagement/ClientManagement';
import InvoiceHistory from './components/InvoiceHistory/InvoiceHistory';
import GeneratedInvoice from './components/GeneratedInvoice/GeneratedInvoice';

const App = () => {
  const [user, setUser] = useState(null);
  const [generatedInvoice, setGeneratedInvoice] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleGenerateInvoice = (invoice) => {
    setGeneratedInvoice(invoice);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.fullName}!</h1>

          {generatedInvoice ? (
            <GeneratedInvoice invoice={generatedInvoice} />
          ) : (
            <div>
              {/* Render other components here after successful login */}
              <InvoiceForm onGenerateInvoice={handleGenerateInvoice} />
              <ClientManagement />
              <InvoiceHistory />
            </div>
          )}
        </div>
      ) : (
        <Authentication onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
