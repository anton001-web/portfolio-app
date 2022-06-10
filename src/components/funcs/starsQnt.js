import {useSelector} from "react-redux";
import styles from "../../styles/main/section3.scss";
import React from "react";


export const qnt = (n) => {
    const theme = useSelector((state) => {
        const {theme} = state.theme
        return theme
    })

    switch (n) {
        case 2:
            if(theme === 'light') {
                return (
                    <div className={styles.skillsItem__rate}>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                    </div>
                )
            } else {
                return (
                    <div className={styles.skillsItem__rate}>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                    </div>
                )
            }
        case 3:
            if(theme === 'light') {
                return (
                    <div className={styles.skillsItem__rate}>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                    </div>
                )
            } else {
                return (
                    <div className={styles.skillsItem__rate}>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                    </div>
                )
            }
        case 4:
            if(theme === 'light') {
                return (
                    <div className={styles.skillsItem__rate}>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                    </div>
                )
            } else {
                return (
                    <div className={styles.skillsItem__rate}>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                    </div>
                )
            }
        case 5:
            if(theme === 'light') {
                return (
                    <div className={styles.skillsItem__rate}>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                        <img src="assets/images/star.png" alt=""/>
                    </div>
                )
            } else {
                return (
                    <div className={styles.skillsItem__rate}>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                        <img src="assets/images/star5.png" alt=""/>
                    </div>
                )
            }
    }
}