import React from 'react';

class ServerCard extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.total);
        return (
            <React.Fragment>
              <div className="card">
                  <div className="card-header bg-success text-white">
                      <p className="h4">Product Details</p>
                  </div>
                  <div className="card-body">
                    <p className="h3">&#8377; {this.props.total?.toFixed(2)}</p>
                  </div>
              </div>
            </React.Fragment>
        );
    }
}
export default ServerCard;
