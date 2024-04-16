import React, { useEffect, useState } from 'react';
import PostCard from '../Components/PostCard';
import Button from '../Components/Reuseable/Button';
import axios from 'axios';

const Homepage = () => {
    const [Posts, setPosts] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
        // console.log(ACCESS_TOKEN);

        const getPosts = async () => {
            setLoading(true);
            await axios
                .get(
                    `https://graph.facebook.com/v19.0/226581193881261/feed?access_token=${ACCESS_TOKEN}`
                )
                .then((response) => {
                    setPosts(response.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        };
        getPosts();
    }, []);
    // console.log('Posts : ', Posts);
    return (
        <div
            className='flex flex-col
            w-full'
        >
            <p
                className='text-4xl 
            text-center p-3
            font-bold'
            >
                Homepage
            </p>
            <div className='flex items-center flex-col '>
                <div className='w-full'>
                    {Loading ? (
                        <p>Loading...</p>
                    ) : (
                        Posts.map((post, index) => (
                            <PostCard key={index} post={post} />
                        ))
                    )}
                </div>
                <div className='p-3'>
                    <Button name='Post' navigate={'/post'} redirect />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
