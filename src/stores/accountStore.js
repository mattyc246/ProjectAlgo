import { decorate, observable, action } from "mobx";

class AccountStore {
  newAccount = {
    name: "",
    api_key: "",
    api_secret: "",
    platform: ""
  }
  accounts = []
  submitting = false;

  addAccount = (e, callback) => {
    e.preventDefault()
    this.submitting = true

    const {name, api_key, api_secret, platform} = this.newAccount

    if(!name || !api_key || !api_secret || !platform){
      callback('Please fill out all fields', {appearance: 'error', autoDismiss: true})
      this.submitting = false
      return;
    }

    setTimeout(() => {
      this.submitting = false
      this.newAccount = {
        name: "",
        api_key: "",
        api_secret: "",
        platform: ""
      }
    }, 3000)
  }

  handleChange = (e) => {
    this.newAccount[e.target.name] = e.target.value
  }
}

decorate(AccountStore, {
  newAccount: observable,
  accounts: observable,
  submitting: observable,
  handleChange: action,
  addAccount: action
})

const accountStore = new AccountStore()

export default accountStore;