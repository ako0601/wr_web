<template>
  <!-- <img alt="Vue logo" src="./assets/barbell2.png" /> -->
  <RankNav />
  <div class="rank">
    <RankTops />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
    <RankPage />
  </div>
</template>

<script>
import RankNav from './components/RankNav.vue';
import RankPage from './components/RankPage.vue';
import RankTops from './components/RankTops.vue';

export default {
  name: 'App',
  components: {
    RankNav,
    RankPage,
    RankTops,
  },
};
</script>

<style>
html {
  background-color: #0f0f0f;
  width: 800px;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #000000;
  margin-top: 0px;
  padding-top: 50px;
}
.rank {
  margin: auto;
  padding: 30px 0 30px 0;
}
</style>
