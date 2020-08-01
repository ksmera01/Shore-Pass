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
    placeOrder: async function (cart) {
        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        let userId = localStorage.getItem('user_id_SP')
        let startDate = new Date();
        let timeVar;
        if (cart.id == 0) {
            timeVar = 1;
        };
        if (cart.id == 1) {
            timeVar = 7;
        }

        // const expSet = (val) => {
        //     if (!timeVar) {
        //         return
        //     }
        //     let today = new Date();
        //     return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + val);
        // }
        let tag = {
            type: cart.title,
            name: `${cart.location} ${cart.title} Tag`,
            price: parseInt(cart.price),
            startDate: startDate,
            expirationDate: startDate.addDays(timeVar),
            location: cart.location
        }
        let confirmation = { tag, userId }
        console.log(tag.expirationDate - tag.startDate)
        return confirmation;
        // return axios.post("/api/user/sign-up", userData);
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
