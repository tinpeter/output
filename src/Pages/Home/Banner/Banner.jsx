import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import d01 from '../../../Images/d01.jpg';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import './Banner.css';

const labels = ["6月", "7月", "8月", "9月", "10月", "1月", "2月", "3月", "4月", "4月"];

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
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

const Banner = () => {
    return (
        <Container fluid className="banner-container">
            <Row className="align-items-center">
                <Col md={12} sm={12} lg={5} className="p-0">
                    <div className="text-lg-start">
                        <img src={d01} alt="" className="banner-img"/>
                    </div>
                </Col>
                <Col md={12} sm={12} lg={7} className="p-0">
                    <div className="banner-chart">
                        <Line options={options} data={data} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;