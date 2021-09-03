<template>
  <div class="base">
    <header>
      <div class="slide">
        <input type="radio" name="a" id="slide1" checked />
        <input type="radio" name="a" id="slide2" />
        <input type="radio" name="a" id="slide3" />
        <ul id="sli">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="bullets">
          <label for="slide1">&nbsp;</label>
          <label for="slide2">&nbsp;</label>
          <label for="slide3">&nbsp;</label>
        </div>
      </div>
    </header>
    <section>
      <article class="choice">
        <div>
          <a href="#">
            <span></span>
            <p>전체</p>
          </a>
          <a href="#">
            <span></span>
            <p>영화</p>
          </a>
          <a href="#">
            <span></span>
            <p>노래방</p>
          </a>
          <a href="#">
            <span></span>
            <p>스포츠</p>
          </a>
          <a href="#">
            <span></span>
            <p>pc방</p>
          </a>
          <a href="#">
            <span></span>
            <p>보드게임</p>
          </a>
        </div>
      </article>
      <article class="price">
        <div class="price-box">
          <p class="font">가격대별 BEST</p>
          <ul>
            <li>만원이하</li>
            <li>1~2만원</li>
            <li>3~4만원</li>
            <li>5~6만원</li>
          </ul>
        </div>
        <hr />
        <div id="rivew-box">
          <ul>
            <a href="./storePage.html">
              <li>
                <div class="img-box"></div>
                <div class="txt-box">
                  <span class="mainStar"
                    ><span style="width: 100%"></span
                  ></span>
                  <p>5.0</p>
                </div>
              </li>
            </a>
            <li>
              <div class="img-box"></div>
              <div class="txt-box">
                <span class="mainStar"><span style="width: 84%"></span></span>
                <p>4.2</p>
              </div>
            </li>
            <li>
              <div class="img-box"></div>
              <div class="txt-box">
                <span class="mainStar"><span style="width: 72%"></span></span>
                <p>3.8</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="banner"></div>
      </article>
      <article class="hot">
        <p class="font">요즘 내주변 HOT</p>
        <div class="scroll">
          <ul>
            <a href="#">
              <li>
                <div>
                  <p class="hot-f1">학사당구장</p>
                  <p class="hot-f2">부산 동구 초량동 **</p>
                  <span class="subStar"><span style="width: 63%"></span></span>
                  <p class="hot-f3">3.1</p>
                </div>
              </li>
            </a>

            <a href="#">
              <li>
                <div>
                  <p class="hot-f1">학사당구장</p>
                  <p class="hot-f2">부산 동구 초량동 **</p>
                  <span class="subStar"><span style="width: 50%"></span></span>
                  <p class="hot-f3">2.5</p>
                </div>
              </li>
            </a>

            <a href="#">
              <li>
                <div>
                  <p class="hot-f1">학사당구장</p>
                  <p class="hot-f2">부산 동구 초량동 **</p>
                  <span class="subStar"><span style="width: 68%"></span></span>
                  <p class="hot-f3">3.5</p>
                </div>
              </li>
            </a>
            <a href="#">
              <li>
                <div>
                  <p class="hot-f1">학사당구장</p>
                  <p class="hot-f2">부산 동구 초량동 **</p>
                  <span class="subStar"><span style="width: 68%"></span></span>
                  <p class="hot-f3">3.5</p>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {};
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
}

/* 기본 틀 모드 */
.base {
  width: 414px;
}

/* 슬라이드쪽 */
.base header {
  width: 414px;
  height: 196px;
  margin-bottom: 20px;
}
.base header .slide {
  width: inherit;
  height: inherit;
  position: relative;
  overflow: hidden;
}
.base header .slide ul {
  width: 1656px;
  height: inherit;
  animation: sli 8s infinite;
}
.base header .slide input[type="radio"] {
  display: none;
}
.base header .slide ul li {
  width: 414px;
  height: inherit;
  float: left;
}
.base header .slide ul li:nth-child(1) {
  background-color: khaki;
}
.base header .slide ul li:nth-child(2) {
  background-color: lavender;
}
.base header .slide ul li:nth-child(3) {
  background-color: pink;
}

/* 돌아가는 친구 동골이 모양 세팅 */
.base header .slide .bullets {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  bottom: 0;
}
.bullets label {
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.55);
  width: 10px;
  height: 10px;
  cursor: pointer;
}

/* 빙글뱅글 뱅뱅 */
@keyframes sli {
  form {
    margin-left: 0;
  }
  33% {
    margin-left: -414px;
  }
  66% {
    margin-left: -828px;
  }
  to {
    margin-left: 0;
  }
}

