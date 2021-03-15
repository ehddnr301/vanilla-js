import Item from "./Item.js";

export default class SearchResult {
  constructor($target, onClick) {
    this.$target = $target;
    this.onClick = onClick;
    this.data = null;

    this.render();
  }

  updateData(data) {
    this.data = data;
    this.render();
  }

  render() {
    if (this.data) {
      this.$target.innerHtml = "";

      const itemContainer = document.createElement("div");
      itemContainer.className = "item-container";

      const itemWrapper = document.createElement("div");
      itemWrapper.classname = "item-wrapper";

      this.data.forEach((cat) => {
        new Item(itemWrapper, cat, this.onClick);
      });

      itemContainer.appendChild(itemWrapper);
      this.$target.appendChild(itemContainer);
    }
  }
}
