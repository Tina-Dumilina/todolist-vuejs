<template>
	<div class="alert">
		<p class="alert__title">Are you sure you want to delete this group? All todos will be automatically deleted.</p>
		<div class="alert__buttons">
			<app-button
				class="alert__button"
				:text="'Yes'"
				@click.native="deleteGroup"
			/>
			<app-button 
        class="alert__button" 
        :text="'No'" 
        @click.native="togglePopupVisibility"
      />
		</div>
	</div>
</template>

<script>
import Button from './ui/Button';

export default {
	components: {
		'app-button': Button,
	},
	computed: {
		deletedGroupIndex() {
			return this.$store.getters.deletedGroupIndex;
		}
	},
	methods: {
		deleteGroup() {
      this.$store.dispatch('deleteGroup');
      this.$store.dispatch('deleteConnectedTodos', this.deletedGroupIndex);
			this.$store.dispatch('togglePopupVisibility');
			this.$store.dispatch('closeDeleteGroupAlert');
    },
    togglePopupVisibility() {
			this.$store.dispatch('togglePopupVisibility');
			this.$store.dispatch('closeDeleteGroupAlert');
    }
	},
};
</script>

<style scoped>
.alert {
	display: flex;
	flex-direction: column;
  align-items: center;
}

.alert__title {
	margin: 0 0 80px;
	text-align: center;
  font-size: 20px;
  width: 80%;
}

.alert__button {
  margin-right: 10px;
}

.alert__button:last-of-type {
  margin-right: 0;
}

@media (max-width: 485px) {
	.alert__title {
		font-size: 16px;
	}
}
</style>
