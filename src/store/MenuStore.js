import { makeAutoObservable, runInAction } from "mobx";
import MenuApi from "../api/MenuApi";

class Menu{
    menu = {
        id : "",
        name : "",
        price : 0, 
        stocked : true, //true -> 재고 있음, false -> 재고 없음
        category : "",
        imgUrl : "",
        ordered : false, //true -> 주문한 이력있음, false -> 주문한 이력 없음
    };
    menus = [];
    giftMenu = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async selectMenu(id) {
        
    }

    async selectAll(){
        try{
            const result = await MenuApi.menuList();    
            runInAction(()=>this.menus=result);
        }
        catch(error){
            console.log(error);
            runInAction(()=>this.message=error.message);
        }        
    }

}

export default new Menu();