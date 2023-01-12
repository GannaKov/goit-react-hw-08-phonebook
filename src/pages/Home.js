import catImg from '../images/cat.png';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 30,
  },
  img: { width: 200 },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>This is the best phonebook in the world</h1>
      <img style={styles.img} src={catImg} alt="cat" />
    </div>
  );
}
