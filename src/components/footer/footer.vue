<template>
  <div class="home-footer">
    <div class="container">
      <el-row class="footer-top">
        <el-col :xs="24" :md="20" class="el-row">
          <el-col :span="6" class="footer-link-wrap">
            <h3 class="footer-link-title">Developer</h3>
            <ul class="footer-link-content">
              <li>Github</li>
              <li>Whitepaper</li>
              <li>Audit Report</li>
              <li>Bug Bounty</li>
            </ul>
          </el-col>
          <el-col :span="6" class="footer-link-wrap">
            <h3 class="footer-link-title">Community</h3>
            <ul class="footer-link-content">
              <li>Twitter</li>
              <li>Reddit</li>
              <li>Discord</li>
              <li>Telegram</li>
              <li>Forum</li>
            </ul>
          </el-col>
          <el-col :span="6" class="footer-link-wrap">
            <h3 class="footer-link-title">Tools</h3>
            <ul class="footer-link-content">
              <li>PicoGoSwap</li>
              <li>PicoGo Chain</li>
              <li>Wallet for Web 3</li>
              <li>Dapp Store</li>
              <li>GameFi</li>
            </ul>
          </el-col>
          <el-col :span="6" class="footer-link-wrap">
            <h3 class="footer-link-title">About</h3>
            <ul class="footer-link-content">
              <li>Mediumolicy</li>
              <li>Document</li>
              <li>Help</li>
              <li>Media Kit</li>
            </ul>
          </el-col>
        </el-col>
        <el-col :xs="0" :md="4" class="footer-logo hidden-sm-only">
          <div class="footer-logo-wrap">
            <h3 class="footer-link-title">PicoGo</h3>
            <div class="logo-img">
              <img src="/lib/images/logo.png" alt="">
            </div>
          </div>
        </el-col >
      </el-row>
    </div>
    <div class="footer-bottom">
      <span>Privacy Policy</span>
      <span class="line">|</span>
      <span>Code of Conduct</span>
      <span class="line">|</span>
      <span>Code of Conduct </span>
    </div>
    <p class="footer-copyright">©2022 All rights reserved</p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>
