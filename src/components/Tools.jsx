import React from "react";

const Tools = () => {
  return (
    <div className="tools">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <h3 className="col-md-8">
            <div className="title-tools">
              <span className="garis-title-tools"></span> Tools
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h4>Tools 1</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h4>Tools 2</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h4>Tools 3</h4>
                  </div>
                </div>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tools;
