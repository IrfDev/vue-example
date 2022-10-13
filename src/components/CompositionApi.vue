<template>
  <main>
    <div>Hola: {{ hola }}</div>

    <button :class="baseButtonClasses" @click="updateEveryoneState">
      Update state
    </button>

    <h2>Team: ({{ personsLength }})</h2>

    <span>
      {{ JSON.stringify(everyone, null, 2) }}
    </span>

    <button :class="[baseButtonClasses]" @click="deleteLastPerson">
      Delete person
    </button>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";

export default defineComponent({
  name: "HelloWorld",

  setup() {
    let isEveryoneOkay = ref(false);
    let baseButtonClasses = `block bg-black text-white text-lg rounded px-5 py-2 hover:opacity-80 transition-all duration-500 ease-out hover:ease-in`;

    // Reactive and Ref have the same functionality, ref for primitive
    // types except for objects

    // Reactive for objects
    let everyone = reactive(["Julia", "David", "Irving"]);

    // Similar synatax as useMemo, but without defining reactive PROPERTY
    let personsLength = computed(() => everyone.length);

    const updateEveryoneState = (newState: MouseEvent) => {
      if (typeof newState === "boolean") {
        isEveryoneOkay.value = newState;
      } else {
        isEveryoneOkay.value = !isEveryoneOkay.value;
      }
    };

    // Functions are being declare as always

    const deleteLastPerson = () => everyone.pop();

    // You need to explictly define the properties you want to expose to your component

    return {
      hola: isEveryoneOkay,
      updateEveryoneState,
      baseButtonClasses,
      everyone,
      personsLength,
      deleteLastPerson,
    };
  },

  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped></style>
