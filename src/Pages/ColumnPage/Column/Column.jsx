import React from 'react';
import './Column.css';

const Column = (props) => {
    const {name, tags, date, time, img} = props.item;
    return (
        <div className="column-items text-start">
            <div className="mb-0 column-item">
                <img src={img} className="image" alt="info" />
                <div className="date-time">
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
            </div>
            <div className="content" data-aos="zoom-in">
                <div className="title">{name}</div>
                <div className="tags">{tags}</div>
            </div>
        </div>
    );
};

export default Column;