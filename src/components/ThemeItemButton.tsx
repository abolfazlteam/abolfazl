interface ILightThemeButtonProps {
  children: string;
  onClick: () => void;
}

const LightThemeButton: React.FC<ILightThemeButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button data-testid="theme-btn" className="text-start" onClick={onClick}>
      <li className="px-4 py-2 text-sm capitalize text-text-secondary transition-all duration-150 ease-in hover:bg-primary hover:text-white">
        {children}
      </li>
    </button>
  );
};

export default LightThemeButton;
