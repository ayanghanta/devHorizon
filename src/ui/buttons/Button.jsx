function Button({ children, type, onClick }) {
  const base = 'rounded-lg px-2 py-1 text-sm sm:px-4 sm:py-2  ';
  const style = {
    create:
      'bg-gray-800 text-sm font-semibold text-gray-100 sm:text-base rounded-lg px-2 py-1 text-sm sm:px-4 sm:py-2',
    primary:
      base +
      'bg-gray-800 text-sm text-gray-100 sm:text-base hover:bg-gray-700 transition duration-300',
    secondary:
      base +
      'bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-300',
    block:
      'bg-gray-100 px-2 py-1 rounded-sm hover:bg-gray-200 transition duration-300',
  };

  if (onClick)
    return (
      <button className={style[type]} onClick={onClick}>
        {children}
      </button>
    );
  return <button className={style[type]}>{children}</button>;
}

export default Button;
