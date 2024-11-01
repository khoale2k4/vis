import { PostExample } from "@/views/tableExample";

export const fetchPosts = async (page: number, pageSize: number): Promise<{ data: PostExample[]; totalPages: number | undefined }> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const allData: PostExample[] = await res.json();

    const start = (page - 1) * pageSize;
    const paginatedData = allData.slice(start, start + pageSize);

    return {
        data: paginatedData,
        totalPages: Math.ceil(allData.length / pageSize),
    };
};