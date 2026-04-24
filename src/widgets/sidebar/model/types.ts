export type NavHref = 
    | "/dashboard"
    | "/analytics"
    | "/events"
    | "/settings"

export type NavItem = {
    label: string
    href: NavHref
}