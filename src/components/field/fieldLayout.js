import styles from './fieldLayout.module.css'
import PropTypes from 'prop-types'

export const FieldLayout = ({field, handleClick}) => {

    return (
        <div className={styles.fieldLayout}>
            {field.map((cell, index) => (
                <button key={index} className={styles.cell} onClick={() => handleClick(index)}>{cell}</button>
            ))}
        </div>
    )
} 

FieldLayout.propTypes = {
    field: PropTypes.array,
    handleClick: PropTypes.func
}
