# 사용방법
- ## let data = fetchData({country:'kr'})

처럼, fetchData() 함수 안에 객체를 인자로 전달하면 됩니다.



- fetchData에 전달할 객체형태는

### const query ={
###    country: 'kr', 
###    category: 'business',
###    q: '장원영',
###    pageSize: 10,
###    page: 1,
### }

과 같은 형태입니다.



![사용예](readme.png)


콘솔을 살펴보면, 받아온 데이터를 자세히 볼 수 있습니다.



각 속성값(country, category.....)중에서 한 가지만 입력해도 됩니다.

pageSize를 입력하지 않으면 디폴트로 10,

page를 입력하지 않으면 디폴트로 1 이 됩니다.


country로는 'kr', 'us' 가 있고,

category로는 'business', 'entertainment', 'general', 'kr', 
'kr-enter' 가 있고,

q는 검색하고자 하는 단어을 입력하면 됩니다. (영어, 한글 모두 가능) 



## 그런데, country, category, q는 한꺼번에 입력하면 안됩니다!!!

이 중에 한가지만! 입력해야 됩니다.

즉, fetchData({country: 'us', category:'business'}) --> 안됨.

fetchData({category: 'kr-enter', q: 'bts'}) --> 안됨



fetchData({country:'us', page:1, pageSize:5}) --> 가능합니다.






![사용법](readme2.png)

### 깃허브의 내용을 clone 한 후에

### 위 그림처럼 scripts.js 파일에서, 기다란 코드의 내용을 축약시키고

### 가장 아래에서 데어터를 받아오는 코드를 작성하시면 됩니다.

### 처음 설정은 index.html와 script.js가 연계되게 해 놓았는데,

### 이것은 데이터가 잘 받아와지는지 콘솔에서 확인하기 위한 것이고,

### 확인을 한 이후에는 index.html 파일을 여러분들의 내용으로 바꾸시면 됩니다.