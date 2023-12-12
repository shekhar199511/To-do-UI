import { useEffect, useState } from "react"

const withHoc = (wrCmp) => {
    return (props) => {
        const [isLoading, setLoading] = useState(true)

        useEffect(()=>{
            setTimeout(()=>{
                setLoading(false)
            }, 5000)
        }, [])

        return (
            <div>
                {
                    isLoading ? 'Loading....' : wrCmp
                }
            </div>
        )
    }
}

export default withHoc