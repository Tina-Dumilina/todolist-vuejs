<template>
  <div class="popup">
    <slot name="delete-todo" v-if="isDeleteTodoAlertShown"></slot>
    <slot name="delete-group" v-if="isDeleteGroupAlertShown"></slot>
    <slot name="edit-todo" v-if="isEditTodoShown"></slot>
    <img
      src="../../assets/close.svg"
      alt="Закрыть"
      class="popup__close"
      @click="togglePopupVisibility"
    />
  </div>
</template>

<script>
export default {
  methods: {
    togglePopupVisibility() {
      this.$store.dispatch('togglePopupVisibility');
      this.$store.dispatch('closeDeleteTodoAlert');
      this.$store.dispatch('closeDeleteGroupAlert');
      this.$store.dispatch('closeEditTodoPopup');
    },
  },
  computed: {
    isDeleteTodoAlertShown() {
      return this.$store.getters.isDeleteTodoAlertShown;
    },
    isDeleteGroupAlertShown() {
      return this.$store.getters.isDeleteGroupAlertShown;
    },
    isEditTodoShown() {
      return this.$store.getters.isEditTodoShown;
    }
  }
};
</script>

<style scoped>
.popup {
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: inline-block;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  overflow: auto;
}

.popup__close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .popup {
    width: 400px;
  }
}

@media (max-width: 485px) {
  .popup {
    width: 300px;
  }
}
</style>
