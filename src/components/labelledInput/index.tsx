import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Props={
  id: string;
  label: string;
  placeholder: string;
  type: string;
  autoCapitalize?: string;
  autoComplete?: string;
  autoCorrect?: string;
  disabled?: boolean;
};

function LabelledInput(props: Props) {
  const {
    id, label, placeholder, type, autoCapitalize, autoComplete, autoCorrect, disabled,
  } = props;
  return (
    <div className='grid gap-1'>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        disabled={disabled}
      />
    </div>
  );
}

export default LabelledInput;
