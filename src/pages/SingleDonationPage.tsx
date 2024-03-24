/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Button, Modal, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Donation {
  _id: string;
  image: string;
  category: string;
  title: string;
  amount: number;
  description: string;
}

const SingleDonationPage = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [donation, setDonation] = useState<Donation | null>(null);
  const [showDonateModal, setShowDonateModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/donations/${id}`)
      .then((res) => res.json())
      .then((data) => setDonation(data.donation));
  }, [id]);
  console.log(donation);

  const handleDonate = async (values: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit donation");
      }

      navigate("/dashboard/donations");
      console.log("Donation submitted successfully:", values);

      setShowDonateModal(false);
    } catch (error) {
      console.error("Error submitting donation:", error);
    }
  };

  return (
    <div className="mt-20">
      {donation && (
        <div>
          <div className="flex justify-center mb-4">
            <Button
              type="primary"
              className="bg-green-500 hover:!bg-transparent hover:!text-green-500 hover:!transition-all border-green-500"
              onClick={() => setShowDonateModal(true)}
            >
              Donate Now
            </Button>
          </div>
          <Card
            key={donation?._id}
            className="my-20"
            hoverable
            cover={<img alt="example" src={donation?.image} />}
          >
            <div className="text-center">
              <p className="text-4xl font-bold pb-3 text-green-500">
                {donation?.title}
              </p>
              <p className="text-2xl italic pb-3">{donation?.description}</p>
              <p className="text-xl font-semibold">
                Category: {donation?.category}
              </p>
              <p className="text-xl font-semibold">
                <span className="text-green-700">{donation?.amount}$</span>
              </p>
            </div>
          </Card>
          <Modal
            title="Donate Now"
            visible={showDonateModal}
            onCancel={() => setShowDonateModal(false)}
            footer={null}
          >
            <Form onFinish={handleDonate}>
              <Form.Item
                label="Image"
                name="image"
                rules={[
                  { required: true, message: "Please provide the image URL" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please enter the donation title",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Please enter the donation category",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Amount"
                name="amount"
                rules={[
                  {
                    required: true,
                    message: "Please enter the donation amount",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please enter the donation description",
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  className="bg-green-500"
                  htmlType="submit"
                >
                  Submit Donation
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default SingleDonationPage;
