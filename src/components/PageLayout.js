import { Main } from "next/document"
import SiteHead from "./partials/head"

export default function PageLayout({ children }) {
    return (
        <>
            <header>Header</header>
            <main>
                <SiteHead />
                {children}
            </main>
            <footer>Footer</footer>
        </>
    )
}
