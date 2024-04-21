import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navbarItems = [
    {
      name: "Store",
      slug: "#",
      active: true,
    },
    {
      name: "Mac",
      slug: "#",
      active: true,
    },
    {
      name: "ipad",
      slug: "#",
      active: true,
    },
    {
      name: "iphone",
      slug: "#",
      active: true,
    },
    {
      name: "Watch",
      slug: "#",
      active: true,
    },
    {
      name: "AirPods",
      slug: "#",
      active: true,
    },
    {
      name: "TV & Home",
      slug: "#",
      active: true,
    },
    {
      name: "Entertainment",
      slug: "#",
      active: true,
    },
    {
      name: "Accessories",
      slug: "#",
      active: true,
    },
    {
      name: "Support",
      slug: "#",
      active: true,
    },
  ];

  return (
    <header className="text-sm text-white">
      <nav className="flex align-center justify-center shadow-lg-white bg-gray-600">
        <div className="p-3">
          <Link to={"/"}>
            <img
              src="https://toppng.com/uploads/preview/apple-logo-logo-png-transparent-background-11659045662t6m4u3uiwq.png"
              alt="logo"
              height={20}
              width={20}
            />
          </Link>
        </div>
        <ul className="flex ">
          {navbarItems.map((navItem) =>
            navItem.active ? (
              <li>
                <button
                  className="mx-2 outline-none rounded-xl p-3 cursor-pointer"
                  onClick={() => navigate(navItem.slug)}
                >
                  {navItem.name}
                </button>
              </li>
            ) : null
          )}
        </ul>
        <div className="p-3">
          <Link to={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3751OuTtZ0Ovh-NtGF_4n_CQ6T-4u_9TA8iGd-v2EDw&s"
              alt="search icon"
              height={20}
              width={20}
            />
          </Link>
        </div>
        <div className="p-3">
          <Link to={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC06Kii29JRiiRYjNilx3h4dpQ-dof_qs_cISeJ4UJPQ&s"
              alt="bag icon"
              height={20}
              width={20}
            />
          </Link>
        </div>
      </nav>
      <div className="text-center py-2 bg-black ">
        <span className="font-medium">Get up to 24 months No Cost EMI on all iPhone models from most leading
        banks.‡</span>
        
        <span className="text-blue-600"> Shop now</span>
      </div>
    </header>
  );
}
export default Header;
