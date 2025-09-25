import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/material';

import { Alert, Box, Chip, Grid } from '@mui/joy';
import { Paid } from '@mui/icons-material';

import feather from '../assets/feather.png'

export default function SurveyStartCard(props) {
    const navigate = useNavigate()

    // const [user, setUser] = useAtom(userObject)
    // const viewEarnings = () => {
    //     navigate("/profile")
    // }
    // const viewRefarrals = () => {
    //     navigate("/referrals")
    // }

    // const surveyStarted = () => {
    //     console.log('Button clicked!');
    // }

    return (
        <div>
            <Card size="sm" sx={{ mt: 3 }}>
                <Typography fontWeight={"bold"}>You are about to take Fenticoin Surveys.
                    and will earn
                    <Chip color="success"
                        fontSize="sm"> Ksh {props.amount}
                    </Chip>
                </Typography>
                <Divider />
                <Typography>
                    <Box
                        component="img"
                        sx={{
                            height: 30,
                            width: 30,

                        }}
                        alt="The house from the offer."
                        src={feather}
                    />
                    <Typography align="left" level="title-m" >Give authentic & honest feedback</Typography>
                </Typography>

                <Typography>
                    <Box
                        component="img"
                        sx={{
                            height: 30,
                            width: 30,

                        }}
                        alt="The house from the offer."
                        src={feather}
                    />
                    <Typography align="left" level="title-m" >Earn money and have fun</Typography>
                </Typography>

                <Divider />
                <Grid xs={12} md={12}>
                    <Button style={{ backgroundColor: '#00CC71' }} onClick={props.surveyStarted} fullWidth>Start Survey</Button>
                </Grid>
            </Card>
            <Alert sx={{ mt: 1 }}
                variant="soft"
                color="warning">
                <Typography align="left">Start survey and make sure to complete and submit in order to earn</Typography>
            </Alert>
        </div>
    )
}
