'use client';

import { useState } from "react";
import ExampleSignUpField from "./fields";

type RoleType = 'customer' | 'employee';

type InterestType = 'sports' | 'music' | 'travel' | 'books';

export interface ExampleSignUpForm {
    name: string;
    birthday: string;
    password: string;
    phoneNumber: string;
    role: RoleType[];
    jobDestination: string;
    interests: InterestType[],
};

export type ExampleSignUpFieldType = {
    id: keyof ExampleSignUpForm,
    type: InputTypes,
    label: string,
    disable?: boolean,
    version?: TextInputVersion | SelectInputVersion,
    setValue: (_id: keyof ExampleSignUpForm, _value: string | string[]) => void,
    select_type?: SelectInputType,
    options?: SelectInputOptionFormat[],
    isClearable?: boolean,
    state?: InputState,
    tooltip_message?: string,
    dropdownPosition?: DropdownPosition;
}

const SignUpContent = () => {
    const [data, setData] = useState<ExampleSignUpForm>({
        name: '',
        birthday: '',
        password: '',
        phoneNumber: '',
        role: ['employee'],
        jobDestination: '',
        interests: [],
    });

    const updateValue = (id: keyof ExampleSignUpForm, value: string | string[]) => {
        setData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const fields: ExampleSignUpFieldType[] = [
        {
            id: "name", type: "text", label: "Họ và tên", setValue: updateValue, state: 'default',
            tooltip_message: "Input có type = text tương tự như mặc định, có thể chỉnh sửa state, disable.",
        },
        {
            id: "birthday", type: "date", label: "Ngày sinh", setValue: updateValue, state: 'default',
            tooltip_message: "Input có type = date, đối với loại input này, value nhập vào cần là string rỗng hoặc ngày cụ thể có format dd/mm/yyyy.",
        },
        {
            id: "phoneNumber", type: "number", label: "Số điện thoại", setValue: updateValue, state: 'default',
            tooltip_message: "Input có type = number tương tự như mặc định, không có nút tăng giảm.",
        },
        {
            id: "password", type: "password", label: "Mật khẩu", setValue: updateValue, state: 'default',
            tooltip_message: "Input có type = password tương tự như mặc định, cần bỏ trong thẻ form nếu không muốn bị warning.",
        },
        {
            id: "role", type: "select", label: "Vai trò", setValue: updateValue, select_type: 'single', isClearable: false, state: 'default',
            options: [
                { label: "Khách hàng", value: "customer" },
                { label: "Nhân viên", value: "employee" },
            ],
            dropdownPosition: 'top',
            tooltip_message: "Input có type = select và select_type = single, cần truyền giá trị mặc định và isClearable = false nếu mong muốn luôn có giá trị cho input.",
        },
        {
            id: "interests", type: "select", label: "Sở thích", setValue: updateValue, select_type: 'multi', isClearable: true, state: 'default',
            options: [
                { label: "Thể thao", value: "sports" },
                { label: "Âm nhạc", value: "music" },
                { label: "Du lịch", value: "travel" },
                { label: "Sách", value: "books" },
            ],
            dropdownPosition: 'top',
            tooltip_message: "Input có type = select và select_type = multi, cần truyền giá trị mặc định và isClearable = false nếu mong muốn luôn có giá trị cho input như khi type = single.",
        },
        {
            id: "jobDestination", type: "text-area", label: "Mô tả nghề nghiệp", setValue: updateValue, state: 'default',
            tooltip_message: "Loại này không nằm trong thẻ input mà có thẻ riêng là <textarea></textarea>, dùng cho những đoạn content dài.",
        },
    ];

    return (
        <div className="flex flex-col gap-2 p-2">
            <ExampleSignUpField data={data} fields={fields} />
        </div>
    );
};

export default SignUpContent;