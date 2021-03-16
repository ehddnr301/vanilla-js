import SearchingSection from "./components/SearchingSection.js";
import { api } from "./api/theCatAPI.js";
import ResultsSections from "./components/ResultsSection.js";

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
        // * 모달창 띄우기
      },
    });
  }
}
