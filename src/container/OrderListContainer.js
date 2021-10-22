import React, { Component } from 'react';
import MenuStore from '../store/MenuStore';
import { List } from 'semantic-ui-react'
import OrderListView from '../components/OrderListView';
import { observer } from 'mobx-react';

class OrderListContainer extends Component {
    menustore = MenuStore

    componentDidMount(){
        this.menustore.selectAllOrder();
    }

    render() {
        const {orders, selectOrder} = this.menustore
        const orderList = orders.map(order => {
            return <OrderListView key={order.id} order={order} onSelect={selectOrder} />
        })
        return (
            <List.Item>
                {orderList}
            </List.Item>
        );
    }
}

export default observer(OrderListContainer);