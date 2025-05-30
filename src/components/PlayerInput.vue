<template>
  <div class="flex flex-col items-center w-full">
    <h2 class="text-2xl font-bold mb-6 text-ball-dark">Enter Players List</h2>
    
    <div class="w-full bg-ball-light rounded-xl shadow-modern p-6">
      <textarea
        v-model="playersList"
        placeholder="Enter players list (format: 1 - player_name)"
        class="border-2 border-field-light focus:border-team-primary rounded-xl p-4 mb-6 w-full h-40 focus:ring-2 focus:ring-team-primary/20 transition-all"
      ></textarea>

      <!-- Tabla de jugadores procesados -->
      <div v-if="processedPlayers.length > 0" class="mt-6 w-full">
        <table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-modern">
          <thead>
            <tr class="bg-field-light text-ball-light">
              <th class="p-4 text-left">#</th>
              <th class="p-4 text-left">Player Name</th>
              <th class="p-4 text-left">Skill</th>
              <th class="p-4 text-left">Fitness</th>
              <th class="p-4 text-left">TBD</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in processedPlayers" 
                :key="index"
                class="border-b border-field-light/10 hover:bg-field-light/5 transition-colors">
              <td class="p-4">{{ index + 1 }}</td>
              <td class="p-4 font-medium">{{ player.name }}</td>
              <td class="p-4">
                <select 
                  v-model="player.skill" 
                  :class="[
                    'w-full px-3 py-2 rounded-lg transition-all font-medium appearance-none cursor-pointer',
                    getSkillClass(player.skill)
                  ]"
                  @change="updatePlayer(player)"
                >
                  <option 
                    v-for="n in 10" 
                    :key="n" 
                    :value="n"
                    class="bg-white text-gray-900"
                  >
                    {{ n }}
                  </option>
                </select>
              </td>
              <td class="p-4">
                <select 
                  v-model="player.fitness" 
                  :class="[
                    'w-full px-3 py-2 rounded-lg transition-all font-medium appearance-none cursor-pointer',
                    getFitnessClass(player.fitness)
                  ]"
                  @change="updatePlayer(player)"
                >
                  <option 
                    v-for="status in fitnessOptions" 
                    :key="status.value" 
                    :value="status.value"
                    class="bg-white text-gray-900"
                  >
                    {{ status.label }}
                  </option>
                </select>
              </td>
              <td class="p-4">
                <span class="text-gray-400">Pendiente</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';

interface Player {
  name: string;
  skill: number;
  fitness: string;
  extraParam?: any;
}

export default defineComponent({
  data() {
    return {
      playersList: '',
      processedPlayers: [] as Player[],
      fitnessOptions: [
        { value: 'very-fit', label: 'Muy en forma' },
        { value: 'fit', label: 'En forma' },
        { value: 'regular', label: 'Regular' },
        { value: 'unfit', label: 'En baja forma' }
      ]
    };
  },
  created() {
    watch(
      () => this.playersList,
      () => this.processPlayersList()
    );
  },
  methods: {
    processPlayersList() {
      const lines = this.playersList.split('\n');
      const playerPattern = /^\d+\s*-\s*(.+)$/;
      this.processedPlayers = [];
      
      lines.forEach(line => {
        const match = line.match(playerPattern);
        if (match && match[1]) {
          const playerName = match[1].trim();
          if (playerName) {
            const player: Player = {
              name: playerName,
              skill: 5, // valor por defecto
              fitness: 'regular', // valor por defecto
            };
            this.processedPlayers.push(player);
            this.$emit('player-added', player);
          }
        }
      });
    },
    updatePlayer(player: Player) {
      this.$emit('player-updated', player);
    },
    getSkillClass(skill: number) {
      if (skill >= 1 && skill <= 3) return 'bg-red-500 text-white';
      if (skill >= 4 && skill <= 6) return 'bg-orange-500 text-white';
      if (skill >= 7 && skill <= 9) return 'bg-blue-500 text-white';
      if (skill === 10) return 'bg-green-500 text-white';
      return 'bg-gray-100';
    },
    getFitnessClass(fitness: string) {
      switch (fitness) {
        case 'very-fit': return 'bg-green-500 text-white';
        case 'fit': return 'bg-blue-500 text-white';
        case 'regular': return 'bg-orange-500 text-white';
        case 'unfit': return 'bg-red-500 text-white';
        default: return 'bg-gray-100';
      }
    },
  },
});
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
</style>