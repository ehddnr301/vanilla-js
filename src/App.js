import SearchingSection from "./components/SearchingSection.js";
import { api } from "./api/theCatAPI.js";
import ResultsSections from "./components/ResultsSection.js";
import DetailModal from "./components/DetailModal.js";
import Loading from "./components/Loading.js";
import { getItem, setItem } from "./util/sessionStorage.js";
import { lazyLoad } from "./util/lazyLoad.js";

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
      onScroll: () => {
        loading.toggleSpinner();
        api.fetchRandomCats().then((data) => {
          loading.toggleSpinner();

          const beforeData = getItem("data");
          const nextData = beforeData.concat(data);
          setItem("data", nextData);
          resultsSection.setState(nextData);
        });
      },
    });

    const detailModal = new DetailModal({
      $target,
    });

    const loading = new Loading({
      $target,
    });

    lazyLoad();
  }
}
