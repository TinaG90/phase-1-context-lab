/* Your Code Here */
function createEmployeeRecord(employeeInfo){
 return {
    firstName: employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: [],
    }
}

function createEmployeeRecords(employee){
    const result = employee.map(record => {
        return createEmployeeRecord(record);
    })
    return result
}

function createTimeInEvent(date){
    this.timeInEvents.push(createTimeEvent(date, "TimeIn"))
    return this
}

function createTimeOutEvent(date){
    this.timeOutEvents.push(createTimeEvent(date, "TimeOut"))
    return this
}

function createTimeEvent(date,type){
    return {
    type: type,
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
}
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(record => record.date === date)
    const timeOut = this.timeOutEvents.find(record => record.date === date)
    
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
    const numHours = hoursWorkedOnDate.call(this,date)
    return this.payPerHour * numHours
}


function findEmployeeByFirstName(records, firstName){
    const found = records.find(record => record.firstName === firstName)
    return found
}

function calculatePayroll(records){
    return records.reduce((acc,record) => {
        return allWagesFor.call(record) + acc
    },0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

