
import React, { useState } from 'react';

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientSelect = (client) => {
    setSelectedClient(client);
  };

  return (
    <div>
      <h2>Client Management</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id} onClick={() => handleClientSelect(client)}>
            {client.name}
          </li>
        ))}
      </ul>

      {selectedClient && (
        <div>
          <h3>Selected Client: {selectedClient.name}</h3>
          {/* Display client details and use them in the invoice form */}
        </div>
      )}
    </div>
  );
};

export default ClientManagement;
