<template>
    <div class="chat container">
    <h2 class="center teal-text"> ANIME-CHAT </h2>
    <div class="card">
        <div class="card-content">
            <ul class="messages">
                <li>
                    <span class="teal-text">
                      {{this.name }}
                    </span>
                    <span class="grey-text text-darken-3">message</span>
                    <span class="grey-text time">time</span>
                </li>
            </ul>
        </div>
        <div class="card-action">
            <input type="text">
        </div>
    </div>
    </div>

</template>

<script>
export default {
    name:'Chat',
    // accepting the props. props are used to share the data among the components
    props:['name'],
    data(){
        return{

        }
    }
}
    
</script>
<style scoped>

</style>

