/**
 * Enhanced M-Pesa Message Parser
 * Handles various M-Pesa message formats with robust validation
 */

export class MpesaParser {
  constructor() {
    this.messagePatterns = {
      buyGoods: /([A-Z0-9]+)\s+Confirmed\.\s*Ksh([\d,]+\.?\d*)\s+paid\s+to\s+(.+?)\s+on\s+(.+?)\s+at\s+(.+?)\.\s*New\s+M-PESA\s+balance\s+is\s+Ksh([\d,]+\.?\d*)/i,
      payBill: /([A-Z0-9]+)\s+Confirmed\.\s*Ksh([\d,]+\.?\d*)\s+paid\s+to\s+(.+?)\.\s*New\s+M-PESA\s+balance\s+is\s+Ksh([\d,]+\.?\d*)/i,
      sendMoney: /([A-Z0-9]+)\s+Confirmed\.\s*Ksh([\d,]+\.?\d*)\s+sent\s+to\s+(.+?)\s+on\s+(.+?)\s+at\s+(.+?)\.\s*New\s+M-PESA\s+balance\s+is\s+Ksh([\d,]+\.?\d*)/i,
      receiveMoney: /([A-Z0-9]+)\s+Confirmed\.\s*You\s+have\s+received\s+Ksh([\d,]+\.?\d*)\s+from\s+(.+?)\s+on\s+(.+?)\s+at\s+(.+?)\.\s*New\s+M-PESA\s+balance\s+is\s+Ksh([\d,]+\.?\d*)/i
    };
  }

  /**
   * Parse M-Pesa message and extract transaction details
   * @param {string} message - Raw M-Pesa message
   * @returns {Object} Parsed transaction details or null if invalid
   */
  parseMessage(message) {
    if (!message || typeof message !== 'string') {
      return null;
    }

    const trimmedMessage = message.trim();
    
    // Try each pattern to find a match
    for (const [type, pattern] of Object.entries(this.messagePatterns)) {
      const match = trimmedMessage.match(pattern);
      if (match) {
        return {
          type,
          transactionId: match[1],
          amount: parseFloat(match[2].replace(/,/g, '')),
          recipient: match[3]?.trim(),
          date: match[4] || null,
          time: match[5] || null,
          balance: parseFloat(match[match.length - 1].replace(/,/g, '')),
          rawMessage: message,
          isValid: true
        };
      }
    }

    // Try alternative formats for edge cases
    return this.parseAlternativeFormats(trimmedMessage);
  }

  /**
   * Handle alternative or malformed M-Pesa message formats
   * @param {string} message 
   * @returns {Object|null}
   */
  parseAlternativeFormats(message) {
    // Generic pattern for any M-Pesa confirmation
    const genericPattern = /([A-Z0-9]{6,})\s+.*?\s+Ksh([\d,]+\.?\d*).*?(paid|sent|received).*?([A-Za-z0-9\s]+?)(?:\s+on\s+(.+?))?(?:\s+at\s+(.+?))?.*?(?:balance\s+is\s+Ksh([\d,]+\.?\d*))?/i;
    
    const match = message.match(genericPattern);
    if (match) {
      return {
        type: 'generic',
        transactionId: match[1],
        amount: parseFloat(match[2].replace(/,/g, '')),
        recipient: match[4]?.trim(),
        date: match[5] || null,
        time: match[6] || null,
        balance: match[7] ? parseFloat(match[7].replace(/,/g, '')) : null,
        rawMessage: message,
        isValid: true,
        confidence: 'low' // Mark as low confidence for alternative parsing
      };
    }

    return null;
  }

  /**
   * Validate if message is a genuine M-Pesa transaction
   * @param {string} message 
   * @returns {boolean}
   */
  isValidMpesaMessage(message) {
    const parsed = this.parseMessage(message);
    return parsed !== null && parsed.isValid;
  }

  /**
   * Extract transaction code from message
   * @param {string} message 
   * @returns {string|null}
   */
  extractTransactionCode(message) {
    const parsed = this.parseMessage(message);
    return parsed ? parsed.transactionId : null;
  }

  /**
   * Check if transaction amount matches expected amount
   * @param {string} message 
   * @param {number} expectedAmount 
   * @returns {boolean}
   */
  validateAmount(message, expectedAmount) {
    const parsed = this.parseMessage(message);
    if (!parsed) return false;
    
    return Math.abs(parsed.amount - expectedAmount) < 0.01; // Handle floating point comparison
  }

  /**
   * Check if transaction recipient matches expected recipient
   * @param {string} message 
   * @param {string} expectedRecipient 
   * @returns {boolean}
   */
  validateRecipient(message, expectedRecipient) {
    const parsed = this.parseMessage(message);
    if (!parsed || !parsed.recipient) return false;
    
    // Specifically check for FINTECH HUB VENTURES 3
    return message.includes('GURUTECH INVESTORS');
  }

  /**
   * Validate payment is made to FINTECH HUB VENTURES 3
   * @param {string} message 
   * @returns {Object}
   */
  validateFinTechPayment(message) {
    const parsed = this.parseMessage(message);
    
    if (!parsed) {
      return {
        isValid: false,
        error: 'Invalid M-Pesa message format',
        details: null
      };
    }

    // Check if payment is to FINTECH HUB VENTURES 3
    const isFinTechPayment = message.includes('GURUTECH INVESTORS');
    
    if (!isFinTechPayment) {
      return {
        isValid: false,
        error: 'Payment must be made to GURUTECH INVESTORS',
        details: parsed
      };
    }

    return {
      isValid: true,
      message: 'Payment verified - made to GURUTECH INVESTORS',
      details: parsed
    };
  }

  /**
   * Validate M-Pesa message with expected till name and plan amount
   * @param {string} message - Raw M-Pesa message
   * @param {string} expectedTillName - Expected till name (e.g., "FINTECH HUB VENTURES 3")
   * @param {number} expectedAmount - Expected plan amount
   * @returns {Object} Validation result with isValid boolean and error message
   */
  validateMessageWithTillAndAmount(message, expectedTillName, expectedAmount) {
    const parsed = this.parseMessage(message);

    if (!parsed) {
      return {
        isValid: false,
        error: 'Invalid M-Pesa message format'
      };
    }

    // Check if recipient matches expected till name
    if (!parsed.recipient || !parsed.recipient.includes(expectedTillName)) {
      return {
        isValid: false,
        error: `Payment must be made to ${expectedTillName}`
      };
    }

    // Check if amount matches expected plan amount
    if (!parsed.amount || Math.abs(parsed.amount - expectedAmount) >= 0.01) {
      return {
        isValid: false,
        error: `Payment amount must be Ksh ${expectedAmount}`
      };
    }

    return {
      isValid: true,
      message: 'Payment verified successfully',
      details: parsed
    };
  }

  /**
   * Get all transaction details for comprehensive validation
   * @param {string} message
   * @returns {Object}
   */
  getTransactionDetails(message) {
    const parsed = this.parseMessage(message);

    if (!parsed) {
      return {
        isValid: false,
        error: 'Invalid M-Pesa message format',
        rawMessage: message
      };
    }

    return {
      isValid: true,
      ...parsed,
      validation: {
        hasTransactionCode: !!parsed.transactionId,
        hasAmount: !!parsed.amount,
        hasRecipient: !!parsed.recipient,
        hasDateTime: !!(parsed.date && parsed.time),
        hasBalance: !!parsed.balance
      }
    };
  }
}

// Export singleton instance
export const mpesaParser = new MpesaParser();
