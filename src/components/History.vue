<template>
  <h1>최근 zzkdfs</h1>
  <div class="mov-center">
    <header>
      <div class="titl">
        <h2>기간조회</h2>
        <p>2021 - 2020</p>
      </div>
      <div class="serch-bar">
        <div>
          <select name="year" style="width: 128px">
            <option value="2021">2021년</option>
            <option value="2021">2021년</option>
            <option value="2021">2021년</option>
          </select>
        </div>
        <div>
          <select name="month" style="width: 87px">
            <option value="8">8월</option>
            <option value="8">8월</option>
            <option value="8">8월</option>
          </select>
        </div>
        <button>선택</button>
      </div>
    </header>
    <section>
      <div class="menu">
        <button class="menuAtive">당일</button>
        <button>7일 전</button>
        <button>한달 전</button>
      </div>
      <div class="content">
        <div class="content-box">
          <div class="content-thumbnail"></div>
          <div class="content-txt">
            <a href="#" class="text">
              <p id="title">스타벅스</p>
              <img src="../assets/img/right.png" alt="" />
              <p id="rcrdDate">2021/8/8</p>
            </a>
            <p id="content-adres">부산 해운대구 좌동 순환로 178</p>
          </div>
        </div>
        <div class="review">
          <a href="#"><p>리뷰쓰기</p></a>
        </div>
      </div>

      <div class="content">
        <div class="content-box">
          <div class="content-thumbnail"></div>
          <div class="content-txt">
            <a href="#" class="text">
              <p id="title">사직야구장</p>
              <img src="../assets/img/right.png" alt="" />
              <p id="rcrdDate">2021/8/8</p>
            </a>
            <p id="content-adres">부산 동래구 사직동</p>
          </div>
        </div>
        <div class="review">
          <a href="#"><p>리뷰쓰기</p></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
/* 기본 틀 크기 */
.tool {
  width: 414px;
  height: 896px;
}
.mov-center {
  width: 374px;
  margin: 0px 20px;
  padding-top: 20px;
}
/* header 영역 */
header .titl h2 {
  /* 글 스타일 */

  display: inline-block;
  position: relative;
  font-family: "Roboto";
  color: #404040;
  font-size: 25px;
  /* 아이콘 정리 */
  padding: 0 40px;
  background-image: url(../assets/img/serch/기간조회아이콘.png);
  background-repeat: no-repeat;
  background-position: 0% center;

  margin-left: 5px;
}

header .titl h2::after {
  content: "";
  width: 6px;
  height: 29px;
  background-color: #ebebeb;
  position: absolute;
  left: 90%;
  top: 3px;
}

header .titl p {
  display: inline;
  font-size: 21px;
  color: #565656;
}

/* serch-bar */
header .serch-bar {
  height: 49px;
  background-color: #ebebeb;
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
header .serch-bar select {
  height: 31px;
  border: none;
  appearance: none;
  font-size: 16px;
}

header .serch-bar button {
  border: none;
  background-color: #cccccc;
  width: 79px;
  height: 31px;
  text-align: center;
  font-size: 16px;

  cursor: pointer;
}
/* section 메뉴*/
select {
  background: #fff url(../assets/img/기간조회.png) no-repeat 100%;

  text-align-last: left;
  appearance: none;

  box-sizing: border-box;
  padding-left: 11px;
  cursor: pointer;
}

/* section 내용 */
section .content {
  width: 374px;
  height: 167px;
  background-color: #fff;
  border: 1px solid #818181;
  border-radius: 20px;
  margin-top: 10px;
}

section .menu button {
  display: inline-block;
  padding: 5px 15px;
  margin: 0 10px 10px 0;
  background-color: #fff;
  border: 1.3px solid #a3a3a3;
  border-radius: 15px;
  cursor: pointer;
}

section .menu .menuAtive {
  background-color: #e7e7e7;
}
/* 가게 내용 */
section .content .content-box {
  width: inherit;
  height: 121px;
  box-sizing: border-box;
  padding: 17px;
  clear: both;
}
/* 이미지 곳 */
.content-box .content-thumbnail {
  float: left;
  width: 82px;
  height: 82px;
  background-color: #c4c4c4;
  border-radius: 16px;
}
/* 글 많은 공간 헿 */
.content-box .content-txt {
  float: left;
  margin-left: 15px;
}
/* 가게 주소 */
.content-txt #content-adres {
  color: #545454;
  font-size: 14px;
}

#content-adres::before {
  content: "";
  background-image: url("../assets/img/serch/지도표시.png");
  background-size: 18px 18px;
  width: 18px;
  height: 18px;
  display: inline-block;

  margin-right: 3px;
  transform: translateY(25%);
}

.content-box .content-txt .text {
  display: block;
  border-bottom: 1px solid #c9c9c9;
  box-sizing: border-box;
  padding-bottom: 4px;
  clear: both;
}
/* 가게 이름 */
.content-txt .text #title {
  display: inline;
  color: #000;
  font-size: 25px;
  font-weight: 700;
}
.content-txt .text img {
  max-width: 10px;
  margin-left: 10px;
}
/* 등록 날 */
.content-txt .text #rcrdDate {
  display: inline;
  float: right;
  font-size: 13px;
  color: #8f8f8f;
  letter-spacing: 0.06em;
  margin-top: 1em;
}

/* 리뷰타읨 */
.content .review {
  width: inherit;
  height: calc(100% - 121px);
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid #dbdbdb;
  text-align: center;
}

.content .review p {
  color: #535353;
  font-size: 14px;
  background: url(../assets/img/serch/리뷰아이콘.png) no-repeat top left 120px;
}
</style>