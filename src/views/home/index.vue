<template>
  <div class="home-container">
    <p-banner />
    <p-recent />
    <p-works />
    <p-tool />
    <p-refer />
    <p-news />
    <p-contact />
    <p-footer />
  </div>
</template>

<script>
import pBanner from './components/banner'
import pRecent from './components/recent'
import pWorks from './components/works'
import pTool from './components/tool'
import pRefer from './components/refer'
import pNews from './components/news'
import pContact from './components/contact'
import pFooter from '@/components/footer/footer'
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {},
  components: { pBanner, pRecent, pWorks, pTool, pRefer, pNews, pContact, pFooter }
}
</script>
