<template>
  <div class="grid-container">
    <span col>
      <span low>
        <span col>
          <div class="grid">
            <card-rect
              :image="require('@/assets/img/MainCardImage/image1.png')"
              @click.native="goToProcess"
            />
            <card-rect
              :image="require('@/assets/img/MainCardImage/image2.png')"
              @click.native="goToDigitalTwin"
            />
          </div>
        </span>
      </span>
      <span low>
        <div class="grid">
          <card-rect
            :image="require('@/assets/img/MainCardImage/image3.png')"
            @click.native="goToVisual"
          />
          <card-rect
            :image="require('@/assets/img/MainCardImage/image4.png')"
            @click.native="goToWebViewer"
          />
        </div>
      </span>
    </span>
  </div>
</template>

<script>
import CardRect from "@/components/CardRect.vue";

export default {
  name: "RectGrid",
  components: {
    CardRect,
  },
  methods: {
    goToDigitalTwin() {
      this.$router.push({ name: "DigitalTwin" });
    },
    goToProcess() {
      this.$router.push({ name: "SimulationTools" });
    },
    goToVisual() {
      this.$router.push({ name: "VisualComponents" });
    },
    goToWebViewer() {
      this.$router.push({ name: "WebViewer" });
    },
  },
};
</script>

<style scoped>
.grid-container {
  position: absolute;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  padding: 20px;
}
</style>
