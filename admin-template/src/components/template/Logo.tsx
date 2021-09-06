export default function Logo() {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        h-16 w-16
       `}
    >
      <img src="/logo.svg" alt="logo" />
    </div>
  );
}
