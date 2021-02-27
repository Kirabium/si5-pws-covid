export interface IHospitalDay {
    dep: string,
    sexe: number,
    jour: string,
    hosp: number,
    rea: number,
    rad: number,
    dc: number
}

export interface IIncidenceDayDep {
    dep: string,
    jour: string,
    P: number,
    cl_age90: number,
    pop: number
}

export interface IIncidenceDayReg {
    reg: string,
    jour: string,
    P_f: number,
    P_h: number,
    P: number,
    pop_f: number,
    pop_h: number,
    cl_age90: string,
    pop: number
}

export interface IIncidenceDayFrance {
    fra: string,
    jour: string,
    P_f: number,
    P_h: number,
    P: number,
    pop_f: number,
    pop_h: number,
    cl_age90: string,
    pop: number
}

export interface IIncidenceWeekDep {
    dep: string,
    week: string,
    P: number,
    cl_age90: number,
    pop: number
}

export interface IIncidenceWeekReg {
    reg: string,
    week: string,
    P_f: number,
    P_h: number,
    P: number,
    pop_f: number,
    pop_h: number,
    cl_age90: string,
    pop: number
}

export interface IIncidenceWeekFrance {
    fra: string,
    week: string,
    P_f: number,
    P_h: number,
    P: number,
    pop_f: number,
    pop_h: number,
    cl_age90: string,
    pop: number
}
