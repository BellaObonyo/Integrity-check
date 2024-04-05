import { get, post, put } from './utils';

export async function getIncidents(page, size) {
    return get(`/incidents?page=${page}&size=${size}`);
}