import LargeFeatureCards from "@/app/components/LargeFeatureCards";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="h-full bg-[#EBF3F6] font-montserrat ">
      <Nav />
      <div className="m-auto w-[90%] md:w-[80%]">
        <Title primary={"USE CASE"} secondary={"WHAT WE DO"} />
        <LargeFeatureCards
          title={"CONTENT , MODERATION"}
          details={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
          }
          imgLink={"/assets/Content_moderation_side 1.png"}
        />
        <LargeFeatureCards
          title={"COMPUTER , VISION"}
          details={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
          }
          left={true}
          imgLink={
            "/assets/90576computer-vision-and-image-processing1642421266 1.png"
          }
        />
        <LargeFeatureCards
          title={"NATURAL LANGUAGE, PROCESING"}
          details={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
          }
          imgLink={
            "/assets/5-Amazing-Examples-Of-Natural-Language-Processing-NLP-In-Practice-1200x639 1.png"
          }
        />
      </div>
      <Footer />
    </main>
  );
}
