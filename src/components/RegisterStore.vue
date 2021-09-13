<template>
  <!-- <header>
	<p>테이블 아이즈</p>
</header> -->

  <section class="storeMain">
    <article class="information">
      <p class="informationFont">정보를 입력해주세요</p>
      <div class="ownerInformation">
        <div class="checkBox">
          <img src="../assets/img/check.png" alt="" class="checkImg" />
        </div>
        <a href="#">
          <div class="informationBox">
            <p class="boxTitle">사업자 정보</p>
            <p class="boxContent">
              사업자 등록증의 상표, 사업자 등록증의 대표자 입력, 사업자 등록번호
            </p>
          </div>
        </a>
      </div>

      <div class="storeInformation">
        <div class="uncheckBox">
          <img src="../assets/img/uncheck.png" alt="" class="uncheckImg" />
        </div>
        <a href="">
          <div class="informationBox">
            <p class="boxTitle">가게 정보</p>
            <p class="boxContent">
              사업자 등록증의 상표, 사업자 등록증의 대표자 입력, 사업자 등록번호
            </p>
          </div>
        </a>
      </div>
    </article>
    <article class="doubleCheck">
      <div class="doubleCheckBox">
        <p class="doubleCheckFont">마지막으로</p>
        <a href="#">
          <button class="checkButton">
            <span class="ButtonFont">+확인하기</span>
          </button>
        </a>
      </div>
    </article>
    <!-- <article class="openStoreButton">
		<a href="#"><button class="openButton">입점하기</button></a>
	</article> -->
  </section>
  <!-- 사업자 정보 페이지 -->
  <div class="BusinessInformationPage">
    <!-- <header></header> -->
    <form>
      <section>
        <div class="titleBox">
          <p class="title">사업자 정보를 등록해주세요</p>
        </div>
        <article class="boxSize">
          <label class="subTitle">사업자 등록증의 상호</label>
          <input type="text" class="input" required />
          <p class="explanation">사업자 등록증의 상호를 입력해주세요</p>
        </article>
        <article class="boxSize">
          <label class="subTitle">사업자 등록증의 대표자</label>
          <input type="text" class="input" required />
          <p class="explanation">사업자 등록증의 대표자를 입력해주세요</p>
        </article>
        <article class="boxSize">
          <label class="subTitle">사업자 등록번호</label>
          <input
            type="text"
            class="input"
            placeholder="-없이 입력해주세요"
            required
          />
          <p class="explanation">사업자 등록번호를 입력해주세요</p>
        </article>
      </section>

      <!-- <footer>
			<a href="#"><button type="submit" class="next">등록하기</button></a>
		</footer> -->
    </form>
  </div>
  <!-- 가게정보페이지-1 -->
  <div class="StoreInformationPage">
    <header>
      <div class="progressBox">
        <div class="progress-chart">
          <div class="progress-bar" style="width: 25%"></div>
        </div>
        <div class="progressTextBox">
          <span>1</span><span class="progressFont">/4</span>
        </div>
      </div>
    </header>
    <form>
      <section>
        <div class="titleBox">
          <p class="title">기본정보를 입력해주세요</p>
        </div>
        <article class="boxSize">
          <label class="subTitle">가게명</label>
          <input type="text" class="input" required />
          <p class="explanation">고객들에게 보여질 가게 이름을 입력해주세요</p>
        </article>
        <article class="boxSize">
          <label class="subTitle">업장주소</label>
          <input type="text" class="input" required />
          <p class="explanation">가게의 위치를 입력해주세요</p>
        </article>
      </section>

      <footer>
        <a href="./newStore-2.html" type="submit">
          <button class="next" onclick="location.href='./newStore-2.html'">
            다음으로
          </button></a
        >
      </footer>
    </form>
  </div>

  <!-- 가게정보페이지-2 -->
  <!-- <header>
    <div class="progressBox">
      <div class="progress-chart">
        <div class="progress-bar" style="width: 50%"></div>
      </div>
      <div class="progressTextBox">
        <span>2</span><span class="progressFont">/4</span>
      </div>
    </div>
  </header> -->
  <form>
    <section>
      <div class="titleBox">
        <p class="title">영업시간 설정</p>
      </div>
      <article class="boxSize">
        <label class="subTitle">오픈시간</label>
        <input type="text" class="timepicker" />
        <p class="explanation">가게 오픈시간을 설정해주세요</p>
      </article>
      <article class="boxSize">
        <label class="subTitle">마감시간</label>
        <input type="text" class="timepicker" />
        <p class="explanation">가게 마감시간을 설정해주세요</p>
      </article>
      <article class="TimeCheckBox">
        <input type="checkBox" />
        <label class="TimeCheckFont">익일마감</label>
        <input type="checkBox" />
        <label class="TimeCheckFont">24시간영업</label>
      </article>
    </section>

    <!-- <footer>
      <a href="#"><button type="submit" class="next">다음으로</button></a>
    </footer> -->
  </form>
  <!-- 가게정보페이지-3 -->
  <!-- <header>
	<div class="progressBox">
		<div class="progress-chart">
			<div class="progress-bar" style="width: 75%"></div>
		</div>
		<div class="progressTextBox">
			<span>1</span><span class="progressFont">/4</span>
		</div>
	</div>
