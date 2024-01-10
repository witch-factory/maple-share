import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Props={
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoCapitalize?: string;
  autoComplete?: string;
  autoCorrect?: string;
  required?: boolean;
  disabled?: boolean;
};

function LabelledInput(props: Props) {
  const {
    id,
    label,
    placeholder,
    type,
    value,
    onChange,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    required,
    disabled,
  } = props;
  return (
    <div className='space-y-1.5'>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}

export default LabelledInput;
