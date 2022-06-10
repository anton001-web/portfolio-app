import React from 'react'
import styles from '../../styles/main/section2.scss'

const Section2 = () => {


    return (
        <section className={styles.section_about} id='about'>
            <div className={styles.sectionInfo__block}>
                <h1 className={styles.sectionInfo__title}>About me</h1>
                <p className={styles.sectionInfo__subTitle}>
                   <span data-name='title'>
                       Hi,I`m Anton - Junior React Developer from Kharkiv. <br/>
                   I`m interested in Web Developing and everything connected with it
                   </span>
                    <span data-name='title'>
                        I`m self-taught, and developing web applications for one year
                    </span>
                    <span data-name='title'>
                        I`m ready to unusual decisions and new acquaintances
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Section2