import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const BottomFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
            <ul>
              <li className="mt-2">Ongoing Projects</li>
              <li className="mt-2">Different Types Of Charity</li>
              <li className="mt-2">Donate</li>
              <li className="mt-2">How Your Donation Works</li>
              <li className="mt-2">Privacy Policy</li>
              <li className="mt-2">Terms and Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <FaTiktok />
              <FaInstagram />
              <FaYoutube />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>&copy; 2023 All Rights Reserved. Charity No: 1156200</p>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
