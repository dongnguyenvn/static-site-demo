const Container = ({children}) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container max-w-2xl mx-auto pt-16">{children}</div>
        </div>
    )
}

export default Container
