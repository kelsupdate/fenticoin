import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Table,
  Chip,
  Button,
  Select,
  Option,
  Input,
  Box
} from '@mui/joy';
import { useAtom } from 'jotai';
import { completedSurveys, amountEarnedList, weekDaysList, transactionHistory } from '../state';

export default function TransactionHistory() {
  const [transactions, setTransactions] = useAtom(transactionHistory);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  // Mock transaction data - replace with actual M-Pesa transactions
  const mockTransactions = [
    {
      id: '1',
      transactionId: 'ABC123',
      type: 'payment',
      amount: 1000,
      recipient: 'PineCoin Surveys',
      date: '2024-01-15',
      time: '14:30',
      status: 'completed',
      package: 'Basic Plan'
    },
    {
      id: '2',
      transactionId: 'DEF456',
      type: 'payment',
      amount: 2500,
      recipient: 'PineCoin Surveys',
      date: '2024-01-16',
      time: '09:15',
      status: 'completed',
      package: 'Premium Plan'
    }
  ];

  useEffect(() => {
    // Load transactions from storage or API
    if (transactions.length === 0) {
      setTransactions(mockTransactions);
    }
  }, [transactions, setTransactions]);

  const filteredTransactions = transactions.filter(transaction => {
    let matches = true;

    // Filter by type
    if (filterType !== 'all' && transaction.type !== filterType) {
      matches = false;
    }

    // Filter by search term
    if (searchTerm && !transaction.recipient.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase())) {
      matches = false;
    }

    // Filter by date range
    if (dateRange.start && transaction.date < dateRange.start) {
      matches = false;
    }
    if (dateRange.end && transaction.date > dateRange.end) {
      matches = false;
    }

    return matches;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'pending': return 'warning';
      case 'failed': return 'danger';
      default: return 'neutral';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'payment': return 'Payment';
      case 'refund': return 'Refund';
      case 'withdrawal': return 'Withdrawal';
      default: return 'Transaction';
    }
  };

  return (
    <Card variant="outlined" sx={{ p: 2 }}>
      <Typography level="h4" sx={{ mb: 2 }}>
        Transaction History
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
        <Select
          value={filterType}
          onChange={(e, newValue) => setFilterType(newValue)}
          sx={{ minWidth: 120 }}
        >
          <Option value="all">All Types</Option>
          <Option value="payment">Payments</Option>
          <Option value="refund">Refunds</Option>
          <Option value="withdrawal">Withdrawals</Option>
        </Select>

        <Input
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ minWidth: 200 }}
        />

        <Input
          type="date"
          placeholder="Start date"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        />

        <Input
          type="date"
          placeholder="End date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        />
      </Box>

      <Table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Recipient</th>
            <th>Date</th>
            <th>Status</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.transactionId}</td>
              <td>
                <Chip size="sm" variant="soft">
                  {getTypeLabel(transaction.type)}
                </Chip>
              </td>
              <td>Ksh {transaction.amount.toLocaleString()}</td>
              <td>{transaction.recipient}</td>
              <td>{transaction.date} {transaction.time}</td>
              <td>
                <Chip
                  size="sm"
                  variant="soft"
                  color={getStatusColor(transaction.status)}
                >
                  {transaction.status}
                </Chip>
              </td>
              <td>{transaction.package}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {filteredTransactions.length === 0 && (
        <Typography level="body-sm" sx={{ textAlign: 'center', py: 4 }}>
          No transactions found
        </Typography>
      )}
    </Card>
  );
}
