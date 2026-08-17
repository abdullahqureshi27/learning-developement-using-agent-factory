"use client"
import React from 'react'
import { useAuth } from '@/context/AuthContext'

const Dashboard = () => {
    const { user } = useAuth();
  return (
    <div>
        this is hte dashboard
      this is hte dahboard and the user email is {user ? user.email : "not logged in"}
    </div>
  )
}

export default Dashboard
