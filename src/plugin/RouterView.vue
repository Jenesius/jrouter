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
                isSub:false,
            };
        },
        created() {
            this.name = this.$attrs.name;

            // eslint-disable-next-line no-unused-vars
            listen((route, previousRoute) => {

                //Проверка, должен ли данный контейнер иметь в себе компоненту по данному пути
                //Принимает конфигурацию роута и название ДАННОГО контейнера
                // eslint-disable-next-line no-unused-vars
                function check(router, nameRouter){
                    for( let key in router.components){
                        if (key === nameRouter){
                            return true;
                        }
                    }
                    return  false;
                }



                //С неглавной на неглавную
                if (this.isSub && route.isSubView){
                    if (check(route, this.name) === false){

                        this.current = '';
                    }
                }

                //Если роутер относится к контейнеру
                if (check(route, this.name)){

                    this.current = route.path;
                    this.isSub = route.isSubView;
                }
                else{
                    if(this.isSub && (route.isSubView === false || route.isSubView === undefined)){


                        this.current = '';
                        this.isSub = false;
                    }

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

                return (_tmp.components[this.name]) ;

            },

        },
        render(createElement) {
            return createElement(this.routedComponent);
        }
    };

</script>