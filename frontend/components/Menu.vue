<template>
  <v-app-bar app elevate-on-scroll hide-on-scroll extension-height="140px">
    <v-col sm="2" style="max-height: 100%; overflow: hidden">
      <NuxtLink :to="{ name: 'index' }" class="description">
        <strong>оперативная полиграфия</strong>
      </NuxtLink>
    </v-col>
    <v-col>
      <v-row>
        <v-breadcrumbs
          :items="[{ text: 'Какие-то' }, { text: 'Хлебные крошки' }]"
          large
        ></v-breadcrumbs>
        <v-spacer></v-spacer>
        <Search
          style="width: 100px"
          v-show="$vuetify.breakpoint.smAndUp"
          :search_value.sync="search_value"
        ></Search>
        <v-btn
          icon
          v-show="$vuetify.breakpoint.xsOnly"
          @click="openSearch = true"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-dialog
          v-model="openSearch"
          hide-overlay
          transition="slide-y-transition"
          :value="$vuetify.breakpoint.xs"
        >
          <v-card v-show="$vuetify.breakpoint.xsOnly">
            <v-container>
              <Search autofocus :search_value.sync="search_value"></Search>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
    <v-col sm="2" class="phone_block">
      <a href="tel:8495290-31-21">8 (495) 290-31-21</a>
      <br />
      <a href="#/" class="btnCall">Обратный звонок</a>
    </v-col>

    <!--  v-scroll="onScroll" :extension-height="(!isScrolled)?'200px':0" height="fit-content" -->
    <!-- shrink-on-scroll height="300px" -->

    <!-- {{ window.pageYOffset }} -->
    <!-- v-scroll="onScroll" -->
    <!--   shrink-on-scroll extended prominent scroll-off-screen hide-on-scroll-->
    <!-- <v-app-bar-nav-icon @click="$parent.$parent.$refs.nav.burger_click()"></v-app-bar-nav-icon> -->

    <!-- <v-app-bar-title>Test</v-app-bar-title> -->

    <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon :to="{ name: 'About' }" exact v-bind="attrs" v-on="on">
                    <v-icon>help</v-icon>
                </v-btn>
            </template>
            <span>About</span>
        </v-tooltip> -->

    <!-- hide on scroll -->
    <template #extension>
      <NuxtLink :to="{ name: 'index' }" class="col-sm-2">
        <v-img src="https://picsum.photos/300/140" aspect-ratio="2"></v-img>
        <h1>Паладин</h1>
      </NuxtLink>

      <v-btn :to="{ name: 'index' }" class="menu__btn" exact x-large>
        Главная
      </v-btn>

      <v-btn :to="{ name: 'services' }" class="menu__btn" x-large>
        Услуги
      </v-btn>

      <v-btn :to="{ name: 'contacts' }" class="menu__btn" exact x-large>
        Контакты
      </v-btn>

      <v-btn :to="{ name: 'about' }" class="menu__btn" exact x-large>
        О нас
      </v-btn>

      <v-spacer></v-spacer>

      <v-col sm="2" style="text-align: center">
        <v-badge :content="1" :value="1" color="green" overlap bordered>
          <v-btn :to="{ name: 'order' }" x-large> Заказ </v-btn>
        </v-badge>
      </v-col>

      <!-- <v-slide-y-transition> -->
      <!-- <v-row v-show="!isScrolled"> -->

      <!-- </v-row> -->
      <!-- </v-slide-y-transition> -->
    </template>
  </v-app-bar>
</template>

<script>
import Search from "./Search";

export default {
  name: "Menu",
  components: { Search },
  data: () => ({
    isScrolled: false,
    openSearch: false,
    search_value: "",
  }),
  mounted() {
    if (this.$router.currentRoute.name == "Search") {
      if (this.$route.query["query"] != this.search_value)
        this.search_value = this.$route.query["query"];
    } else this.search_value = "";
  },
  // computed: {
  //     // геттер вычисляемого значения
  //     isScrolled: function () {
  //     // `this` указывает на экземпляр vm
  //         console.log(document.scrollTop);
  //         return document.scrollTop;
  //     }
  // },
  methods: {
    onScroll(e) {
      this.isScrolled = e.target.scrollingElement.scrollTop < 30 ? false : true;
    },
  },
};
</script>

<style scoped>
/* .v-toolbar__extension, .v-toolbar__extension>* {
    align-items: flex-end;
    transition: height 0.35s ease-in-out;
}
.v-toolbar__content {
    align-items: center;
} */
.btnCall {
  color: inherit;
  text-decoration: inherit;
}

.menu__btn {
  margin: 20px;
}

h1,
.description,
.phone_block {
  text-align: center;
}
.nuxt-link-active {
  color: inherit;
  text-decoration: none !important;
}
.description {
  display: block;
  height: 100%;
  width: 100%;
  font-size: 12px;
}
.phone_block > * {
  font-size: 0.7em;
}

.v-dialog__content {
  align-items: start;
}
</style>