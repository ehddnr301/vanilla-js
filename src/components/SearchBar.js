export default class SearchBar {
  constructor($target, onSearch, onRandom) {
    this.$target = $target;
    this.onSearch = onSearch;
    this.onRandom = onRandom;

    this.render();
  }
  render() {
    this.$target.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const searchInput = document.createElement("input");
    searchInput.placeholder = "고양이를 검색하세요";
    searchInput.className = "search-input";

    const randomBtn = document.createElement("button");
    randomBtn.className = "random-btn";
    randomBtn.innerText = "RANDOM";

    randomBtn.addEventListener("click", () => {
      this.onRandom();
    });

    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        const keyword = searchInput.value;
        this.onSearch(keyword);
      }
    });

    wrapper.appendChild(randomBtn);
    wrapper.appendChild(searchInput);

    this.$target.appendChild(wrapper);
  }
}
