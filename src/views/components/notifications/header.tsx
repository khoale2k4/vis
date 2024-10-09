import RenderCase from '@/components/render';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { BiErrorCircle, BiInfoCircle } from 'react-icons/bi';

const NotificationHeader = ({ type, title }: NotificationHeaderProps) => {
    return (
        <div className='flex gap-2 justify-center place-items-center text-gray-800'>
            <RenderCase renderIf={type === 'default'}>
                <BiInfoCircle />
            </RenderCase>

            <RenderCase renderIf={type === 'error'}>
                <BiErrorCircle />
            </RenderCase>

            <RenderCase renderIf={type === 'success'}>
                <IoCheckmarkCircle />
            </RenderCase>

            <h4 className="font-bold">{title}</h4>
        </div>
    );
};

export default NotificationHeader;
