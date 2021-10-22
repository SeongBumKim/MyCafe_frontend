import axios from "axios";

class MenuApi{
    URL = '/api/menu/'
    //127.0.0.1:8000/api/book/
    menuList(){
        return axios.get(this.URL)
                    .then((response)=>response.data);
    }

    menuCategory(category){
        return axios.get(this.URL+`category/${category}/`)
                    .then((response)=>response.data);
    }

    menuDetail(id){
        // console.log(id,"----------")
        return axios.get(this.URL+`detail/${id}/`)
                    .then((response)=>response.data);
    }

    orderList(){
        return axios.get(this.URL+'order/')
                    .then((response)=>response.data);
    }

    orderedMenuList(id){
        return axios.get(this.URL+`order/${id}/`)
                    .then((response)=>response.data);
    }

    orderCreate(name, totalPrice){
        return axios.post(this.URL+'create/',
                    {name:`${name}`,
                    totalPrice:`${totalPrice}`,
                    // orderDate:`${orderDate}`
                    })
                    .then((response)=>response.data);
    }

    loginCheck(username, password ) {
        return axios.post(this.URL+`login/`,{'username':`${username}`,'password':`${password}`})
                    .then((response)=>response.data);
        
    }
    
}

export default new MenuApi();