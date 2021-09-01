<template>
  <section>
    <article>
      <div class="profile">
        <span class="profile-middle-bar"></span>
        <img src="../assets/img/profile.png" alt="Avatar" />
        <span class="profile-middle-bar"></span>
      </div>
    </article>
    <article>
      <div class="nameRetouch">
        <span class="name">사용자</span>
        <img src="../assets/img/right.png" alt="화살표" />
        <a herf="#" class="retouch">정보수정</a>
      </div>
      <div class="myInformation">
        <div class="mi-content mic-1">
          <a href="#">13</a>
          <p style="letter-spacing: 20px">리뷰</p>
        </div>
        <div class="mi-content mic-1">
          <a href="#">27</a>
          <p style="letter-spacing: 12px">찜한매장</p>
        </div>
        <div class="mi-content">
          <a href="#"><img src="../assets/img/view.png" alt="최근본매장" /></a>
          <p style="letter-spacing: 5px">최근 본 매장</p>
        </div>
      </div>
    </article>
    <article>
      <div class="otherInformation">
        <img src="../assets/img/LFM-notice.png" alt="공지사항" /><a href="#"
          >공지사항</a
        >
        <img src="../assets/img/LFM-client.png" alt="고객센터" /><a href="#"
          >고객센터</a
        >
        <img src="../assets/img/LFM-information.png" alt="개인정보" /><a
          href="#"
          >개인정보 수집 및 동의</a
        >
        <img src="../assets/img/LFM-service.png" alt="서비스" /><a href="#"
          >서비스 이용약관</a
        >
        <img src="../assets/img/LFM-open.png" alt="오픈소스" /><a href="#"
          >오픈소스 라이선스</a
        >
        <img src="../assets/img/LFM-i.png" alt="버전정보" /><a href="#"
          >1.2.7 버전정보</a
        >
      </div>
    </article>
    <article class="myStoreBox">
      <a href="#" class="myStore">매장관리 하기</a>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  margin-bottom: 99px;
}

a {
  color: #000;
  text-decoration: none;
}
/* 사용자 프로필사진 */
.profile {
  margin-top: 46px;
  width: 414px;
  height: 110px;
  text-align: center;
  color: rgba(0, 0, 0, 0.35);
}
.profile > img {
  margin: 0 5px;
  display: inline-block;
  width: 119px;
  height: 119px;
  border-radius: 50%;
  vertical-align: middle;
}
/* 사용자 프로필 중앙 바 */
.profile-middle-bar {
  display: inline-block;
  width: 130px;
  height: 10px;
  border-radius: 50px;
  background-color: #eeeeee;
  vertical-align: middle;
}

/* 사용자 > 정보수정 컨테이너  */
.nameRetouch {
  margin-top: 20px;
  position: relative;
}
/* 이름 옆 > (화살표) 이미지 */
.nameRetouch img {
  transform: translateY(10%);
}

/* 사용자 이름(별명) */
.name {
  margin-top: 5px;
  margin-left: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 5px;

  color: #666666;
}
/* 사용자 정보 수정 */
.retouch {
  margin-left: 10px;

  font-family: Roboto;
  font-style: bold;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.3px;

  text-align: center;

  color: #446dff;
}
/* 사용자 메뉴(리뷰, 찜한매장, 최근 본 매장) */
.myInformation {
  margin-top: 20px;
  padding-bottom: 18px;

  width: 412px;
  height: 82px;

  border-bottom: 8px solid #ebebeb;
}
/* 메뉴 폰트(13,27 등 갯수 폰트) */
.mi-content a {
  font-family: Roboto;
  font-style: normal;
  font-size: 35px;
  letter-spacing: 9.7px;
}

/* 메뉴 리뷰, 찜한사이 옆 선 */
.mic-1 {
  box-sizing: border-box;
  border-right: 1px inset #f5f5f5;
}

/* 최근본매장 이미지 */
.mi-content img {
  display: block;
  margin: 0px auto;

  transform: translateY(-30%);

  width: 49px;
  height: 30px;
}

/* 메뉴 폰트(리뷰, 찜한매장, 최근 본 매장 폰트) */
.mi-content p {
  margin-left: 10px;
  margin-top: 18px;

  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
}

/* 메뉴 칸나누기 */
.myInformation .mi-content {
  display: inline-block;
  text-align: center;
  width: 32%;
}
/* 메뉴 바 아래 항목들(공지사항, 고객센터 등) */
.otherInformation img {
  float: left;
  width: 24px;
  height: 24px;

  margin-left: 38px;
  margin-top: 24px;
  margin-right: 37px;
}
/* 항목 칸, 크기, 폰트, 하단 선 */
.otherInformation a {
  display: block;
  width: 394px;
  height: 73px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 27px;
  letter-spacing: -0.3px;

  line-height: 73px;

  border-bottom: 1px solid #e9e9e9;
}
/* 매장관리버튼상자 */
.myStoreBox {
  width: 414px;
  height: 163px;
  box-sizing: border-box;
  padding: 42px 20px;
}
/* 매장관리버튼 */
.myStore{
  display: inline-block;
  width: 374px;
  height: 78px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 4.7px;

  color: #898989;

  line-height: 78px;
  text-align: center;

  border-radius: 15px;
  background-color: #e1e1e1;
}
</style>