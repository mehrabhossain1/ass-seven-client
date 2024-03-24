import { Carousel } from "antd";
import { CSSProperties } from "react";

const TopDonorTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      message:
        "I am happy to contribute to such a noble cause. Keep up the great work!",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Jane Smith",
      message:
        "It feels amazing to be part of this community. Together, we can make a difference!",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Jane Smith",
      message:
        "It feels amazing to be part of this community. Together, we can make a difference!",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Jane Smith",
      message:
        "It feels amazing to be part of this community. Together, we can make a difference!",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Jane Smith",
      message:
        "It feels amazing to be part of this community. Together, we can make a difference!",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Jane Smith",
      message:
        "It feels amazing to be part of this community. Together, we can make a difference!",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div style={styles.container} className="bg-gray-100">
      <h2 className="mt-10 text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">
        Our Top Donors
      </h2>
      <div style={styles.carouselContainer}>
        <Carousel autoplay>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={styles.testimonial}>
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                style={styles.userImage}
              />
              <p>{testimonial.message}</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const styles: {
  container: CSSProperties;
  carouselContainer: CSSProperties;
  testimonial: CSSProperties;
  userImage: CSSProperties;
} = {
  container: {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
  carouselContainer: {
    margin: "auto",
    maxWidth: "600px",
    height: "auto",
    overflow: "hidden",
  },
  testimonial: {
    padding: "20px",
    background: "#f0f0f0",
    borderRadius: "8px",
    textAlign: "center",
  },
  userImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default TopDonorTestimonials;
