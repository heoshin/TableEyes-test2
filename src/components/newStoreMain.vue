<template>
  <header>
    <p>테이블 아이즈</p>
  </header>
  <section>
    <article class="information">
      <p class="informationFont">정보를 입력해주세요</p>
      <div class="ownerInformation">
        <div class="checkBox">
          <img src="../img/check.png" alt="" class="checkImg" />
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
          <img src="../img/uncheck.png" alt="" class="uncheckImg" />
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
    <article class="openStoreButton">
      <a href="#"><button class="openButton">입점하기</button></a>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>