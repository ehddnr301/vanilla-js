import Item from "./Item.js";

export default class SearchResult {
  constructor($target) {
    this.$target = $target;
    this.data = [];

    this.render();
  }

  updateData(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.$target.innerHtml = "";

    const itemContainer = document.createElement("div");
    itemContainer.className = "item-container";

    const itemWrapper = document.createElement("div");
    itemWrapper.classname = "item-wrapper";

    this.data.forEach((cat) => {
      new Item(itemWrapper, cat);
    });

    itemContainer.appendChild(itemWrapper);
    this.$target.appendChild(itemContainer);
  }
}
