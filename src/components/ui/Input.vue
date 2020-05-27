<template>
  <input 
    class="input"
    :type="type" 
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    :value="value"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid #e7e7e7;
}

.input::placeholder {
  font-family: Avenir;
  color: #666;
}

.input:focus {
  outline: none;
  border: 1px solid #684aee;
}

.input_bordered:focus {
  outline: none;
  border: 1px solid #684aee;
}

@media (max-width: 768px) {
  .input {
    padding: 5px;
  }
}
</style>