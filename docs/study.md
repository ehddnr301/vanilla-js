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

## api 호출 수정

- 기존에는 keyword를 받아서 그냥 그 결과를 리턴해주었음
- 수정된 로직
  - 키워드를 기반으로 품종을 검색해서 품종 아이디들을 리턴
  - 품종 아이디 마다 breed_id를 기반으로 검색
  - 검색결과를 Promise all로 결과를 처리
  - 빈 result array 만들기
  - 결과 array를 concat으로 업데이트
  - 리턴
