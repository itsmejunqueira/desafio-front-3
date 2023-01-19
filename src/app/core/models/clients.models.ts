export type TClients = {
    id?: number;
    name: string;
    phone: string;
    date?: string;
}

export type THeader = {
    canSort: boolean;
    isSorted: boolean;
    isAsc: boolean;
    label: string;
    property: string;
}