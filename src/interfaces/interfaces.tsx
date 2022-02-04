
export interface EmployeeInterface {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    position: string,
    department: string,
}

export interface DepartmentInterface {
    id: string,
    name: string,
    countEmployee: number,
}