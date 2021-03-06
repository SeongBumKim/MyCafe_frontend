import React, { useState } from 'react';


function Login() {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }

     
    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='username'>ID : </label>
                <input type='text' name='username' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='password'>PW : </label>
                <input type='password' name='password' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
    }

export default Login;