const listeners = [];

export const push = (route) => {
    // get url goTo

    /*if(route.isSubView){
        const previousRoute = window.location.pathname;
        window.history.pushState(null, null, previousRoute);

        // eslint-disable-next-line no-console
        console.log(listeners);

        listeners.forEach(listener => listener(route, true));
        return;
    }
*/

    const previousRoute = window.location.pathname;


    if(route.isSubView)window.history.pushState(null, null, previousRoute);
    else
    window.history.pushState(null, null, route.path);
    listeners.forEach(listener => listener(route, previousRoute));



};

export const listen = fn => {
    listeners.push(fn);
};

export const back = () => {
    window.history.back();

};