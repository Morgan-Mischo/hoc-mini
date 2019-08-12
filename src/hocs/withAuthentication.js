import React from 'react'; 

export default function withAuthentication(WrappedComponent) {
return function WithAuthentication(props) {
    if(props.isAuthenticated) return <WrappedComponent {...props} />
    return null; 
}
}