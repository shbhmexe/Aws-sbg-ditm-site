import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  metadataBase: new URL("https://awssbgl-ditm.in"),
  title: "AWS SBGL DITM",
  description:
    "Official website of AWS Student Builder Group (AWS SBGL) at Delhi Institute of Technology and Management (DITM), Sonipat, Haryana. Fostering cloud computing, AWS architectural skills, technical workshops, and community innovation.",
  keywords: [
    "AWS SBGL", "AWS Student Builder Group", "DITM", "AWS Sonipat", "Cloud Computing",
    "Amazon Web Services", "DITM Haryana", "Engineering Student Club", "AWS Community", "Cloud Certifications",
  ],
  authors: [{ name: "AWS SBGL DITM" }],
  robots: "index, follow",
  alternates: { canonical: "https://awssbgl-ditm.in/" },
  icons: { icon: "/assets/program-icon-BAvjs2YY.png" },
  openGraph: {
    type: "website",
    siteName: "AWS SBGL DITM",
    title: "AWS Student Builder Group - DITM",
    description:
      "Official student community for Amazon Web Services at Delhi Institute of Technology and Management. Hands-on cloud workshops, hackathons, and certifications.",
    url: "https://awssbgl-ditm.in/",
    images: ["/og-image.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Student Builder Group - DITM",
    description:
      "Official student community for Amazon Web Services at Delhi Institute of Technology and Management. Hands-on cloud workshops, hackathons, and certifications.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#232f3e",
};

const noFlashTheme = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

const revealBootstrap = `if('IntersectionObserver' in window){document.documentElement.classList.add('reveal-ready')}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body>
        <ThemeProvider>
          <div className="app-container">
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
            <ScrollToTop />
            <ScrollReveal />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
