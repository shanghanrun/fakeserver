# 사용방법
- let data = fetchData({country:'kr'})

처럼, fetchData() 함수 안에 객체를 인자로 전달하면 됩니다.


fetchData에 전달할 객체형태는

const query ={
    country: 'kr', 
    category: 'business',
    q: '장원영',
    pageSize: 10,
    page: 1,
}
과 같은 형태입니다.










각 속성값(country, category.....)중에서 한 가지만 입력해도 됩니다.
pageSize를 입력하지 않으면 디폴트로 10,
page를 입력하지 않으면 디폴트로 1 이 됩니다.


country로는 'kr', 'us' 가 있고,
category로는 'business', 'entertainment', 'general', 'kr', 'kr-enter' 가 있고,
q는 검색하고자 하는 단어을 입력하면 됩니다. (영어, 한글 모두 가능) 



그런데, country, category, q는 한꺼번에 입력하면 안됩니다!!!
이 중에 한가지만! 입력해야 됩니다.
즉, fetchData({country: 'us', category:'business'}) --> 안됨.
fetchData({category: 'kr-enter', q: 'bts'}) --> 안됨


fetchData({country:'us', page:1, pageSize:5}) --> 가능합니다.
