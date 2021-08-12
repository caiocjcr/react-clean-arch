import React, { useContext } from 'react'
import Styles from './text-input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const TextInput: React.FC<Props> = (props: Props) => {
  const { fieldErrors } = useContext(Context)
  const getStatus = (): string => {
    return '🔴'
  }
  const getTitle = (): string => {
    return fieldErrors[props.name]
  }
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  )
}

export default TextInput
