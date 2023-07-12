import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Exercises.css';

const Exercises = (props) => {
    const {name, status, time} = props.item;
    return (
        <Col md={6} xs={12}>
            <div className="exercises-items">
                <Row>
                    <Col md={6} xs={12} className="text-start">
                        <div className="exercises-item">
                            <div className="mb-0 title">
                                <span className="circle"></span>
                                <div className="ml-3">{name}</div>
                            </div>
                            <span className="ml-4 number">{status}</span>
                        </div>
                    </Col>
                    <Col md={6} xs={12} className="text-end">
                        <span className="time">{time}</span>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default Exercises;