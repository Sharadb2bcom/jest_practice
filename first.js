const axios = require("axios");
const first = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkvalue: x => x,
  createUser: () => {
    const user = { firstName: "Sharad" };
    user["lastName"] = "Pawar";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "Error")
};

module.exports = first;
