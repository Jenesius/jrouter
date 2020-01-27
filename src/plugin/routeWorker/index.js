class RouterWorker{
    /*
    * Метод разбирает полученные роутеры
    * и проводит к одноуровневому виду
    *
    * возврщает новый массив роутеров
    * */
    adaptationRoutes(routes){

        function goTo(elem, path = ''){

            //Устанавливаем конечный путь для данного роута
            //Путём сбора путей от родителей
            let modifyPath = path + elem.path;


            let newRoute = {
                path: modifyPath,
                components: elem.components
            };

            if (elem.hasOwnProperty('redirect'))
                newRoute.redirect = elem.redirect;

            _arr.push(newRoute);

            /*
            * Если есть дети, переходим на них
            * рекуртено создаём для них пути
            * но уже передаём текущий путь от родителя
            * */
            if (elem.children !== undefined)
                elem.children.forEach(elem =>  goTo(elem, modifyPath))
        }

        let _arr = [];

        routes.forEach(elem => {
            goTo(elem);
        });

        return _arr;
    }
    /*
    * Проверяет, указан ли где-нибудь в роуте редирект с этого url
    * на другой
    * Если соотвестует, вернёт url для редиректа
    * Иначе false
    * */
    findRouteByPath(routes, url){
        return routes.find(elem => elem.path === url);
    }

    checkRedirect(routes, url){
        let currentElem = this.findRouteByPath(routes, url);

        if (currentElem.hasOwnProperty('redirect'))
            return currentElem.redirect;

        return false;
    }
    /*
    * Заменяет текущий путь, на полученный
    * */
    replaceState(url){

        if (url !== undefined && url !== false)
        history.replaceState(null, null, url);
    }


}

export default new RouterWorker();