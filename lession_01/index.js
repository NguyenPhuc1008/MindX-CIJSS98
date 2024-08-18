// Câu 1
const square = (x) => (x*x);
console.log(square(4));
// Cau 2
const containsKeyword = (str, keyword) => (str.includes(keyword));
console.log(containsKeyword("Hello world", "world"));
// Cau 3
const addPrefix = (arr, prefix) =>
    //  (`${prefix}:${arr[0]}, ${prefix}:${arr[1]}, ${prefix}:${arr[2]}`);
arr.map(item => (`${prefix}:${item}`))
console.log(addPrefix(["one", "two", "three"], "number"));
// Cau 4
let numbers = [1,2,3,4]
const doubleNumber =  numbers.map( num => num * 2 );
console.log(doubleNumber);
// Cau 5
let numbers_2 = [1,2,3,4,5,6];
const filterNumber = numbers_2.filter (num_2 => num_2%2);
console.log(filterNumber);
// Cau 6 
const employees = [
    {id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];
const totalWorkingDays = employees.reduce((total, employee) => total + employee.workingDays , 0);
console.log("workingDays:",totalWorkingDays);
// Cau 7
const employees_02 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];
const highestPaiEmloyee = employees_02.reduce((highest, employee_02) => {
return (employee_02.salary > highest.salary) ? employee_02 : highest},
employees_02[0]);
console.log(highestPaiEmloyee);
// Cau 8
const employees_03 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];
const harderWorking = employees_03.reduce((harder, employee_03) => {
    const employeeWorking = employee_03.workingDays - employee_03.lateDays;
    const harderWorking = harder.workingDays - harder.lateDays;
    return (employeeWorking > harderWorking) ? employee_03:harder
},employees_03[0]);
console.log(harderWorking);
// Cau 9
const employees_04 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
const groupEmployeesByName = (employees_04) => {
    return employees_04.reduce((result, employee_04) =>{
        if(!result[employee_04.name]) {
             result[employee_04.name] = [];
        }
        result[employee_04.name].push(employee_04);
        return result
    },{});
}
console.log(groupEmployeesByName(employees_04));
//Cau 10
const employees_05 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];

const performanceEmloyees = employees_05.reduce((perfor,employee_05) => {
    const employeeWorking = employee_05.workingDays/employee_05.salary;
    const perforWorking = perfor.workingDays/perfor.salary;
    return (employeeWorking > perforWorking) ? employee_05 : perfor
},employees_05[0]);
console.log(performanceEmloyees);
//Cau 11
const employees_06 = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];
const groupsWorkingDays = (employees_06) => {
    return employees_06.reduce((acc, employee_06) => {
        const days = employee_06.workingDays;
        if (!acc[days]) {
            acc[days] = 0;
        }
        acc[days]++;
        return acc
    },{}
)}
console.log(groupsWorkingDays(employees_06));
//Cau 12
const employees_07 = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];
const transForm = (employees_07) => {
    return employees_07.map( employee_07 =>
    ({
        name: employee_07.name,
        email: employee_07.email,
        attendance:{
            workingDays: employee_07.workingDays,
            lateDays: employee_07.lateDays
        }

    })
    )
}
console.log(transForm(employees_07))
//Cau 13
let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];
//Yeu cau 13.1
const addTask = (tasks, newTaks) => {
    tasks.push(newTaks);
}
addTask(tasks,{
    name: "Hoan thanh khoa hoc Mindx",
    description:"Hoan thanh ky 1",
    completed: true
})
console.log(tasks);
// Yeu cau 13.2
const markTasksCompleted = (tasks, taskName) =>{
    taskName.forEach(taskName => {
        const task = tasks.find(t => t.name === taskName);
        if(task){
            task.completed = true
        }
        
    });
}
markTasksCompleted(tasks, ["Đi mua hàng"])
// Yeu cau 13.3
const sortTasks = (tasks, order = 'asc') => {
    return tasks.sort((a,b) => {
        if (order === 'asc') {
            return a.name.localeCompare(b.name);
        } else if (order === 'desc') {
            return b.name.localeCompare(a.name);
        } else {
            throw new Error("Invalid order specified. Use 'asc' or 'desc'.");
        }

    })
}
const sortedTasksDesc = sortTasks(tasks, 'desc');
console.log('Sorted Descending:', sortedTasksDesc);










