import { setItem } from "../util/sessionStorage.js";

export default class SearchingSection {
  constructor({ $target, keywords, onSearch, onRandom }) {
    this.onSearch = onSearch;
    this.onRandom = onRandom;
    this.recent = keywords;
    this.section = document.createElement("section");
    this.section.className = "searching-section";

    $target.appendChild(this.section);

    this.render();

    this.focusOnSearchInput();
  }

  focusOnSearchInput() {
    const searchInput = document.querySelector(".search-input");
    searchInput.focus();
  }

  deleteKeyword() {
    const searchInput = document.querySelector(".search-input");
    searchInput.value = "";
  }

  addRecentKeyword(keyword) {
    if (this.recent.includes(keyword)) return;
    if (this.recent.length === 5) this.recent.shift();

    this.recent.push(keyword);
    setItem("keywords", this.recent);

    this.render();
  }

  searchByKeyword(keyword) {
    if (keyword.length === 0) return;

    this.addRecentKeyword(keyword);
    this.onSearch(keyword);
  }

  render() {
    this.section.innerHTML = "";

    const randomBtn = document.createElement("button");
    randomBtn.className = "random-btn";
    randomBtn.innerText = "π±";

    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.placeholder = "κ³ μμ΄λ₯Ό κ²μνμΈμ.";

    const wrapper = document.createElement("div");
    wrapper.className = "search-input-wrapper";

    const recentKeywords = document.createElement("div");
    recentKeywords.className = "recent-keywords";

    this.recent.map((keyword) => {
      const link = document.createElement("span");
      link.className = "keyword";
      link.innerText = keyword;

      link.addEventListener("click", () => {
        this.searchByKeyword(keyword);
      });

      recentKeywords.appendChild(link);
    });

    randomBtn.addEventListener("click", this.onRandom);
    searchInput.addEventListener("focus", this.deleteKeyword);
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        this.searchByKeyword(searchInput.value);
      }
    });

    wrapper.appendChild(searchInput);
    wrapper.appendChild(recentKeywords);
    this.section.appendChild(randomBtn);
    this.section.appendChild(wrapper);
  }
}
