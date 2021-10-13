import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react'

function Home() {
    return (
        <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <h1>메뉴화면</h1>
      </Grid.Column>
      <Grid.Column>
        <h1>주문화면</h1>
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
    );
}

export default Home;
