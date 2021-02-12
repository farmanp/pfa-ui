<template>
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
  <tab-content 
  title="Relationship Status"
  icon="ti-heart">
    <relationship-status></relationship-status>            
  </tab-content>
      
  <!-- RESIDENTIAL DETAILS -->
  <tab-content title="Residential Details"
    icon="ti-home">
    <residential-details></residential-details>
  </tab-content>
      
  <!-- CHECKING DETAILS -->
  <tab-content title="Checkings"
    icon="ti-money">
  <checking-details></checking-details>
  </tab-content>

  <!-- SAVING DETAILS -->
  <tab-content title="Savings"
    icon="ti-shield">
    <savings-details></savings-details>
  </tab-content>

  <!-- RETIREMENT DETAILS -->
  <tab-content title="Retirement"
    icon="ti-support">
    <retirement-details></retirement-details>
  </tab-content>
  </form-wizard>  
</template>