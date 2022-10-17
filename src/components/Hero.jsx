import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-1xl font-black mb-14">
        Digital experimentation
      </h1>
      <Link
        className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce"
        to="/signup"
      >
        Get Started{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </Link>
      <ul class="text-yellow-400 backdrop-blur-md bg-white/30	list-disc my-5">
        <li>Students carry out experiments with predefined experiments.</li>
        <li>Streamlines the experimentation and learning process.</li>
        <li>Free up the students to focus on the insights.</li>
        <li>Give the opportunity to gain practical and industry experience.</li>
        <li>Enables seamless collaboration between students and teachers.</li>
      </ul>
      <p class="text-yellow-400 backdrop-blur-md bg-white/30 underline decoration-1">
        A web based application that streamlines the experimentation workflow by
        digitising test steps, post processing of the test data and automatic
        report generation.
      </p>
    </div>
  );
}

export default Hero;
