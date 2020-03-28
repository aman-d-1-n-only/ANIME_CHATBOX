<template>
    <div class="chat container">
    <h2 class="center teal-text"> ANIME-CHATROOM </h2>
    <div class="card">
        <!--fetching stored data from firestore and displaying it up here-->
        <div class="card-content">
            <ul class="messages" v-chat-scroll>
                <li v-for="message in messages" :key="message.id">
                    <span class="teal-text">
                     {{message.name}}
                    </span>
                    <span class="grey-text text-darken-3">{{message.content}}</span>
                    <span class="grey-text time">{{message.timestamp}}</span>
                </li>
            </ul>
        </div>
        <div class="card-action">
            <!--This component will take the msg from user and store it in firestore--> 
            <NewMessage :name="name" />
        </div>
    </div>
    </div>

</template>

<script>
import db from '@/Firebase/init'
import NewMessage from '@/components/NewMessage'
import moment from 'moment'


export default {
    name:'Chat',
    // accepting the props. props are used to share the data among the components
    props:['name'],
    components:{NewMessage
    },
    data(){
        return{
           messages:[],
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
           snapshot.docChanges().forEach(change => {
               if(change.type =='added'){
                   let doc =change.doc
                   this.messages.push({
                       id:doc.id,
                       name:doc.data().name,
                       content: doc.data().content,
                       timestamp:moment(doc.data().timestamp).format('lll')
                   })
               }
           })
        })
    }
}
    
</script>
<style scoped>
.chat h2{
  font-size:2.6em;
  margin-bottom:40px;  
}
.chat span {
    font-size:1.4em;

}
.chat .time{
    display:block;
    font-size:0.8em; 
}
.messages{
    max-height: 300px;
    overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
 
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
 
.messages::-webkit-scrollbar-thumb {
  background: #aaa; 
}
</style>

