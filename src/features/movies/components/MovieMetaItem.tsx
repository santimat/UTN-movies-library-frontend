type MovieMetaItemProps = {
  label: string;
  value: string | number;
};
export function MovieMetaItem({ label, value }: MovieMetaItemProps) {
  return (
    <div className="border-3 border-neutral bg-neutral/20 p-2 font-headline font-bold uppercase">
      <span className="text-sm text-neutral/40">{label}: </span>
      <p className="text-neutral">{value}</p>
    </div>
  );
}
