import DropDown from "./dropdown/DropDown";

export default function Header() {
  return (
    <header className="flex justify-between px-24 items-center shadow-md flex-wrap py-4 gap-4">
      <a className="flex gap-2 items-center justify-center" href="/">
        <img
          src="/logo.png"
          className="h-10 w-10"
        />
        <h1 className="text-3xl font-bold text-primary">Legalo</h1>
      </a>
      <nav className="flex gap-4 justify-center items-center">
        <a className="hover:text-primary" href="/">Home</a>
        <DropDown/>
        <a className="hover:text-primary" href="/about">About</a>
        <a className="hover:text-primary" href="/contact">Contact</a>
      </nav>
      <div className="flex gap-4 justify-center items-center">
        <a href="/forms" className="h-12 w-28 bg-primary text-white flex justify-center items-center rounded-lg hover:bg-hover">Start</a>
      </div>
    </header>
  );
}
