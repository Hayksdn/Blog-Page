import { type SvgIconType, svgIconDefaultProps } from "./_props";

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M6.66829 0.834961V12.5016M6.66829 12.5016L12.5016 6.66829M6.66829 12.5016L0.834961 6.66829"
      stroke="#6941C6"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
