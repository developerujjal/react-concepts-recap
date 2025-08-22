export const Button = ({ label = 'Click me', type = "button" }) => {

    return (
        <button type={type}>{label}</button>
    )
};


// we don't used it as a defaultpros or default value
// Button.defaultProps = {
//     label: 'Click Me',
//     type: 'button'
// };