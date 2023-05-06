<template>
  <button
    @click="
      open = true;
      $emit('modalOpened');
    "
    data-cy="open-button"
  >
    Open Modal
  </button>

  <Teleport to="body">
    <div v-show="open" class="modal" data-cy="modal-body">
      <div
        class="content"
        data-cy="modal-content"
        :style="{ backgroundColor: contentColor }"
      >
        <div data-cy="default-slot">
          <slot>
            <p>Hello from the modal!</p>
          </slot>
        </div>
        <div data-cy="extra-slot">
          <slot name="extra"></slot>
        </div>
        <button
          @click="
            open = false;
            $emit('modalClosed');
          "
          data-cy="close-modal"
        >
          Close
        </button>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import { ref } from "vue";
const open = ref(false);
const props = defineProps({
  color: String,
});
const contentColor = props.color ? props.color : "white";
defineEmits(["modalOpened", "modalClosed"]);
</script>
<style scoped>
.modal {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal > .content {
  width: fit-content;
  padding: 2rem;
}
</style>
