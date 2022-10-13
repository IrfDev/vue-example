<template>
  <main>
    <div>Hola: {{ isEveryoneOkay }}</div>

    <button class="base-button" @click="updateEveryoneState">
      Update state
    </button>

    <h2>Team: ({{ personsLength }})</h2>

    <span>
      {{ JSON.stringify(everyone, null, 2) }}
    </span>

    <button class="base-button" @click="deleteLastPerson">Delete person</button>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "HelloWorld",

  data() {
    return {
      everyone: ["Julia", "David", "Irving"],
      isEveryoneOkay: false,
    };
  },

  methods: {
    updateEveryoneState(newState: MouseEvent) {
      if (typeof newState === "boolean") {
        this.isEveryoneOkay = newState;
      } else {
        this.isEveryoneOkay = !this.isEveryoneOkay;
      }
    },

    deleteLastPerson() {
      this.everyone.pop();
    },
  },

  computed: {
    personsLength() {
      return this.everyone.length;
    },
  },

  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.base-button {
  @apply block bg-black text-white text-lg rounded px-5 py-2 hover:opacity-80 transition-all duration-500 ease-out hover:ease-in;
}
</style>
