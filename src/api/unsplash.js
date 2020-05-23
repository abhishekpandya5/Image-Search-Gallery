import axios from "axios";

//1. const searchImages = (term) => {} one approach

//2. axios.create : creates instance of axios client with couple of default property

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d7a43d2d66020af0d9821063bd0b9b91794a48858f894c9b0fedf898ebaf7b26",
  },
});
