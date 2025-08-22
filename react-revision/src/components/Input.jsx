const Input = ({ inputRef, ...pros }) => {

    return (
        <input ref={inputRef} {...pros} />
    )
};

export default Input;