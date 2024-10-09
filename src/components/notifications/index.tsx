'use client';

import { RootState } from '@/store';
import Container from '../container';
import { MdClose } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { removeNotification } from '@/store/action/notificationsSlice';
import NotificationContent from '../../views/components/notifications/main';
import NotificationHeader from '../../views/components/notifications/header';

const Notifications = () => {
    const dispatch = useDispatch();
    const notifications = useSelector((state: RootState) => state.notifications.notifications);
    const [progresses, setProgresses] = useState<Record<string, number>>({});

    const handleCloseNotification = (id: string) => {
        dispatch(removeNotification(id));
        setProgresses((prev) => {
            const { [id]: _, ...rest } = prev;
            return rest;
        });
    }

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        notifications.forEach((notification) => {
            if (!(notification.id in progresses)) {
                setProgresses((prev) => ({ ...prev, [notification.id]: 5000 }));

                const timer = setTimeout(() => {
                    dispatch(removeNotification(notification.id));
                    setProgresses((prev) => {
                        const { [notification.id]: _, ...rest } = prev;
                        return rest;
                    });
                }, 5000);
                timers.push(timer);
            }
        });

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [notifications, progresses, dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgresses((prev) => {
                const newProgresses = { ...prev };
                Object.keys(newProgresses).forEach((id) => {
                    if (newProgresses[id] > 0) {
                        newProgresses[id] -= 100;
                    } else {
                        dispatch(removeNotification(id));
                        delete newProgresses[id];
                    }
                });

                return newProgresses;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div className="fixed bottom-4 right-4 w-52 flex flex-col gap-4">
            <AnimatePresence>
                {notifications.slice().reverse().map((notification) => {
                    const progressWidth = (progresses[notification.id] || 0) / 5000 * 100;
                    return (
                        <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }} layout
                            transition={{ animate: { duration: 0.7 }, exit: { duration: 0.2 } }}
                        >
                            <Container className='p-2 px-3 !rounded-md !shadow-md overflow-clip relative'>
                                <div className="flex justify-between items-center">
                                    <NotificationHeader title={notification.title} type={notification.type} />
                                    <button
                                        className="text-black hover:text-gray-500"
                                        onClick={() => handleCloseNotification(notification.id)}
                                    >
                                        <MdClose />
                                    </button>
                                </div>

                                <NotificationContent message={notification.message} progressWidth={progressWidth} />
                            </Container>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default Notifications;
