<template>
  <div class="feature-card">
    <i :class="icon + ' feature-icon'"></i>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>

<style scoped>
.feature-card {
  background: #f0f8ff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.05);
  padding: 1.8rem 1.5rem;
  width: 260px;
  transition: transform 0.3s ease;
  cursor: default;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.12);
}

.feature-icon {
  font-size: 3rem;
  color: #007ad9;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.feature-card p {
  color: #444;
  font-size: 1rem;
  line-height: 1.4;
}
</style>