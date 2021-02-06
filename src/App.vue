<template>
<div id="app">
<div>
        <form-wizard @on-complete="onComplete" 
                      shape="tab"
                      color="#32a887">
        <!-- PERSONAL INFORMATION STEP  -->
        <tab-content 
         title="Personal Information"
         icon="ti-user">   
          <personal-information></personal-information>
        </tab-content>

            <!-- RELATIONSHIP STATUS -->
            <tab-content title="Relationship Status"
                         icon="ti-heart">
              <label for="gender">Relationship</label>
              <input type="radio" id="single" name="relationship" value="single">
              <label for="single">Single</label><br>
              <input type="radio" id="married" name="relationship" value="married">
              <label for="married">Married</label><br>
              
              <input type="radio" id="complicated" name="complicated" value="complicated">
              <label for="complicated">Complicated</label><br>
            </tab-content>
            
            <!-- RESIDENTIAL DETAILS -->
            <tab-content title="Residential Details"
                         icon="ti-home">
              <label for="streetAddress">Street Address</label>
              <input type="text" name="streetAddress">
              <label for="city">City</label>
              <input type="text" name="city">
              <label for="state">State</label>
              <input type="text" name="state">
              <label for="zipCode">Zip</label>
              <input type="text" name="zip">
            </tab-content>
            
            <!-- CHECKING DETAILS -->
            <tab-content title="Checkings"
                         icon="ti-money">
              <label for="streetAddress">Street Address</label>
              <input type="text" name="streetAddress">
              <label for="city">City</label>
              <input type="text" name="city">
              <label for="state">State</label>
              <input type="text" name="state">
              <label for="zipCode">Zip</label>
              <input type="text" name="zip">
            </tab-content>
            
            <!-- SAVING DETAILS -->
            <tab-content title="Savings"
                         icon="ti-shield">
              <label for="streetAddress">Street Address</label>
              <input type="text" name="streetAddress">
              <label for="city">City</label>
              <input type="text" name="city">
              <label for="state">State</label>
              <input type="text" name="state">
              <label for="zipCode">Zip</label>
              <input type="text" name="zip">
            </tab-content>
            
           <!-- RETIREMENT DETAILS -->
            <tab-content title="Retirement"
                         icon="ti-support">
              <label for="streetAddress">Street Address</label>
              <input type="text" name="streetAddress">
              <label for="city">City</label>
              <input type="text" name="city">
              <label for="state">State</label>
              <input type="text" name="state">
              <label for="zipCode">Zip</label>
              <input type="text" name="zip">
            </tab-content>
        </form-wizard>
 </div>
</div>

</template>

<script>
import PersonalInformation from './components/steps/PersonalInformation.vue'
export default {
  components: { PersonalInformation },
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
