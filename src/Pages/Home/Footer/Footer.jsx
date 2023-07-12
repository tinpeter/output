import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container className="container-footer">
                <Row className="text-white footer-wrap">
                    <Col xs={12} className="p-0">
                        <div className="footer-widget">
                            <div className="widget-content">
                                <NavLink className="footer-link">会員登録</NavLink>
                                <NavLink className="footer-link">運営会社</NavLink>
                                <NavLink className="footer-link">利用規約</NavLink>
                                <NavLink className="footer-link">個人情報の取扱について</NavLink>
                                <NavLink className="footer-link">特定商取引法に基づく表記</NavLink>
                                <NavLink className="footer-link">お問い合わせ</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;