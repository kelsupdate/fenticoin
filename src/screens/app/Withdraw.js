import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userObject, paymentDetails, subscribedPackage } from "../../state";

import mpesaLogo from '../../assets/mpesa.png';
import {
  LinearProgress, Box, Button, Typography,
  Card, Grid, Divider, Input, FormControl, FormLabel, FormHelperText
} from "@mui/joy";
import AlertCard from "../../components/AlertCard";
import Tabs from '../../components/ResponsiveAppBar';

export default function Withdraw() {
  const navigate = useNavigate();
  const [amountError, setAmountError] = useState(false);
  const [amountErrorMsg, setAmountErrorMsg] = useState("");
  const [withdrawError, setWithdrawError] = useState(false);
  const [withdrawMsg, setWithdrawMsg] = useState("");
  const [showProgressDialog, setProgressDialog] = useState(false);

  const [user] = useAtom(userObject);
  const [packageSubscribed] = useAtom(subscribedPackage);
  const [payments] = useAtom(paymentDetails);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const amount = Number(data.get('amount'));

    if (payments.added) {
        if (isNaN(amount) || amount < packageSubscribed.minimumWithdrawal || amount > user.accountBalance) {
          setAmountError(true);
          if (isNaN(amount)) {
            setAmountErrorMsg("Please enter a valid amount.");
          }
          if (amount < packageSubscribed.minimumWithdrawal) {
            setAmountErrorMsg(`Minimum withdrawal amount is Ksh ${packageSubscribed.minimumWithdrawal}. Upgrade your account to earn more`);
          } 
          if ( amount > user.accountBalance) {
            setAmountErrorMsg(`You only have ${user.accountBalance} in your account`);
          } 
          return;
        } else {
          setAmountError(false);
          setAmountErrorMsg("");
        }
    } else {
      setWithdrawError(true);
      setWithdrawMsg("Payments details required. Add from your account");
      return;
    }

    setProgressDialog(true);
    setTimeout(() => {
      // Simulate the withdrawal process
      setProgressDialog(false);
      navigate("/account");
    }, 5000);
  };

  const isWithdrawalDay = () => {
    const today = new Date().getDate();
    return [15, 30].includes(today);
  };

  return (
    <div>
      <Tabs />
      <Card variant="soft">
        <Typography level="h3">Withdraw</Typography>
        <Divider sx={{ mt: 0.5, mb: 0.5 }} />
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Box
              component="img"
              sx={{ height: 70, width: 100 }}
              alt="M-PESA logo"
              src={mpesaLogo}
            />
            <Card size="lg">
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                {withdrawError && (
                  <Typography level="h5" color="danger">
                    {withdrawMsg}
                  </Typography>
                )}
                <FormControl>
                  <FormLabel>
                    Account Balance:
                    <Typography level="title-lg">Ksh {user.accountBalance}</Typography>
                  </FormLabel>
                </FormControl>
                <FormControl required error={amountError}>
                  <FormLabel>Enter Amount</FormLabel>
                  <Input
                    margin="normal"
                    required
                    fullWidth
                    name="amount"
                    label="Enter amount"
                    type="number"
                    id="amount"
                  />
                  {amountError && <FormHelperText>{amountErrorMsg}</FormHelperText>}
                </FormControl>
                {showProgressDialog && <LinearProgress />}
                <Button sx={{ mt: 4 }} style={{ backgroundColor: '#00CC71', borderRadius: "5em" }} type="submit" fullWidth>
                  Withdraw
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <AlertCard message="Payments system is selected based on your country for convenience" />
      </Card>
    </div>
  );
}
