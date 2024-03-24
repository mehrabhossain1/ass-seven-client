/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDonationPost = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/donations",
        values
      );
      console.log(response.data);
      alert("Donation Created");
      navigate("/dashboard/donations");
    } catch (error) {
      console.error("Error creating donation:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <div className="h-screen">
      <Form
        name="create_donation"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="flex flex-col"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please input the category!" }]}
        >
          <Input placeholder="Category" />
        </Form.Item>

        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: "Please input the amount!" }]}
        >
          <Input placeholder="Amount" />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please input the image URL!" }]}
        >
          <Input placeholder="Image URL" />
        </Form.Item>

        <Form.Item>
          <Button className="bg-green-500 text-white" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateDonationPost;
