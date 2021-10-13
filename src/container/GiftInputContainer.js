import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Input, Button } from 'semantic-ui-react'

class GiftInputContainer extends Component {
    
    render() {
        return (
            <div>                
                <Input type="text" placeholder="QR코드입력">
                </Input>
                <Button basic color='blue'> 기프티콘 가져오기</Button>             
            </div>
        );
    }
}

export default observer(GiftInputContainer);