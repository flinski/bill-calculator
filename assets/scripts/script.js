'use strict'

// Variables
const $inputCurrent = document.getElementById('inputCurrent')
const $inputPrevious = document.getElementById('inputPrevious')
const $inputTariff = document.getElementById('inputTariff')
const $inputDebt = document.getElementById('inputDebt')

const $buttonCalculate = document.getElementById('buttonCalculate')
const $buttonClear = document.getElementById('buttonClear')

const $difference = document.getElementById('difference')
const $payment = document.getElementById('payment')
const $debt = document.getElementById('debt')

// Functions
const calculateBill = function ({ currentReadings, previousReadings, tariff, debt }) {
	const differenceReadings = currentReadings - previousReadings
	const payment = Number((differenceReadings * tariff).toFixed(2))
	const paymentWithDebt =
		debt >= 0
			? Number((payment + debt).toFixed(2))
			: Number((payment - Math.abs(mandatoryPayment)).toFixed(2))

	return { differenceReadings, payment, paymentWithDebt }
}

const displayBill = function (bill) {
	$difference.textContent = bill.differenceReadings
	$payment.textContent = bill.payment
	$debt.textContent = bill.paymentWithDebt
}

const clearInputs = function () {
	$inputCurrent.value = ''
	$inputPrevious.value = ''
	$inputTariff.value = ''
	$inputDebt.value = ''
}

// Event Listeners
$buttonCalculate.addEventListener('click', () => {
	const billData = {
		currentReadings: Number($inputCurrent.value),
		previousReadings: Number($inputPrevious.value),
		tariff: Number($inputTariff.value),
		debt: Number($inputDebt.value),
	}

	const bill = calculateBill(billData)

	displayBill(bill)
})

$buttonClear.addEventListener('click', clearInputs)
