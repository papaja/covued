<template>
  <Header />
  <Search />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Search from "../components/Search.vue";

export default {
  components: {
    Header,
    Footer,
    Search,
  },
};
</script>
