import axios from "axios";

// seed to be used by random user API
const seed = "thadkingcole";

export default {
  getUsers: () => {
    return axios.get(
      `https://randomuser.me/api/?results=200&nat=us&seed=${seed}`
    );
  },
};
