import React, { Component } from 'react';

class FoodCart extends Component {

    increase() {
        var qty = this.props.qty + 1
        this.props.handleCartChange(qty)
    }

    decrease() {
        var qty = this.props.qty - 1
        this.props.handleCartChange(qty)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron py-3 mb-0">
                        <p className="display-4 text-center mb-0">
                            Food Cart
                        </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-3">
                        <button className="btn btn-primary" onClick={() => this.decrease()}>
                            <i className="fas fa-minus"></i>
                        </button>

                        <span className="lead mx-3">{this.props.qty}</span>

                        <button className="btn btn-primary" onClick={() => this.increase()}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodCart;