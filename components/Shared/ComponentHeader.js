function ComponentHeader({data}) {
    return (
        <div className="container mx-auto bg-white p-4  shadow-sm mb-4">
            <h1 className="text-3xl text-center md:text-left font-bold text-gray-900 ">{data.title}</h1>
            <p className="text-sm text-center md:text-left  text-gray-800 ">{data.description}</p>
            
        </div>
    )
}

export default ComponentHeader
