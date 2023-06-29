import { c as create_ssr_component } from "../../../chunks/index2.js";
import axios from "axios";
import { u as user } from "../../../chunks/stores2.js";
const placemarkService = {
  //baseUrl: "http://pandapc:3000",
  baseUrl: "https://placemark-hapi-nsne.onrender.com",
  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email,
          token: response.data.token
        });
        localStorage.cred = JSON.stringify({ email, token: response.data.token });
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
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("cred");
  },
  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName,
        lastName,
        email,
        password
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
      const response = await axios.post(this.baseUrl + "/api/categories/" + event.categoryid + "/events", event);
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async deleteEvent(id) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/events/" + id);
      return response.data;
    } catch (error) {
      return [];
    }
  }
};
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  placemarkService.logout();
  goto("/");
  return ``;
});
export {
  Page as default
};
