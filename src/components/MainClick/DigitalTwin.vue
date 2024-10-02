<template>
  <CategoryLayout>
    <div class="container">
      <div class="left-content">
        <div class="text-black font-bold title shadow-dark">Web Viewer</div>
        <hr class="divider" />
        <div class="text-black" style="font-size: 11px; margin-top: 0px">
          VC Robotics에서 구축한 자동화 설비 라인과 로봇의 동작을 3차원 웹
          환경에서 확인하고 검토할 수 있는 STNI의 시뮬레이션 웹 뷰어 솔루션입
          니다. 이 솔루션을 통해 설비와 로봇의 동작을 실시간으로
          시뮬레이션하고,<br />
          이를 쉽게 공유할 수 있습니다.
        </div>
        <img
          style="margin-top: 0px"
          class="first-img"
          src="@/assets/img/Digital/webview.png"
        />
      </div>
      <div class="right-content">
        <div
          style="margin-bottom: 25px"
          class="text-black font-bold title shadow-dark"
        >
          Digital Twin Mornitoring System
        </div>
        <hr class="divider" style="margin-bottom: 20px" />
        <div class="image-wrapper">
          <img class="second-img" src="@/assets/img/Digital/monitoring.png" />
          <div class="overlay-text">Monitoring System Overview</div>
          <div class="overlay-text-two">
            실시간 모니터링 시스템을 구축하여 문제를 신속히 감지하고
            대응함으로써 시스템의 안정성과 성능을 최적화합니다. 이를 통해 운영의
            효율성을 높이고 보안 강화 및 문제를 예방합니다.
          </div>
        </div>
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
.second-img {
  margin-top: 20px;
  width: 100%;
  height: auto; /* 이미지가 자동으로 비율에 맞게 높이가 조정됨 */
  object-fit: contain; /* 이미지를 부모 요소에 맞춰 자르지 않고 맞춤 */
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 750px; /* 부모 컨테이너에 맞추어 이미지 크기 설정 */
}

.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.overlay-text-two {
  margin: 13px;
  font-weight: bold;
  background-color: rgb(189, 189, 205);
  padding: 17px;
  position: absolute;
  bottom: 130px;
  left: 440px;
  color: rgb(14, 12, 12);
  font-size: 14px;
  border-radius: 12px 0px 12px 0px !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.container {
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
}

.left-content {
  width: 50%;
  padding: 0;
  margin: 0;
}

.right-content {
  width: 70%;
  padding: 0;
  margin: 0;
}

.divider {
  border: none;
  height: 1.3px;
  background-color: rgb(165, 165, 165);
  margin: 10px 0;
}
</style>
