import React from 'react'
import styles from './index.module.css'

export default ({ text }) => <button className={styles.button}>
	{text}
</button>