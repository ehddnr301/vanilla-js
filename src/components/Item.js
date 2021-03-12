export default class Item {
  constructor($target, data) {
    this.$target = $target;
    this.data = data;

    this.render();
  }
  render() {
    // const { url, temperament, origin } = this.data;
    console.log(this.data);
    const { url } = this.data;
    const { temperament, origin } =
      this.data.breeds.length > 0
        ? this.data.breeds[0]
        : { temperament: "정보없음", origin: "정보없음" };

    const itemWrapper = document.createElement("div");
    itemWrapper.className = "wrapper";

    const item = document.createElement("div");
    item.className = "item";

    const itemImg = document.createElement("img");
    itemImg.className = "item-img";
    itemImg.src = url;

    const itemDescription = document.createElement("div");
    itemDescription.className = "item-description";

    const itemTemperament = document.createElement("p");
    itemTemperament.className = "item-temperament";
    itemTemperament.innerText = temperament;

    const itemOrigin = document.createElement("p");
    itemOrigin.className = "item-origin";
    itemOrigin.innerText = origin;

    itemDescription.appendChild(itemTemperament);
    itemDescription.appendChild(itemOrigin);
    item.appendChild(itemImg);
    item.appendChild(itemDescription);
    itemWrapper.appendChild(item);
    this.$target.appendChild(itemWrapper);
  }
}
