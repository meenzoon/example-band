import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="header">
                <div>내 서비스</div>
                <div>게시글 리스트</div>
                <div>게시글 추가</div>
                <Link to="/auth/login">로그인</Link>
                <Link to="/auth/register">회원가입</Link>
            </div>
        )
    }
}

/*
const mapStateProps = (state) => {
    return {

    }
}

const mapDispatchProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateProps, mapDispatchProps, Header);
*/
export default Header;