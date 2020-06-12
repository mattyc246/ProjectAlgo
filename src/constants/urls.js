class URL {
  baseUrl = "https://306ab7f68137.ngrok.io/api/v1";

  register = () => {
    return this.baseUrl + "/users/";
  };

  validateInvite = (inviteCode) => {
    return this.baseUrl + `/users/${inviteCode}/verify`;
  };

  login = () => {
    return this.baseUrl + "/users/signin";
  };

  requestPaymentIntent = () => {
    return this.baseUrl + "/memberships/checkout";
  };

  paymentSuccess = () => {
    return this.baseUrl + "/memberships/";
  };

  createNewAccount = () => {
    return this.baseUrl + "/trades/accounts/";
  };

  fetchAccounts = () => {
    return this.baseUrl + "/trades/accounts";
  };

  deleteAccount = (id) => {
    return this.baseUrl + `/trades/accounts/${id}`;
  };
}

const url = new URL();

export default url;
