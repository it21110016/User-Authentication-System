const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "100px", fontSize: "3rem" }}>
        <h1>Welcome to My App</h1>
        <p style={{ fontSize: "1.5rem", marginTop: "30px" }}>Please login to continue.</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
      <p style={{ marginTop: "50px" }}>
        <a href="/user-profile" style={{ fontSize: "1.2rem", color: "blue", textDecoration: "underline" }}>
          Go to User Dashboard
        </a>
      </p>
      <p style={{ marginTop: "20px" }}>
        <a href="/admin-dashboard" style={{ fontSize: "1.2rem", color: "blue", textDecoration: "underline"}}>
          Go to Admin Dashboard
        </a>
      </p>
      </div>
    </div>
  );
};

export default Home;
