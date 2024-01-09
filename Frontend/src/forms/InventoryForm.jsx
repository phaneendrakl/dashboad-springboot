import React, { useState } from 'react';

const InventoryForm = ({ isOpen, onClose, onSend }) => {
  const [product, setProduct] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = () => {
    // Validate the data if needed
    if (product && status) {
      onSend({product, status });
      onClose();
    }
  };

  return (
    <div className={`popup-panel ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h2>Enter Prduct Details</h2>
        <form className='popup-form'>
            <ul>
                <li>
                    <select value={product} required onChange={(e) => setProduct(e.target.value)}>
                       <option value="" disabled selected>Product</option>
                        <option value="Basic">Basic</option>
                        <option value="Advance">Advance</option>
                    </select>
                </li>
                <li>
                    <select value={status} required onChange={(e) => setStatus(e.target.value)}>
                       <option value="" disabled selected>Status</option>
                        <option value="Ready">Ready</option>
                        <option value="Assembling">Assembling</option>
                    </select>
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

export default InventoryForm;
