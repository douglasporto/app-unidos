<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="cyan"
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
          <div slot="subtitle">by Brain&Mind - v{{ $q.version }}</div>
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
      >
        <q-list-header>Menu</q-list-header>
        <q-item @click.native="$router.replace('/games')">
          <q-item-side icon="fas fa-futbol" />
          <q-item-main label="Jogos" sublabel="Confira os próximos Jogos" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
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
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
