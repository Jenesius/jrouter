import RouterView from './RouterView';
import RouterLink from "./RouterLink";

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

        if (elem.hasOwnProperty('redirect')){
            _arr[_arr.length -1].redirect = elem.redirect;
        }


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
function checkRedirect(routes, totalURL){



    let currentElem = routes.find(elem =>   elem.path === totalURL);

    if (currentElem.hasOwnProperty('redirect')){
        return currentElem.redirect;
    }
    return false;
}

export default {
    install(Vue, options) {




        //Если установлен мод RemoveHash при первом запуске #hash будет удалён
        if (options.basic){
            if (options.basic.removeHash) {
                history.replaceState(null, null, ' ');
            }
        }




        //Modify Router Array
        Vue.prototype.$routes = update(options.routes);

        let _tmp = checkRedirect(Vue.prototype.$routes, window.location.pathname + window.location.hash);

        if (_tmp ){
            // eslint-disable-next-line no-console
            history.replaceState(null, null, _tmp);
        }


        Vue.component("RouterView", RouterView);
        Vue.component("RouterLink", RouterLink);





        Vue.prototype.$pushRoute = (routePath) => {

            let test = checkRedirect(Vue.prototype.$routes, routePath);

            if (test ){
                routePath = test;
            }

            let _tmp = finder(Vue.prototype.$routes).findByPath(routePath);

            push(_tmp);

        };

        //Если указать проверку, то переход назад состоится лишь тогда,
        // когда текущий путь равен полученному
        Vue.prototype.$backRoute = (_str ) => {
            if (_str === undefined) {
                back();
                return;
            }

            switch (_str[0]) {
                    case '#':
                        if (window.location.hash === _str) back();
                        break;
                    case '/':
                        if (window.location.pathname === _str) back();
                        break;
                }

        };

        if (options.hook) {
            listen(options.hook);
        }
    }
};
