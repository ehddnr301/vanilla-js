import Card from "./Card.js";

export default class ResultsSections {
  constructor({ $target, onClick }) {
    this.onClick = onClick;
    this.data = null;
    this.section = document.createElement("section");
    this.section.classname = "results-section";

    $target.appendChild(this.section);

    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    if (this.data) {
      this.section.innerHTML = "";

      const cardContainer = document.createElement("div");
      cardContainer.className = "card-container";

      this.data.forEach((cat) => {
        new Card({
          $target: cardContainer,
          data: cat,
          onClick: this.onClick,
        });
      });

      this.section.appendChild(cardContainer);
    }
  }
}
