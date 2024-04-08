/* eslint-disable no-useless-catch */
import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.endpoint).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      // eslint-disable-next-line no-empty
      if (userAccount) {
        return this.Login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.getSession();
    } catch (error) {
      console.log("Appwrite server :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite server :: getCurrentUser :: error", error);
    }
  }

}

const authService = new AuthService();

export default authService;
