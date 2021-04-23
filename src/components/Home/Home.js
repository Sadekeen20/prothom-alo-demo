import React, { useState } from 'react';
import post from '../../post-content/data.json';
import Posts from '../Posts/Posts';
import Topbanner from '../Topbanner/Topbanner';
import Bottomnews from '../Bottomnews/Bottomnews';
const Home = () => {

    return (


        <div className="container ">
            <img src="https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg" className="rounded mx-auto d-block mt-3 logo" alt="" />
            <div className="row borderBottom" >

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
                        post.filter(posts => posts.sort > 11).map(posts => <Posts posts={posts}></Posts>)
                        // post.filter(posts => posts.sort > 11).map(posts => <Bottomnews posts={posts}></Bottomnews>)
                    }
                </div>
            </div>

            <footer className="text-center small">স্বত্ব © ২০২১ প্রথম আলো | সম্পাদক ও প্রকাশক: মতিউর রহমান</footer>
        </div>

    );
};

export default Home;