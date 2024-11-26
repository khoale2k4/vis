"use client";

import { pricingData } from "./variables";
import PricingCard from "./components/pricingCard";
import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideInView from "@/components/effect/slideInView";
import { useScreenView } from "@/hooks/ScreenViewProvider";

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
        scale: 0,
    }),
};

const swipeConfidenceThreshold = 10;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export default function PricingContent() {
    const { isXL } = useScreenView();
    const [[page, direction], setPage] = useState([0, 0]);
    const itemCount = pricingData.length;

    const paginate = useCallback(
        (targetPage: number) => {
            if (targetPage >= 0 && targetPage < itemCount) {
                const newDirection = targetPage > page ? 1 : targetPage < page ? -1 : 0;
                setPage([targetPage, newDirection]);
            }
        },
        [page, itemCount]
    );

    const handlePagination = (nextPage: number) => {
        if (nextPage >= 0 && nextPage < itemCount) {
            paginate(nextPage);
        }
    };

    return (
        <div className="flex flex-col items-center h-fit pb-24 xl:pb-8 max-w-screen overflow-clip mt-24">
            <div className="flex flex-col items-center">
                <SlideInView direction="left2right" duration={1}>
                    <h2 className="font-bold text-4xl text-darkblue-500 lg:text-6xl">The Prices</h2>
                </SlideInView>
                <SlideInView direction="right2left" duration={1.2}>
                    <p className="font-normal text-xl lg:text-2xl text-darkblue-500 -mt-5 lg:-mt-2">Is no more of a problem</p>
                </SlideInView>
            </div>

            {!isXL ? (
                <div className="grid grid-cols-1 gap-4 pt-6 xl:grid-cols-4">
                    {pricingData.map((pricing, index) => (
                        <SlideInView key={index} direction="bot2top" duration={0.5 + index * 0.3}>
                            <PricingCard
                                key={index}
                                title={pricing.title}
                                subtitle={pricing.subtitle}
                                price={pricing.price}
                                period={pricing.period}
                                features={pricing.features}
                                buttonText={pricing.buttonText}
                                buttonId={pricing.buttonId}
                                buttonColor={pricing.buttonColor as ButtonColors}
                            />
                        </SlideInView>
                    ))}
                </div>
            ) : (
                <div className="relative flex pt-6 lg:pt-6">
                    <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                        {[...Array(6)].map((_, offset) => {
                            const index = offset - 1;
                            const isCenter = page === index;
                            const isVisible = index >= page - 1 && index <= page + 1;

                            return (
                                <motion.div
                                    key={index}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        opacity: { duration: 0.5 },
                                        scale: { duration: 0.5 },
                                        x: { duration: 0.5 },
                                        width: { duration: 0 },
                                    }}
                                    layout
                                    className={`group ${isCenter ? 'z-10' : 'z-0'}`}
                                    style={{
                                        width: isVisible ? 'auto' : '0px',
                                        overflow: isVisible ? 'visible' : 'hidden',
                                    }}
                                    onClick={() => {
                                        if (isVisible) { handlePagination(index); };
                                    }}
                                    drag={isCenter ? "x" : false}
                                    dragConstraints={isCenter ? { left: 0, right: 0 } : undefined}
                                    dragElastic={isCenter ? 1 : undefined}
                                    onDragEnd={(_, { offset, velocity }) => {
                                        if (isCenter) {
                                            const swipe = swipePower(offset.x, velocity.x);
                                            if (swipe < -swipeConfidenceThreshold && page < itemCount - 1) {
                                                handlePagination(page + 1);
                                            } else if (swipe > swipeConfidenceThreshold && page > 0) {
                                                handlePagination(page - 1);
                                            }
                                        }
                                    }}
                                >
                                    {index < 0 || index >= itemCount ? (
                                        <div className="w-[265px] h-[580px] scale-80" />
                                    ) : (
                                        <PricingCard
                                            active={page === index}
                                            title={pricingData[index].title}
                                            subtitle={pricingData[index].subtitle}
                                            price={pricingData[index].price}
                                            period={pricingData[index].period}
                                            features={pricingData[index].features}
                                            buttonText={pricingData[index].buttonText}
                                            buttonId={pricingData[index].buttonId}
                                            buttonColor={pricingData[index].buttonColor as ButtonColors}
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                    <div className="absolute -bottom-12 flex justify-center place-items-center w-full space-x-2 mt-6">
                        {pricingData.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${page === index ? 'bg-darkblue-500' : 'bg-gray-400 scale-90'}`}
                                onClick={() => paginate(index)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}