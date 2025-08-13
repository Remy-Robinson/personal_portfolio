export const sidebarVariants = {
    open : (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        }
    }),

    closed: {
        clipPath: `circle(40px at 40px 40px)`,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

export const menuItemVariants = {
    open:{
        y:0,
        opacity:1,
        transition:{
            y:{stiffness: 1000, velocity: -100},
            duration: 0.2

        }
    },
    closed :{
        y:30,
        opacity:0,
        transition:{
            y:{stiffness: 1000},
            duration: 0.2

        }
    }
}

export const navItems = [
    {id: 1, title: "Home", path: "/"},
    {id: 2, title: "About", path: "/about"},
    {id: 3, title: "Projects", path: "/projects"},
    {id: 4, title: "Contact", path: "/contact"}
]

export const navVariants = {
    open:{
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed :{
        transition: {staggerChildren: 0.05, delayChildren: -1}
    }
}