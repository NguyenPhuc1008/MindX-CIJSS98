
const NavItem = ({ item }) => {
    const { lable, icon, active } = item
    return (
        <li className={`flex p-2 justify-end items-center cursor-pointer ${active ? `bg-primary text-white` : ``} `}>
            <h3 className='mr-2'>{lable}</h3>
            {icon}
        </li >
    )
}

export default NavItem
