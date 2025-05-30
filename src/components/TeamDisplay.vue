<template>
  <div class="teams-container grid grid-cols-2 gap-4">
    <div class="team-box">
      <h3 class="text-lg font-bold mb-2 text-blue-600">{{ t('teamA') }}</h3>
      <ul class="space-y-1">
        <li v-for="player in teamA" :key="player" class="p-2 bg-blue-50 rounded">
          {{ player }}
        </li>
        <li v-if="teamA.length === 0" class="text-gray-400 italic">
          {{ t('noPlayers') }}
        </li>
      </ul>
    </div>
    
    <div class="team-box">
      <h3 class="text-lg font-bold mb-2 text-red-600">{{ t('teamB') }}</h3>
      <ul class="space-y-1">
        <li v-for="player in teamB" :key="player" class="p-2 bg-red-50 rounded">
          {{ player }}
        </li>
        <li v-if="teamB.length === 0" class="text-gray-400 italic">
          {{ t('noPlayers') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import i18n from '../i18n/index.ts'

const t = i18n.t.bind(i18n)

defineProps({
  teamA: {
    type: Array,
    default: () => []
  },
  teamB: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.team-box {
}
</style>