import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'http://localhost:4000/api'
})

export default journalApi