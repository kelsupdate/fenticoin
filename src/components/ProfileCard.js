import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { AccountBalance, AccountCircleOutlined, Add, EmailOutlined, ListAltOutlined, Loop, Loyalty, Paid, Quiz, Star, Stars } from '@mui/icons-material';
import { Avatar, Box, Chip, Divider } from '@mui/joy';

import { useAtom } from 'jotai';
import mpesaLogo from '../assets/mpesa.png'
import money from '../money.png'
import questionMark from '../questionMark.png'
import { userObject, userLoggedIn, paymentDetails, subscribedPackage } from "../state";

export default function ProfileCard() {
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useAtom(userLoggedIn)
    const [user, setUser] = useAtom(userObject)
    const [currentPackage, setCurrentPackage] = useAtom(subscribedPackage)
    const [payments, setPayments] = useAtom(paymentDetails)

    const [surveysLength, setSurveysLength] = useState([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/kelsupdate/14806175da645b925bea55a326fa0c6d/raw/0b53f2bfeddd823886c3ee9d06adefb21666487a/gistfile1.txt')
            .then(response => response.json())
            .then(data => {
                setSurveysLength(data.surveys.length)
            });
    }, []);


    const takeSurveys = () => {
        navigate("/home")
    }
    const upgrade = () => {
        navigate("/packages")
    }
    const Addpayments = () => {
        navigate("/add-payments")
    }
    const viewRefarrals = () => {
        navigate("/referrals")
    }
    const withdraw = () => {
        navigate("/withdraw")
    }
    return (
        <div>
            <Card level="body-sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}
                style={{
                    backgroundColor: "#FFFFFF",
                    paddingTop: "12px",
                }}>
                <div>
                    <Typography align="left" level="title-lg" startDecorator={<AccountCircleOutlined />}>{user.firstName} {user.lastName}</Typography>
                    <Typography align="left" startDecorator={<EmailOutlined />}>{user.email}</Typography>
                    <Divider />

                </div>
                <CardContent orientation="horizontal">
                    <div>
                        <Typography align="left">Account type:</Typography>
                        <Typography align="left" level="title-lg" startDecorator={<Star />}>
                            {currentPackage.planName}
                        </Typography>

                        <Typography align="left" >
                            <Chip color='success'>{currentPackage.dailySurvey} surveys per day</Chip>
                        </Typography>
                    </div>
                    <Button
                        onClick={upgrade}
                        style={{ backgroundColor: 'var(--neon-orange)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-orange)' }}
                        endDecorator={<Stars />}
                        sx={{
                            ml: 'auto',
                            alignSelf: 'center',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: 'var(--neon-orange-light)',
                                boxShadow: '0 0 12px var(--neon-orange-light)',
                            }
                        }}
                    >
                        Upgrade
                    </Button>
                </CardContent>
                <Divider />
                <CardContent orientation="horizontal">
                    <div>
                        <Typography >Account Balance :</Typography>
                        <Typography align="left">
                            <Chip

                                color="success"
                                startDecorator={
                                    <Avatar size="md" src={money} style={{
                                        width: 20,
                                        height: 20,
                                    }} />}
                            >
                                <Typography fontWeight={"bold"}> Ksh {user.accountBalance}</Typography>

                            </Chip>
                        </Typography>

                    </div>
                    <Button
                        onClick={withdraw}
                        style={{ borderRadius: "5em" }}
                        endDecorator={<Paid />}
                        aria-label="Explore Bahamas Islands"
                        sx={{ ml: 'auto', alignSelf: 'center' }}
                    >
                        Withdraw
                    </Button>
                </CardContent>
                <Divider />
                <CardContent orientation="horizontal">
                    <div>
                        <Typography align="left">Available Surveys:</Typography>
                        <Typography align="left">
                            <Chip
                                color="success"
                                startDecorator={
                                    <Avatar size="md" src={questionMark} style={{
                                        width: 20,
                                        height: 20,
                                    }} />} >
                                <Typography fontWeight={"bold"}>  {surveysLength}</Typography>
                            </Chip>
                        </Typography>
                    </div>
                    <Button
                        onClick={takeSurveys}
                        style={{ backgroundColor: 'var(--neon-orange)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-orange)' }}
                        endDecorator={<ListAltOutlined />}
                        sx={{
                            ml: 'auto',
                            alignSelf: 'center',
                            '&:hover': {
                                backgroundColor: 'var(--neon-orange-light)',
                                boxShadow: '0 0 12px var(--neon-orange-light)',
                            }
                        }}
                    >
                        Surveys
                    </Button>
                </CardContent>
                <Divider />
                <CardContent orientation="horizontal">
                    <div>
                        <Typography>Loyalty points:</Typography>
                        <Typography align="left" level="title-lg" startDecorator={<Loyalty />}>
                            {user.loyaltyPoints}
                        </Typography>
                    </div>
                    <Button
                        onClick={viewRefarrals}
                        style={{ backgroundColor: 'var(--neon-orange)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-orange)' }}
                        endDecorator={<Loop />}
                        aria-label="Explore Bahamas Islands"
                        sx={{
                            ml: 'auto',
                            alignSelf: 'center',
                            '&:hover': {
                                backgroundColor: 'var(--neon-orange-light)',
                                boxShadow: '0 0 12px var(--neon-orange-light)',
                            }
                        }}
                    >
                        Referrals
                    </Button>
                </CardContent>
                <Divider />
                <CardContent orientation="horizontal">
                    <div>
                        <Typography align="left">Payments details:</Typography>
                        {
                            payments.added ?
                                <div>
                                    <Typography align="left">Method :
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 45,
                                                width: 70,
                                                maxHeight: { xs: 233, md: 167 },
                                                maxWidth: { xs: 350, md: 250 },
                                            }}
                                            alt="The house from the offer."
                                            src={mpesaLogo}
                                        />
                                    </Typography>

                                    <Typography align="left">Name :
                                        <Typography align="right" fontWeight="bold">
                                            {payments.mpesaName}
                                        </Typography></Typography>

                                    <Typography align="left">No :
                                        <Typography align="right" fontWeight="bold">
                                            {payments.mpesaNumber}
                                        </Typography></Typography>
                                </div>

                                :
                                <Typography align="left" level="title-lg">
                                    Not Provided
                                </Typography>
                        }

                    </div>
                    <Button
                        onClick={Addpayments}
                        style={{ backgroundColor: 'var(--neon-orange)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-orange)' }}

                        endDecorator={<Add />}
                        sx={{
                            ml: 'auto',
                            alignSelf: 'center',
                            '&:hover': {
                                backgroundColor: 'var(--neon-orange-light)',
                                boxShadow: '0 0 12px var(--neon-orange-light)',
                            }
                        }}
                    >
                        {
                            payments.added ? <span>Update</span> : <span>Add</span>
                        }
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
