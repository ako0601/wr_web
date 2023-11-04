<template>
  <div class="ranking">
    <p id="rankinallrank">{{ rankN }}</p>
    <div id="profile_id">
      <img class="profile_img" alt="profile" src="../assets/profile.png" />
      <p>textfield</p>
    </div>
    <div id="kg_div">
      <p id="kg_num">500</p>
      <p id="kg">kg</p>
    </div>
    <p id="registerdate">Registration date</p>
    <h3>></h3>
  </div>
</template>

<script>
export default {
  name: 'RankPage',
  props: {
    msg: String,
    rankN: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ranking {
  color: #dadada;
  width: 100%;
  max-width: 1000px;
  min-width: 600px;
  height: 90px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  border-top: 1.5px solid #3d3d3d;
  align-items: center;
  font-size: x-large;
}
.rank1 {
  width: 30px;
}
#profile_id {
  display: flex;
  align-items: center;
}
.profile_img {
  width: 30px;
  height: 30px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 20px;
}
#kg_div {
  display: flex;
}
#kg_num {
  font-weight: 600;
}
#kg {
  color: #898a8d;
}
#rankinallrank {
  color: #888888;
  font-weight: 300;
  font-size: xx-large;
}
#registerdate {
  font-size: medium;
}
</style>
