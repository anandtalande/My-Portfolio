import Encryption from "@/components/main/Android";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import NewSkills from "@/components/main/NewSkills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-03">
        <Hero />
        <NewSkills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
