import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeExercises } from '../../FakeData/MyExercise';
import Exercises from '../../Pages/MyRecord/Exercises/Exercises';

const MyExercise = () => {
    return (
        <section className="my-exercise-wrapper">
            <Container className="container-custom my-exercise-wrapper-bg">
                <Row>
                    <Col sm={12} className="text-start">
                        <div className="box-title">
                            <div className="title">MY EXERCISE</div>
                            <span className="date">2021.05.21</span>
                        </div>
                    </Col>
                </Row>
                <Row className="my-exercise-wrapper-items">
                    {
                        FakeExercises.map(i => (
                            <Exercises key={i.id} item={i} />
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default MyExercise;