import { decorate, observable, action } from "mobx";
import UserStore from "./userStore";
import AccountStore from "./accountStore";
import RegistrationStore from "./registrationStore";

class RootStore {
  constructor() {
    this.userStore = new UserStore();
    this.accountStore = new AccountStore();
    this.registrationStore = new RegistrationStore();
  }

  logout = (callback) => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    this.userStore = new UserStore();
    this.accountStore = new AccountStore();
    this.registrationStore = new RegistrationStore();
    callback("Logged out successfully", {
      appearance: "success",
      autoDismiss: true,
    });
  };
}

decorate(RootStore, {
  userStore: observable,
  accountStore: observable,
  registrationStore: observable,
  logout: action,
});

const rootStore = new RootStore();

export default rootStore;
