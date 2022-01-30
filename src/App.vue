<template>
  <div id="app">
    <router-view/>
    <global-styles/>
  </div>
</template>

<script>
import GlobalStyles from './styles/GlobalStyles';

export default {
  name: 'App',
  components: {
    GlobalStyles,
  },
};
</script>
