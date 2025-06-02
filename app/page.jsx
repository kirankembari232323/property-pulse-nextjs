import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/database";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function Home() {
  console.log("Home Page", process.env.MONGODB_URI);
  connectDB();
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </div>
  );
}
