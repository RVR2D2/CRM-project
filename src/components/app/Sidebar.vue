<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
import localizeFilter from "../../filters/localize.filters";

export default {
  name: "Sidebar",
  props: ['value'],
  data: () => ({
    //Выводим список сайд бара
    links: [
      {title: localizeFilter('Menu_Bill'), url: '/', exact: true},
      {title: localizeFilter('Menu_History'), url: '/history'},
      {title: localizeFilter('Menu_Planing'), url: '/planning'},
      {title: localizeFilter('Menu_Record'), url: '/record'},
      {title: localizeFilter('Menu_Category'), url: '/categories'},
    ]
  })
}
</script>

<style scoped>

</style>
