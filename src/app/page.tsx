import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import NewArrival from "./components/NewArrival";
import TopSelling from "./components/TopSelling";
import DressStyle from "./components/DressStyle";

export default function Home() {
  return (
    <div>
      <Hero />
      <Logo/>
      <NewArrival />
      <TopSelling />
      <DressStyle />
      <Reviews/>
    </div>
  );
}
