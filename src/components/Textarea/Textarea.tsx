import { TextareaProps } from './Textarea.props'
import styles from './Textarea.module.scss'
import cn from 'classnames'


const Textarea = ({ error, className, ...props }: TextareaProps): JSX.Element => {
    return (
        <div className={ cn(className, styles.textAreaWrapper) }>
            <textarea className={cn(styles.textArea, {
                [styles.error]: error
            })} { ...props } />
            { error && <span className={ styles.errorMessage }>{ error.message }</span> }
        </div>
    )
}

export default Textarea