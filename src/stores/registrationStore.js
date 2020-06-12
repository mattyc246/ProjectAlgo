import { observable, action, decorate } from "mobx";
import url from "../constants/urls";
import axios from "axios";

class RegistrationStore {
  submitting = false;
  message = ""
  validRegistration = false;
  errors = [];
  registrationSuccessful = false;
  registration = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  validInvite = true;

  reset = () => {
    this.submitting = false;
    this.message = ""
  }

  validateInviteCode = (inviteCode) => {
    this.submitting = true
    this.message = "Validating invite code"
    axios.get(url.validateInvite(inviteCode))
    .then((result) => {
      if(result.data.valid){
        this.reset()
        this.validInvite = true
      } else {
        this.reset()
        this.validInvite = false
      }
    })
    .catch((err) => {
      console.log(err)
      this.reset()
      this.validInvite = false
    })
  }

  validateForm = () => {
    this.errors = [];
    const { name, email, password, passwordConfirm } = this.registration;

    if (!name) {
      this.errors.push("No name provided");
    }

    if (!email) {
      this.errors.push("No email provided");
    }

    if (!password || !passwordConfirm) {
      this.errors.push("Both password and confirmation must be filled");
    }

    if (password !== passwordConfirm) {
      this.errors.push("Password and confirmation do not match");
    }

    if (password.length < 8) {
      this.errors.push("Password must be at least 8 chars in length");
    }

    if (this.errors.length > 0) {
      this.validRegistration = false;
    } else {
      this.validRegistration = true;
    }
  };

  handleRegistration = (e) => {
    this.registration[e.target.name] = e.target.value;
  };

  handleSubmit = (e, inviteCode, callback) => {
    e.preventDefault();

    this.validateForm();

    if (this.validRegistration) {
      this.submitting = true;
      this.message = "Registering"

      axios
        .post(url.register(), {
          user: {
            name: this.registration.name,
            email: this.registration.email,
            password: this.registration.password,
          },
          invite_code: inviteCode
        })
        .then((result) => {
          this.submitting = false;
          this.registrationSuccessful = true;
          callback("Registration successful, please log in to continue", {
            appearance: "success",
            autoDismiss: true,
          });
          setTimeout(() => {
            this.registrationSuccessful = false;
            this.message = ""
            this.registration = {
              name: "",
              email: "",
              password: "",
              passwordConfirm: ""
            }
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          this.reset()
          callback("Registration unsuccessful, please try again", {
            appearance: "error",
            autoDismiss: true,
          });
        });
    } else {
      callback("Invalid registration, check the errors below", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
}

decorate(RegistrationStore, {
  submitting: observable,
  registration: observable,
  errors: observable,
  registrationSuccessful: observable,
  validInvite: observable,
  handleRegistration: action,
  handleSubmit: action,
  validateInviteCode: action
});

export default RegistrationStore;
