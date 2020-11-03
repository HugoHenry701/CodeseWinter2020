import api from '../api/api'
export const getAllClass = async () => {
    try {
        const res = await api.get('/user')
        return {
            status: 1,
            data: res.data.data
        }
    } catch (err) {
        return {
            message: 'err',
            status: 0,
        }
    }
}
export const getStudentByID = async (id) => {
    try {
        const res = await api.get(`/user/class/${id}`)
        return {
            status: 1,
            data: res.data
        }
    } catch (err) {
        return {
            message: 'err',
            status: 0,
        }
    }
}
export const getStudent = async (id) => {
    try {
        const res = await api.get(`/user/student/${id}`)
        return {
            status: 1,
            data: res.data
        }
    } catch (err) {
        return {
            message: 'err',
            status: 0,
        }
    }
}