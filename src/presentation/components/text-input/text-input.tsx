import React, { useContext } from 'react'
import Styles from './text-input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const TextInput: React.FC<Props> = (props: Props) => {
  const {
    fieldErrors: { [props.name]: error },
    fieldValues,
    setFieldValues
  } = useContext(Context)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValues({
      ...fieldValues,
      [e.target.name]: e.target.value
    })
  }

  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }

  const getTitle = (): string => {
    return error || 'Alright!'
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} data-testid={props.name} onChange={handleChange} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  )
}

export default TextInput
