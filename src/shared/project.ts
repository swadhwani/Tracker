import { Members } from './members';

export interface Project {
    id: number;
    name: string;
    dafaultUser: string;
    members: Members[];
}