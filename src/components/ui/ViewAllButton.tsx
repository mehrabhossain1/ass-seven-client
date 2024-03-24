import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ViewAllButton = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/donations");
  };

  return (
    <div className="text-center">
      <Button
        onClick={handleViewAll}
        className="btn w-[50%] h-10 mx-auto hover:!bg-green-500 hover:!text-white !border-green-500 hover:transition-all text-green-500"
      >
        View All
      </Button>
    </div>
  );
};

export default ViewAllButton;
