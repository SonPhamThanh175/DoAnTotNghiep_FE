import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

function InputField({ size, placeholder,bordered,style}) {
  return (
    <Input 
            size={size} 
            placeholder={placeholder} 
            bordered={bordered}
            style={style}
        />
  )
}

InputField.propTypes = {
    size: PropTypes.string,
    placeholder: PropTypes.string
}

export default InputField
