import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "./Container";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    alert("You have been logged out!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="shadow-lg rounded-md w-full sticky top-0 z-10 bg-white"
    >
      <Container>
        <div className=" h-16 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ fontSize: "1.2rem" }}
          >
            <Link className="font-semibold" to="/">
              Unity<span className="text-green-500">Aid</span>
            </Link>
          </motion.div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link className="font-semibold" to="/donations">
                Donations
              </Link>
            </motion.div>
            {user ? (
              <>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link className="font-semibold" to="/dashboard">
                    Dashboard
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Button
                    onClick={handleLogout}
                    style={{ marginLeft: 10 }}
                    className="btn font-semibold hover:!bg-red-500 hover:!text-white !border-red-500 hover:transition-all text-red-500"
                  >
                    Logout Button
                  </Button>
                </motion.div>
              </>
            ) : (
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <Link className="font-semibold" to="/login">
                  <Button
                    style={{ marginLeft: 10 }}
                    className="btn hover:!bg-green-500 hover:!text-white !border-green-500 hover:transition-all text-green-500"
                  >
                    Login Button
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Navbar;
