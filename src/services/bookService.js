import axios from "axios";
const baseUrl = "http://localhost:3005/books"

function getAll() {
    const config = {
        headers:
        {
            Authorization:
                `bearer ${window.localStorage.getItem('token')}`
        }
    }
    return axios.get(baseUrl, config)
}

function create(newBook) {
    const config = {
        headers:
        {
            Authorization:
                `bearer ${window.localStorage.getItem('token')}`
        }
    }
    return axios.post(baseUrl, newBook, config)
}

function createReview(bookId, newReview) {
    const config = {
        headers:
        {
            Authorization:
                `bearer ${window.localStorage.getItem('token')}`
        }
    }

    return axios.post(`${baseUrl}/${bookId}/reviews`, newReview, config)
}

function getAllReviews(bookId) {
    const config = {
        headers:
        {
            Authorization:
                `bearer ${window.localStorage.getItem('token')}`
        }
    }
    return axios.get(`${baseUrl}/${bookId}/reviews`, config)
}

export default { getAll, create, createReview, getAllReviews }