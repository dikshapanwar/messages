import { Message } from "@/models/User";
export interface ApiResponse {
    status: string;
    message: string;
    isAccpectingMessage?: boolean;
    messages?: Message[];
}