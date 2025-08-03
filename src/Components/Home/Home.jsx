import React from "react";

function Home() {
  return (
    <>
      {/* Enhanced Welcome Section */}
      <section
        id="welcome"
        className="relative w-full mb-24 text-center py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Icon/Avatar area */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-8 drop-shadow-sm">
            Welcome!
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl text-gray-700 leading-relaxed mb-6 font-light">
              Hello! I'm{" "}
              <span className="font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
                Archit Anand
              </span>
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Welcome to my personal homepage. I'm excited to share more about
              myself and my work with you.
            </p>
          </div>

          {/* Call to action */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Learn More About Me</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium px-8 py-4 border-2 border-gray-300 hover:border-blue-600 rounded-full"
            >
              <span>View My Work</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced About Me Section */}
      <section
        id="about"
        className="relative w-full mb-24 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-16 lg:p-24 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full -translate-y-48 translate-x-48 opacity-5"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] z-10">
          {/* Enhanced Image Section */}
          <div className="relative w-full md:w-1/2 flex-shrink-0 flex justify-center">
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

              <img
                src="https://www.ismartrecruit.com/upload/blog/main_image/6_ways_to_find_and_hire_developers_at_a_low_cost.jpg"
                alt="About Me - Archit Anand"
                className="relative rounded-3xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Text Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6 md:mx-0 mx-auto">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 md:hidden">
                About Me
              </h2>
              <h2 className="hidden md:block text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
                About Me
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-xl md:text-2xl text-center md:text-left">
                I'm{" "}
                <span className="font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
                  Archit Anand
                </span>
                , a passionate developer who loves to build creative and
                impactful web applications.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg md:text-xl text-center md:text-left">
                I enjoy learning new technologies and turning ideas into
                reality. My expertise spans across AI/ML, web development, and
                cloud technologies.
              </p>

              {/* Skills/Technologies */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  AI/ML
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  Django
                </span>
                <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  Cloud
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    6+
                  </div>
                  <div className="text-gray-600 text-sm">Projects</div>
                </div>
                {/* <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">
                    2+
                  </div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div> */}
                <div className="text-center md:text-left col-span-2 md:col-span-1">
                  <div className="text-2xl md:text-3xl font-bold text-green-600">
                    5+
                  </div>
                  <div className="text-gray-600 text-sm">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section
        id="projects"
        className="w-full mb-24 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-0 md:p-16 lg:p-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my latest work in AI, Machine Learning, and Web
              Development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Project 1 - T5 Summarization */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    AI/ML
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-sm text-green-600 font-medium">
                      Live
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                  T5 Text Summarization
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced abstractive text summarization using T5 Transformer
                  with LoRA optimization for efficient training and resource
                  usage.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    Transformers
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    Streamlit
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/architanand8986/Finetuned-T5-small-for-Text-Summarization.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>
                  <a
                    href="https://finetuned-t5-small-for-text-summarization-avaz6v29rrkn4bctyjs4.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Project 2 - PDFTalk */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    RAG/LLM
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-sm text-green-600 font-medium">
                      Live
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                  PDFTalk - Conversational RAG
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Interactive PDF chat application using LangChain for
                  context-aware responses and session-based conversation
                  history.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    LangChain
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    RAG
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    Streamlit
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/architanand8986/PDFTalk-Conversational-RAG-using-Langchain.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>
                  <a
                    href="https://pdftalk-conversational-rag-using-langchain-8pyyc7gkupynhn9znzl.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* AI Cloud Auto Scaling */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  Cloud/AI
                </span>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
                AI Cloud Auto Scaling
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                AI-driven cloud resource scheduler with predictive CPU usage
                analysis and dynamic allocation.
              </p>
              <a
                href="https://github.com/architanand8986/AI-Based-Cloud-Resource-Auto-Scaling-System.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium"
              >
                <span>View Project</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* AutoML WebLab */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                  Django/ML
                </span>
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">
                AutoML WebLab
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Django platform for automated ML model training, evaluation, and
                deployment with user-friendly interface.
              </p>
              <a
                href="https://github.com/architanand8986/AutoML-WebLab.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                <span>View Project</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Heart Disease Prediction */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                  Healthcare
                </span>
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">
                Heart Disease Prediction
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Logistic regression model for predicting heart disease risk
                using patient health parameters.
              </p>
              <a
                href="https://github.com/architanand8986/Heart-Diseases-Prediction.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
              >
                <span>View Project</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Portfolio */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  React
                </span>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-700 transition-colors">
                Personal Portfolio
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Modern React portfolio showcasing skills, projects, and
                professional journey with responsive design.
              </p>
              <a
                href="https://github.com/architanand8986/My-Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium"
              >
                <span>View Project</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="w-full mb-24 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-0 md:p-16 lg:p-24"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-6">
              <svg
                className="w-7 h-7 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6l4 2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Some of my recent certifications in AI, ML, and Cloud
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Google Certifications */}
            <a
              href="https://coursera.org/share/bb7d0ad3b9502aaa10980802b0f51e33"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition-all"
            >
              {/* Google Icon */}
              <svg className="w-8 h-8" viewBox="0 0 48 48">
                <g>
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.54 0 6.7 1.22 9.2 3.23l6.9-6.9C35.7 2.13 30.2 0 24 0 14.82 0 6.73 5.8 2.69 14.1l8.06 6.26C12.3 13.7 17.7 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.1 24.6c0-1.64-.15-3.22-.43-4.74H24v9.04h12.4c-.54 2.9-2.18 5.36-4.64 7.04l7.18 5.6C43.98 37.1 46.1 31.4 46.1 24.6z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.75 28.14A14.5 14.5 0 019.5 24c0-1.44.25-2.84.7-4.14l-8.06-6.26A23.97 23.97 0 000 24c0 3.8.9 7.4 2.5 10.6l8.25-6.46z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 48c6.2 0 11.4-2.05 15.2-5.6l-7.18-5.6c-2 1.4-4.6 2.2-8.02 2.2-6.3 0-11.6-4.2-13.5-10.06l-8.25 6.46C6.73 42.2 14.82 48 24 48z"
                  />
                </g>
              </svg>
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                Google Cloud: Introduction to Large Language Models
              </span>
            </a>
            <a
              href="https://coursera.org/share/f2b5afd4099c14904cfd52f882b83b31"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition-all"
            >
              {/* Google Icon */}
              <svg className="w-8 h-8" viewBox="0 0 48 48">
                <g>
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.54 0 6.7 1.22 9.2 3.23l6.9-6.9C35.7 2.13 30.2 0 24 0 14.82 0 6.73 5.8 2.69 14.1l8.06 6.26C12.3 13.7 17.7 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.1 24.6c0-1.64-.15-3.22-.43-4.74H24v9.04h12.4c-.54 2.9-2.18 5.36-4.64 7.04l7.18 5.6C43.98 37.1 46.1 31.4 46.1 24.6z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.75 28.14A14.5 14.5 0 019.5 24c0-1.44.25-2.84.7-4.14l-8.06-6.26A23.97 23.97 0 000 24c0 3.8.9 7.4 2.5 10.6l8.25-6.46z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 48c6.2 0 11.4-2.05 15.2-5.6l-7.18-5.6c-2 1.4-4.6 2.2-8.02 2.2-6.3 0-11.6-4.2-13.5-10.06l-8.25 6.46C6.73 42.2 14.82 48 24 48z"
                  />
                </g>
              </svg>
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                Google Cloud: Introduction to Generative AI
              </span>
            </a>
            <a
              href="https://coursera.org/share/99e7dc800ae611b186a12c719994aff2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition-all"
            >
              {/* Google Icon */}
              <svg className="w-8 h-8" viewBox="0 0 48 48">
                <g>
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.54 0 6.7 1.22 9.2 3.23l6.9-6.9C35.7 2.13 30.2 0 24 0 14.82 0 6.73 5.8 2.69 14.1l8.06 6.26C12.3 13.7 17.7 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.1 24.6c0-1.64-.15-3.22-.43-4.74H24v9.04h12.4c-.54 2.9-2.18 5.36-4.64 7.04l7.18 5.6C43.98 37.1 46.1 31.4 46.1 24.6z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.75 28.14A14.5 14.5 0 019.5 24c0-1.44.25-2.84.7-4.14l-8.06-6.26A23.97 23.97 0 000 24c0 3.8.9 7.4 2.5 10.6l8.25-6.46z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 48c6.2 0 11.4-2.05 15.2-5.6l-7.18-5.6c-2 1.4-4.6 2.2-8.02 2.2-6.3 0-11.6-4.2-13.5-10.06l-8.25 6.46C6.73 42.2 14.82 48 24 48z"
                  />
                </g>
              </svg>
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                Google AI Essentials
              </span>
            </a>
            {/* DeepLearning.AI Certifications */}
            <a
              href="https://coursera.org/share/02328d7cb0b1892931892071fd2cb94c"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition-all"
            >
              {/* DeepLearning.AI Icon */}
              <svg className="w-8 h-8" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#072A60" />
                <text
                  x="16"
                  y="22"
                  textAnchor="middle"
                  fontSize="15"
                  fill="#fff"
                  fontFamily="Arial, Helvetica, sans-serif"
                >
                  DL
                </text>
              </svg>
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                Supervised Machine Learning: Regression and Classification
              </span>
            </a>
            <a
              href="https://coursera.org/share/9ff0fa2f66dceb84e16271381068e5c4"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition-all"
            >
              {/* DeepLearning.AI Icon */}
              <svg className="w-8 h-8" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#072A60" />
                <text
                  x="16"
                  y="22"
                  textAnchor="middle"
                  fontSize="15"
                  fill="#fff"
                  fontFamily="Arial, Helvetica, sans-serif"
                >
                  DL
                </text>
              </svg>
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                Advanced Learning Algorithms
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Me Section */}
      <section
        id="contact"
        className="relative w-full text-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

        <div className="relative max-w-4xl mx-auto z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Let's Connect
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Ready to collaborate on something amazing?
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Feel free to reach out via email or check out my GitHub. I'm always
            excited to discuss new opportunities and innovative projects.
          </p>

          {/* Enhanced Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:archit8986@gmail.com"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Send Email</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="https://github.com/architanand8986"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View GitHub</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/archit-anand8986"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
              </svg>
              <span>LinkedIn</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Social Links or Additional Info */}
          <div className="flex justify-center items-center space-x-6 text-gray-500">
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">Based in India</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm">Usually responds within 24h</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
