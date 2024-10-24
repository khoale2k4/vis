import Tooltip from "@/components/tooltip";
import Container from "@/components/container";
import CustomInputField from "@/components/input";
import { IoInformationCircleOutline } from "react-icons/io5";
import { ExampleSignUpFieldType, ExampleSignUpForm } from "./content";

interface ExampleSignUpFieldProps {
    data: ExampleSignUpForm;
    fields: ExampleSignUpFieldType[];
}

const ExampleSignUpField = ({ data, fields }: ExampleSignUpFieldProps) => {
    return fields.map(({ id, type, label, disable, version, setValue, isClearable,
        options, select_type, state, tooltip_message, dropdownPosition }: ExampleSignUpFieldType) => (
        <CustomInputField key={id} id={id} type={type} value={data[id]} setValue={(value: string | string[]) => setValue(id, value)} state={state}
            version={version} disable={disable} options={options} select_type={select_type} isClearable={isClearable} dropdownPosition={dropdownPosition}
            label={
                <div className='flex gap-1 place-items-center relative'>
                    {label}
                    <Tooltip
                        placement='bottom'
                        content={
                            <Container className='p-2 !rounded-md border w-full'>
                                {tooltip_message}
                            </Container>
                        }
                    >
                        <span><IoInformationCircleOutline className='mt-0.5' /></span>
                    </Tooltip>
                </div>
            } />
    ));
};

export default ExampleSignUpField;