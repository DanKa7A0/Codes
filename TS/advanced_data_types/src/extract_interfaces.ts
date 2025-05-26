// function assignTask(
//     user: { username: string, signupDate: Date },
//     task: {
//         status: 'Logged' | 'Started' | 'InProgress' | 'Done',
//         title: string,
//         daysRequired: number,
//         assignedTo: {
//             username: string,
//             signupDate: Date
//         } | undefined,
//         changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done'): void
//     }
// ) {
//     if (task.assignedTo == undefined) {
//         task.assignedTo = user;
//         console.log(`User ${user.username} assigned to task '${task.title}'`);
//     }
// }


interface UserData {
    username: string;
    signupDate: Date;
    passwordHash: string;
};

type Statustypes = 'Logged' | 'Started' | 'InProgress' | 'Done';
interface TaskData {
    status: Statustypes,
    title: string,
    daysRequired: number,
    assignedTo: {
        username: string,
        signupDate: Date
    } | undefined,
    changeStatus(newStatus: Statustypes): void
};
interface TaskDataWithMoreProps extends TaskData {
    moreProps: number;
    evenMore: string;
}

let user: UserData = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
};

let task1: TaskData = {
    status: 'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: Statustypes) {
        this.status = newStatus; 
    }
}

let task2: TaskDataWithMoreProps = {
    status: 'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: Statustypes) { 
        this.status = newStatus;
    },
    moreProps: 300,
    evenMore: 'wow'
}

function assignTask(user: UserData, task: TaskData | TaskDataWithMoreProps){
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

assignTask(user, task1); 
assignTask(user, task2);