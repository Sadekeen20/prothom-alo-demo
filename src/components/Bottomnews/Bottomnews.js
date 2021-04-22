import React from 'react';
import { Col } from 'react-bootstrap';

import moment from 'moment';
const Bottomnews = (props) => {
    const { id, title, description, photo, time, sort } = props.posts;
    const styleContainer = { border: '1px solid steelblue', borderRadius: '15px', padding: '20px' }
    let date = moment(time).format('YYYY-MM-DD');
    return (
        <Col md={4} style={{marginTop:'30px' ,borderTop: '1px solid lightgray', paddingTop: '20px',borderRight: '1px solid lightgray'  }} >
        <div className="row">

            <div className="col-md-6">
                <img src={photo} style={{ width: '112px', height: '75px'}}></img>
                {/* <h6 className="small">{title}</h6> */}
                <h6 className="small">{moment(date, "YYYY-MM-DD").fromNow()}</h6>

            </div>

            <div className="col-md-6">
                <h6>{title}</h6>
                {/* <p className="font-weight-light">{description.slice(0, 115) + '...'}</p> */}

            </div>
        </div>
        </Col>

    );
};

export default Bottomnews;