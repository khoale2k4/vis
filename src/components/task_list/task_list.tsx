
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@nextui-org/modal";
import { useCallback, useState, useEffect, useRef } from "react";
import React from "react";

interface Props {
    taskList: TaskType[];
}

const taskColumns: Column[] = [
    { key: "name", label: "Tên Folder", align: "start" },
    { key: "requestedBy", label: "Người gửi", align: "start" },
    // { key: "to", label: "Người nhận", align: "center" },
    { key: "frequency", label: "Tần suất", align: "center" },
    { key: "path", label: "Đường dẫn", align: "end" },
];

export default function TaskList({ taskList }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleExpand = (taskId: string) => {
        setExpandedTaskId((prev) => (prev === taskId ? null : taskId));
        console.warn(expandedTaskId);
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

    const renderFolderCell = useCallback((task: TaskType, columnKey: TaskColumnKey) => {
        switch (columnKey) {
            case "name":
                return (
                    <div className="flex items-center space-x-4">
                        {task.folder &&
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 512 512"><path fill="currentColor" d="M64 480h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8l-19.2-25.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64" /></svg>
                                <div>
                                    <p className="font-semibold text-gray-800">{task.folder.name}</p>
                                    <p className="text-gray-500 text-sm custom-cursor-on-hover">
                                        <span>{task.folder.foldersCount} folders</span>
                                        <span className="mx-1">|</span>
                                        <span>{task.folder.filesCount} files</span>
                                        {task.folder.hasPassword && <span className="text-orange-500 custom-cursor-on-hover mx-1">|**</span>}
                                    </p>
                                </div>
                            </div>}
                        {task.file &&
                            <div className="flex items-center space-x-4">
                                {getFileIcon(task.file.type)}
                                <div>
                                    <p className="font-semibold text-gray-800">{task.file.name}</p>
                                    <p className="text-gray-500 text-sm custom-cursor-on-hover">
                                        <span>{task.file.type} file</span>
                                        {task.file.hasPassword && <span className="text-orange-500 custom-cursor-on-hover mx-1">|**</span>}
                                    </p>
                                </div>
                            </div>}
                    </div>
                );
            case "requestedBy":
                if (!task.folder?.owner && !task.file?.owner) {
                    return (
                        <span className="italic text-gray-500 text-sm custom-cursor-on-hover">
                            Hidden
                        </span>
                    )
                };
                return (
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-200 text-green-800 font-semibold text-xs rounded-full flex items-center justify-center">
                            avt
                        </div>
                        <div>
                            {task.folder && <div className="text-gray-700">
                                {task.folder?.owner?.name + " "}
                                <span className="font-semibold text-blue-700 text-sm custom-cursor-on-hover">
                                    | {task.folder?.owner?.role}
                                </span>
                            </div>}
                            {task.file && <div className="text-gray-700">
                                {task.file?.owner?.name + " "}
                                <span className="font-semibold text-blue-700 text-sm custom-cursor-on-hover">
                                    | {task.file?.owner?.role}
                                </span>
                            </div>}
                        </div>
                    </div>
                );
            case "frequency":
                return task.frequency;
            case "path":
                if (task.folder) return task.folder?.path;
                return task.file?.path;
            default:
                return null;
        }
    }, [isMenuOpen]);

    const renderTaskDetails = (task: TaskType) => {
        return (
            <div className="p-4 border border-gray-200">
                <h3 className="font-semibold">Chi tiết Task:</h3>
                <p><strong>Tần suất:</strong> {task.frequency}</p>
                {/* Thêm các thông tin chi tiết khác nếu cần */}
            </div>
        );
    };

    return (
        <div className="p-4 bg-white">
            <Table aria-label="Folder List" removeWrapper>
                <TableHeader columns={taskColumns}>
                    {(column) => (
                        <TableColumn key={column.key} align={column.align} className="border-none bg-white text-blue-900">
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>

                <TableBody id={"table-body"}>
                    {taskList.map((task) => (
                        <>
                            <TableRow
                                key={task.id}
                                className={`cursor-pointer ${expandedTaskId !== task.id ? "hover:bg-gray-100 border-b" : "bg-gray-300"} border-t`}
                                onClick={() => toggleExpand(task.id)}
                            >
                                {(columnKey) => (
                                    <TableCell>{renderFolderCell(task, columnKey as TaskColumnKey)}</TableCell>
                                )}
                            </TableRow>
                            {expandedTaskId === task.id && (
                                <TableRow
                                    className={`cursor-pointer hover:bg-gray-100`}
                                    key={`${task.id}-view`}>
                                    <TableCell>View</TableCell>
                                    <TableCell>View</TableCell>
                                    <TableCell>View</TableCell>
                                    <TableCell>View</TableCell>
                                </TableRow>
                            )}
                            {expandedTaskId === task.id && (
                                <TableRow
                                    className={`cursor-pointer hover:bg-gray-100`}
                                    key={`${task.id}-comment`}>
                                    <TableCell>Comment</TableCell>
                                    <TableCell>Comment</TableCell>
                                    <TableCell>Comment</TableCell>
                                    <TableCell>Comment</TableCell>
                                </TableRow>
                            )}
                            {expandedTaskId === task.id && (
                                <TableRow
                                    className={`cursor-pointer hover:bg-gray-100`}
                                    key={`${task.id}-edit`}>
                                    <TableCell>Edit</TableCell>
                                    <TableCell>Edit</TableCell>
                                    <TableCell>Edit</TableCell>
                                    <TableCell>Edit</TableCell>
                                </TableRow>
                            )}
                            {expandedTaskId === task.id && (
                                <TableRow
                                    className={`cursor-pointer hover:bg-gray-100`}
                                    key={`${task.id}-note`}>
                                    <TableCell>Note</TableCell>
                                    <TableCell>Note</TableCell>
                                    <TableCell>Note</TableCell>
                                    <TableCell>Note</TableCell>
                                </TableRow>
                            )}
                        </>
                    ))}
                </TableBody>

            </Table>

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