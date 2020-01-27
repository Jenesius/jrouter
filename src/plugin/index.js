import RouterView from './RouterView';
import RouterLink from "./RouterLink";

import RouterWorker from './routeWorker';

import { listen, push, back } from "./history";

export default {
    install(Vue, options) {

        /*Устанавливаем конечные пути*/
        Vue.prototype.$routes = RouterWorker.adaptationRoutes(options.routes);

        //Если установлен мод RemoveHash при первом запуске #hash будет удалён
        if (options.basic){
            if (options.basic.removeHash)
                RouterWorker.replaceState(' ');
        }

        /*Проверка на редирект*/
        let _tmp = RouterWorker.checkRedirect(Vue.prototype.$routes, window.location.pathname + window.location.hash);
        RouterWorker.replaceState(_tmp);


        /*Добавляем дефолтные компоненты для роутинга*/
        Vue.component("RouterView", RouterView);
        Vue.component("RouterLink", RouterLink);



        Vue.prototype.$pushRoute = (routePath) => {

            let redirectUrl = RouterWorker.checkRedirect(Vue.prototype.$routes, routePath);

            let _tmp = RouterWorker.findRouteByPath(Vue.prototype.$routes, (redirectUrl || routePath));

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
