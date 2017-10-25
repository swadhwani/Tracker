import { Comment } from './comment';    

export interface Ticket {
    id: number;
    number: number;
    project: string;
    createdBy: string;
    assignedTo: string;
    category: string;
    priority: string; 
    shortDesc: string; 
    status: string;
    lastUpdatedBy: string;
    comments: Comment[];
}