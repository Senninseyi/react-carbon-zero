import React, { useEffect } from 'react';
import './style.css';
import CarbonZeroWrapper from './CarbonZero';
import { gql } from '@apollo/client';
import { client } from './lib/client';

export default function App({ products }) {
  const items = [
    {
      drink: 'coke',
      type: 'bottle',
      size: 35,
    },
  ];

  //   const GET_PRICE = gql`
  // query NewQuery {
  //   products {
  //     nodes {
  //       ... on SimpleProduct {
  //         id
  //         name
  //         price(format: FORMATTED)
  //       }
  //     }
  //   }
  // }`;

  //   const getData = async () => {
  //     const res = await client.query({
  //       query: GET_PRICE,
  //     });
  //     console.log(res);
  //     const datas = res?.data?.products?.node;
  //     console.log(datas);
  //     return {
  //       props: {
  //         datas,
  //       },
  //     };
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

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
