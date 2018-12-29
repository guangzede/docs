<template>
  <div id='colorpicker'>
    <input
      type='color'
      name=''
      id=''
      v-model='color'
    >
    <input
      type='text'
      name=''
      v-model='color'
    >
    <div class='colors'>
      {{color}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'colorPickers',
  data () {
    return {
      color: '#ddd'
    }
  }
}
</script>

<style lang='sass' scoped>
</style>
