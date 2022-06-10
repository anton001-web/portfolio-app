import React from 'react'
import styles from "../../styles/main/section3.scss";
import {useSelector} from "react-redux";
import {qnt} from '../funcs/starsQnt'

const ListItem = ({item}) => {


    return (
        <div className={styles.skills__item} data-skill={item.webpack} key={item.id}>
            <img src={item.img} className={styles.skillsItem__img} alt="tech"/>
            <h5 className={styles.skillsItem__title}>{item.title}</h5>
            <div className={styles}>
                {qnt(item.rate)}
            </div>
        </div>
    )
}

export default ListItem