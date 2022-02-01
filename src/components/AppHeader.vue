<template>
  <nav class="navbar" id="navbar">
    <div class="navbar-container">
      <router-link
      class="navbar-brand"
      to="/"
      >
      BERNAST.BY
      </router-link>
      <div class="nav-items">
        <div class="item-list">
          <ul class="navbar-nav ws-nw">
            <li class="nav-item ws-nw">
              <router-link
              class="nav-link nav-settings"
            to="/"
            >
            Главная
              </router-link>
            </li>
            <li class="nav-item dropdown ws-nw">
              <router-link
              class="nav-link dropbtn nav-settings"
            to="/services"
            >
            Услуги
            </router-link>
              <ul class="dropdown-content">
                <li><router-link class="dropdown-item" to="/services/accounting-services">Бухгалтерские услуги</router-link></li>
                <li><router-link class="dropdown-item" to="/services/legal-services">Юридческие услуги</router-link></li>
                <li><router-link class="dropdown-item" to="/services/liquidation">Ликвидация</router-link></li>
                <li><router-link class="dropdown-item" to="/services/creating-le">Создание юр. лиц</router-link></li>
                <li><router-link class="dropdown-item" to="/services/supporting">Сопровождение бизнеса</router-link></li>
                <li><router-link class="dropdown-item" to="/services/consultation">Консультация</router-link></li>
              </ul>
            </li>
            <li class="nav-item ws-nw">
              <router-link
              class="nav-link nav-settings"
            to="/about-us"
            >
            О нас
              </router-link>
            </li>
            <li class="nav-item ws-nw">
              <router-link
              class="nav-link nav-settings"
            to="/contacts"
            >
            Контакты
              </router-link>
            </li>
            <li class="nav-item ws-nw">
              <router-link
              class="nav-link nav-settings"
            to="/blog"
            >
            Блог
              </router-link>
            </li>
            <li class="nav-item ws-nw">
              <router-link
              class="nav-link nav-settings"
            to="/review"
            >
            Отзывы
              </router-link>
            </li>
        </ul>
      </div>
      <div class="phone-number ws-nw">
        <a href="tel:80291870494">
          <img src="../assets/icons/phone.png" alt="Позвоните нам!">
          <strong>
            +375 29 187 04 94
          </strong>
        </a>
      </div>
    </div>
  </div>
  </nav>
  <div class="margin-container">
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {}
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.navbar{
  // position: relative;
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  // margin-bottom: 30px;
  background: white;
  color: #1C2937;
  z-index: 20;
}
.margin-container{
  position: relative;
  top: 0;
  width: 100%;
  margin-bottom: 100px;
}
.sticky {
  position: fixed;
  top: 0;
}
.navbar-container{
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
}
.nav-items{
  display: flex;
  transition: .3s ease-in-out;
  font-family: "Trebuchet MS", sans-serif;
    font-size: 18px;
    line-height: 1.5;
    word-spacing: 2px;
}
.navbar-brand{
  display: block;
    color: inherit;
    font-size: 40px;
    line-height: 1;
    font-family: 'Varela', sans-serif;
    font-weight: bold;
}
.item-list{
      display: block;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
}
.nav-item{
  display: inline-block;
  text-align: -webkit-match-parent;
}
.navbar-toggler{
  border: none;
}
.navbar-toggler{
  &__location{
    text-align: right;
  }
}
.ws-nw{
  white-space: nowrap;
}
.non-hover{
  :hover{
    background: white;
    background-color: white;
  }
}
.nav-settings{
  // height:  50px;
  padding: 1rem 1rem;
  color: inherit;
}
.navbar-nav{
  display:inline-block;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  :hover{
    background: rgba(231, 237, 240, .2);
    // background-color: rgba(152, 162, 167, .1);
  }
  // @include respond-to(handhelds) { display: none ;}
  // @include respond-to(medium-screens) { width: 125px; }
  //@include respond-to(wide-screens) { float: none; }
}
.dropdown-content{
  display: none;
  position: absolute;
  list-style: none;
  background-color: white;
  padding: 0;
  width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10000;
}
.dropdown:hover .dropdown-content {
  display: block;
  background: white;
  z-index: 10000;
}
.dropdown-item{
  float: none;
  padding: 12px 16px;
  margin: 0px;
  text-decoration: none;
  display: block;
  text-align: left;
  z-index: 10000;
  :hover {
    background-color: #ddd;
  }
}
.phone-number{
  padding-left: 10px;
  display: flex;
  img{
    padding-top: 0;
    height: 22px;
    color: inherit;
  }
  a{
    text-decoration: none;
    color: inherit;
    margin: auto;
    font-size: 20px;
  }
}
.phone-number:hover {
  img{
    animation: shake 0.8s;
    animation-iteration-count: infinite;
  }
}

@media (max-width: 750px) {
  .navbar-nav{
    display:none;
  }
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
