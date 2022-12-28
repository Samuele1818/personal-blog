const switchTheme = () => {
    if (localStorage.theme === 'dark' || localStorage.theme == null) {
        document.documentElement.classList.remove('dark')
        localStorage.theme = "light"
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = "dark"
    }
}

export default switchTheme