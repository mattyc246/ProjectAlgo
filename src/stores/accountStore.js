import { decorate, observable, action } from "mobx";


class AccountStore {
  newAccount = {
    name: "",
    api_key: "",
    api_secret: "",
    platform: ""
  }
  accounts = []

  handleChange = (e) => {
    this.newAccount[e.target.name] = e.target.value
  }
}

decorate(AccountStore, {
  newAccount: observable,
  accounts: observable,
  handleChange: action
})

const accountStore = new AccountStore()

export default accountStore;