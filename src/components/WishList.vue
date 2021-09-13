<template>
  <header>
    <div class="headerBox">
      <span class="Title">필터</span>
      <button onclick="color(0)" class="btncolor">오름차순</button>
      <button onclick="color(1)" class="btncolor">내림차순</button>
    </div>
  </header>
  <section>
    <article>
      <div class="container">
        <p>정렬</p>
        <div class="buttonflex">
          <button onclick="color(2)" class="btncolor">혼잡도순</button>
          <button onclick="color(3)" class="btncolor">랭킹순</button>
          <button onclick="color(4)" class="btncolor">거리순</button>
          <button onclick="color(5)" class="btncolor">글자순</button>
          <button onclick="color(6)" class="btncolor">리뷰많은순</button>
        </div>
      </div>
    </article>
    <article>
      <div class="container">
        <p>별점</p>
        <div class="buttonflex">
          <button onclick="color(7)" class="btncolor">랭킹순</button>
          <button onclick="color(8)" class="btncolor">
            <span class="Star"><span style="width: 100%"></span></span>
          </button>
          <button onclick="color(9)" class="btncolor">
            <span class="Star"
              ><span style="width: 80%; transform: translateX(-12%)"></span
            ></span>
          </button>
          <button onclick="color(10)" class="btncolor">
            <span class="Star"
              ><span style="width: 60%; transform: translateX(-34%)"></span
            ></span>
          </button>
          <button onclick="color(11)" class="btncolor">
            <span class="Star"
              ><span style="width: 40%; transform: translateX(-72%)"></span
            ></span>
          </button>
          <button onclick="color(12)" class="btncolor">
            <span class="Star"
              ><span style="width: 20%; transform: translateX(-200%)"></span
            ></span>
          </button>
        </div>
      </div>
    </article>
    <article>
      <div class="container">
        <p>정렬</p>
        <div class="buttonflex">
          <button onclick="color(13)" class="btncolor">전체</button>
          <button onclick="color(14)" class="btncolor">실내</button>
          <button onclick="color(15)" class="btncolor">실외</button>
        </div>
      </div>
    </article>
    <article>
      <div class="container">
        <p>카테고리</p>
        <div class="buttonflex">
          <button onclick="color(16)" class="btncolor">전체</button>
          <button onclick="color(17)" class="btncolor">???</button>
          <button onclick="color(18)" class="btncolor">???</button>
        </div>
      </div>
    </article>
    <article>
      <div class="container">
        <p>편의시설</p>
        <div class="buttonflex">
          <button onclick="color(19)" class="btncolor">주차가능</button>
          <button onclick="color(20)" class="btncolor">인터넷</button>
          <button onclick="color(21)" class="btncolor">단체석</button>
          <button onclick="color(22)" class="btncolor">지역화폐</button>
          <button onclick="color(23)" class="btncolor">유아 놀이방</button>
          <button onclick="color(24)" class="btncolor">대관서비스</button>
          <button onclick="color(25)" class="btncolor">노키즈존</button>
          <button onclick="color(26)" class="btncolor">콘센트</button>
          <button onclick="color(27)" class="btncolor">장애인 편의시설</button>
          <button onclick="color(28)" class="btncolor">흡연실</button>
          <button onclick="color(29)" class="btncolor">남녀화장실구분</button>
          <button onclick="color(30)" class="btncolor">24시간운영</button>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}

header {
  width: 414px;
  height: 100px;

  border-bottom: 12px solid #f1f2fa;
}

.headerBox {
  display: flex;
  float: left;
  margin-top: 46px;
  margin-left: 21px;
  align-items: flex-end;
}

.Title {
  float: left;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: -0.3px;

  margin-right: 41px;
}

header div button {
  float: left;

  display: flex;
  flex-direction: row;
  padding: 4px 21px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;

  color: #6f7198;

  background: #ffffff;
  border: 1px solid #b4b8d5;
  box-sizing: border-box;
  border-radius: 70px;

  margin-right: 14px;
}

section {
  width: 414px;
}

article {
  width: 414px;
  border-bottom: 1px solid #e0e0f4;
}

.container {
  box-sizing: border-box;
  padding: 0px 21px;
  padding-bottom: 13px;
}

section article p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.3px;

  margin-top: 23px;
  margin-bottom: 16px;
}

.buttonflex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

section article button {
  width: 80x;
  height: 24px;

  background: #ffffff;
  border: 1px solid #b4b8d5;
  box-sizing: border-box;
  border-radius: 70px;

  padding: 2px 21px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  margin-bottom: 13px;
  margin-right: 14px;

  color: #6f7198;
}

.Star {
  width: 63px;
}

.Star,
.Star span {
  display: inline-block;
  height: 12px;
  overflow: hidden;
  background: url(../assets/img/star.png) no-repeat;
  background-size: auto 24px;
}

.Star span {
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;
}
</style>