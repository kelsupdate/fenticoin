import React from 'react'
import ReferralCard from '../../components/ReferralsCard'
import AlertCard from '../../components/AlertCard'
import { Card, Typography } from '@mui/joy'
import Tabs from '../../components/ResponsiveAppBar'

export default function Referrals() {
  return (
    <div>
      <Tabs/>
      <Card sx={{mt:2}}>
        <Typography level="h3">
          Referral Program
        </Typography>
        <ReferralCard />
        <AlertCard message={"Kindly note that we take time to verify referrals and this can lead to delays in referrals points being reflected in your account"} />
      </Card>
    </div>
  )
}
