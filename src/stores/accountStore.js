import { decorate, observable, action } from "mobx";
import axios from 'axios';
import url from "../constants/urls";

class AccountStore {
  newAccount = {
    name: "",
    api_key: "",
    api_secret: "",
    platform: ""
  }
  accounts = []
  submitting = false;
  fetching = true;

  fetchAccounts = () => {
    axios.get(url.fetchAccounts(), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
    .then((result) => {
      console.log(result)
      this.accounts = result.data.accounts
      this.fetching = false
    })
    .catch(err => {
      console.log(err)
    })
  }

  addAccount = (e, callback) => {
    e.preventDefault()
    this.submitting = true

    const {name, api_key, api_secret, platform} = this.newAccount

    if(!name || !api_key || !api_secret || !platform){
      callback('Please fill out all fields', {appearance: 'error', autoDismiss: true})
      this.submitting = false
      return;
    }

    axios.post(url.createNewAccount(), {
      account: this.newAccount
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    }).then((result) => {
      this.submitting = false
      this.accounts.push(result.data.account)
      this.newAccount = {
        name: "",
        api_key: "",
        api_secret: "",
        platform: "",
      };
      callback('Successfully added account', {appearance: 'success', autoDismiss: true})
    })
    .catch(err => {
      console.log(err)
      this.submitting = false
      callback('Something went wrong, try again', {appearance: 'error', autoDismiss: true})
    })
  }

  handleChange = (e) => {
    this.newAccount[e.target.name] = e.target.value
  }
}

decorate(AccountStore, {
  newAccount: observable,
  accounts: observable,
  submitting: observable,
  fetching: observable,
  handleChange: action,
  addAccount: action,
  fetchAccounts: action
})

const accountStore = new AccountStore()

export default accountStore;