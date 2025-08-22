import { useRef } from "react";
import Input from "./Input";

const TrickSix = () => {

    const ref = useRef(null);
    return (
        <div>
            <Input inputRef={ref} placeholder='Please type here' />
        </div>
    )
};

export default TrickSix;