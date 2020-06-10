import { decorate, observable, action } from "mobx";
import axios from "axios";
import url from "../constants/urls";

class UserStore {
  login = {
    email: "",
    password: "",
  };
  userToken = localStorage.getItem("authToken");
  userData = JSON.parse(
    localStorage.getItem("userData")
      ? atob(localStorage.getItem("userData"))
      : localStorage.getItem("userData") ||
          JSON.stringify({
            user: null,
            invites: null,
            membership: null,
          })
  );
  loggedIn = localStorage.getItem("authToken");
  loggingIn = false;

  setUserDetails = (authToken, userData) => {
    localStorage.setItem("authToken", JSON.stringify(authToken));
    localStorage.setItem("userData", btoa(JSON.stringify(userData)));
    this.userData = userData
    this.loggedIn = authToken
    this.userToken = authToken
  };

  handleLogin = (e, callback) => {
    e.preventDefault();

    this.loggingIn = true;
    axios
      .post(url.login(), {
        user: {
          email: this.login.email,
          password: this.login.password,
        },
      })
      .then((result) => {
        let token = result.data.token;
        let userData = {
          user: result.data.user,
          invites: result.data.invites,
          membership: result.data.user.membership,
        };
        this.loggingIn = false;
        callback("Logged in successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        this.setUserDetails(token, userData)
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          this.loggingIn = false;
          callback("Invalid email/password combination", {
            appearance: "error",
            autoDismiss: true,
          });
        } else {
          this.loggingIn = false;
          callback("Something went wrong, please try again", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      });
  };

  handleChange = (e) => {
    this.login[e.target.name] = e.target.value;
  };
}

decorate(UserStore, {
  login: observable,
  user: observable,
  userData: observable,
  loggedIn: observable,
  loggingIn: observable,
  handleChange: action,
});

const userStore = new UserStore();

export default userStore;
