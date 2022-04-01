<template>
  <div class="home-works container">
    <h3 class="home-common-title">How PicoGo Referral App works</h3>
    <el-row class="works-wrap">
      <el-col class="works-item" :span="24" :md="12" v-for="item in list">
        <div v-if="index == 0">
          <h3 class="works-title">{{item.title}}</h3>
          <h5 class="works-sub-title">{{item.subtitle}}</h5>
          <div class="works-img left hidden-sm-and-down">
            <img :src="item.img" alt="">
          </div>
          <div class="works-img center hidden-md-and-up">
            <img :src="item.img" alt="">
          </div>
          <p class="works-text">{{item.text}}</p>
        </div>
        <div v-if="index == 1">
          <h3 class="works-title">{{item.title}}</h3>
          <h5 class="works-sub-title">{{item.subtitle}}</h5>
          <p class="works-text">{{item.text}}</p>
          <div class="works-img right hidden-sm-and-down">
            <img :src="item.img" alt="">
          </div>
          <div class="works-img center hidden-md-and-up">
            <img :src="item.img" alt="">
          </div>
        </div>
        <div v-else>
          <h3 class="works-title">{{item.title}}</h3>
          <h5 class="works-sub-title">{{item.subtitle}}</h5>
          <div class="works-img center">
            <img :src="item.img" alt="">
          </div>
          <p class="works-text">{{item.text}}</p>
        </div>
      </el-col>
      <!-- <el-col class="works-item" :span="24" :md="12">
        <h3 class="works-title">Project</h3>
        <h5 class="works-sub-title">Create referral to incentivize promotion of your project</h5>
        <div class="works-img left hidden-sm-and-down">
          <img src="/lib/images/work_1.png" alt="">
        </div>
        <div class="works-img center hidden-md-and-up">
          <img src="/lib/images/work_1.png" alt="">
        </div>
        <p class="works-text">As a crypto project you can create a referral and set bounties to encourage promoters to spread the word and bring in new participants to your project. The bounties are rewarded to promoters that are helping you in increasing the usage of your token or dApp and to participants as a bonus for their participation.</p>
      </el-col>
      <el-col class="works-item" :span="24" :md="12">
        <h3 class="works-title">Promoter</h3>
        <h5 class="works-sub-title">Sign up to promote and earn bounties</h5>
        <p class="works-text">Explore the referrals and pick the ones you would like to promote. You sign up to promote and mint your referral link which you can share with your followers or friends via any channel. You will earn a bounty by referring participants who engage with the project token or dApp via your referral link.</p>
        <div class="works-img right hidden-sm-and-down">
          <img src="/lib/images/work_2.png" alt="">
        </div>
        <div class="works-img center hidden-md-and-up">
          <img src="/lib/images/work_2.png" alt="">
        </div>
      </el-col>
      <el-col class="works-item" :span="24" :md="12">
        <h3 class="works-title">Participant</h3>
        <h5 class="works-sub-title">Follow the referral link and earn bounties</h5>
        <div class="works-img center">
          <img src="/lib/images/work_3.png" alt="">
        </div>
        <p class="works-text">Depending on a referral, you can be invited via referral link to participate in a token sale or liquidity pool. You follow the link, sign it with your wallet and become eligible to earn your bounty. Once you participate in a token sale or liquidity pool, you will receive your entitled bounty as a bonus.</p>
      </el-col>
      <el-col class="works-item" :span="24" :md="12">
        <h3 class="works-title">Participant</h3>
        <h5 class="works-sub-title">Follow the referral link and earn bounties</h5>
        <div class="works-img center">
          <img src="/lib/images/work_3.png" alt="">
        </div>
        <p class="works-text">Depending on a referral, you can be invited via referral link to participate in a token sale or liquidity pool. You follow the link, sign it with your wallet and become eligible to earn your bounty. Once you participate in a token sale or liquidity pool, you will receive your entitled bounty as a bonus.</p>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {
          title:'Project',
          subtitle:'Create referral to incentivize promotion of your project',
          img:'/lib/images/work_1.png',
          text:'As a crypto project you can create a referral and set bounties to encourage promoters to spread the word and bring in new participants to your project. The bounties are rewarded to promoters that are helping you in increasing the usage of your token or dApp and to participants as a bonus for their participation.'
        },
        {
          title:'Promoter',
          subtitle:'Sign up to promote and earn bounties',
          img:'/lib/images/work_2.png',
          text:'Explore the referrals and pick the ones you would like to promote. You sign up to promote and mint your referral link which you can share with your followers or friends via any channel. You will earn a bounty by referring participants who engage with the project token or dApp via your referral link.'
        },
        {
          title:'Participant',
          subtitle:'Follow the referral link and earn bounties',
          img:'/lib/images/work_3.png',
          text:'Depending on a referral, you can be invited via referral link to participate in a token sale or liquidity pool. You follow the link, sign it with your wallet and become eligible to earn your bounty. Once you participate in a token sale or liquidity pool, you will receive your entitled bounty as a bonus.'
        },
        {
          title:'Participant',
          subtitle:'Follow the referral link and earn bounties',
          img:'/lib/images/work_3.png',
          text:'Depending on a referral, you can be invited via referral link to participate in a token sale or liquidity pool. You follow the link, sign it with your wallet and become eligible to earn your bounty. Once you participate in a token sale or liquidity pool, you will receive your entitled bounty as a bonus.'
        }
      ]
    }
  },
  methods: {}
}
</script>
