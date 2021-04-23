import React from 'react';
import { Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/bn'

const Posts = (props) => {
    const { id, title, description, photo, time, sort } = props.posts;
    let date = moment(time).format('YYYY-MM-DD');

    return (

        <Col md={4} className="borderTop mt-30 pt-20 mw-100">
            <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                <div className="container borderRight" style={{ margin: '5px' }}>
                    <h6 className="font-weight-bold">{title}</h6>
                    <p className="text-muted small"> {description.slice(0, 120) + '...'}</p>
                    <h6 className="small">{moment(date, "YYYY-MM-DD").fromNow()}</h6>
                </div>
            </a>
        </Col>

    );
};

export default Posts;