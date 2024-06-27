import React from 'react';
import { Card } from 'react-bootstrap';

const User = ({user}) =>{
    return (
        <Card className='mb-3'>
            <Card.Body>
                <Card.Title>
                    {user.name}
                </Card.Title>
                <Card.Text>
                    {user.email}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default User;