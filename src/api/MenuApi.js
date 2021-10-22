import axios from "axios";

class MenuApi{
    URL = '/api/menu/'
    //127.0.0.1:8000/api/book/
    menuList(){
        return axios.get(this.URL)
                    .then((response)=>response.data);
    }

    menuCategory(category){
        return axios.get(this.URL+`${category}/`)
                    .then((response)=>response.data);
    }

    menuDetail(id){
        console.log(id,"----------")
        return axios.get(this.URL+`${id}/`)
                    .then((response)=>response.data);
    }

    loginCheck(username, password ) {
        return axios.post(this.URL+`login/`,{'username':`${username}`,'password':`${password}`})
                    .then((response)=>response.data);
        
    }
    
}

export default new MenuApi();