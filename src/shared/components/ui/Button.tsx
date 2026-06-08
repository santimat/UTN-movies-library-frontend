type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
export function Button({ children, className: classes, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${classes} cursor-pointer border-2 border-neutral p-2 shadow-auth transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:scale-95`}
    >
      {children}
    </button>
  );
}
