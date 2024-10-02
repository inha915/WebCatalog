<template>
  <CategoryLayout>
    <div class="container">
      <div class="left-content">
        <div class="text-black font-bold title shadow-dark">
          Visual Components
        </div>
        <div
          class="w-40 shadow-dark rounded bg-[#e22926] text-white font-bold custom-label-radius"
        >
          적용분야
        </div>
        <div>
          <img
            src="@/assets/img/VC/visualcomponent.png"
            alt="아이콘"
            class="left-image shadow-dark rounded"
          />
        </div>
      </div>
      <div class="right-content">
        <div
          class="w-40 shadow-dark rounded bg-[#e22926] text-white font-bold custom-label-radius"
        >
          차별성
        </div>
        <div class="five-content" style="margin: 30px 50px 0px 0px !important">
          <div class="purple-card shadow-dark rounded">
            <div class="purple-small-card">
              <img
                src="@/assets/img/icon/usually.png"
                alt="아이콘"
                class="icon"
              />
            </div>
            <div class="purple-white-card">
              <label class="text-label">
                <span class="bold-text">쉬운사용</span><br />
                <span class="small-text"
                  >MCAD 프로그램으로 만든 지오메트리 파일을 무료로 쉽게 가져올
                  수
                  <br />
                  있습니다.</span
                >
              </label>
            </div>
          </div>

          <div class="mint-card shadow-dark rounded">
            <div class="mint-small-card">
              <img
                src="@/assets/img/icon/platform.png"
                alt="아이콘"
                class="icon"
              />
            </div>
            <div class="mint-white-card">
              <label class="text-label" style="padding-left: 15px">
                <span class="bold-text">단일 플랫폼</span><br />
                <span class="small-text"
                  >레이아웃 구성, 물류 시뮬레이션, 로봇 프로그래밍(OLP), Virtual
                  Commissioning, VR 등 다양한 제조 환경의 애플리케이션을<br />
                  위한 하나 의 플랫폼을 제공</span
                >
              </label>
            </div>
          </div>

          <div class="blue-card shadow-dark rounded">
            <div class="blue-small-card">
              <img
                src="@/assets/img/icon/acceleration.png"
                alt="아이콘"
                class="icon"
              />
            </div>
            <div class="blue-white-card">
              <label class="text-label" style="padding-left: 5px">
                <span class="bold-text">영업력 가속화</span><br />
                <span class="small-text"
                  >VC Robotics OLP에서 지원하는 강력한 시뮬레이션 기능을<br />
                  통해 구동하는 공정 에 대한 3D PDF, Avi, 4K 등을 시각적으로
                  제공하여 <br />관계자 간의 내용공유 및 고객 설득에
                  용이합니다.</span
                >
              </label>
            </div>
          </div>

          <div class="orange-card shadow-dark rounded">
            <div class="orange-small-card">
              <img src="@/assets/img/icon/cost.png" alt="아이콘" class="icon" />
            </div>
            <div class="orange-white-card">
              <label class="text-label">
                <span class="bold-text">가성비</span><br />
                <span class="small-text"
                  >공장 레이아웃 및 3D 설계데이터 배치를 통해 작업성을 미리
                  확인하여<br />
                  발생여지가 있을 재설치로 인한 재정적 및 시간적 손실을 미연에
                  방지</span
                >
              </label>
            </div>
          </div>

          <div class="red-card shadow-dark rounded">
            <div class="red-small-card">
              <img
                src="@/assets/img/icon/robot.png"
                alt="아이콘"
                class="icon"
              />
            </div>
            <div class="red-white-card">
              <label class="text-label" style="padding-right: 10px">
                <span class="bold-text">로봇 OLP</span><br />
                <span class="small-text"
                  >오프라인 프로그래밍은 온라인에 비해 생산 중단을 최소 1/10
                  절감<br />
                  Hyundai, Doosan, Yaskawa, ABB, KUKA, Nachi 등의 15종 이상의<br />
                  로봇 브랜드 제공</span
                >
              </label>
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
  name: "DigitalTwin",
  components: {
    CategoryLayout,
  },
};
</script>

<style>
.next-btn {
  margin: 395px 0px 0px 0px;
  width: 70px;
  height: 70px;
}
.title {
  background-color: #c2c1c1;
  margin-top: 10px;
  font-size: 24px; /* 원하는 크기로 폰트 크기 조정 */
}

