import React, { Component } from 'react';

class FoodCart extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron py-3 mb-0">
                        <p className="display-4 text-center mb-0">
                            Food Cart
                        </p>
                    </div>
                    <p className="lead m-3 text-center">Qty: {this.props.qty}</p>
                </div>
            </div>
        );
    }
}

export default FoodCart;