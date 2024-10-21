'use client';

import React, { useState } from 'react';
import CustomButton from '@/components/button';
import RenderCase from '../../components/render';
import Container from '../../components/container';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { useNotifications } from '@/hooks/NotificationsProvider';
import { useSubmitNotification } from '@/hooks/SubmitNotificationProvider';
import { useDefaultNotification } from '@/hooks/DefaultNotificationProvider';
import Tooltip from '@/components/tooltip';
import Dropdown from '@/components/dropdown';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

type NotiType = 'submit' | 'list' | 'normal';

interface Option {
    label: string;
    value: string;
}

const AddNotification = () => {
    const { addNotification } = useNotifications();
    const { addSubmitNotification } = useSubmitNotification();
    const { addDefaultNotification } = useDefaultNotification();
    const [title, setTitle] = useState<string>('Thông báo');
    const [message, setMessage] = useState<string>('Some text goes here');
    const [type, setType] = useState<NotificationTypes>('default');
    const [notiType, setNotiType] = useState<NotiType>('list');
    const notiTypeOptions: Option[] = [
        { label: 'Thông báo dạng danh sách', value: 'list' },
        { label: 'Thông báo dạng xác nhận', value: 'submit' },
        { label: 'Thông báo bình thường', value: 'normal' },
    ];

    const typeOptions: Option[] = [
        { label: 'Default', value: 'default' },
        { label: 'Success', value: 'success' },
        { label: 'Error', value: 'error' },
    ];

    const handleAddNotification = () => {
        if (notiType === 'list') {
            addNotification({
                title,
                message,
                type,
                onClick: () => alert(`Notification clicked: ${title}`),
            });
        } else if (notiType === 'submit') {
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

    const renderDropdown = (options: Option[], value: string, onChange: (value: string) => void) => (
        <Dropdown
            max_width={true}
            position='origin-top'
            button={
                <button className="p-2 px-3 text-left border rounded-md w-full dark:bg-darkContainerPrimary dark:border-none focus:outline-none">
                    {options.find(option => option.value === value)?.label}
                </button>
            }
            className="top-12 w-full"
        >
            <Container className="flex flex-col w-full bg-white dark:bg-darkContainerPrimary border dark:border-white/10 !rounded-md">
                {options.map((option, index) => (
                    <div>
                        <button
                            key={option.value}
                            onClick={() => onChange(option.value)}
                            className="p-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between w-full"
                        >
                            {option.label}
                            {value === option.value ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
                        </button>
                        {index < options.length - 1 && (
                            <div className="h-px w-full bg-gray-200 dark:bg-white/10" />
                        )}
                    </div>

                ))}
            </Container>
        </Dropdown>
    );

    return (
        <Container className="flex flex-col gap-10 h-full w-[calc(100dvw-16px)] md:w-fit px-8 no-scrollbar overflow-y-auto relative">
            <h1 className='text-center text-xl font-bold min-w-64 min-h-20 flex justify-center place-items-center sticky top-0 bg-white dark:bg-darkContainer'>
                Thêm thông báo
            </h1>
            <div className='flex-1 flex flex-col gap-2 justify-center h-full'>
                <Tooltip
                    placement='top'
                    content={
                        <Container className='p-2 !rounded-md border'>
                            Chọn loại thông báo:
                            <ul>
                                <li key='list'>- Danh sách: số lượng tối đa là 4 (có thế chỉnh sửa trong file .env), có thế lưu thêm hàm onClick để xử lý event.</li>
                                <li key='submit'>- Xác nhận: yêu cầu sự đồng ý từ người dùng để thực hiện một chức năng gì đó.</li>
                                <li key='normal'>- Bình thường: giống như alert</li>
                            </ul>
                            <p className='font-semibold'>Cách thức thêm thông báo: kiếm tra file /views/addNotifications/index.tsx để xem.</p>
                        </Container>
                    }
                >
                    <div className='w-full'>
                        {renderDropdown(notiTypeOptions, notiType, (value) => setNotiType(value as NotiType))}
                    </div>
                </Tooltip>

                <label className='flex flex-col gap-2 w-full whitespace-nowrap'>
                    <div className='flex gap-1 place-items-center relative'>
                        Tiêu đề
                        <Tooltip
                            placement='bottom'
                            content={<Container className='p-2 !rounded-md border'>Thêm tiêu đề cho thông báo, mặc định sẽ là &quot;Thông báo&quot;</Container>}
                        >
                            <span><IoInformationCircleOutline className='mt-0.5' /></span>
                        </Tooltip>
                    </div>
                    <input
                        type="text"
                        placeholder="Tiêu đề"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-2 px-3 border rounded-md w-full dark:bg-darkContainerPrimary dark:border-none focus:outline-none"
                    />
                </label>

                <RenderCase renderIf={notiType === 'list'}>
                    <label className='flex flex-col gap-2 w-full whitespace-nowrap'>
                        <div className='flex gap-1 place-items-center relative'>
                            Loại tiêu đề
                            <Tooltip
                                placement='bottom'
                                content={<Container className='p-2 !rounded-md border'>Dùng khi tạo thông báo dạng danh sách, có 3 loại tương ứng</Container>}
                            >
                                <span><IoInformationCircleOutline className='mt-0.5' /></span>
                            </Tooltip>
                        </div>
                        {renderDropdown(typeOptions, type, (value) => setType(value as NotificationTypes))}
                    </label>
                </RenderCase>

                <label className='flex flex-col gap-2 w-full whitespace-nowrap'>
                    <div className='flex gap-1 place-items-center relative'>
                        Nội dung
                        <Tooltip
                            placement='bottom'
                            content={<Container className='p-2 !rounded-md border'>Nội dung của thông báo, có thể chứa ReactNode</Container>}
                        >
                            <span><IoInformationCircleOutline className='mt-0.5' /></span>
                        </Tooltip>
                    </div>
                    <textarea
                        placeholder="Thêm bình luận..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-2 px-3 border rounded-md w-full min-h-12 dark:bg-darkContainerPrimary dark:border-none focus:outline-none"
                        rows={6}
                    />
                </label>
            </div>

            <Container className='sticky bottom-0 w-full !rounded-none !shadow-none'>
                <CustomButton id='Add_noti_btn' className='mb-8' color={type === 'default' ? 'blue' : type} onClick={handleAddNotification} version='1'>
                    Thêm thông báo
                </CustomButton>
            </Container>
        </Container>
    );
};

export default AddNotification;