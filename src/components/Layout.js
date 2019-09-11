import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const style = {
    height: '100vh',
  };
  return (
    <div className="container m-0 mb-5">
      <div className="row">
        <div style={style} className="col-lg-3 shadow px-0">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          {children}
        </div>
      </div>
    </div>
   );
}

export default Layout;