import { Link } from 'react-router-dom';
import notFoundImage from '../assets/4042.jpg';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen">
    
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-between px-6 sm:px-8 md:px-16 py-10 sm:py-12">
        
        <div className="flex flex-col justify-center mt-60">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Page not found!</h1>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Please, go back to the previous page or go to the{' '}
            <Link to="/" className="underline text-blue-600">
              Main Page
            </Link>.
          </p>

      
        </div>

        
        <div className="mt-10 sm:mt-12 text-xs text-gray-400">
          <p>If you believe this is an error, please contact support.</p>
          <p className="mt-2">© 2025 SafeMeds. All rights reserved.</p>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${notFoundImage})` }}></div>
    </div>
  );
};

export default NotFoundPage;
