'use client'

import { useEffect } from 'react'
import areaService from '@/app/services/areaService'
import storage from '@/app/services/storage'
import AppLayout from '@/components/layout/AppLayout'

const ManagerDashboard = () => {
  useEffect(() => {
    async function fetchAreas() {
      const { data } = await areaService.getAreas()
      if (!!data) {
        storage.setAreas(data)
      }
    }
    fetchAreas()
  }, [])

  return (
    <AppLayout>
      <h1>This is dashboard index of manager dashboard page</h1>
    </AppLayout>
  )
}

export default ManagerDashboard