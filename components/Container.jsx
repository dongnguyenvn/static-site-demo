const Container = ({children}) => {
    return (
        <div className="bg-gray-50 min-h-screen px-6">
            <div className="container max-w-2xl mx-auto py-16">{children}</div>
        </div>
    )
}

export default Container
