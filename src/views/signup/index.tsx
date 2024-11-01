"use client";

import { useState } from "react";
import SignUpContent from "./content";
import RenderCase from "@/components/render";
import DetailPopup from "@/components/popup";
import CustomButton from "@/components/button";
import { MdAccountCircle } from "react-icons/md";
import Tooltip from "@/components/tooltip";
import Container from "@/components/container";

const SignUpButton = () => {
    const [openSignUp, setOpenSignUp] = useState<boolean>(false);

    const handleButtonClick = () => {
        setOpenSignUp(true);
    };

    const handleCloseSignUp = () => {
        setOpenSignUp(false);
    };
    return (
        <>
            <Tooltip
                placement="bottom"
                content={
                    <Container className='p-2 !rounded-md border max-w-[calc(100dvw-16px)]'>
                        Mẫu sử dụng popup và các input field
                    </Container>
                }
            >
                <div>
                    <CustomButton
                        onClick={handleButtonClick}
                        className="bg-lightContainer dark:!bg-darkContainer h-fit w-fit flex
                justify-center py-1 -ml-1.5 rounded-md !px-1.5 sm:!px-4 min-w-0 border-2 border-blue-500 text-blue-500">
                        Đăng ký
                    </CustomButton>
                </div>
            </Tooltip>

            <RenderCase renderIf={openSignUp}>
                <DetailPopup onClose={handleCloseSignUp} title="Đăng ký tài khoản" customWidth="w-fit" icon={<MdAccountCircle className="w-full h-full" />}>
                    <SignUpContent />
                </DetailPopup>
            </RenderCase>
        </>
    );
};

export default SignUpButton;