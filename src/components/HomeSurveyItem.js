import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Payments, Quiz, StarBorderOutlined, Stars } from '@mui/icons-material';
import { Avatar, Chip, DialogContent, DialogTitle, FormControl, FormLabel, Modal, ModalDialog, Sheet, Tooltip } from '@mui/joy';

import { useAtom } from 'jotai';
import { surveyValidation, subscribedPackage } from "../state";
import { Stack } from '@mui/material';
import crown from '../crown.png'
import questionMark from '../questionMark.png'
import money from '../money.png'


export default function HomeSurveyItem(props) {
    const [getValidation, setValidation] = useAtom(surveyValidation)
    const [currentPackage,] = useAtom(subscribedPackage)
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")
    const navigate = useNavigate()


    const calculateNavigation = () => {
        var dateNow = new Date().toLocaleDateString()
        if (dateNow == getValidation.date) {
            console.log("count", getValidation.count, currentPackage.dailySurvey)
            if (getValidation.count < currentPackage.dailySurvey) {
                navigate("/survey", { state: { Id: props.Id } })
            } else {
                setMessage("You have reached your today limit")
                setOpen(true)
            }
        } else {
            setValidation((item) => ({
                ...item,
                date: dateNow
            }))
            navigate("/survey", { state: { Id: props.Id } })
        }
    }


    const startSurvey = () => {
        if (props.Id == "1") {
            navigate("/survey", { state: { Id: props.Id } })
        } else {
            if (props.survey.surveyPaid) {
                if (currentPackage.planName == "Free Account") {
                    setMessage("This is a premium survey")
                    setOpen(true)
                    console.log("This is a paid package. Subscribe")
                } else {
                    calculateNavigation()
                }
            } else {
                calculateNavigation()
            }
        }
    }
    return (
        <div>
            <Card size="sm" sx={{ mt: 1.5 }}>
                <CardContent orientation="horizontal" sx={{ m: 1 }}>
                    <div align="left">


                        <Chip
                            variant="soft"
                            color="neutral"
                            startDecorator={
                                props.survey.surveyPaid ?
                                    <Avatar size="md" src={crown} style={{
                                        width: 30,
                                        height: 30,
                                    }} /> : ""}
                        >
                            <Typography fontWeight={"bold"}> {props.survey.surveyCategory}</Typography>

                        </Chip>


                        <Typography align="left">
                            <Chip

                                color="neutral"
                                startDecorator={
                                    <Avatar size="md" src={questionMark} style={{
                                        width: 20,
                                        height: 20,
                                    }} />}
                            >
                                <Typography fontWeight={"bold"}> Questions: {props.survey.surveyQuestions.length}</Typography>

                            </Chip>
                        </Typography>
                        <Typography align="left">
                            <Chip

                                color="primary"
                                startDecorator={
                                    <Avatar size="md" src={money} style={{
                                        width: 24,
                                        height: 24,
                                    }} />}
                            >
                                <Typography>Payout : </Typography>

                                <Typography level="title-lg">{"ksh " + props.survey.surveyAmount}</Typography>

                            </Chip>
                        </Typography>

                    </div>
                        <Button
                            onClick={startSurvey}
                            variant="solid"
                            style={{ backgroundColor: 'var(--neon-orange)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-orange)' }}
                            sx={{
                                ml: 'auto',
                                alignSelf: 'center',
                                '&:hover': {
                                    backgroundColor: 'var(--neon-orange-light)',
                                    boxShadow: '0 0 12px var(--neon-orange-light)',
                                }
                            }}>
                            Start Survey
                        </Button>

                </CardContent>
            </Card>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>{message}</DialogTitle>
                    <DialogContent>Upgrade your account to access this and more surveys and earn more</DialogContent>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            setOpen(false);
                            navigate("/packages")
                        }}
                    >
                        <Stack spacing={2}>
                            <Button style={{ backgroundColor: 'var(--neon-orange)', boxShadow: '0 0 8px var(--neon-orange)' }} type="submit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'var(--neon-orange-light)',
                                        boxShadow: '0 0 12px var(--neon-orange-light)',
                                    }
                                }}
                            >UPGRADE ACCOUNT</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </div>
    )
}
