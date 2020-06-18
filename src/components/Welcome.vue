<template>
  <div class="welcome container ">
   <div class="anime">
      <img class="anime" src="@/assets/riyuzaki.png">
   </div>
    <div class="card">
     <div class="card-content center-align">
      <h2 class="teal-text">Welcome</h2>
      <form @submit.prevent="enterChat">
        <label for="name">Anime Character Name:</label>
        <input type="text" name="name" v-model="name">
        <p v-if="feedback" class="red-text">{{feedback}}</p>
        <button class="btn waves-effect waves-orange darken-1">ENTER ANIME WORLD<i class="material-icons right">chevron_right</i></button>
        
      </form>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  
  data () {
    return {
   name:null,
   feedback:null
    }
  },
  methods:{
    enterChat(){
     if(this.name){
       //here the props will passed under params as there is no params in route so it will consider the params as props
       //params  object will contain (name : the name of prop we expecting at recievinfg end,data that will be passed)
       this.$router.push({name:'Chat',params:{name:this.name}})
       this.feedback=null
     }else{
       this.feedback="Enter the anime character name"
     }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.welcome h2 {
  font-size:3em;
}
.welcome button{
  margin:30px auto;
}

.welcome .anime {
   margin:0 auto;
   width:200px;
   height:300px
}

.welcome .card{
 
   max-width: 500px;
  margin:0 auto;
}
</style>
