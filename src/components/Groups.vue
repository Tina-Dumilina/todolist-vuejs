<template>
	<div class="groups">
		<h2 class="groups__title">Groups</h2>
		<ul class="groups__list">
			<li
				class="groups__item"
				v-for="(groupName, index) in groups"
				:key="index"
			>
				<span
					class="groups__item-title"
					@click="changeGroup(index)"
					:class="{ 'groups__item-title_active': index === currentIndex }"
				>
					{{ groupName }}
				</span>
				<app-delete-icon
					class="groups__delete-icon"
					@click.native="showDeleteGroupAlert(index)"
					v-if="index !== 0"
				/>
			</li>
		</ul>
		<form class="groups__form" @submit.prevent="addNewGroup">
			<app-input
				class="groups__input"
				:type="'text'"
				v-model="data"
				:placeholder="'Add group'"
				:value="data"
			/>
			<app-button
				class="groups__button"
				:text="'Add'"
				@click.native="addNewGroup"
			/>
		</form>
	</div>
</template>

<script>
import Button from './ui/Button';
import Input from './ui/Input';
import DeleteIcon from './ui/DeleteIcon';

export default {
	components: {
		'app-button': Button,
		'app-input': Input,
		'app-delete-icon': DeleteIcon,
	},
	data() {
		return {
			data: '',
		};
	},
	computed: {
		groups() {
			return this.$store.getters.groups;
		},
		currentIndex() {
			return this.$store.getters.currentIndex;
		},
	},
	methods: {
		addNewGroup() {
			this.$store.dispatch('addNewGroup', this.data);
			this.data = '';
		},
		changeGroup(index) {
			this.$store.dispatch('changeGroup', index);
			this.$store.dispatch('showConnectedTodos', index);
		},
		showDeleteGroupAlert(index) {
			this.$store.dispatch('showDeleteGroupAlert', index);
			this.$store.dispatch('togglePopupVisibility');
		},
	},
};
</script>

<style scoped>
.groups {
	width: 40%;
	min-width: 200px;
	max-width: 300px;
	margin-right: 50px;
	padding: 20px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.groups__title {
	margin: 0;
	margin-bottom: 20px;
	font-size: 24px;
	line-height: 28px;
	border-bottom: 1px solid #000;
}

.groups__list {
	padding: 0;
	margin: 0;
	margin-bottom: 20px;
	list-style: none;
}

.groups__item {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	font-size: 16px;
	color: #666;
}

.groups__item:last-of-type {
	margin-bottom: 0;
}

.groups__item-title {
	cursor: pointer;
}

.groups__item-title_active {
	font-weight: bold;
	color: #000;
	cursor: default;
}

.groups__item-title:hover {
	opacity: 0.8;
}

.groups__item-title_active:hover {
	opacity: 1;
}

.groups__form {
	display: grid;
	grid-template-columns: 1fr max-content;
}

@media (max-width: 768px) {
	.groups {
		margin-right: 40px;
	}
}

@media (max-width: 600px) {
	.groups {
		margin-bottom: 40px;
		margin-right: 0;
		width: 100%;
	}
}
</style>
