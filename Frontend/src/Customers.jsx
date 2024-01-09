import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CustomerForm from './forms/CustomerForm';



function Customers() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/get-customer') 
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
    const apiUrl = 'http://localhost:8080/api/send-customer';

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
    <main  className="details-container">
        <div className="sub-title">
            <p>CUSTOMER DETAILS</p>
            <button className="main-button" onClick={openPopup}>Add Customer</button>
            <CustomerForm isOpen={isPopupOpen} onClose={closePopup} onSend={sendDataToApi} />
        </div>
        

        <div>
            {jsonData && (
            <table>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Mobile</th>
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

export default Customers