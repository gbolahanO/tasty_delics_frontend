import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Layout from './Layout';

const GET_FOODS = gql`
{
  foods{
    id
    title
    description
    category{
      title
      description
    }
  }
}
`;

const Food = () => {
  const { loading, error, data } = useQuery(GET_FOODS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const da = data.map(({ title, description }) => {
    return (
      <tr>
        <td>{title}</td>
        <td>{description}</td>
      </tr>
    )
  })

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
                      <th>Title</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {da}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
     );
}

export default Food;