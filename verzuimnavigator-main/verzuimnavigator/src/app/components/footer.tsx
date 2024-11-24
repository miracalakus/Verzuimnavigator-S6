// components/Footer.js

const Footer = () => {
    return (
        <footer className="bg-darkblue text-white py-10 mt-4 inset-x-0 bottom-0">
            <div className="container mx-auto px-4">
                <div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Mogelijk gemaakt door</h4>
                        <ul className="flex-wrap">
                            <li className="underline hover:no-underline">Metaalunie</li>
                            <li className="underline hover:no-underline">KMUverzekeringen</li>
                            <li className="underline hover:no-underline">Mevas</li>
                            <li className="underline hover:no-underline">NVschade</li>
                            <li className="underline hover:no-underline">Zilveren Kruis</li>
                        </ul>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
