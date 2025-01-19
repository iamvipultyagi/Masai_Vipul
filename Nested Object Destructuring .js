const user = {
    id: 123,
    profile: {
      name: "John Doe",
      address: {
        city: "Los Angeles",
        zipcode: "90001"
      }
    }
  };
console.log(`User ${user.profile.name || "Information not available"} (ID: ${user.id || "Information not available"}) lives in ${user.profile.address.city} (ZIP: ${user.profile.address.zipcode})`)