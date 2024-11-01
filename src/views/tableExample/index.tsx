"use client";

import dynamic from "next/dynamic";
import TableSwitcher from "@/components/table";
import { fetchPosts } from "@/services/postService";
import { columnsData } from "./variable/columnsData";
import { useCallback, useEffect, useState } from "react";
import { useDefaultNotification } from "@/hooks/DefaultNotificationProvider";

const CustomButton = dynamic(() => import('./components/customBtn'), { ssr: false });

export interface PostExample {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const TableExample = () => {
    const [post, setPosts] = useState<PostExample[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentSize, setCurrentSize] = useState<number>(10);
    const { addDefaultNotification } = useDefaultNotification();
    const [totalPages, setTotalPages] = useState<number | undefined>();
    const [selectedRows, setSelectedRows] = useState<PostExample[]>([]);

    const reloadData = useCallback(async () => {
        setPosts(undefined);
        const { data, totalPages } = await fetchPosts(currentPage, currentSize);
        setPosts(data);
        setTotalPages(totalPages);
    }, [currentPage, currentSize]);

    const rowClickHandler = (value: PostExample) => {
        addDefaultNotification({
            children: (
                <>
                    Bạn vừa nhấn vào post có thông tin:
                    <ul key='post-info' className="w-fit flex flex-col place-items-start max-w-[500px] text-left">
                        <li key='post-id'>- Id: {value.id}</li>
                        <li key='post-title'>- Title: {value.title}</li>
                        <li key='post-body'>- Body: {value.body}</li>
                    </ul>
                </>
            ),
        });
    };

    const renderCell = (cellHeader: string, cellValue: number | string | boolean) => {
        if (cellHeader === 'Tên người dùng' && typeof cellValue === 'number') {
            const names = ['John', 'Alice', 'Bob', 'Eve', 'Michael', 'Sarah', 'David', 'Laura', 'James', 'Emma'];
            const name = names[(cellValue - 1) % names.length];
            return <div className="w-full h-full flex place-items-center">{name}</div>;
        } else if (cellHeader === 'Tiêu đề') {
            return <div className="w-full h-full flex lg:place-items-center">{cellValue}</div>;
        }
    };

    useEffect(() => {
        reloadData();
    }, [reloadData]);

    return (
        <TableSwitcher
            version="1"
            isPaginated={true}
            selectType="multi"
            containerClassname="!rounded-lg p-4"
            fetchPageData={reloadData}
            tableData={post}
            columnsData={columnsData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentSize={currentSize}
            setPageSize={{
                sizeOptions: [5, 10, 15, 20, 25, 30],
                setCurrentSize: setCurrentSize,
            }}
            maxPage={totalPages}
            primaryKey="id"
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            onRowClick={rowClickHandler}
            renderCell={renderCell}
            customButton={<CustomButton fetchData={reloadData} selectedRows={selectedRows} />}
            customNoData={<>Không có lịch sử bài viết</>}
        />
    );
};

export default TableExample;