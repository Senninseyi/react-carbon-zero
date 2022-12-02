import React from 'react';
import './style.css';
import CarbonZeroWrapper from './CarbonZero';

export default function App() {
  const items = [
    {
      drink: 'coke',
      type: 'bottle',
      size: 35,
    },
  ];

  return (
    <div>
      <h1>Hello Carbon Zero!</h1>
      <CarbonZeroWrapper
        totalPrice="3000"
        purchaseRefId={2002}
        purchasedItems={items.push()}
      />
    </div>
  );
}
