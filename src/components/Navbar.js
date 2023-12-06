import {Link} from 'react-router-dom';
import {HiMenu, HiSearch, HiBell} from "react-icons/hi";

const Navbar = () => {
    return (
        <div className="navbar bg-[#f3d9fa] rounded-b-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <HiMenu size={32}/>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 suit">
                        <li className="menu-title">게시판</li>
                        <li><Link to="/board/lily">릴리</Link></li>
                        <li><Link to="/board/haewon">해원</Link></li>
                        <li><Link to="/board/sullyoon">설윤</Link></li>
                        <li><Link to="/board/bae">배이</Link></li>
                        <li><Link to="/board/jiwoo">지우</Link></li>
                        <li><Link to="/board/kyujin">규진</Link></li>
                        <li className="menu-title mt-2">엔써타운</li>
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/about">소개</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-primary pretendard">
                    <img src="./icons/nswertown_full.svg" alt="nswertown logo" width={28} height={28}/>
                    엔써타운
                </Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <HiSearch size={32}/>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <HiBell size={32} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;