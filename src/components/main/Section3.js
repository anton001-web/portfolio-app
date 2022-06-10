import React, {createRef, useEffect} from 'react'
import styles from '../../styles/main/section3.scss'
import ListItem from './ListItem'
import {useSelector} from "react-redux";

const skillsList = [
    {title: 'HTML', rate: 5, img: 'assets/images/html.png'},
    {title: 'Scss', rate: 4, img: 'assets/images/scss.png'},
    {title: 'JS', rate: 4, img: 'assets/images/js.png'},
    {title: 'React', rate: 3, img: 'assets/images/react.png'},
    {title: 'Webpack', rate:3, img: 'assets/images/webpack.png', webpack: 'webpack'},
    {title: 'Redux', rate:2, img: 'assets/images/redux.png'}
]

const Section3 = () => {
    return (
        <div className={styles.skills_section} id='skills'>
                <h1 className={styles.skills__title}>Skills</h1>
                <h3 className={styles.skills__subTitle}>I work with such technologies as</h3>
                <div className={styles.skills__list}>
                    {
                        skillsList ? skillsList.map((item, id) => (
                            <ListItem item={item} key={id}/>
                        )) : <h4>no skills</h4>
                    }
                </div>
        </div>
    )
}

export default Section3