import { useState } from "react"

const useFormHandler = (props) => {

    const [value, setValue] = useState("")

    const onChangeHandler = (event) => {
        console.log('here')
        setValue(event.target.value)
    }



    return [value, onChangeHandler]
}

export default useFormHandler