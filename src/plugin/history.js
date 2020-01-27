import RouterWorker from "./routeWorker"

const listeners = [];

export const push = (route) => {

    const previousRoute = window.location.pathname;
    const previousHash = window.location.hash;


    /*Если текущий путь - hash*/
    if(route.path[0] === '#'){
        //Если предыдщий путь тоже был хэшем
        //Значит заменяем хэши
        if (window.location.hash){
            window.history.replaceState(RouterWorker.getMinimalRoute(route), null, previousRoute + route.path );
        }else{
            window.history.pushState(RouterWorker.getMinimalRoute(route), null, previousRoute + route.path );
        }
    }
    else{
        //Идём с не главного, на глвынй
        if (previousHash){
            window.history.replaceState(RouterWorker.getMinimalRoute(route), null, route.path);
        }else{
            window.history.pushState(RouterWorker.getMinimalRoute(route), null, route.path);
        }
    }

    listeners.forEach(listener => listener.fn(route, previousRoute));

};

export const listen = _obj => {
    function check(){
        listeners.forEach((elem, index) => {
            if (elem.name === _obj.name){
                listeners.splice(index, 1);

            }
        })
    }

    check();


    listeners.push(_obj);
};

export const back = () => {
    window.history.back();

};