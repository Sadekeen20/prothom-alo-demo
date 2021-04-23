import React from 'react';
import { Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/bn'

const Bottomnews = (props) => {
    const { id, title, description, photo, time, sort } = props.posts;
    let date = moment(time).format('YYYY-MM-DD');
    return (
        <Col md={4} className="borderTop mt-30 pt-20">
            <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                <div className="row borderRight" style={{ margin: '-3px' }}>

                    <div className="col">
                        <img src={photo} className="img-fix"></img>
                        <h6 className="small p-1">{moment(date, "YYYY-MM-DD").fromNow()}</h6>
                    </div>

                    <div className="col">
                        <h6 className="font-weight-bold">{title}</h6>
                    </div>

                </div>
            </a>
        </Col>

    );
};

export default Bottomnews;