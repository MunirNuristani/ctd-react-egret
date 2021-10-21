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
                type="text" 
                id="todoTitle" 
                name="title"
                value = { todoTitle} 
                onChange = {handleTitleChange}>    
            </input>
    </>        
    )
}

export default InputWithLabel;