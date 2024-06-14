import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function ButtonComponent({size,styleButton, styleTextButton ,textButton,...props}) {
  return (
    <Button 
            size={size} 
            // icon={<SearchOutlined />} 
            style={styleButton} 
            {...props}

        >
          <span style={styleTextButton}>{textButton}</span>
        </Button>
  )
}

ButtonComponent.propTypes = {}

export default ButtonComponent