/* 동골이 선텍하면 색깔 바뀜 히히 */
.base
  header
  .slide
  input[type="radio"]:nth-child(1):checked
  ~ .bullets
  label:nth-child(1) {
  background-color: #fff;
}
.base
  header
  .slide
  input[type="radio"]:nth-child(2):checked
  ~ .bullets
  label:nth-child(2) {
  background-color: #fff;
}
.base
  header
  .slide
  input[type="radio"]:nth-child(3):checked
  ~ .bullets
  label:nth-child(3) {
  background-color: #fff;
}

/* 회색 동골이 있슴 */
.base section .choice {
  width: 414px;
  height: 289px;
  margin-bottom: 10px;

  box-sizing: border-box;
  padding: 0px 20px;
}
.base section .choice div {
  width: 414px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.base section .choice div a {
  color: black;
  margin-right: 30px;
  margin-top: 20px;
}
.base section .choice div a span {
  display: block;
  width: 90px;
  height: 90px;
  background-color: #c4c4c4;
  border-radius: 50%;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
}
.base section .choice div a p {
  margin-top: 5px;
  text-align: center;
}
.base section .choice a:hover span {
  background-color: #6a6a6a;
}

/* 가격대별 베스트 */
.base section .price {
  height: 800px;
  padding-top: 20px;
  border-top: 12px solid #eeeeee;
}
.base section .price div {
  width: 380px;
  margin: 0 auto;
}
.font {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}
.base section .price .price-box ul {
  width: inherit;
  height: 40px;
}
.base section .price .price-box ul li {
  width: 78px;
  height: 24px;
  border: 2px solid #a3a3a3;
  border-radius: 40px;
  text-align: center;
  float: left;
  margin: 0 5px;
  cursor: pointer;
  background-color: white;
}
#rivew-box {
  height: 480px;
}
.base section .price #rivew-box ul li {
  width: inherit;
  height: 110px;
  box-shadow: 0px 2px 7px #646464;
  border-radius: 20px;
  margin: 15px 0;
  cursor: pointer;
  background-color: white;
}
.base section .price #rivew-box ul li .img-box {
  float: left;
  width: 110px;
  height: inherit;
  background-color: #bebebe;
  border-radius: 20px 0 0 20px;
}
.base section .price #rivew-box ul li .txt-box {
  float: left;
  width: calc(100% - 110px);
  height: inherit;
  box-sizing: border-box;
  position: relative;
}

.base section .price #rivew-box ul li .txt-box p {
  position: absolute;
  bottom: 15px;
  left: 108px;
  color: #646464;
}

.mainStar {
  width: 74px;
}

.mainStar,
.mainStar span {
  display: inline-block;
  height: 14px;
  overflow: hidden;
  background: url(../assets/img/star.png) no-repeat;
  background-size: auto 28px;

  position: absolute;
  bottom: 18px;
  left: 23px;
}

.mainStar span {
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;

  position: absolute;
  bottom: 0px;
  left: 0px;
}

.base section .banner {
  height: 151px;
  background-color: lightgray;
  border-radius: 15px;
}

/* 내주변 핫플레이스 */
.base section .hot {
  width: 414px;
  height: 385px;
  margin: 0 auto;
}

.base section .hot .font {
  margin-left: 28px;
}

.base section .hot .scroll {
  width: inherit;
  overflow-x: scroll;
}

.scroll::-webkit-scrollbar {
  display: none;
}

.base section .hot .scroll ul {
  width: 850px;
  height: 220px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-left: 5px;
  margin-bottom: 150px;
}
.base section .hot .scroll ul a li {
  width: 200px;
  height: 220px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  position: relative;
}
.base section .hot .scroll ul a div {
  width: inherit;
  height: 100px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 10px;
}
.base section .hot .scroll ul a div p {
  color: white;
  float: right;
}
.base section .hot .scroll ul a div .hot-f1 {
  font-size: 20px;
  font-weight: bold;
}
.base section .hot .scroll ul a div .hot-f2 {
  font-size: 12px;
}
.base section .hot .scroll ul a div .hot-f3 {
  color: #b64ae9;
  position: absolute;
  bottom: 16px;
  left: 155px;
}

.subStar {
  width: 90px;
}

.subStar,
.subStar span {
  display: inline-block;
  height: 17px;
  overflow: hidden;
  background: url(../assets/img/star.png) no-repeat;
  background-size: auto 34px;

  position: absolute;
  bottom: 18px;
  left: 58px;
}

.subStar span {
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;

  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>