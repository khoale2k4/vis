import { FC } from "react";
import RenderCase from "../render";
import TextInputV1 from "./textversions/v1";
import TextInputV2 from "./textversions/v2";
import SelectInputV1 from "./selectversions/v1";
const SELECT_INPUT_SWITCHER_VERSIONS: Record<SelectInputVersion, FC<SelectInputProps>> = {
    '1': SelectInputV1,
};

const TEXT_INPUT_SWITCHER_VERSIONS: Record<TextInputVersion, FC<TextInputProps>> = {
    '1': TextInputV1,
    '2': TextInputV2,
};

const CustomInputField = ({ version = '1', label, type, ...props }: InputFieldProps) => {
    const SelectInputComponent = SELECT_INPUT_SWITCHER_VERSIONS[(version ?? '1') as SelectInputVersion] || (() => <></>);
    const TextInputComponent = TEXT_INPUT_SWITCHER_VERSIONS[(version ?? '1') as TextInputVersion] || (() => <></>);
    return (
        <div>
            {label}
            <RenderCase renderIf={type === 'select'}>
                <SelectInputComponent {...(props as SelectInputProps)} />
            </RenderCase>
            <RenderCase renderIf={type !== 'select'}>
                <TextInputComponent type={type} {...(props as TextInputProps)} />
            </RenderCase>
        </div>
    );
};

export default CustomInputField;