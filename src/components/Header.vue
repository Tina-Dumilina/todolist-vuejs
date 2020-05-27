<template>
	<header class="header">
			<h1 class="header__title">Vue.js Todo List</h1>
			<p class="header__author">Tina Dumilina</p>
	</header>
</template>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
  align-items: center;
  padding: 20px;
	color: #fff;
	background-color: #684aee;
}

.header__title {
	margin: 0;
	font-size: 24px;
	font-weight: normal;
}

.header__author {
	margin: 0;
	font-size: 20px;
}

@media (max-width: 425px) {
	.header__title {
		font-size: 18px;
	}

	.header__author {
		font-size: 16px;
	}
}
</style>
