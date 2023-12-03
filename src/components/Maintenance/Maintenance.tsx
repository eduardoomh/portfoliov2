import Subtitle from '../Subtitle/Subtitle'
import CustomText from '../Text/CustomText'
import Title from '../Title/Title'
import styles from './Maintenance.module.css'

const Maintenance = () => {
    return (
        <article className={styles.main_container}>
            <section className={styles.left_container}>
                <div className={styles.img_container}>
                    <div className={styles.tape_container}>
                         <img src='/images/tape.png' width={200} height={40} />
                    </div>
                   
                    <img src='/images/man_in_laptop.png' width={703} height={444} />

                    <div className={styles.tape_container_left}>
                        <img src='/images/tape.png' width={200} height={40} />
                    </div>
                </div>
                
            </section>
            <section className={styles.right_container}>
                <Title>En Mantenimiento</Title>
                <Subtitle>JESUSMH - PORTAFOLIO PERSONAL</Subtitle>
                <br/>
                <div className={styles.text_container}>
                    <CustomText>Estamos trabajando para traer nuevas actualizaciones de la página, nos vemos pronto.</CustomText> 
                </div>
               
            </section>
        </article>
    )
}

export default Maintenance