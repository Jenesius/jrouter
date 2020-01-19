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

            listen({
                name: this.name,
                // eslint-disable-next-line no-unused-vars
                fn: (route, previousRoute) => {
                //Проверка, должен ли данный контейнер иметь в себе компоненту по данному пути
                //Принимает конфигурацию роута и название ДАННОГО контейнера
                // eslint-disable-next-line no-unused-vars
                function check(router, nameRouter){
                    return router.components.hasOwnProperty(nameRouter);
                }


                this.current = route.path;
                return;



                //С неглавной на неглавную
                // eslint-disable-next-line no-unreachable
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
                    * Начинаем идти с конца, т.к. Если в маршруте поменяется компонента в
                    * родительском роуте, мы это заметим первее
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

                if (_tmp === false)
                    return;

                return (_tmp.components[this.name]) ;
            },
        },
        render(createElement) {
            return createElement(this.routedComponent);
        }
    };
</script>
