import { observable, action, decorate } from "mobx";

class RegistrationStore {
  submitting = false;
  registration = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  validRegistration = false;
  errors = []

  validateForm = () => {
    this.errors = []
    const {name, email, password, passwordConfirm} = this.registration

    if(!name){
      this.errors.push('No name provided')
    }

    if(!email){
      this.errors.push('No email provided')
    }

    if(!password || !passwordConfirm){
      this.errors.push('Both password and confirmation must be filled')
    }

    if(password !== passwordConfirm){
      this.errors.push('Password and confirmation do not match')
    }

    if(password.length < 8){
      this.errors.push('Password must be at least 8 chars in length')
    }

    if(this.errors.length > 0){
      this.validRegistration = false
    } else {
      this.validRegistration = true
    }
  }

  handleRegistration = (e) => {
    this.registration[e.target.name] = e.target.value;
  };

  handleSubmit = (e, callback) => {
    e.preventDefault();

    this.validateForm()

    if(this.validRegistration){
      this.submitting = true
      setTimeout(() => {
        this.submitting = false
        callback("Successfully registered!", {
          appearance: "success",
          autoDismiss: true,
        });
      }, 3000)
    } else {
      callback('Invalid registration, check the errors below', {appearance: 'error', autoDismiss: true})
    }

  }
}

decorate(RegistrationStore, {
  submitting: observable,
  registration: observable,
  errors: observable,
  handleRegistration: action,
  handleSubmit: action
});

const registrationStore = new RegistrationStore();

export default registrationStore;
