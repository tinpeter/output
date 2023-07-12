import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import r1 from '../../../Images/MyRecord/MyRecommend-1.jpg';
import r2 from '../../../Images/MyRecord/MyRecommend-2.jpg';
import r3 from '../../../Images/MyRecord/MyRecommend-3.jpg';
import './Categories.css';

const Categories = () => {
    return (
        <section className="my-record-tabs">
            <Container className="container-custom p-1">
                <Row>
                    <Col md={12} lg={4} className="text-center">
                        <div className="my-record-tabs__item">
                            <img src={r1} alt="" className="img-item" />
                            <div className="my-record-tabs__item-content" data-aos="flip-left">
                                <div className="title">BODY RECORD</div>
                                <button className="btn-click mt-3">自分のカラダの記録</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4} className="text-center">
                        <div className="my-record-tabs__item">
                            <img src={r2} alt="" className="img-item" />
                            <div className="my-record-tabs__item-content" data-aos="flip-left">
                                <div className="title">MY EXERCISE</div>
                                <button className="btn-click mt-3">自分の運動の記録</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4} className="text-center">
                        <div className="my-record-tabs__item">
                            <img src={r3} alt="" className="img-item" />
                            <div className="my-record-tabs__item-content" data-aos="flip-left">
                                <div className="title">MY DIARY</div>
                                <button className="btn-click mt-3">自分の日記</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Categories;