declare type UserType = {
    id: string;
    avatar: string;
    name: string;
    role: string;
}

declare type Column = {
    key: string;
    label: string;
    align: "start" | "center" | "end";
};

declare type FolderType = {
    id: string;
    name: string;
    path: string;
    filesCount: number;
    foldersCount: number;
    owner: UserType | null;
    size: number;
    lastModified: string;
    category: string | null;
    hasPassword: boolean;
}

declare type FolderColumnKey = "name" | "owner" | "size" | "lastModified" | "category" | "dots";

declare type FileType = {
    id: string;
    name: string;
    type: string;
    path: string;
    description: string;
    owner: UserType | null;
    size: string;
    discussion: number;
    lastModified: string;
    category: string;
    hasPassword: boolean;
};

declare type FileColumnKey = "name" | "owner" | "size" | "discussion" | "lastModified" | "category" | "dots";

declare type MessageType = {
    user: UserType;
    text: string;
    date: string;
};

declare type TaskType = {
    id: string;
    file: FileType | null;
    folder: FolderType | null;
    requestedBy: UserType;
    to: UserType;
    deadline: string;
    view: UserType;
    comment: MessageType[];
    frequency: string;
};

declare type TaskColumnKey = "name" | "requestedBy" | "frequency" | "path";

declare type TaskAwaitingColumnKey = "name" | "requestedBy" | "to" | "path";