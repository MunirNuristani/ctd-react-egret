import React from 'react';


const InputWithLabel = ( { todoTitle, handleTitleChange, children}) => {
    const inputRef = React.useRef()

    React.useEffect(() => {
        inputRef.current.focus();
      
    });

    return(
    <>
        <label htmlFor="todoTitle"> {children} </label>
        
            <input
                ref={ inputRef }
                autoFocus
                required
                type="text" 
                id="todoTitle" 
                name="title"
                value = { todoTitle} 
                onChange = {handleTitleChange}
                placeholder = "&#xF03A; Enter Task Here!" 
                style={{fontFamily:'FontAwesome, Open Sans', fontSize:'1.2rem'}} 
                >
            </input>
    </>        
    )
}

export default InputWithLabel;