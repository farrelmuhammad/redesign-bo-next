import { ReactElement } from 'react';

export interface MenuItem {
    id: number;
    icon?: string; // Menggunakan React.ElementType untuk icon
    label: string;
    path?: string;
    subMenuItems?: MenuItem[];
}