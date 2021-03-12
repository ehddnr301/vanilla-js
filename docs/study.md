# Study

## SearchBar

- class 를 사용해서 target 받기 (body가 들어옴)
- this.render()로 실행해주기.
- render에서는 구성해서 target에 붙여주기.

## api 호출

- 받은 url에 대해 fetch 후 json한것을 return 하는 request라는 함수를 따로 만듬
- api안의 method는 keyword를 받아서 url을 만들어서 request 함수를 리턴

## SearchBar 로직

- onSearch 함수는 app에서 받음
  - onSearch는 keyword를 받아서 실행되고 searchResult를 업데이트함
- SearchBar 의 searchInput에는 eventListener가 있어서 엔터를 감지
  - 엔터가 눌리면 현재 value값으로 받은 onSearch를 실행함

## SearchResult 로직

- 초기 data는 빈 array [] 로 설정
- searchResult 에는 data를 받는 updateData method가 존재.
  - 초기 빈 data를 받은 data로 업데이트 하고 render를 다시 실행시킴
- render method는 innerHTML = '' 로 기존의 것을 없애고 현재 data를 가지고 new Item 만듬
