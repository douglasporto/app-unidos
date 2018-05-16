<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Unidos do Final
          <!-- <div slot="subtitle">by Brain&Mind - Douglas</div> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
        class="sidebar"
      >
        <q-list-header class="white">
          <bm-sidebar-header />
        </q-list-header>
        <q-item @click.native="$router.replace('/games')">
          <q-item-side icon="fas fa-calendar-alt" color="primary"/>
          <q-item-main label="Jogos" sublabel="Confira os próximos Jogos" />
        </q-item>
        <q-item @click.native="$router.replace('/score')">
          <q-item-side icon="fas fa-futbol" color="primary"/>
          <q-item-main label="Resultados" sublabel="Confira nosso placar" />
        </q-item>
          <!-- <q-item @click.native="openURL('https://www.facebook.com/unidosDoFinal')">
            <q-item-side icon="fab fa-instagram" />
            <q-item-main label="Instagram" sublabel="Siga-nos" />
          </q-item>
          <q-item @click.native="openURL('https://www.facebook.com/unidosDoFinal')">
            <q-item-side icon="fab fa-facebook" />
            <q-item-main label="Facebook" sublabel="Siga-nos" />
          </q-item> -->
      </q-list>
      <div class="footer text-center">
        <div class="div-icon"><q-btn flat icon="fab fa-instagram" @click.native="openURL('https://www.instagram.com/unidosdofinal')"/></div>
        <div class="div-icon"><q-btn flat icon="fab fa-facebook" @click.native="openURL('https://www.facebook.com/unidosDoFinal')"/></div>
        <div class="div-brain">Brain&Mind 2018 - Douglas Porto</div>
      </div>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
      <q-ajax-bar ref="bar" :position="position" :reverse="reverse" :size="computedSize" :color="color" />
    </q-page-container>
  </q-layout>
</template>
<!--<template>-->
<!--  <q-pull-to-refresh :handler="refresher">-->
    <!-- Content, whatever you like -->
<!--    <p>-->
<!--      Lorem ipsum dolor sit amet...-->
<!--    </p>-->
<!--  </q-pull-to-refresh>-->
<!--</template>-->

<script>
import bmSidebarHeader from '../components/sidebarHeader'
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  components: {
    bmSidebarHeader
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      position: 'top',
      color: 'secondary',
      reverse: false,
      size: 6,
      timeouts: []
    }
  },
  computed: {
    computedSize () {
      return this.size + 'px'
    }
  },
  methods: {
    openURL
  },
  mounted: function () {
    this.$refs.bar.start()
    setTimeout(() => {
      if (this.$refs.bar) {
        this.$refs.bar.stop()
      }
    }, Math.random() * 5000 + 2000)
  }
}
</script>

<style scoped lang='stylus'>
@import '~variables'
.sidebar
  color themeColor
  padding 0
  .q-list,
  .q-list-header
    padding 0
.footer
  background-color white
  color white
  bottom 0
  font-style italic
  font-size 0.8em
  opacity 0.7
  // padding 10px 20px
  position absolute
  text-overflow: ellipsis;
  white-space: nowrap;
  width 100%
  .div-icon
    background-color white
    color themeColor
    display inline-block
    padding 10px 0
    width 50%
  .div-brain
    background-color themeColor
    padding 10px 0
</style>
