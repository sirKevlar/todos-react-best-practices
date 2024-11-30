import { useEffect, useState } from "react";
import determineBreakpoint from "../utils/determineBreakpoint";

export default function useScreenFormat() {
    const [deviceType, setDeviceType] = useState(determineBreakpoint(window.innerWidth))

    useEffect(() => {
        function handleResize() {
            setDeviceType(determineBreakpoint(window.innerWidth))
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    return deviceType
}