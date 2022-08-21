import React, { useEffect, useState } from 'react';
import styles from './App.module.css'
import { Header, Footer, SubMenu, Carousel, ProductCollection } from '@/components/index'
import { Row, Col, Typography, Divider } from 'antd'
import { productList1, productList2, productList3 } from './utils/appMockData';
import sideImage from './assets/images/sider_2019_12-09.png'
import sideImage2 from './assets/images/sider_2019_02-04.png'
import sideImage3 from './assets/images/sider_2019_02-04-2.png'
import sideImage4 from './assets/images/facebook-807588_640.png'
import sideImage5 from './assets/images/follow-826033_640.png'
import sideImage6 from './assets/images/icon-720944_640.png'
import sideImage7 from './assets/images/microsoft-80658_640.png'
function App() {
  // const { Header, Footer, Sider, Content } = Layout;
  useEffect( () => {
    console.log( 'useEffect' );
  }, [] )
  return (
    <div className={ styles.App }>
      <Header />
      <div className={ styles[ 'page-content' ] }>
        <Row style={ { marginTop: 20 } }>
          <Col span={ 6 }>
            {/* SubMenu菜单 */ }
            {/* <div></div> */ }
            <SubMenu></SubMenu>
          </Col>
          <Col span={ 18 }>
            {/* Banner */ }
            {/* <div></div> */ }
            <Carousel></Carousel>
          </Col>
        </Row>
        {/* ******************爆款推荐 */ }
        <ProductCollection
          title={ <Typography.Title level={ 3 } type={ 'warning' }>爆款推荐</Typography.Title> }
          sideImage={ sideImage }
          products={ productList1 }
        />
        {/* *****************新品上市 */ }
        <ProductCollection
          title={
            <Typography.Title level={ 3 } type="danger">
              新品上市
            </Typography.Title>
          }
          sideImage={ sideImage2 }
          products={ productList2 }
        />
        {/* *****************国内游推荐 */ }
        <ProductCollection
          title={
            <Typography.Title level={ 3 } type="success">
              国内游推荐
            </Typography.Title>
          }
          sideImage={ sideImage3 }
          products={ productList3 }
        />
        {/* *****************合作企业 */ }
        <Row>
          <Col span={ 24 }>
            <Divider orientation="left">
              <Typography.Title level={ 3 }>
                合作企业
              </Typography.Title>
            </Divider>
            <Row>
              <Col span={ 5 } offset={ 1 }>
                <img className={ styles[ 'company' ] } src={ sideImage4 } alt="" />
              </Col>
              <Col span={ 5 } offset={ 1 }>
                <img className={ styles[ 'company' ] } src={ sideImage5 } alt="" />
              </Col>
              <Col span={ 5 } offset={ 1 }>
                <img className={ styles[ 'company' ] } src={ sideImage6 } alt="" />
              </Col>
              <Col span={ 5 } offset={ 1 }>
                <img className={ styles[ 'company' ] } src={ sideImage7 } alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
