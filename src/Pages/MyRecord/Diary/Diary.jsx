import React from 'react';
import { Col } from 'react-bootstrap';
import './Diary.css';

const Diary = (props) => {
    const {name, content, date, time} = props.item;
    return (
        <Col md={6} lg={3} xs={12} className="mb-3">
            <div className="diary-item text-start" data-aos="zoom-in">
                <div className="mb-0 date-time">
                    <div>{date}</div>
                    <div>{time}</div>
                </div>
                <div className="content">
                    <span>{name}</span>
                    <span>{content}</span>
                </div>
            </div>
        </Col>
    );
};

export default Diary;