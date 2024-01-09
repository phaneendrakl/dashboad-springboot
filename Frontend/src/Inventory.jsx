import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InventoryForm from './forms/InventoryForm';

function Inventory() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/get-inventory')
      .then(response => setJsonData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const sendDataToApi = (data) => {
    const apiUrl = 'http://localhost:8080/api/send-inventory';

    axios.post(apiUrl, data)
      .then((response) => {
        console.log('API response:', response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error sending data to API:', error);
      })
      .finally(() => {
        closePopup();
      });
  };


  return (
    <main className="details-container">
      <div className="sub-title">
        <p>INVENTORY</p>
        <button className="main-button" onClick={openPopup}>Add Product</button>
        <InventoryForm isOpen={isPopupOpen} onClose={closePopup} onSend={sendDataToApi} />
      </div>

      <div>
        {jsonData && (
          <table>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Pruduct</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map(value => (
                    <td key={value}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </main>
  )
}

export default Inventory