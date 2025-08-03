import React from "react";

export default function Home() {
  return (
    <>
      {/* Welcome Section */}
      <section
        id="welcome"
        className="w-full mb-24 text-center py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 mb-8 drop-shadow-lg">
            Welcome!
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Hello! I'm{" "}
            <span className="font-bold text-blue-700">Archit Anand</span>.
            Welcome to my personal homepage. I'm excited to share more about
            myself and my work with you.
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="w-full mb-24 bg-gray-50 rounded-2xl p-0 md:p-16 lg:p-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24 min-h-[350px] md:min-h-[400px] lg:min-h-[500px] px-6">
          {/* Image with overlay */}
          <div className="relative w-full md:w-1/2 flex-shrink-0 flex justify-center">
            <img
              src="https://www.ismartrecruit.com/upload/blog/main_image/6_ways_to_find_and_hire_developers_at_a_low_cost.jpg"
              alt="About Me"
              className="rounded-2xl w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 md:hidden text-center">
              About Me
            </h2>

            <p className="text-gray-700 leading-relaxed text-xl md:text-2xl text-center md:text-left">
              I'm <span className="font-bold">Archit Anand</span>, a passionate
              developer who loves to build creative and impactful web
              applications. I enjoy learning new technologies and turning ideas
              into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full mb-24 bg-gray-50 rounded-2xl p-0 md:p-16 lg:p-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center tracking-tight">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Project Card 1 - Finetuned-T5-small-for-Text-Summarization */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow flex flex-col items-start min-h-[320px]">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Finetuned-T5-small-for-Text-Summarization
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                This project focuses on abstractive text summarization using the
                T5 Transformer architecture enhanced with LoRA (Low-Rank
                Adaptation) to minimize training time and resource usage.
              </p>
              <div
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-blue-600 hover:underline font-semibold text-lg"
              >
                <a href="https://github.com/architanand8986/Finetuned-T5-small-for-Text-Summarization.git">
                  View Project
                </a>
                <br />
                <a href="https://finetuned-t5-small-for-text-summarization-avaz6v29rrkn4bctyjs4.streamlit.app/">
                  Go live
                </a>
              </div>
            </div>

            {/* Project Card 2 - PDFTalk */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow flex flex-col items-start min-h-[320px]">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                PDFTalk App
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                This Project enables users to interact with uploaded PDFs,
                retrieve context-aware responses, and maintain session-based
                chat history.
              </p>
              <div
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-blue-600 hover:underline font-semibold text-lg"
              >
                <a href="https://github.com/architanand8986/PDFTalk-Conversational-RAG-using-Langchain.git">
                  View Project
                </a>
                <br />
                <a href="https://pdftalk-conversational-rag-using-langchain-8pyyc7gkupynhn9znzl.streamlit.app/">
                  Go live
                </a>
              </div>
            </div>

            {/* Project Card 3 - AI-Based-Cloud-Resource-Auto-Scaling-System */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow flex flex-col items-start min-h-[320px]">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                AI Based Cloud Resource Auto Scaling System
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                This project deploys an AI-driven cloud resource auto-scheduler
                designed to predict server CPU usage on a cloud environment and
                dynamically adjust resource allocation.
              </p>
              <a
                href="https://github.com/architanand8986/AI-Based-Cloud-Resource-Auto-Scaling-System.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-blue-600 hover:underline font-semibold text-lg"
              >
                View Project
              </a>
            </div>

            {/* Project Card 4 - AutoML-WebLab */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow flex flex-col items-start min-h-[320px]">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                AutoML WebLab
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                In this Django based application users can upload datasets,
                train machine learning models, evaluate their performance, and
                download trained models for future use.
              </p>
              <a
                href="https://github.com/architanand8986/AutoML-WebLab.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-blue-600 hover:underline font-semibold text-lg"
              >
                View Project
              </a>
            </div>

            {/* Project Card 5 - Heart Disease Prediction */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow flex flex-col items-start min-h-[320px]">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Heart Disease Prediction
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                This project aims to predict the likelihood of heart disease in
                patients using logistic regression. By analyzing various patient
                parameters such as age, sex, and chest pain type, the model
                provides a probability score indicating the risk of heart
                disease.
              </p>
              <a
                href="https://github.com/architanand8986/Heart-Diseases-Prediction.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-blue-600 hover:underline font-semibold text-lg"
              >
                View Project
              </a>
            </div>

            {/* Project Card 6 - Portfolio */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow flex flex-col items-start min-h-[320px]">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Personal Portfolio
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                My personal portfolio website showcasing my skills, projects,
                and professional journey.
              </p>
              <a
                href="https://github.com/architanand8986/My-Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-blue-600 hover:underline font-semibold text-lg"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section
        id="contact"
        className="w-full text-center bg-blue-50 rounded-lg p-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out via email or check out my GitHub:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:archit8986@gmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Email
            </a>
            <a
              href="https://github.com/architanand8986"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
