import "@/app/globals.css";

type AbilityDisplayBoxProps = {
  label: string;
  value: number | string;
};

export default function AbilityDisplayBox({
  label,
  value,
}: AbilityDisplayBoxProps) {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <p>{value}</p>
    </div>
  );
}