.container {
  width: 100%;
  margin-left: 100px;
  display: flex; /* Flexbox 활성화 */
  justify-content: space-between; /* 박스 사이를 동일하게 정렬 */
}
.five-content {
  margin-left: 10px;
}
.left-image {
  margin-left: 10px;
  width: 700px;
  height: 700px;
}
.text-label {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  text-align: left;
  color: #333; /* 기본 텍스트 색상 */
}

.bold-text {
  font-weight: bold;
  font-size: 22px; /* 원하는 크기로 조정 */
  color: navy; /* 네이비색 */
}

.small-text {
  font-size: 12px; /* 작은 폰트 크기 */
  color: #333; /* 기본 텍스트 색상 */
}

.left-content {
  margin: 0px 100px 20px 50px !important;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;

  overflow-y: none;
}

/* 보라색 그라데이션 카드 */
.purple-card {
  background: linear-gradient(to right, #b3abf7, #c7c1fa); /* 그라데이션 */
  padding: 20px;
  border-radius: 12px;
  height: 125px;
  width: 620px;
  position: relative; /* 중간에 작은 카드 및 흰색 카드 배치 */
  margin-bottom: 30px;
}

.mint-card {
  background: linear-gradient(to right, #0bba9d, #0ec7a8); /* 그라데이션 */
  padding: 20px;
  border-radius: 12px;
  height: 125px;
  width: 620px;
  position: relative; /* 중간에 작은 카드 및 흰색 카드 배치 */
  margin-bottom: 30px;
}
.blue-card {
  background: linear-gradient(to right, #2f84de, #2f84de); /* 그라데이션 */
  padding: 20px;
  border-radius: 12px;
  height: 125px;
  width: 620px;
  position: relative; /* 중간에 작은 카드 및 흰색 카드 배치 */
  margin-bottom: 30px;
}
.orange-card {
  background: linear-gradient(to right, #e78f2b, #e78f2b); /* 그라데이션 */
  padding: 20px;
  border-radius: 12px;
  height: 125px;
  width: 620px;
  position: relative; /* 중간에 작은 카드 및 흰색 카드 배치 */
  margin-bottom: 30px;
}
.red-card {
  background: linear-gradient(to right, #e56a66, #e56a66); /* 그라데이션 */
  padding: 20px;
  border-radius: 12px;
  height: 125px;
  width: 620px;
  position: relative; /* 중간에 작은 카드 및 흰색 카드 배치 */
  margin-bottom: 30px;
}
/*보라색 카드 위의 연보라색 카드 */
.purple-small-card {
  border-radius: 0px 12px 12px 0px !important;
  background-color: #d1ccf9;
  color: #b8b1f5;
  padding: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1); /* 내부 그림자 */
  width: 600px; /* 블루 카드보다 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 53%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 말풍선 모양 추가 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 8px 0; /* 오른쪽 모서리를 둥글게 */
}

.mint-small-card {
  border-radius: 0px 12px 12px 0px !important;
  background-color: #b4eee4;
  color: #90e4d6;
  padding: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1); /* 내부 그림자 */
  width: 600px; /* 블루 카드보다 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 53%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 말풍선 모양 추가 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 8px 0; /* 오른쪽 모서리를 둥글게 */
}
.blue-small-card {
  border-radius: 0px 12px 12px 0px !important;
  background-color: #87bae7;
  color: #87bae7;
  padding: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1); /* 내부 그림자 */
  width: 600px; /* 블루 카드보다 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 53%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 말풍선 모양 추가 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 8px 0; /* 오른쪽 모서리를 둥글게 */
}
.orange-small-card {
  border-radius: 0px 12px 12px 0px !important;
  background-color: #ebca98;
  color: #ebca98;
  padding: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1); /* 내부 그림자 */
  width: 600px; /* 블루 카드보다 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 53%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 말풍선 모양 추가 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 8px 0; /* 오른쪽 모서리를 둥글게 */
}
.red-small-card {
  border-radius: 0px 12px 12px 0px !important;
  background-color: #efaba8;
  color: #efaba8;
  padding: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1); /* 내부 그림자 */
  width: 600px; /* 블루 카드보다 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 53%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 말풍선 모양 추가 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 8px 0; /* 오른쪽 모서리를 둥글게 */
}
.mint-white-card {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  width: 460px; /* 작은 카드보다 더 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 60%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 낮은 z-index 값 */
}
.blue-white-card {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  width: 460px; /* 작은 카드보다 더 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 60%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 낮은 z-index 값 */
}
.orange-white-card {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  width: 460px; /* 작은 카드보다 더 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 60%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 낮은 z-index 값 */
}
.red-white-card {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  width: 460px; /* 작은 카드보다 더 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 60%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 낮은 z-index 값 */
}

