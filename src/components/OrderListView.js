import React, { Component } from 'react';
import { List, Table } from 'semantic-ui-react'

class OrderListView extends Component {
    render() {
        const {order} = this.props;
        return (
            <List>
                <List.Item as='a'>
                    <Table celled>
                        <Table.Header fullWidth={true}>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>TotalPrice</Table.HeaderCell>
                            <Table.HeaderCell>OrderDate</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{order.id}</Table.Cell>
                                <Table.Cell>{order.name}</Table.Cell>
                                <Table.Cell>{order.totalPrice}</Table.Cell>
                                <Table.Cell>{order.orderDate}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </List.Item>
            </List>
        );
    }
}

export default OrderListView;