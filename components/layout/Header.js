import DropDown from "./dropdown/DropDown";

export default async function Header() {
  return (
    <div className="flex justify-between px-24 items-center shadow-md flex-wrap py-8 gap-4">
      <a className="flex gap-2 items-center justify-center" href="/">
        <img
          src="/logo.png"
          className="h-10 w-10"
        />
        <h1 className="text-3xl font-bold text-primary">Legalo</h1>
      </a>
      <ul className="flex gap-4 justify-center items-center">
        <li><a className="hover:text-primary" href="/">Home</a></li>
        <DropDown/>
        <li><a className="hover:text-primary" href="/about">About</a></li>
        <li><a className="hover:text-primary" href="/contact">Contact</a></li>
      </ul>
      <div className="flex gap-4 justify-center items-center">
        <a href="/forms" className="h-12 w-32 bg-primary text-white flex justify-center items-center rounded-lg hover:bg-hover">Start</a>
      </div>
    </div>
  );
}
