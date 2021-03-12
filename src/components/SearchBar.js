export default class SearchBar {
  constructor($target, onSearch) {
    this.$target = $target;
    this.onSearch = onSearch;

    this.render();
  }
  render() {
    this.$target.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const searchInput = document.createElement("input");
    searchInput.placeholder = "고양이를 검색하세요";
    searchInput.className = "search-input";

    searchInput.addEventListener("keyup", (e) => {
      if (e.key == 13) {
        const keyword = searchInput.value;
        this.onSearch(keyword);
      }
    });

    wrapper.appendChild(searchInput);

    this.$target.appendChild(wrapper);
  }
}
