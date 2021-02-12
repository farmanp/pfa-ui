<template>
<div id="app">
<div>
    <navigation />
    <router-view></router-view>
 </div>
</div>

</template>
<script>
import Navigation from './components/dashboard/Navigation.vue'
import CheckingDetails from './components/onboarding/steps/CheckingDetails.vue'
import PersonalInformation from './components/onboarding/steps/PersonalInformation.vue'
import RelationshipStatus from './components/onboarding/steps/RelationshipStatus.vue'
import ResidentialDetails from './components/onboarding/steps/ResidentialDetails.vue'
import RetirementDetails from './components/onboarding/steps/RetirementDetails.vue'
import SavingsDetails from './components/onboarding/steps/SavingsDetails.vue'
export default {
  components: { 
    Navigation,
    PersonalInformation,
    RelationshipStatus,
    ResidentialDetails,
    CheckingDetails,
    SavingsDetails,
    RetirementDetails 
    },
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

input[type=text], 
input[type=date],
input[type=radio],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
};
</style>
