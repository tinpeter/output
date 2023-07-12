import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Categories.css';

const Categories = () => {
    return (
        <section className="my-categories">
            <Container className="container-custom p-1">
                <Row>
                    <Col md={3} xs={12} className="text-center">
                        <div className="my-categories-tabs__item" data-aos="flip-left">
                            <div className="title">RECOMMENDED COLUMN</div>
                            <span>オススメ</span>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="text-center">
                        <div className="my-categories-tabs__item" data-aos="flip-left">
                            <div className="title">RECOMMENDED COLUMN</div>
                            <span>オススメ</span>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="text-center">
                        <div className="my-categories-tabs__item" data-aos="flip-left">
                            <div className="title">RECOMMENDED COLUMN</div>
                            <span>オススメ</span>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="text-center">
                        <div className="my-categories-tabs__item" data-aos="flip-left">
                            <div className="title">RECOMMENDED COLUMN</div>
                            <span>オススメ</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Categories;