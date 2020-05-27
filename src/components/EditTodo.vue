<template>
  <div class="edit-todo">
    <p class="edit-todo__title">Choose new group</p>
    <select v-model="selected" class="edit-todo__select">
      <option disabled value="">Choose new group</option>
      <option v-for="(groupName, index) in groups" :key="index" :value="index">{{groupName}}</option>
    </select>
    <div class="edit-todo__buttons">
      <app-button class="edit-todo__button" :text="'Save'" @click="changeTodoGroupIndex"/>
      <app-button class="edit-todo__button" :text="'Close'" @click="togglePopupVisibility"/>
    </div>
  </div>
</template>

<script>
import Button from './ui/Button';

export default {
  components: {
    'app-button': Button
  },
  computed: {
    groups() {
      return this.$store.getters.groups;
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    changeTodoGroupIndex() {
      this.$store.dispatch('changeTodoGroupIndex', this.selected);
      this.$store.dispatch('togglePopupVisibility');
      this.$store.dispatch('closeEditTodoPopup');
    },
    togglePopupVisibility() {
      this.$store.dispatch('togglePopupVisibility');
      this.$store.dispatch('closeEditTodoPopup');
    }
  }
}
</script>

<style scoped>
.edit-todo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-todo__title {
  margin: 0 0 60px;
  text-align: center;
  font-size: 22px;
  width: 80%;
}

.edit-todo__select {
  display: block;
  margin-bottom: 60px;
}

.edit-todo__button {
  margin-right: 10px;
}

.edit-todo__button:last-of-type {
  margin-right: 0;
}

@media (max-width: 485px) {
	.alert__title {
		font-size: 16px;
	}
}
</style>