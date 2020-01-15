<template>
    <component :is="routedComponent"></component>
</template>


<script>
    import store from './store';
    import {listen} from "./history";

    export default {
        data:() =>{
            return {
                current: window.location.pathname,
                name:"",
            };
        },
        created() {
            this.name = this.$attrs.name;

            store.addRouter(this.$attrs.name);

            // eslint-disable-next-line no-unused-vars
            listen((route, previousRoute, test) => {

                // eslint-disable-next-line no-console
                    console.log(route);

                    if (route.isSubView){
                        if (this.name === 'a2'){
                            this.current = route.path;
                        }
                    }else
                        this.current = route.path;


            });
            window.addEventListener(
                "popstate",
                // eslint-disable-next-line no-unused-vars
                event => (this.current = window.location.pathname)
            );
        },

        computed: {
            routedComponent() {

                function find(arr, path){
                    for(let i = 0; i < arr.length; i++){
                        if (arr[i].path === path){
                            return arr[i];
                        }
                    }
                    return {};
                }

                //Router

                let _tmp = find(this.$routes, this.current);


                return (_tmp.components[this.name]);

            },

        },
        render(createElement) {
            return createElement(this.routedComponent);
        }
    };

</script>