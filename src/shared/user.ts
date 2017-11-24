import { UserProject } from './userProject';  

export interface User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string; 
    projects: UserProject[];
}