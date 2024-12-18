export interface ICurrencyFieldComponent {
  id: string;
  value: string;
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
