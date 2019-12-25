import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Layout from './Layout';

const GET_ORDERS = gql`
{
  orders {
    id
    orderId
    user{
      name
    }
    food{
      title
    }
    order_status
    order_amount
    delivery_address
  }
}
`;

const Orders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :((</p>;

  const ordersData = data.orders.map((order) => {
    return (
      <tr key={order.id}>
        <td>{order.orderId}</td>
        <td>{order.food.title}</td>
        <td>{order.order_status}</td>
        <td>{order.order_amount}</td>
        <td>{order.delivery_address}</td>
      </tr>
    )
  })

    return (
      <Layout>
        <div className="row">
         <div className="col-lg-12 mt-5">
            <div className="card shadow mt-5">
              <div className="card-header">
                Orders
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ORDERID</th>
                      <th>NAME</th>
                      <th>STATUS</th>
                      <th>AMOUNT</th>
                      <th>DELIVERY ADDRESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
     );

}

export default Orders;