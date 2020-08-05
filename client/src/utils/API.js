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
        let startDate = new Date();
        let timeVar; // default false will allow ternary below to set 
        // Dynamically set the expiration date depending on tag time
        if (cart.title === 'Day') {
            timeVar = 1;
        };
        if (cart.title === 'Weekly') {
            timeVar = 7;
        }
        Date.prototype.addDays = function (days) {
            let date = new Date(this.valueOf());
            if (!days) {
                return new Date(`${date.getFullYear() + 1}-1-1`)
            }
            date.setDate(date.getDate() + days);
            return Date.parse(date);
        }
        let tag = {
            type: cart.title,
            name: `${cart.location} ${cart.title} Tag`,
            price: parseInt(cart.price),
            startDate: Date.parse(startDate),
            expirationDate: startDate.addDays(timeVar),
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
