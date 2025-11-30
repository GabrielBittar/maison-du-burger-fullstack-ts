const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./provisory-logo.png" alt="" />
        <div className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DACC]">
          Se Connecter
        </div>
      </div>
    </div>
  );
};

export default Header;
