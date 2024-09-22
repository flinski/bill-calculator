'use strict'

const billData = {
	currentReadings: 91724,
	previousReadings: 91690,
	tariff: 8.34,
	debt: 0,
}

const calculateBill = function ({ currentReadings, previousReadings, tariff, debt }) {
	const differenceReadings = currentReadings - previousReadings
	const payment = Number((differenceReadings * tariff).toFixed(2))
	const paymentWithDebt =
		debt >= 0
			? Number((payment + debt).toFixed(2))
			: Number((payment - Math.abs(mandatoryPayment)).toFixed(2))

	return { differenceReadings, payment, paymentWithDebt }
}

const bill = calculateBill(billData)

console.log(bill)
