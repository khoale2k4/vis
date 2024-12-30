import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useCallback, useState, useEffect, useRef } from "react";

interface Props {
    folderList: FolderType[];
}

const folderColumns: Column[] = [
    { key: "name", label: "Tên Folder", align: "start" },
    { key: "owner", label: "Chủ sở hữu", align: "start" },
    { key: "size", label: "Kích thước", align: "center" },
    { key: "lastModified", label: "Chỉnh sửa gần nhất", align: "center" },
    { key: "category", label: "", align: "end" },
    { key: "dots", label: "", align: "end" },
];

export default function FolderList({ folderList }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = (event: React.MouseEvent<HTMLTableRowElement>, folder: FolderType) => {
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

    const getCategoryColor = (category: string) => {
        if (category === "Notes") {
            return (
                <div>
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded text-sm custom-cursor-on-hover">
                        {category}
                    </span>
                </div>
            );
        }
        else if (category === "Design") {
            return (
                <div>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm custom-cursor-on-hover">
                        {category}
                    </span>
                </div>
            );
        }
        else if (category === "Proposals") {
            return (
                <div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm custom-cursor-on-hover">
                        {category}
                    </span>
                </div>
            );
        }
        return (
            <div>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm custom-cursor-on-hover">
                    {category}
                </span>
            </div>
        );
    }

    const renderFolderCell = useCallback((folder: FolderType, columnKey: FolderColumnKey) => {
        switch (columnKey) {
            case "name":
                return (
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 512 512"><path fill="currentColor" d="M64 480h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8l-19.2-25.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64" /></svg>
                        <div>
                            <p className="font-semibold text-gray-800">{folder.name}</p>
                            <p className="text-gray-500 text-sm custom-cursor-on-hover">
                                <span>{folder.foldersCount} folders</span>
                                <span className="mx-1">|</span>
                                <span>{folder.filesCount} files</span>
                                {folder.hasPassword && <span className="text-orange-500 custom-cursor-on-hover mx-1">|**</span>}
                            </p>
                        </div>
                    </div>
                );
            case "owner":
                if (!folder.owner) return (
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
                                {folder.owner?.name + " "}
                                <span className="font-semibold text-blue-700 text-sm custom-cursor-on-hover">
                                    | {folder.owner?.role}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            case "size":
                return folder.size;
            case "lastModified":
                return folder.lastModified;
            case "category":
                return (
                    <div>
                        {folder.category && getCategoryColor(folder.category)}
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
            <Table aria-label="Folder List" removeWrapper>
                <TableHeader columns={folderColumns}>
                    {(column) => (
                        <TableColumn key={column.key} align={column.align} className="border-none bg-white">
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={folderList} emptyContent="Không có folder nào.">
                    {(folder) => (
                        <TableRow
                            key={folder.id}
                            className="cursor-pointer hover:bg-gray-100 border-b border-t"
                            onContextMenu={(event) => handleContextMenu(event, folder)} // Add right-click event handler
                        >
                            {(columnKey) => (
                                <TableCell>{renderFolderCell(folder, columnKey as FolderColumnKey)}</TableCell>
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