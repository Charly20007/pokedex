import PropTypes from 'prop-types';

const LoginTemplate = ({ children, title }) => {
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container mx-auto py-12 px-6 h-full">
            <div className="flex justify-center items-center h-full text-gray-800">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
                    <div className="w-full md:w-1/2 p-6 md:p-12">
                        <div className="text-center">
                            <img
                                className="mx-auto mb-4 pt-4"
                                src="https://cdn.worldvectorlogo.com/logos/svg-6.svg"
                                alt="logo"
                                width={50}
                                height={50}
                            />
                            <h4 className="text-xl font-semibold mt-1 mb-8 pb-1">
                                { title }
                            </h4>
                            { children }
                        </div>
                    </div>
                    <div className="bg-gradient w-full md:w-1/2 flex items-center justify-center p-6">
                        <div className="text-white text-center">
                            <h4 className="text-4xl font-semibold mb-6">Más que Pokemones</h4>
                            <p className="text-xl">Somos una historia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

LoginTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired
};

export default LoginTemplate