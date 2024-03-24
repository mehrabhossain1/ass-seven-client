import { Button, Card } from "antd";
import { Link } from "react-router-dom";

interface Donation {
  _id: string;
  image: string;
  category: string;
  title: string;
  amount: number;
  description: string;
  timestamp: string;
}

interface DonationCardProps {
  donations: Donation;
}

const DonationCard: React.FC<DonationCardProps> = ({ donations }) => {
  console.log(donations);

  return (
    <Card
      hoverable
      cover={
        <div style={{ overflow: "hidden" }}>
          <img
            className="hover:scale-105 transition-all"
            alt="example"
            src={donations.image}
          />
        </div>
      }
    >
      <p className="font-bold my-2 text-xl">{donations.title}</p>
      <p className="line-clamp-2">{donations.description}</p>
      <p className="mt-2">
        <span className="font-semibold">Category:</span> {donations.category}
      </p>
      <p className="font-semibold">Value: {donations.amount}$</p>
      <div className="card-button mt-4">
        <Link to={`/donations/${donations._id}`}>
          <Button className="btn text-white w-full bg-green-500 hover:!bg-transparent hover:!text-green-500 hover:transition-all !border-green-500 ">
            View Detail
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default DonationCard;
