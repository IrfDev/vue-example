<template>
  <main>
    <div>
      <div v-for="button in buttons" :key="button" class="mt-5">
        <text>How many clicks on {{ button }} button?</text>

        <button
          @click="handleClick(button)"
          class="block px-4 py-1 rounded text-white shadow hover:shadow-md transition-all duration-300 text-3xl"
          :class="[button === 'red' ? `bg-red-500` : `bg-blue-500`]"
        >
          {{ button }}
        </button>
      </div>

      <span class="w-full block">
        {{ redButtonClickString }}
      </span>

      <span class="w-full block">
        {{ blueButtonClickString }}
      </span>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      homeName: `Home`,
      aboutName: `About`,
      redButtonClicks: 0,
      blueButtonClicks: 0,
      buttons: ["red", "blue"],
    };
  },

  methods: {
    handleClick(colorName) {
      this[`${colorName}ButtonClicks`]++;
    },
  },

  computed: {
    redButtonClickString() {
      return `${this.redButtonClicks} clicks on red button`;
    },

    blueButtonClickString() {
      return `${this.blueButtonClicks} clicks on blue button`;
    },
  },
};
</script>
