import AppRouter from "./AppRouter";
import { listen, push, back } from "./history";

export default {
    install(Vue, options) {
        Vue.component("AppRouter", AppRouter);
        Vue.prototype.$routes = options.routes;
        Vue.prototype.$pushRoute = (route) => {

            // eslint-disable-next-line no-console
            console.log('Push route:', route);

            // eslint-disable-next-line no-unused-vars
            function check(elem, index, arr){
                if (elem.path === route){
                    return true;
                }
                return  false;
            }

            //Router
            let _tmp = Vue.prototype.$routes.find(check);

            // eslint-disable-next-line no-console
            console.log('Push component', _tmp);

            push(_tmp);

        };
        Vue.prototype.$backRoute = back;

        if (options.hook) {
            listen(options.hook);
        }
    }
};
