import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Upload',
    to: '/upload',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'About',
    to: '/about',
    icon: <CIcon name="cil-user-female" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Our Team',
    to: '/team',
    icon: 'cil-star',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contact us',
    to: '/contact',
    icon: 'cil-cursor',
  }
]

export default _nav
