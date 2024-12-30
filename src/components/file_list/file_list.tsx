import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useCallback, useState, useEffect, useRef } from "react";

interface Props {
    fileList: FileType[];
}

const fileColumns: Column[] = [
    { key: "name", label: "Tên File", align: "start" },
    { key: "owner", label: "Chủ sở hữu", align: "start" },
    { key: "size", label: "Kích thước", align: "center" },
    { key: "discussion", label: "Người trao đổi", align: "center" },
    { key: "lastModified", label: "Chỉnh sửa gần nhất", align: "center" },
    { key: "category", label: "", align: "end" },
    { key: "dots", label: "", align: "end" },
];

export default function FileList({ fileList }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = (event: React.MouseEvent<HTMLTableRowElement>, file: FileType) => {
        event.preventDefault(); // Prevent the default context menu
        setMenuPosition({ x: event.clientX, y: event.clientY }); // Set position based on mouse click
        setIsMenuOpen(true); // Open your custom menu
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getFileIcon = (fileType: string) => {
        switch (fileType) {
            case 'XLSX':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 384 512"><path fill="#50bd00" d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM155.7 250.2l36.3 51.9l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4l46.3-66.2l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z" /></svg>
                );
            case 'DOCX':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 384 512"><path fill="#248afb" d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM111 257.1l26.8 89.2l31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3l26.6-89.2c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z" /></svg>
                );
            case 'TXT':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 384 512"><path fill="#4f4f4f" d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM112 256h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16" /></svg>
                );
            case 'PDF':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 384 512"><path fill="#f00" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-32c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16v96zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16z" /></svg>
                );
            case 'CSV':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 384 512"><path fill="#13a405" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zM200 352h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40m133.1 0H368c8.8 0 16 7.2 16 16s-7.2 16-16 16h-34.9c-7.2 0-13.1 5.9-13.1 13.1c0 5.2 3 9.9 7.8 12l37.4 16.6c16.3 7.2 26.8 23.4 26.8 41.2c0 24.9-20.2 45.1-45.1 45.1H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9c7.2 0 13.1-5.9 13.1-13.1c0-5.2-3-9.9-7.8-12l-37.4-16.6c-16.3-7.2-26.8-23.4-26.8-41.2c0-24.9 20.2-45.1 45.1-45.1m98.9 0c8.8 0 16 7.2 16 16v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V368c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V368c0-8.8 7.2-16 16-16" /></svg>
                );
            default:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 384 512"><path fill="#000" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm384 64H256V0z" /></svg>
                );
        }
    };

    const renderFileCell = useCallback((file: FileType, columnKey: FileColumnKey) => {
        switch (columnKey) {
            case "name":
                return (
                    <div className="flex items-center space-x-4">
                        {getFileIcon(file.type)}
                        <div>
                            <p className="font-semibold text-gray-800">{file.name}</p>
                            <p className="text-gray-500 text-sm custom-cursor-on-hover">
                                <span>{file.type} file</span>
                                {file.hasPassword && <span className="text-orange-500 custom-cursor-on-hover mx-1">|**</span>}
                            </p>
                        </div>
                    </div>
                );
            case "owner":
                if (!file.owner) return (
                    <span className="italic text-gray-500 text-sm custom-cursor-on-hover">
                        Hidden
                    </span>
                );
                return (
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-200 text-green-800 font-semibold text-xs rounded-full flex items-center justify-center">
                            avt
                        </div>
                        <div>
                            <div className="text-gray-700">
                                {file.owner?.name + " "}
                                <span className="font-semibold text-blue-700 text-sm custom-cursor-on-hover">
                                    | {file.owner?.role}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            case "size":
                return file.size;
            case "lastModified":
                return file.lastModified;
            case "discussion":
                return file.discussion;
            case "category":
                return (
                    <div>
                        {file.category && <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm custom-cursor-on-hover">
                            {file.category}
                        </span>}
                    </div>
                );
            case "dots":
                return (
                    <div className="relative inline-block" ref={menuRef}>
                        <div
                            className="flex flex-col items-center justify-center gap-[2px] 
                           text-gray-400 hover:text-gray-600 cursor-pointer"
                            onClick={() => setIsMenuOpen(prev => !prev)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 128 512"><path fill="#000000" d="M64 360a56 56 0 1 0 0 112a56 56 0 1 0 0-112m0-160a56 56 0 1 0 0 112a56 56 0 1 0 0-112m56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0" /></svg>
                        </div>

                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Tùy chọn 1</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Tùy chọn 2</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Tùy chọn 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                );
            default:
                return null;
        }
    }, [isMenuOpen]);

    return (
        <div className="p-4 bg-white">
            <Table aria-label="File List" removeWrapper>
                <TableHeader columns={fileColumns}>
                    {(column) => (
                        <TableColumn key={column.key} align={column.align} className="border-none bg-white">
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={fileList} emptyContent="Không có file/folder nào.">
                    {(file) => (
                        <TableRow
                            key={file.id}
                            className="cursor-pointer hover:bg-gray-100 border-b border-t"
                            onContextMenu={(event) => handleContextMenu(event, file)} // Add right-click event handler
                        >
                            {(columnKey) => (
                                <TableCell>{renderFileCell(file, columnKey as FileColumnKey)}</TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {/* Custom Context Menu */}
            {isMenuOpen && (
                <div
                    className="absolute"
                    style={{
                        top: menuPosition.y,
                        left: menuPosition.x,
                        zIndex: 10,
                    }}
                    ref={menuRef}
                >
                    <div className="bg-white border border-gray-200 rounded shadow-lg">
                        <ul className="py-1">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Tùy chọn 1</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Tùy chọn 2</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Tùy chọn 3</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}