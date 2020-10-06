import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SYSTEMTYPE } from '../../global/enum'
import AdminSystem from '../admin-system'
import BigScreen from '../bigscreen-system'


const Layout = (props: any) => {
  const { systemType } = props
  let history = useHistory();
  const token = useSelector((state: any) => state.app.token)

  const isToLogin = () => {
    !token && history.replace('/login')
  }

  useEffect(() => {
    isToLogin()
  }, [])

  return systemType === SYSTEMTYPE.ADMIN
  ?
    <AdminSystem {...props} />
  :
    <BigScreen {...props} />
}

const mapStateToProps = (state: any) => {
  return {
    systemType: state.app.systemType
  }
}


export default connect(mapStateToProps)(Layout)