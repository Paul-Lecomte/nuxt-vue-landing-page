<template>
  <div class="landing-container">
    <header>
      <h1>Welcome to PrimeVue Landing</h1>
      <p>Your ultimate UI library with Vue and Nuxt 3.</p>
      <Button label="Get Started" icon="pi pi-check" class="get-started-btn" @click="onGetStarted" />
      <Button label="Go to Banking Dashboard" class="p-button-secondary" @click="goToBanking" style="margin-left:1rem" />
    </header>

    <section class="features">
      <FeatureCard
          icon="pi pi-bolt"
          title="Fast Performance"
          description="Optimized components with minimal bundle size and blazing fast rendering."
      />
      <FeatureCard
          icon="pi pi-cog"
          title="Highly Customizable"
          description="Easily themeable with multiple pre-built themes and CSS variables."
      />
      <FeatureCard
          icon="pi pi-shield"
          title="Accessible"
          description="Compliant with ARIA and WAI-ARIA standards for better accessibility."
      />
    </section>

    <footer>
      <p>© 2025 PrimeVue Nuxt Demo. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import FeatureCard from '~/components/FeatureCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function onGetStarted() {
  alert('Welcome aboard! Let’s build something awesome.')
}

function goToBanking() {
  router.push('/banking')
}
</script>

<style scoped>
.landing-container {
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #333;
}

header h1 {
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #007ad9; /* PrimeVue blue-ish */
}

header p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}

.get-started-btn {
  font-weight: 600;
  font-size: 1.1rem;
}

.features {
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

footer {
  margin-top: 4rem;
  font-size: 0.9rem;
  color: #999;
}
</style>