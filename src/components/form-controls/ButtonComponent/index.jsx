import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function ButtonComponent({size,style, textButton,...props}) {
  return (
    <Button 
            size={size} 
            icon={<SearchOutlined />} 
            style={style}
            {...props}
        >
        {textButton}
        </Button>
  )
}

ButtonComponent.propTypes = {}

export default ButtonComponent
