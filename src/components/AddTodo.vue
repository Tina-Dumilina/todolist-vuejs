<template>
	<form class="add-todo" @submit.prevent="addNewTodo">
		<app-input :placeholder="'Add new todo'" v-model="data" :value="data" required />
		<app-button :text="'Add'" @click="addNewTodo" />
	</form>
</template>

<script>
import Input from './ui/Input';
import Button from './ui/Button';

export default {
	components: {
		'app-input': Input,
		'app-button': Button,
	},
	data() {
		return {
			data: '',
		};
	},
	methods: {
		addNewTodo() {
			this.$store.dispatch('addNewTodo', this.data);
			this.data = '';
		},
	},
};
</script>

<style scoped>
.add-todo {
	display: flex;
	margin-bottom: 50px;
}

@media (max-width: 600px) {
	.add-todo {
		margin-bottom: 30px;
	}
}
</style>
