import React from 'react';
import { Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/bn'

const Topbanner = (props) => {
    const { id, title, description, photo, time, sort } = props.posts;
    let date = moment(time).format('YYYY-MM-DD');
    return (

        <Col md={8} className="borderTop mt-30 pt-20">

            <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                <div className="container row borderRight" style={{ margin: '4px' }}>

                    <div className="col-md-6">
                        <h4 className="font-weight-bold">{title}</h4>
                        <p className="font-weight-light text-dark">{description.slice(0, 115) + '...'}</p>
                        <h6 className="small">{moment(date, "YYYY-MM-DD").fromNow()}</h6>
                    </div>

                    <div className="col-md-6">
                        <img src={photo} className="img-fix"></img>
                        <h6 className="small">{title}</h6>

                    </div>
                </div>
            </a>
        </Col>


    );
};

export default Topbanner;