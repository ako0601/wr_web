<template>
  <div class="ranking">
    <h2>1</h2>
    <img class="profile_img" alt="profile" src="../assets/gim.jpg" />
    <h2>gymgilmo92</h2>
    <h2>330KG</h2>
    <img class="rank1" alt="rank1" src="../assets/rank1.png" />
  </div>
</template>

<script>
export default {
  name: 'RankPage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ranking {
  width: 60%;
  max-width: 1000px;
  min-width: 600px;
  height: 90px;
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: space-around;
  border-radius: 7px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.rank1 {
  width: 30px;
}
.profile_img {
  width: 60px;
  border-radius: 70%;
  overflow: hidden;
}
</style>
