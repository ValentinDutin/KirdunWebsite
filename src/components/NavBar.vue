<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <button
    class="navbar-toggler navbar-toggler__location"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link
    class="navbar-brand"
    to="/"
    >
    Kirdun.by
    </router-link>
    <div
    class="collapse navbar-collapse"
    id="navbarSupportedContent"
    >
      <ul class="navbar-nav mb-2 mb-lg-0 navbar-nav__settings">
        <li
        class="nav-item ws-nw"
        v-for="(menu, index) in headerMenuList" :key="index"
        >
          <router-link
          class="nav-link active nav-settings"
          aria-current="page"
          :to="menu.path"
          >
            {{menu.name}}
          </router-link>
        </li>
        <li class="nav-item dropdown col-pr">
          <router-link class="nav-link dropdown-toggle nav-settings" to="/but" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Юридические услуги
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Ликвидация</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Консультация</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <form class="d-flex search-position">
        <input class="form-control me-2" type="search" placeholder="Поиск..." aria-label="Поиск">
        <button class="btn btn-outline-success" type="submit">Найти</button>
      </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {},
  data () {
    return {
      headerMenuList: [
        { name: 'Главная', path: '/' },
        { name: 'Юридические услуги', path: '/legal-services' },
        { name: 'Контакты', path: '/contacts' },
        { name: 'О нас', path: '/about-us' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/layouts/index';
.navbar{
  width: 100%;
  height: 50px;
  padding: 10px 60px;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
}
.container{
  height: 50px;
  top: 0;
}
.navbar-toggler{
  border: none;
}
// .d-flex .search-position{
//   ::after ::before{
//     box-sizing: content-box;
//   }
// }
// .container-fluid{
//   position: relative;
// }
// .search-position{
//   position: relative;
//   right: 12px;
// }
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
  height:  50px;
  padding: 1rem 1rem;
  color: $primary;
}
.navbar-nav{
  #router-link{
    height: 50px;
    // height: 8vh;
  }
  &__settings{
    height: 50px;
    margin-right: auto;
    margin-left: auto;
    :hover{
      background: rgba(231, 237, 240, .2);
      // background-color: rgba(152, 162, 167, .1);
    }
  }
}
.col-pr{
  color: $primary;
}

</style>
