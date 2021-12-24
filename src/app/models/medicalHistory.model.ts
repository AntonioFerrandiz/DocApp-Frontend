export interface MedicalHistory{
    patientId: number,
    weight: number,
    height: number,
    age: number,
    timePeriod: string,
    details: string,
    prescribedMedication: string,
    dateCreated?: Date;
}