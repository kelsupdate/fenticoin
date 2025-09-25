import React, { useState, useEffect } from 'react';
import PricingCard from '../../components/PricingCard'
import { Box, Card, Container, Divider, Typography } from '@mui/joy';
import Tabs from '../../components/ResponsiveAppBar'

export default function Packages() {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/kelsupdate/72570ab4c7448697a433f4ad346fc0b0/raw/84b7525346c8ab1edf62ad67afe2e590e4aa9c70/gistfile1.txt')
            .then(response => response.json())
            .then(data => setPackages(data.surveyPlans));
    }, []);
    return (
        <div>
            <Tabs />

            <Card variant="soft" >
                <Typography level="h3" fontWeight={"bold"}>Select Package</Typography>
                <Divider sx={{ mb: 1 }} />
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))',
                        gap: 1,
                    }} >
                    {
                        packages.map((packageItem, index) => (
                            <div key={index}>
                                <PricingCard data={packageItem} index={index} />
                            </div>
                        ))
                    }
                </Box>
            </Card>
        </div>
    )
}
