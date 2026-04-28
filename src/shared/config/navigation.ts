export type NavHref = 
    | "/"
    | "/analytics"
    | "/events"
    | "/settings"

export type NavItem = {
    label: string
    href: NavHref
}

export const navItems: NavItem[] = [
    {
        label: "📊 Dashboard",
        href: "/"
    },
    {
        label: "📈 Analytics",
        href: "/analytics"
    },
    {
        label: "🧾 Events",
        href: "/events"
    },
    {
        label: "⚙️ Settings",
        href: "/settings"
    },
]
