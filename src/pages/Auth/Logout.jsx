import React from 'react'

const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    setIsLoading(true);

    if (!refreshToken) {
      console.error("No refresh token found");
      // alert("An error occurred: " + error.message);
      alert("No refresh token found. ");
      return;
    }

    try {
      const response = await fetch(
        "https://tlbc-platform-api.onrender.com/api/logout/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;

        try {
          errorData = JSON.parse(errorText);
        } catch {
          throw new Error("An unknown error occurred");
        }

        // Extract the first error message
        const firstErrorMessage = Object.values(errorData).flat()[0];
        throw new Error(firstErrorMessage);
      }

      if (response.ok) {
        console.log("Logged out successfully");
        localStorage.removeItem("refreshToken"); // Clear the token on logout
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error details:", error);
      alert("An error occurred: " + error.message);
    } finally {
      setIsLoading(false);
    }
    setShowLogoutModal(false);
  };

function Logout() {
  return (
    <div>


    
    
    
    </div>
  )
}

export default Logout