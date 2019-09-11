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
                Users
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PHONE</th>
                      <th>ADDRESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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