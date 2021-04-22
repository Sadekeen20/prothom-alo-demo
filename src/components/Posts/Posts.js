import React from 'react';
import {Col} from 'react-bootstrap';
import moment from 'moment';

const Posts = (props) => {
    const { id, title, description, photo, time, sort } = props.posts;
    const styleContainer = { border: '1px solid steelblue', borderRadius: '15px',padding: '20px' }
    let date = moment(time).format('YYYY-MM-DD');
    
    return (
      
            // <div style={{display:"inline"}}>
            <Col md={4} style={{marginTop:'30px' ,maxWidth:'100%',borderTop: '1px solid lightgray', paddingTop: '20px',borderRight: '1px solid lightgray'  }}>
                    <div className="container">
                    {/* <h4>Post# {id}</h4> */}
                    <h6>{title}</h6>
                    <p className="text-muted small"> {description.slice(0,120)+'...'}</p>
                    {/* <p>{sort}</p> */}
                    {/* <h6>{date}</h6> */}
                    {/* <img src={photo} style={{width: '300px', height: '200px'}}></img> */}
                    <h6>{moment(date, "YYYY-MM-DD").fromNow()}</h6>
                    </div>
               </Col>  
            //    </div>
           
      
    );
};

export default Posts;