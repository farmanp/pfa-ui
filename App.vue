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
              <label for="firstName">First Name</label>
              <input type="text" name="firstName">
              <label for="middleName">Middle Name (Optional)</label>
              <input type="text" name="middleName">
              <label for="lastName">Last Name</label>
              <input type="text" name="lastName">
              <label for="birthday">Birthday</label>
              <input type="date" id="birthday" name="birthday">
              <label for="gender">Gender</label>
              <input type="radio" id="male" name="gender" value="male">
              <label for="male">Male</label><br>
              <input type="radio" id="female" name="gender" value="female">
              <label for="female">Female</label><br>
              <input type="radio" id="other" name="gender" value="other">
              <label for="other">Other</label>
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

<script>
export default {
  name: 'App'
}
</script>
</template>