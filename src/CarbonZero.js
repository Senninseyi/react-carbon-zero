import React, { useState, useEffect } from 'react';

function CarbonZeroWrapper({ totalPrice, purchaseRefId, purchasedItems }) {
  const [showZero, setShowZero] = useState(false);

  const openZero = () => {
    setShowZero(!showZero);
  };
  const closeZero = () => {
    return setShowZero(showZero);
  };
  useEffect(() => {
    if (showZero) {
      const zero = document.querySelector('.carbon-zero');
      zero.addEventListener('close-carbon-zero', () => {
        closeZero();
      });
    }
  }, [showZero]);
  return (
    <div className="wrrapper">
      {showZero && (
        <carbon-zero
          class="carbon-zero"
          merchant-id={process.env.REACT_APP_CARBON_ZERO_MERCHANT_ID}
          api-key={process.env.REACT_APP_CARBON_ZERO_API_KEY}
          country="NG"
          total-price={totalPrice}
          purchase-ref-id={purchaseRefId}
          purchase-items={purchasedItems}
        ></carbon-zero>
      )}
      <button onClick={() => openZero()}>Pay With Carbon Zero</button>
    </div>
  );
}

export default CarbonZeroWrapper;
