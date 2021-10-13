import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import OrderItemView from '../components/OrderItemView';
import MenuStore from '../store/MenuStore';
import { observer } from 'mobx-react';


class MenuListContainer extends Component {
    menustore = MenuStore;

    componentDidMount(){
        this.menustore.selectAll();
    }

    render() {
        const {menus} = this.menustore;
        const menuList = menus.map(menu => {
            return(
                <OrderItemView key={menu.id} menu={menu} />
            )
        })

        return (
            <Item.Group>
                {menuList}
            </Item.Group>
        );
    }
}

export default observer(MenuListContainer);