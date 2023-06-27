// @ts-nocheck
import axios from "axios";
import { user } from "../stores"

export const placemarkService = {
    baseUrl: "http://pandapc:3000",

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.cred = JSON.stringify({ email: email, token: response.data.token });
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        user.set({
            email: "",
            token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("cred");
    },


    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },

    reload() {
        const placemarkCredentials = localStorage.cred;
        if (placemarkCredentials) {
            const savedUser = JSON.parse(placemarkCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },

    async getEvents() {
        try {
            const response = await axios.get(this.baseUrl + "/api/events");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getEvent(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/events/" + id);
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getCategories() {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async createEvent(event) {
        try {
            const response = await axios.post(this.baseUrl + "/api/categories/" + event.categoryid + "/events", event); //TODO
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async deleteEvent(id){
        try {
            const response = await axios.delete(this.baseUrl + "/api/events/" + id);
            return response.data;
        } catch (error) {
            return [];
        }
    }
};
