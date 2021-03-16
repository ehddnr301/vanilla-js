export default class SearchingSection {
  constructor({ $target, onSearch, onRandom }) {
    this.onSearch = onSearch;
    this.onRandom = onRandom;
    this.section = document.createElement("section");
    this.section.className = "searching-section";

    $target.appendChild(this.section);

    this.render();
  }

  deleteKeyword() {
    const searchInput = document.querySelector(".search-input");
    searchInput.value = "";
  }

  searchByKeyword(event) {
    if (event.key === "Enter") {
      const keyword = document.querySelector(".search-input").value;
      this.onSearch(keyword);
    }
  }

  render() {
    const randomBtn = document.createElement("button");
    randomBtn.className = "random-btn";
    randomBtn.innerText = "🐱";

    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.placeholder = "고양이를 검색하세요.";

    randomBtn.addEventListener("click", this.onRandom);
    searchInput.addEventListener("focus", this.deleteKeyword);
    searchInput.addEventListener("keyup", (event) => {
      this.searchByKeyword(event);
    });

    this.section.appendChild(randomBtn);
    this.section.appendChild(searchInput);
  }
}
