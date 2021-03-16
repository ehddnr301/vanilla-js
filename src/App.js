import SearchingSection from "./components/SearchingSection.js";
import { api } from "./api/theCatAPI.js";
import ResultsSections from "./components/ResultsSection.js";
import DetailModal from "./components/DetailModal.js";

export default class App {
  constructor($target) {
    const searchingSection = new SearchingSection({
      $target,
      onSearch: (keyword) => {
        api.fetchCats(keyword).then((data) => {
          resultsSection.setState(data);
        });
      },
      onRandom: () => {
        api.fetchRandomCats().then((data) => {
          resultsSection.setState(data);
        });
      },
    });

    const resultsSection = new ResultsSections({
      $target,
      onClick: (data) => {
        detailModal.setState(data);
      },
    });

    const detailModal = new DetailModal({
      $target,
    });

    this.focusOnSearchInput();
  }

  focusOnSearchInput() {
    const searchInput = document.querySelector(".search-input");
    searchInput.focus();
  }
}
