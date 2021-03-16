import SearchingSection from "./components/SearchingSection.js";
import { api } from "./api/theCatAPI.js";

export default class App {
  constructor($target) {
    const searchingSection = new SearchingSection({
      $target,
      onSearch: (keyword) => {
        // * 서치 결과 표시
      },
      onRandom: () => {
        // * 랜덤 결과 표시
      },
    });
  }
}
