import Home from "./components/Home";

const App = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8 px-2">
            <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-5xl flex flex-col items-center">
                <div className="text-center mb-8">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-3 drop-shadow-lg">
                        AI Image Enhancer
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium">
                        Upload your image and let AI enhance it in seconds!
                    </p>
                </div>

                <Home />

                <div className="w-full border-t border-gray-200 mt-10 pt-4 flex flex-col items-center">
                    <span className="text-xs text-gray-400">Powered By <span className="font-semibold text-gray-600">@Nitish</span></span>
                </div>
            </div>
        </div>
    );
};

export default App;
