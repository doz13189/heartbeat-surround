import "@/app/globals.css";
import { SetStateAction } from "react";

type AbilityInputBoxProps = {
  label: string;
  value: number;
  setValue: (value: SetStateAction<number>) => void;
};

export default function AbilityInputBox({
  label,
  value,
  setValue,
}: AbilityInputBoxProps) {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <input
        type="number"
        id="basicAbilityPower"
        name="basicAbilityPower"
        required
        size={10}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}
