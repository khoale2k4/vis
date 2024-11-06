"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import { NotificationsProvider } from "./NotificationsProvider";
import { SubmitNotificationProvider } from "./SubmitNotificationProvider";
import { DefaultNotificationProvider } from "./DefaultNotificationProvider";

export default function ProviderWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Provider store={store}>
            <NotificationsProvider>
                <SubmitNotificationProvider>
                    <DefaultNotificationProvider>
                        {children}
                    </DefaultNotificationProvider>
                </SubmitNotificationProvider>
            </NotificationsProvider>
        </Provider>
    );
};