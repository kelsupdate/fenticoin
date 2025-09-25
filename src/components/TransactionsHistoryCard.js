import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Chip, Divider } from '@mui/joy';

import { useAtom } from 'jotai';
import { completedSurveys } from "../state";
import { Payments } from '@mui/icons-material';


export default function TransactionsHistoryCard() {
    const [doneSurveys, setDoneSurveys] = useAtom(completedSurveys)
    return (
        <div>
            <Card size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                {
                    doneSurveys.length > 0 ?
                        <div>
                            {
                                doneSurveys.map((item) => (
                                    <div>
                                        <CardContent orientation="horizontal" sx={{ m: 1.5 }}>
                                            <div>
                                                <Typography align="left">Survey Completed</Typography>
                                                <Typography align="left" level="title-lg">
                                                    {item.surveyId}
                                                </Typography>
                                            </div>
                                            <Typography fontWeight='bold'
                                                align="right"
                                                sx={{ ml: 'auto' }}
                                            >
                                                {item.date}
                                            </Typography>
                                            <div>
                                                <Typography align="left">Earned</Typography>
                                                <Chip startDecorator={<Payments/>} color='primary' variant="outlined" align="left" level="title-lg">
                                                    Ksh {item.earnedAmount}
                                                </Chip>
                                            </div>
                                        </CardContent>
                                        <Divider />
                                    </div>

                                ))
                            }
                        </div>
                        :
                        <Typography>
                            No transactions yet
                        </Typography>
                }
            </Card>
        </div>
    )
}
