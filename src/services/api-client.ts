import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b8ccb2ce37c042869dcc3c26ca2550cc",
  },
});
