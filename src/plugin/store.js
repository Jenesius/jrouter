class store{
    constructor() {
        this.router = [];
    }
    addRouter(obj){
        this.router.push(obj);
    }
}

export default new store();