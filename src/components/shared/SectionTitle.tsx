interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div style={styles.container}>
      <h2>{title}</h2>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontSize: "40px",
    textAlign: "center",
    marginTop: "40px",
  },
};

export default SectionTitle;
