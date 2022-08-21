// SubMenu菜单
import React from "react";
import styles from './SubMenu.module.css'
import { sideMenuList } from './mockData'
import { Menu } from 'antd'
import { GifOutlined } from "@ant-design/icons";
export const SubMenu: React.FC = () => {
  return (
    <Menu className={ styles[ 'side-SubMenu' ] } mode="vertical" items={
      sideMenuList.map( item => {
        return {
          label: item.title,
          icon: <GifOutlined />,
          key: item.title,
          children: item.subMenu.map( subItem => {
            return {
              label: subItem.title,
              icon: <GifOutlined />,
              key: subItem.title,
            }
          } )
        }
      } )
    }>

    </Menu>
  )
}