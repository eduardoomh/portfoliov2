import { FC, PropsWithChildren } from "react"
import { Roboto } from 'next/font/google'
import styles from './Subtitle.module.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

interface props{
    
}
const Subtitle: FC<PropsWithChildren<props>> = ({children}) =>{
    return(
        <h2 className={`${roboto.className} ${styles.h2}`}>
            {children}
        </h2>
    )
}

export default Subtitle