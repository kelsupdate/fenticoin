import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/material';


import { Checkbox, Container, Grid, List, ListItem, Radio, RadioGroup, Textarea } from '@mui/joy';
import { Quiz } from '@mui/icons-material';



export default function RunningSurveyCard(props) {
    const navigate = useNavigate()

  

    
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
                <Typography align="left" fontWeight={"bold"} startDecorator={ <Quiz/>}>
                   {props?.survey?.surveyQuestion}
                </Typography>
                <Divider />
                <Container sx={{ m: 0.2 }} orientation='horizontal'>
                    <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                        {
                            props.survey.surveyType == 1 ?
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                >
                                    {
                                        props.survey.surveyAnswers.map((item, index) => (
                                            <ListItem key={index}>
                                                <Radio value={item} label={item} color="primary" />
                                            </ListItem>
                                        ))

                                    }
                                </RadioGroup>
                                :
                                <div></div>
                        }
                        {
                            props.survey.surveyType == 3 ?
                                <div>
                                    {
                                        props.survey.surveyAnswers.map((item, index) => (
                                            <ListItem key={index}>
                                                <Checkbox label={item} color="primary" />
                                            </ListItem>
                                        ))

                                    }
                                </div>
                                :
                                <div></div>
                        }
                        {
                            props.survey.surveyType == 2 ?
                                <Textarea
                                    name="answer"
                                    placeholder="Type answer"
                                />
                                :
                                <div></div>
                        }
                    </List>
                </Container>

                <Divider />
                <Grid xs={12} md={12}>
                    <Button
                        color={
                            props.submitSurvey ? "success" : "success"
                        }
                        disabled={
                            props.time > 0
                        }
                        onClick={props.nextSurvey} fullWidth>
                        {
                            props.submitSurvey ? <span>Submit</span> : <span>Next</span>
                        }

                    </Button>
                </Grid>
            </Card>
        </div>
    )
}
