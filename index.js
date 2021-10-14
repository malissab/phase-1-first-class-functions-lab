// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const LastTwoDrivers = drivers.slice(-2);
    return LastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    return function(fare) {
        return fare ** 2;
    }
}
const fareDoubler = function (fare) {
    return fare * 2;
}

const fareTripler = function (fare) {
    return fare * 3;
}

const selectDifferentDrivers = function (arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}