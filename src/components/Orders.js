import React, { Component } from 'react';
import Layout from './Layout';

class Orders extends Component {

  render() {
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
                      <th>ITEMS</th>
                      <th>STATUS</th>
                      <th>AMOUNT</th>
                      <th>DELIVERY ADDRESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Breakfast</td>
                      <td>A slice of happiness</td>
                      <td>Breakfast</td>
                      <td>A slice of happiness</td>
                      <td>Breakfast</td>
                      <td>A slice of happiness</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
     );
  }
}

export default Orders;