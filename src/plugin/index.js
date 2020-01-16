import JRouterView from './jRouterView';
import { listen, push, back } from "./history";

import finder from "./finder";

export default {
    install(Vue, options) {


        if (options.basic){
            if (options.basic.removeHash) {
                history.replaceState(null, null, ' ');
            }
        }


        Vue.component("JRouterView", JRouterView);
        Vue.prototype.$routes = options.routes;
        Vue.prototype.$pushRoute = (routePath) => {

            let _tmp = finder(Vue.prototype.$routes).findByPath(routePath);

            push(_tmp);

        };
        Vue.prototype.$backRoute = () => {

            back();
        };

        if (options.hook) {
            listen(options.hook);
        }
    }
};
