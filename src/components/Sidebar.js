import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <div className="col-lg-12">
        <img src="" width="100%" alt=""/>
      </div>
      <div className="list-group border-0 mt-5">
        <Link to="/category" className="list-group-item">
          Category
        </Link>
        <Link to="/food" className="list-group-item">
          Food
        </Link>
        <Link to="/orders" className="list-group-item">
          Orders
        </Link>
        <Link to="/users" className="list-group-item">
          Users
        </Link>
      </div>
    </div>
  )
}

export default Sidebar;