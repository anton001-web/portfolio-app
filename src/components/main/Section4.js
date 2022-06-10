import React from 'react'
import styles from '../../styles/main/section4.scss'
import PortfolioItem from "./PortfolioItem";

const examples = [
    {link: 'http://portfoliodigital.zzz.com.ua/', img: 'assets/images/portExmp.png', title: 'Digital Ocean - Home page'},
    {link: 'http://languages.zzz.com.ua/', img: 'assets/images/lang.png', title: 'School of Languages'},
]

const Section4 = () => {

    return (
        <section className={styles.section_examples} id='portfolio'>
            <div className={styles.examples_block}>
                <h1 className={styles.examples_title}>Portfolio</h1>
                <div className={styles.examples_column}>
                    {
                        examples ? examples.map((item, id) => (
                            <PortfolioItem item={item} key={id}/>
                        )) : <h2>No examples</h2>
                    }
                </div>
            </div>
        </section>
    )
}

export default Section4