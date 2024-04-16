import React, { Children, useEffect, useState } from 'react';
import TextArea from '../Components/Reuseable/TextArea';
import Button from '../Components/Reuseable/Button';
import axios from 'axios';

const Post = () => {
    const [Message, setMessage] = useState([]);
    const [Loading, setLoading] = useState(false);

    const handlePost = async () => {
        setLoading(true);
        console.log('Posting...');
        const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

        await axios
            .post(
                `https://graph.facebook.com/v19.0/226581193881261/feed?access_token=${ACCESS_TOKEN}`,
                {
                    message: Message,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                }
            )
            .then((response) => {
                console.log('Posted : ', response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        setMessage('');
    };

    const handleImagePost = async () => {
        setLoading(true);
        console.log('Posting...');
        const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
        const image = localStorage.getItem('image');
        console.log('image url ', image);

        await axios
            .post(
                `https://graph.facebook.com/v19.0/226581193881261/photos?access_token=${ACCESS_TOKEN}`,
                {
                    message: Message,
                    url: 'https://img.freepik.com/free-photo/snowy-mountain-…arry-galaxy-majesty-generative-ai_188544-9650.jpg',
                    published: true,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                }
            )
            .then((response) => {
                console.log('Posted : ', response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        setMessage('');
        // localStorage.removeItem('image');
    };

    const handleImage = async (e) => {
        const img = URL.createObjectURL(e.target.files[0]);
        localStorage.setItem('image', img);
        document.getElementById('display').src = img;
        // console.log(img)
    };

    //Displaying image from local Storage
    // useEffect(() => {
    //     if (localStorage) {
    //         const base64String = localStorage.getItem('image');
    //         document.getElementById(
    //             'display'
    //         ).src = `data:image/png;base64,${base64String}`;
    //     }
    // });

    // Uploading image to local Storage
    // const handleImage = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         // convert file to base64 String
    //         const base64String = reader.result
    //             .replace('data:', '')
    //             .replace(/^.+,/, '');
    //         // store file
    //         try {
    //             localStorage.setItem('image', base64String);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         document.getElementById(
    //             'display'
    //         ).src = `data:image/png;base64,${base64String}`;
    //     };
    //     reader.readAsDataURL(file);
    // };

    return (
        <div>
            <p
                className='text-4xl 
                text-center p-3
                font-bold'
            >
                Type to post...
            </p>
            <div
                className='flex 
                items-center
                flex-col
                mx-3'
            >
                <TextArea
                    placeholder='Enter your message....'
                    onChange={(e) => setMessage(e.target.value)}
                    value={Message}
                />
                <input
                    className='py-6'
                    type='file'
                    accept='image/png, image/jpeg'
                    // onChange={handleImage}
                    onChange={handleImage}
                />
                <div>
                    {/* <img src={Image} alt='Local Storage' /> */}
                    <img src='' id='display' alt='' />
                </div>
                <div
                    className='flex 
                        justify-between
                        gap-4 
                        w-full 
                        mt-5'
                >
                    {Loading ? (
                        <p className='text-2xl'>Posting...</p>
                    ) : (
                        <>
                            <Button
                                name='Post'
                                onClick={
                                    localStorage ? handleImagePost : handlePost
                                }
                                disable={Loading}
                            />
                            <Button name='Home' redirect navigate={'/'} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Post;
