import React, { useState, useEffect } from 'react';

function CarbonZeroWrapper({ totalPrice, purchaseRefId, purchasedItems }) {
  const [showZero, setShowZero] = useState(false);

  const openZero = () => {
    setShowZero(true);
  };
  const closeZero = () => {
    return setShowZero(false);
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
          merchant-id="3p853x"
          api-key="live_pk_8nElb5tokJjGzJR3osUGY2W44Xk4bm"
          country="NG"
          total-price={totalPrice}
          purchase-ref-id={purchaseRefId}
          purchase-items={purchasedItems}
        ></carbon-zero>
      )}
      <button onClick={openZero}>Pay With Carbon Zero</button>
    </div>
  );
}

export default CarbonZeroWrapper;
