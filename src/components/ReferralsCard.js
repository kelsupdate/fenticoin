import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CopyAll, DataObject, Loop, Loyalty, Paid } from '@mui/icons-material';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

import { useAtom } from 'jotai';
import { userObject } from '../state';
import { Divider, Input } from '@mui/joy';


export default function ReferralCard() {
    const [radius, setRadius] = React.useState(16);
    const [childHeight, setChildHeight] = React.useState(28);
    const [userObjectState, setUserObjectState] = useAtom(userObject)
    const copyToClipBoard = () => {
        // window.alert("Referall Code " + userObjectState.referralCode + " Copied successfuly")
        navigator.clipboard.writeText(userObjectState.referralCode);
    }

    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Card size="sm" style={{
                paddingTop: "12px",
            }}>
                <Typography>Earn Ksh 40 on each survey your referral completes. Below is your referral code.</Typography>
                <Divider />
                <Input
                    fullWidth
                    size="md"
                    placeholder={userObjectState.referralCode}
                    endDecorator={
                        <Button
                            onClick={copyToClipBoard}
                            variant="solid"
                            style={{ backgroundColor: 'var(--neon-green)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-green)' }}
                            size="md"
                            endDecorator={<CopyAll />}
                            aria-label="Explore Bahamas Islands"
                            sx={{
                                ml: 'auto',
                                alignSelf: 'center',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: 'var(--neon-green-light)',
                                    boxShadow: '0 0 12px var(--neon-green-light)',
                                }
                            }}
                        >
                            Copy Code
                        </Button>
                    }
                    sx={{
                        '--Input-radius': `${radius}px`,
                        '--Input-decoratorChildHeight': `${childHeight}px`,
                    }}
                />
                <CardContent orientation="horizontal">
                    <div>
                        <Typography align="left">Referral points:</Typography>
                        <Typography align="left" level="title-lg" startDecorator={<Loop />}>
                            {userObjectState.referralPoints}
                        </Typography>
                    </div>


                    <React.Fragment>
                        <Button
                            onClick={() => setOpen(true)}
                            style={{ backgroundColor: 'var(--neon-green)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-green)' }}
                            endDecorator={<Paid />}
                            aria-label="Explore Bahamas Islands"
                            sx={{
                                ml: 'auto',
                                alignSelf: 'center',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: 'var(--neon-green-light)',
                                    boxShadow: '0 0 12px var(--neon-green-light)',
                                }
                            }}
                        >
                            Redeem
                        </Button>

                        <Modal
                            aria-labelledby="modal-title"
                            aria-describedby="modal-desc"
                            open={open}
                            onClose={() => setOpen(false)}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Sheet
                                variant="outlined"
                                sx={{
                                    maxWidth: 500,
                                    borderRadius: 'md',
                                    p: 3,
                                    boxShadow: 'lg',
                                }}
                            >
                                <ModalClose variant="plain" sx={{ m: 1 }} />
                                <Typography
                                    component="h2"
                                    id="modal-title"
                                    level="h4"
                                    textColor="inherit"
                                    fontWeight="lg"
                                    mb={1}
                                >
                                    Referral Redeem
                                </Typography>
                                <Typography id="modal-desc" textColor="text.tertiary">
                                    Your have 0 referral points. Refer more to earn more referral points.
                                </Typography>
                            </Sheet>
                        </Modal>
                    </React.Fragment>



                </CardContent>
                <CardContent orientation="horizontal">
                    <div>
                        <Typography level="body-s" align="left">Loyalties:</Typography>
                        <Typography fontSize="lg" align="left" fontWeight="lg" startDecorator={<Loyalty />}>
                            0
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
