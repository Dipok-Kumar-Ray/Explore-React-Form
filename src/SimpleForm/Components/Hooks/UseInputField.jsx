import { useState } from "react";
// import UseInputField from "../../../Hooks/UseInputFied";


const UseInputField = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);


    const handleFieldOnChange = e => {
        setFieldValue(e.target.value)
    }
    return [fieldValue, handleFieldOnChange]
}




export default UseInputField;