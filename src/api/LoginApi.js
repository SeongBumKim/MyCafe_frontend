import axios from "axios";

class LoginApi{
    URL = '/login/';

    login(username, password){
      return axios.post(this.URL,{'username':`${username}`,'password':`${password}`})
                    .then((response)=>response.data); //success - username, fail - error
    }

    logout(){
      return axios.get(this.URL+`logout/`)
                    .then((response)=>response.data); //message
    }

    userList(){
      return axios.get(this.URL+`users/`)
      .then((response)=>response.data); //user_list
    }

    

}

export default new LoginApi();

