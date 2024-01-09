import React, { useState } from 'react';

const CustomerForm = ({ isOpen, onClose, onSend }) => {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [date, setDate] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSend = () => {
    if (name && product && date && mobile) {
      onSend({ name, product, date, mobile });
      onClose();
    }
  };

  return (
    <div className={`popup-panel ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h2>Enter Customer Details</h2>
        <form className='popup-form'>
            <ul>
                <li>
                    <input type="text" placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)} />
                </li>
                <li>
                    <select value={product} required onChange={(e) => setProduct(e.target.value)}>
                       <option value="" disabled selected>Product</option>
                        <option value="Basic">Basic</option>
                        <option value="Advance">Advance</option>
                        <option value="Both">Both</option>
                    </select>
                </li>
                <li>
                    <input type="date" value={date}  required onChange={(e) => setDate(e.target.value)} />
                </li>
                <li>
                    <input type="tel" pattern="[0-9]{1,4}-[0-9]{1,15}"  placeholder='Mobile' value={mobile} required onChange={(e) => setMobile(e.target.value)} />
                </li>
            </ul>
          <button className="main-button"  type="button" onClick={handleSend}>
            Submit
          </button>
          <button className="main-button" style={{ marginLeft: '30px' }} type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
