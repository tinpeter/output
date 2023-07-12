import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeMealHistory } from '../../../FakeData/MealHistory';
import g1 from '../../../Images/icon/morning.png';
import g2 from '../../../Images/icon/lunch.png';
import g3 from '../../../Images/icon/dinner.png';
import g4 from '../../../Images/icon/snack.png';
import './MealHistory.css';


const MealHistory = () => {
    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
    }, []);

    const [currrentType, setCurrrentType] = useState("");
    const [items, setItems] = useState(FakeMealHistory);
    const [visible, setVisiable] = useState(8);
    const [filter, setFilter] = useState("");
    const showMoreItems = (e, currrentType) => {
        setVisiable((prevValue) => prevValue + 4);
    };
    const showFilterItems = (e, type) => {
        if (type !== currrentType) {
            const filtered = FakeMealHistory.filter((item) => item.type == type);
            setItems(filtered);
            setFilter(type);
            setCurrrentType(type);
            setVisiable(4);
        }
    };

    return (
        <Container className="container-custom">
            <Row className="tabs-wrap">
                <Col md={6} lg={3} sm={12}>
                    <div className="thumbnail" onClick={e => showFilterItems(e, "morning")}>
                        <img src={g1} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col md={6} lg={3} sm={12}>
                    <div className="thumbnail" onClick={e => showFilterItems(e, "lunch")}>
                        <img src={g2} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col md={6} lg={3} sm={12}>
                    <div className="thumbnail" onClick={e => showFilterItems(e,"dinner")}>
                        <img src={g3} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col md={6} lg={3} sm={12}>
                    <div className="thumbnail" onClick={e => showFilterItems(e,"snack")}>
                        <img src={g4} alt="" className="img-fluid" />
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    !filter ? FakeMealHistory.slice(0, visible).map((item) => (
                        <Col key={item.id} md={6} lg={3} sm={12} className="custom-padding">
                            <div className="single-item-box">
                                <div className="thumbnail">
                                    <img src={item.img} alt="" className="img-fluid" />
                                    <p data-aos="zoom-in">{item.title}</p>
                                </div>
                            </div>
                        </Col>
                    )) : 
                    items.slice(0, visible).map((item) => (
                        <Col key={item.id} md={6} lg={3} sm={12} className="custom-padding">
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={item.img} alt="" className="img-fluid" />
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </Col>
                    ))
                }
            </Row>
            <Row>
                <Col>
                    <div className="banner-btn m-sm-auto">
                        <button onClick={e => showMoreItems(e,currrentType)} className="btn-more mt-4">記録をもっと見る</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MealHistory;