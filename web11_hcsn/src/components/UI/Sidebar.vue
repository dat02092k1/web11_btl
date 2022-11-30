<script>
export default {
  name: "Sidebar",
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <div class="logo">
        <img
          class="logo__img"
          src="../../assets/UI/icon/QLTS-Icon-16x16.ico"
          alt=""
        />
      </div>
    </div>
    <div class="sidebar__items">
      <a class="icon__list" href="">
        <div class="icon icon__item1"></div>
      </a>
      <a class="icon__list" href="">
        <div class="icon icon__item2"></div>
      </a>
      <a class="icon__list" href="">
        <div class="icon icon__item3"></div>
      </a>
      <a class="icon__list" href="">
        <div class="icon icon__item4"></div>
      </a>
      <a class="icon__list" href="">
        <div class="icon icon__item5"></div>
      </a>
      <a class="icon__list" href="">
        <div class="icon icon__item6"></div>
      </a>
      <a class="icon__list" href="">
        <div class="icon icon__item7"></div>
      </a>
    </div>
  </div>
</template>

<style scoped>
@import url(../../css/base/icon.css);
.sidebar {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.sidebar__logo {
  width: 66px;
  height: 50px;
  text-align: center;
}

.logo__img {
  height: 36px;
  width: 36px;
  margin: 11px 15px;
}

.sidebar__items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 19px;
}
.icon__list {
  opacity: 0.5;
 border-radius: 6px;
width: 44px;
height: 40px;
overflow: hidden;
margin: 0 11px;
}

.icon__list:hover {
  opacity: 2;
  overflow: hidden;
  background-color: #1aa4c8;
}
.icon__list:focus {
  opacity: 2;
  overflow: hidden;
  background-color: #1aa4c8;
}

</style>
