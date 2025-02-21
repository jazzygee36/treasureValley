export interface InputProps {
  type: string;
  placeholder: string;
  label?: string;
  name?: string;
  value?: string;
  border?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}
export interface SelectProps {
  label?: string;
  option: { value: string; label: string }[];
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  border?: string;
}
export interface ButtonProps {
  title: string;
  onClick?: () => void;
  bg: string;
  color: string;
  type?: 'submit' | 'button';
  disabled?: boolean;
}
export interface IndividualFormProps {
  completeRegistration: boolean;
  setCompleteRegistration: (value: boolean) => void;
  setFormHeader: (value: boolean) => void;
  setProgress: (value: number) => void;
  step: number;
  setStep: (value: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setApiError: any;
}

export interface CorporateFormProps {
  completeRegistration: boolean;
  setCompleteRegistration: (value: boolean) => void;
  setFormHeader: (value: boolean) => void;
  setProgress: (value: number) => void;
  step: number;
  setStep: (value: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setApiError: any;
}
export interface ErrorProps {
  title: string;
  onClose?: () => void;
}
