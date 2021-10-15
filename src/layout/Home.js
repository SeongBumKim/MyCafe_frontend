import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react'
import BasketItemContainer from '../container/BasketItemContainer';
import GiftInputContainer from '../container/GiftInputContainer';
import MenuListContainer from '../container/MenuListContainer';
import PriceContainer from '../container/PriceContainer';

function Home() {
    return (
    <Segment>
        <Grid columns={2} relaxed='very'>
        <Grid.Column>
            <h1>메뉴화면</h1>
            <MenuListContainer />
        </Grid.Column>
        <Grid.Column>
            <h1>주문화면</h1>
            <GiftInputContainer/>
            <BasketItemContainer />
            <PriceContainer />
        </Grid.Column>
        </Grid>
        <Divider vertical></Divider>
    </Segment>
    );
}

export default Home;
