import { useState } from 'react'

const useAlert = () => {
  const [alert, setalert] = useState({ show: false, text: '', type: 'danger'})

  const showAlert = ({text, type = 'danger'}) => serAlert({
    show: true,
    text,
    type
  })
  const hideAlert = () => serAlert({
    show: false,
    text: '',
    type: 'danger'
  })

  return {alert, showAlert, hideAlert}
}

export default useAlert