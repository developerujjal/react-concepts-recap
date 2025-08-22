import { useLocalStorage } from "../hooks/useLocalStorage"
import './test.css'
export const TrickFour = () => {
    // Hooks

    const [value, setValue] = useLocalStorage('theme', 'light');

    const handleChangeTheme = () => {
        if (!value || value === 'light') {
            setValue('dark')
        } else {
            setValue("light")
        }
    };


    return (

            <div >
                <button onClick={handleChangeTheme}>{value ? "Light" : "Dark"}</button>

                {
                    value === 'dark' ? <p>Dark</p>: <p>Light</p>
                }
            </div>

            

    )
}