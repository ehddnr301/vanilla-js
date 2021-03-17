import SearchingSection from "./components/SearchingSection.js";
import { api } from "./api/theCatAPI.js";
import ResultsSections from "./components/ResultsSection.js";
import DetailModal from "./components/DetailModal.js";
import Loading from "./components/Loading.js";
import { getItem, setItem } from "./util/sessionStorage.js";

export default class App {
  constructor($target) {
    const keywords = getItem("keywords");
    const data = getItem("data");

    const searchingSection = new SearchingSection({
      $target,
      keywords,
      onSearch: (keyword) => {
        loading.toggleSpinner();
        api.fetchCats(keyword).then((data) => {
          loading.toggleSpinner();
          setItem("data", data);
          resultsSection.setState(data);
        });
      },
      onRandom: () => {
        loading.toggleSpinner();
        api.fetchRandomCats().then((data) => {
          loading.toggleSpinner();
          setItem("data", data);
          resultsSection.setState(data);
        });
      },
    });

    const resultsSection = new ResultsSections({
      $target,
      data,
      onClick: (data) => {
        detailModal.setState(data);
      },
    });

    const detailModal = new DetailModal({
      $target,
    });

    const loading = new Loading({
      $target,
    });

    this.focusOnSearchInput();
  }

  focusOnSearchInput() {
    const searchInput = document.querySelector(".search-input");
    searchInput.focus();
  }
}
