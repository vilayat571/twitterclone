function Twitterlogo() {

    const twitterUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png?20220821125553"

    return (
        <div className="mt-1 ml-1 mb-4 rounded-full flex justify-center items-center w-12 h-12 hover:bg-gray-lightness">
            <img src={twitterUrl} alt="twitter logo" className="w-8 h-6 rotate-8" />
        </div>
    )
}

export default Twitterlogo
