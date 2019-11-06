import React from 'react'

function FnHOC(WrappedComponent,other){
    return class extends React.Component{
        render(){
            console.log('FN Wrapper')
            return(
                <React.Fragment>
                    <p>{other}</p>
                <WrappedComponent></WrappedComponent>
                </React.Fragment>
            );
        }
    }
}

export default FnHOC