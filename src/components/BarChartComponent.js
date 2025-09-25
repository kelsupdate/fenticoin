import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import Card from '@mui/joy/Card';

import { useAtom } from 'jotai';

import { amountEarnedList, weekDaysList } from '../state';
import { Typography } from '@mui/joy';

export default function BarChartComponent() {
    const [amount, earnedAmount] = useAtom(amountEarnedList)
    const [days, daysList] = useAtom(weekDaysList)
    return (
        <Card>
            <div>
                {
                    amount.length > 0 ?
                        <div>
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: days }]}
                                series={[{ data: amount }]}
                                height={
                                    amount.length > 0 ? 280 : 20
                                }
                            />
                        </div> :
                        <Typography>
                            No earnings yet (Take Surveys to start earning)
                        </Typography>
                }

            </div>
        </Card>
    )
}
