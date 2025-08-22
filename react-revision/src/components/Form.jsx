import { useState } from "react"

export const Form = ({handleSubmit}) => {
    const [getValue, setGetValue] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={getValue} placeholder="Write your name" onChange={(e) => setGetValue(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}