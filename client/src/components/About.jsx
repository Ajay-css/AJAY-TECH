import React from "react";
import Testimonials from "./Testimonials";

const cardsData = [
  {
    image: "https://avatars.githubusercontent.com/u/1?v=4",
    name: "Ajay",
    handle: "@ajay_technologies",
    date: "Feb 2026",
    text: "Built powerful MERN apps with smooth UI & premium animations."
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    date: "May 10, 2025",
    text: "One of the cleanest dashboards I’ve ever used."
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=60",
    name: "Jordan Lee",
    handle: "@jordantalks",
    date: "June 5, 2025",
    text: "Smooth, minimal & professional UI experience."
  },
];

const About = () => {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Trusted Voices</h2>
        <p className="text-muted-foreground mt-3">
          What developers & clients say about Ajay Technologies
        </p>
      </div>

      <Testimonials cards={cardsData} />
    </section>
  );
};

export default About;
