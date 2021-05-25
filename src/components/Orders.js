import Filters from './Filters'
import OrderItem from './OrderItem';
import React, { Component } from 'react';
import '../views/orders.css'
import { Container, Grid } from '@material-ui/core';


const initalOrders = [{
    sender: 'Marko',
    price: 20,
    place: 'Podgorica'
},
{
    sender: 'Nikola',
    price: 40,
    place: 'Beograd'
}];

class Orders extends Component {
    constructor (props) {
        super(props);
        this.state = { orders: initalOrders};
    }

    getFilters = (prop) => {
        console.log(prop)

        prop.pageSize = 25
        prop.pageNumber = 1

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: prop
        };
        fetch('http://localhost:5000/orders/filter', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ orders: data }));
        
    }

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                pageSize: 25,
                pageNumber: 1
            }
        };
        
        this.getOrder(requestOptions);
    }

    getNextPage(pageNumber) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                pageSize: 25,
                pageNumber: pageNumber
            }
        };

        this.getOrder(requestOptions);
    }

    getOrder(options)
    {
        fetch('http://localhost:5000/orders/filter', options)
            .then(response => response.json())
            .then(data => this.setState({ orders: data }));
    }

    render () {
        const { orders } = this.state;
        return (
            <Container>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                >
                    <Filters sendFilters={this.getFilters}></Filters>
                   
                    {orders.map((el, i) => {                  
                        return (<OrderItem className='item' price={el.price} place={el.place} sender={el.sender} key={i}/>) 
                    })}
                </Grid>
            </Container>
        );
    }
}

export default Orders;
