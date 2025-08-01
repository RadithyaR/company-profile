import Layout from "@/components/layout";
import HeroSection from "@/views/home/Hero";
import OverView from "@/views/home/Overview";
import ProductHomeView from "@/views/home/Products";
import TestimonyView from "@/views/home/Testimony";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <OverView />
      <ProductHomeView />
      <TestimonyView />
    </Layout>
  );
}