</header> -->
  <form>
    <section>
      <div class="titleBox">
        <p class="title">전화번호를 입력해주세요</p>
      </div>
      <article class="boxSize">
        <label class="subTitle">업주전화</label>
        <input
          type="text"
          class="input"
          placeholder="-없이 입력해주세요"
          required
        />
        <p class="explanation">업주전화를 입력해주세요</p>
      </article>
      <article class="boxSize">
        <label class="subTitle">가게전화</label>
        <input
          type="text"
          class="input"
          placeholder="-없이 입력해주세요"
          required
        />
        <p class="explanation">가게의 전화를 입력해주세요</p>
      </article>
    </section>

    <!-- <footer>
		<a href="./newStore-2.html" type="submit">
		<button class="next" onclick="location.href='./newStore-2.html'">
			다음으로
		</button>
		</a>
	</footer> -->
  </form>

	<!-- 가게정보페이지-4 -->

<!-- 확인하기페이지 -->

</template>

<script>
// $(document).ready(function () {
//   $(".timepicker").mdtimepicker();
// });
// $(".timepicker").mdtimepicker({
//   // format of the time value (data-time attribute)
//   timeFormat: "hh:mm:ss.000",

//   // format of the input value
//   format: "h:mm tt",

//   // theme of the timepicker
//   // 'red', 'purple', 'indigo', 'teal', 'green', 'dark'
//   theme: "green",

//   // determines if input is readonly
//   readOnly: true,

//   // determines if display value has zero padding for hour value less than 10 (i.e. 05:30 PM); 24-hour format has padding by default
//   hourPadding: false,

//   // determines if clear button is visible
//   clearBtn: false,
// });
// $(".timepicker")
//   .mdtimepicker()
//   .on("timechanged", function (e) {
//     console.log(e.value);
//     console.log(e.time);
//   });
// // setting the value
// $(".timepicker").mdtimepicker("setValue", "0:00 PM");

// // calling the `show` and `hide` functions
// $(".timepicker").mdtimepicker("show");
// $(".timepicker").mdtimepicker("hide");

// // destroying the timepicker
// $(".timepicker").mdtimepicker("destroy");
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
  color: #000;
}

section {
  margin-top: 120px;
  margin-bottom: 170px;
}

header {
  overflow: hidden;
  position: fixed;

  top: 0;
  left: 0;
  background-color: #fff;

  width: 414px;
  height: 97px;

  border-bottom: 12px solid #e6e6e6;
}

footer {
  position: fixed;

  bottom: 0;
  left: 0;

  background-color: #fff;
}

header p {
  display: inline-block;
  margin-left: 21px;
  margin-top: 46px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: -0.3px;
}

.storeMain {
  box-sizing: border-box;
  padding: 0px 20px;
}

.information {
  height: 330px;
  margin-bottom: 69px;
}

.informationFont,
.doubleCheckFont {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
}

.informationFont {
  margin-left: 15px;
  margin-bottom: 40px;
  margin-top: 50px;
}

.informationFont::before,
.doubleCheckFont::before {
  content: "";
  background-image: url("../assets/img/Rectangle.png");
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
  display: inline-block;

  margin-right: 9px;
  transform: translateY(8%);
}

.ownerInformation {
  width: 374px;
  height: 120px;

  margin-bottom: 22px;
  border-radius: 15px;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.1);
}

