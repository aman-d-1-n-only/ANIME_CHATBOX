import Vue from 'vue'
import Router from 'vue-router'
// '@' in the path means that we are starting from root dir that is src here 
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/chat',
            name: "Chat",
            component: Chat,
            props: true,
            //router guard:means a guard that decide whether to render the this route.here we don't want to render chat route without name
            //we are using here beforeEnter router guard
            beforeEnter: (to, from, next) => {
                if (to.params.name) {
                    next({})
                } else {
                    next({ name: 'Welcome' })
                }
            }
        }
    ]
})