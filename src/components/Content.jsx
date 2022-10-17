import ImageOne from '../assets/videos/about.f7f2e208.mp4';
import ImageTwo from '../assets/images/solution.394cf534.svg';

function Content() {
  return (
    <>
      <div className="menu-card flex flex-col w-full border-t-2">
        <h2 className="text-2xl text-center mb-2">Problem</h2>
        <div className="flex flex-row">
          <video autoPlay loop className='flex-1 w-32'>
            <source src={ImageOne} type="video/mp4" />
          </video>
          <p className="mb-2 self-center pl-1.5 flex-1 w-32">
            Performing experiments is one of the most important way a student
            learns and acquies hands on knowledge in school and universities.
          </p>
        </div>
      </div>
      <div className="menu-card flex flex-col w-full mt-4 border-t-2">
        <h2 className="text-2xl text-center mb-2">Solution</h2>
        <div className="flex flex-row-reverse">
          <img
            src={ImageTwo}
            alt="egg"
            className="flex-1 w-32 rounded mb-2 shadow"
          />
          <p className="flex-1 w-32 self-center pl-1.5 mb-2">
            A web based application that streamlines the experimentation
            workflow by digitising test steps, post processing of the test data
            and automatic report generation. The Testrunz also provides
            capability for the students and teachers to collaborate in real
            time.
          </p>
        </div>
      </div>
    </>
  );
}

export default Content;
