import { PostExample } from "..";
import { Column } from "react-table";

export const columnsData: Column<PostExample>[] = [
    {
        Header: "Tên người dùng",
        accessor: "userId",
    },
    {
        Header: "Tiêu đề",
        accessor: "title",
    },
    {
        Header: "Nội dung bài viết",
        accessor: "body",
    },
];