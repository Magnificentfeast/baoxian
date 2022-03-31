<template>
  <div class="home-recent">
    <div class="container">
      <h3 class="home-common-title">Recent DeFi referrals</h3>
      <el-row class="recent-wrap" :gutter="30">
        <el-col :span="24" :sm="8">
          <div class="recent-item">
            <span class="recent-badge">Expired</span>
            <div class="recent-icon">
              <img src="/lib/images/recent_1.png" alt="">
            </div>
            <p class="recent-title">Pico/ETH </p>
            <p class="recent-sub-title">Pico<i class="fa fa-exchange"></i>ETH</p>
            <el-row :gutter="15">
              <el-col class="recent-text-border" :span="12">
                <p>999.9K Pico</p>
              </el-col>
              <el-col class="recent-text-border" :span="12">
                <p>Pico</p>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="12">
                <el-progress class="primary" type="circle" :width="100" :percentage="97" color="#2a74f6"></el-progress>
                <p class="progress-text">Promoter’s bounty</p>
              </el-col>
              <el-col :span="12">
                <el-progress class="primary" type="circle" :width="100" :percentage="80" color="#2a74f6"></el-progress>
                <p class="progress-text">Promoter’s bounty</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24" :sm="8">
          <div class="recent-item">
            <span class="recent-badge">Expired</span>
            <div class="recent-icon">
              <img src="/lib/images/recent_1.png" alt="">
            </div>
            <p class="recent-title">Pico/ETH </p>
            <p class="recent-sub-title">Pico<i class="fa fa-exchange"></i>ETH</p>
            <el-row :gutter="15">
              <el-col class="recent-text-border" :span="12">
                <p>999.9K Pico</p>
              </el-col>
              <el-col class="recent-text-border" :span="12">
                <p>Pico</p>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="12">
                <el-progress class="warning" type="circle" :width="100" :percentage="97" color="#ea973d"></el-progress>
                <p class="progress-text">Promoter’s bounty</p>
              </el-col>
              <el-col :span="12">
                <el-progress class="warning" type="circle" :width="100" :percentage="80" color="#ea973d"></el-progress>
                <p class="progress-text">Promoter’s bounty</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24" :sm="8">
          <div class="recent-item">
            <span class="recent-badge">Expired</span>
            <div class="recent-icon">
              <img src="/lib/images/recent_1.png" alt="">
            </div>
            <p class="recent-title">Pico/ETH </p>
            <p class="recent-sub-title">Pico<i class="fa fa-exchange"></i>ETH</p>
            <el-row :gutter="15">
              <el-col class="recent-text-border" :span="12">
                <p>999.9K Pico</p>
              </el-col>
              <el-col class="recent-text-border" :span="12">
                <p>Pico</p>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="12">
                <el-progress class="warning" type="circle" :width="100" :percentage="97" color="#ea973d"></el-progress>
                <p class="progress-text">Promoter’s bounty</p>
              </el-col>
              <el-col :span="12">
                <el-progress class="warning" type="circle" :width="100" :percentage="80" color="#ea973d"></el-progress>
                <p class="progress-text">Promoter’s bounty</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
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
