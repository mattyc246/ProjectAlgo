class URL {
  baseUrl = "https://7ffc22a3d576.ngrok.io/api/v1";

  register = () => {
    return this.baseUrl + "/users/";
  };
}

const url = new URL()

export default url;