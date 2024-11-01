"use client";

import React, { useState } from 'react';
import Tooltip from '@/components/tooltip';
import CustomButton from '@/components/button';
import RenderCase from '../../components/render';
import CustomInputField from '@/components/input';
import Container from '../../components/container';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { useNotifications } from '@/hooks/NotificationsProvider';
import { useSubmitNotification } from '@/hooks/SubmitNotificationProvider';
import { useDefaultNotification } from '@/hooks/DefaultNotificationProvider';

type NotiType = 'submit' | 'list' | 'normal';

const AddNotification = () => {
    const { addNotification } = useNotifications();
    const { addSubmitNotification } = useSubmitNotification();
    const { addDefaultNotification } = useDefaultNotification();
    const [title, setTitle] = useState<string>('');
    const [message, setMessage] = useState<string>('Some text goes here');
    const [type, setType] = useState<NotificationTypes[]>(['default']);
    const [notiType, setNotiType] = useState<NotiType[]>(['list']);
    const notiTypeOptions: SelectInputOptionFormat[] = [
        { label: 'Thông báo dạng danh sách', value: 'list' },
        { label: 'Thông báo dạng xác nhận', value: 'submit' },
        { label: 'Thông báo bình thường', value: 'normal' },
    ];
    const typeOptions: SelectInputOptionFormat[] = [
        { label: 'Default', value: 'default' },
        { label: 'Success', value: 'success' },
        { label: 'Error', value: 'error' },
    ];

    const handleAddNotification = () => {
        if (notiType[0] === 'list') {
            addNotification({
                title,
                message,
                type: type[0],
                onClick: () => addDefaultNotification({
                    title,
                    message: `Notification clicked: ${title}`,
                }),
            });
        } else if (notiType[0] === 'submit') {
            addSubmitNotification({
                title,
                message,
                submitClick: () => addDefaultNotification({
                    title,
                    message: `Notification clicked: ${title}`,
                }),
            });
        } else {
            addDefaultNotification({
                title,
                message,
            });
        }
    };

    return (
        <Container className="flex flex-col h-full w-full md:w-fit !rounded-lg px-8 no-scrollbar overflow-y-auto relative">
            <h1 className='text-center text-xl z-10 font-bold min-w-64 min-h-20 flex justify-center place-items-center sticky top-0 bg-white dark:bg-darkContainer'>
                Thêm thông báo
            </h1>
            <div className='flex-1 flex flex-col gap-2 justify-center h-full pb-4'>
                <Tooltip
                    placement='top'
                    content={
                        <Container className='p-2 !rounded-md border max-w-[calc(100dvw-16px)]'>
                            Chọn loại thông báo:
                            <ul key='noti-types'>
                                <li key='list'>- Danh sách: số lượng tối đa là 4 (có thể chỉnh sửa trong file .env), có thể lưu thêm hàm onClick để xử lý event.</li>
                                <li key='submit'>- Xác nhận: yêu cầu sự đồng ý từ người dùng để thực hiện một chức năng gì đó.</li>
                                <li key='normal'>- Bình thường: giống như alert</li>
                            </ul>
                            <p className='font-semibold'>Cách thức thêm thông báo: kiếm tra hàm handleAddNotification file /views/addNotifications/index.tsx để xem.</p>
                        </Container>
                    }
                >
                    <div className='w-full'>
                        <CustomInputField type='select' value={notiType} setValue={setNotiType} options={notiTypeOptions} isClearable={false} />
                    </div>
                </Tooltip>

                <CustomInputField type='number' value={title} setValue={setTitle} label={
                    <div className='flex gap-1 place-items-center relative'>
                        Tiêu đề
                        <Tooltip
                            placement='bottom'
                            content={<Container className='p-2 !rounded-md border w-full'>Thêm tiêu đề cho thông báo, mặc định sẽ là &quot;Thông báo&quot;</Container>}
                        >
                            <span><IoInformationCircleOutline className='mt-0.5' /></span>
                        </Tooltip>
                    </div>
                } />

                <RenderCase renderIf={notiType[0] === 'list'}>
                    <CustomInputField type='select' value={type} setValue={setType} options={typeOptions} isClearable={false} label={
                        <div className='flex gap-1 place-items-center relative'>
                            Loại tiêu đề
                            <Tooltip
                                placement='bottom'
                                content={<Container className='p-2 !rounded-md border'>Dùng khi tạo thông báo dạng danh sách, có 3 loại tương ứng</Container>}
                            >
                                <span><IoInformationCircleOutline className='mt-0.5' /></span>
                            </Tooltip>
                        </div>
                    } />
                </RenderCase>

                <CustomInputField type='text-area' value={message} setValue={setMessage} label={
                    <div className='flex gap-1 place-items-center relative'>
                        Nội dung
                        <Tooltip
                            placement='bottom'
                            content={<Container className='p-2 !rounded-md border'>Nội dung của thông báo, có thể chứa ReactNode</Container>}
                        >
                            <span><IoInformationCircleOutline className='mt-0.5' /></span>
                        </Tooltip>
                    </div>
                } />
            </div>

            <Container className='sticky bottom-0 w-full !rounded-none !shadow-none'>
                <CustomButton id='Add_noti_btn' className='mb-8 w-full' color={type[0] === 'default' ? 'blue' : type[0]} onClick={handleAddNotification} version='1'>
                    Thêm thông báo
                </CustomButton>
            </Container>
        </Container>
    );
};

export default AddNotification;