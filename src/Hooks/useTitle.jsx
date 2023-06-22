import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `DisneyStore | ${title}`
    },[title])
}

export default useTitle;