import { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Spray Lee - Frontend Developer & Creative Coder",
  description:
    "Personal website of Spray Lee, a passionate frontend developer and creative coder building innovative web experiences.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
