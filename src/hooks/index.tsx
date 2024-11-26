"use client";

import { store } from "@/store";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { ScreenViewProvider } from "./ScreenViewProvider";
import { AuthenticationProvider } from "./AuthenticationProvider";
import { SubmitNotificationProvider } from "./SubmitNotificationProvider";
import { DefaultNotificationProvider } from "./DefaultNotificationProvider";
import { SessionProvider } from "./SessionProvider";
export default function ProviderWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Provider store={store}>
            <DefaultNotificationProvider>
                <SubmitNotificationProvider>
                    <AuthenticationProvider>
                        <ScreenViewProvider>
                            <SessionProvider>
                                <Toaster closeButton expand={false} richColors position="top-center" />
                                {children}
                            </SessionProvider>
                        </ScreenViewProvider>
                    </AuthenticationProvider>
                </SubmitNotificationProvider>
            </DefaultNotificationProvider>
        </Provider>
    );
};