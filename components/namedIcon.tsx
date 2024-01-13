export default function NamedIcon(props: {
  color?: string;
  name: string;
  icon: any;
  size?: number;
}) {
  const color = props.color ?? 'white';
  const size = props.size ?? 40;
  return (
    <div className="flex flex-col items-center justify-center">
      <props.icon color={color} size={size} />
      <p className="text-white text-xl mt-5">{props.name}</p>
    </div>
  );
}
