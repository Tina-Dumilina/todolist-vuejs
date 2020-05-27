<template>
	<div class="root">
		<app-header />
		<main class="root__main">
			<app-search />
			<div class="root__flex-container">
				<app-groups />
				<div class="root__todolist">
					<app-add-todo />
					<app-todo-list />
				</div>
			</div>
		</main>
		<app-overlay v-if="isPopupShown" @click.native="closePopup" />
		<app-popup v-if="isPopupShown">
			<app-delete-todo-alert slot="delete-todo" />
			<app-delete-group-alert slot="delete-group" />
			<app-edit-todo slot="edit-todo" />
		</app-popup>
	</div>
</template>

<script>
import Header from './components/Header';
import Groups from './components/Groups';
import Search from './components/Search';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Overlay from './components/ui/Overlay';
import Popup from './components/ui/Popup';
import DeleteTodoAlert from './components/DeleteTodoAlert';
import DeleteGroupAlert from './components/DeleteGroupAlert';
import EditTodo from './components/EditTodo';

export default {
	name: 'App',
	components: {
		'app-header': Header,
		'app-groups': Groups,
		'app-search': Search,
		'app-add-todo': AddTodo,
		'app-todo-list': TodoList,
		'app-overlay': Overlay,
		'app-popup': Popup,
		'app-delete-todo-alert': DeleteTodoAlert,
		'app-delete-group-alert': DeleteGroupAlert,
		'app-edit-todo': EditTodo,
	},
	computed: {
		isPopupShown() {
			return this.$store.getters.isPopupShown;
		},
	},
	methods: {
		closePopup() {
			this.$store.dispatch('togglePopupVisibility');
			this.$store.dispatch('closeDeleteTodoAlert');
			this.$store.dispatch('closeDeleteGroupAlert');
			this.$store.dispatch('closeEditTodoPopup');
		},
	},
};
</script>

<style>
html {
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

body {
	margin: 0;
	padding: 0;
}

.root {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: #fff;
}

.root__main {
	max-width: 1000px;
	margin: 0 auto;
	padding: 60px 40px;
}

.root__flex-container {
	display: flex;
	align-items: flex-start;
}

.root__todolist {
	width: 60%;
}

@media (max-width: 600px) {
	.root__flex-container {
		flex-direction: column;
		align-items: center;
	}

	.root__main {
		padding: 50px 20px;
	}

	.root__todolist {
		width: 80%;
	}
}

@media (max-width: 425px) {
	.root__todolist {
		width: 100%;
	}
}
</style>
