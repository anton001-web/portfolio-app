import React, {useEffect} from 'react'
import styles from '../../styles/header/header.scss'
import classNames  from 'classnames'
import {useSelector, useDispatch} from "react-redux";
import {toggleBurger, toggleTheme} from "../../redux/actions";


const Header = () => {
    const burgerRef = React.createRef()
    const dispatch = useDispatch()

    const theme = useSelector((state) => {
        const {theme} = state.theme
        return theme
    })

    const themeToggle = () => {
        dispatch(toggleTheme())
    }

    const {visible} = useSelector((state) => {
        const {burger} = state
        return burger
    })

    const handleBurgerClose = () => {
        dispatch(toggleBurger())
    }

    useEffect(() => {
        if(visible) {
            document.body.style.overflow = 'hidden'
            burgerRef.current.style.left = '0px'
            burgerRef.current.style.bottom = '0'
            burgerRef.current.style.top = '-15px';

        } else {
            document.body.style.overflow = 'scroll'
            burgerRef.current.style.left = '-121%'
        }
    }, [visible])

    return (
        <header className={styles.header}>
            <div className={styles.headerUp}>
                <ul className={styles.headerList} ref={burgerRef}>
                    <li className={classNames(styles.headerList__item, styles.headerList__close)}>
                        <a href="#" className={styles.listItem__link}>Home</a>
                        <button onClick={handleBurgerClose}>&times;</button>
                    </li>
                    <li className={styles.headerList__item}><a href="#about" className={styles.listItem__link}>About me</a></li>
                    <li className={styles.headerList__item}><a href="#skills" className={styles.listItem__link}>Skills</a></li>
                    <li className={styles.headerList__item}><a href="#portfolio" className={styles.listItem__link}>Portfolio</a></li>
                    <li className={styles.headerList__item} ><a href="#contacts" className={styles.listItem__link} data-name='contacts'>Contacts</a></li>
                    <button className={styles.theme__toggle} onClick={themeToggle}>
                        {theme} Mode
                    </button>
                </ul>
            </div>
        </header>
    )
}

export default Header