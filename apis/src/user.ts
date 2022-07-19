import api from './api'
export const userApi = {
    getUser: (id: number) => api.get(`/api/users/${id}`),
    getUserByUid: (uid: string) => Promise.resolve(uid),
    createUser: (data: Record<string, any>) => api.post('/api/users', data)
}