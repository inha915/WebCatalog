<template>
  <figcaption class="image-text">
    <span class="red">S</span>
    m a r t <br />
    <span class="red">T</span>
    echnology <br />
    <span class="red" style="margin-right: 23px">&</span>
    <span class="blue" style="margin-right: -13px">I</span>
    novation <br />
    <hr class="divider" />
    <span class="no-shadow">
      <span class="bold-explanation">Smart Factory</span>
      <span class="explanation" style="margin-right: 10px">에 필요한</span>
      <span class="bold-explanation">Total Solution</span>
      <span class="explanation">을 제공합니다.</span>
    </span>
  </figcaption>
</template>

<script>
export default {
  name: "TitleCont",
};
</script>

<style>
.image-text {
  position: absolute;
  top: 40%; /* 이미지의 세로 중앙에 텍스트 배치 */
  left: 22%; /* 이미지의 가로 중앙에 텍스트 배치 */
  transform: translate(-50%, -50%); /* 텍스트가 정확히 중앙에 위치하도록 조정 */
  color: rgb(67, 67, 67); /* 텍스트 색상 */
  font-size: 80px; /* 텍스트 크기 */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* 텍스트 가독성을 위한 그림자 */
  text-align: left;
}

/* 빨간색 텍스트 */
.red {
  color: rgb(255, 115, 0);
}

/* 파란색 텍스트 */
.blue {
  color: rgb(104, 104, 240);
}

.divider {
  border: none; /* 기본 테두리 제거 */
  height: 1.3px; /* 구분선 두께 */
  background-color: rgb(165, 165, 165); /* 구분선 색상 */
  margin: 10px 0; /* 구분선 위아래 여백 */
}

.bold-explanation {
  font-size: 18px;
  text-align: center;
  color: rgb(95, 95, 95);
}

.explanation {
  font-size: 18px;
  text-align: center;
  color: rgb(95, 95, 95);
}

.no-shadow {
  position: relative; /* 혹은 absolute로 설정할 수 있습니다 */
  top: -50px; /* 원하지 않는 공백을 없애기 위해 0으로 설정 */
  text-align: center;
  text-shadow: none !important; /* 텍스트 그림자 제거 */
}
</style>
