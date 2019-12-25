import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Layout from './Layout';

const GET_USERS = gql`
{
  users{
    id
    name
    email
    phone
    delivery_address
  }
}
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const userData = data.users.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.delivery_address}</td>
      </tr>
    )
  })
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
                    {userData}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
     );
}

export default Users;