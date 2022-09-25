const Layout = ({ children }) => {
    return (
        <div className='flex lg:flex-row md:flex-col sm:flex-col min-h-screen mx-auto max-7xl'>
            {children}
        </div>
    )
}

export default Layout;