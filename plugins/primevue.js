import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'

// PrimeVue components you want globally (optional)
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue)

    // Register components globally if you want
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
})