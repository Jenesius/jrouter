import RouterView from './RouterView';
import { listen, push, back } from "./history";

import finder from "./finder";

export default {
    install(Vue, options) {


        if (options.basic){
            if (options.basic.removeHash) {
                history.replaceState(null, null, ' ');
            }
        }


        Vue.component("RouterView", RouterView);
        Vue.prototype.$routes = options.routes;
        Vue.prototype.$pushRoute = (routePath) => {

            let _tmp = finder(Vue.prototype.$routes).findByPath(routePath);

            push(_tmp);

        };
        Vue.prototype.$backRoute = (_str, type = null) => {


                switch (type) {
                    case 'hash':
                        if (window.location.hash === _str) back();
                        break;
                    case 'path':
                        if (window.location.pathname === _str) back();
                        break;
                    default:
                        back();
                }


        };

        if (options.hook) {
            listen(options.hook);
        }
    }
};
