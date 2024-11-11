'use client'

import { X, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface SlideContent {
  title: string
  description: string
  link?: {
    text: string
    url: string
  }
}

function SlideSection({
  id,
  title,
  slides,
  className = "",
}: {
  id?: string
  title: string
  slides: SlideContent[]
  className?: string
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}<span className="text-[#e94560]">.</span>
        </h2>
        <div className="relative">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-64 w-full md:h-96">
              <div className="absolute inset-0 bg-[#16213e] bg-opacity-20">
                <div className="h-full w-full bg-gradient-to-br from-[#16213e] to-[#0f3460]" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">{slides[currentSlide].title}</h3>
              <p className="text-lg text-white">{slides[currentSlide].description}</p>
              {slides[currentSlide].link && (
                <Link
                  href={slides[currentSlide].link.url}
                  className="inline-block rounded-md border-2 border-[#0f3460] px-6 py-2 text-base font-medium text-white transition-colors hover:bg-[#16213e] hover:text-white"
                >
                  {slides[currentSlide].link.text}
                </Link>
              )}
            </div>
          </div>
          <button
            onClick={previousSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-[#1a1a2e]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-[#1a1a2e]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#0f3460]" : "bg-[#16213e]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg bg-[#1a1a2e] p-6 text-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-[#e94560]"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
        <div className="space-y-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md bg-[#0077b5] px-4 py-2 text-center font-medium text-white hover:bg-[#006699]"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="block rounded-md bg-[#e94560] px-4 py-2 text-center font-medium text-white hover:bg-[#d63d57]"
          >
            Send an Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const workSlides: SlideContent[] = [
    {
      title: "Entrepreneurship",
      description: "Founded and scaled multiple successful ventures in technology and innovation sectors, focusing on sustainable growth and market impact.",
      link: { text: "View Projects", url: "#projects" }
    },
    {
      title: "Military Service",
      description: "Served with distinction, developing leadership skills and strategic planning capabilities in high-pressure environments.",
      link: { text: "Learn More", url: "#military" }
    },
    {
      title: "LED Technology",
      description: "Pioneered developments in LED technology and lighting solutions, contributing to energy-efficient innovations.",
      link: { text: "See Impact", url: "#led" }
    }
  ]

  const educationSlides: SlideContent[] = [
    {
      title: "Academic Excellence",
      description: "Graduated with honors in Computer Science, specializing in artificial intelligence and machine learning.",
    },
    {
      title: "Professional Development",
      description: "Completed advanced certifications in project management and leadership from top institutions.",
    },
    {
      title: "Technical Training",
      description: "Mastered multiple programming languages and frameworks through intensive bootcamps and workshops.",
    }
  ]

  const coolThingsSlides: SlideContent[] = [
    {
      title: "Adventure Seeker",
      description: "Climbed Mount Kilimanjaro and completed multiple marathon runs across different continents.",
    },
    {
      title: "Tech Innovator",
      description: "Developed an AI-powered solution that won multiple innovation awards and recognition.",
    },
    {
      title: "Community Leader",
      description: "Founded a tech mentorship program that has helped over 100 aspiring developers start their careers.",
    }
  ]

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#1a1a2e] px-6 py-4 md:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <svg
              className="h-8 w-8 text-[#0f3460]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11h-13L12 6z" />
            </svg>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-base"
            >
              MENU
            </button>
          </div>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-block rounded-md border-2 border-[#0f3460] px-6 py-2 text-base font-medium text-white transition-colors hover:bg-[#16213e] hover:text-white"
          >
            GET IN TOUCH
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1a1a2e]">
          <div className="flex h-full flex-col items-center justify-center space-y-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-6 top-4"
            >
              <X className="h-6 w-6" />
            </button>
            <a href="#work" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Work</a>
            <a href="#education" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#cool-things" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Cool Things</a>
            <button
              onClick={() => {
                setIsContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-2xl"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      <main className="pt-20">
        {/* Home Section */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                  Hi, my<br />name is Robb<span className="text-[#e94560]">.</span>
                </h1>
                <p className="text-lg leading-relaxed text-white md:text-xl">
                  I'm an <span className="font-semibold">independent creative developer</span> based in
                  Austin, Texas.
                </p>
              </div>
              <div className="relative h-64 w-full md:h-96">
                <div className="absolute inset-0 bg-[#16213e] bg-opacity-20">
                  <div className="h-full w-full bg-gradient-to-br from-[#16213e] to-[#0f3460]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <SlideSection id="work" title="My Work" slides={workSlides} />

        {/* Education Section */}
        <SlideSection id="education" title="Education" slides={educationSlides} />

        {/* Cool Things Section */}
        <SlideSection id="cool-things" title="Cool Things About Me" slides={coolThingsSlides} />

        {/* Build Together Section */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let's build something better, together<span className="text-[#e94560]">.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white">
                I'm always interested in hearing about new projects and opportunities to create meaningful impact.
              </p>
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-block rounded-md border-2 border-[#0f3460] px-6 py-2 text-base font-medium text-white transition-colors hover:bg-[#16213e] hover:text-white"
              >
                Get in touch
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#16213e] px-6 py-4 text-sm text-[#0f3460] md:px-12">
        © MMXXIV. All rights reserved.
      </footer>

      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}