import React from 'react'
import ButtonComponent from '../form-controls/ButtonComponent'
import InputField from '../form-controls/InputField'
import { SearchOutlined } from '@ant-design/icons'

function ButtonInputSearch({size, placeholder,textButton ,bordered , backgroundColorInput,backgroundColorButton}) {
  return (
    <div style={{ 
        display: "flex",
        border: "1px solid #d3d3d3",
        borderRadius: "10px",
        overflow: "hidden"
    }}>
        <InputField 
            size={size} 
            placeholder={placeholder} 
            bordered={false}
            style={{
                backgroundColor: " #fff",
                border: "none",
                outline: "none",
                borderRadius: "0"
            }}
        />
        <div style={{
                width: "2px",
                backgroundColor: "#d3d3d3",
            }}>

        </div>
        <ButtonComponent 
            size={size} 
            icon={<SearchOutlined />} 
            style={{
                border: bordered ? undefined : "none",
                boxShadow: "none",
                borderRadius: "0",
                color: "rgb(10, 104, 255)",
                backgroundColor: backgroundColorButton,
            }}
            textButton={textButton}
        />
    </div>
  )
}

ButtonInputSearch.propTypes = {
    // size: PropTypes.string.isRequired,
    // placeholder: PropTypes.string.isRequired,
}

export default ButtonInputSearch
