
export interface ITask {
  id: string
  title: string 
  time: {
    hours: number 
    minutes: number 
  }
  isChecked?: boolean 
}