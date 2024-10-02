<template>
  <CategoryLayout>
    <div class="container">
      <div class="left-content">
        <img
          style="margin-top: 0px"
          class="first-img"
          src="@/assets/img/company/leftcom.png"
        />
      </div>
      <div class="right-content">
        <div class="vertical-layout">
          <div class="icon">
            <img style="margin-top: 0px" src="@/assets/img/icon/pin.png" />
          </div>
          <hr class="divider" style="width: 40px; height: 3px" />
          <div class="text-black font-bold" style="text-align: left">
            조직도
          </div>
          <img class="second-img" src="@/assets/img/company/organize.png" />
        </div>

        <!-- 두 번째 세트 -->
        <div class="vertical-layout" style="margin-top: 20px">
          <div class="icon">
            <img style="margin-top: 0px" src="@/assets/img/icon/pin.png" />
          </div>
          <hr class="divider" style="width: 40px; height: 3px" />
          <div class="text-black font-bold" style="text-align: left">
            사업분야
          </div>
          <div
            class="text-black"
            style="text-align: left; font-size: 13px; margin-top: 5px"
          >
            에스티앤아이는 가상 제조 공장에 필요한<br />
            솔루션 판매와 기술지원, 기술 용역 업무를 수행하고 있습니다.
          </div>
          <img class="third-img" src="@/assets/img/company/circle.png" />
        </div>

        <!-- 7개의 개별 카드 선언 -->
        <div class="seven-card" style="margin-top: 10px"></div>
      </div>
    </div>
  </CategoryLayout>
</template>

<script>
import CategoryLayout from "@/views/MainClick/CategoryLayout.vue";

export default {
  name: "DigitalTwin",
  components: {
    CategoryLayout,
  },
};
</script>

<style scoped>
.icon {
  width: 20px; /* 아이콘 크기 조정 */
  height: 20px; /* 아이콘 크기 조정 */
  margin-top: 13px;
  margin-left: 10px;
}

.second-img {
  margin-top: 10px;
  align-content: center !important;
  width: 350px;
  height: 310px;
}
.third-img {
  margin-top: 10px;
  align-content: center !important;
  width: 300px;
  height: 290px;
}

.first-img {
  margin-top: 20px;
  align-content: center !important;
  width: 100%;
  height: 100%;
}

.container {
  margin-top: 0px;
  display: flex; /* Flexbox 활성화 */
  justify-content: space-between;
}

.left-content {
  margin: 20px 20px 0px 20px !important;
  width: 75%;
  height: 800px;
  flex-direction: column;
  gap: 16px;
  padding: 0;
}

.right-content {
  padding: 0px 20px 0px 20px;
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column; /* 요소를 수직으로 정렬 */
  justify-content: flex-start;
}

.vertical-layout {
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  align-items: flex-start;
}

.divider {
  border: none;
  height: 3px;
  background-color: rgb(165, 165, 165);
  margin: 10px 0;
}
</style>
