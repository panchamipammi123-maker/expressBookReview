const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Sub Question 4: Retrieve all books
async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Sub Question 1: Retrieve book details based on author
async function getBooksByAuthor(author) {
    try {
        const res = await axios.get(`${BASE_URL}/author/${author}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Sub Question 2: Retrieve book details based on title
async function getBooksByTitle(title) {
    try {
        const res = await axios.get(`${BASE_URL}/title/${title}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Sub Question 3: Retrieve book details based on ISBN
async function getBookByIsbn(isbn) {
    try {
        const res = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllBooks,
    getBooksByAuthor,
    getBooksByTitle,
    getBookByIsbn
};
