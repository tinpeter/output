import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/グループ_134.png';
import icon_memo from '../../../Images/icon/icon_memo.png';
import icon_challenge from '../../../Images/icon/icon_challenge.png';
import icon_info from '../../../Images/icon/icon_info.png';
import icon_menu from '../../../Images/icon/icon_menu.png';
import './Header.css';

const Header = () => {
    const [isShowMenu, setVisiable] = useState(false);
    const showMoreMenu = () => {
        setVisiable(() => !isShowMenu);
    };

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="/home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'><img src={icon_memo} className="icon" alt="memo" />自分の記録</Link>
                            <Link to="/my-record" className='list-item text-decoration-none'><img src={icon_challenge} className="icon" alt="challenge" />チャレンジ</Link>
                            <Link to="/column-page" className='list-item text-decoration-none'><img src={icon_info} className="icon" alt="info" />お知らせ</Link>
                            <button type="button" className="icon-menu">
                                <img src={icon_menu} alt="menu" onClick={showMoreMenu}/>
                                {
                                    isShowMenu ?
                                    <ul className="head-menu text-start">
                                        <li>自分の記録</li>
                                        <li>体重グラフ</li>
                                        <li>目標</li>
                                        <li>選択中のコース</li>
                                        <li>コラム一覧</li>
                                        <li>設定</li>
                                    </ul> : ""
                                }
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;