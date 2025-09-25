import * as React from 'react';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import { Chip } from '@mui/joy';

export default function SelectedPackageDetails(props) {
    console.log(props)
    return (
        <Card size="lg" variant="outlined">
            <Typography level="h3">Selected Plan</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                <ListItem>
                    <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>{props.data.planName}</Typography>}>
                        Plan Name :
                    </Chip>
                </ListItem>
                {
                    props.data.planName != "Free Account" ?
                        <div>
                            <ListItem>
                                <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>{props.data.dailySurvey} Surveys per day</Typography>}>
                                    Surveys :
                                </Chip>
                            </ListItem>
                            <ListItem>
                                <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Ksh {props.data.minimumWithdrawal}</Typography>}>
                                    Withdraw Limit :
                                </Chip>

                            </ListItem>
                        </div>
                        : <div></div>
                }

                <ListItem>
                    <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Ksh {props.data.monthlyIncome}</Typography>}>
                        Monthly Income :
                    </Chip>
                </ListItem>
                <ListItem>
                    <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Ksh {props.data.price}</Typography>}>
                        Due Today :
                    </Chip>
                </ListItem>
            </List>
        </Card>

    );
}
