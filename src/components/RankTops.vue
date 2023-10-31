<template>
  <div>
    <div class="subject">
      <h1>TOP 3</h1>
    </div>
    <div class="rank-top-123">
      <div class="ranking1232">
        <div class="rankofandweight">
          <div class="rankof">
            <h1>2</h1>
            <h4>nd</h4>
          </div>
          <div class="thin_letter">
            <p>600kg</p>
          </div>
        </div>
        <img class="profile_img" alt="profile" src="../assets/profile.png" />
        <div class="thin_letter">
          <p>gymgilmo92</p>
        </div>
        <div class="grid-container">
          <div></div>
        </div>
      </div>
      <div class="ranking1231">
        <div class="rankofandweight">
          <div class="rankof">
            <h1>1</h1>
            <h4>st</h4>
          </div>
          <div class="thin_letter">
            <p>1000kg</p>
          </div>
        </div>
        <img class="profile_img" alt="profile" src="../assets/profile.png" />
        <div class="thin_letter">
          <p>gymrat99</p>
        </div>
        <div class="grid-container">
          <div></div>
        </div>
      </div>
      <div class="ranking1233">
        <div class="rankofandweight">
          <div class="rankof">
            <h1>3</h1>
            <h4>rd</h4>
          </div>
          <div class="thin_letter">
            <p>800kg</p>
          </div>
        </div>
        <img class="profile_img" alt="profile" src="../assets/profile.png" />
        <div class="thin_letter">
          <p>hawaiilife</p>
        </div>
        <div class="grid-container">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankTops',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rank-top-123 {
  width: 780px;
  margin: auto;
  display: flex;
  color: #cccccc;
}
.ranking1231 {
  width: 170px;
  border: 3px solid #ffd500;
  margin: auto;
  border-radius: 50px 50px 50px 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px 25px 30px 25px;
  background-color: #17171b;
}
.ranking1232 {
  width: 170px;
  border: 3px solid #e4e4e4;
  margin: auto;
  border-radius: 50px 50px 50px 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px 25px 30px 25px;
  background-color: #17171b;
}
.ranking1233 {
  width: 170px;
  border: 3px solid #bf7869;
  margin: auto;
  border-radius: 50px 50px 50px 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px 25px 30px 25px;
  background-color: #17171b;
}
.rankofandweight {
  display: flex;
  justify-content: space-between;
}
.rankof {
  display: flex;
  align-items: flex-end;
}

.rankof h1 {
  font-weight: 500;
  font-size: 50px;
  margin: 0px;
}

.rankof h4 {
  font-weight: 100;
  font-size: 25px;
  margin: 0px;
  vertical-align: bottom;
  color: #dadada;
}

.subject h1 {
  font-weight: 500;
  color: #e4e4e4;
  text-align: left;
  margin-left: 45px;
  font-size: 40px;
}
.profile_img {
  margin-top: 35px;
  width: 75px;
  border-radius: 70%;
  overflow: hidden;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}
.thin_letter {
  font-size: 25px;
}
</style>
