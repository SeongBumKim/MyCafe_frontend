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
    menus = []; //메뉴리스트
    myMenu = []; // 메뉴리스트에서 주문할 메뉴 선택
    giftMenu = []; //기프트카드의 메뉴
    orders = []; //주문내역리스트
    

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async selectMenu(id) {
        try{
            console.log(id, "==selectMenu====");
            const result = await MenuApi.menuDetail(id);
            console.log(result,"======MenuApi result ====")
            runInAction(()=> {this.myMenu.push(result)})
        }catch(error){
            this.message = error.message;
        }
        // console.log(this.myMenu.length,"+=========")
    }

    async unselectMenu(id) {
        try{
            const result = await MenuApi.menuDetail(id);
            // console.log(result,"result==========")
            // console.log(this.myMenu,"myMenu==========")
            runInAction(
                ()=>{
                    for(let i = 0; i < this.myMenu.length; i++){
                        if(this.myMenu[i].id === result.id){
                            this.myMenu.splice(i, 1);
                            i--;
                        }
                    }
                }
            )
        }catch(error){
            this.message = error.message;
        }
        // console.log(this.myMenu.length,"-==========")
    }

    async selectAll(){
        try{
            const result = await MenuApi.menuList();   
            
            runInAction(()=>this.menus=result);
        }
        catch(error){
            // console.log(error);
            runInAction(()=>this.message=error.message);
        }        
    }

    async selectCategory(category){
        try{
            const result = await MenuApi.menuCategory(category);  
            
            runInAction(()=>this.menus=result);
        }
        catch(error){
            console.log(error);
            runInAction(()=>this.message=error.message);
        }        
    }
    async selectAllOrder(){
        try{
            const result = await MenuApi.orderList();    
            runInAction(()=>this.orders=result);
        }
        catch(error){
            // console.log(error);
            runInAction(()=>this.message=error.message);
        }        
    }

}

export default new Menu();