import React from 'react';
import ChildCard from "./ChildCard";

class ParentCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pText : '',
            cText : ''
        };
    }

    receiveData = (value) => {
        this.setState({
            ...this.state,
            cText : value
        });
    };

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header rgba-amber-light">
                                        <p className="h4">Parent Card</p>
                                        <small>{this.state.cText}</small>
                                    </div>
                                    <div className="card-body rgba-amber-light">
                                        <form className="form-inline">
                                            <div className="form-group">
                                                <input
                                                    value={this.state.pText}
                                                    onChange={e => this.setState({pText : e.target.value})}
                                                    type="text" className="form-control" placeholder="parent Text"/>
                                            </div>
                                        </form>
                                        <ChildCard pText={this.state.pText} sendData={this.receiveData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default ParentCard;
