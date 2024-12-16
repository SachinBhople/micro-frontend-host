import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../redux/store'

interface IProtected {
    compo: React.ReactNode
}

const Protected: React.FC<IProtected> = ({ compo }) => {
    const { user } = useSelector<RootState, any>(state => state.auth)

    return user ? compo : <Navigate to="/auth" />
}

export default Protected