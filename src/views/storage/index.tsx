import CollapsibleSection from "../../components/collapsible_section/collapsible_section";
import { Column } from "react-table";
import FileList from "@/components/file_list/file_list";
import FolderList from "@/components/folder_list/folder_list";
import TaskList from "@/components/task_list/task_list";

// Define the StorageView component
export default function StorageView() {
    // Define users data
    const users: UserType[] = [
        {
            id: "1",
            avatar: "https://example.com/avatar1.jpg",
            name: "John Doe",
            role: "admin",
        },
        {
            id: "2",
            avatar: "https://example.com/avatar2.jpg",
            name: "KHOALE",
            role: "user",
        },
        {
            id: "3",
            avatar: "https://example.com/avatar3.jpg",
            name: "Jane Smith",
            role: "editor",
        },
        {
            id: "4",
            avatar: "https://example.com/avatar4.jpg",
            name: "Alice Johnson",
            role: "viewer",
        },
    ];

    // Define data for files and folders
    const data = {
        file: [
            {
                id: "1",
                name: "Budget planning | Summathon 2025",
                type: "XLSX",
                owner: users[0],
                size: "12MB",
                discussion: 99,
                lastModified: "11:59 PM - 22/03/2022",
                category: "Summathon",
                hasPassword: false,
                path: "abcd/efgh/file",
            },
            {
                id: "2",
                name: "Project Proposal | New Website",
                type: "DOCX",
                owner: users[1],
                size: "3MB",
                discussion: 25,
                lastModified: "10:30 AM - 15/05/2023",
                category: "Proposals",
                hasPassword: false,
                path: "abcd/efgh/file",
            },
            {
                id: "3",
                name: "Meeting Notes | Team Sync",
                type: "TXT",
                owner: users[2],
                size: "200KB",
                discussion: 15,
                lastModified: "9:00 AM - 10/10/2023",
                category: "Notes",
                hasPassword: true,
                path: "abcd/efgh/file",
            },
            {
                id: "4",
                name: "Design Mockups | Mobile App",
                type: "PDF",
                owner: null,
                size: "5MB",
                discussion: 8,
                lastModified: "2:45 PM - 20/01/2024",
                category: "Design",
                hasPassword: true,
                path: "abcd/efgh/file",
            },
            {
                id: "5",
                name: "Data Analysis | Q1 Report",
                type: "CSV",
                owner: users[0],
                size: "1.5MB",
                discussion: 50,
                lastModified: "4:15 PM - 05/04/2024",
                category: "Reports",
                hasPassword: true,
                path: "abcd/efgh/file",
            },
        ] as FileType[],
        folder: [
            {
                id: "1",
                name: "Project Management",
                filesCount: 10,
                foldersCount: 3,
                owner: {
                    id: "1",
                    avatar: "https://example.com/avatar1.jpg",
                    name: "John Doe",
                    role: "admin",
                },
                size: 150, // Size in MB
                lastModified: "2:15 PM - 20/11/2024",
                category: "Management",
                hasPassword: true,
                path: "abcd/efgh/folder",
            },
            {
                id: "2",
                name: "Design Assets",
                filesCount: 5,
                foldersCount: 2,
                owner: {
                    id: "3",
                    avatar: "https://example.com/avatar3.jpg",
                    name: "Jane Smith",
                    role: "editor",
                },
                size: 75, // Size in MB
                lastModified: "11:30 AM - 15/05/2023",
                category: "Design",
                path: "abcd/efgh/folder",
            },
            {
                id: "3",
                name: "Marketing Materials",
                filesCount: 20,
                foldersCount: 1,
                owner: {
                    id: "2",
                    avatar: "https://example.com/avatar2.jpg",
                    name: "KHOALE",
                    role: "user",
                },
                size: 45, // Size in MB
                lastModified: "9:00 AM - 10/10/2023",
                category: "Notes",
                hasPassword: true,
                path: "abcd/efgh/folder",
            },
            {
                id: "4",
                name: "Financial Reports",
                filesCount: 8,
                foldersCount: 0,
                owner: {
                    id: "4",
                    avatar: "https://example.com/avatar4.jpg",
                    name: "Alice Johnson",
                    role: "viewer",
                },
                size: 90, // Size in MB
                lastModified: "4:45 PM - 05/04/2024",
                category: null,
                path: "abcd/efgh/folder",
            },
        ] as FolderType[],
    };

    const tasks = [
        {
            id: "1",
            file: null, // Budget planning
            folder: data.folder[0], // Project Management
            requestedBy: users[0], // John Doe
            to: users[1], // KHOALE
            deadline: "2024-12-31T23:59:59",
            view: users[1],
            comment: [
                {
                    user: users[0],
                    text: "Please review the budget by the end of the year.",
                    date: "2024-11-15T10:00:00",
                },
                {
                    user: users[1],
                    text: "Sure! I'll get to it soon.",
                    date: "2024-11-16T12:30:00",
                },
            ],
            frequency: "One-time",
        },
        {
            id: "2",
            file: data.file[1], // Project Proposal
            folder: null, // Design Assets
            requestedBy: users[1], // KHOALE
            to: users[2], // Jane Smith
            deadline: "2024-11-30T17:00:00",
            view: users[2],
            comment: [],
            frequency: "One-time",
        },
        {
            id: "3",
            file: null, // Meeting Notes
            folder: data.folder[2], // Marketing Materials
            requestedBy: users[2], // Jane Smith
            to: users[3], // Alice Johnson
            deadline: "2024-12-10T12:00:00",
            view: users[3],
            comment: [
                {
                    user: users[3],
                    text: "I have reviewed the notes.",
                    date: "2024-12-01T09:15:00",
                },
            ],
            frequency: "Weekly",
        },
        {
            id: "4",
            file: data.file[3], // Design Mockups
            folder: null, // Project Management
            requestedBy: users[3], // Alice Johnson
            to: users[1], // KHOALE
            deadline: "2024-12-15T15:00:00",
            view: users[1],
            comment: [],
            frequency: "One-time",
        },
        {
            id: "5",
            file: data.file[4], // Data Analysis
            folder: null, // Financial Reports
            requestedBy: users[0], // John Doe
            to: users[2], // Jane Smith
            deadline: "2024-12-20T10:00:00",
            view: users[2],
            comment: [
                {
                    user: users[2],
                    text: "I'll analyze the data and provide insights.",
                    date: "2024-12-05T14:00:00",
                },
            ],
            frequency: "Monthly",
        },
    ] as TaskType[];

    // Return the JSX for the StorageView component

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">VIStorage</h1>
            <CollapsibleSection title="Suggested">
                <div>
                    <h3 className="text-lg font-bold">File</h3>
                    <FileList fileList={data.file} />
                    <h3 className="text-lg font-bold mt-6">Folder</h3>
                    <FolderList folderList={data.folder} />
                </div>
            </CollapsibleSection>
            <CollapsibleSection title="In Progress">
                <div>
                    <h3 className="text-lg font-bold">Regular Tasks</h3>
                    <TaskList taskList={tasks} />
                </div>
            </CollapsibleSection>
        </div>
    );
}
