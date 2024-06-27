
import React, { useEffect, useState } from 'react';
import { fetchUser } from '../api/api';
import User from '../api/User';
import { Container, Row, Col } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await fetchUser();
      setUsers(usersData);
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-bold align-content-center text-white py-2 rounded"
          style={{height: '10rem', backgroundColor:'#170649'}}>
      Users</h2>
      <Row>
        {users.map((user) => (
          <Col key={user.id} xs={12} md={6} lg={4}>
            <User user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
