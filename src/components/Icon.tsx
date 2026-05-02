import { Link } from "react-router-dom";

type TIcon = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color?: string;
  class?: string;
  to?: string;
  displayName: string;
};

const Icon = (props: TIcon) => {
  return (
    <>
      <props.icon fill={props.color || "grey"} className="icon" />
      {props.to && <Link to={props.to}>{props.displayName}</Link>}
    </>
  );
};

export default Icon;
