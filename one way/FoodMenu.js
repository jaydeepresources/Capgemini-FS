import React, { Component } from 'react';
import FoodCart from './FoodCart';

class FoodMenu extends Component {

    constructor(){
        super()
        this.state = {
            qty: 1
        }
    }

    increase(){
        this.setState({
            qty: this.state.qty+1
        })
    }

    decrease(){
        this.setState({
            qty: this.state.qty-1
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron py-4 mb-0">
                        <p className="display-4 text-center mb-0">
                            Food Menu
                        </p>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center my-3">
                    <button className="btn btn-primary" onClick={()=>this.decrease()}>
                        <i className="fas fa-minus"></i>
                    </button>

                    <span className="lead mx-3">{this.state.qty}</span>

                    <button className="btn btn-primary" onClick={()=>this.increase()}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>

                <FoodCart qty={this.state.qty} />
            </div>
        );
    }
}

export default FoodMenu;