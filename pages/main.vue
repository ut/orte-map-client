<template>
  <Main />
</template>

<script>

import config from '../nuxt.config'

export default {

 data() {
    return {
       title: 'ORTE map client'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>