.storeInformation {
  width: 374px;
  height: 120px;

  border-radius: 15px;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.1);
}

.checkBox,
.uncheckBox {
  float: left;
  width: 33px;
  height: 120px;

  border-radius: 15px 0px 0px 15px;
}

.checkBox {
  background: #c4c4c4;
}

.uncheckBox {
  background: #ffffff;
  border: 1px solid #fff;
  border-right: none;
  box-sizing: border-box;
}

.checkImg,
.uncheckImg {
  position: relative;
  left: 5px;
  right: 4px;
  top: 14px;
}

.informationBox {
  float: left;

  padding: 0px 14px;

  width: 338px;
  height: 120px;

  background: #ffffff;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 0px 15px 15px 0px;
  border-left: none;
}

.boxTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.3px;

  margin-top: 16px;
}

.boxContent {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.7px;

  color: #7e7e7e;

  margin-top: 16px;
}

.information {
  height: 330px;
}

.doubleCheck {
  height: 177px;
  margin-bottom: 55px;
}

.doubleCheckBox {
  width: 374px;
  height: 177px;

  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  padding: 0px 25px;
}

.doubleCheckFont {
  margin-top: 22px;
  margin-left: -7px;
}

.checkButton {
  width: 324px;
  height: 73px;

  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 10px;

  background-color: #ffffff;
  margin-top: 30px;
}

.ButtonFont {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.3px;

  color: #1400ff;
}

.openStoreButton {
  width: 374px;
  height: 70px;

  margin-bottom: 46px;
}

.openButton {
  width: 374px;
  height: 70px;

  background: #e1e1e1;
  border-radius: 15px;

  border: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 4.7px;

  color: #898989;
}
/* 사업자등록페이지 */
.progressBox {
  margin: 41px 20px 3px 241px;
}

.progress-chart {
  width: 153px;
  height: 10px;

  background: #e3e3e3;
  border-radius: 10px;

  transform: translateY(35%);

  margin-bottom: 4px;
}

.progress-bar {
  border-radius: 10px;
  height: 10px;
  background: #8d8d8d;
}

.progressTextBox {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;

  letter-spacing: -0.3px;

  color: #000000;

  text-align: right;
}

.progressFont {
  color: #979797;
}
/* 큰제목 */
.titleBox {
  width: 414px;
  height: 73px;

  border-bottom: 1px solid #e3e3e3;
}

.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: -0.3px;

  line-height: 72px;

  margin-left: 20px;
}
/* 항목 컨테이너 */
.boxSize {
  width: 414px;
  height: 165px;

  box-sizing: border-box;

  padding: 0px 20px;
  border-bottom: 1px solid #e3e3e3;
}
/* 각 항목 제목 */
.subTitle {
  display: block;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.3px;

  margin-top: 23px;
}
/* 선택됐을 때 테두리 보라색 */
input:focus {
  outline: none;
  border: 1px solid #f700ff;
  border-radius: 10px;
}

.input {
  width: 374px;
  height: 58px;

  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: -0.3px;

  padding-left: 19px;
  margin-top: 14px;
}

.explanation {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  letter-spacing: -1px;

  color: #696969;

  margin-top: 10px;
}
/* 버튼 */
footer a {
  display: inline-block;
  width: 374px;
  height: 70px;

  margin: 46px 20px;
}

.next {
  border: none;

  width: 374px;
  height: 70px;
  /* 모든 입력창에 입력이 되어 있으면 
	background: #BEBEBE;색으로 버튼색이 바껴야함 */
  background: #e1e1e1;
  border-radius: 15px;

  text-align: center;
  line-height: 70px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;

  text-align: center;
  letter-spacing: 4.7px;

  color: #ffffff;
}

/* 가게정보페이지-2 */
.timepicker {
  width: 374px;
  height: 58px;

  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: -0.3px;

  padding-left: 19px;
  padding-right: 26px;
  margin-top: 14px;
}

.explanation {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  letter-spacing: -1px;

  color: #696969;

  margin-top: 10px;
}

.TimeCheckBox {
  width: 414px;

  box-sizing: border-box;

  margin-top: 20px;
  padding-left: 20px;
}

.TimeCheckBox input {
  margin-right: 13px;
}

.TimeCheckFont {
  margin-right: 59px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  letter-spacing: -0.3px;

  color: #353535;
}
</style>