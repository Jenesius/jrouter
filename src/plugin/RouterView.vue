<template>
    <component :is="routedComponent"></component>
</template>


<script>
    import {listen} from "./history";


    export default {
        data:() =>{
            return {
                current: window.location.pathname ,
                name:"",
            };
        },
        created() {

            this.name = this.$attrs.name;

            listen({
                name: this.name,
                // eslint-disable-next-line no-unused-vars
                fn: (route, previousRoute) => {

                    // eslint-disable-next-line no-console
                    //Если это hash, основные router не изменяем
                    if (route.path[0] === '#'){
                        //Если в путь содержит данный router

                        //Если этот роутер уже содержит побочный путь
                        if (this.current[0] === '#'){
                            this.current = route.path;
                        }

                         if (route.components.hasOwnProperty(this.name) ){
                            this.current = route.path;
                         }

                        return;
                    }

                    this.current = route.path;

                }
            });
            window.addEventListener(
                "popstate",
                // eslint-disable-next-line no-unused-vars
                event => (this.current = window.location.pathname)
            );

        },
        computed: {
            routedComponent() {

                function find(arr, path, name){

                    /*
                    * Начинаме с конца т.к. сперва обрабатываем узкие роуты, затем широки
                    * Сперва /api/users/positions
                    * В конце /api
                    * */

                    // eslint-disable-next-line for-direction
                    for(let i = arr.length -1; i >=0 ; i--){
                        if (path === '/' || arr[i].path === '/'){
                            if (path === arr[i].path)
                                return arr[i];
                        } else {
                            if ( path.startsWith(arr[i].path) ){
                                if (arr[i].components.hasOwnProperty(name)){
                                    return arr[i];
                                }
                            }
                        }
                    }

                    return false;
                }

                let _tmp = find(this.$routes, this.current, this.name);


                if (_tmp === false )
                    return;

                return (_tmp.components[this.name]) ;
            },
        },
        render(createElement) {
            return createElement(this.routedComponent);
        }
    };
</script>
