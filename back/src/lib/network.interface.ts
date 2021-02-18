export interface IHospitalDay {
    jour: string,
    nomReg: string,
    numReg: number,
    incid_rea: number
}

export interface IIncidenceDay {
    dep: number,
    jour: string,
    P: number,
    cl_age90: number,
    pop: number
}
