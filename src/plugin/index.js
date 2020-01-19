import RouterView from './RouterView';
import { listen, push, back } from "./history";

import finder from "./finder";

function update(routes){

    let _arr = [];

    function goTo(elem, path = ''){

        let modifyPath = path + elem.path;

        _arr.push({
            path: modifyPath,
            components: elem.components,
        });

        if (elem.children !== undefined){
            elem.children.forEach(elem => {
                goTo(elem, modifyPath);
            })
        }
    }
    routes.forEach(elem => {
        goTo(elem);
    });

    return _arr;
}

export default {
    install(Vue, options) {

        //Если установлен мод RemoveHash при первом запуске #hash будет удалён
        if (options.basic){
            if (options.basic.removeHash) {
                history.replaceState(null, null, ' ');
            }
        }

        Vue.component("RouterView", RouterView);
        Vue.prototype.$routes = update(options.routes);
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
