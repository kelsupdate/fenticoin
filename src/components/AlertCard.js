import React from 'react'
import Alert from '@mui/joy/Alert';
import { LockClock } from '@mui/icons-material';

export default function AlertCard(props) {
    return (
        <div>
            <Alert
                sx={{ mt: 1.5 }}
                variant="soft"
                color="warning"
                startDecorator={<LockClock />}
            >
                {props.message}
            </Alert>
        </div>
    )
}
