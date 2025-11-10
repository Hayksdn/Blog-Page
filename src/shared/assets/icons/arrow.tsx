import { type SvgIconType, svgIconDefaultProps } from "./_props";

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M1 11L11 1M11 1H1M11 1V11"
      stroke="#101828"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
