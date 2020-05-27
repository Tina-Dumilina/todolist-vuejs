<template>
	<button 
		:class="['button', {'button_active': isActive}, {'button_size_content': contentOnly}]"
		type="button"
		@click="$emit('click')"
	>{{text}}</button>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			required: true
		},
		isActive: {
			type: Boolean,
			default: false
		},
		contentOnly: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped>
.button {
	width: 100px;
	line-height: 30px;
	color: #fff;
	background: #684aee;
	padding: 0;
	font-family: inherit;
	font-weight: 500;
	font-size: 16px;
	text-align: center;
	border: 0;
	cursor: pointer;
}

.button_size_content {
	width: initial;
	padding: 5px;
	color: #000;
	line-height: 1;
	background-color: transparent;
}

.button_active {
	color: #fff;
	background-color: #684aee;
	cursor: default;
}

.button:hover {
  opacity: 0.9;
}

.button_size_content:hover {
	opacity: .8;
}

.button_active:hover {
	opacity: 1;
}

@media (max-width: 768px) {
	.button {
		width: 60px;
	}

	.button_size_content {
		width: initial;
	}
}
</style>
