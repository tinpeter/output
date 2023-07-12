import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import './BodyRecord.css';

const labels = ["6月", "7月", "8月", "9月", "10月", "1月", "2月", "3月", "4月", "4月"];

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

const data = {
  labels: labels,
  datasets: [
    {
        label: "My First dataset",
        backgroundColor: "#8FE9D0",
        borderColor: "#8FE9D0",
        data: [60, 55, 45, 40, 30, 25, 20, 15, 10, 15, 5],
    },
    {
        label: "My First",
        backgroundColor: "#FFCC21",
        borderColor: "#FFCC21",
        data: [60, 50, 55, 45, 30, 20, 15, 11, 8, 5, 2],
    },
  ],
};

const BodyRecord = () => {
    return (
        <section className="body-record-chart__img">
            <Container className="container-custom body-record-chart">
                <Row>
                    <Col sm={12} className="text-start">
                        <div className="box-title">
                            <div className="title">BODY RECORD</div>
                            <span className="date">2021.05.21</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="chart">
                        <Line options={options} data={data} width={100} />
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default BodyRecord;