import React from 'react'
import styles from '../../styles/footer/footer.scss'

const Footer = () => {

    return (
        <footer className={styles.footer} id='contacts'>
            <div className={styles.footer__block}>
                <h1 className={styles.footer__title}>Contacts</h1>
                <h3 className={styles.footer__subTitle}>Want to know more or just chat? You are welcome!</h3>
                <a href="tel:+380999096899" className={styles.footer__messageBtn}>Call Me!</a>
                <div className={styles.footerContacts__list}>
                    <a target='_blank' href="https://www.instagram.com/anton.pq/"><img src="assets/images/instagram.png" alt=""/></a>
                    <a target='_blank' href="https://twitter.com/antonWeb02"><img src="assets/images/twit.png" alt=""/></a>
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100049686581389"><img src="assets/images/facebook.png" alt=""/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer