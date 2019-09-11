import React, { Component } from 'react';

class Index extends Component {

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="offset-3"></div>
          <div className="col-lg-5 mt-5">
            <div className="card shadow">
              <p className="px-4 mt-3 text-center" >Sign in credentials</p>
              <div className="card-body text-center m-4">
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email Address"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}

export default Index;