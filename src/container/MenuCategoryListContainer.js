import React, { Component } from 'react';
import { Item, Input, Menu, Segment } from 'semantic-ui-react';
import MenuStore from '../store/MenuStore';
import { observer } from 'mobx-react';
// import MenuItemView from '../view/MenuItemView';
import OrderItemView from '../components/OrderItemView';

class MenuCategoryListContainer extends Component {
    menustore = MenuStore;

    componentDidMount(){
        this.menustore.selectCategory('Coffee');
    }

    state = { activeItem: 'Coffee' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.menustore.selectCategory(name);
    }
    

    render() {
        const {menus} = this.menustore;
        const menuList = menus.map(menu => {
            return(
                // <MenuItemView key={menu.id} menu={menu} />
                <OrderItemView key={menu.id} menu={menu} />
            )
        })
        
        const { activeItem } = this.state


        return (
            <Item.Group>
                
                <div>
                    <Menu attached='top' tabular>
                    <Menu.Item
                        name='Coffee'
                        active={activeItem === 'Coffee'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Non-Coffee'
                        active={activeItem === 'Non-Coffee'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Beverage'
                        active={activeItem === 'Beverage'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Dessert'
                        active={activeItem === 'Dessert'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                        <Input
                            transparent
                            icon={{ name: 'search', link: true }}
                            placeholder='Search users...'
                        />
                        </Menu.Item>
                    </Menu.Menu>
                    </Menu>

                    <Segment attached='bottom'>
                        {menuList}
                    </Segment>
                </div>
            </Item.Group>

        );
    }
}

export default observer(MenuCategoryListContainer);