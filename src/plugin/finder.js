function finder(routes) {


    function _obj() {

    }

    _obj.findByPath = function(path){

        function check(elem){
            return elem.path === path;
        }

        return routes.find(check);
    };



    return _obj;
}

export default finder;