const Header = () => {
    return (
        <div className="bg-[#161410]">
            <div className="w-full md:w-[737px] p-3 md:p-0 mx-auto flex items-center justify-between">
                <img src="./provisory-logo.png" alt="" />
                <div className="bg-[#F2DACC] w-[130px] h-[35px] flex items-center justify-center rounded-sm cursor-pointer">
                    Se Connecter
                </div>
            </div>
        </div>
    );
}

export default Header;