import React, { Component } from 'react';
import { Item, ItemContent } from 'semantic-ui-react';

class MenuItemView extends Component {
  render() {
    const {menu} = this.props;
    return (
        <Item>
            <Item.Image src={menu.imgUrl} />
                <ItemContent>
                    <Item.Header>{menu.name}</Item.Header>
                    <Item.Meta>{menu.price}</Item.Meta>   
                </ItemContent>
        </Item>
    );
}
}

export default MenuItemView;