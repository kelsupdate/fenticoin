import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/material';

import { useAtom } from 'jotai';
import { userObject } from "../state";
import { AccountBalanceWallet, AccountCircleOutlined, Loop, Loyalty } from '@mui/icons-material';

export default function HomeCard() {
    const navigate = useNavigate()

    const [user, setUser] = useAtom(userObject)
    const viewEarnings = () => {
        navigate("/account")
    }
    const viewRefarrals = () => {
        navigate("/referrals")
    }
    console.log("User", user)
    return (
        <div>
            <Card sx={{ mt: 2 }} variant="soft" style={{
                paddingTop: "12px",
            }}>
                <div>
                    <Typography>Your Total Account Balance</Typography>
                    <Typography level="title-lg">
                        Ksh {user?.accountBalance || 0}.00</Typography>
                </div>
                <Divider />
                <CardContent orientation="horizontal">
                    <div align="left">
                        <Button
                            onClick={viewEarnings}
                            variant="solid"
                            endDecorator={<AccountCircleOutlined />}
                            style={{ backgroundColor: 'var(--neon-orange)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-orange)' }}
                            sx={{
                                ml: 'auto',
                                alignSelf: 'center',
                                '&:hover': {
                                    backgroundColor: 'var(--neon-orange-light)',
                                    boxShadow: '0 0 12px var(--neon-orange-light)',
                                }
                            }}
                        >
                            View Account
                        </Button>
                    </div>
                    <Button
                        onClick={viewRefarrals}
                        variant="solid"
                        endDecorator={<Loop />}
                        style={{ backgroundColor: 'var(--neon-orange)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-orange)' }}
                        sx={{
                            ml: 'auto',
                            alignSelf: 'center',
                            '&:hover': {
                                backgroundColor: 'var(--neon-orange-light)',
                                boxShadow: '0 0 12px var(--neon-orange-light)',
                            },
                        }}
                    >
                        Referrals
                    </Button>
                </CardContent>

            </Card>
        </div>
    )
}
