import React from 'react'
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { Col, Row } from 'antd';
import './MasterLayout.scss';

const MasterLayout = ({children}) => {
  return (
    <div className='container'>
    <Row>
      <Col span={24}>
        <Header/>
      </Col>
    </Row>
    <Row gutter={12} style={{backgroundColor:"#bae7ff"}}>
      <Col span={8}><SideBar/></Col>
      <Col span={16}>{children}</Col>
    </Row>
    
  </div>
  )
}

export default MasterLayout