import React, { useState, useEffect } from 'react';
import axios from 'axios';
import
{ BsFillArchiveFill, BsListCheck, BsPeopleFill} from 'react-icons/bs'
 import 
 { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

  const [basicCount, setBasicCount] = useState(null);
  const [advanceCount, setAdvanceCount] = useState(null);
  const [readyCount, setReadyCount] = useState(null);
  const [assemblingCount, setAssemblingCount] = useState(null);
  const [customerCount, setCustomerCount] = useState(null);
  const [productsByYear, setProductsByYear] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/countBasic') 
      .then(response => {
        const data = response.data;
        setBasicCount(data);
      })
      .catch(error => console.error('Error fetching data:', error));

      axios.get('http://localhost:8080/api/countAdvance') 
      .then(response => {
        const data = response.data;
        setAdvanceCount(data);
      })
      .catch(error => console.error('Error fetching data:', error));

      axios.get('http://localhost:8080/api/countReady') 
      .then(response => {
        const data = response.data;
        setReadyCount(data);
      })
      .catch(error => console.error('Error fetching data:', error));

      axios.get('http://localhost:8080/api/countAssembling') 
      .then(response => {
        const data = response.data;
        setAssemblingCount(data);
      })
      .catch(error => console.error('Error fetching data:', error));

      axios.get('http://localhost:8080/api/countCustomers') 
      .then(response => {
        const data = response.data;
        setCustomerCount(data);
      })
      .catch(error => console.error('Error fetching data:', error));

      axios.get('http://localhost:8080/api/yearlySold')
      .then(response => {
        const data = response.data;
         const sortedData = data.sort((a, b) => a[0] - b[0]);
        setProductsByYear(data);
      })
      .catch(error => console.error('Error fetching data:', error));

  }, []);

  return (
    <main className="main-container">
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h3>Basic: {basicCount !== null ? basicCount : '...'}
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 Advance: {advanceCount !== null ? advanceCount : '...'}</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h3> {customerCount !== null ? customerCount : '...'}</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>INVENTORY</h3>
                    <BsListCheck className='card_icon'/>
                </div>
                <h3>Ready: {readyCount !== null ? readyCount : '...'}
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 Assembling: {assemblingCount !== null ? assemblingCount : '...'}</h3>
            </div>
        </div>

        <div className='charts'>
            <h2>Products Sold</h2>
            <ResponsiveContainer width={900} height={300}>
              <LineChart
                data={productsByYear}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis  dataKey={entry => entry[0]} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={entry => entry[1]} stroke="#f07ff0" strokeWidth={4}   activeDot={{ r: 8 }} name="Year"/>
              </LineChart>
            </ResponsiveContainer>
        </div>    
    </main>
  )
}

export default Home