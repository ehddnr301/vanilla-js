import Item from "./Item.js";

export default class SearchResult {
  constructor($target, data) {
    this.$target = $target;
    this.data = data;

    this.render();
  }

  render() {
    const bottom = document.createElement("div");
    bottom.className = "bottom";

    const itemContainer = document.createElement("div");
    itemContainer.className = "item-container";

    const itemWrapper = document.createElement("div");
    itemWrapper.classname = "item-wrapper";

    this.data.forEach((cat) => {
      new Item(itemWrapper, cat);
      //   const item = new Item(this.$target, cat);
      //   itemWrapper.appendChild(item);
    });

    itemContainer.appendChild(itemWrapper);
    bottom.appendChild(itemContainer);
    this.$target.appendChild(bottom);
  }
}
