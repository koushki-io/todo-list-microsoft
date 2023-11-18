import React from 'react'
import styles from './checkBox.module.css'

function CheckBox({checked,chackedHandler}) {
  return (
    <div className={styles.checkbox_wrapper_31}>
    <input type="checkbox" checked={checked} onChange={chackedHandler}  />
    <svg viewBox="0 0 35.6 35.6">
      <circle className={styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
      <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
      <polyline className={styles.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
    </svg>
          </div>
  )
}

export default CheckBox