import { ServerResponse } from 'http';

export interface NextPageResponse extends ServerResponse {
    locals?: Locals;
}

export interface Locals {
    data?: string;
}