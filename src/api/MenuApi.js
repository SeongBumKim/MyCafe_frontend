import axios from "axios";

class MenuApi{
    URL = '/api/menu/'
    //127.0.0.1:8000/api/book/
    menuList(){
        return axios.get(this.URL)
                    .then((response)=>response.data);
    }

    menuDetail(id){
        // console.log(id,"----------")
        return axios.get(this.URL+`${id}/`)
                    .then((response)=>response.data);
    }
}

export default new MenuApi();