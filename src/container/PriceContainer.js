import React, { Component } from 'react';
import { Statistic, Message, Button } from 'semantic-ui-react'
import { observer } from 'mobx-react';
import MenuStore from '../store/MenuStore';

class PriceContainer extends Component {
    menuStore = MenuStore;

    componentDidMount(){
        this.menuStore.selectAll();
    }

    render() {
        // const{order, orderAdd} = this.menuStore;
        let {myMenu, orderAdd} = this.menuStore;
        var productPrice = 0;
        var giftCouponPrice = 0;    

        for(let i = 0; i < myMenu.length; i++){
            productPrice += parseInt(myMenu[i].price, 10);
        }
        const totalPrice = productPrice - giftCouponPrice;
       
        // this.order.name = myMenu[0].name + '외' + myMenu.length + '건';
        // this.order.totalPrice = totalPrice;
        // this.order.orderDate = Date.now();
        
        
        return (
            <Message>
                <Statistic.Group horizontal>
                    <Statistic>
                        <Statistic.Value>{productPrice}</Statistic.Value>
                        <Statistic.Label> + Product</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{giftCouponPrice}</Statistic.Value>
                        <Statistic.Label> - GiftCoupon</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{totalPrice}</Statistic.Value>
                        <Statistic.Label> = Total </Statistic.Label>
                    </Statistic>
                </Statistic.Group>
                <Button basic color='blue'
                        onClick = {()=>orderAdd(totalPrice)}> 주문하기 </Button> 
            </Message>
        );
    }
}

export default observer(PriceContainer);