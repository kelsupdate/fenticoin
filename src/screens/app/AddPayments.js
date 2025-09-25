import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MuiTelInput } from 'mui-tel-input'

import { useAtom } from 'jotai';
import { paymentDetails } from "../../state";

import mpesaLogo from '../../assets/mpesa.png'
import { Card, Divider, Grid, LinearProgress, Box, Button, Typography, FormControl, FormLabel, Input, FormHelperText } from "@mui/joy";
import AlertCard from "../../components/AlertCard";
import Tabs from '../../components/ResponsiveAppBar'



export default function AddPayments() {
  const navigate = useNavigate()
  const [phone, setPhone] = React.useState('')
  const [phoneError, setPhoneError] = React.useState(false)
  const [nameError, setNameError] = React.useState(false)
  const [showProgressDialog, setProgressDialog] = useState(false);

  const [payments, setPayments] = useAtom(paymentDetails)

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('mpesaNumber').length < 14) {
      setPhoneError(true)
      return
    } else {
      setPhoneError(false)
    }

    if (data.get('mpesaName').length < 2) {
      setNameError(true)
      return
    } else {
      setNameError(false)
    }

    setProgressDialog(true)
    setTimeout(() => {
      setPayments((prev) => ({
        ...prev,
        method: "M-PESA",
        mpesaName: data.get('mpesaName'),
        mpesaNumber: data.get('mpesaNumber'),
        added: true
      }))
      setProgressDialog(false)
      navigate("/account")
    }, 5000);


    console.log({
      email: data.get('mpesaNumber'),
      password: data.get('mpesaName'),
    });
  };

  return (
    <div><Tabs />
      <Card variant="soft" >
        <Typography level="h3">Enter Payment Details</Typography>
        <Divider sx={{ mb: 1 }} />
        <Grid xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid>
              <Box
                component="img"
                sx={{
                  height: 70,
                  width: 100,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={mpesaLogo}
              />

              <Card size="lg" variant="outlined">
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <FormControl required>
                    <FormLabel>M-PESA Number</FormLabel>
                    <MuiTelInput
                      fullWidth
                      // label="M-PESA Number"
                      name="mpesaNumber"
                      defaultCountry="KE"
                      value={phone}
                      error={phoneError}
                      helperText={phoneError ? "Please enter valid phone number" : ""}
                      onChange={handlePhoneChange}
                    />
                  </FormControl>
                  <FormControl required error={nameError} sx={{ mt: 2 }}>
                    <FormLabel>M-PESA Name</FormLabel>
                    <Input
                      // startDecorator={<Paid />}
                      margin="normal"
                      fullWidth
                      name="mpesaName"
                      label="M-PESA Name"
                      type="mpesaName"
                      id="mpesaName" />
                    {
                      nameError ? <FormHelperText>"Please enter valid name"</FormHelperText> : ""
                    }

                  </FormControl>


                  {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="mpesaName"
                  label="M-PESA Name"
                  type="mpesaName"
                  id="mpesaName"
                  error={nameError}
                  helperText={nameError ? "Please enter valid name" : ""}
                /> */}
                  {
                    showProgressDialog ? <LinearProgress /> : <div></div>
                  }
                  <Button sx={{ mt: 4 }} style={{ backgroundColor: '#00CC71', borderRadius: "5em" }} type="submit" fullWidth>
                    Submit
                </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <AlertCard message={"Payments system is selcted based on your country for convinience"} />
      </Card>
    </div>
  );
}
