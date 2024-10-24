declare type TextInputVersion = '1';

declare type SelectInputVersion = '1';

declare type SelectInputType = 'single' | 'multi';

declare type InputState = 'error' | 'success' | 'default';

declare type InputTypes = 'select' | 'text' | 'number' | 'password' | 'date' | 'text-area';

declare type BaseInputProps<T extends InputTypes, V extends T extends 'select' ? string[] : string> = {
    type: T;
    version?: T extends 'select' ? SelectInputVersion : TextInputVersion;

    id?: string;
    className?: string;
    state?: InputState;

    label?: React.ReactNode | string;
    placeholder?: string;
    isClearable?: boolean;
    disabled?: boolean;

    value: V;
    setValue: React.Dispatch<React.SetStateAction<V>> | ((_value: V) => void);
};

declare type TextInputProps = BaseInputProps<Exclude<InputTypes, 'select'>>;

declare type SelectInputProps = BaseInputProps<'select'> & {
    select_type?: SelectInputType;
    messageIfEmptyOptions?: React.ReactNode | string;
    options?: SelectInputOptionFormat[];
    position?: string;
    dropdownPosition?: DropdownPosition;
};

declare type SelectInputOptionFormat = {
    label: string;
    value: string;
};

declare type InputFieldProps = TextInputProps | SelectInputProps;