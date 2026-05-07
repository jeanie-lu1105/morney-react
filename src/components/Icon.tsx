import { Link } from "react-router-dom";

type TIcon = {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  color?: string;
  class?: string;
  to?: string;
  displayName?: string;
};

const Icon = (props: TIcon) => {
  if (!props.icon)
    return <span style={{ width: "16px", height: "16px" }}></span>;
  return (
    <>
      {props.to && (
        <Link to={props.to}>
          <props.icon fill={props.color || "grey"} className="icon" />
        </Link>
      )}
      {!props.to && (
        <props.icon fill={props.color || "grey"} className="icon" />
      )}
    </>
  );
};

export default Icon;
