import axios from "axios";

export default {
    // Gets all books
    //   getBooks: function() {
    //     return axios.get("/api/books");
    //   },
    // Gets the book with the given id
    //   getBook: function(id) {
    //     return axios.get("/api/books/" + id);
    //   },
    // Deletes the book with the given id
    //   deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    //   },
    // Saves a book to the database
    createNewUser: function (userData) {
        return axios.post("/api/user/sign-up", userData);
    },
    login: function (userData) {
        return axios.post("/api/user/login", userData);
    },
    logout: function () {
        return axios.get("/api/user/logout");
    }
};
