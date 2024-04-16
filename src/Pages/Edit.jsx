import React, { useState } from 'react';
import TextArea from '../Components/Reuseable/TextArea';
import Button from '../Components/Reuseable/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = ({ post }) => {
    const [Loading, setLoading] = useState(false);
    const [Message, setMessage] = useState('');
    const [Id, setId] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    Message === '' && setMessage(location.state.post.message);
    Id === '' && setId(location.state.post.id);
    
    // console.log('Message : ', Message);
    // console.log('Id : ', Id);

    const handleEdit = async () => {
        setLoading(true);
        console.log('Editing...');
        const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
        await axios
            .post(
                `https://graph.facebook.com/v19.0/${Id}?message=${Message}&access_token=${ACCESS_TOKEN}`
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
        navigate('/');
    };

    return (
        <div>
            <p
                className='text-4xl 
                text-center p-3
                font-bold'
            >
                Edit post...
            </p>
            <div className='flex items-center flex-col'>
                <TextArea
                    placeholder='Enter your message....'
                    onChange={(e) => setMessage(e.target.value)}
                    value={Message}
                />
                <div
                    className='flex justify-between
                        gap-4 mt-4'
                >
                    <Button
                        name='Update'
                        onClick={handleEdit}
                        disable={Loading}
                    />
                    <Button name='Home' redirect navigate={'/'} />
                </div>
            </div>
        </div>
    );
};

export default Edit;
