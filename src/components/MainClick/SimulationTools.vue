<template>
  <CategoryLayout>
    <div class="container">
      <div class="left-content">
        <div class="text-black font-bold title shadow-dark">
          Process Simulation
        </div>
        <div
          class="w-40 shadow-dark rounded bg-[#e22926] text-white font-bold custom-label-radius"
        >
          적용분야
        </div>
        <div class="flex items-start space-x-2">
          <img
            class="icon-img"
            style="margin-left: 15px"
            src="@/assets/img/icon/welding.png"
            alt="Welding Icon"
          />
          <div class="flex flex-col">
            <div
              class="text-black font-bold"
              style="font-size: 25px; text-align: left; color: #0c197d"
            >
              용접 라인 시뮬레이션
            </div>
            <div class="text-black font-bold" style="font-size: 15px">
              로봇 간섭 및 생산 라인 밸런싱을 통한 설비 재배치
            </div>
          </div>
        </div>

        <img
          style="margin-top: 0px"
          class="first-img"
          src="@/assets/img/ProcessSimulation/weldingsimul.png"
        />

        <div class="flex items-start space-x-2">
          <img
            class="icon-img"
            style="margin-left: 15px"
            src="@/assets/img/ProcessSimulation/removableicon.png"
            alt="Welding Icon"
          />
          <div class="flex flex-col">
            <div
              class="text-black font-bold"
              style="font-size: 25px; text-align: left; color: #0c197d"
            >
              이동식 협동 로봇
            </div>
            <div class="text-black font-bold" style="font-size: 15px">
              AVG 배터리 용량, 최적 이동 경로, 병목 구간 검증
            </div>
          </div>
        </div>

        <img
          style="margin-top: 0px"
          class="first-img"
          src="@/assets/img/ProcessSimulation/removable.png"
        />
      </div>
      <div class="right-content">
        <img class="first-img" src="@/assets/img/Digital/simulateDigital.png" />

        <!-- 7개의 개별 카드 선언 -->
        <div class="seven-card" style="margin-top: 10px">
          <div class="card card-1">
            <div
              class="text-black font-bold"
              style="font-size: 20px; color: #efeaea; text-align: left"
            >
              공정 시뮬레이션과 디지털 트윈
            </div>
          </div>
          <div class="card card-2">
            <div class="number-container">
              <div class="number-text">01</div>
              <img
                class="icon-img"
                src="@/assets/img/ProcessSimulation/roboticon.png"
              />
              <div class="divider"></div>
              <div style="text-align: left">
                <span class="title-label">생산 계획 최적화 및 스케줄링</span
                ><br />
                <span class="small-text" style="margin-left: 16px"
                  >아이템별 수량을 계획한 만큼 생산할 수 있는지, 생산 순서를
                  변경하면 어떤 영향이 생기는지 예측</span
                >
              </div>
            </div>
          </div>
          <div class="card card-3">
            <div class="number-container">
              <div class="number-text">02</div>
              <img
                class="icon-img"
                src="@/assets/img/ProcessSimulation/processicon.png"
              />
              <div class="divider"></div>
              <div style="text-align: left">
                <span class="title-label">프로세스 개선, 병목현상 분석</span
                ><br />
                <span class="small-text" style="margin-left: 16px"
                  >병목구간 해소를 위한 추가적인 대안(장비 또는 로직)솔루션
                  검증</span
                >
              </div>
            </div>
          </div>
          <div class="card card-4">
            <div class="number-container">
              <div class="number-text">03</div>
              <img
                class="icon-img"
                src="@/assets/img/ProcessSimulation/factoryicon.png"
              />
              <div class="divider"></div>
              <div style="text-align: left">
                <span class="title-label">생산 라인 밸런싱</span><br />
                <span class="small-text" style="margin-left: 16px"
                  >설비 간 거리가 적정한지 동선의 효율성을 검증 가동률, 상세
                  작업 내용을 확인하고 설비 재배치</span
                >
              </div>
            </div>
          </div>
          <div class="card card-5">
            <div class="number-container">
              <div class="number-text">04</div>
              <img
                class="icon-img"
                src="@/assets/img/ProcessSimulation/cloudicon.png"
              />
              <div class="divider"></div>
              <div style="text-align: left">
                <span class="title-label">최적의 리소스 할당:직원 및 장비</span
                ><br />
                <span class="small-text" style="margin-left: 16px"
                  >작업부하를 고려하여 장비 및 인원 조정, 작업자 배치 등을 사전
                  예측하여 최적의 리소스 할당</span
                >
              </div>
            </div>
          </div>
          <div class="card card-6">
            <div class="number-container">
              <div class="number-text">05</div>
              <img
                class="icon-img"
                src="@/assets/img/ProcessSimulation/efficiencyicon.png"
              />
              <div class="divider"></div>
              <div style="text-align: left">
                <span class="title-label">제조 자산의 효율화</span><br />
                <span class="small-text" style="margin-left: 16px"
                  >최적의 효율을 원하는 제조업체에 가장 최적의 자동화 계획을
                  판매</span
                >
              </div>
            </div>
          </div>
          <div class="card card-7">
            <div class="number-container">
              <div class="number-text">06</div>
              <img
                class="icon-img"
                src="@/assets/img/ProcessSimulation/businessicon.png"
              />
              <div class="divider"></div>
              <div style="text-align: left">
                <span class="title-label">자동화 프로젝트의 영업력 향상</span
                ><br />
                <span class="small-text" style="margin-left: 16px"
                  >생산 대기열 및 가동 중지 시간 관리, 레이아웃 재구성을 통하여
                  작업 공간 사용을 최적화하는데 도움</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CategoryLayout>
