import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";
import { Chip } from '@mui/joy';

import { useAtom } from 'jotai';
import { subscribedPackage } from "../state";

export default function PricingCard(props) {
  const navigate = useNavigate()

  const [currentPackage, setCurrentPackage] = useAtom(subscribedPackage)
  const validatePayments = () => {
    navigate("/validate-payments", { state: { index: props.index } })
  }

  return (
    <Card size="lg" variant="outlined">
      {
        props.data.planName == currentPackage.planName ?
          <Chip size="sm" variant="outlined" color="primary">
            YOUR CURRENT PLAN
          </Chip>
          :
          <div></div>
      }

      <Typography level="h3">{props.data.planName}</Typography>
      <Divider inset="none" />
      <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
        <ListItem>
          <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>{props.data.dailySurvey}</Typography>}>
            Surveys per day :
          </Chip>

        </ListItem>
        {
          props.data.planName != "Free Account" ?
            <div>
              <ListItem>
                <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Ksh {props.data.monthlyIncome}</Typography>}>
                  Earnings per month :
                </Chip>

              </ListItem>
              <ListItem>
                <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Ksh {props.data.dailyIncome}</Typography>}>
                  Daily income :
                </Chip>
              </ListItem>
            </div>
            : <div></div>
        }

        <ListItem>
          <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Ksh {props.data.minimumWithdrawal}</Typography>}>
            Minimum withdrawals :
          </Chip>
        </ListItem>
        <ListItem>
          <Chip variant="soft" startDecorator={<Check />} endDecorator={<Typography fontWeight={"bold"}>Ksh {props.data.earningPerSurvey}</Typography>}>
            Earnings per survey :
          </Chip>
        </ListItem>
      </List>
      <Divider inset="none" />
      {
        props.data.planName != "Free Account" ?
          <CardActions>
            <Typography level="title-lg" sx={{ mr: 'auto' }}>
              {props.data.price} Ksh{' '}
            </Typography>
            <Button
              onClick={validatePayments}
              style={{ backgroundColor: 'var(--neon-orange)', borderRadius: "5em", boxShadow: '0 0 8px var(--neon-orange)' }}
              endDecorator={<KeyboardArrowRight />}
              sx={{
                '&:hover': {
                  backgroundColor: 'var(--neon-orange-light)',
                  boxShadow: '0 0 12px var(--neon-orange-light)',
                }
              }}
            >
              Start now
            </Button>
          </CardActions> : <div></div>
      }
    </Card>

  );
}
