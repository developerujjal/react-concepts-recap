import { useState } from "react"
import { Form } from "./Form";

export const TrickTwo = () => {

    // Few ways to reset the Form
    // 01. Used key
    // 02. For controlled inputs, we need to reset the state, like setName(''), to clear the input
    // 03. input uncontrolled => e.target.reset()

    const [formRevision, setFormRevision] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault(); // important to stop page reload

        const formData = new FormData(event.target);
        const name = formData.get("name");
        console.log(name);

        if (name) {
            setFormRevision((pre) => pre + 1); // increment key if you want full re-render
        }
    };



    return (
        <>
            <Form key={formRevision} handleSubmit={handleSubmit} />

        </>
    )
}