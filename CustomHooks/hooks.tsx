import { useEffect } from "react"

export const useAppState = (routeName: any) => {
    
    const screen = routeName;

    useEffect(() => {
        console.log(screen + " Screen Mounted")
        return () => {
            console.log(screen + " Screen Unmounted")
        }
    }, [])
}