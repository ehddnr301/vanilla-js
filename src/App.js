import { api } from "./api/catApi.js";
import SearchBar from "./components/SearchBar.js";
import SearchResult from "./components/SearchResult.js";
import SearchInfo from "./components/SearchInfo.js";

export default class App {
  constructor() {
    const top = document.createElement("div");
    top.className = "top";

    const bottom = document.createElement("div");
    bottom.className = "bottom";

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.classList.add("hidden");

    const searchBar = new SearchBar(
      top,
      (keyword) => {
        api.fetchImage(keyword).then((data) => {
          // * searchResult 를 업데이트하는 로직
          searchResult.updateData(data);
        });
      },
      () => {
        api.fetchImageAll().then((data) => {
          searchResult.updateData(data);
        });
      }
    );

    const searchResult = new SearchResult(bottom, (target) => {
      serarchInfo.updateData(target.data);
      modal.classList.toggle("hidden");
    });

    const serarchInfo = new SearchInfo(document.body, []);

    document.body.appendChild(top);
    document.body.appendChild(bottom);
    document.body.appendChild(modal);
  }
}
