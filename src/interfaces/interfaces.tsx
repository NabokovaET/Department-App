
export interface EmployeeInterface {
    id: string,
    name: string,
    surname: string,
    email: string,
    age: number,
    position: Position,
    department: string,
}

export interface DepartmentInterface {
    id: string,
    title: string,
    description: String,
    positions: Position[],
    employeesQuantity: number,
}

export interface Position {
    id: string,
    title: string,
    description: string,
    department: DepartmentInterface,
    employees: EmployeeInterface[],
}
