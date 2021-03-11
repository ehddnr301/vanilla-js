import SearchBar from "./components/SearchBar.js";

export default class App {
  constructor() {
    console.log("App is created!");

    const body = document.body;

    const searchBar = new SearchBar(body);
  }
}
