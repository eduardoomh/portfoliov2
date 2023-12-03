import { FC, PropsWithChildren } from "react"
import { Changa_One } from 'next/font/google'
import styles from './Title.module.css'

const changaOne = Changa_One({ subsets: ['latin'], weight: ['400'] })

interface props{
    
}
const Title: FC<PropsWithChildren<props>> = ({children}) =>{
    return(
        <h1 className={`${changaOne.className} ${styles.h1}`}>
            {children}
        </h1>
    )
}

export default Title