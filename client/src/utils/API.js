import axios from "axios";

export default {

    getTagById: function (id) {
        return axios.get(`/api/tags/${id}`);
    },
    findUserId: function (id) {
        return axios.get(`/api/user/${id}`);
    },
    // Deletes the book with the given id
    //   deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    //   },
    placeOrder: async function (cart) {
        let userId = JSON.parse(localStorage.getItem('user_id_SP'))
        let tag = {
            type: cart.title,
            name: `${cart.location} ${cart.title} Tag`,
            price: parseInt(cart.price),
            location: cart.location
        }
        if (userId) {
            return axios.post(`/api/tags/${userId}`, tag)
        } else {
            return axios.post(`/api/tags/`, tag)
        }
    },
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
