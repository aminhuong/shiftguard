#  Shiftguard
#### Employee Break, Leave &amp; Compliance Management System

ShiftGuard is a mock workforce compliance backend system for tracking employee breaks, leave usage, overtime, and manager alerts.

This project is built as a software engineering portfolio project using fictional data only. It is not affiliated with any real workplace, casino, venue, or employer.

## Project Overview

ShiftGuard helps managers monitor whether employees are receiving proper breaks, working beyond scheduled hours, or using a high number of leave days.

The system is designed around simple workplace compliance rules:
- Employees should receive a 15-minute break after every 60 minutes of work.
- Supervisors should receive a 20-minute break after a maximum of 80 minutes of work.

- Employees working beyond their scheduled shift end time should trigger an overtime alert.
- Employees with unusually high sick leave or annual leave usage should trigger a manager review alert.

## Tech Stack
- JavaScript
- Node.js
- Jest
- Git
- GitHub
- Pull Requests
- Unit Testing

## Planned Features

### Employee Management
- Create employees
- View employee details
- List employees
- Update employee status
- Validate employee roles

### Shift Management
- Create shifts
- View shift details
- Track scheduled start and end times
- Track actual end time
- Detect overtime

### Break Management
- Record employee breaks
- Calculate break duration
- Check whether breaks are overdue
- Check whether break duration is sufficient
- Generate break compliance alerts

### Leave Management
- Add annual leave records
- Add sick leave records
- Calculate yearly leave usage
- Detect high leave usage
- Generate manager review alerts

### Alert System
- Create alerts for break, overtime, and leave issues
- List alerts for a shift manager
- Close or resolve alerts
- Generate daily compliance summaries


### Example Business Rules


| Role |	Maximum Work Time Before Break | Required Break |
|------|---------------------------------|----------------|
|Employee / Dealer |	60 minutes |	15 minutes |
|------------------|-------------|-------------|
|Supervisor |	80 minutes |	20 minutes |
|-----------|------------|-------------|

### Example Alert Types
- BREAK_OVERDUE
- INSUFFICIENT_BREAK
- OVERTIME_ON_FLOOR
- HIGH_SICK_LEAVE
- HIGH_ANNUAL_LEAVE
- SHIFT_NOT_CLOSED
  
### Project Structure

shiftguard/
├── src/
│   ├── dataStore.js
│   ├── employee.js
│   ├── shift.js
│   ├── break.js
│   ├── leave.js
│   ├── alert.js
│   └── report.js
├── package.json
├── README.md
└── .gitignore

### Planned Test Files

src/
├── employee.test.js
├── shift.test.js
├── break.test.js
├── leave.test.js
├── alert.test.js
└── report.test.js

### Installation

Clone the repository:
##### git clone https://github.com/aminhuong/shiftguard.git
cd shiftguard

Install dependencies:
npm install

### Running Tests
Run all Jest tests:
npm test

### Development Workflow

This project follows a feature-branch workflow:
#### Issue → Branch → Tests → Code → Commit → Push → Pull Request → Merge

#### Each feature should have:
- A GitHub issue
- A feature branch
- Jest tests
- Clear commits
- A pull request into main

#### Example branch names:
feature/employee-create
feature/shift-create
feature/break-compliance
feature/leave-summary
feature/manager-alert-list

### Example Data Model
#### Employee
{
  employeeId: 1,
  name: 'Alex Nguyen',
  role: 'DEALER',
  department: 'Table Games',
  status: 'ACTIVE'
}
#### Shift
{
  shiftId: 1,
  employeeId: 1,
  managerId: 10,
  date: '2026-06-07',
  startTime: '19:00',
  endTime: '03:00',
  actualEndTime: '03:30',
  status: 'CLOSED'
}
#### Break
{
  breakId: 1,
  shiftId: 1,
  employeeId: 1,
  startTime: '20:00',
  endTime: '20:15',
  breakMinutes: 15
}
#### Leave
{
  leaveId: 1,
  employeeId: 1,
  type: 'SICK',
  startDate: '2026-06-01',
  endDate: '2026-06-02',
  days: 2,
  year: 2026
}
#### Alert
{
  alertId: 1,
  employeeId: 1,
  managerId: 10,
  type: 'BREAK_OVERDUE',
  message: 'Employee has worked more than the allowed time without a break.',
  status: 'OPEN',
  createdAt: '2026-06-07T21:15:00'
}

### MVP Function List

#### Data Store
- getData
- setData
- clear
  
#### Employee
- validEmployeeName
- validEmployeeRole
- employeeCreate
- employeeDetails
- employeeExists
  
#### Shift
- shiftCreate
- shiftDetails
- calculateShiftDuration
- isOvertime
  
#### Break
- getRequiredBreakMinutes
- getMaxWorkMinutesBeforeBreak
- breakAdd
- isBreakOverdue
- hasEnoughBreak
- checkBreakCompliance
  
#### Leave
- leaveAdd
- leaveSummary
- isHighLeaveUsage
  
#### Alert
- alertCreate
- managerAlertList
- closeAlert
  
#### Report
- dailyComplianceReport
- employeeComplianceSummary

  
### Disclaimer
#### This project uses fictional data only. It is not connected to any real company, venue, employee record, customer record, payroll system, or workplace system.
#### The purpose of this project is to demonstrate backend development, data modelling, validation, testing, Git workflow, and compliance-focused business logic.
