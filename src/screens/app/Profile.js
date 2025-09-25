import React from 'react'
import { useAtom } from 'jotai';
import { useNavigate } from "react-router-dom";
import ProfileCard from '../../components/ProfileCard'
import { Card, Typography } from '@mui/joy'
import BarChart from '../../components/BarChartComponent'
import TransactionsHistoryCard from '../../components/TransactionsHistoryCard'
import AlertCard from '../../components/AlertCard'

import Tabs from '../../components/ResponsiveAppBar'

import { userLoggedIn } from "../../state";

export default function Profile() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useAtom(userLoggedIn)
  if (!loggedIn) {
    navigate("/register")
  }
  return (
    <div>
      <Tabs/>
      <Card sx={{ mt: 2 }} >
        <ProfileCard />
        <AlertCard message={"Currency is based on your country for convenience"} />
        <Typography sx={{ mt: 3 }} align="left" level="title-lg">Transactions History</Typography>
        <TransactionsHistoryCard />
        <Typography sx={{ mt: 3 }} align="left" level="title-lg">Earnings Overview</Typography>
        <BarChart />
      </Card>
    </div>
  )
}
