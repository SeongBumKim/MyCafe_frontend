import React, { Component } from 'react';
import MenuStore from '../store/MenuStore';

class OrderListContainer extends Component {
    menustore = MenuStore

    componentDidMount(){
        this.menustore.selectAllOrder();
    }

    render() {
        const {orders} = this.menustore
        
        return (
            <div>
                <h1>OrderPage</h1>
            </div>
        );
    }
}

export default OrderListContainer;