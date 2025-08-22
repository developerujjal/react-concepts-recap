import { useState } from "react";
import Modal from "./Modal";

const TrickFive = () => {

    const [visible, setVisible] = useState(false)

    // console.log(visible)
    
    return (
        <div>
            <h1>This is a modal root</h1>
            <button onClick={() => setVisible(!visible)}>Ok</button>

            {
                visible === true ? (
                    <Modal>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, laboriosam expedita. Recusandae quasi quam architecto laboriosam neque magni beatae veritatis.</p>
                    </Modal>
                ) : null
            }
        </div>
    )
};

export default TrickFive;