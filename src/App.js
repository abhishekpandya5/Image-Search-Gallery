import React, { Component } from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class ImageApp extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(this);
    this.setState({ images: response.data.results });
  };

  // onSearchSubmit(term) {
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           "Client-ID d7a43d2d66020af0d9821063bd0b9b91794a48858f894c9b0fedf898ebaf7b26"
  //       }
  //     })
  //     .then(response => console.log(response.data));
  // }

  render() {
    return (
      <div className="ui container" style={{ width: "98%", margin: "auto" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ImageApp;
