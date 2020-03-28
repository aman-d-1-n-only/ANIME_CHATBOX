<template>
<div class="new-message">
    <form @submit.prevent= "addMSG" >
        <label for="new-message">
            New Message ( press enter to add:)
        </label>
        <input type="text" name="new-message" v-model="newMessage">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
</div>
    
</template>


<script>
import db from '@/Firebase/init'
export default {
    name:'NewMessage',
    props:['name'],
    data() {
        return{
            newMessage:null,
            feedback:null
        }
    },
    methods:{
        addMSG(){
            if(this.newMessage){
                db.collection('messages').add({
                    content:this.newMessage,
                    name:this.name,
                    timestamp:Date.now()
                }).catch(err =>{
                  console.log(err)
                })

                this.newMessage=null
              this.feedback=null
            }else{
                this.feedback="You must enter a message in order to send one"
            }
        }
    }
}

</script>