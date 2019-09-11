import React, { Component } from 'react';
import Layout from './Layout';

class Food extends Component {

  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <div className="card shadow">
              <div className="card-header">
                Add Food
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="form-control" placeholder="e.g Breakfast"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <textarea type="text" id="title" className="form-control" placeholder="e.g All happiness depends on leisurely breakfast."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Food Image</label>
                    <input type="file" id="image" className="form-control"/>
                  </div>
                  <div className="form-group float-right">
                    <button className="btn btn-primary">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card shadow mt-5">
              <div className="card-header">
                Foods
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

export default Food;