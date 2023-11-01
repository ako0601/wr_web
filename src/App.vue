<template>
  <!-- <img alt="Vue logo" src="./assets/barbell2.png" /> -->
  <HelloWorld />
  <div class="rank">
    <RankTops />
    <div class="All_ranking">
      <h1>All Ranking</h1>
      <div class="tooltip">
        <button>?</button>
        <span class="tooltiptext">This is a tooltip!</span>
      </div>
    </div>
    <RankPage rankN="1" />
    <RankPage rankN="2" />
    <RankPage rankN="3" />
    <RankPage rankN="4" />
    <RankPage rankN="5" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import RankPage from './components/RankPage.vue';
import RankTops from './components/RankTops.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    RankPage,
    RankTops,
  },
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
html {
  font-family: 'Pretendard';
  font-style: normal;
  font-display: swap;
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
.All_ranking {
  margin-left: 45px;
  display: flex;
  color: #e4e4e4;
  align-items: center;
}
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: #d9d9d9;
  color: #fff;
  text-align: center;
  border-radius: 70%;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip text - show on hover */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
