export default class SearchBar {
  constructor($target) {
    (this.$target = $target), this.render();
  }
  render() {
    const top = document.createElement("div");
    top.className = "top";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const searchInput = document.createElement("input");
    searchInput.placeholder = "고양이를 검색하세요";
    searchInput.className = "search-input";

    wrapper.appendChild(searchInput);
    top.appendChild(wrapper);

    this.$target.appendChild(top);
  }
}
