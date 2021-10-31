import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [tours, setTours] = useState([]);
    const [found, setFound] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://dreadful-eyeballs-21271.herokuapp.com/myOrders/${user?.email}`;
       
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    useEffect(() => {
        const url = `https://dreadful-eyeballs-21271.herokuapp.com/tours`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTours(data);
            })
    }, [])

    useEffect(() => {
        setLoading(true);
        const found = [];
        tours.forEach(tour => {
            myOrders.forEach(order => {
                if (order.order === tour._id) {
                    const newObj = tour;
                    newObj.orderId = order._id;
                    newObj.status = order.status;
                    newObj.date = order.date;
                    // console.log(newObj);
                    found.push(newObj)
                }
            })
        })
        setFound(found);
        setLoading(false);
    }, [tours, myOrders])

    const handleCancelOrder = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {
            const url = `https://dreadful-eyeballs-21271.herokuapp.com/deleteOrder/${id}`;
            
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('successfullly canceled !!?!!')
                        const reamainingServices = found.filter(service => service.orderId !== id)
                        setFound(reamainingServices);
                    }
                })
        }

    }

    return (
        <Container className='mt-5'>
            <Row lg={3} className="g-4">
                {
                    !loading ?
                        found.map(tour => <Order
                            key={tour._id}
                            tour={tour}
                            handleCancelOrder={handleCancelOrder}
                        ></Order>)
                        :
                        <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </Container>
    );
};

export default MyOrders;