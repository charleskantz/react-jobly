import axios from "axios";
import { TOKEN_STORAGE_ID } from '../App';

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {

    const _token = localStorage.getItem(TOKEN_STORAGE_ID);

    console.debug("API Call:", endpoint, params, verb);

    const data = (verb === "get")
    ? { params: { _token, ...params } } // GET
    : { _token, ...params };           // POST,PATCH

    const req = axios[verb](`${BASE_URL}/${endpoint}`, data);

    try {
      return (await req).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // log in user
  static async logIn({ username, password }) {
    let res = await this.request('login', { username, password }, "post");
    return res.token;
  }

  // call server and register new user
  static async register({ username, password, first_name, last_name, email }) {
    let photo_url = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    let res = await this.request(
      'users',
      { username, password, first_name, last_name, email, photo_url },
      "post"
    );
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser({ username, first_name, last_name, email, photo_url, password }) {
    let res = await this.request(
      `users/${username}`,
      { first_name, last_name, email, photo_url, password },
      "patch"
    );
    return res.user;
  }

  static async apply(id, username) {
    let res = await this.request(
      `jobs/${id}/apply`,
      { id, username },
      "post"
    );
    return res.message;
  }
}

export default JoblyApi;