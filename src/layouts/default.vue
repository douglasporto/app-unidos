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
          APP Unidos do Final
          <div slot="subtitle">by Brain&Mind - Douglas</div>
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
          <q-item-side icon="fas fa-futbol" />
          <q-item-main label="Jogos" sublabel="Confira os próximos Jogos" />
        </q-item>
      </q-list>
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

<style scope lang='stylus'>
@import '~variables'
.sidebar
  color themeColor
  padding 0
  :nth-child(2)
      top 130px
  .q-list,
  .q-list-header
    padding 0
</style>
