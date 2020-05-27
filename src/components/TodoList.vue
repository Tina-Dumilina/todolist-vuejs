<template>
	<ul class="todo-list">
		<li
			class="todo-list__item todo-item"
			:class="{ 'todo-item_completed': todo.completed }"
			v-for="todo in filteredTodos"
			:key="todo.id"
		>
			<input
				type="checkbox"
				class="todo-item__checkbox"
				v-model="todo.completed"
			/>

			<div class="todo-item__content-container">
				<h3 class="todo-item__content" v-if="!todo.showMoreActivated">
					{{ todo.title.slice(0, maxLength)
					}}<span v-if="todo.title.length > maxLength">...</span>
				</h3>
				<h3 class="todo-item__content" v-else>
					{{ todo.title }}
				</h3>

				<span
					class="todo-item__expand"
					@click="toggleFullText(todo.id)"
					v-if="todo.title.length > maxLength && !todo.showMoreActivated"
				>
					Show more
				</span>
				<span
					class="todo-item__expand"
					@click="toggleFullText(todo.id)"
					v-if="todo.title.length > maxLength && todo.showMoreActivated"
				>
					Show less
				</span>
			</div>

			<app-edit-icon class="todo-item__edit-icon" @click.native="showEditTodoPopup(todo.id)" />
			<app-delete-icon
				class="todo-item__delete-icon"
				@click.native="showDeleteTodoAlert(todo.id)"
			/>
		</li>
	</ul>
</template>

<script>
import DeleteIcon from './ui/DeleteIcon';
import EditIcon from './ui/EditIcon';

export default {
	components: {
		'app-delete-icon': DeleteIcon,
		'app-edit-icon': EditIcon,
	},
	computed: {
		filteredTodos() {
			return this.$store.getters.filteredTodos;
		},
	},
	methods: {
		showDeleteTodoAlert(id) {
			this.$store.dispatch('showDeleteTodoAlert', id);
			this.$store.dispatch('togglePopupVisibility');
		},
		toggleFullText(id) {
			this.$store.dispatch('toggleFullText', id);
		},
		showEditTodoPopup(id) {
			this.$store.dispatch('showEditTodoPopup', id);
			this.$store.dispatch('togglePopupVisibility');
		}
	},
	data() {
		return {
			maxLength: 100,
		};
	},
};
</script>

<style scoped>
.todo-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.todo-list__item {
	margin-bottom: 20px;
}

.todo-list__item:last-of-type {
	margin-bottom: 0;
}

.todo-item {
	display: flex;
	align-items: baseline;
	position: relative;
	padding: 20px 40px 20px 0;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	cursor: pointer;
}

.todo-item_completed {
	background-color: #f1f1f1;
	box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}

.todo-item_completed .todo-item__content {
	text-decoration: line-through;
}

.todo-item__content {
	margin: 0;
	font-weight: normal;
	font-size: 18px;
}

.todo-item:hover .todo-item__content {
	opacity: 0.8;
}

.todo-item__checkbox {
	margin: 0 10px;
	cursor: pointer;
}

.todo-item__delete-icon {
	position: absolute;
	top: 5px;
	right: 15px;
}

.todo-item__edit-icon {
	position: absolute;
	top: 35px;
	right: 15px;
}

.todo-item__expand {
	color: #684aee;
	font-weight: bold;
	cursor: pointer;
}

.todo-item__expand:hover {
	opacity: 0.8;
}

@media (max-width: 600px) {

}
</style>
