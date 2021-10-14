import React, { Component } from 'react';
import { Button, Item, ItemContent } from 'semantic-ui-react'

class BasketItemView extends Component {
    render() {
        const {menu} = this.props;
        return (
            <Item>
                <Item.Image size='tiny' src={menu.imgUrl} />
                <ItemContent>
                    <Item.Header>{menu.name}</Item.Header>
                    <Item.Meta>{menu.price}</Item.Meta>
                    <Button floated='right'>
                        -
                    </Button>
                </ItemContent>
            </Item>
        );
    }
}

export default BasketItemView;