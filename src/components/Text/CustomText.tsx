import { FC, PropsWithChildren } from "react"
import { Manrope } from 'next/font/google'
import styles from './Text.module.css'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '700'] })

interface props{
    
}
const CustomText: FC<PropsWithChildren<props>> = ({children}) =>{
    return(
        <p className={`${manrope.className} ${styles.text}`}>
            {children}
        </p>
    )
}

export default CustomText