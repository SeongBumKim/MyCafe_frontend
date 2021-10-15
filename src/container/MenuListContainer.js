import React, { Component } from 'react';
import { Item, Input, Menu, Segment } from 'semantic-ui-react';
import OrderItemView from '../components/OrderItemView';
import MenuStore from '../store/MenuStore';
import { observer } from 'mobx-react';
// import MenuItemView from '../components/MenuItemView';


class MenuListContainer extends Component {
    menustore = MenuStore;

    componentDidMount(){
        this.menustore.selectAll();
    }

    state = { activeItem: 'Coffee' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const {menus} = this.menustore;
        const menuList = menus.map(menu => {
            return(
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
                        name='Desert'
                        active={activeItem === 'Desert'}
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
                    {/* <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' alt="profile"/> */}
                        {menuList}
                    </Segment>
                </div>
            </Item.Group>

        );
    }
}

export default observer(MenuListContainer);