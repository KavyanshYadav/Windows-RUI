export interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}
