import React, { Component } from 'react';
import { Button, Item, ItemContent } from 'semantic-ui-react'
import MenuStore from '../store/MenuStore';
import { observer } from 'mobx-react';

class OrderItemView extends Component {
    menuStore = MenuStore;

    render() {
        const {menu} = this.props;
        const {selectMenu} = this.menuStore

        return (
            <Item>
                <Item.Image size='tiny' src={menu.imgUrl} />
                <Button floated='right'
                key={menu.id} 
                menu = {menu}
                onClick={()=>selectMenu(menu.id)}>
                    +
                </Button>    
                <ItemContent>
                    <Item.Header>{menu.name}</Item.Header>
                    <Item.Meta>{menu.price} 원</Item.Meta>  
                </ItemContent>                
            </Item>
        );
    } 
}

export default observer(OrderItemView);
