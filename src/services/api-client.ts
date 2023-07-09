import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '04c5d542ad564a9388a4de48ee2caee0'
    }
})