"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import { NotificationsProvider } from "./NotificationsProvider";
import { SubmitNotificationProvider } from "./SubmitNotificationProvider";
import { DefaultNotificationProvider } from "./DefaultNotificationProvider";
import { ScreenViewProvider } from "./ScreenViewProvider";
import { SessionProvider } from "./SessionProvider";
import { Toaster } from "sonner";
export default function ProviderWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Provider store={store}>
            <NotificationsProvider>
                <SubmitNotificationProvider>
                    <DefaultNotificationProvider>
                        <ScreenViewProvider>
                            <SessionProvider>
                            <Toaster closeButton  expand={false} richColors position="top-center" />
                            {children}
                            </SessionProvider>
                        </ScreenViewProvider>
                    </DefaultNotificationProvider>
                </SubmitNotificationProvider>
            </NotificationsProvider>
        </Provider>
    );
};