.mint-white-card:after {
  border-top: 35px solid transparent !important;
  border-left: 35px solid #b4eee4 !important; /* 왼쪽 경계선 색상 */
  border-right: 35px solid transparent !important;
  border-bottom: 35px solid transparent !important;
  content: "" !important;
  position: absolute !important;
  top: 29px !important; /* 위쪽 위치 조정 */
  left: -2px !important; /* 왼쪽 위치 조정 */
  z-index: 10 !important; /* z-index 추가 */
}

.purple-white-card:after {
  border-top: 35px solid transparent !important;
  border-left: 35px solid #d1ccf9 !important; /* 왼쪽 경계선 색상 */
  border-right: 35px solid transparent !important;
  border-bottom: 35px solid transparent !important;
  content: "" !important;
  position: absolute !important;
  top: 29px !important; /* 위쪽 위치 조정 */
  left: -2px !important; /* 왼쪽 위치 조정 */
  z-index: 10 !important; /* z-index 추가 */
}

.blue-white-card:after {
  border-top: 35px solid transparent !important;
  border-left: 35px solid #87bae7 !important; /* 왼쪽 경계선 색상 */
  border-right: 35px solid transparent !important;
  border-bottom: 35px solid transparent !important;
  content: "" !important;
  position: absolute !important;
  top: 29px !important; /* 위쪽 위치 조정 */
  left: -2px !important; /* 왼쪽 위치 조정 */
  z-index: 10 !important; /* z-index 추가 */
}

.orange-white-card:after {
  border-top: 35px solid transparent !important;
  border-left: 35px solid #ebca98 !important; /* 왼쪽 경계선 색상 */
  border-right: 35px solid transparent !important;
  border-bottom: 35px solid transparent !important;
  content: "" !important;
  position: absolute !important;
  top: 29px !important; /* 위쪽 위치 조정 */
  left: -2px !important; /* 왼쪽 위치 조정 */
  z-index: 10 !important; /* z-index 추가 */
}

.red-white-card:after {
  border-top: 35px solid transparent !important;
  border-left: 35px solid #efaba8 !important; /* 왼쪽 경계선 색상 */
  border-right: 35px solid transparent !important;
  border-bottom: 35px solid transparent !important;
  content: "" !important;
  position: absolute !important;
  top: 29px !important; /* 위쪽 위치 조정 */
  left: -2px !important; /* 왼쪽 위치 조정 */
  z-index: 10 !important; /* z-index 추가 */
}

/* 보라색 카드 위의 흰색 카드 */
.purple-white-card {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  width: 460px; /* 작은 카드보다 더 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 60%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 낮은 z-index 값 */
}
.blue-white-card {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  width: 460px; /* 작은 카드보다 더 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 60%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 낮은 z-index 값 */
}
.orange-white-card {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  width: 460px; /* 작은 카드보다 더 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 60%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 낮은 z-index 값 */
}
.red-white-card {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  width: 460px; /* 작은 카드보다 더 작게 설정 */
  height: 100%;
  position: absolute;
  top: 50%; /* 중간 배치 */
  left: 60%;
  transform: translate(-50%, -50%); /* 위치 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 낮은 z-index 값 */
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 13px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 130px;
  width: 500px;
  margin-bottom: 10px;
}

.right-content {
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.box-shadow-basic {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.box-shadow-multi {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2);
}

.custom-label-radius {
  border-radius: 12px 0px 12px 0px !important;
  margin: 10px;
}

.shadow-dark {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); /* 더 진한 그림자 */
}

.icon {
  width: 65px; /* 아이콘 크기 조정 */
  height: 65px; /* 아이콘 크기 조정 */
  margin-left: -480px; /* 아이콘을 왼쪽으로 100px 이동 */
}
</style>
