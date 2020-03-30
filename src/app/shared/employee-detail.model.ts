
export class EmployeeDetail implements IEmployeeDetail {
    
    id: string;
    employee_name: string;
    employee_age: string;
    employee_salary: string;
    profile_image: string;
}

export interface IEmployeeDetail {

    id: string;
    employee_name: string;
    employee_age: string;
    employee_salary: string;
    profile_image: string;
}
