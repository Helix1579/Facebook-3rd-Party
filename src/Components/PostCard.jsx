import React from 'react';
import Button from './Reuseable/Button';
import TextArea from './Reuseable/TextArea';
import axios from 'axios';
import Edit from '../Pages/Edit';
import { Link, useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        console.log('Deleting...', post.id);
        const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
        // console.log(ACCESS_TOKEN)
        axios
            .delete(
                `https://graph.facebook.com/v19.0/${post.id}?access_token=${ACCESS_TOKEN}`
            )
            .then((response) => {
                console.log('Deleted : ', response.data);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleEdit = () => {
        navigate('/edit', { state: { post } });
    };

    return (
        <div
            className='p-2
            border-2 m-2
            flex flex-row
            justify-between
            items-center
            border-blue-200
            rounded-xl'
        >
            <div
                className='w-full
                flex gap-2
                flex-col'
            >
                <div className='flex justify-center'>
                    <TextArea value={post.message} disabled />
                </div>
                <div className='flex flex-row justify-between'>
                    <Button name='EDIT' onClick={handleEdit} />
                    <Button name='DELETE' onClick={handleDelete} />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
