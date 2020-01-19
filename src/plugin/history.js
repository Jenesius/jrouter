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