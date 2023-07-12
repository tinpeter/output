import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeColumnPage } from '../../FakeData/ColumnPage';
import Column from '../../Pages/ColumnPage/Column/Column';

const ColumnPage = () => {
    const [visible, setVisiable] = useState(8);
    const showMoreItems = () => {
        setVisiable((prevValue) => prevValue + 8);
    };

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
    }, []);
 
    return (
        <section className="my-column-wrapper">
            <Container className="container-custom my-column-wrapper-bg p-0">
                <div className="my-column-wrapper-items">
                    {
                        FakeColumnPage.slice(0, visible).map((i) => (
                            <Column key={i.id} item={i} />
                        ))
                    }
                </div>
                <Row>
                    <Col>
                        <div className="banner-btn m-sm-auto" data-aos="zoom-in">
                            <button onClick={showMoreItems} className="btn-more mt-4 mb-3">コラムをもっと見る</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ColumnPage;