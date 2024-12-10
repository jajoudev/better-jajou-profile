import { Menu01Icon } from "hugeicons-react";
import PropTypes from "prop-types";

function BurgerMenu({sizeIcon, colorIcon}) {
  return (
    <header>
      <div className="flex items-end justify-end p-5 cursor-pointer absolute inset-x-0 lg:hidden">
        <Menu01Icon size={sizeIcon} color={colorIcon} />
      </div>
    </header>
  );
}

BurgerMenu.propTypes = {
  sizeIcon: PropTypes.number.isRequired,
  colorIcon: PropTypes.string.isRequired,
};

export default BurgerMenu;
