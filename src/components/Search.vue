<template>
	<div class="search">
		<div class="search__container">
			<app-input
				class="search__input"
				:placeholder="'Search'"
				:type="'search'"
				v-model="query"
				@input="searchTodo"
			/>
			<app-button class="search__button" :text="'Search'" />
		</div>
		<div class="search__filters">
			<app-button
				class="search__filter"
				:text="'All'"
				:isActive="filter === 'All' || filter === 'Search'"
				:contentOnly="true"
				@click.native="updateFilter('All')"
			/>
			<app-button
				class="search__filter"
				:text="'Complete'"
				:isActive="filter === 'Complete'"
				:contentOnly="true"
				@click.native="updateFilter('Complete')"
			/>
			<app-button
				class="search__filter"
				:text="'Incomplete'"
				:isActive="filter === 'Incomplete'"
				:contentOnly="true"
				@click.native="updateFilter('Incomplete')"
			/>
		</div>
	</div>
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
			query: '',
		};
	},
	computed: {
		filter() {
			return this.$store.getters.filter;
		},
	},
	methods: {
		updateFilter(filter) {
			this.$store.dispatch('updateFilter', filter);
		},
		searchTodo() {
			this.$store.dispatch('searchTodo', this.query);
		},
	},
};
</script>

<style scoped>
.search {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 80px;
}

.search__container {
	display: grid;
  grid-template-columns: 1fr max-content;
	margin-right: 20px;
}

.search__filter {
	margin-right: 20px;
}

.search__filter:last-of-type {
	margin-right: 0;
}

@media (max-width: 768px) {
	.search {
		display: flex;
		align-items: center;
		margin-bottom: 60px;
	}
}

@media (max-width: 600px) {
	.search {
    flex-direction: column;
  }
  
  .search__container {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
