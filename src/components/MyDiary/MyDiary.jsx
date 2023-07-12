import React, { useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeMyDiaries } from '../../FakeData/MyDiary';
import Diary from '../../Pages/MyRecord/Diary/Diary';

const MyDiary = () => {
    const [visible, setVisiable] = useState(8);
    const showMoreItems = () => {
        setVisiable((prevValue) => prevValue + 8);
    };
 
    return (
        <section className="my-diary-wrapper">
            <Container className="container-custom my-diary-wrapper-bg p-1">
                <Row>
                    <Col sm={12} className="text-start">
                        <div className="my-diary-title">MY DIARY</div>
                    </Col>
                </Row>
                <Row className="my-diary-wrapper-items">
                    <Col className="p-2">
                        <Row>
                            {
                                FakeMyDiaries.slice(0, visible).map((i) => (
                                    <Diary key={i.id} item={i} />
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <div className="banner-btn m-sm-auto">
                        <button onClick={showMoreItems} className="btn-more mt-4">自分の日記をもっと見る</button>
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
    );
};

export default MyDiary;