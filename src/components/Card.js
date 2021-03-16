export default class Card {
  constructor({ $target, data, onClick }) {
    this.onClick = onClick; // * 모달창 띄우기
    this.data = data;
    this.card = document.createElement("article");
    this.card.className = "cat-card";

    $target.appendChild(this.card);

    this.render();
  }

  getDetail() {
    this.onClick(this.data);
  }

  render() {
    const url = this.data.url;
    const { name, origin } =
      this.data.breeds.length > 0
        ? this.data.breeds[0]
        : { name: "정보없음", origin: "정보없음" };

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.src = url;

    const cardInfo = document.createElement("article");
    cardInfo.className = "card-info";

    const catName = document.createElement("p");
    catName.className = "cat-name";
    catName.innerText = name;

    const catOrigin = document.createElement("p");
    catOrigin.className = "cat-origin";
    catOrigin.innerText = origin;

    this.card.addEventListener("click", () => {
      // * 모달창 띄우기
      this.getDetail();
    });

    cardInfo.appendChild(catName);
    cardInfo.appendChild(catOrigin);
    this.card.appendChild(cardImage);
    this.card.appendChild(cardInfo);
  }
}
