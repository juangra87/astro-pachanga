<template>
  <div class="flex flex-col items-center">
    <h2 class="text-xl font-bold mb-4">Enter Player Names</h2>
    <input
      v-model="playerName"
      type="text"
      placeholder="Player Name"
      class="border border-gray-300 rounded p-2 mb-2"
    />
    <button
      @click="addPlayer"
      class="bg-blue-500 text-white rounded p-2"
    >
      Add Player
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      playerName: '',
    };
  },
  methods: {
    addPlayer() {
      if (this.playerName.trim()) {
        console.log('Player added:', this.playerName);
        this.$emit('player-added', this.playerName);
        this.playerName = '';
      }
    },
  },
});
</script>

<style scoped>
</style>