</template>

<script>
import CategoryLayout from "@/views/MainClick/CategoryLayout.vue";

export default {
  name: "SimulationTools",
  components: {
    CategoryLayout,
  },
};
</script>

<style scoped>
.title-label {
  font-weight: bold;
  margin-left: 15px;
  font-size: 18px;
  color: #424242;
}
.icon-img {
  margin-right: 10px;
  width: 50px;
  height: 50px;
}
.container {
  display: flex;
  justify-content: space-between;
}

.left-content {
  margin: 0px 1px 20px 0px !important;
  width: 70%;
  height: 100%;
  flex-direction: column;
  gap: 16px;
  padding: 0;
}

.right-content {
  width: 70%;
  height: 100%;
}

.seven-card {
  margin-top: 0px;
  flex-wrap: wrap; /* 여러 줄로 카드 배치 */
  gap: 2px; /* 카드 간격을 10px 더 좁게 */
}

.card {
  box-shadow: none; /* 그림자 제거 */
  width: 100%;
  height: 70px; /* 카드 높이 통일 */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  border-radius: 12px 0px 12px 0px !important;
  color: white;
  font-size: 16px;
}

.card-1 {
  height: 50px !important;
  background-color: #424242; /* 첫 번째 카드: 검정색 */
}

.card-2 {
  background-color: #e1dfdf; /* 두 번째 카드: 첫 번째 컬러 */
}

.card-3 {
  background-color: #d0cccc; /* 세 번째 카드: 두 번째 컬러 */
}

.card-4 {
  background-color: #e1dfdf; /* 네 번째 카드: 첫 번째 컬러 */
}

.card-5 {
  background-color: #d0cccc; /* 다섯 번째 카드: 두 번째 컬러 */
}

.card-6 {
  background-color: #e1dfdf; /* 여섯 번째 카드: 첫 번째 컬러 */
}

.card-7 {
  background-color: #d0cccc; /* 일곱 번째 카드: 두 번째 컬러 */
}

.first-img {
  margin-top: 20px;
  align-content: center !important;
  width: 100%;
  height: 230px;
}

.title {
  background-color: #c2c1c1;
  margin-top: 10px;
  font-size: 24px;
}

.number-container {
  display: flex;
  align-items: flex-start; /* 수직 정렬 위쪽으로 변경 */
}

.number-text {
  font-weight: bold;
  font-size: 24px; /* 숫자 크기 조정 */
  color: rgb(58, 58, 58); /* 숫자 색상 조정 */
  text-align: left; /* 왼쪽 정렬 */
  margin-right: 10px; /* 오른쪽 여백 추가 */
  margin-top: 12px;
}

.divider {
  width: 2px; /* 구분선 두께 */
  height: 40px; /* 구분선 높이 */
  background-color: rgb(59, 59, 59); /* 구분선 색상 */
}

.shadow-dark {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}
.title {
  background-color: #c2c1c1;
  margin-top: 10px;
  font-size: 24px; /* 원하는 크기로 폰트 크기 조정 */
}
.shadow-dark {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); /* 더 진한 그림자 */
}
</style>
