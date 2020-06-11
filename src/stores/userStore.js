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
  menuExpanded = true;

  setExpanded = (expanded) => {
    this.menuExpanded = expanded
  }

  logout = (callback, reset) => {
    this.login = {
      email: "",
      password: "",
    };
    this.userToken = null;
    this.userData = {
              user: null,
              invites: null,
              membership: null,
            }
    this.loggedIn = null
    this.loggingIn = false;
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    callback('Logged out successfully', {appearance: 'success', autoDismiss: true})
    reset()
  }

  setUserDetails = (authToken, userData) => {
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("userData", btoa(JSON.stringify(userData)));
    this.userData = userData
    this.loggedIn = authToken
    this.userToken = authToken
  };

  updateMembership = (membership, callback) => {
    this.userData.membership = membership
    localStorage.setItem('userData', btoa(JSON.stringify(this.userData)))
    callback.push('/dashboard')
  }

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
  menuExpanded: observable,
  setExpanded: action,
  handleChange: action,
  logout: action
});

const userStore = new UserStore();

export default userStore;
