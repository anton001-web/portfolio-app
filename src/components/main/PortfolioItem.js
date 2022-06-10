import React from 'react'
import styles from '../../styles/main/section4.scss'

const PortfolioItem = ({item}) => {
    return (
        <div className={styles.portfolio_item}>
            <img src={item.img} alt=""/>
            <a  target="_blank" href={item.link}>{item.title}</a>
        </div>
    )
}

export default PortfolioItem