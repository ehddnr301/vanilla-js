import { api } from "./api/catApi.js";
import SearchBar from "./components/SearchBar.js";
import SearchResult from "./components/SearchResult.js";

export default class App {
  constructor() {
    const top = document.createElement("div");
    top.className = "top";

    const bottom = document.createElement("div");
    bottom.className = "bottom";

    const searchBar = new SearchBar(top, (keyword) => {
      api.fetchImage(keyword).then((data) => {
        // * searchResult 를 업데이트하는 로직 필요
      });
    });
  }
}
