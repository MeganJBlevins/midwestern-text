export interface IProps {
  onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IState {
  email: string,
  subject: string,
  message: string,
  submitted: boolean
  emailErrors: boolean,
  subjectErrors: boolean,
  messageErrors: boolean,
}
export interface IInput {
  name: string, 
  value: string
}
