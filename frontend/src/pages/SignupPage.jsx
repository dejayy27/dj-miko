import { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      console.log(res.data);
      alert("Signup successful!");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.message || "Signup failed!");
    }
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: "hidden"
    },
    leftSection: {
      flex: 1,
      background: "linear-gradient(135deg, #8B5FBF, #6A5AF9)",
      color: "white",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    },
    logo: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center"
    },
    tagline: {
      fontSize: "1rem",
      marginBottom: "15px",
      maxWidth: "300px",
      opacity: 0.9
    },
    features: {
      textAlign: "left",
      maxWidth: "280px"
    },
    feature: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px"
    },
    featureIcon: {
      fontSize: "1rem",
      marginRight: "10px",
      background: "rgba(255, 255, 255, 0.1)",
      padding: "6px",
      borderRadius: "6px",
      minWidth: "30px"
    },
    featureText: {
      margin: "0 0 3px 0",
      fontSize: "0.9rem"
    },
    featureSubtext: {
      margin: 0,
      fontSize: "0.75rem",
      opacity: 0.8
    },
    rightSection: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "15px",
      background: "#F8F7FF"
    },
    signupForm: {
      width: "100%",
      maxWidth: "280px",
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(106, 90, 249, 0.15)",
      border: "1px solid rgba(106, 90, 249, 0.1)"
    },
    formTitle: {
      fontSize: "1.2rem",
      marginBottom: "15px",
      color: "#6A5AF9",
      textAlign: "center",
      fontWeight: "700"
    },
    formGroup: {
      marginBottom: "12px"
    },
    input: {
      width: "100%",
      padding: "10px 12px",
      border: "1.5px solid #E8E6FF",
      borderRadius: "8px",
      fontSize: "0.85rem",
      transition: "all 0.2s ease",
      background: "#FCFBFF"
    },
    submitBtn: {
      width: "100%",
      padding: "10px",
      background: "linear-gradient(135deg, #8B5FBF, #6A5AF9)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease",
      marginTop: "8px"
    },
    divider: {
      textAlign: "center",
      margin: "12px 0",
      position: "relative",
      color: "#888",
      fontSize: "0.75rem"
    },
    dividerLine: {
      position: "absolute",
      top: "50%",
      left: "0",
      right: "0",
      height: "1px",
      background: "#E8E6FF"
    },
    dividerText: {
      background: "white",
      padding: "0 8px"
    },
    socialButtons: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      marginBottom: "12px"
    },
    socialBtn: {
      padding: "8px",
      border: "1.5px solid #E8E6FF",
      borderRadius: "6px",
      background: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 0.2s ease",
      fontSize: "0.8rem",
      fontWeight: "500"
    },
    loginLink: {
      textAlign: "center",
      marginTop: "12px",
      fontSize: "0.75rem",
      color: "#666"
    },
    link: {
      color: "#6A5AF9",
      textDecoration: "none",
      fontWeight: "600",
      marginLeft: "4px"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <div style={styles.logo}>
          <span style={{marginRight: "8px", fontSize: "1.5rem"}}>✍️</span>
          PenSpace
        </div>
        <div style={styles.tagline}>
          Where your stories come to life
        </div>
        <div style={styles.features}>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>📝</span>
            <div>
              <h3 style={styles.featureText}>Write & Publish</h3>
              <p style={styles.featureSubtext}>Share your stories</p>
            </div>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>📖</span>
            <div>
              <h3 style={styles.featureText}>Discover Stories</h3>
              <p style={styles.featureSubtext}>Find amazing reads</p>
            </div>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>💬</span>
            <div>
              <h3 style={styles.featureText}>Connect & Discuss</h3>
              <p style={styles.featureSubtext}>Join the community</p>
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.rightSection}>
        <div style={styles.signupForm}>
          <h2 style={styles.formTitle}>Join PenSpace</h2>
          
          <div style={styles.socialButtons}>
            <button 
              style={styles.socialBtn}
              onMouseOver={(e) => {
                e.target.style.background = "#F8F7FF";
                e.target.style.borderColor = "#6A5AF9";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "white";
                e.target.style.borderColor = "#E8E6FF";
              }}
            >
              <span style={{marginRight: "6px"}}>📘</span>
              Facebook
            </button>
            <button 
              style={styles.socialBtn}
              onMouseOver={(e) => {
                e.target.style.background = "#F8F7FF";
                e.target.style.borderColor = "#6A5AF9";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "white";
                e.target.style.borderColor = "#E8E6FF";
              }}
            >
              <span style={{marginRight: "6px"}}>🔍</span>
              Google
            </button>
          </div>
          
          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>or with email</span>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6A5AF9";
                  e.target.style.background = "white";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#E8E6FF";
                  e.target.style.background = "#FCFBFF";
                }}
              />
            </div>
            
            <div style={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6A5AF9";
                  e.target.style.background = "white";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#E8E6FF";
                  e.target.style.background = "#FCFBFF";
                }}
              />
            </div>
            
            <div style={styles.formGroup}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6A5AF9";
                  e.target.style.background = "white";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#E8E6FF";
                  e.target.style.background = "#FCFBFF";
                }}
              />
            </div>
            
            <button 
              type="submit" 
              style={styles.submitBtn}
              onMouseOver={(e) => e.target.style.opacity = "0.9"}
              onMouseOut={(e) => e.target.style.opacity = "1"}
            >
              Create Account
            </button>
          </form>
          
          <div style={styles.loginLink}>
            Already have an account? 
            <a href="#" style={styles.link}>Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;