"use client";

import { FC } from "react";
import RenderCase from "../render";
import CustomButtonV1 from "./versions/v1";
import CustomButtonV2 from "./versions/v2";
const BUTTON_SWITCHER_VERSIONS: Record<ButtonVersion, FC<ButtonVersionProps>> = {
    '1': CustomButtonV1,
    '2': CustomButtonV2,
};

const CustomButton = ({ version, children, ...props }: ButtonProps) => {
    const VersionComponent = BUTTON_SWITCHER_VERSIONS[version ?? '1'] || null;

    return (
        <RenderCase renderIf={true}>
            <VersionComponent {...props}>
                {children}
            </VersionComponent>
        </RenderCase>
    );
};

export default CustomButton;