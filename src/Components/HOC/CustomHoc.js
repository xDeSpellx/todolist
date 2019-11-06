import React from 'react';

class CustomHoc extends React.Component{
    render(){        
        console.log('custom HOC')
        return(   
            <React.Fragment>
                <p>Reserved</p>
            {this.props.children}
            </React.Fragment>         
        );
    }
}

export default CustomHoc;