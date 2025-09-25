
import { atomWithStorage } from "jotai/utils"

export const userObject = atomWithStorage('user', {
    firstName: "",
    lastName: "",
    education: "",
    email: "",
    password: "",
    referralCode: "",
    accountBalance: 0,
    loyaltyPoints: 0,
})


export const paymentDetails = atomWithStorage('payments', {
    method: "",
    mpesaName: "",
    mpesaNumber: "",
    added: false
})

export const mpesaCodes = atomWithStorage('codes', [])

export const subscribedPackage = atomWithStorage('package', {
    planName: "Free Account",
    dailySurvey: 1,
    monthlyIncome: 0,
    dailyIncome: 0,
    minimumWithdrawal: 4500,
    earningPerSurvey: "40 - 50",
    price: "0"
})

export const userLoggedIn = atomWithStorage('loggedIn', false)

export const surveyValidation = atomWithStorage('validate', {
    date: "12/12/2027",
    count: 0
})

export const completedSurveys = atomWithStorage('surveys', [])

export const amountEarnedList = atomWithStorage('amount', [])
export const weekDaysList = atomWithStorage('weekDays', [])