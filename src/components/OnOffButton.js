import React from 'react'; 
import withToggle from '../hocs/withToggle'; 

function OnOffButton({toggle}) {
return (
    <button onClick={toggle.handleChange} >
        <h1>{toggle.value ? 'ON' : 'OFF'}</h1>
    </button>
)
}

export default withToggle(OnOffButton); 