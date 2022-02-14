import React, {useEffect, useState} from 'react'

const Timer = () => {
    const hour = 24 - new Date().getHours() - 1
    const min = 60 - new Date().getMinutes() -1
    const sec = 60 - new Date().getSeconds()
    const [active, setActive] = useState(false)
    const [ hours, setHours ] = useState(hour)
    const [ minutes, setMinutes ] = useState(min)
    const [seconds, setSeconds ] =  useState(sec)

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        setActive(true)
                        setHours(23)
                        setMinutes(59)
                        setSeconds(59)
                    } else {
                        setHours(hours - 1)
                        setMinutes(59)
                        setSeconds(59)
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                    setActive(false)
                }
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval)
        }
    })

    return (
        <div>
            {active && <h1>timer</h1>}
            <h1> {hours < 10 ?  `0${hours}` : hours}:{minutes < 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
        </div>
    )
}


export default Timer