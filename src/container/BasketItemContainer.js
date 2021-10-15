import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import BasketItemView from '../components/BasketItemView';
import MenuStore from '../store/MenuStore';
import { observer } from 'mobx-react';

class BasketItemContainer extends Component {
    menustore = MenuStore;

    render() {
        const {myMenu} = this.menustore;

        const myMenuList = myMenu.map(menu => {
            return <BasketItemView key={menu.id} menu={menu} />       
        });
        
        return (
            <Item.Group>
                {myMenuList}
            </Item.Group>
        );
    }
}

export default observer(BasketItemContainer);