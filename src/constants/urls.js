class URL {
  baseUrl = "https://d76632eb6d87.ngrok.io/api/v1";

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
}

const url = new URL();

export default url;
