import React, { Component } from 'react';
import { Button, Item, ItemContent } from 'semantic-ui-react'
import MenuStore from '../store/MenuStore';
import { observer } from 'mobx-react';

class BasketItemView extends Component {
    menuStore = MenuStore;

    render() {
        const {menu} = this.props;
        const {unselectMenu} = this.menuStore
        return (
            <Item>
                <Item.Image size='tiny' src={menu.imgUrl} />
                <ItemContent>
                    <Item.Header>{menu.name}</Item.Header>
                    <Item.Meta>{menu.price} 원</Item.Meta>
                    <Button floated='right'
                    key={menu.id} 
                    menu = {menu}
                    onClick={()=>unselectMenu(menu.id)}>
                        -
                    </Button>
                </ItemContent>
            </Item>
        );
    }
}

export default observer(BasketItemView);