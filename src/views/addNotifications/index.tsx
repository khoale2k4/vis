'use client';

import { useNotifications } from '@/hooks/NotificationsProvider';
import React, { useState } from 'react';
import Container from '../../components/container';
import RenderCase from '../../components/render';
import { useSubmitNotification } from '@/hooks/SubmitNotificationProvider';
import { useDefaultNotification } from '@/hooks/DefaultNotificationProvider';

const AddNotification = () => {
    const { addNotification } = useNotifications();
    const { addSubmitNotification } = useSubmitNotification();
    const { addDefaultNotification } = useDefaultNotification();
    const [title, setTitle] = useState<string>('Thông báo');
    const [message, setMessage] = useState<string>('Some text goes here');
    const [type, setType] = useState<NotificationTypes>('default');
    const [notiType, setNotiType] = useState<'submit' | 'list' | 'normal'>('list');

    const handleAddNotification = () => {
        if (notiType == 'list') {
            addNotification({
                title,
                message,
                type,
                onClick: () => alert(`Notification clicked: ${title}`),
            });
        } else if (notiType == 'submit') {
            addSubmitNotification({
                title,
                message,
                submitClick: () => addDefaultNotification({
                    title,
                    message: `Notification clicked: ${title}`,
                }),
            })
        } else {
            addDefaultNotification({
                title,
                message,
            })
        }
    };

    return (
        <Container className="flex flex-col gap-10 h-full w-[calc(100dvw-16px)] md:w-fit p-8 overflow-y-auto no-scrollbar">
            <h1 className='text-center text-xl font-bold min-w-64'>
                Thêm thông báo
            </h1>
            <div className='flex-1 flex flex-col gap-2 justify-center'>

                <select
                    value={notiType}
                    onChange={(e) => setNotiType(e.target.value as 'submit' | 'list' | 'normal')}
                    className="p-2 border rounded-md w-full"
                >
                    <option value="list">Thông báo dạng danh sách</option>
                    <option value="submit">Thông báo dạng xác nhận</option>
                    <option value="normal">Thông báo bình thường</option>
                </select>

                <label className='flex flex-col gap-2 w-full whitespace-nowrap'>
                    Tiêu đề
                    <input
                        type="text"
                        placeholder="Tiêu đề"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-2 border rounded-md w-full"
                    />
                </label>

                <RenderCase renderIf={notiType == 'list'}>
                    <label className='flex flex-col gap-2 w-full whitespace-nowrap'>
                        Loại tiêu đề
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
                </RenderCase>


                <label className='flex flex-col gap-2 w-full whitespace-nowrap'>
                    Nội dung
                    <textarea
                        placeholder="Thêm bình luận..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-2 border rounded-md w-full max-h-32 min-h-12"
                        rows={6}
                    />
                </label>
            </div>

            <button
                onClick={handleAddNotification}
                className={`p-2 rounded-md ${type === 'success'
                    ? 'bg-green-500 text-white'
                    : type === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}
            >
                Thêm thông báo
            </button>
        </Container>
    );
};

export default AddNotification;