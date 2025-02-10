import HomePage from "@/components/HomePage";
import SkillPage from "@/components/SkillPage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import GitHubContributions from "@/components/GithubContributions";

export default function Home() {
  return (
   <div className="min-h-screen">
    <HomePage />
    <SkillPage />
    <Projects />
    <Contact />
    <Footer />
   </div>
  );
}
