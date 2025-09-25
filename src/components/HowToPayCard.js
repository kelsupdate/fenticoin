import * as React from 'react';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import { Chip, IconButton } from '@mui/joy';
import { CopyAll } from '@mui/icons-material';

export default function HowToPayCard(props) {
    const copyToClipBoard = () => {
        window.alert("You have copied" + props.data.tillNumber + " Till Number")
        navigator.clipboard.writeText(props.data.tillNumber);
    }
    return (
        <Card size="lg" variant="outlined">
            <Typography level="h3">How To Pay</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                <ListItem>
                    <ListItemDecorator>
                        <Check />
                    </ListItemDecorator>
                    Go to M-PESA
                </ListItem>
                {
                    props.data.planName != "Free Account" ?
                        <div>
                            <ListItem>
                                <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Lipa na M-PESA</Typography>}>
                                    Select :
                                </Chip>
                            </ListItem>
                            <ListItem>
                                <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Buy Goods and Services</Typography>}>
                                    Select :
                                </Chip>
                            </ListItem>
                        </div>
                        : <div></div>
                }
                <ListItem>
                    <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Enter Till No : {props.data.tillNumber} </Typography>}>
                        Select :
                    </Chip>
                    <IconButton variant="solid" color='primary' onClick={copyToClipBoard}>
                        <CopyAll />
                    </IconButton>
                </ListItem>
                <ListItem>
                    <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Ksh {props.amount}</Typography>}>
                        Enter amount :
                    </Chip>
                </ListItem>
            </List>
        </Card>
    );
}
