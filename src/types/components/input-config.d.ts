declare type TextInputVersion = '1';

declare type SelectInputVersion = '1';

declare type SelectInputType = 'single' | 'multi';

declare type InputState = 'error' | 'success' | 'default';

declare type InputTypes = 'select' | 'text' | 'number' | 'password' | 'date' | 'text-area';

declare type BaseInputProps<T extends InputTypes> = {
    type: T;
    version?: T extends 'select' ? SelectInputVersion : TextInputVersion;

    id?: string;
    className?: string;
    state?: InputState;

    label?: React.ReactNode | string;
    placeholder?: string;
    isClearable?: boolean;
    disabled?: boolean;

    value: T extends 'select' ? string[] : string;
    setValue: T extends 'select' ?
    React.Dispatch<React.SetStateAction<string[]>>
    : (React.Dispatch<React.SetStateAction<string>> | ((_value: string) => void));
};

declare type TextInputProps = BaseInputProps<Exclude<InputTypes, 'select'>>;

declare type SelectInputProps = BaseInputProps<'select'> & {
    select_type?: SelectInputType;
    messageIfEmptyOptions?: React.ReactNode | string;
    options?: SelectInputOptionFormat[];
    position?: string;
};

declare type SelectInputOptionFormat = {
    label: string;
    value: string;
};

declare type InputFieldProps = TextInputProps | SelectInputProps;