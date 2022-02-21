import React from 'react';

class ClientCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            price : '',
            gst : ''
        }
    }

    updateInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : Number(e.target.value)
        });
    };

    submitCalc = (e) => {
        e.preventDefault();
        let tax = this.state.price * this.state.gst / 100;
        let total = (this.state.price) + tax;
        this.props.sendTotal(total);
    };

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                        <p className="h4">Product Calc</p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitCalc}>
                            <div className="form-group">
                                <input
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.updateInput}
                                    type="number" className="form-control" placeholder="Product Price"/>
                            </div>
                            <div className="form-group">
                                <input
                                    name="gst"
                                    value={this.state.gst}
                                    onChange={this.updateInput}
                                    type="number" className="form-control" placeholder="GST"/>
                            </div>
                            <div>
                                <input type="submit" className="btn btn-secondary btn-sm" value="calculate Total"/>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ClientCard
