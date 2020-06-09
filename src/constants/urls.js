class URL {
  baseUrl = "https://7ffc22a3d576.ngrok.io/api/v1";

  register = () => {
    return this.baseUrl + "/users/";
  };

  validateInvite = (inviteCode) => {
    return this.baseUrl + `/users/${inviteCode}/verify`
  }

  login = () => {
    return this.baseUrl + "/users/signin"
  }
}

const url = new URL()

export default url;