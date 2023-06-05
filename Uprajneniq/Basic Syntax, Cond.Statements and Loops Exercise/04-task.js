function vacation(numberOfPeople,group,dayOfWeek) {
    const PRICES = {
    Friday: {
      Students: 8.45,
      Business: 10.90,
      Regular: 15
    },
    Saturday: {
      Students: 9.80,
      Business: 15.60,
      Regular: 20
    },
    Sunday: {
      Students: 10.46,
      Business: 16,
      Regular: 22.50
    }
  };
  // prices.Friday (dot access)
  const basePrice = PRICES[dayOfWeek][group];
  
  let totalPrice = basePrice * numberOfPeople;
  
  if (group === "Students" && numberOfPeople >= 30) {
    totalPrice *= 0.85; 
  } else if (group === "Business" && numberOfPeople >= 100) {
    totalPrice -= basePrice * 10; 
  } else if (group === "Regular" && numberOfPeople >= 10 && numberOfPeople <= 20) {
    totalPrice *= 0.95; 
  }
  
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
  
}
vacation (
    30,
    "Students",
    "Sunday")