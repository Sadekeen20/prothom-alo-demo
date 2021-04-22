import React from 'react';
import { Col } from 'react-bootstrap';
import moment from 'moment';
const Topbanner = (props) => {
    const { id, title, description, photo, time, sort } = props.posts;
    const styleContainer = { border: '1px solid steelblue', borderRadius: '15px', padding: '20px' }
    let date = moment(time).format('YYYY-MM-DD');

    return (

        <Col md={8} style={{marginTop:'30px' ,borderTop: '1px solid lightgray', paddingTop: '20px',}}>

            <div className="container row">
               
                <div className="col-md-6">
                    <h4 className="font-weight-bold">{title}</h4>
                    <p className="font-weight-light">{description.slice(0,115)+'...'}</p>
                    <h6 className="small">{moment(date, "YYYY-MM-DD").fromNow()}</h6>
                </div>
                
                <div className="col-md-6">
                    <img src={photo} style={{ width: '300px', height: '200px' }}></img>
                    <h6 className="small">{title}</h6>

                </div>
            </div>
        </Col>


    );
};

export default Topbanner;