import { Link } from 'react-router-dom';
import { HiMenu, HiSearch, HiBell } from "react-icons/hi";

const Navbar = () => {
    return (
        <div className="w-auto navbar bg-secondary/30 m-4 rounded-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <HiMenu size={32} />
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 suit">
                        <li className="menu-title">게시판</li>
                        <li><Link to="/board/chaewon">김채원</Link></li>
                        <li><Link to="/board/eunchae">홍은채</Link></li>
                        <li><Link to="/board/kazuha">카즈하</Link></li>
                        <li><Link to="/board/sakura">사쿠라</Link></li>
                        <li><Link to="/board/yunjin">허윤진</Link></li>
                        <li className="menu-title mt-2">핌타운</li>
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/about">소개</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-black pretendard">
                    <img src="./icons/fimtown_full.svg" alt="fimtown logo" width={28} height={28} />
                    핌타운
                </Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <HiSearch size={32} />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <HiBell size={32} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
