import React, { useState } from 'react';
import post from '../../post-content/data.json';
import Posts from '../Posts/Posts';
import Topbanner from '../Topbanner/Topbanner';
import Bottomnews from '../Bottomnews/Bottomnews';
const Home = () => {

    return (


        <div className="container">
            {/* <img src={logo} className="rounded mx-auto d-block w-25 p-3"  style={{height:'65px', width:'260px'}}alt="" /> */}
           <img src="https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg" className="rounded mx-auto d-block mt-3" style={{height:'65px', width:'260px'}} alt=""/>
            <div className="row" style={{ borderBottom: '1px solid lightgray'}}>
                {/* css up */}
                <div className="col-md-9">
                    <div className="row">

                        {
                            post.filter(posts => posts.sort < 2).map(posts => <Topbanner posts={posts}></Topbanner>)
                        }


                        {
                            post.filter(posts => posts.sort > 1 && posts.sort < 6).map(posts => <Posts posts={posts}></Posts>)
                        }

                        {
                            post.filter(posts => posts.sort > 5 && posts.sort < 12).map(posts => <Bottomnews posts={posts}></Bottomnews>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    {
                        post.filter(posts => posts.sort > 12).map(posts => <Posts posts={posts}></Posts>)
                        // post.map(posts =><Posts posts={posts}></Posts>)

                    }
                </div>
            </div>
        </div>

    );
};

export default Home;