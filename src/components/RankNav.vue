<template>
  <div>
    <div class="subject">
      <h1>랭킹</h1>
    </div>
    <div class="hello">
      <nav class="navigation">
        <ul class="menu">
          <li class="menu__item">
            <a href="#" class="menu__link">전체</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">데드</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">스쿼트</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">벤치</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankNav',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subject {
  width: 800px;
  margin: auto;
  font-weight: 900;
  font-size: 30px;
  color: #5ac53a;
}
.subject h1 {
  text-align: left;
  margin: 0px;
  margin-left: 40px;
}
.hello {
  margin-top: 40px;
  margin: auto;
  width: 780px;
}
a {
  outline: 0;
  text-decoration: none;
}
a:visited {
  color: #a09fa6;
  text-decoration: none;
}
a:hover {
  color: #e4e4e4;
}
a:active {
  color: #e4e4e4;
  text-decoration: none;
}

.navigation {
  width: 100%;
  font-weight: 900;
  font-size: 32px;
  border-bottom: 2px inset #606060;
  padding-bottom: 5px;
}

.menu {
  display: flex;
  justify-content: left;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 0;
}

ul {
  text-decoration: none;
  list-style: none;
}

li {
  margin-top: 55px;
  margin-bottom: 10px;
  margin-left: 60px;
}
</style>
