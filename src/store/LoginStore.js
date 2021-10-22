import { makeAutoObservable, runInAction } from "mobx";
import LoginApi from "../api/LoginApi";

class LoginStore{
   
    user={'username' :'', 'password':''} //observable
    users=[];
    message ='';
    

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async login(username, password){
        try{
            const result = await LoginApi.login(username, password );  
            
            runInAction(()=>this.user.username=result);
            sessionStorage.setItem('username',this.user.username);
        }
        catch(error){
            console.log(error);
            runInAction(()=>this.message=error.message);
        } 
    }   
    
    async logout(){
        try{
            const result = await LoginApi.logout();
            runInAction(()=>this.message = result)
        }catch(error){
            runInAction(()=>this.message=error.message);
        }
    }

    async userList(){
        try{
            const result = await LoginApi.userList();
            runInAction(()=>this.user = result)
        }catch(error){
            runInAction(()=>this.message = error.message)
        }
    }

}

export default new LoginStore();