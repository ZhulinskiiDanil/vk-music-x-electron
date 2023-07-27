export const MinusIcon: React.FC<React.SVGAttributes<SVGSVGElement>> = ({
  fill, stroke, strokeWidth, ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill || "none"}
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth || "1.5"}
    stroke={stroke || "#000"}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
)