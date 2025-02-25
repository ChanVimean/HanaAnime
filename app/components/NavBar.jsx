"use client"

import { FaSearch, FaMusic  } from "react-icons/fa"
import { MdPerson, MdOutlineDarkMode, MdSunny, MdLogout  } from "react-icons/md"
import { IoMdMore, IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { RxHamburgerMenu } from "react-icons/rx"
import { HiMiniLanguage } from "react-icons/hi2"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../store/Theme"
import styles from "../styles/NavBar.module.css"

const NavBar = () => {

  const [showSearch, setShowSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const inputRef = useRef(null)
  const dropdownRef = useRef(null)
  const showMoreRef = useRef(null)
  const menuRef = useRef(null)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const toggleSearch = () => setShowSearch((prev) => !prev)
  const toggleDropdown = () => setShowDropdown((prev) => !prev)
  const toggleMore = () => setShowMore((prev) => !prev)
  const toggleMenu = () => setShowMenu((prev) =>!prev)
  
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.theme.darkMode)

  useEffect(() => {
    const handleClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        if (searchValue.trim() === '') setShowSearch(false)
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
      if (showMoreRef.current && !showMoreRef.current.contains(event.target)) {
        setShowMore(false)
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [searchValue])

  /* Swipe Event on Mobile for Sidebar */
  // Handle Touch Start
  const handleTouchStart = (event) => touchStartX.current = event.touches[0].clientX
  // Handle Touch Move
  const handleTouchMove = (event) => touchEndX.current = event.touches[0].clientX
  // handle Touch End (Detect swipe direction)
  const handleTouchEnd = (event) => {
    const swipeDistance = touchEndX.current - touchStartX.current

    if (swipeDistance > 80) setShowMenu(false) // Swipe right to close menu
    else if (swipeDistance < -80 && !showMenu) setShowMenu(true) // Swipe left to open menu
  }

  // Theme (Dark x Light) Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    }
    else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])


  return (
    <nav
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={styles.NarBar}
    >
      {/* Categories Section */}
      <section className={styles.CategoriesContainer}>
        {/* Logo Section */}
        <Link href={""} className="me-2">
          <div className={styles.CategoriesFrame}>
            <img
              className="object-cover w-full h-full"
              src="Hana Anime.png"
              alt="Logo"
            />
          </div>
        </Link>

        <ul className="hidden lg:flex gap-x-4 text-sm">
          <div className="relative text-xl">
            <button onClick={toggleDropdown} className="flex items-center gap-x-1">
              Categories
              <span>{showDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
            </button>
            
            {/* Dropdown Menu */}
            { showDropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-[var(--theme-800)] text-[var(--theme-50)] rounded-md"
                ref={dropdownRef}
              >
                <ul className="space-y-2">
                  <li className="dropdown-item">
                    <Link href={""}>Action</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href={""}>Adventure</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href={""}>Comedy</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href={""}>Fantasy</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href={""}>Romance</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href={""} className="relative underline-animation text-2xl">
            Movies
          </Link>
          <Link href={""} className="relative underline-animation text-2xl">
            Series
          </Link>
          <Link href={""} className="relative underline-animation text-2xl">
            Animation
          </Link>
        </ul>
      </section>

      {/* Right Section - Icons & Profile */}
      <section className={styles.RightSection}>
        <div
          ref={inputRef}
          className={`${styles.RightContainer}
                      ${ showSearch ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden" }`}
        >
          <input
            type="text"
            placeholder="Search movies..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={`${styles.RigthSearch}
              ${ showSearch ? "w-64 opacity-100 scale-100" : "w-0 opacity-0 scale-90"}`}
          />
        </div>

        <FaSearch onClick={toggleSearch} className="wrap-btn text-2xl" />
        <MdPerson className="hidden lg:block wrap-btn text-3xl" />

        {/* Profile */}
        <div>
          <IoMdMore onClick={toggleMore} className="hidden lg:block text-3xl wrap-btn" />

          {/* User Profile Dropdown */}
          { showMore && (
            <div
              ref={showMoreRef}
              className={styles.RightDropDown}
            >
              <ul className="space-y-2">
                <li className={`dropdown-item ${styles.RightDDMenu}`}>
                  <span><MdPerson /></span>
                  <Link href={""}>Profile</Link>
                </li>
                <li className={`dropdown-item ${styles.RightDDMenu}`}>
                  <button onClick={() => dispatch(toggleTheme())}
                          className="flex items-center gap-x-2"
                  >
                    <span>{darkMode ? <MdOutlineDarkMode /> : <MdSunny />}</span>
                    Theme
                  </button>
                </li>
                <li className="dropdown-item">
                  <button className="flex items-center gap-x-2">
                    <span><IoSettingsOutline /></span>
                    Setting
                  </button>
                </li>
                <hr />
                <li className={`dropdown-item ${styles.RightDDMenu}`}>
                  <span><RiLogoutBoxRLine /></span>
                  <Link href={""}>Log out</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Hidden Hamburger Bar */}
        <button onClick={toggleMenu}
                className="lg:hidden wrap-btn text-3xl"
        >
          <RxHamburgerMenu />
        </button>

        {/* SideBar On Toggle */}
        <section
          ref={menuRef}
          className={`${styles.HamToggleContainer}
                      ${showMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="space-y-3">
            <li>
              <button className={`${styles.HamToggleBtn} wrap-btn`}>
                <Link href={""}>
                  <MdPerson className="text-2xl" />
                </Link>
                <h1>Profile</h1>
              </button>
            </li>
            <hr className="my-2" />
            <li>
              <button className={`${styles.HamToggleBtn} wrap-btn`}>
                <Link href={""}>
                  <IoSettingsOutline className="text-2xl" />
                </Link>
                <h1>Setting</h1>
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  dispatch(toggleTheme())
                }}
                className={`${styles.HamToggleBtn} wrap-btn`}
              >
                {darkMode ? <MdOutlineDarkMode className="text-2xl" /> : <MdSunny className="text-2xl" />}
                <h1>Theme</h1>
              </button>
            </li>
            <li>
              <button className={`${styles.HamToggleBtn} wrap-btn`}>
                <Link href={""}>
                  <HiMiniLanguage className="text-2xl" />
                </Link>
                <h1>Language</h1>
              </button>
            </li>
            <li>
              <button className={`${styles.HamToggleBtn} wrap-btn`}>
                <Link href={""}>
                  <FaMusic className="text-2xl" />
                </Link>
                <h1>Music Background</h1>
              </button>
            </li>
            <hr className="my-2" />
            <li>
              <button className={`${styles.HamToggleBtn} wrap-btn`}>
                <Link href={""}>
                  <MdLogout className="text-2xl" />
                </Link>
                <h1>Log out</h1>
              </button>
            </li>
          </ul>
        </section>

      </section>
    </nav>
  )
}

export default NavBar