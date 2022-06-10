import React, {useState, useEffect} from 'react'
import styles from '../../styles/main/section1.scss'
import classNames from "classnames";
import useMatchMedia from "use-match-media-hook";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger, toggleTheme} from "../../redux/actions";

const queries = [
    '(max-width: 766px)'
]

const Section1 = () => {
    const [isTablet] = useMatchMedia(queries)
    const dispatch = useDispatch()

    const theme = useSelector((state) => {
        const {theme} = state.theme
        return theme
    })

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const themeToggle = () => {
        dispatch(toggleTheme())
    }

    const handleBurger = () => {
        dispatch(toggleBurger())
    }

    return (
        <div className={styles.section1}>
            <div className={styles.headerDown}>
                <div className={styles.headerDown__content}>
                    <h1 className={styles.headerDown__title}>Anton <br/> Reva</h1>
                    <span className={styles.headerDown_subTitle}>Junior React Developer <br/> 15 years old, Kharkiv</span>
                    {
                        isTablet ? (
                            <div className={styles.burgerOpen__block}>
                                <button className={styles.burger__toggle} onClick={handleBurger}>
                                    <span className="burger__lines"></span>
                                    <span className="burger__lines"></span>
                                    <span className="burger__lines"></span>
                                </button>
                            </div>
                        ) : (
                            <div className={styles.hidden_mobile}>
                                <button className={styles.theme__toggle} onClick={themeToggle}>
                                    {theme} Mode
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={styles.image_block}>
                <img src="assets/images/myself3.jpg" alt=""/>
            </div>
        </div>
    )
}



export default Section1;