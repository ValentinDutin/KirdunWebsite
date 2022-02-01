<template>
<footer class="footer">
    <div class="footer-content">
        <div>
            <ul class="footer-list">
                <li
                class="list-item"
                v-for="(list, index) in footerList" :key="index"
                >
                    <router-link
                    :to="list.path"
                    >
                        {{list.name}}
                    </router-link>
                </li>
            </ul>
            <iframe class="google-maps"
                src="https://www.google.com/maps/d/embed?mid=1-Lbmr0qlS-TmNPP1qjDB4ussrJHkiR7C&ehbc=2E312F"
            >
            </iframe>
        </div>
    </div>
    <div class="bottom-footer">
        <p>
            © 2022 ООО "Бернаст"
        </p>
    </div>
</footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {},
  data () {
    return {
      footerList: [
        { name: 'Главная', path: '/' },
        { name: 'Услуги', path: '/services' },
        { name: 'О нас', path: '/about-us' },
        { name: 'Контакты', path: '/contacts' },
        { name: 'Блог', path: '/blog' },
        { name: 'Отзывы', path: '/review' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.footer{
    padding-top: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    align-self: center;
}
.footer-content{
    border-radius: 120px;
    display: flex;
    // position: relative;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    // flex-direction: row;
    // -webkit-box-align: center;
    // -webkit-box-pack: center;
    // justify-content: center;
    padding: 0px;
    margin: 0px;
    height: 800px;
    width: 100%;
    max-width: 1220px;
    background: #2e312f;
    // background: #333333;
    color: rgb(255, 255, 255);
    div{
        display: flex;
        justify-content: space-between;
        // justify-content: right;
        padding: 100px;
        // margin: auto;
        align-items: center;
        width: 100%;
        max-width: 1220px;
    }
}
.footer-list{
    // padding: 100px;
    display: block;
    position: flex;
    list-style: none;
    width: auto;
    text-align: center;
}
.list-item{
    a{
        text-decoration: none;
        font-size: 30px;
        color: white;
        padding:10px;
        float: none;
        display: block;
        text-align: left;
    }
    :hover{
        color: #cccccc;
    }
}
.google-maps{
    width: 60%;
    // margin-right: 100px;
    // margin-top: 100px;
    height: 600px;
    border-radius: 60px;
}
.bottom-footer{
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 80px;
    // width: 100vw;
    p{
    font-weight: 500;
    font-size: 14px;
    color: black;
    font-family: BasierSquare,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    }
}

@media screen and (max-width: 450px) {
  .footer-content{
      height: auto;
      border-radius: 39px;
      padding-top: 20px;
      div{
    flex-direction: column-reverse;
    padding: 0;
    }
  }
  .footer-list{
      padding: 0;
      margin-top: 16px;
  }
  .list-item{
    a{
        text-align: center;
    }
  }
  .google-maps{
    width: 100vw;
    height: 80vh;
    border-radius: 20px;
  }
}
</style>
