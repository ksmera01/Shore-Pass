import axios from "axios";

export default {
    // Gets all books
    //   getBooks: function() {
    //     return axios.get("/api/books");
    //   },
    findUserId: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Deletes the book with the given id
    //   deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    //   },
    createNewUser: function (userData) {
        return axios.post("/api/user/sign-up", userData);
    },
    login: function (userData) {
        return axios.post("/api/user/login", userData);
    },
    logout: function () {
        axios.get("/api/user/logout", (req, res) => console.log(res));
    }
};
