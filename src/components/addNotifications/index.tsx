'use client';

import { addNotification } from '@/store/action/notificationsSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddNotification = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>('Thông báo');
    const [message, setMessage] = useState<string>('Some text goes here');
    const [type, setType] = useState<NotificationTypes>('default');

    const handleAddNotification = () => {
        dispatch(addNotification({ title, message, type }));
    };

    return (
        <div className="flex flex-col gap-2 h-full">
            <label className='flex gap-2 place-items-center w-full whitespace-nowrap'>
                Tiêu đề
                <input
                    type="text"
                    placeholder="Tiêu đề"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border rounded-md w-full"
                />
            </label>
            <label className='flex gap-2 place-items-center w-full whitespace-nowrap'>
                Nội dung
                <input
                    type="text"
                    placeholder="Nội dung"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-2 border rounded-md w-full"
                />
            </label>
            <label className='flex gap-2 place-items-center w-full whitespace-nowrap'>
                Loại thông báo
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value as NotificationTypes)}
                    className="p-2 border rounded-md w-full"
                >
                    <option value="default">Default</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                </select>
            </label>
            <button
                onClick={handleAddNotification}
                className={`p-2 rounded-md ${type === 'success'
                    ? 'bg-green-500 text-white'
                    : type === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}
            >
                Thêm Thông Báo
            </button>
        </div>
    );
};

export default AddNotification;
