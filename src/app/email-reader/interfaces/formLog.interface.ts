export interface FormLog {
  form: FormStatus;
  fields: Field[]
}

export interface FormStatus{
  isValid?: boolean
  isTouched?: boolean
  isDirty?: boolean
}

export interface Field {
  name?:string
  status?:FormStatus
  errors?: {
    pattern?: any
    required?: any
    minlength?: any
  }

}
