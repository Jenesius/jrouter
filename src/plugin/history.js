const listeners = [];

function minRoute(route){

    let _obj = {
        path: route.path,
    };

    return _obj;
}


export const push = (route) => {

    const previousRoute = window.location.pathname;
    const previousHash = window.location.hash;

    if(route.isSubView){
        if (window.location.hash){
            window.history.replaceState(minRoute(route), null, previousRoute + route.path );
        }else{
            window.history.pushState(minRoute(route), null, previousRoute + route.path );
        }
    }
    else{
        //Идём с не галвного, на глвынй
        if (previousHash){
            window.history.replaceState(minRoute(route), null, route.path);
        }else{
            window.history.pushState(minRoute(route), null, route.path);
        }
    }






    listeners.forEach(listener => listener(route, previousRoute));




};

export const listen = fn => {
    listeners.push(fn);
};

export const back = () => {

    window.history.back();


};