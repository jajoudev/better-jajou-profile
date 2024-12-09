import PropTypes from "prop-types";

function Icons({ href, IconComponent, size, color, css }) {
  return (
    <>
      <ul>
        <li>
          <a href={href} className={css}>
            <IconComponent size={size} color={color} />
          </a>
        </li>
      </ul>
    </>
  );
}

Icons.propTypes = {
  href: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired
};

export default Icons;
