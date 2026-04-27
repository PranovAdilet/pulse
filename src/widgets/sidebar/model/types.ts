export type NavHref = 
    | "/"
    | "/analytics"
    | "/events"
    | "/settings"

export type NavItem = {
    label: string
    href: NavHref
}