<template>
  <div class="flex flex-col items-center mt-8">
    <h2 class="text-2xl font-bold mb-4">Team Display</h2>
    <div class="flex space-x-8">
      <div class="team">
        <h3 class="text-xl font-semibold">Team A</h3>
        <ul class="list-disc pl-5">
          <li v-for="player in teamA" :key="player">{{ player }}</li>
        </ul>
      </div>
      <div class="team">
        <h3 class="text-xl font-semibold">Team B</h3>
        <ul class="list-disc pl-5">
          <li v-for="player in teamB" :key="player">{{ player }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TeamDisplay',
  props: {
    teamA: {
      type: Array as () => string[],
      required: true
    },
    teamB: {
      type: Array as () => string[],
      required: true
    }
  }
});
</script>

<style scoped>
.team {
  border: 2px solid #e5e7eb; /* Tailwind's gray-200 */
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f9fafb; /* Tailwind's gray-50 */
}
</style>