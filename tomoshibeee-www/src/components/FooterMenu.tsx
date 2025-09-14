import { FiPhone, FiMail, FiTwitter, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

function FooterMenu() {
  return (
    <footer className="fixed bottom-0 left-0 bg-gray-100 p-6">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-md mx-auto">
        <a href="tel:+819012345678" className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-100">
          <FiPhone className="text-2xl mb-2 text-blue-600" />
          Call
        </a>
        <a href="mailto:shoko@example.com" className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-100">
          <FiMail className="text-2xl mb-2 text-red-600" />
          Email
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-100">
          <FiTwitter className="text-2xl mb-2 text-blue-400" />
          Twitter
        </a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-pink-200">
          <FiInstagram className="text-2xl mb-2 text-pink-500" />
          Instagram
        </a>
        <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-gray-200">
          <FiGithub className="text-2xl mb-2" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-200">
          <FiLinkedin className="text-2xl mb-2 text-blue-700" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default FooterMenu;
