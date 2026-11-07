import DoomCodex from "@/components/about/DoomCodex";

export const metadata = {
  title: "About | AWS Student Builder Group - DITM",
  description:
    "Democratizing Amazon Web Services for student builders at Delhi Institute of Technology & Management through hands-on builds, serverless architecture, and peer-driven tech-sorcery.",
};

export default function AboutPage() {
  return (
    <main className="about-page" id="main-content">
      <DoomCodex />
    </main>
  );
}
