import React, { useState } from 'react';
import './App.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function Toggle({ items }) {
  
  const [openToggle, setOpenToggle] = useState(null);

  const toggleAccordion = (index) => {
    setOpenToggle(openToggle === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: '20px',
              cursor: 'pointer',
            }}
            onClick={() => toggleAccordion(index)}>
          
            {item.title}
            {openToggle === index ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          
          {openToggle === index && (
            <div style={{ backgroundColor: '#e0e0e0', padding: '30px' }}>
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function App() {
  const items = [
    { title: 'What is Your return policy?', description: 'Our return policy allows returns within 30 days of purchase. Items must be unused and in their original packaging.' },
    { title: 'How do I track my order?', description: 'You can track your order by visiting our website and logging into your account. From there, you can view the status of your order.' },
    { title: 'Can I purchase items again?', description: '' },
  ];
  
  return (
    <div>
      <Toggle items={items} />
    </div>
  );
}

export default App;
